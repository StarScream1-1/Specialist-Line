"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Headset,
  PhoneForwarded,
  Target,
  ShieldCheck,
  PhoneCall,
  UserCheck,
  FileCheck,
  GraduationCap,
  Share2,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Customer Care",
    desc: "24/7 omnichannel client support & satisfaction",
    href: "/services/customer-care",
    icon: Headset,
    badge: "24/7 Live",
  },
  {
    title: "Telemarketing Service",
    desc: "Targeted cold calling & high-converting sales",
    href: "/services/telemarketing",
    icon: PhoneForwarded,
    badge: "High ROI",
  },
  {
    title: "B2B/B2C Lead Gen",
    desc: "MCA & business leads pre-screened for closing",
    href: "/services/lead-gen",
    icon: Target,
    badge: "Popular",
  },
  {
    title: "24/7 Technical Support",
    desc: "L1/L2 IT helpdesk integrated into your CRM",
    href: "/services/technical-support",
    icon: ShieldCheck,
    badge: "SLA Guaranteed",
  },
  {
    title: "Inbound & Outbound Calling",
    desc: "Live transfers, order intake & appointment setting",
    href: "/services/inbound-outbound",
    icon: PhoneCall,
  },
  {
    title: "Virtual Assistant",
    desc: "Dedicated EA for inbox, schedule & workflows",
    href: "/services/virtual-assistant",
    icon: UserCheck,
    badge: "Dedicated",
  },
  {
    title: "Back Office Support",
    desc: "Data processing, billing, verification & records",
    href: "/services/back-office",
    icon: FileCheck,
  },
  {
    title: "Training and Coaching",
    desc: "Upskill sales teams with battle-tested frameworks",
    href: "/services/training-coaching",
    icon: GraduationCap,
  },
  {
    title: "Social Media Management",
    desc: "Content creation, community growth & outreach",
    href: "/services/social-media",
    icon: Share2,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top micro-announcement & status bar */}
      <div className="hidden border-b border-white/10 bg-slate-950 px-6 py-2 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              24/7 Live Operations Active
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">
              Serving US, UK & Global Clients from Our 2nd Office
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <a
              href="tel:+17868940005"
              className="flex items-center gap-1.5 transition hover:text-sky-400"
            >
              <Phone className="h-3 w-3 text-sky-400" />
              <span>+1 786-894-0005</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:info@specialistline.com"
              className="flex items-center gap-1.5 transition hover:text-sky-400"
            >
              <Mail className="h-3 w-3 text-sky-400" />
              <span>info@specialistline.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-xl"
            : "border-b border-slate-200/50 bg-white/90 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 p-2 text-white shadow-lg shadow-sky-600/25 ring-1 ring-sky-200/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-sky-600/40">
              <Image
                src="/logo/NORM1.png"
                alt="Specialist Line logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight text-slate-900">
                Specialist <span className="text-sky-600">Line</span>
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                Your 2nd Office
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              About
            </Link>

            {/* Rich Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition group-hover:bg-sky-50 group-hover:text-sky-700"
                aria-expanded="false"
              >
                Our Services
                <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
              </button>

              {/* Mega-menu panel */}
              <div className="pointer-events-none absolute -left-20 top-full pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-[660px] rounded-3xl border border-slate-200/90 bg-white p-5 shadow-2xl shadow-slate-900/15 backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Outsourcing & BPO Solutions
                    </span>
                    <Link
                      href="/#services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-800"
                    >
                      View all services overview <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="group/item flex items-start gap-3 rounded-2xl p-2.5 transition hover:bg-sky-50/80"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition group-hover/item:bg-sky-600 group-hover/item:text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-bold text-slate-900 transition group-hover/item:text-sky-700">
                                {s.title}
                              </p>
                              {s.badge && (
                                <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-700">
                                  {s.badge}
                                </span>
                              )}
                            </div>
                            <p className="truncate text-xs text-slate-500">
                              {s.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-white">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-cyan-300" />
                      <span className="text-xs font-semibold text-slate-200">
                        Need a custom team for your office?
                      </span>
                    </div>
                    <Link
                      href="/book-appointment"
                      className="rounded-xl bg-sky-500 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-sky-400"
                    >
                      Get Custom Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#why-us"
              className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              Why Us
            </Link>

            <Link
              href="/contacts"
              className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              Contacts
            </Link>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="hidden items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-600/40 active:scale-[0.98] sm:inline-flex"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule a Meeting</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="max-h-[85vh] overflow-y-auto border-b border-slate-200 bg-white/98 px-6 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-1.5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-sky-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-sky-600"
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 hover:text-sky-600"
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="grid gap-1 px-3 pb-3">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-sky-100/60 hover:text-sky-700"
                      >
                        <Icon className="h-4 w-4 text-sky-600" />
                        <span>{s.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/#why-us"
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-sky-600"
            >
              Why Us
            </Link>

            <Link
              href="/contacts"
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-sky-600"
            >
              Contacts
            </Link>

            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <Link
                href="/book-appointment"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-sky-600 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-sky-600/30"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </Link>
              <a
                href="tel:+17868940005"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-slate-700"
              >
                <Phone className="h-4 w-4 text-sky-600" />
                +1 786-894-0005
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}