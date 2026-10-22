"use client";

import { useState } from "react";
import {
  CalendarDays,
  Mail,
  Phone,
  User,
  Building2,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

type Status = "idle" | "loading" | "success" | "error";

const serviceChips = [
  "B2B Lead Generation",
  "MCA Live Transfers",
  "24/7 Customer Care",
  "Dedicated Virtual Assistant",
  "Cold Calling & Telemarketing",
  "24/7 Technical Support",
  "Back Office Operations",
];

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    note: "",
  });

  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const toggleChip = (chip: string) => {
    let next: string[];
    if (selectedChips.includes(chip)) {
      next = selectedChips.filter((c) => c !== chip);
    } else {
      next = [...selectedChips, chip];
    }
    setSelectedChips(next);
  };

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
      setMessage("Configuration error: Supabase client is not available.");
      return;
    }

    const fullNote = selectedChips.length > 0
      ? `[Interested in: ${selectedChips.join(", ")}]\n\n${form.note}`
      : form.note;

    const { error } = await supabase.from("contact_requests").insert([
      {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        note: fullNote,
      },
    ]);

    if (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
      return;
    }

    try {
      await fetch("/api/notify-managers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "contact",
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          note: fullNote,
        }),
      });
    } catch {
      // Notification failed but record saved
    }

    setStatus("success");
    setMessage("Thank you! Your request has been received. Our team will contact you within 2 hours.");
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      note: "",
    });
    setSelectedChips([]);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-600/20 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Sparkles className="h-3.5 w-3.5" />
            Let’s Connect
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let’s Build Your <span className="gradient-text">2nd Office</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Tell us about your campaign goals, required team size, or operational challenges.
            We will assemble a tailored proposal and rollout plan for you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Info Panel */}
          <div className="rounded-[2.25rem] border border-slate-200/90 bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10 lg:col-span-5 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Priority Response
                </p>
                <h3 className="text-xl font-bold text-white">
                  Direct Inquiries
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Need immediate assistance or have specific script criteria? Reach out directly
              to our operations coordinators.
            </p>

            <div className="mt-8 space-y-3.5">
              <a
                href="tel:+17868940005"
                className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-400 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">Direct Phone Line</p>
                  <p className="text-sm font-bold text-white">+1 786-894-0005</p>
                </div>
              </a>

              <a
                href="mailto:info@specialistline.com"
                className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-400 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">Official Inquiries</p>
                  <p className="text-sm font-bold text-white">info@specialistline.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">Operating Hours</p>
                  <p className="text-sm font-bold text-white">24/7/365 — All Timezones</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-5 text-xs text-slate-300">
              <p className="font-bold text-cyan-300 mb-1">Looking to book a direct calendar slot?</p>
              <p>Skip the form and pick a 30-min strategy call right now on our live calendar.</p>
              <a
                href="/book-appointment"
                className="mt-3 inline-flex items-center gap-1 font-bold text-sky-400 hover:text-sky-300"
              >
                Go to Calendly Booking →
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="rounded-[2.25rem] border border-slate-200/90 bg-slate-50/70 p-8 shadow-sm lg:col-span-7 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Interest Chips */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Select Services You Are Interested In:
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceChips.map((chip) => {
                    const isSelected = selectedChips.includes(chip);
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => toggleChip(chip)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-sky-600 text-white shadow-sm ring-1 ring-sky-600"
                            : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {chip}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name *
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
                    <User className="h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Company Name
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
                    <Building2 className="h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Work Email *
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone Number *
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Note / Details */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Campaign Scope or Specific Requirements
                </label>
                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Share details on your target market, daily call volume, preferred hours, or required start date..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-xs outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-600/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                <span>{status === "loading" ? "Submitting Request..." : "Send Campaign Inquiry"}</span>
              </button>

              {message && (
                <div
                  className={`flex items-start gap-3 rounded-2xl p-4 text-xs font-semibold ${
                    status === "success"
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border border-rose-200 bg-rose-50 text-rose-800"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}