import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import {
  PhoneForwarded,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Sparkles,
  PhoneCall,
  Check,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telemarketing Services | Specialist Line",
  description:
    "Accelerate your sales pipeline with Specialist Line's professional telemarketing services. B2B and B2C cold calling, warm follow-ups, and appointment setting.",
};

const features = [
  "Custom cold calling scripts built with objection handling",
  "B2B and B2C sales outreach with real-time transfer options",
  "Warm lead qualification and appointment setting",
  "Dedicated campaign dialers with local caller ID presence",
  "Rigorous call recording and QA scoring calibrations",
  "Detailed daily contact rate and conversion analytics",
  "Seamless CRM pipeline synchronization",
  "Strict adherence to compliance and DNC registries",
];

const stats = [
  { icon: TrendingUp, value: "3.5x", label: "Pipeline Pipeline Velocity" },
  { icon: Target, value: "B2B / B2C", label: "Multi-Market Ready" },
  { icon: BarChart3, value: "Daily", label: "Transparent Reporting" },
  { icon: PhoneCall, value: "Trained", label: "Native English Speakers" },
];

export default function TelemarketingPage() {
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
                  Outbound Sales Powerhouse
                </div>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  High-Performance <span className="gradient-text">Telemarketing</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Turn cold contacts into enthusiastic buyers and booked appointments. Our persuasive,
                  fluent callers navigate gatekeepers, handle tough objections, and deliver consistent sales results.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:shadow-sky-500/50"
                  >
                    <span>Launch Outbound Campaign</span>
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
                    <PhoneForwarded className="h-28 w-28 text-sky-300" strokeWidth={1.3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section with in-house calling footage */}
        <section className="bg-slate-950 py-20 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Calling Floor Operations
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Active Outbound Teams in Real Time
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                High-energy calling environment equipped with enterprise VOIP and noise-cancelling headsets.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl">
              <div className="relative aspect-video">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/inbound-outbound.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-slate-950/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="relative bg-slate-950 py-16 border-b border-white/10">
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

        {/* Deliverables Checklist Section */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Targeted Outreach
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Sales-Driven Telemarketing Campaigns
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Our telemarketing callers are trained persuaders who understand the psychology of the phone.
                  From cold calling prospect lists to warming up inbound inquiries, we scale your pipeline
                  while maintaining the utmost brand professionalism.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Higher Conversion Rates</h3>
                      <p className="mt-1 text-xs text-slate-600">
                        Battle-tested objection handling frameworks keep prospects engaged through to the close.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Full Compliance Standard</h3>
                      <p className="mt-1 text-xs text-slate-600">
                        TCPA and DNC registry scrubbed dialing to protect your business reputation.
                      </p>
                    </div>
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
              Ready to Accelerate Outbound Sales?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Schedule a strategy call to review your target market and get sample outbound scripts.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <span>Book Outbound Strategy Session</span>
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
