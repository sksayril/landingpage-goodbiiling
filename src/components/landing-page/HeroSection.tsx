import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  CreditCard,
  Zap,
  Headphones,
} from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import { BRAND_INFO } from "@/data/landingData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-br from-emerald-50/60 via-teal-50/30 to-slate-100/60">
      {/* Floating Glassmorphism Ambient Mesh Blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[650px] h-[650px] bg-gradient-to-br from-emerald-400/25 via-teal-300/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute top-1/2 left-0 -ml-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/20 via-emerald-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Checklist, CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl border border-white/90 text-emerald-800 text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{BRAND_INFO.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-black tracking-tight text-slate-900 leading-[1.12]">
              {BRAND_INFO.heroTitlePrefix}{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block sm:inline">
                {BRAND_INFO.heroTitleHighlight}
              </span>{" "}
              {BRAND_INFO.heroTitleSuffix}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
              {BRAND_INFO.heroDescription}
            </p>

            {/* 2-Column Frosted Glass Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {BRAND_INFO.heroChecklist.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-xs text-slate-700 font-semibold text-xs sm:text-sm hover:bg-white/85 transition"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="px-6.5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all duration-200 flex items-center gap-2 group hover:scale-[1.02]"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/book-demo"
                className="px-5.5 py-3.5 rounded-2xl bg-white/70 hover:bg-white/95 backdrop-blur-xl border border-white/90 text-slate-800 font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md hover:border-emerald-300 group"
              >
                <Calendar className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Book a Demo</span>
              </Link>
            </div>

            {/* Glass Trust Badges Bar */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-5 px-4 py-2.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-xs text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Setup in 5 Minutes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Headphones className="w-4 h-4 text-emerald-600" />
                  <span>Free Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Fidelity Laptop ERP Mockup */}
          <div className="lg:col-span-6 relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
