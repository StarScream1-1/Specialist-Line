"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface CalendlyEmbedProps {
    url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
    const [scheduled, setScheduled] = useState(false);

    useEffect(() => {
        function handleMessage(e: MessageEvent) {
            // Calendly sends window message events for widget interactions
            if (e.data && e.data.event === "calendly.event_scheduled") {
                setScheduled(true);

                // Send the scheduled event to our webhook endpoint
                fetch("/api/webhook", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        event: "calendly.event_scheduled",
                        payload: e.data.payload,
                    }),
                }).catch((err) => {
                    console.error("Failed to forward scheduled event to webhook:", err);
                });
            }
        }

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <div className="relative w-full">
            {scheduled && (
                <div className="m-4 flex items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-900 shadow-sm animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                    <div>
                        <p className="font-semibold text-emerald-900">
                            Appointment Confirmed!
                        </p>
                        <p className="text-sm text-emerald-700">
                            Your session has been scheduled and recorded in Supabase. We look forward to meeting you!
                        </p>
                    </div>
                </div>
            )}
            <div className="h-[860px] w-full bg-white">
                <iframe
                    src={url}
                    title="Book an appointment with Specialist Line"
                    className="h-full w-full"
                    frameBorder="0"
                />
            </div>
        </div>
    );
}
