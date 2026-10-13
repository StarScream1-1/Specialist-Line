"use client";

import { useState } from "react";
import { CalendarDays, Mail, Phone, User, Building2, MessageSquare } from "lucide-react";

export default function Appointment() {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        note: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-slate-50 py-24 scroll-mt-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Contact Us
                    </span>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        Let’s Talk About Your Next Campaign
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Share your business details and campaign needs. Our team will review your request and get back to you with the next steps.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                                <MessageSquare className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                                    Quick Contact
                                </p>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Send us your details
                                </h3>
                            </div>
                        </div>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                            Use this form for general inquiries, campaign questions, or to request a callback from our team.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                                <CalendarDays className="h-5 w-5 text-sky-600" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Fast response</p>
                                    <p className="text-sm text-slate-600">We review requests quickly</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                                <Mail className="h-5 w-5 text-sky-600" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Email follow-up</p>
                                    <p className="text-sm text-slate-600">Managers can review messages later</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                                <Phone className="h-5 w-5 text-sky-600" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Call back support</p>
                                    <p className="text-sm text-slate-600">We can reach out if needed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-5">
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

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    name="note"
                                    value={form.note}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Tell us what you need..."
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}