"use client";

import { useEffect, useState } from "react";
import { Clock, Globe } from "lucide-react";

export default function GlobalClocks() {
  const [times, setTimes] = useState({
    dhaka: "",
    newYork: "",
    london: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        dhaka: now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        newYork: now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        london: now.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Dhaka Hub (HQ)
        </div>
        <p className="mt-2 text-2xl font-black text-white font-mono tracking-tight">
          {times.dhaka || "--:--:--"}
        </p>
        <p className="text-[11px] text-slate-400 font-medium">UTC+6 • 24/7 Floor Active</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300">
          <Globe className="h-3 w-3" />
          New York (US East)
        </div>
        <p className="mt-2 text-2xl font-black text-white font-mono tracking-tight">
          {times.newYork || "--:--:--"}
        </p>
        <p className="text-[11px] text-slate-400 font-medium">EDT / EST Client Shift</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-300">
          <Clock className="h-3 w-3" />
          London (UK / GMT)
        </div>
        <p className="mt-2 text-2xl font-black text-white font-mono tracking-tight">
          {times.london || "--:--:--"}
        </p>
        <p className="text-[11px] text-slate-400 font-medium">GMT / BST European Shift</p>
      </div>
    </div>
  );
}
