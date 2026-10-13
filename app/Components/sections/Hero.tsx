import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    PhoneCall,
    Sparkles,
    TrendingUp,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0">
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="absolute inset-0 bg-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80" />

            <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20">
                <div className="max-w-4xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                        <Sparkles className="h-4 w-4 text-cyan-300" />
                        Trusted BPO & MCA Lead Generation Partner
                    </span>

                    <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                        We are your 2nd Office!
                        <span className="mt-3 block text-cyan-300">
                            At Specialist Line
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                        We seamlessly integrate into your business operations, handling
                        tasks from customer support to lead generation so you can focus on
                        your core competencies.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-sky-700 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
                        >
                            Book Appointment
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                        >
                            Our Services
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <TrendingUp className="h-5 w-5 text-cyan-300" />
                                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                                    Growth
                                </h3>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-slate-100">
                                Better quality leads for stronger conversion.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <PhoneCall className="h-5 w-5 text-cyan-300" />
                                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                                    Outreach
                                </h3>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-slate-100">
                                Cold calling, live transfers, and appointment setting.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                                    Results
                                </h3>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-slate-100">
                                A polished brand that feels premium and trustworthy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}