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
        text: "Better quality leads for stronger conversion.",
        href: "/services/lead-gen",
    },
    {
        icon: PhoneCall,
        title: "Outreach",
        text: "Cold calling, live transfers, and appointment setting.",
        href: "/services/inbound-outbound",
    },
    {
        icon: CheckCircle2,
        title: "Results",
        text: "A polished brand that feels premium and trustworthy.",
        href: "/services/customer-care",
    },
    {
        icon: Users2,
        title: "Team Support",
        text: "A dedicated team that feels like your own office.",
        href: "/services/back-office",
    },
    {
        icon: MessageSquareText,
        title: "Communication",
        text: "Clear updates and smooth client coordination.",
        href: "/services/virtual-assistant",
    },
    {
        icon: TimerReset,
        title: "Social Media Management",
        text: "Quick action with organized workflow.",
        href: "/services/social-media",
    },

    {
        icon: ShieldCheck,
        title: "Reliable Process",
        text: "Consistent delivery with a professional system.",
        href: "/services/training-coaching",
    },
    {
        icon: Target,
        title: "Focused Campaigns",
        text: "Built for the exact market you want to reach.",
        href: "/services/telemarketing",
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
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/40 to-slate-950/85" />

            <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-16">
                <div className="max-w-5xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                        <Sparkles className="h-4 w-4 text-cyan-300" />
                        Trusted BPO & MCA Lead Generation Partner
                    </span>

                    <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                        We are your 2nd Office!
                        <span className="mt-3 block text-cyan-300">At Specialist Line</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                        We seamlessly integrate into your business operations, handling
                        tasks from customer support to lead generation so you can focus on
                        your core competencies.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/book-appointment"
                            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-sky-700 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-slate-100 active:scale-[0.98]"
                        >
                            Book Appointment
                            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/#services"
                            className="group inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/15 active:scale-[0.98]"
                        >
                            Our Services
                        </Link>
                    </div>

                    <div className="mt-12 overflow-hidden">
                        <div className="hero-marquee flex w-max gap-4">
                            {[...highlights, ...highlights].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={`${item.title}-${index}`}
                                        href={item.href}
                                        className="group w-[280px] shrink-0 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-300/20">
                                                <Icon className="h-5 w-5 text-cyan-300" />
                                            </div>
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm leading-6 text-slate-100">
                                            {item.text}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}