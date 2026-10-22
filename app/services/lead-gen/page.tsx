import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import {
  Target,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Zap,
  Sparkles,
  ShieldCheck,
  Calendar,
  DollarSign,
  Building,
  Check,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B/B2C Lead Generation | Specialist Line",
  description:
    "Generate high-quality B2B and B2C leads with Specialist Line. Expert outreach, qualification, and pipeline building services including MCA and Debt Settlement leads.",
};

const features = [
  "MCA (Merchant Cash Advance) pre-screened leads",
  "Warm phone transfers directly to your closers",
  "Strict revenue & time-in-business filters",
  "B2B decision-maker list building & outreach",
  "Consumer debt relief & settlement leads",
  "Real-time CRM posting (Zapier / Webhook)",
  "Clean contact data scrubbed against DNC lists",
  "Multi-touch cadence (Phone, SMS & Email)",
];

const stats = [
  { icon: Target, value: "10K+", label: "Leads Qualified Monthly" },
  { icon: TrendingUp, value: "55%", label: "Lead-to-Call Conversion" },
  { icon: BarChart3, value: "B2B + B2C", label: "Dual Market Coverage" },
  { icon: Zap, value: "< 2 Min", label: "Live Warm Transfer Speed" },
];

const qualificationCriteria = [
  {
    title: "Monthly Gross Revenue",
    req: "$15,000 – $250,000+/mo",
    desc: "Verified through recent bank statements and merchant processing history.",
  },
  {
    title: "Time In Business",
    req: "6+ Months Registered",
    desc: "Active operational standing verified with Secretary of State records.",
  },
  {
    title: "Decision Maker Authenticated",
    req: "100% Direct Owner",
    desc: "Calls are held exclusively with the managing partner, founder, or CEO.",
  },
  {
    title: "Current Funding Position",
    req: "Zero to 3 Existing Positions",
    desc: "Confirmed debt balance and daily/weekly payment comfort.",
  },
];

export default function LeadGenPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Link
                  href="/#services"
                  className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 hover:text-sky-100"
                >
                  ← All Specialist Line Services
                </Link>

                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Targeted Pipeline Acceleration
                </div>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  High-Converting <span className="gradient-text">Lead Generation</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Fill your closers&apos; calendars with verified, high-intent prospects. We specialize in
                  both B2B campaigns and high-ticket financial niches like MCA (Merchant Cash Advance)
                  and debt resolution.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:shadow-sky-500/50"
                  >
                    <span>Launch Lead Campaign</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contacts"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Request Sample Data
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-tr from-sky-500/30 to-indigo-500/30 blur-2xl" />
                  <div className="animate-float relative flex h-60 w-60 items-center justify-center rounded-[3rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
                    <Target className="h-28 w-28 text-sky-300" strokeWidth={1.3} />
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

        {/* Interactive Qualification Framework */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Quality Assurance
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Our 4-Point Lead Screening Standard
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Every lead delivered to your sales reps must pass our rigorous vetting before transfer.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {qualificationCriteria.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-sky-400/50"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-extrabold text-cyan-300 border border-sky-500/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
                  <div className="mt-2 rounded-xl bg-sky-500/10 border border-sky-400/20 px-3 py-1.5 text-xs font-bold text-cyan-300">
                    {c.req}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-400">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Checklist Section */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Targeted Verticals
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  B2B &amp; Specialized Financial Campaigns
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Whether you need live transfers of business owners seeking growth capital or B2B
                  appointments with mid-market decision makers, our agents speak fluent English and
                  know how to navigate gatekeepers.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">MCA Live Transfers</h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-5">
                      Hot merchant transfers looking for short-term working capital or equipment financing.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">B2B SaaS &amp; Agency</h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-5">
                      C-Level and Director-level scheduled appointments tailored to your exact ICP.
                    </p>
                  </div>
                </div>
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
              Ready to Fill Your Pipeline This Week?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Set up a 30-min strategy session to define your ideal client criteria and campaign script.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <span>Book Lead Strategy Session</span>
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
