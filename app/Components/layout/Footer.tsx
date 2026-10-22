import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Headset,
  MessageCircle,
} from "lucide-react";

// Inline brand SVGs for social media
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

const servicesList = [
  { name: "Customer Care", href: "/services/customer-care" },
  { name: "Telemarketing", href: "/services/telemarketing" },
  { name: "B2B/B2C Lead Gen", href: "/services/lead-gen" },
  { name: "24/7 Tech Support", href: "/services/technical-support" },
  { name: "Inbound & Outbound", href: "/services/inbound-outbound" },
  { name: "Virtual Assistant", href: "/services/virtual-assistant" },
  { name: "Back Office Support", href: "/services/back-office" },
  { name: "Training & Coaching", href: "/services/training-coaching" },
  { name: "Social Media", href: "/services/social-media" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_28%)]" />

      {/* Top Banner inside footer */}
      <div className="relative border-b border-white/10 bg-slate-900/60 py-10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to scale your business with Your 2nd Office?
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Get trained in-house agents ready to deploy in as little as 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Book Discovery Call <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17868940005"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-sky-400" /> +1 786-894-0005
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 p-2 text-white shadow-lg shadow-sky-600/25">
                <Image
                  src="/logo/NORM1.png"
                  alt="Specialist Line logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="text-xl font-extrabold tracking-tight text-white">
                  Specialist <span className="text-sky-400">Line</span>
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                  Your 2nd Office • BPO
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Specialist Line delivers premier call center, B2B/B2C lead generation,
              MCA live transfers, and dedicated virtual assistance tailored to your
              business needs without expensive domestic overhead.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-400">
                24/7/365 Always Active Operations
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/specialistline.office/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-sky-400 hover:bg-sky-600 hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/specialistline"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-sky-400 hover:bg-sky-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.reddit.com/user/SpecialistLine_BPO/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-sky-400 hover:bg-sky-600 hover:text-white"
                aria-label="Reddit"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-400">
              {servicesList.slice(0, 5).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="transition hover:text-sky-400"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services & Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Specialties
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-400">
              {servicesList.slice(5).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="transition hover:text-sky-400"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="transition hover:text-sky-400">
                  About Specialist Line
                </Link>
              </li>
              <li>
                <Link
                  href="/book-appointment"
                  className="font-semibold text-sky-400 transition hover:text-sky-300"
                >
                  Schedule Appointment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href="tel:+17868940005"
                  className="flex items-start gap-3 transition hover:text-sky-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <div>
                    <p className="font-semibold text-white">+1 786-894-0005</p>
                    <p className="text-xs text-slate-500">24/7 Direct Line</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@specialistline.com"
                  className="flex items-start gap-3 transition hover:text-sky-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <div>
                    <p className="font-semibold text-white">info@specialistline.com</p>
                    <p className="text-xs text-slate-500">Inquiries & Quotes</p>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <div>
                    <p className="text-white">15/3, Ringroad, Shymoli</p>
                    <p className="text-xs text-slate-500">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-sky-400" />
                <span className="text-xs text-slate-400">
                  Global Coverage across all timezones
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Specialist Line. All rights reserved. Where Quality Meets Connection.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400">About</Link>
            <Link href="/contacts" className="hover:text-slate-400">Contacts</Link>
            <Link href="/book-appointment" className="hover:text-slate-400">Book Appointment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}