import React from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Store,
  Boxes,
  Truck,
  UtensilsCrossed,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import PosHardwareMockup from "./PosHardwareMockup";
import { INDUSTRIES } from "@/data/landingData";

export default function IndustrySection() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case "Store":
        return <Store className="w-5 h-5 text-emerald-600" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-emerald-600" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-emerald-600" />;
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-5 h-5 text-emerald-600" />;
      case "LayoutGrid":
        return <LayoutGrid className="w-5 h-5 text-emerald-600" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: POS Hardware Setup Graphic */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <PosHardwareMockup />
          </div>

          {/* Right Column: Industry Content & 6 Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold tracking-wide border border-white/90 shadow-xs">
                Perfect for Every Business
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Built for Retail, Wholesale and Service Businesses
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                A flexible and scalable solution for shops, restaurants, supermarkets, distributors, and more.
              </p>
            </div>

            {/* 6 Category Pills / Cards with Frosted Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry.name}
                  className="group relative p-4 rounded-2xl bg-white/70 hover:bg-white/90 backdrop-blur-xl border border-white/85 hover:border-emerald-400/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_32px_-8px_rgba(16,185,129,0.22)] hover:ring-2 hover:ring-emerald-400/20 -translate-y-0 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 overflow-hidden cursor-pointer"
                >
                  {/* Subtle corner glow */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-400/0 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-all duration-300 pointer-events-none" />

                  <div className="w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md border border-white/95 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-emerald-300 transition-all duration-300">
                    {getIndustryIcon(industry.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {industry.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition group"
              >
                <span>Discover industry-specific business workflows</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
