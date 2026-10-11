export default function Trusted() {
    const companies = [
        "Merchant Funding",
        "Business Capital",
        "Funding Partners",
        "MCA Network",
        "Finance Group",
    ];

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Trusted by Funding Companies
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-5">
                    {companies.map((company) => (
                        <div
                            key={company}
                            className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-center font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-lg"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}