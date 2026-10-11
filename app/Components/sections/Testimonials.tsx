import { Star } from "lucide-react";

const reviews = [
    {
        name: "Michael Anderson",
        company: "Capital Funding Group",
        review:
            "Working with Specialist Line has significantly improved the quality of our appointments. Their team is professional, responsive, and consistently delivers qualified prospects.",
    },
    {
        name: "Sarah Mitchell",
        company: "Business Advance Solutions",
        review:
            "The communication and consistency have been outstanding. Their appointment setters understand our requirements and represent our company professionally.",
    },
    {
        name: "David Carter",
        company: "Prime Financial Services",
        review:
            "We've seen a noticeable increase in qualified conversations since partnering with Specialist Line. Highly recommended for businesses looking to scale.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Testimonials
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Trusted by Businesses We Work With
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                        Our clients value professionalism, transparency, and consistent
                        performance. Here's what they say about working with Specialist Line.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-5 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            <p className="leading-7 text-slate-600">
                                "{review.review}"
                            </p>

                            <div className="mt-8">
                                <h3 className="font-semibold text-slate-900">
                                    {review.name}
                                </h3>

                                <p className="text-sm text-slate-500">
                                    {review.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}