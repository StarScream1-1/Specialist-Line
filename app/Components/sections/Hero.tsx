import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.20),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_26%)]" />
            <div className="relative mx-auto max-w-7xl px-6 py-28 text-center text-white md:py-32">
                <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur">
                    Trusted BPO & MCA Lead Generation Partner
                </span>

                <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                    Grow Your Business
                    <br />
                    With Qualified
                    <span className="block text-cyan-200">
                        Merchant Cash Advance Leads
                    </span>
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-sky-100 md:text-xl">
                    Specialist Line helps funding companies increase conversions through
                    appointment setting, live transfers, cold calling, and experienced
                    BPO professionals.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5">
                    <Link
                        href="/book-appointment"
                        className="rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 shadow-lg shadow-sky-950/10 transition hover:-translate-y-0.5 hover:bg-sky-50"
                    >
                        Book Appointment
                    </Link>

                    <Link
                        href="#services"
                        className="rounded-xl border border-white/80 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                    >
                        Our Services
                    </Link>
                </div>

                <div className="mt-16 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-white/10 p-6 text-left backdrop-blur-md">
                        <h3 className="text-3xl font-bold">25K+</h3>
                        <p className="mt-2 text-sky-100">Qualified Leads Generated</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-6 text-left backdrop-blur-md">
                        <h3 className="text-3xl font-bold">98%</h3>
                        <p className="mt-2 text-sky-100">Client Satisfaction</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-6 text-left backdrop-blur-md">
                        <h3 className="text-3xl font-bold">24/7</h3>
                        <p className="mt-2 text-sky-100">Professional Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}