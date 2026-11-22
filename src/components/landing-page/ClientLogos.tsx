import React from "react";
import { Star, ShieldCheck, CheckCircle2, Award } from "lucide-react";

export default function ClientLogos() {
  const brands = [
    { name: "FreshMart Supermarkets", category: "Retail Chain" },
    { name: "Royal Garments & Textiles", category: "Apparel Hub" },
    { name: "Apex Pharma Distributors", category: "Wholesale Network" },
    { name: "Cafe Bistro & Kitchens", category: "F&B Chain" },
    { name: "Urban Trends Lifestyle", category: "Departmental" },
    { name: "National Auto & Hardware", category: "Distributor" },
  ];

  return (
    <section className="py-8 bg-white/50 backdrop-blur-xl border-y border-white/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Trust Score Badge */}
          <div className="flex items-center gap-3 shrink-0 px-4 py-2 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-xs">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-slate-700 font-semibold">
              <strong className="text-slate-900 font-extrabold">4.9 / 5</strong> rating from 2,400+ verified retailers
            </div>
          </div>

          {/* Frosted Client Pills */}
          <div className="w-full lg:w-auto overflow-hidden">
            <div className="flex items-center justify-center lg:justify-end gap-3 sm:gap-4 flex-wrap">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="px-3.5 py-1.5 rounded-xl bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/80 shadow-xs flex items-center gap-2 transition-all duration-200 cursor-default group"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors" />
                  <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700 transition-colors">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Compliance Certifications Strip */}
        <div className="mt-6 pt-5 border-t border-white/70 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ISO 27001 Certified Security</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% GST &amp; E-Waybill Compliant</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Top Rated Retail ERP 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Indian Cloud Data Residency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
