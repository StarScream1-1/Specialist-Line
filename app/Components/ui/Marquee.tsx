import {
    Zap,
    ShieldCheck,
    DollarSign,
    PhoneCall,
    Users,
    Building2,
    Clock,
    Sparkles,
    TrendingUp,
    CheckCircle2,
} from "lucide-react";

const marqueeItems = [
    { icon: DollarSign, text: "$120M+ Capital Facilitated", highlight: true },
    { icon: PhoneCall, text: "Instant Warm Live Transfers" },
    { icon: ShieldCheck, text: "100% TCPA & DNC Compliant" },
    { icon: TrendingUp, text: "92% Average Contact Rate", highlight: true },
    { icon: Building2, text: "45K+ Qualified Merchant Profiles" },
    { icon: Users, text: "Dedicated Trained BPO Agents" },
    { icon: Clock, text: "48-Hour Rapid Campaign Onboarding" },
    { icon: Sparkles, text: "Custom Underwriting Filters", highlight: true },
    { icon: Zap, text: "Real-Time CRM & Lead Delivery" },
    { icon: CheckCircle2, text: "Zero Long-Term Lock-Ins" },
];

export default function Marquee() {
    return (
        <div className="relative w-full overflow-hidden border-y border-slate-200/80 bg-white py-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none">
            {/* Left and Right Fade Masks for smooth gradient fading */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* Marquee Inner Track */}
            <div className="flex w-max items-center marquee">
                {/* Render twice for seamless looping with CSS translateX(-50%) */}
                {[...Array(2)].map((_, setIdx) => (
                    <div key={setIdx} className="flex items-center gap-6 pr-6">
                        {marqueeItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={`${setIdx}-${idx}`}
                                    className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                                        item.highlight
                                            ? "border border-sky-200 bg-sky-50 text-sky-800 shadow-sm"
                                            : "border border-slate-200/80 bg-slate-50/80 text-slate-700 hover:border-slate-300"
                                    }`}
                                >
                                    <span
                                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                            item.highlight
                                                ? "bg-sky-600 text-white"
                                                : "bg-slate-200/70 text-slate-600"
                                        }`}
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                    </span>
                                    <span className="whitespace-nowrap tracking-tight">
                                        {item.text}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
