import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  TrendingUp,
  MessageSquareText,
  Users2,
  TimerReset,
  ShieldCheck,
  Target,
  Calendar,
} from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Growth & Lead Gen",
    text: "Targeted B2B and MCA leads filtered for maximum closing.",
    href: "/services/lead-gen",
  },
  {
    icon: PhoneCall,
    title: "Cold Calling & Transfers",
    text: "Live merchant transfers, screening, and appointment setting.",
    href: "/services/inbound-outbound",
  },
  {
    icon: CheckCircle2,
    title: "24/7 Customer Care",
    text: "Omnichannel phone, chat, and email support for your brand.",
    href: "/services/customer-care",
  },
  {
    icon: Users2,
    title: "Back Office Operations",
    text: "Dedicated team running data entry, billing, and document checks.",
    href: "/services/back-office",
  },
  {
    icon: MessageSquareText,
    title: "Virtual Assistants",
    text: "Executive support to free up your calendar and inbox daily.",
    href: "/services/virtual-assistant",
  },
  {
    icon: TimerReset,
    title: "Social Media Growth",
    text: "Consistent content scheduling, outreach, and engagement.",
    href: "/services/social-media",
  },
  {
    icon: ShieldCheck,
    title: "24/7 IT Tech Support",
    text: "L1/L2 ticketing and CRM integration with SLA guarantees.",
    href: "/services/technical-support",
  },
  {
    icon: Target,
    title: "Telemarketing Campaigns",
    text: "Custom-scripted outbound outreach for rapid pipeline growth.",
    href: "/services/telemarketing",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_40%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 py-16">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Trusted Global BPO & Lead Generation Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            We Are Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                2nd Office!
              </span>
            </span>
            <span className="block mt-2 text-slate-100 text-3xl sm:text-4xl md:text-5xl font-bold">
              At Specialist Line.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            We seamlessly integrate into your business operations—handling everything from
            high-converting lead generation, live transfers, and 24/7 customer care to back-office
            support. Scale fast without domestic overhead.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/book-appointment"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-sky-600/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-sky-500/50 active:scale-[0.98]"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Discovery Meeting</span>
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <span>Explore All Services</span>
            </Link>
          </div>

          {/* Key Stat Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                ✓
              </div>
              <span>24/7/365 Shift Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                ✓
              </div>
              <span>48-Hour Agent Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                ✓
              </div>
              <span>Save Up to 70% Over In-House Hiring</span>
            </div>
          </div>

          {/* Infinite Running Marquee Highlights */}
          <div className="mt-14 overflow-hidden">
            <div className="hero-marquee flex w-max gap-4">
              {[...highlights, ...highlights].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={`${item.title}-${index}`}
                    href={item.href}
                    className="group w-[290px] shrink-0 rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-slate-300">
                      {item.text}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}