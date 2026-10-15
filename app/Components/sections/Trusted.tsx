import { BadgeCheck, Clock3, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Experienced Team",
    description: "Our professionals are trained to handle diverse business needs with precision.",
  },
  {
    icon: Sparkles,
    title: "Customized Solutions",
    description: "We tailor our services to align with your specific requirements.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description: "Ensuring your business remains operational around the clock.",
  },
  {
    icon: ShieldCheck,
    title: "Cost Efficiency",
    description: "Delivering top-notch services without the overhead costs.",
  },
];

export default function Trusted() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Why work with us
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Some of the industries we serve
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              At SpecialistLine.com, we serve all industries that require outsourcing for
              their additional operational needs, including lead generation, customer support,
              chat support, and virtual assistance. Our expertise in call center services ensures
              that clients receive high-quality support tailored to their specific requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Customer Care
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Lead Generation
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Virtual Assistance
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Back Office Support
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                24/7 Tech Support
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-600">
                    <Icon className="h-6 w-6 text-sky-600 transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 px-6 py-7 text-white shadow-xl">
            <p className="text-4xl font-extrabold text-cyan-300">256</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Consultancy projects delivered with excellence.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white px-6 py-7 shadow-sm">
            <p className="text-4xl font-extrabold text-slate-900">607</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Total projects successfully executed.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white px-6 py-7 shadow-sm">
            <p className="text-4xl font-extrabold text-slate-900">1463</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Happy clients across diverse global industries.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white px-6 py-7 shadow-sm">
            <p className="text-4xl font-extrabold text-slate-900">568</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Dedicated members &amp; trained in-house agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}