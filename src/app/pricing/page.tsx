"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/data/landingData";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-slate-100/50 min-h-[85vh]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[650px] h-[650px] bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/15 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Invest in Software That <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Pays for Itself</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            No hidden setup fees. Free cloud backups included with every plan. 14 days free trial with full access.
          </p>

          {/* Monthly / Annual Billing Toggle in Glass Pill */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-bold ${
                !isAnnual ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-15 items-center rounded-full bg-emerald-600 transition-colors focus:outline-hidden p-1 shadow-inner cursor-pointer"
              aria-label="Toggle Billing Interval"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span
                className={`text-sm font-bold ${
                  isAnnual ? "text-slate-900" : "text-slate-500"
                }`}
              >
                Annual Billing
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs shadow-xs">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards in Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 bg-white/70 hover:bg-white/95 backdrop-blur-2xl border transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/90 hover:ring-2 hover:ring-emerald-400/25 hover:shadow-[0_24px_50px_-10px_rgba(16,185,129,0.25)] flex flex-col justify-between ${
                  plan.isPopular
                    ? "border-emerald-500/80 shadow-[0_16px_40px_rgba(16,185,129,0.18)] ring-2 ring-emerald-500/20 lg:-translate-y-2 bg-white/85"
                    : "border-white/85 shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="space-y-2 mb-6">
                    <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 font-medium min-h-[32px]">{plan.description}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900">
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ outlet / month</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium mt-1">
                      {isAnnual ? "Billed annually (Includes GST credits)" : "Billed monthly"}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-white/80">
                  <Link
                    href={plan.ctaHref}
                    className={`block w-full text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-600/30 hover:scale-[1.02]"
                        : "bg-white/80 hover:bg-emerald-600 hover:text-white text-slate-800 border border-white/90 shadow-sm"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="pt-8 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-black text-center text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/85 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                Does it support existing thermal printers and barcode scanners?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Yes! GoodBilling is compatible with any USB, Bluetooth, or WiFi POS thermal printer (TVS, Epson, NGX, Posiflex) and all 1D/2D barcode scanners.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/85 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                Can I operate my billing counter when internet is down?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Yes! Our offline POS mode keeps generating sales bills and barcode prints locally. As soon as the network returns, invoices automatically sync to the cloud.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/85 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                Is my data secure and backed up?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                All data is encrypted with 256-bit SSL and backed up 4 times daily across geo-redundant Indian cloud data centers compliant with ISO 27001 standards.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/85 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                Can I migrate my items and ledger from Tally or Marg?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Yes! We provide an automated 1-click Excel/CSV data import tool to instantly transfer products, parties, opening stock, and supplier ledgers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
