"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Headset,
  PhoneForwarded,
  Target,
  ShieldCheck,
  PhoneCall,
  UserCheck,
  FileCheck,
  GraduationCap,
  Share2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Marquee from "../ui/Marquee";

const categories = ["All", "Voice & Calls", "Lead Generation", "Virtual & Back Office", "Growth & Training"];

const services = [
  {
    icon: Headset,
    badge: "24/7 Support",
    category: "Voice & Calls",
    title: "Customer Care",
    subtitle: "Delight your customers with 24/7 round-the-clock support",
    description:
      "In-house support is expensive and time-consuming. We provide omnichannel phone, chat, and email support tailored to your brand voice so you retain happy clients effortlessly.",
    href: "/services/customer-care",
  },
  {
    icon: PhoneForwarded,
    badge: "High ROI",
    category: "Voice & Calls",
    title: "Telemarketing Service",
    subtitle: "Turn cold prospects into booked meetings and closed deals",
    description:
      "Struggling to connect with your ideal customers? Our battle-tested telemarketers have the experience and communication skills to turn cold leads into closed sales.",
    href: "/services/telemarketing",
  },
  {
    icon: Target,
    badge: "Popular",
    category: "Lead Generation",
    title: "B2B/B2C Lead Gen",
    subtitle: "Generate qualified, high-intent leads tailored to your ICP",
    description:
      "Specialized in MCA and B2B lead generation. Our agents screen prospects according to your exact qualification criteria, delivering hot opportunities directly to your team.",
    href: "/services/lead-gen",
  },
  {
    icon: ShieldCheck,
    badge: "CRM Integrated",
    category: "Virtual & Back Office",
    title: "24/7 Technical Support",
    subtitle: "Reliable L1/L2 IT helpdesk integrated directly into your CRM",
    description:
      "Free your engineering and core staff. We handle software troubleshooting, user ticketing, and CRM workflows around the clock with strict SLA response times.",
    href: "/services/technical-support",
  },
  {
    icon: PhoneCall,
    badge: "Scalable",
    category: "Voice & Calls",
    title: "Inbound & Outbound Calling",
    subtitle: "Seamless live transfers, customer inquiries, and order taking",
    description:
      "Deploy expert Inbound Agents delivering exceptional service using your brand voice, and targeted outbound calling to expand your market footprint rapidly.",
    href: "/services/inbound-outbound",
  },
  {
    icon: UserCheck,
    badge: "Dedicated",
    category: "Virtual & Back Office",
    title: "Virtual Assistant",
    subtitle: "Reclaim your hours with a proactive, skilled executive assistant",
    description:
      "Free up your time. Our VAs manage executive email, appointment scheduling, research, CRM hygiene, and data entry. Flexible plans that scale with your workload.",
    href: "/services/virtual-assistant",
  },
  {
    icon: FileCheck,
    badge: "Efficiency",
    category: "Virtual & Back Office",
    title: "Back Office Support",
    subtitle: "Accurate data processing, invoice audits, and compliance",
    description:
      "Offload repetitive administrative tasks without sacrificing quality. Our back-office team ensures 99.9% data accuracy and rapid turnaround on all internal workflows.",
    href: "/services/back-office",
  },
  {
    icon: GraduationCap,
    badge: "Team Growth",
    category: "Growth & Training",
    title: "Training and Coaching",
    subtitle: "Transform your team with battle-tested communication tactics",
    description:
      "Empower your staff for higher conversion. We offer customized coaching in outbound sales, objection handling, team management, and customer care excellence.",
    href: "/services/training-coaching",
  },
  {
    icon: Share2,
    badge: "Brand Growth",
    category: "Growth & Training",
    title: "Social Media Management",
    subtitle: "Supercharge your online presence and engage target audiences",
    description:
      "Grow your authority online. We craft engaging content, schedule multi-platform posts, manage interactions, and run targeted outreach campaigns across Facebook, LinkedIn, and X.",
    href: "/services/social-media",
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <>
      <Marquee />

      <section id="services" className="relative overflow-hidden bg-slate-50 py-24 scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-600/20 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700">
              <Sparkles className="h-3.5 w-3.5" />
              Comprehensive Solutions
            </div>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Specialized Services for Every Business Need
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Outsource your time-intensive operations—from cold calling and lead generation to
              24/7 customer care and virtual assistance—without the high costs of local hiring.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.04] to-indigo-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100/80 text-sky-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-600/25">
                        <Icon className="h-7 w-7" />
                      </div>

                      <span className="rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-sky-600">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative mt-8 border-t border-slate-100 pt-5">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 transition group-hover:gap-3 group-hover:text-sky-700"
                    >
                      <span>Explore {item.title}</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}