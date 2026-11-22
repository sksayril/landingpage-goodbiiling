import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 relative overflow-hidden bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 px-7 py-14 sm:px-14 sm:py-16 shadow-[0_25px_60px_rgba(6,78,59,0.35)] border border-emerald-500/30">
          {/* Decorative floating glass orbs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-teal-300/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-white tracking-tight leading-tight">
                Ready to Streamline Your Business Operations?
              </h2>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed font-normal">
                Start your 14-day free trial today and experience the speed of GoodBilling. No credit card required.
              </p>
            </div>

            {/* Right Buttons with Glass Sheen */}
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                href="/register"
                className="px-7 py-4 rounded-2xl bg-white text-emerald-800 font-extrabold text-sm hover:bg-emerald-50 hover:shadow-2xl transition-all duration-200 flex items-center gap-2 group shadow-lg hover:scale-[1.02]"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/book-demo"
                className="px-6 py-4 rounded-2xl border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all duration-200 flex items-center gap-2 backdrop-blur-xl shadow-xs"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
