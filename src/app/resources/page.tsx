import React from "react";
import Link from "next/link";
import { BookOpen, HelpCircle, FileText, ArrowRight, Video } from "lucide-react";

export default function ResourcesPage() {
  const articles = [
    {
      title: "Step-by-Step Guide: Setting Up Fast POS Thermal Invoicing",
      category: "Hardware Setup",
      readTime: "4 min read",
      icon: BookOpen,
      href: "#",
    },
    {
      title: "Indian GST Masterclass: Generating E-Waybills and GSTR-1 JSON",
      category: "Tax Compliance",
      readTime: "7 min read",
      icon: FileText,
      href: "#",
    },
    {
      title: "Multi-Branch Inventory: How to Avoid Stock Variance & Leakage",
      category: "Operations",
      readTime: "5 min read",
      icon: HelpCircle,
      href: "#",
    },
    {
      title: "How to Integrate Weighing Scales with Retail Billing Counters",
      category: "Supermarkets",
      readTime: "6 min read",
      icon: Video,
      href: "#",
    },
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-slate-100/50 min-h-[85vh]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[650px] h-[650px] bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/15 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            Knowledge Center &amp; Guides
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Learn How to Run a <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Smart Retail Business</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Masterclasses, video tutorials, hardware driver guides, and GST guidelines curated by retail ERP specialists.
          </p>
        </div>

        {/* Resources Grid in Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art) => {
            const Icon = art.icon;
            return (
              <div
                key={art.title}
                className="group p-7 rounded-3xl bg-white/70 hover:bg-white/95 backdrop-blur-xl border border-white/85 hover:border-emerald-400/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.22)] hover:ring-2 hover:ring-emerald-400/20 -translate-y-0 hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-4 cursor-pointer"
              >
                <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 shadow-sm text-emerald-600 group-hover:scale-110 group-hover:border-emerald-300 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">• {art.readTime}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {art.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 pt-1">
                    <span>Read guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Card in Glass Gradient */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-700/60">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <h3 className="text-2xl font-black">Need live remote setup assistance?</h3>
            <p className="text-slate-300 text-sm max-w-xl font-normal">
              Our support technicians can connect over AnyDesk / TeamViewer to help you connect your thermal printer, barcode scanner, and weighing machine for free.
            </p>
          </div>
          <Link
            href="/book-demo"
            className="relative z-10 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shrink-0 hover:scale-[1.02]"
          >
            Connect with Support Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
