import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Package,
  ShoppingBag,
  Calculator,
  UserCheck,
  FileText,
  BarChart3,
  Building2,
  ArrowRight,
} from "lucide-react";
import { FEATURES } from "@/data/landingData";

export default function FeaturesSection() {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-emerald-600" />;
      case "Package":
        return <Package className="w-6 h-6 text-emerald-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
      case "Calculator":
        return <Calculator className="w-6 h-6 text-emerald-600" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-emerald-600" />;
      case "BarChart3":
        return <BarChart3 className="w-6 h-6 text-emerald-600" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-emerald-600" />;
      default:
        return <Package className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-emerald-200/25 to-teal-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold tracking-wide border border-white/90 shadow-xs">
            Complete Business Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Powerful Features for Every Business
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Everything you need to run and grow your business efficiently.
          </p>
        </div>

        {/* 8 Features Grid in Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative p-6.5 rounded-3xl bg-white/70 hover:bg-white/90 backdrop-blur-xl border border-white/85 hover:border-emerald-400/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.25)] hover:ring-2 hover:ring-emerald-400/25 -translate-y-0 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Shimmering glass reflection inside */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-400/0 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Icon Container with Glass highlight */}
                <div className="w-13 h-13 rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-300 group-hover:shadow-md group-hover:shadow-emerald-500/15 transition-all duration-300 mb-5">
                  {getFeatureIcon(feature.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* View details link */}
              {feature.href && (
                <div className="pt-5 mt-2 border-t border-white/60">
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Explore module</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
