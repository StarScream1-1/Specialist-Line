import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import {
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Globe,
  BarChart3,
  Zap,
  Sparkles,
  Calendar,
  Mail,
  FileSpreadsheet,
  Search,
  Check,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Assistant | Specialist Line",
  description:
    "Hire a professional, dedicated virtual assistant from Specialist Line. Executive support, scheduling, inbox management, CRM maintenance, research, and more.",
};

const features = [
  "Executive calendar management & meeting coordination",
  "Inbox zero triage, categorization & response drafting",
  "CRM data entry, hygiene & pipeline updates",
  "In-depth market research & competitive analysis",
  "Travel booking, itinerary planning & logistics",
  "Expense tracking, receipt reconciliation & billing",
  "Presentation formatting & executive report drafting",
  "Customer correspondence & feedback documentation",
];

const stats = [
  { icon: UserCheck, value: "1-on-1", label: "Dedicated Matching" },
  { icon: Clock, value: "24/7", label: "Any Shift Needed" },
  { icon: Globe, value: "Any TZ", label: "US & Global Timezones" },
  { icon: Zap, value: "48 Hrs", label: "Rapid Onboarding" },
];

const workflowSkills = [
  {
    icon: Mail,
    title: "Inbox Management",
    desc: "Filters spam, highlights priority clients, and drafts contextual replies in your brand voice.",
  },
  {
    icon: Calendar,
    title: "Executive Scheduling",
    desc: "Eliminates double bookings, manages timezones, and protects your focused working blocks.",
  },
  {
    icon: FileSpreadsheet,
    title: "CRM & Spreadsheets",
    desc: "Keeps Salesforce, HubSpot, or custom databases meticulously updated and clean.",
  },
  {
    icon: Search,
    title: "Deep Research",
    desc: "Prepares detailed prospect profiles, vendor comparisons, and market trend summaries.",
  },
];

export default function VirtualAssistantPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Link
                  href="/#services"
                  className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 hover:text-sky-100"
                >
                  ← All Services
                </Link>

                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Executive Productivity
                </div>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  Dedicated <span className="gradient-text">Virtual Assistant</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Reclaim 15+ hours every week. Our dedicated virtual assistants seamlessly integrate into
                  your daily workflow—handling administrative friction with precision, speed, and discretion.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:shadow-sky-500/50"
                  >
                    <span>Match With an Assistant</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contacts"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-tr from-sky-500/30 to-indigo-500/30 blur-2xl" />
                  <div className="animate-float relative flex h-60 w-60 items-center justify-center rounded-[3rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
                    <UserCheck className="h-28 w-28 text-sky-300" strokeWidth={1.3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="relative bg-slate-950 py-16 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
                  >
                    <Icon className="mx-auto h-6 w-6 text-sky-400" />
                    <p className="mt-3 text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Daily Workflow Modules */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Core Capabilities
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                What Your Assistant Manages Daily
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Tailored to your specific software stack: Google Workspace, Microsoft 365, Slack, Asana, Notion, and more.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workflowSkills.map((w) => {
                const Icon = w.icon;
                return (
                  <div
                    key={w.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-sky-400/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-cyan-300 border border-sky-500/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{w.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deliverables Checklist Section */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Flexibility
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Your Reliable Second Pair of Hands
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Stop spending your valuable hours on administrative tasks. Our virtual assistants are
                  skilled communicators who adapt immediately to your preferred style and operating rhythm.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Scale your hours up or down based on seasonality. No health insurance, office overhead,
                  or recruiting paperwork on your end.
                </p>
              </div>

              <div className="grid gap-3.5">
                {features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:border-sky-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-indigo-700 py-20 text-white">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Focus on Growth, We Handle the Rest
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Get matched with a dedicated virtual assistant tailored to your business needs within 48 hours.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <span>Hire Your Dedicated VA</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}
