const items = [
  "Customer Care",
  "Telemarketing Service",
  "B2B/B2C Lead Gen",
  "24/7 Technical Support",
  "Inbound & Outbound Calling",
  "Virtual Assistant",
  "Back Office Support",
  "Training & Coaching",
  "Social Media Management",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-slate-200 bg-slate-100 py-4">
      <div className="marquee flex w-max gap-10">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-slate-700"
          >
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}