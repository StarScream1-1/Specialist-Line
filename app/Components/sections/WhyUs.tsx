import {
    ShieldCheck,
    Clock3,
    TrendingUp,
    Users,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Quality First",
        description:
            "Every lead is carefully qualified to help your sales team spend more time closing and less time filtering.",
    },
    {
        icon: Clock3,
        title: "Fast Response",
        description:
            "Our team works efficiently to ensure quick turnaround times and reliable communication.",
    },
    {
        icon: TrendingUp,
        title: "Performance Driven",
        description:
            "We continuously optimize campaigns using real performance data to improve results.",
    },
    {
        icon: Users,
        title: "Experienced Agents",
        description:
            "Professional agents trained in appointment setting, lead generation, and customer engagement.",
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="bg-white py-24">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Why Specialist Line
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Built Around Performance,
                        <br />
                        Not Promises.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We believe successful outsourcing is about consistency,
                        communication, and measurable results. Our goal is to become an
                        extension of your sales team—not just another vendor.
                    </p>

                    <button className="mt-8 rounded-xl bg-sky-600 px-7 py-4 font-medium text-white transition hover:bg-sky-700">
                        Schedule a Consultation
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {features.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-white hover:shadow-lg"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                                    <Icon className="h-6 w-6 text-sky-600" />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}