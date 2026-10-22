import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import Link from "next/link";
import {
  BadgeCheck,
  Clock3,
  Handshake,
  Heart,
  Leaf,
  MapPin,
  Mail,
  Phone,
  Users2,
  Building2,
  Sparkles,
  ShieldCheck,
  Wifi,
  Server,
  Lock,
  ArrowRight,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Specialist Line – 24/7 Global BPO & Outsourcing Partner",
  description:
    "Discover Specialist Line, your premier call center and BPO service provider based in Dhaka, Bangladesh. Empowering US, UK, and global businesses with 24/7 dedicated virtual support.",
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const mission = [
  {
    icon: Heart,
    title: "Our Mission",
    description:
      "To empower businesses by providing reliable, efficient, and cost-effective virtual support services, ensuring operational excellence, rapid scalability, and customer delight.",
  },
  {
    icon: Leaf,
    title: "Our Vision",
    description:
      "To be the premier virtual support & lead generation partner for businesses worldwide, helping companies of all sizes scale without the burden and overhead of local domestic hiring.",
  },
  {
    icon: Handshake,
    title: "Our Values",
    description:
      "Integrity, rigorous QA standards, punctuality, and mutual growth drive everything we do. We treat your company like our own—because your success is our success.",
  },
];

const infrastructure = [
  {
    icon: Wifi,
    title: "Redundant Fiber ISP",
    desc: "Dual high-speed dedicated leased lines with automated hot-failover ensures zero dropped calls.",
  },
  {
    icon: Server,
    title: "100% Power Generator Backup",
    desc: "Uninterruptible Power Supply (UPS) plus industrial on-site generators guarantee 24/7/365 uptime.",
  },
  {
    icon: Lock,
    title: "Data Security & Compliance",
    desc: "Clean-desk policy, encrypted CRM connections, non-disclosure agreements, and strict data privacy standards.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated QA & Floor Supervision",
    desc: "Real-time call monitoring, weekly scoring calibrations, and native English communication coaching.",
  },
];

const team = [
  {
    name: "MD Boni",
    role: "Founder & Managing Director",
    description:
      "Visionary leader with deep expertise in BPO floor management, international call center operations, and client acquisition.",
    facebook: "https://www.facebook.com/specialistline.office/",
    linkedin: "https://www.linkedin.com/company/specialistline",
  },
  {
    name: "Alex Amit",
    role: "Head of Operations",
    description:
      "Specialist in workflow optimization, agent training frameworks, and ensuring seamless SLA delivery for all overseas clients.",
    facebook: "https://www.facebook.com/specialistline.office/",
    linkedin: "https://www.linkedin.com/company/specialistline",
  },
];

const industries = [
  "MCA & Business Funding",
  "Fintech & Banking",
  "E-Commerce & Retail",
  "Healthcare & Telehealth",
  "Real Estate & Property",
  "SaaS & Technology",
  "Insurance Services",
  "Legal & Document Processing",
  "Logistics & Dispatch",
  "Digital Marketing Agencies",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Inside Specialist Line
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              We Are Your <span className="gradient-text">2nd Office!</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Specialist Line is a premier BPO, telemarketing, and virtual assistance provider based in
              Dhaka, Bangladesh. We bridge world-class operational talent with ambitious businesses
              across the United States, United Kingdom, and global markets.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-sky-500/25 transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.06),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Guiding Principles
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Purpose-Led. Results-Driven.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Built from the ground up to provide seamless second-office capabilities.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {mission.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-[2rem] border border-slate-200 bg-slate-50/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-500/10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure & Security Section */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Operational Foundation
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Built on Enterprise-Grade Infrastructure
              </h2>
              <p className="mt-4 text-base text-slate-300">
                We invest in top-tier technology and facility security so your outsourced operations
                run with zero interruptions.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {infrastructure.map((inf) => {
                const Icon = inf.icon;
                return (
                  <div
                    key={inf.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-cyan-300 border border-sky-500/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{inf.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{inf.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership & Operations Team */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Leadership Team
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                The People Behind Your 2nd Office
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Hands-on operational leaders committed to your success.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:max-w-3xl lg:mx-auto">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-50/70 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-600/30">
                    <span className="text-2xl font-black">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-sky-600">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{member.description}</p>
                  <div className="mt-6 flex justify-center gap-3">
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Industry Expertise
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Versatile Across High-Growth Sectors
              </h2>
              <p className="mt-4 text-base text-slate-300">
                From fast-paced fintech & MCA funding to e-commerce support, our workflows
                adapt directly to your compliance and performance standards.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-white/15"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 py-20 text-white">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Upgrade Your Operations?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-sky-100">
              Schedule a free 30-minute discovery call with our team. We’ll break down your current
              workflows and provide a clear, customized staffing roadmap.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <span>Book Free Discovery Session</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Directly
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