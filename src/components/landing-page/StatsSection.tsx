import React from "react";
import { Users2, Layers, ShieldCheck, Headphones } from "lucide-react";
import { METRICS } from "@/data/landingData";

export default function StatsSection() {
  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case "Users2":
        return <Users2 className="w-7 h-7 text-emerald-600" />;
      case "Layers":
        return <Layers className="w-7 h-7 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-emerald-600" />;
      case "Headphones":
        return <Headphones className="w-7 h-7 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-emerald-600" />;
    }
  };

  return (
    <section className="py-12 relative overflow-hidden bg-white/40 backdrop-blur-xl border-y border-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="group relative flex items-center gap-4 p-5 rounded-3xl bg-white/70 hover:bg-white/90 backdrop-blur-xl border border-white/85 hover:border-emerald-400/90 hover:ring-2 hover:ring-emerald-400/25 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-8px_rgba(16,185,129,0.22)] -translate-y-0 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Corner soft glow */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-400/0 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-all duration-300 pointer-events-none" />

              <div className="w-13 h-13 rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-emerald-300 transition-all duration-300">
                {getMetricIcon(metric.icon)}
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <div className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                    {metric.subtext}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
