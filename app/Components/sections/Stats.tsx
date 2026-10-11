import { CheckCircle2, ArrowRight } from "lucide-react";

const stats = [
    {
        number: "$120M+",
        label: "Funding Facilitated",
        description: "Total capital funded through our generated leads and live transfers.",
    },
    {
        number: "45,000+",
        label: "Qualified Transfers",
        description: "Pre-screened business owners connected directly with funding agents.",
    },
    {
        number: "92%",
        label: "Contact Rate",
        description: "Industry-leading pick-up and connection rates on outbound campaigns.",
    },
    {
        number: "3.8x",
        label: "Average Client ROI",
        description: "Consistent return on investment measured across our active brokerage partners.",
    },
];

const guarantees = [
    "No long-term commitments or lock-ins",
    "Custom qualification filters (Revenue, Time in Business, Credit)",
    "Dedicated campaign manager & real-time reporting",
    "100% compliant and DNC-scrubbed calling protocols",
];

export default function Stats() {
    return (
        <section id="stats" className="bg-slate-900 py-24 text-white">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        Proven Track Record
                    </span>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Real Numbers That Drive Real Revenue
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        We measure our success by the deals your team closes. Here is what we have delivered for merchant cash advance funders nationwide.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-slate-800 bg-slate-800/50 p-8 text-center backdrop-blur transition-all duration-300 hover:border-sky-500 hover:bg-slate-800/80"
                        >
                            <div className="text-4xl font-extrabold tracking-tight text-cyan-400 lg:text-5xl">
                                {stat.number}
                            </div>
                            <div className="mt-3 text-lg font-semibold text-white">
                                {stat.label}
                            </div>
                            <p className="mt-2 text-sm text-slate-400">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Card */}
                <div
                    id="contact"
                    className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 p-8 md:p-12 shadow-2xl"
                >
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-7">
                            <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                                Get Started Within 48 Hours
                            </span>
                            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Ready to scale your funding pipeline?
                            </h3>
                            <p className="mt-4 text-base text-sky-100">
                                Book a free discovery call to review our sample lead data, live transfer pricing, and dedicated agent packages.
                            </p>

                            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                                {guarantees.map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-sm text-white">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-200" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:justify-end">
                            <a
                                href="tel:18005550199"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-semibold text-sky-700 shadow-lg transition hover:bg-sky-50"
                            >
                                <span>Speak with Us</span>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="mailto:info@specialistline.com"
                                className="inline-flex items-center justify-center rounded-xl border border-white/60 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                            >
                                Request Info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
