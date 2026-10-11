export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500">
            <div className="relative mx-auto max-w-7xl px-6 py-32 text-center text-white">
                <span className="rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur">
                    Trusted BPO & MCA Lead Generation Partner
                </span>

                <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
                    Grow Your Business
                    <br />
                    With Qualified
                    <span className="block text-cyan-200">
                        Merchant Cash Advance Leads
                    </span>
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-lg text-sky-100">
                    Specialist Line helps funding companies increase conversions through
                    appointment setting, live transfers, cold calling, and experienced
                    BPO professionals.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5">
                    <a
                        href="#contact"
                        className="rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 shadow-lg transition hover:bg-sky-50"
                    >
                        Book Appointment
                    </a>

                    <a
                        href="#services"
                        className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white/10"
                    >
                        Our Services
                    </a>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                        <h3 className="text-3xl font-bold">25K+</h3>
                        <p className="mt-2 text-sky-100">Qualified Leads Generated</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                        <h3 className="text-3xl font-bold">98%</h3>
                        <p className="mt-2 text-sky-100">Client Satisfaction</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                        <h3 className="text-3xl font-bold">24/7</h3>
                        <p className="mt-2 text-sky-100">Professional Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}