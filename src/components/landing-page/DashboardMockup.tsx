"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  ShoppingBag,
  Package,
  Users,
  Search,
  Bell,
  Calendar,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"sales" | "purchase" | "expenses">("sales");

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -right-8 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-8 w-60 h-60 bg-green-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Modern Laptop Container */}
      <div className="relative mx-auto transition-transform hover:scale-[1.01] duration-300">
        {/* Laptop Display Top Shell */}
        <div className="relative mx-auto bg-slate-900 rounded-t-[1.75rem] p-2.5 sm:p-3.5 shadow-2xl border-t border-x border-slate-700/80">
          {/* Webcam & Sensor */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700" />
            <span className="w-1 h-1 rounded-full bg-emerald-400/50" />
          </div>

          {/* Screen Display Bezel */}
          <div className="bg-slate-50 rounded-xl overflow-hidden shadow-inner border border-slate-200/90 text-slate-800">
            {/* Top ERP Header Bar */}
            <div className="bg-white border-b border-slate-100 px-3 sm:px-4 py-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md overflow-hidden bg-white/90 border border-slate-200/80 flex items-center justify-center p-0.5">
                    <Image
                      src="/logo.png"
                      alt="GoodBilling Logo"
                      width={18}
                      height={18}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-bold text-slate-900 text-[11px] sm:text-xs">
                    Good<span className="text-emerald-600">Billing</span>
                  </span>
                </div>

                {/* Dashboard Nav Tabs */}
                <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                  <span className="text-emerald-700 font-semibold px-1.5 py-0.5 rounded bg-emerald-50">
                    Dashboard
                  </span>
                  <span className="hover:text-slate-900 cursor-pointer">POS</span>
                  <span className="hover:text-slate-900 cursor-pointer">Product</span>
                  <span className="hover:text-slate-900 cursor-pointer">Purchase</span>
                  <span className="hover:text-slate-900 cursor-pointer">Sale</span>
                  <span className="hover:text-slate-900 cursor-pointer">Accounting</span>
                  <span className="hover:text-slate-900 cursor-pointer">Reports</span>
                </div>
              </div>

              {/* Right User Bar */}
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                <Bell className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center">
                  SA
                </div>
              </div>
            </div>

            {/* Dashboard Subheader: Greeting & Filters */}
            <div className="bg-white/80 px-3 sm:px-4 py-2 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                  Good Morning, SK Sayril Amed 👋
                </h4>
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-slate-400 mt-0.5">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>Sun, 22 Nov 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[9px] sm:text-[10px] font-medium text-slate-700">
                  <span>Main Branch</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[9px] sm:text-[10px] font-medium text-slate-700">
                  <span>This Month</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Main Dashboard Body */}
            <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-white to-slate-50/70">
              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {/* Total Sales */}
                <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-500">
                      Total Sales
                    </span>
                    <div className="p-1 rounded bg-emerald-50 text-emerald-600">
                      <ShoppingCart className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xs sm:text-sm font-bold text-slate-900">₹5,42,800</div>
                    <div className="text-[8px] sm:text-[9px] font-medium text-emerald-600 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-2.5 h-2.5" />
                      <span>+112.8%</span>
                    </div>
                  </div>
                </div>

                {/* Total Purchase */}
                <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-500">
                      Total Purchase
                    </span>
                    <div className="p-1 rounded bg-green-50 text-green-600">
                      <ShoppingBag className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xs sm:text-sm font-bold text-slate-900">₹3,18,200</div>
                    <div className="text-[8px] sm:text-[9px] font-medium text-emerald-600 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-2.5 h-2.5" />
                      <span>+9.4%</span>
                    </div>
                  </div>
                </div>

                {/* Total Products */}
                <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-500">
                      Total Products
                    </span>
                    <div className="p-1 rounded bg-amber-50 text-amber-600">
                      <Package className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xs sm:text-sm font-bold text-slate-900">4,382</div>
                    <div className="text-[8px] sm:text-[9px] font-medium text-emerald-600 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-2.5 h-2.5" />
                      <span>+5.1%</span>
                    </div>
                  </div>
                </div>

                {/* Total Customers */}
                <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-500">
                      Total Customers
                    </span>
                    <div className="p-1 rounded bg-sky-50 text-sky-600">
                      <Users className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xs sm:text-sm font-bold text-slate-900">1,275</div>
                    <div className="text-[8px] sm:text-[9px] font-medium text-emerald-600 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-2.5 h-2.5" />
                      <span>+6.9%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Row: Sales Overview & Business Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Sales Overview Area Chart (2 Cols) */}
                <div className="sm:col-span-2 bg-white p-2.5 sm:p-3 rounded-lg border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-800">
                      Sales Overview
                    </span>
                    <div className="flex items-center gap-1 text-[8px] sm:text-[9px]">
                      <button
                        onClick={() => setActiveTab("sales")}
                        className={`px-1.5 py-0.5 rounded font-medium transition ${
                          activeTab === "sales"
                            ? "bg-emerald-600 text-white"
                            : "text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        Sales
                      </button>
                      <button
                        onClick={() => setActiveTab("purchase")}
                        className={`px-1.5 py-0.5 rounded font-medium transition ${
                          activeTab === "purchase"
                            ? "bg-emerald-600 text-white"
                            : "text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        Purchase
                      </button>
                      <button
                        onClick={() => setActiveTab("expenses")}
                        className={`px-1.5 py-0.5 rounded font-medium transition ${
                          activeTab === "expenses"
                            ? "bg-emerald-600 text-white"
                            : "text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        Expenses
                      </button>
                    </div>
                  </div>

                  {/* SVG Line Chart */}
                  <div className="h-24 sm:h-28 w-full relative">
                    <svg
                      viewBox="0 0 300 90"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="0" y1="18" x2="300" y2="18" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="42" x2="300" y2="42" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="66" x2="300" y2="66" stroke="#f1f5f9" strokeWidth="1" />

                      {/* Area Fill */}
                      <polygon
                        points="0,85 10,80 35,74 70,68 105,72 140,55 175,40 210,48 245,25 280,20 300,24 300,90 0,90"
                        fill="url(#salesGrad)"
                      />

                      {/* Smooth Line Curve */}
                      <path
                        d="M0,85 Q10,80 35,74 T70,68 T105,72 T140,55 T175,40 T210,48 T245,25 T280,20 T300,24"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Pulse point at recent high */}
                      <circle cx="280" cy="20" r="3.5" fill="#10b981" />
                      <circle cx="280" cy="20" r="6" fill="#10b981" opacity="0.3" />
                    </svg>
                  </div>

                  {/* Timeline labels */}
                  <div className="flex justify-between text-[7px] sm:text-[8px] text-slate-400 mt-1">
                    <span>01 Nov</span>
                    <span>04 Nov</span>
                    <span>07 Nov</span>
                    <span>10 Nov</span>
                    <span>13 Nov</span>
                    <span>16 Nov</span>
                    <span>19 Nov</span>
                    <span>22 Nov</span>
                  </div>
                </div>

                {/* Business Summary Donut Ring */}
                <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 self-start mb-2">
                    Business Summary
                  </span>

                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      {/* Base circle */}
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="4"
                      />
                      {/* Segment 1: Sales */}
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="4"
                        strokeDasharray="65 100"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      />
                      {/* Segment 2: Purchase */}
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="4"
                        strokeDasharray="25 100"
                        strokeDashoffset="-65"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-[8px] sm:text-[9px] font-bold text-slate-900 leading-tight">
                        ₹5,42,800
                      </span>
                      <span className="text-[6.5px] sm:text-[7.5px] text-slate-400">
                        Total Sales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Hinge & Base Plate */}
        <div className="relative -mt-1 mx-auto max-w-[95%]">
          {/* Beveled keyboard hinge deck */}
          <div className="h-3.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-b-md shadow-md flex items-center justify-center">
            {/* Display notch */}
            <div className="w-16 h-1 bg-slate-600/70 rounded-full" />
          </div>
          {/* Laptop Base Bottom Lip */}
          <div className="h-2 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 rounded-b-xl shadow-2xl mx-2" />
        </div>
      </div>
    </div>
  );
}
