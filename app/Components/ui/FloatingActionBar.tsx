"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FloatingActionBar() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-slate-900/90 text-white shadow-xl shadow-slate-950/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Floating Speed Dial Pill */}
      <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/90 p-1.5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        {/* Live Status indicator */}
        <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 text-[11px] font-semibold text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>24/7 Available</span>
        </div>

        {/* Quick Call */}
        <a
          href="tel:+17868940005"
          aria-label="Call +1 786-894-0005"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-sky-600 hover:text-white"
          title="Direct Call: +1 786-894-0005"
        >
          <Phone className="h-4 w-4" />
        </a>

        {/* Schedule meeting pill */}
        <Link
          href="/book-appointment"
          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:scale-105"
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>Book Call</span>
        </Link>
      </div>
    </div>
  );
}
