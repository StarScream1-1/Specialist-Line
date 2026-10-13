export default function VideoShowcase() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                            Watch Specialist Line
                        </span>

                        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                            A better way to present your business
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                            Add your company video here to give visitors a stronger first
                            impression. It helps the website feel more professional and makes
                            the brand feel real, clear, and trustworthy.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Brand
                                </p>
                                <p className="mt-2 text-lg font-bold text-slate-900">
                                    Modern &amp; Clean
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Style
                                </p>
                                <p className="mt-2 text-lg font-bold text-slate-900">
                                    Premium &amp; Simple
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Purpose
                                </p>
                                <p className="mt-2 text-lg font-bold text-slate-900">
                                    Build Trust Fast
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
                        <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
                            <video
                                className="h-full w-full"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            >
                                <source src="/videos/intro.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}