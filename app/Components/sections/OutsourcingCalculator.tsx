"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DollarSign,
  TrendingDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Target,
  UserCheck,
  Cpu,
} from "lucide-react";

const roles = [
  {
    id: "support",
    name: "Customer Support Agent",
    icon: Headphones,
    usHourly: 24, // avg $24/hr with benefits in US
    specialistHourly: 8.5,
    description: "24/7 inbound/outbound customer support, ticketing, email & chat.",
  },
  {
    id: "leadgen",
    name: "B2B / MCA Lead Gen Rep",
    icon: Target,
    usHourly: 28, // avg $28/hr with benefits in US
    specialistHourly: 9.5,
    description: "Cold calling, live transfer qualification, and appointment booking.",
  },
  {
    id: "va",
    name: "Dedicated Virtual Assistant",
    icon: UserCheck,
    usHourly: 26,
    specialistHourly: 8.0,
    description: "Inbox management, executive scheduling, CRM upkeep & research.",
  },
  {
    id: "tech",
    name: "Technical Support L1/L2",
    icon: Cpu,
    usHourly: 32,
    specialistHourly: 11.0,
    description: "Software troubleshooting, CRM integration & round-the-clock IT helpdesk.",
  },
];

export default function OutsourcingCalculator() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [agents, setAgents] = useState(2);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  // Weekly hours per agent * agents * 4.33 weeks per month
  const totalMonthlyHours = agents * hoursPerWeek * 4.33;

  const usMonthlyCost = Math.round(totalMonthlyHours * selectedRole.usHourly * 1.25); // 25% overhead (payroll taxes, health, equipment, office)
  const specialistMonthlyCost = Math.round(totalMonthlyHours * selectedRole.specialistHourly);

  const monthlySavings = Math.max(0, usMonthlyCost - specialistMonthlyCost);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / usMonthlyCost) * 100) || 65;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),transparent)]" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Interactive ROI Calculator
          </div>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            See Exactly How Much You Save With{" "}
            <span className="gradient-text">Specialist Line</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
            Stop overpaying domestic overhead. Compare real in-house hiring costs against our
            fully-managed, battle-tested talent.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Controls Column */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl lg:col-span-7 sm:p-9">
            {/* Step 1: Select Role */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Select Desired Role
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole.id === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                        isSelected
                          ? "border-sky-400 bg-sky-500/15 text-white shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50"
                          : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                          isSelected
                            ? "bg-sky-500 text-white"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold leading-tight">
                          {role.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-400 line-clamp-1">
                          {role.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider for Agents */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Number of Team Members
                </label>
                <span className="rounded-xl border border-sky-400/30 bg-sky-500/20 px-3 py-1 text-base font-extrabold text-cyan-300">
                  {agents} {agents === 1 ? "Agent" : "Agents"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={agents}
                onChange={(e) => setAgents(parseInt(e.target.value))}
                className="mt-4 w-full cursor-pointer accent-sky-400"
              />
              <div className="mt-2 flex justify-between text-[11px] font-semibold text-slate-500">
                <span>1 Agent</span>
                <span>5 Agents</span>
                <span>10 Agents</span>
                <span>15+ Enterprise</span>
              </div>
            </div>

            {/* Step 3: Working hours per week */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Weekly Coverage per Agent
                </label>
                <span className="text-sm font-semibold text-slate-300">
                  {hoursPerWeek} hrs / week
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[20, 40, 60].map((hrs) => (
                  <button
                    key={hrs}
                    type="button"
                    onClick={() => setHoursPerWeek(hrs)}
                    className={`rounded-xl border py-2.5 text-xs font-bold transition ${
                      hoursPerWeek === hrs
                        ? "border-sky-400 bg-sky-500/20 text-white"
                        : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    {hrs === 20 ? "Part-Time (20h)" : hrs === 40 ? "Full-Time (40h)" : "Extended (60h+)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Guarantees checklist */}
            <div className="mt-8 grid gap-2.5 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero recruiting & hiring fees</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Hardware & fiber connection included</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Dedicated QA Supervisor oversight</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>48-hour seamless agent ramp-up</span>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-8 shadow-2xl shadow-sky-950/40 backdrop-blur-2xl">
              <div className="absolute right-0 top-0 -mr-8 -mt-8 h-40 w-40 rounded-full bg-sky-500/15 blur-2xl" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estimated Savings
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-extrabold text-emerald-400 border border-emerald-500/20">
                  <TrendingDown className="h-3.5 w-3.5" />
                  Save ~{savingsPercent}%
                </span>
              </div>

              {/* Big Annual Savings Number */}
              <div className="mt-6 border-b border-white/10 pb-6">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Projected Annual Cost Savings
                </p>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  ${annualSavings.toLocaleString()}
                  <span className="text-lg font-medium text-slate-400"> / year</span>
                </p>
                <p className="mt-2 text-sm text-sky-400 font-semibold">
                  or ~${monthlySavings.toLocaleString()} saved every month
                </p>
              </div>

              {/* Detailed Breakdown Comparison */}
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-3.5">
                  <span className="text-slate-400">Typical US In-House:</span>
                  <span className="font-bold text-slate-300 line-through">
                    ${usMonthlyCost.toLocaleString()}/mo
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-sky-500/30 bg-sky-500/10 p-3.5">
                  <span className="font-semibold text-white">With Specialist Line:</span>
                  <span className="text-base font-extrabold text-cyan-300">
                    ${specialistMonthlyCost.toLocaleString()}/mo
                  </span>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <Link
                  href="/book-appointment"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/50 active:scale-[0.98]"
                >
                  <span>Lock In This Team Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-center text-xs text-slate-400">
                  Free 30-min strategy call • No commitments required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
