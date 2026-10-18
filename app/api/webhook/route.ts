import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { supabase } from "@/lib/supabaseClient";
import {
    escapeHtml,
    getFromEmail,
    getManagerEmails,
    getResendClient,
} from "@/lib/email";

export async function GET() {
    return NextResponse.json({
        ok: true,
        message: "Calendly webhook endpoint is active",
        admin_configured: !!supabaseAdmin,
    });
}

export async function POST(req: Request) {
    try {
        const payload = await req.json();

        const eventType =
            payload?.event ||
            payload?.event_type ||
            payload?.payload?.event_type ||
            "calendly_event";

        const inviteeName =
            payload?.payload?.name ||
            payload?.payload?.invitee?.name ||
            payload?.payload?.invitee_name ||
            payload?.invitee_name ||
            "Unknown";

        const inviteeEmail =
            payload?.payload?.email ||
            payload?.payload?.invitee?.email ||
            payload?.payload?.invitee_email ||
            payload?.invitee_email ||
            "Unknown";

        const scheduledAt =
            payload?.payload?.scheduled_event?.start_time ||
            payload?.payload?.start_time ||
            payload?.payload?.scheduled_at ||
            payload?.scheduled_at ||
            null;

        const client = supabaseAdmin || supabase;

        if (client) {
            const { error } = await client.from("calendly_bookings").insert([
                {
                    event_type: eventType,
                    invitee_name: inviteeName,
                    invitee_email: inviteeEmail,
                    scheduled_at: scheduledAt,
                    raw_payload: payload,
                },
            ]);

            if (error) {
                console.error("Failed to insert Calendly booking to Supabase:", error);
            }
        }

        // Send email notification to manager(s)
        const resend = getResendClient();
        const managerEmails = getManagerEmails();
        const from = getFromEmail();

        if (resend && managerEmails.length && from) {
            try {
                await resend.emails.send({
                    from,
                    to: managerEmails,
                    subject: `New Calendly Booking: ${inviteeName}`,
                    replyTo: inviteeEmail !== "Unknown" ? inviteeEmail : undefined,
                    html: `
            <h2>New Calendly Appointment Booked</h2>
            <p><strong>Invitee Name:</strong> ${escapeHtml(inviteeName)}</p>
            <p><strong>Invitee Email:</strong> ${escapeHtml(inviteeEmail)}</p>
            <p><strong>Event:</strong> ${escapeHtml(eventType)}</p>
            <p><strong>Scheduled Time:</strong> ${escapeHtml(String(scheduledAt ?? "Not provided"))}</p>
            <hr style="margin:20px 0; border:0; border-top:1px solid #e2e8f0;"/>
            <p><strong>Details:</strong></p>
            <pre style="background:#f8fafc; padding:12px; border-radius:8px; font-size:12px; overflow:auto;">${escapeHtml(
                JSON.stringify(payload, null, 2)
            )}</pre>
          `,
                });
            } catch (emailErr) {
                console.error("Failed to send manager notification email:", emailErr);
            }
        }

        return NextResponse.json({ ok: true, message: "Booking processed successfully" });
    } catch (err) {
        const message = err instanceof Error ? err.message : "Webhook error";
        console.error("Webhook processing error:", err);
        return NextResponse.json({ ok: false, error: message }, { status: 400 });
    }
}