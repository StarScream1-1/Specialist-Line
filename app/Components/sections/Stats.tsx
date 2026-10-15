const stats = [
    {
        number: "25K+",
        title: "Qualified Leads",
    },
    {
        number: "500+",
        title: "Appointments Monthly",
    },
    {
        number: "98%",
        title: "Client Satisfaction",
    },
    {
        number: "24/7",
        title: "Operational Support",
    },
];

export default function Stats() {
    return (
        <section className="bg-slate-900 py-20 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-4">
                {stats.map((item) => (
                    <div key={item.title}>
                        <h2 className="text-5xl font-bold text-sky-400">
                            {item.number}
                        </h2>

                        <p className="mt-4 text-slate-300">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}