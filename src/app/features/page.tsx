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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { FEATURES } from "@/data/landingData";

export default function FeaturesPage() {
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
    <div className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-slate-100/50 min-h-[85vh]">
      {/* Floating Glassmorphism Ambient Mesh Blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[650px] h-[650px] bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/15 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            Enterprise Grade Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Features Built for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Fast Growth</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Every tool your retail store, supermarket, distribution warehouse, or restaurant needs to maximize operational efficiency and profit margins.
          </p>
        </div>

        {/* Feature Grid with Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="group relative bg-white/70 hover:bg-white/90 backdrop-blur-xl rounded-3xl p-6.5 border border-white/85 hover:border-emerald-400/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.22)] hover:ring-2 hover:ring-emerald-400/20 -translate-y-0 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400/0 rounded-full blur-xl group-hover:bg-emerald-400/15 transition-all duration-300 pointer-events-none" />
              <div>
                <div className="w-13 h-13 rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-300 transition-all duration-300 mb-5">
                  {getFeatureIcon(feat.icon)}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {feat.description}
                </p>

                <ul className="space-y-2 text-xs text-slate-600 font-medium border-t border-white/70 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Instant offline &amp; online sync</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Role-based cashier &amp; admin controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Automated WhatsApp &amp; SMS alerts</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1.5 transition-transform"
                >
                  <span>Test in live trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Glass Sheen */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-emerald-500/30">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-black">Need a custom feature for your industry?</h3>
            <p className="text-emerald-100/90 text-sm mt-1">
              Our engineering team integrates custom barcodes, weighing scale protocols, and ERP bridges.
            </p>
          </div>
          <Link
            href="/book-demo"
            className="relative z-10 px-7 py-3.5 rounded-2xl bg-white text-emerald-800 font-extrabold text-sm hover:bg-emerald-50 transition-all shrink-0 shadow-lg"
          >
            Schedule Technical Call
          </Link>
        </div>
      </div>
    </div>
  );
}
