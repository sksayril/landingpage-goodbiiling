"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    phone: "",
    businessType: "Retail Store",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-slate-100/50">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/15 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full space-y-8 bg-white/75 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
        {/* Brand */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center border border-white shadow-xs overflow-hidden p-1">
              <Image
                src="/logo.png"
                alt="GoodBilling Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              Good<span className="text-emerald-600">Billing</span>
            </span>
          </Link>
          <h2 className="text-2xl font-black text-slate-900">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Instant setup • No credit card required • Full ERP features enabled
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50/90 backdrop-blur-md border border-emerald-200 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-emerald-900 text-base">
              Welcome to GoodBilling!
            </h3>
            <p className="text-xs text-emerald-700 leading-relaxed font-medium">
              Your store <strong>{formData.businessName}</strong> has been provisioned on the cloud. An activation SMS has been sent to {formData.phone}.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold inline-block shadow-md"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                Business / Store Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Royal Supermarket &amp; Garments"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-2xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SK Sayril Amed"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-2xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                  Mobile Number (WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-2xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                Primary Business Industry
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-2xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
              >
                <option value="Retail Store">Retail Store / Fashion &amp; Apparel</option>
                <option value="Supermarket">Supermarket &amp; Grocery</option>
                <option value="Wholesale">Wholesale &amp; Distribution</option>
                <option value="Restaurant">Restaurant &amp; Cafe</option>
                <option value="Pharmacy">Pharmacy &amp; Medical Shop</option>
                <option value="Electronics">Electronics &amp; Hardware</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center gap-2 mt-2 hover:scale-[1.01] cursor-pointer"
            >
              <span>Create My Free Store Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="text-center pt-2 border-t border-white/80">
          <p className="text-xs text-slate-500 font-medium">
            Already have an active account?{" "}
            <Link href="/login" className="font-bold text-emerald-600 hover:text-emerald-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
