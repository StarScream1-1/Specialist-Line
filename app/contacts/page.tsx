import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import Appointment from "@/app/Components/sections/Appointment";
import GlobalClocks from "@/app/Components/ui/GlobalClocks";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacts | Specialist Line – 24/7 Global BPO & Outsourcing",
  description:
    "Contact Specialist Line today. We're available 24/7 to discuss your outsourcing needs — call center, virtual assistance, lead generation, and MCA support.",
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

const contactInfo = [
  {
    icon: Phone,
    label: "Direct Phone Line",
    subtitle: "Speak with our management team",
    lines: ["+1 786-894-0005"],
    actionText: "Call Directly",
    href: "tel:+17868940005",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Mail,
    label: "Email Contacts",
    subtitle: "For inquiries & campaign quotes",
    lines: ["info@specialistline.com", "admin@specialistline.com"],
    actionText: "Send Email",
    href: "mailto:info@specialistline.com",
    color: "from-indigo-500 to-sky-500",
  },
  {
    icon: MapPin,
    label: "Main Office & Operations Floor",
    subtitle: "Dhaka, Bangladesh Technology Hub",
    lines: ["SpecialistLine, 15/3, Ringroad,", "Shymoli, Dhaka, Bangladesh"],
    actionText: "View on Google Maps",
    href: "https://maps.google.com/?q=Shymoli,Dhaka,Bangladesh",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    label: "Operational Availability",
    subtitle: "Round-the-clock shift coverage",
    lines: ["24/7/365 — Always Operational", "US & International Timezones"],
    actionText: "Schedule Call",
    href: "/book-appointment",
    color: "from-amber-500 to-orange-500",
  },
];

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/specialistline.office/", label: "Facebook Page" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/specialistline", label: "LinkedIn Company" },
  { icon: MessageCircle, href: "https://www.reddit.com/user/SpecialistLine_BPO/", label: "Reddit Community" },
];

export default function ContactsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                24/7 Global Communications Hub
              </span>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                Get In <span className="gradient-text">Touch</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Ready to elevate your operations? Contact Specialist Line today to discuss how our
                dedicated agents can streamline your customer care, lead generation, and back-office tasks.
              </p>

              {/* Real-time Global Clocks Component */}
              <div className="mt-12">
                <GlobalClocks />
              </div>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.06),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-slate-50/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-500/10"
                  >
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-600/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>

                      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                        {item.label}
                      </p>

                      <div className="mt-2">
                        {item.lines.map((l) => (
                          <p key={l} className="text-base font-bold text-slate-900 leading-snug">
                            {l}
                          </p>
                        ))}
                      </div>

                      <p className="mt-2 text-xs text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-200/80">
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 transition group-hover:gap-2 group-hover:text-sky-700"
                      >
                        <span>{item.actionText}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social media connections */}
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:flex-row sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Connect with Specialist Line on Social Channels
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Follow us for company updates, operations insights, and industry news
                </p>
              </div>

              <div className="mt-4 flex gap-3 sm:mt-0">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 hover:shadow-md"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Appointment />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}