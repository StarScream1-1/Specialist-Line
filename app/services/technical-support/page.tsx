import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Star,
  Headphones,
  Sparkles,
  Server,
  Layers,
  Cpu,
  Check,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24/7 Technical Support | Specialist Line",
  description:
    "Round-the-clock technical support services by Specialist Line. Resolve customer issues fast with our expert multi-tier technical support agents.",
};

const features = [
  "24/7/365 live helpdesk across all shifts",
  "Multi-tier troubleshooting framework (Tier 1 & Tier 2)",
  "SaaS application & cloud workflow troubleshooting",
  "API & webhook status diagnostics & ticketing",
  "Screen sharing & remote desktop assistance",
  "Zendesk, Jira, Intercom, and Freshdesk integration",
  "Continuous knowledge base & runbook authoring",
  "Strict SLA adherence with incident escalation loops",
];

const stats = [
  { icon: Clock, value: "24/7/365", label: "Round-the-Clock" },
  { icon: Zap, value: "< 90s", label: "First Response SLA" },
  { icon: Star, value: "98.8%", label: "Resolution Satisfaction" },
  { icon: Headphones, value: "L1 & L2", label: "Tiered Engineering" },
];

const supportTiers = [
  {
    tier: "Tier 1 Support",
    label: "Triage & Quick Resolves",
    desc: "Password resets, account access, UI guidance, billing questions, and common error verification.",
    sla: "< 2 Minute Response",
  },
  {
    tier: "Tier 2 Support",
    label: "Advanced Diagnostics",
    desc: "Log analysis, API troubleshooting, data discrepancy investigation, and environment replication.",
    sla: "< 15 Minute Triage",
  },
  {
    tier: "Escalation Routing",
    label: "Core Dev Hand-off",
    desc: "Complete bug reproduction steps, screen recordings, and priority tags delivered directly to your engineers.",
    sla: "Zero Noise Protocol",
  },
  {
    tier: "Documentation",
    label: "Runbook Hygiene",
    desc: "Every newly solved bug is converted into an internal SOP to speed up future resolutions.",
    sla: "Continuous Learning",
  },
];

export default function TechSupportPage() {
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
                  Zero Downtime Support
                </div>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  24/7 <span className="gradient-text">Technical Support</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Protect your product reputation at all hours. Our technical support specialists resolve
                  user tickets, diagnose software bugs, and keep your customer churn low around the clock.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:shadow-sky-500/50"
                  >
                    <span>Deploy Tech Support Pod</span>
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
                    <Shield className="h-28 w-28 text-sky-300" strokeWidth={1.3} />
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

        {/* Multi-tier Support Architecture */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Ticketing Hierarchy
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Structured Multi-Tier Escalation
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Prevent developer fatigue. We resolve the vast majority of user friction before it ever reaches your engineering team.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {supportTiers.map((t) => (
                <div
                  key={t.tier}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-sky-400/50"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    {t.tier}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{t.label}</h3>
                  <div className="mt-3 rounded-xl bg-sky-500/10 border border-sky-400/20 px-3 py-1 text-xs font-bold text-cyan-300">
                    {t.sla}
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-400">{t.desc}</p>
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
                  Always-On Coverage
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Never Leave Your Users in the Dark
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Technical glitches don’t respect 9-to-5 schedules. With Specialist Line, your international
                  customers receive prompt, empathetic troubleshooting whether it is 2 PM in New York or
                  3 AM in London.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  We integrate natively into your helpdesk tools like Zendesk, Crisp, Intercom, or Jira Service Desk.
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
              Deliver 24/7 Tech Peace of Mind
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Partner with us to provide round-the-clock technical support that protects your customer retention.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <span>Schedule a Technical Support Review</span>
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
