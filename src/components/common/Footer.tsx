import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 overflow-hidden p-1">
                <Image
                  src="/logo.png"
                  alt="GoodBilling Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-0.5">
                  Good<span className="text-emerald-400 font-black">Billing</span>
                </span>
                <p className="text-[10px] text-emerald-400/80 font-bold tracking-wider uppercase">
                  Billing &amp; Inventory ERP
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The all-in-one business software to manage billing, POS, inventory, accounting, and multi-branch operations. Designed for high growth businesses.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 98765 43210 / 1800-890-GOODBILL</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>support@goodbilling.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Tech Park Tower, Sector 5, Kolkata, WB - 700091</span>
              </div>
            </div>
          </div>

          {/* Column: Product */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Modules
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/modules#pos" className="hover:text-emerald-400 transition">
                  POS & Fast Billing
                </Link>
              </li>
              <li>
                <Link href="/modules#inventory" className="hover:text-emerald-400 transition">
                  Inventory & Stock
                </Link>
              </li>
              <li>
                <Link href="/modules#gst" className="hover:text-emerald-400 transition">
                  E-Waybill & GST Filing
                </Link>
              </li>
              <li>
                <Link href="/modules#accounting" className="hover:text-emerald-400 transition">
                  Double-entry Accounting
                </Link>
              </li>
              <li>
                <Link href="/modules#hrm" className="hover:text-emerald-400 transition">
                  HRM & Payroll Engine
                </Link>
              </li>
              <li>
                <Link href="/modules#branches" className="hover:text-emerald-400 transition">
                  Multi-Branch Manager
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Industries */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Retail & Garments
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Supermarkets & Grocery
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Wholesale & Distributors
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Restaurants & Cafes
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Pharmacy & Healthcare
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Service & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-emerald-400 transition">
                  Schedule Live Demo
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-emerald-400 transition">
                  Help Center & Guides
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-emerald-400 transition">
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-emerald-400 transition">
                  Start Free Trial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ISO 27001 Certified &amp; 100% GST Compliant Cloud Architecture</span>
          </div>

          <p className="flex items-center gap-1">
            © 2026 GoodBilling Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
