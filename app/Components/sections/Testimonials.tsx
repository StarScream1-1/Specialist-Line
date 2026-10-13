import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Anderson",
    company: "Capital Funding Group",
    quote:
      "Specialist Line improved the quality of our appointments and helped our closers spend more time on real opportunities. The team is professional and consistent.",
  },
  {
    name: "Sarah Mitchell",
    company: "Business Advance Solutions",
    quote:
      "Their communication has been excellent from day one. They understand the MCA space and represent our business in a clean, professional way.",
  },
  {
    name: "David Carter",
    company: "Prime Financial Services",
    quote:
      "We have seen stronger conversations and better campaign flow since working with them. They are reliable and easy to work with.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Client Reviews
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Trusted by Growing Funding Teams
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We focus on professionalism, consistency, and real results. Here’s
            what partners say about working with Specialist Line.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-sky-100/70 blur-2xl transition duration-300 group-hover:bg-sky-200/70" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-6 text-[17px] leading-8 text-slate-600">
                  “{item.quote}”
                </p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}