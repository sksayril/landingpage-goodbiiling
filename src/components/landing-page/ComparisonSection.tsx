import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Zap } from "lucide-react";

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Real-time Cloud Sync & Multi-Device",
      goodbilling: "Instant cloud sync on PC, Laptop, Mac & Mobile",
      traditional: "Stuck to 1 offline desktop computer",
      isGoodbillingBetter: true,
    },
    {
      feature: "1-Click Govt E-Waybill & E-Invoice",
      goodbilling: "Direct Govt NIC API in 2 seconds from invoice",
      traditional: "Manual tedious entry on Govt tax portal",
      isGoodbillingBetter: true,
    },
    {
      feature: "Multi-Branch & Central Warehouse Sync",
      goodbilling: "Centralized stock ledger across all stores",
      traditional: "Disconnected data, manual weekly tallying",
      isGoodbillingBetter: true,
    },
    {
      feature: "WhatsApp Invoice & Payment Link",
      goodbilling: "Instant digital receipt & UPI QR on WhatsApp",
      traditional: "Paper receipt only or costly SMS integration",
      isGoodbillingBetter: true,
    },
    {
      feature: "Automated Daily Cloud Backups",
      goodbilling: "Automated 4x daily geo-redundant encrypted backup",
      traditional: "Risk of hard drive failure & virus data loss",
      isGoodbillingBetter: true,
    },
    {
      feature: "Staff HRM, Shifts & Payroll Engine",
      goodbilling: "Cashier shifts, commissions & biometric sync built-in",
      traditional: "Requires separate Excel sheets or outside apps",
      isGoodbillingBetter: true,
    },
    {
      feature: "Customer Support & Remote Help",
      goodbilling: "24/7 Phone, WhatsApp & remote AnyDesk included",
      traditional: "Heavy annual AMC charges and slow response",
      isGoodbillingBetter: true,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Why Switch to Modern Cloud ERP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            GoodBilling vs. <span className="text-slate-400 font-semibold">Traditional Offline Billing Software</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Don&apos;t let slow, outdated software hold your store back. See why 10,000+ modern retailers made the switch.
          </p>
        </div>

        {/* Comparison Table in Glassmorphism */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden bg-white/70 backdrop-blur-2xl">
          <div className="grid grid-cols-12 bg-slate-900/95 backdrop-blur-md text-white text-xs sm:text-sm font-bold p-4 sm:p-5 border-b border-white/20">
            <div className="col-span-5 sm:col-span-4 uppercase tracking-wider text-slate-300">
              Feature / Capability
            </div>
            <div className="col-span-4 sm:col-span-4 text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>GoodBilling</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hidden sm:inline">
                Modern Cloud
              </span>
            </div>
            <div className="col-span-3 sm:col-span-4 uppercase tracking-wider text-slate-400">
              Old Desktop Software / Excel
            </div>
          </div>

          <div className="divide-y divide-white/70 text-xs sm:text-sm">
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-12 p-4.5 sm:p-5 items-center hover:bg-white/80 transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900 pr-2">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 flex items-start gap-2 text-emerald-800 font-semibold pr-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.goodbilling}</span>
                </div>
                <div className="col-span-3 sm:col-span-4 flex items-start gap-2 text-slate-400 font-medium">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all duration-200 group hover:scale-[1.02]"
          >
            <span>Upgrade to GoodBilling (Free Data Migration Included)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
