import { Check, X, Shield, Zap, Sparkles } from "lucide-react";

const rows = [
  {
    feature: "Time to Hire & Deploy",
    inHouse: "4 to 8 weeks of interviewing & screening",
    specialist: "48 to 72 hours ready-to-go trained talent",
    winner: true,
  },
  {
    feature: "Monthly Cost per Agent",
    inHouse: "$4,200 – $6,500 (Salary + benefits + taxes)",
    specialist: "Starting from $1,250 (All-inclusive fixed rate)",
    winner: true,
  },
  {
    feature: "Hardware, VOIP & Fiber Internet",
    inHouse: "$2,000+ per desk setup & maintenance",
    specialist: "$0 (Modern workstations & generator backup included)",
    winner: true,
  },
  {
    feature: "Management & Quality Assurance",
    inHouse: "You or your team must supervise daily calls",
    specialist: "Dedicated QA Team & Operations Manager included",
    winner: true,
  },
  {
    feature: "Operational Hours",
    inHouse: "Limited to 9 AM - 5 PM local timezone",
    specialist: "True 24/7/365 global shift coverage",
    winner: true,
  },
  {
    feature: "Turnover & Sick Leave Risk",
    inHouse: "Workflow halts; costly recruiting restarts",
    specialist: "Zero-downtime hot-swap backup agents ready",
    winner: true,
  },
  {
    feature: "Contract Flexibility",
    inHouse: "Heavy severance liability & rigid contracts",
    specialist: "Agile month-to-month scaling up or down",
    winner: true,
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <Zap className="h-3.5 w-3.5 text-cyan-300" />
            Clear Comparison
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Why Modern Businesses Choose{" "}
            <span className="gradient-text">Specialist Line</span>
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            See how outsourcing your call center, lead generation, and back-office operations
            compares to traditional domestic hiring.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-white/5 py-4 px-6 text-xs font-bold uppercase tracking-wider">
            <div className="md:col-span-4 text-slate-400">Capability / Requirement</div>
            <div className="hidden md:block md:col-span-4 text-slate-400">Traditional In-House Hiring</div>
            <div className="hidden md:block md:col-span-4 text-cyan-300">With Specialist Line</div>
          </div>

          <div className="divide-y divide-white/5">
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 p-5 md:px-6 transition hover:bg-white/[0.03]"
              >
                {/* Feature Name */}
                <div className="md:col-span-4 font-bold text-white text-sm">
                  {row.feature}
                </div>

                {/* In-House Column */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-slate-400">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mt-0.5">
                    <X className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="md:hidden font-semibold text-slate-300 block mb-0.5">In-House: </span>
                    {row.inHouse}
                  </div>
                </div>

                {/* Specialist Line Column */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs font-medium text-slate-200">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="md:hidden font-semibold text-cyan-300 block mb-0.5">Specialist Line: </span>
                    <span className="text-cyan-200 font-semibold">{row.specialist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
