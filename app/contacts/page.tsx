import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import Appointment from "@/app/Components/sections/Appointment";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacts | Specialist Line – Get In Touch",
  description:
    "Contact Specialist Line today. We're available 24/7 to discuss your outsourcing needs — call center, virtual assistance, lead generation, and more.",
};

// Inline Social Icons since lucide-react doesn't include brand logos
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
    icon: Mail,
    label: "Email",
    lines: ["info@specialistline.com", "admin@specialistline.com"],
    href: "mailto:info@specialistline.com",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+1 786-894-0005"],
    href: "tel:+17868940005",
  },
  {
    icon: MapPin,
    label: "Address",
    lines: ["SpecialistLine, 15/3, Ringroad,", "Shymoli, Dhaka, Bangladesh"],
    href: "https://maps.google.com/?q=Shymoli,Dhaka,Bangladesh",
  },
  {
    icon: Clock,
    label: "Hours",
    lines: ["24/7 — Always Available", "Any Timezone"],
    href: null,
  },
];

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/specialistline.office/", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/specialistline", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://www.reddit.com/user/SpecialistLine_BPO/", label: "Reddit" },
];

export default function ContactsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <span className="animate-fade-up inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Contact Us
            </span>
            <h1 className="animate-fade-up delay-100 mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ready to elevate your business operations? Contact us today to discuss how our services
              can be tailored to meet your unique needs.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <div
                    className="group animate-scale-in flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-600">
                      <Icon className="h-6 w-6 text-sky-600 transition group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                      {item.lines.map((l) => (
                        <p key={l} className="mt-1 text-base font-semibold text-slate-900">{l}</p>
                      ))}
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            {/* Social media */}
            <div className="mt-14 flex flex-col items-center gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Find us on social media</p>
              <div className="flex gap-4">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 hover:shadow-md"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="bg-slate-50 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Send us a message</span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Let&apos;s Talk About Your Next Campaign
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Share your business details and campaign needs. Our team will review your request and get back to you with the next steps.
              </p>
            </div>
          </div>
          <Appointment />
        </section>
      </main>
      <Footer />
    </>
  );
}