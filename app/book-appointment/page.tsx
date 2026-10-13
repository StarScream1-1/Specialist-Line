import Link from "next/link";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";
import BookingRequestForm from "@/app/Components/sections/BookingRequestForm";
import {
  CalendarDays,
  Globe,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

export default function BookAppointmentPage() {
  const calendlyUrl =
    "https://calendly.com/admin-specialistline/30min?hide_gdpr_banner=1&primary_color=0ea5e9";

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                Book a Meeting with Specialist Line
              </span>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                Schedule Your
                <span className="block text-cyan-300">Appointment Today</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Pick a time directly in Calendly. This page is for booking only,
                separate from the contact form on the homepage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#booking"
                  className="rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 shadow-lg shadow-sky-950/10 transition hover:-translate-y-0.5 hover:bg-sky-50"
                >
                  Choose a time
                </Link>

                <Link
                  href="/#contact"
                  className="rounded-xl border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Go to contact form
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-10 mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                <div className="border-b border-slate-200 px-6 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                    Intro Video
                  </p>
                </div>

                <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_32%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                    <PlayCircle className="h-20 w-20 text-white/90" />
                    <h2 className="mt-5 text-2xl font-bold">
                      Add your company video here
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                      Use this space for a short intro video about Specialist
                      Line, your team, or how the booking process works.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <CalendarDays className="h-6 w-6 text-sky-600" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Fast Scheduling
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Pick a time that works for you
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-sky-600" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Private Review
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Manager email review later
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">
                  What happens next
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Select a time</p>
                      <p className="text-sm leading-6 text-slate-600">
                        Use the live Calendly booking section on the right.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        We review your request
                      </p>
                      <p className="text-sm leading-6 text-slate-600">
                        The team checks availability and campaign fit.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">We follow up</p>
                      <p className="text-sm leading-6 text-slate-600">
                        You get the next step by email or call.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div
                id="booking"
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
              >
                <div className="border-b border-slate-200 px-6 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Live Booking
                      </p>
                      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                        Select a Date &amp; Time
                      </h2>
                    </div>

                    <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 md:flex">
                      <Globe className="h-4 w-4" />
                      Asia/Dhaka
                    </div>
                  </div>
                </div>

                <div className="h-[860px] w-full bg-white">
                  <iframe
                    src={calendlyUrl}
                    title="Book an appointment with Specialist Line"
                    className="h-full w-full"
                    frameBorder="0"
                  />
                </div>
              </div>

              <BookingRequestForm />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="text-sm font-semibold text-sky-700 transition hover:text-sky-800"
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}