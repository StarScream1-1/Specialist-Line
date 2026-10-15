import {
    BadgeCheck,
    CalendarDays,
    Leaf,
    TrendingUp,
    BadgeDollarSign,
    ShieldCheck,
    Users2,
    Handshake,
} from "lucide-react";

const pillars = [
    {
        icon: BadgeCheck,
        number: "01",
        title: "WHY US?",
        description:
            "At SpecialistLine.com, we pride ourselves on our experienced in-house agents who utilize the latest technologies to drive successful lead generation strategies. Our focus on building long-term partnerships ensures that we understand and meet the unique needs of each client, enhancing both B2B and B2C campaigns. With our pre-existing and running experience in various lead generation efforts, we are dedicated to delivering exceptional results that foster growth and success for your business.",
    },
    {
        icon: Leaf,
        number: "02",
        title: "SUSTAINABILITY",
        description:
            "At Specialistline.com, we provide top-notch call center services tailored to enhance your business growth through exceptional customer care and efficient lead generation. Whether you operate in B2B or B2C markets, our virtual assistance offers a seamless and cost-effective solution to manage your customer interactions. Partner with us to elevate your customer experience and drive your business forward.",
    },
    {
        icon: TrendingUp,
        number: "03",
        title: "GROWTH",
        description:
            "At Specialistline.com, we excel in providing exceptional customer care and comprehensive virtual assistance services to both B2B and B2C clients. Our expert call center solutions are designed to streamline lead generation, ensuring a cost-effective solution for your business needs. Let us handle your customer interactions, so you can focus on growing your business.",
    },
    {
        icon: BadgeDollarSign,
        number: "04",
        title: "COST EFFECTIVE",
        description:
            "At Specialistline.com, we offer a cost-effective solution for outsourcing your business needs through our specialized call center services. Our expert team excels in customer care, lead generation, B2B and B2C interactions, ensuring your business operations run smoothly without the overhead costs. Additionally, our virtual assistance services provide you with flexible, high-quality support tailored to your unique requirements.",
    },
    {
        icon: Handshake,
        number: "05",
        title: "LET'S BUILD TRUST",
        description:
            "At Specialistline.com, we pride ourselves on delivering top-tier customer care and lead generation services for both B2B and B2C clients. Our virtual assistance solutions are designed to be both comprehensive and cost-effective, ensuring your business thrives without breaking the bank. Trust us to be your reliable partner in optimizing customer interactions and driving growth.",
    },
];

export default function WhyUs() {
    return (
        <section
            id="why-us"
            className="relative overflow-hidden bg-slate-100 py-24"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.10),transparent_28%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
                            Specialist Line
                        </p>

                        <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                            Outsource your extra works to us!
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                            &quot;Specialist Line, your business&apos;s second office! We
                            handle the details—calls, front desk, virtual assistance, lead
                            gen, and more—freeing you to excel at what you do best. Let us
                            manage the small stuff; you focus on the big picture.&quot;
                        </p>

                        <div className="mt-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-700/20 transition hover:-translate-y-0.5 hover:bg-indigo-800"
                            >
                                <CalendarDays className="h-4 w-4" />
                                Schedule a meeting!
                            </a>
                        </div>
                    </article>

                    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-2xl">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_18%_22%,rgba(250,204,21,0.18),transparent_20%),radial-gradient(circle_at_78%_30%,rgba(59,130,246,0.24),transparent_24%),radial-gradient(circle_at_62%_82%,rgba(168,85,247,0.18),transparent_24%)]" />

                        <div className="relative flex min-h-[420px] flex-col justify-end p-6 md:p-8">
                            <div className="mb-4 flex justify-end">
                                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur">
                                    Your 2nd Office
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/15 bg-black/35 p-5 text-white backdrop-blur-md">
                                <p className="text-sm leading-7 text-white/90 md:text-base">
                                    handling everything from calls to{" "}
                                    <span className="rounded-md bg-violet-500 px-2 py-1 font-semibold">
                                        virtual assistants
                                    </span>
                                    , lead generation, and back-office support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14">
                    <h3 className="text-center text-3xl font-extrabold tracking-tight text-indigo-950 md:text-5xl">
                        What&apos;s Special on &quot;SpecialistLine?&quot;
                    </h3>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {pillars.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.number}
                                    className="group relative overflow-hidden rounded-[1.75rem] border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.07),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-5xl font-extrabold tracking-tight text-indigo-900">
                                                    {item.number}
                                                </p>
                                                <div className="mt-3 h-px w-20 bg-slate-900/80" />
                                            </div>

                                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition duration-300 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                        </div>

                                        <h4 className="mt-6 text-2xl font-extrabold uppercase leading-none tracking-tight text-slate-900">
                                            {item.title}
                                        </h4>

                                        <p className="mt-5 text-[17px] leading-8 text-slate-700">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}