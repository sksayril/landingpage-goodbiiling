"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly can my business get started with GoodBilling?",
      a: "You can be up and running in under 5 minutes! Simply create an account, upload your product catalog using our 1-click Excel/CSV importer, connect your thermal printer via USB or Bluetooth, and begin billing immediately.",
    },
    {
      q: "Will it work with my existing thermal printer and barcode scanner?",
      a: "Yes, 100%! GoodBilling supports all standard 2-inch (58mm) and 3-inch (80mm) thermal printers (TVS, Epson, NGX, Posiflex, Rugtek) and all 1D/2D wireless/wired barcode scanners. No proprietary hardware is required.",
    },
    {
      q: "Can I migrate my items, parties, and ledger from Tally, Marg, or Vyapar?",
      a: "Absolutely. We offer automated import templates for products, opening stock batches, customer ledgers, and supplier debts. Our onboarding specialists also offer free remote migration over AnyDesk.",
    },
    {
      q: "What happens if our retail counter loses internet connectivity?",
      a: "GoodBilling includes an automatic Offline POS cache engine. You can keep scanning barcodes, adding items, and printing receipts uninterrupted. As soon as the connection returns, all bills sync automatically to the cloud.",
    },
    {
      q: "Is our sales, profit, and customer data secure and backed up?",
      a: "Your data is protected with bank-grade 256-bit SSL encryption and backed up 4 times daily across secure Indian cloud servers (Mumbai/Hyderabad). Cashiers have role-based restrictions and cannot view profit margins or supplier costs.",
    },
    {
      q: "Do you charge extra for customer support or software updates?",
      a: "No! All cloud software updates, new GST compliance rules, and 24/7 Phone, WhatsApp, and remote AnyDesk support are 100% free with your active subscription. There are never any surprise AMC bills.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-teal-50/20 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Everything you need to know before powering your business with GoodBilling.
          </p>
        </div>

        {/* Accordion List with Frosted Glass */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`rounded-3xl transition-all duration-300 border bg-white/70 backdrop-blur-xl overflow-hidden ${isOpen
                    ? "border-emerald-400/90 ring-2 ring-emerald-400/20 shadow-[0_12px_32px_-6px_rgba(16,185,129,0.18)] bg-white/90"
                    : "border-white/85 hover:border-white shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-200 border border-white/80 ${isOpen
                        ? "rotate-180 bg-emerald-100 text-emerald-700 shadow-xs"
                        : "bg-white/90 text-slate-500 shadow-xs"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-white/80 animate-in fade-in duration-200 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xs text-slate-500 font-medium mb-3">
            Still have questions about your specific retail or wholesale workflow?
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            <span>Talk with our retail ERP solution specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
