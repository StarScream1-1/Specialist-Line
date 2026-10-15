import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import { Shield, CheckCircle2, ArrowRight, Clock, Zap, Star, Headphones } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24/7 Technical Support | Specialist Line",
  description:
    "Round-the-clock technical support services by Specialist Line. Resolve customer issues fast with our expert technical support agents.",
};

const features = [
  "24/7/365 helpdesk & technical support",
  "Multi-tier support (L1, L2, L3)",
  "Software & hardware troubleshooting",
  "SaaS & app support",
  "Remote desktop assistance",
  "Ticket management & resolution tracking",
  "Knowledge base & FAQ management",
  "Escalation protocols & SLA compliance",
];

const stats = [
  { icon: Clock, value: "24/7", label: "Always On Support" },
  { icon: Zap, value: "< 2 min", label: "Avg Response Time" },
  { icon: Star, value: "99%", label: "Issue Resolution Rate" },
  { icon: Headphones, value: "Multi-tier", label: "Support Levels" },
];

export default function TechSupportPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Link href="/#services" className="mb-6 inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-100">← All Services</Link>
                <span className="animate-fade-up inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">Technical Support</span>
                <h1 className="animate-fade-up delay-100 mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  24/7 <span className="gradient-text">Technical Support</span>
                </h1>
                <p className="animate-fade-up delay-200 mt-6 text-lg leading-8 text-slate-300">
                  Keep your customers happy and your product running smoothly with our around-the-clock
                  technical support team. We resolve issues fast, at any hour.
                </p>
                <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-4">
                  <Link href="/book-appointment" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-700">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contacts" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="animate-float flex h-56 w-56 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                  <Shield className="h-28 w-28 text-sky-300" strokeWidth={1.2} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-slate-950 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="animate-scale-in rounded-[1.5rem] border border-white/8 bg-white/5 p-6 text-center backdrop-blur" style={{ animationDelay: `${i * 100}ms` }}>
                    <Icon className="mx-auto h-7 w-7 text-sky-400" />
                    <p className="mt-3 text-3xl font-extrabold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm font-medium text-slate-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.06),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">What we offer</span>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Never Leave Your Customers in the Dark</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Technical issues don&apos;t follow a 9-to-5 schedule. Our agents are available 24/7 to
                  troubleshoot, diagnose, and resolve any technical problems your users encounter —
                  keeping your churn low and satisfaction high.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We support SaaS platforms, e-commerce tech stacks, hardware issues, network
                  troubleshooting, software bugs, and more.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {features.map((f, i) => (
                  <div key={f} className="animate-fade-up flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:-translate-x-1 hover:border-sky-300 hover:bg-white hover:shadow-md" style={{ animationDelay: `${i * 60}ms` }}>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />
                    <span className="text-sm font-medium text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 p-8 text-center">
                <div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-600/20 ring-2 ring-sky-500/40">
                    <svg className="h-10 w-10 text-sky-300" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">24/7 Tech Support Demo</p>
                  <p className="mt-2 text-sm text-slate-400">Add your service video here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-indigo-700 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Never Go Dark Again</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">Partner with us for 24/7 technical support that keeps your customers satisfied and your business running.</p>
            <Link href="/book-appointment" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100">
              Schedule a Meeting <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
