import { NextResponse } from "next/server";
import {
    escapeHtml,
    getFromEmail,
    getManagerEmails,
    getResendClient,
} from "@/lib/email";

type NotifyBody = {
    kind: "contact" | "appointment";
    name: string;
    company?: string;
    email: string;
    phone?: string;
    note?: string;
    preferred_date?: string;
    preferred_time?: string;
    message?: string;
};

function buildContactHtml(data: NotifyBody) {
    return `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company ?? "")}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone ?? "")}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(data.note ?? "").replaceAll("\n", "<br/>")}</p>
  `;
}

function buildAppointmentHtml(data: NotifyBody) {
    return `
    <h2>New appointment request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company ?? "")}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone ?? "")}</p>
    <p><strong>Preferred date:</strong> ${escapeHtml(data.preferred_date ?? "")}</p>
    <p><strong>Preferred time:</strong> ${escapeHtml(data.preferred_time ?? "")}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(data.message ?? "").replaceAll("\n", "<br/>")}</p>
  `;
}

export async function POST(req: Request) {
    const resend = getResendClient();
    const to = getManagerEmails();
    const from = getFromEmail();

    if (!resend || !to.length || !from) {
        return NextResponse.json(
            { ok: false, error: "Resend is not configured yet." },
            { status: 400 }
        );
    }

    const body = (await req.json()) as NotifyBody;

    const subject =
        body.kind === "contact"
            ? `New contact request from ${body.name}`
            : `New appointment request from ${body.name}`;

    const html =
        body.kind === "contact"
            ? buildContactHtml(body)
            : buildAppointmentHtml(body);

    const result = await resend.emails.send({
        from,
        to,
        subject,
        html,
        replyTo: body.email,
    });

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
}