import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import {
  ArrowLeftRight,
  CheckCircle2,
  ArrowRight,
  Clock,
  BarChart3,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inbound & Outbound Calling | Specialist Line",
  description:
    "Complete inbound and outbound calling solutions by Specialist Line. Handle customer inquiries, drive outbound campaigns, and manage every call professionally.",
};

const features = [
  "Inbound call handling & routing",
  "Order taking & processing",
  "Customer inquiry resolution",
  "Outbound sales & follow-up calls",
  "Appointment setting & reminders",
  "Survey & feedback collection",
  "Automated IVR integration support",
  "Call recording & quality monitoring",
];

const stats = [
  { icon: Headphones, value: "Inbound", label: "Reactive Support" },
  { icon: ArrowLeftRight, value: "Outbound", label: "Proactive Outreach" },
  { icon: Clock, value: "24/7", label: "Around the Clock" },
  { icon: BarChart3, value: "Full", label: "Reporting Suite" },
];

export default function InboundOutboundPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-bg relative overflow-hidden py-20 text-white md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Link
                  href="/#services"
                  className="mb-5 inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-100"
                >
                  ← All Services
                </Link>

                <span className="animate-fade-up inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  Calling Services
                </span>

                <h1 className="animate-fade-up delay-100 mt-5 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  Inbound & Outbound{" "}
                  <span className="gradient-text">Calling</span>
                </h1>

                <p className="animate-fade-up delay-200 mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                  A complete calling solution for your business. Whether customers are calling in or
                  we&apos;re calling out on your behalf — we handle it all professionally.
                </p>

                <div className="animate-fade-up delay-300 mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-700"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contacts"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="animate-float flex h-44 w-44 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur md:h-52 md:w-52 lg:h-56 lg:w-56">
                  <ArrowLeftRight
                    className="h-20 w-20 text-sky-300 md:h-24 md:w-24 lg:h-28 lg:w-28"
                    strokeWidth={1.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section is now first */}
        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
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
                </video>

                <div className="absolute inset-0 bg-slate-950/35" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section is now placed under the video */}
        <section className="relative bg-slate-950 pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="animate-scale-in rounded-[1.5rem] border border-white/8 bg-white/5 p-6 text-center backdrop-blur"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Icon className="mx-auto h-7 w-7 text-sky-400" />
                    <p className="mt-3 text-3xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-400">
                      {stat.label}
                    </p>
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
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  Both Directions
                </span>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Complete Call Center Coverage
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Inbound Calling",
                      desc: "Receive and handle customer calls, inquiries, orders, and support requests with professionalism.",
                    },
                    {
                      title: "Outbound Calling",
                      desc: "Proactively reach out to leads, prospects, and existing customers to drive action.",
                    },
                    {
                      title: "Blended Campaigns",
                      desc: "Agents switch between inbound and outbound based on call volume for optimal efficiency.",
                    },
                    {
                      title: "Full Reporting",
                      desc: "Comprehensive call analytics, recordings, and performance dashboards.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {features.map((f, i) => (
                  <div
                    key={f}
                    className="animate-fade-up flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:-translate-x-1 hover:border-sky-300 hover:bg-white hover:shadow-md"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-indigo-700 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Every Call Handled Perfectly
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Let us be the voice of your brand — inbound and outbound, 24/7.
            </p>
            <Link
              href="/book-appointment"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Schedule a Meeting <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}