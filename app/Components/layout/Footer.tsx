import Link from "next/link";
import { Headset, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 py-16 text-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-600/20">
                <Headset className="h-5 w-5" />
              </div>

              <div className="leading-tight">
                <p className="text-xl font-extrabold tracking-tight text-white">
                  Specialist <span className="text-sky-400">Line</span>
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                  BPO • MCA Leads
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Professional outsourcing partner specializing in MCA live
              transfers, appointment setting, and dedicated BPO services.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="transition hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="transition hover:text-white">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Contact
            </h4>

            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <span>(800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <span>info@specialistline.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © 2026 Specialist Line. All rights reserved.
        </div>
      </div>
    </footer>
  );
}