import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import { GraduationCap, CheckCircle2, ArrowRight, Star, Users, TrendingUp, BookOpen, Sparkles, Play } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training & Coaching | Specialist Line",
  description:
    "Elevate your team's performance with Specialist Line's professional training and coaching programs. Custom sales training, call center coaching, and leadership development.",
};

const features = [
  "Sales objection handling & active listening",
  "Call center agent rapid onboarding frameworks",
  "Accent neutralization & clear communication",
  "Customer service empathy & de-escalation",
  "Team leadership & supervisor coaching",
  "Live call shadowing & playback analysis",
  "Weekly quality assurance scorecards",
  "Continuous KPI improvement loops",
];

const stats = [
  { icon: TrendingUp, value: "40%+", label: "Performance Uplift" },
  { icon: Users, value: "500+", label: "Agents Trained" },
  { icon: Star, value: "Custom", label: "Tailored Frameworks" },
  { icon: BookOpen, value: "Weekly", label: "Coaching Cadence" },
];

export default function TrainingCoachingPage() {
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
                  Staff Development
                </div>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  Training &amp; <span className="gradient-text">Coaching</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Unlock the full potential of your team. Our expert training and coaching programs are
                  designed to sharpen communication skills, master sales psychology, and drive measurable conversions.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:shadow-sky-500/50"
                  >
                    <span>Get Started</span>
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
                    <GraduationCap className="h-28 w-28 text-sky-300" strokeWidth={1.3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase - Real employee training video */}
        <section className="bg-slate-950 py-20 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Inside the Classroom
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Real Training in Action
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Watch how we train our in-house specialists to deliver peak performance on every call.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl">
              <div className="relative aspect-video">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/employee-training.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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

        {/* Approach Section */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Our Methodology
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Custom Programs. Measurable Results.
                </h2>
                <p className="mt-6 text-base leading-7 text-slate-600">
                  Great teams are built, not found. Our training programs are customized to your industry,
                  product, and current team level. Whether you&apos;re onboarding new agents or upskilling senior
                  staff, we have the curriculum to elevate your conversion rates.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  We combine theory with practical role play, live coaching sessions, and ongoing
                  feedback loops—ensuring lasting performance improvements across all client touchpoints.
                </p>
              </div>

              <div className="grid gap-3.5">
                {features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:border-sky-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
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
              Build a High-Performance Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Invest in your team&apos;s growth with our custom training and coaching programs.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <span>Schedule a Training Consultation</span>
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
