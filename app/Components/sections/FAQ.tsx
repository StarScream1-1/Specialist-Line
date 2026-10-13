const faqs = [
    {
        question: "What services does Specialist Line provide?",
        answer:
            "We provide MCA live transfers, appointment setting, cold calling, dedicated BPO agents, lead generation, underwriting support, and renewal campaigns.",
    },
    {
        question: "Can you work with my funding criteria?",
        answer:
            "Yes. We can tailor campaigns based on your target merchant profile, including time in business, monthly revenue, and qualification requirements.",
    },
    {
        question: "Do you handle appointment scheduling?",
        answer:
            "Yes. We can book qualified appointments directly for your sales team and keep your pipeline organized.",
    },
    {
        question: "How do you share lead or appointment details?",
        answer:
            "At the moment, we can display the form submission on the site, and next we will connect it to Supabase so your managers can review it in one place.",
    },
    {
        question: "Can you provide dedicated agents?",
        answer:
            "Yes. We can support businesses with trained agents for outreach, customer support, lead qualification, and follow-up campaigns.",
    },
];

export default function FAQ() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        FAQ
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        Common Questions
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        A few quick answers to help businesses understand how we work.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-4xl space-y-4">
                    {faqs.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
                        >
                            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                                <div className="flex items-center justify-between gap-4">
                                    <span>{item.question}</span>
                                    <span className="text-2xl font-light text-sky-600 transition group-open:rotate-45">
                                        +
                                    </span>
                                </div>
                            </summary>

                            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}