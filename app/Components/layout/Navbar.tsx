"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight, Headset } from "lucide-react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-md shadow-sky-500/20 transition-transform duration-300 group-hover:scale-105">
                        <Headset className="h-5 w-5" />
                    </div>
                    <div>
                        <span className="text-xl font-extrabold tracking-tight text-slate-900">
                            Specialist<span className="text-sky-600">Line</span>
                        </span>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                            BPO & MCA Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#services"
                        className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                    >
                        Services
                    </Link>
                    <Link
                        href="#why-us"
                        className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                    >
                        Why Us
                    </Link>
                    <Link
                        href="#stats"
                        className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                    >
                        Results
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Right Call & CTA */}
                <div className="hidden items-center gap-4 sm:flex">
                    <a
                        href="tel:18005550199"
                        className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                            <Phone className="h-4 w-4" />
                        </div>
                        <span className="hidden lg:inline">(800) 555-0199</span>
                    </a>

                    <Link
                        href="#contact"
                        className="group flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700"
                    >
                        <span>Book Appointment</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden hover:bg-slate-50"
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="border-b border-slate-200 bg-white px-6 py-6 md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base font-medium text-slate-700 hover:text-sky-600"
                        >
                            Services
                        </Link>
                        <Link
                            href="#why-us"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base font-medium text-slate-700 hover:text-sky-600"
                        >
                            Why Us
                        </Link>
                        <Link
                            href="#stats"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base font-medium text-slate-700 hover:text-sky-600"
                        >
                            Results
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base font-medium text-slate-700 hover:text-sky-600"
                        >
                            Contact
                        </Link>
                        <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-slate-100">
                            <a
                                href="tel:18005550199"
                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700"
                            >
                                <Phone className="h-4 w-4 text-sky-600" />
                                <span>(800) 555-0199</span>
                            </a>
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white shadow-md"
                            >
                                <span>Book Appointment</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
