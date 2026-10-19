import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import {
  Headphones,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Smile,
  Star,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Care | Specialist Line",
  description:
    "Specialist Line's Customer Care service delivers exceptional support experiences that delight your customers and build lasting loyalty.",
};

const features = [
  "Inbound & Outbound call handling",
  "Multi-channel support (phone, email, chat)",
  "Complaint resolution & escalation management",
  "Customer satisfaction tracking & reporting",
  "Order processing & account management",
  "First-call resolution focus",
  "Brand-aligned communication",
  "Quality assurance & call monitoring",
];

const stats = [
  { icon: Smile, value: "97%", label: "CSAT Score Average" },
  { icon: Clock, value: "< 30s", label: "Average Answer Time" },
  { icon: Star, value: "24/7", label: "Availability" },
  { icon: BarChart3, value: "98%", label: "First-Call Resolution" },
];

export default function CustomerCarePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Link
                  href="/#services"
                  className="mb-6 inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-100"
                >
                  ← All Services
                </Link>

                <span className="animate-fade-up inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  Customer Care
                </span>

                <h1 className="animate-fade-up delay-100 mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  Exceptional{" "}
                  <span className="gradient-text">Customer Care</span>
                </h1>

                <p className="animate-fade-up delay-200 mt-6 text-lg leading-8 text-slate-300">
                  Build lasting customer relationships with our professional care team. We ensure every
                  interaction leaves your customers satisfied and your brand reputation stronger.
                </p>

                <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-4">
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
                <div className="animate-float flex h-56 w-56 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                  <Headphones className="h-28 w-28 text-sky-300" strokeWidth={1.2} />
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <source src="/videos/customer-service.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-slate-950/35" />
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
                  <div
                    key={stat.label}
                    className="animate-scale-in rounded-[1.5rem] border border-white/8 bg-white/5 p-6 text-center backdrop-blur"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
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
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  What we offer
                </span>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  World-Class Customer Support
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Our customer care agents are trained to handle every interaction with empathy, precision,
                  and professionalism. We align our communication style to your brand voice, ensuring
                  consistent and high-quality experiences for your customers.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Whether handling inquiries, complaints, refunds, or general support — your customers
                  always have a friendly expert ready to help.
                </p>
                <Link
                  href="/book-appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  Schedule a Meeting <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {features.map((f, i) => (
                  <div
                    key={f}
                    className="animate-fade-up flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:-translate-x-1 hover:border-sky-300 hover:bg-white hover:shadow-md"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />
                    <span className="text-sm font-medium text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  Who we help
                </span>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                  Businesses of All Sizes
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  From startups to established enterprises, our customer care services scale to meet
                  the needs of any business. We serve e-commerce brands, SaaS companies, healthcare
                  providers, financial services, and more.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["E-Commerce", "SaaS", "Healthcare", "Finance", "Retail", "Real Estate"].map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: "Dedicated Agents",
                    desc: "Agents assigned exclusively to your account, trained on your brand and processes.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance Tracking",
                    desc: "Regular reports on KPIs, CSAT scores, and call metrics to keep you informed.",
                  },
                  {
                    icon: Clock,
                    title: "Flexible Scheduling",
                    desc: "We operate on your schedule — day shifts, night shifts, or 24/7 coverage.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                        <Icon className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-indigo-700 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Ready to Wow Your Customers?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Let our team handle your customer care so you can focus on growing your business.
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
    </>
  );
}