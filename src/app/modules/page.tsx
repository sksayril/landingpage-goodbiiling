import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Package,
  Calculator,
  UserCheck,
  FileText,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";

export default function ModulesPage() {
  const modulesList = [
    {
      id: "pos",
      name: "Point of Sale (POS) & Fast Billing",
      badge: "Flagship Engine",
      description:
        "High-velocity POS billing counter designed for supermarkets, retail garments, and electronics stores. Handles up to 100 items per minute with full keyboard shortcuts and barcode auto-detection.",
      features: [
        "Barcode scanner & thermal printer (2-inch / 3-inch) auto-connect",
        "Split payment: Cash, UPI, Credit Card, Due on ledger",
        "Hold cart & resume transaction instantly",
        "Offline bill caching with background cloud sync",
      ],
      icon: ShoppingCart,
    },
    {
      id: "inventory",
      name: "Inventory & Warehouse Management",
      badge: "Real-time Stock",
      description:
        "Eliminate stockouts and inventory shrinkage. Track products by batch, serial number, IMEI, and expiry dates across primary and secondary storage warehouses.",
      features: [
        "Low stock threshold triggers with auto reorder notifications",
        "Multi-warehouse inter-branch transfer challans",
        "Barcode & QR label generation and bulk sheet printing",
        "Stock audit and physical stock variance reconciliation",
      ],
      icon: Package,
    },
    {
      id: "gst",
      name: "E-Waybill & GST Compliance",
      badge: "100% Tax Compliant",
      description:
        "Stay 100% compliant with Indian tax regulations. Generate IRN verified E-Invoices and E-Waybills in 1-click directly from your sales invoice without visiting the portal.",
      features: [
        "One-click GSTR-1, GSTR-3B JSON exports for CA filing",
        "HSN / SAC auto-finder with prescribed GST slab rates",
        "Automated E-waybill generation via NIC API integration",
        "Reverse charge mechanism (RCM) and TDS ledger support",
      ],
      icon: FileText,
    },
    {
      id: "accounting",
      name: "Double-Entry Financial Accounting",
      badge: "Auditor Ready",
      description:
        "Complete automated double-entry financial ledger books. Every sale, purchase return, and expense automatically updates your Profit & Loss statement and Balance Sheet in real time.",
      features: [
        "Customer & Supplier ledger statements with WhatsApp reminder link",
        "Bank reconciliation with statement import (CSV/Excel)",
        "Automated Trial Balance, Balance Sheet, and P&L statements",
        "Multi-currency support with exchange rate ledger adjustment",
      ],
      icon: Calculator,
    },
    {
      id: "hrm",
      name: "HRM, Attendance & Payroll",
      badge: "Staff Management",
      description:
        "Manage cashier shifts, sales commissions, biometric attendance, and monthly salary disbursement right inside your business software.",
      features: [
        "Biometric fingerprint & facial attendance machine sync",
        "Automatic salary slip generation with PF, ESI & bonus deductions",
        "Staff commission tracking based on sales target achievement",
        "Leave management with employee self-service login",
      ],
      icon: UserCheck,
    },
    {
      id: "branches",
      name: "Multi-Branch & Franchise ERP",
      badge: "Enterprise Multi-Store",
      description:
        "Run 5, 20, or 100 retail outlets from one central headquarters dashboard. Control master product catalog, branch pricing policies, and consolidated ledger reports.",
      features: [
        "Centralized master inventory with branch-wise allotment",
        "Branch vs branch sales performance comparison metrics",
        "Unified customer loyalty points valid across all outlets",
        "Strict branch-level staff access permissions",
      ],
      icon: Building2,
    },
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-slate-100/50 min-h-[85vh]">
      {/* Floating Glassmorphism Ambient Mesh Blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[650px] h-[650px] bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/15 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            All-In-One Unified Suite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ERP Modules</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Say goodbye to 5 disconnected software tools. GoodBilling unifies every department of your enterprise under one synchronized database.
          </p>
        </div>

        {/* Modules List in Glassmorphic Cards */}
        <div className="space-y-10">
          {modulesList.map((mod) => {
            const Icon = mod.icon;

            return (
              <div
                key={mod.id}
                id={mod.id}
                className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-white/70 hover:bg-white/90 backdrop-blur-2xl border border-white/85 hover:border-emerald-400/90 shadow-[0_12px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_24px_50px_-10px_rgba(16,185,129,0.22)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white/80 backdrop-blur-md text-emerald-800 text-xs font-black border border-white shadow-xs">
                      {mod.badge}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {mod.name}
                    </h2>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                      {mod.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      {mod.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                          <div className="p-0.5 rounded-full bg-emerald-600 text-white mt-0.5 shrink-0 shadow-xs">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        href="/register"
                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 flex items-center gap-2 hover:scale-[1.02]"
                      >
                        <span>Activate {mod.name.split(" ")[0]} Module</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex items-center justify-center">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/95 shadow-md shadow-emerald-500/10 flex flex-col items-center justify-center text-emerald-600 p-6 text-center">
                      <Icon className="w-16 h-16 stroke-[1.5] mb-2" />
                      <span className="text-xs font-extrabold text-slate-800">
                        {mod.name.split("&")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
