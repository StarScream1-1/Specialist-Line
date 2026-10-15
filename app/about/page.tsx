import type { Metadata } from "next";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import {
  BadgeCheck,
  Clock3,
  Handshake,
  Heart,
  Leaf,
  MapPin,
  Mail,
  Phone,
  Users2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Specialist Line – Expert Virtual Support Services",
  description:
    "Discover SpecialistLine, your premier call center service provider in Dhaka, Bangladesh. We empower businesses with customized, cost-effective virtual support services available 24/7.",
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

const mission = [
  {
    icon: Heart,
    title: "Our Mission",
    description:
      "To empower businesses by providing reliable, efficient, and cost-effective virtual support services, ensuring operational excellence and customer satisfaction.",
  },
  {
    icon: Leaf,
    title: "Our Vision",
    description:
      "To be the most trusted virtual support partner for businesses worldwide, helping companies of all sizes scale without the overhead of traditional hiring.",
  },
  {
    icon: Handshake,
    title: "Our Values",
    description:
      "Integrity, excellence, reliability, and innovation drive everything we do. We treat your business like our own—because your success is our success.",
  },
];

const whyUs = [
  {
    icon: BadgeCheck,
    title: "Experienced Team",
    description: "Our professionals are trained to handle diverse business needs with precision.",
  },
  {
    icon: Users2,
    title: "Customized Solutions",
    description: "We tailor our services to align with your specific requirements.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description: "Ensuring your business remains operational around the clock.",
  },
  {
    icon: Building2,
    title: "Cost Efficiency",
    description: "Delivering top-notch services without the overhead costs.",
  },
];

const team = [
  {
    name: "MD Boni",
    role: "Founder",
    description: "Visionary leader with years of experience in call center operations and BPO services.",
    facebook: "https://www.facebook.com/your.personal.fb.profile", // Replace with your personal FB link
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  },
  {
    name: "Alex Amit",
    role: "Operations Manager",
    description: "Expert in streamlining workflows and ensuring every client gets the best support possible.",
    facebook: "https://www.facebook.com/your.personal.fb.profile", // Replace with your personal FB link
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  },
];

const industries = [
  "E-Commerce", "Healthcare", "Finance & Fintech", "Real Estate", "SaaS / Tech",
  "Insurance", "Retail", "Legal Services", "Education", "Hospitality",
  "Logistics", "Startups",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="page-hero-bg relative overflow-hidden py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <span className="animate-fade-up inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              About Us
            </span>
            <h1 className="animate-fade-up delay-100 mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              We are your{" "}
              <span className="gradient-text">2nd Office!</span>
            </h1>
            <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Specialistline.com is a premier call center service provider, offering top-tier
              support to businesses of all sizes. Our specialized agents are trained to deliver
              the best customer support, ensuring satisfaction with every interaction.
            </p>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.06),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                What drives us
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Purpose-led. People-first.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {mission.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="animate-fade-up rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                      <Icon className="h-7 w-7 text-sky-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div className="animate-slide-left">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Who we are
                </span>
                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Specialist Line — Your Business&apos;s Second Office
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  We excel in both B2B and B2C sectors, providing cost-effective solutions that drive
                  lead generation and boost sales. Our easy refund process enhances customer trust and
                  loyalty. Choose Specialistline.com for unparalleled expertise and results in call center services.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Based in Dhaka, Bangladesh, we serve clients across the globe — providing
                  professional, round-the-clock support that fits any timezone and any industry.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:admin@specialistline.com"
                    className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Video/image placeholder */}
              <div className="animate-slide-right">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-8 text-center">
                    <div>
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-600/20 ring-2 ring-sky-500/40">
                        <svg className="h-10 w-10 text-sky-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="mt-4 text-lg font-semibold text-white">Team Introduction Video</p>
                      <p className="mt-2 text-sm text-slate-400">Add your company video here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative overflow-hidden bg-slate-100 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Top Reasons to Partner with Specialist Line
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="animate-scale-in group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-600">
                      <Icon className="h-6 w-6 text-sky-600 transition group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Our Team
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Some of the members from our team!
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:max-w-3xl lg:mx-auto">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className="animate-fade-up group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center transition-all hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Photo placeholder */}
                  <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-white shadow-lg">
                    <span className="text-3xl font-extrabold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{member.description}</p>
                  <div className="mt-6 flex justify-center gap-3">
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_50%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Industries we serve
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                We Work Across All Sectors
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                At SpecialistLine.com, we serve all industries that require outsourcing for their
                additional operational needs, including lead generation, customer support, chat support,
                and virtual assistance.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind, i) => (
                <span
                  key={ind}
                  className="animate-fade-up rounded-full border border-white/15 bg-white/8 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-white/15"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-indigo-700 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl">
              📬 Get In Touch
            </h2>
            <p className="animate-fade-up delay-100 mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Ready to elevate your business operations? Contact us today to discuss how our services
              can be tailored to meet your unique needs.
            </p>
            <div className="animate-fade-up delay-200 mt-10 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-200" />
                <div className="text-left">
                  <p>info@specialistline.com</p>
                  <p>admin@specialistline.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-cyan-200" />
                <span>+1 786-894-0005</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-200" />
                <span>15/3, Ringroad, Shymoli, Dhaka, Bangladesh</span>
              </div>
            </div>
            <a
              href="mailto:admin@specialistline.com"
              className="animate-fade-up delay-300 mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-sky-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}