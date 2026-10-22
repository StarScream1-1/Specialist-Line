"use client";

import { useState } from "react";
import { Sparkles, HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Services & Fit",
    question: "What core services does Specialist Line provide?",
    answer:
      "We provide full-service BPO capabilities: MCA (Merchant Cash Advance) live transfers, outbound cold calling & appointment setting, 24/7 omnichannel customer care, dedicated virtual assistants, back-office data processing, and 24/7 technical support.",
  },
  {
    category: "Services & Fit",
    question: "Can you tailor outreach to our exact funding or buyer criteria?",
    answer:
      "Yes. We configure every campaign based on your target profile—including minimum monthly gross revenue, time in business, credit score tier, state restrictions, and industry verticals.",
  },
  {
    category: "Operations",
    question: "How fast can you ramp up and deploy a team for us?",
    answer:
      "Our in-house bench of trained specialists allows us to deploy dedicated agents within 48 to 72 hours. We run thorough script training and technical onboarding before the first dial.",
  },
  {
    category: "Operations",
    question: "How are lead details and booked appointments delivered to our team?",
    answer:
      "We synchronize directly into your CRM (Salesforce, HubSpot, Zoho, or proprietary platforms) via webhook/Zapier. Additionally, all qualified leads and calendar invites are sent instantly to your closers' inboxes in real time.",
  },
  {
    category: "Management",
    question: "How do you ensure agent quality and native English fluency?",
    answer:
      "All agents undergo strict accent neutralization and communication screening. Furthermore, dedicated QA supervisors monitor calls in real time and calibrate scorecards weekly to guarantee peak conversion.",
  },
  {
    category: "Contracts & Rates",
    question: "Are your contracts flexible or locked into rigid long-term terms?",
    answer:
      "We operate on flexible, month-to-month partnership agreements. You can scale your agent count up or down as your seasonal demands fluctuate with zero long-term penalties.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-600/20 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Sparkles className="h-3.5 w-3.5" />
            Clear Answers
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Everything you need to know about partnering with Specialist Line as Your 2nd Office.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-sky-300 bg-white shadow-lg shadow-sky-500/5 ring-1 ring-sky-300/40"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-bold text-slate-900 md:text-lg">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "bg-sky-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-2">
                    <p className="text-sm leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions pill */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Have a custom workflow or specific software stack?{" "}
            <Link
              href="/contacts"
              className="font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
            >
              Ask our team directly →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}