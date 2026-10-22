import Link from "next/link";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import BookingRequestForm from "@/app/Components/sections/BookingRequestForm";
import CalendlyEmbed from "@/app/Components/sections/CalendlyEmbed";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import {
  CalendarDays,
  Globe,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Clock,
  CheckCircle2,
  Users,
  Video,
} from "lucide-react";

export default function BookAppointmentPage() {
  const calendlyUrl =
    "https://calendly.com/shadwanshahablp/30min?hide_gdpr_banner=1&primary_color=0ea5e9";

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Live Scheduling with Specialist Line
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Schedule Your
                <span className="block mt-1 gradient-text">Discovery Strategy Call</span>
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
                Pick a 30-minute slot that fits your schedule. Our operations team will walk through
                your operational requirements, campaign scripts, and staff integration plan.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#booking"
                  className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:shadow-sky-500/50"
                >
                  Choose a Live Time Slot ↓
                </Link>

                <Link
                  href="/contacts"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Need General Support?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Booking & Content Layout */}
        <section className="-mt-10 mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            {/* Left Column: Video & What to Expect */}
            <div className="space-y-8">
              {/* Introduction Video Showcase */}
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Inside Specialist Line
                  </p>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    Your 2nd Office In Action
                  </span>
                </div>

                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/intro.mp4" type="video/mp4" />
                    <source src="/videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Instant Confirmation
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900">
                    Google Meet &amp; Zoom Calendar Invite
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Zero Obligation
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900">
                    Free Consultation &amp; Rate Breakdown
                  </p>
                </div>
              </div>

              {/* What happens on the call */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xs">
                <h3 className="text-xl font-extrabold text-slate-900">
                  What We Cover in 30 Minutes:
                </h3>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                      1
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Campaign Scope &amp; Target Audience</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        We review your target market, daily call quotas, and qualification criteria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                      2
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Agent Matching &amp; Native English Standards</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Review sample audio clips and select dedicated agents suited for your brand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                      3
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Fast 48-Hour Rollout Schedule</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Walk away with an exact start date and complete CRM onboarding plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Calendly Embed & Alternative Form */}
            <div className="space-y-8">
              <div
                id="booking"
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
              >
                <div className="border-b border-slate-200 px-6 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                        Interactive Calendar
                      </p>
                      <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
                        Select a Date &amp; Time
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-600">
                      <Clock className="h-3.5 w-3.5 text-sky-600" />
                      <span>30-Min Strategy Call</span>
                    </div>
                  </div>
                </div>

                <CalendlyEmbed url={calendlyUrl} />
              </div>

              {/* Alternative Fallback Booking Form */}
              <div className="mt-8">
                <BookingRequestForm />
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 transition"
            >
              ← Back to Specialist Line Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionBar />
    </>
  );
}