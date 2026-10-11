import {
    PhoneForwarded,
    CalendarCheck2,
    Users2,
    Database,
    FileCheck,
    Repeat,
} from "lucide-react";
import Marquee from "../ui/Marquee";

const services = [
    {
        icon: PhoneForwarded,
        badge: "High Conversion",
        title: "MCA Live Transfers",
        description:
            "Connect directly with pre-screened business owners who actively need working capital and are ready to review funding terms with your closers.",
    },
    {
        icon: CalendarCheck2,
        badge: "Direct Bookings",
        title: "Appointment Setting",
        description:
            "Our outbound agents qualify merchants and lock in scheduled appointments directly onto your sales team's calendar.",
    },
    {
        icon: Users2,
        badge: "Turnkey Staffing",
        title: "Dedicated BPO Agents",
        description:
            "Hire experienced, English-fluent call center agents trained exclusively in merchant cash advances, customer support, and cold outreach.",
    },
    {
        icon: Database,
        badge: "Exclusive Leads",
        title: "Targeted MCA Data & Leads",
        description:
            "Targeted lists filtered by monthly credit card volume, time in business, and credit score to match your exact funding criteria.",
    },
    {
        icon: FileCheck,
        badge: "Streamlined Pipeline",
        title: "Underwriting & Doc Collection",
        description:
            "Expedite deal closings with dedicated support specialists who retrieve bank statements, applications, and merchant documentation.",
    },
    {
        icon: Repeat,
        badge: "Higher LTV",
        title: "Renewal & Retention Campaigns",
        description:
            "Keep past funded merchants engaged. We identify when existing accounts are 50%+ paid down and re-engage them for renewals.",
    },
];

export default function Services() {
    return (
        <>
            <Marquee />

            <section
                id="services"
                className="border-t border-slate-100 bg-slate-50 py-24"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                            Our Core Solutions
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                            Designed Exclusively for MCA Brokers & Funders
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            From live phone transfers to scalable BPO agent outsourcing, we
                            provide the pipeline and manpower you need to fund more merchants
                            each month.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 transition-all group-hover:bg-sky-50 group-hover:text-sky-700">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <h3 className="mt-6 text-xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 border-t border-slate-100 pt-5">
                                        <button className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-all duration-300 group-hover:gap-3">
                                            Learn More
                                            <span>→</span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}