import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { supabase } from "@/lib/supabaseClient";

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
            null;

        const inviteeEmail =
            payload?.payload?.email ||
            payload?.payload?.invitee?.email ||
            payload?.payload?.invitee_email ||
            null;

        const scheduledAt =
            payload?.payload?.scheduled_event?.start_time ||
            payload?.payload?.start_time ||
            payload?.payload?.scheduled_at ||
            null;

        const client = supabaseAdmin || supabase;

        if (!client) {
            return NextResponse.json(
                {
                    ok: false,
                    error:
                        "Supabase is not configured. Please set SUPABASE_SERVICE_ROLE_KEY in .env.local",
                },
                { status: 500 }
            );
        }

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
            return NextResponse.json(
                { ok: false, error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true, message: "Booking saved successfully" });
    } catch (err) {
        const message = err instanceof Error ? err.message : "Webhook error";
        console.error("Webhook processing error:", err);
        return NextResponse.json({ ok: false, error: message }, { status: 400 });
    }
}