"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
    Building2,
    CalendarDays,
    Clock3,
    Mail,
    Phone,
    Sparkles,
    User,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function BookingRequestForm() {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
    });

    const [status, setStatus] = useState<Status>("idle");
    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        if (!supabase) {
            setStatus("error");
            setMessage("Supabase is not configured yet.");
            return;
        }

        const { error } = await supabase.from("appointment_requests").insert([
            {
                name: form.name,
                company: form.company,
                email: form.email,
                phone: form.phone,
                preferred_date: form.preferred_date,
                preferred_time: form.preferred_time,
                message: form.message,
            },
        ]);

        if (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
            return;
        }

        await fetch("/api/notify-managers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                kind: "appointment",
                name: form.name,
                company: form.company,
                email: form.email,
                phone: form.phone,
                preferred_date: form.preferred_date,
                preferred_time: form.preferred_time,
                message: form.message,
            }),
        });

        setStatus("success");
        setMessage("Your appointment request has been sent.");
        setForm({
            name: "",
            company: "",
            email: "",
            phone: "",
            preferred_date: "",
            preferred_time: "",
            message: "",
        });
    };

    return (
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Appointment Request
                    </p>
                    <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                        Prefer to send your details?
                    </h3>
                </div>
                <Sparkles className="h-6 w-6 text-sky-600" />
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <User className="h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full bg-transparent outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Company Name
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <Building2 className="h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full bg-transparent outline-none"
                        />
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Email Address
                        </label>
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <Mail className="h-5 w-5 text-slate-400" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full bg-transparent outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Phone Number
                        </label>
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <Phone className="h-5 w-5 text-slate-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                className="w-full bg-transparent outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Preferred Date
                        </label>
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <CalendarDays className="h-5 w-5 text-slate-400" />
                            <input
                                type="date"
                                name="preferred_date"
                                value={form.preferred_date}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Preferred Time
                        </label>
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <Clock3 className="h-5 w-5 text-slate-400" />
                            <input
                                type="time"
                                name="preferred_time"
                                value={form.preferred_time}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us what you need..."
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {status === "loading"
                        ? "Sending..."
                        : "Submit Appointment Request"}
                </button>

                {message ? (
                    <p
                        className={`text-sm font-medium ${status === "success" ? "text-emerald-600" : "text-rose-600"
                            }`}
                    >
                        {message}
                    </p>
                ) : null}
            </form>
        </div>
    );
}