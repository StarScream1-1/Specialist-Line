import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    PhoneCall,
    Sparkles,
    TrendingUp,
    MessageSquareText,
    Users2,
    TimerReset,
    ShieldCheck,
    Target,
} from "lucide-react";

const highlights = [
    {
        icon: TrendingUp,
        title: "Growth",
        text: "Comprehensive virtual assistance and expert call center solutions.",
    },
    {
        icon: PhoneCall,
        title: "Why Us?",
        text: "Experienced in-house agents driving successful lead generation.",
    },
    {
        icon: ShieldCheck,
        title: "Let's Build Trust",
        text: "Top-tier customer care and reliable partnership for your growth.",
    },
    {
        icon: Target,
        title: "Cost Effective",
        text: "Smooth business operations without the overhead costs.",
    },
    {
        icon: Users2,
        title: "Experienced Team",
        text: "Professionals trained to handle diverse business needs with precision.",
    },
    {
        icon: TimerReset,
        title: "24/7 Availability",
        text: "Ensuring your business operations remain active around the clock.",
    },
    {
        icon: CheckCircle2,
        title: "Sustainability",
        text: "Top-notch call center services tailored to enhance business growth.",
    },
    {
        icon: MessageSquareText,
        title: "Customized Solutions",
        text: "We tailor our services to align with your specific requirements.",
    },
];

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
                        Outsource your extra works to us!
                    </span>

                    <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                        We are your 2nd Office!
                        <span className="mt-3 block text-cyan-300">At Specialist Line</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                        At Specialist Line, we seamlessly integrate into your business operations, handling
                        tasks from customer support to lead generation, allowing you to focus on your core
                        competencies.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-sky-700 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
                        >
                            Discover How We Can Support You
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                        >
                            Our Services
                        </Link>
                    </div>

                    <div className="mt-12">
                        <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                            <span className="h-px w-8 bg-cyan-300/70" />
                            Growth • Cost Effective • 24/7 Availability
                        </div>

                        {/* Hidden scrollbar styling applied here */}
                        <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <div className="flex gap-4 min-w-max snap-x snap-mandatory">
                                {highlights.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="w-[280px] snap-start rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="h-5 w-5 text-cyan-300" />
                                                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="mt-3 text-sm leading-6 text-slate-100">
                                                {item.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}