"use client";

import { useState } from "react";
import { CalendarDays, Mail, Phone, User, Building2 } from "lucide-react";

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
        <section id="contact" className="scroll-mt-28 bg-white py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Book an Appointment
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        Let’s Talk About Your Next Campaign
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                        Share your business details and campaign needs. Our team will review
                        your request and get back to you with the next steps.
                    </p>

                    <div className="mt-10 space-y-4">
                        <div className="flex items-center gap-3 text-slate-700">
                            <CalendarDays className="h-5 w-5 text-sky-600" />
                            Appointment scheduling support
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                            <Mail className="h-5 w-5 text-sky-600" />
                            Manager review by email
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                            <Phone className="h-5 w-5 text-sky-600" />
                            Fast response for qualified inquiries
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Full Name
                            </label>
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
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
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
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

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Email Address
                            </label>
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
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
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
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

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Message
                            </label>
                            <textarea
                                name="note"
                                value={form.note}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Tell us what you need..."
                                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}