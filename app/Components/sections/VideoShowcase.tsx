import Link from "next/link";
import { PlayCircle, Video, Sparkles, ArrowRight } from "lucide-react";

export default function VideoShowcase() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                            Watch Specialist Line
                        </span>

                        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                            A better way to present your business
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                            Add your company video here to give visitors a stronger first
                            impression. It helps the website feel more professional and makes
                            the brand feel real, clear, and trustworthy.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/book-appointment"
                                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
                            >
                                Book Appointment
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="#services"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
                            >
                                View Services
                            </Link>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Brand
                                </p>
                                <p className="mt-2 text-lg font-bold text-slate-900">
                                    Modern &amp; Clean
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Style
                                </p>
                                <p className="mt-2 text-lg font-bold text-slate-900">
                                    Premium &amp; Simple
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Purpose
                                </p>
                                <p className="mt-2 text-lg font-bold text-slate-900">
                                    Build Trust Fast
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
                        <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl" />

                        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
                            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                                            <Video className="h-5 w-5 text-cyan-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">
                                                Company Introduction
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                Autoplay enabled on reload
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                                        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                                        Featured
                                    </div>
                                </div>

                                <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_32%)]" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                                        <PlayCircle className="h-20 w-20 text-white/90" />
                                        <h3 className="mt-5 text-2xl font-bold">
                                            Add your company video here
                                        </h3>
                                        <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                                            Use this space for a short intro video about Specialist
                                            Line, your team, or how the booking process works.
                                        </p>
                                    </div>

                                    <video
                                        className="absolute inset-0 h-full w-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src="/videos/intro.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}