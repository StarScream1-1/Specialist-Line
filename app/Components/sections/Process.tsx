import {
    SlidersHorizontal,
    Headset,
    PhoneCall,
    CheckCircle2,
    ArrowRight,
    Sparkles,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: SlidersHorizontal,
        title: "Define Your Funding Criteria",
        badge: "Custom Filtration",
        description:
            "We align with your underwriting standards—specifying minimum monthly revenue ($20k+), time in business, credit thresholds, and restricted industries to guarantee qualified prospects.",
    },
    {
        number: "02",
        icon: Headset,
        title: "Dedicated BPO Specialist Calibration",
        badge: "Trained Closers",
        description:
            "Our native-speaking MCA outreach specialists undergo training on your brand messaging, script nuances, and CRM workflows before making their first call.",
    },
    {
        number: "03",
        icon: PhoneCall,
        title: "Rigorous Merchant Triple-Screening",
        badge: "TCPA Compliant",
        description:
            "We dial compliant business databases, speak directly with the primary decision-maker, confirm current working capital urgency, and verify basic application data.",
    },
    {
        number: "04",
        icon: CheckCircle2,
        title: "Instant Live Transfer & Funding",
        badge: "High Conversion",
        description:
            "The moment an interested merchant is verified on the line, we execute a seamless warm transfer straight to your sales desk so you can present terms and close.",
    },
];

export default function Process() {
    return (
        <section id="process" className="relative border-t border-slate-100 bg-slate-50/60 py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
                        <Sparkles className="h-3.5 w-3.5" />
                        Seamless Onboarding
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        How We Power Your Funding Engine
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        From criteria calibration to warm phone transfers, our streamlined 4-step pipeline keeps your closers talking to verified business owners who need capital today.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
                            >
                                <div>
                                    {/* Card Top: Number & Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-sm font-black text-white shadow-md shadow-sky-500/20">
                                            {step.number}
                                        </span>

                                        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                                            {step.badge}
                                        </span>
                                    </div>

                                    {/* Icon Box */}
                                    <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-6 border-t border-slate-100 pt-4">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                                        Step {step.number} Protocol
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-16 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-cyan-50 p-8 shadow-sm">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div>
                            <h4 className="text-xl font-bold text-slate-900">
                                Ready to launch your first MCA campaign?
                            </h4>
                            <p className="mt-1 text-sm text-slate-600">
                                Onboard with our BPO team in less than 48 hours with zero long-term commitments.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700"
                            >
                                <span>Get Started Today</span>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="tel:18005550199"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                <span>(800) 555-0199</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
