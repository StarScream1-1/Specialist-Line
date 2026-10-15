"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
const services = [
  { title: "Customer Care", href: "/services/customer-care" },
  { title: "Telemarketing Service", href: "/services/telemarketing" },
  { title: "B2B/B2C Lead Gen", href: "/services/lead-gen" },
  { title: "24/7 Technical Support", href: "/services/technical-support" },
  { title: "Inbound & Outbound Calling", href: "/services/inbound-outbound" },
  { title: "Virtual Assistant", href: "/services/virtual-assistant" },
  { title: "Back Office Support", href: "/services/back-office" },
  { title: "Training and Coaching", href: "/services/training-coaching" },
  { title: "Social Media Management", href: "/services/social-media" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-600/20 ring-1 ring-slate-200 transition duration-300 hover:scale-105">
            <Image
              src="/logo/NORM1.png"
              alt="Specialist Line logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-slate-900">
              Specialist <span className="text-sky-600">Line</span>
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Your 2nd Office
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
            About
          </Link>

          {/* Services dropdown */}
          <div className="nav-dropdown">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-sky-600">
              Our Services
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="nav-dropdown-menu">
              {services.map((s) => (
                <Link key={s.href} href={s.href}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contacts" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
            Contacts
          </Link>
        </nav>

        <Link
          href="/book-appointment"
          className="hidden rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 md:block"
        >
          Schedule a Meeting
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600">
              About
            </Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
            >
              Our Services <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l border-slate-200 pl-4">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg py-2 text-sm text-slate-600 hover:text-sky-600"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/contacts" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600">
              Contacts
            </Link>
            <Link href="/book-appointment" onClick={() => setMobileOpen(false)} className="mt-2 rounded-xl bg-sky-600 px-4 py-3 text-center text-sm font-semibold text-white">
              Schedule a Meeting
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}