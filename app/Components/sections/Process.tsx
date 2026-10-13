import {
    Search,
    PhoneCall,
    CalendarCheck2,
    Handshake,
} from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Understand Your Goals",
        description:
            "We learn about your business, your target audience, and the type of campaign you want to run before anything begins.",
    },
    {
        icon: PhoneCall,
        title: "Launch Outreach",
        description:
            "Our team starts structured outbound calling and lead qualification with a clear focus on quality conversations.",
    },
    {
        icon: CalendarCheck2,
        title: "Book Qualified Appointments",
        description:
            "Interested prospects are screened and scheduled directly so your team gets better conversations to work with.",
    },
    {
        icon: Handshake,
        title: "Scale With Confidence",
        description:
            "We keep the process moving with consistent delivery, communication, and a partnership style you can rely on.",
    },
];

export default function Process() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_28%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        Our Process
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        A Clear Process Built for Results
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        A simple structure helps the campaign feel organized, reliable, and
                        easier for your team to trust.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.title}
                                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-2xl"
                            >
                                <div className="absolute right-5 top-5 text-6xl font-extrabold tracking-tight text-white/10">
                                    0{index + 1}
                                </div>

                                <div className="relative">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 transition duration-300 group-hover:bg-cyan-300 group-hover:text-slate-950">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-300">
                                        {step.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}