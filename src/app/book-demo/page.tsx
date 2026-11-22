"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Video, Users, ArrowRight } from "lucide-react";

export default function BookDemoPage() {
  const [scheduled, setScheduled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "Retail",
    outlets: "1-2 outlets",
    preferredDate: "2026-11-25",
    preferredTime: "11:00 AM",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduled(true);
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-slate-100/50 min-h-[85vh]">
      {/* Decorative ambient background glows matching Home */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/15 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/75 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-[0_25px_60px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left Summary Pane */}
          <div className="md:col-span-5 bg-gradient-to-br from-emerald-900/95 to-slate-950/95 backdrop-blur-xl p-8 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
            <div className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 overflow-hidden p-1">
                  <Image
                    src="/logo.png"
                    alt="GoodBilling Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-black tracking-tight text-white">
                  Good<span className="text-emerald-400">Billing</span>
                </span>
              </Link>

              <div>
                <h3 className="text-2xl font-black leading-tight">
                  Schedule a 1-on-1 Product Walkthrough
                </h3>
                <p className="text-emerald-200/90 text-xs mt-2 leading-relaxed font-normal">
                  See how GoodBilling streamlines billing, tracks your inventory, and ensures 100% GST compliance.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/15 text-xs font-semibold">
                <div className="flex items-center gap-2.5 text-emerald-100">
                  <Video className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30-minute Google Meet demo</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-100">
                  <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Customized to your retail/wholesale flow</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hardware compatibility verification</span>
                </div>
              </div>
            </div>

            <div className="pt-8 text-[11px] text-emerald-300/80 font-medium">
              Trusted by 10,000+ businesses across India.
            </div>
          </div>

          {/* Right Form Pane */}
          <div className="md:col-span-7 p-8 sm:p-10">
            {scheduled ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Demo Session Confirmed!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm leading-relaxed font-medium">
                  We have scheduled your session for <strong>{formData.preferredDate}</strong> at{" "}
                  <strong>{formData.preferredTime}</strong>. A calendar invite and Google Meet link have been sent to {formData.email}.
                </p>
                <div className="pt-4">
                  <Link
                    href="/"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold shadow-md"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-lg font-black text-slate-900 mb-2">
                  Select Your Preferred Slot
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="SK Sayril Amed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 shadow-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@store.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 shadow-xs"
                    >
                      <option value="11:00 AM">11:00 AM IST</option>
                      <option value="02:00 PM">02:00 PM IST</option>
                      <option value="04:30 PM">04:30 PM IST</option>
                      <option value="06:30 PM">06:30 PM IST</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">
                    Number of Branches / Outlets
                  </label>
                  <select
                    value={formData.outlets}
                    onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 shadow-xs"
                  >
                    <option value="1 outlet">1 Single Outlet</option>
                    <option value="2-5 outlets">2 to 5 Outlets</option>
                    <option value="6-20 outlets">6 to 20 Outlets</option>
                    <option value="20+ enterprise">20+ Outlets / Franchise Chain</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center gap-2 mt-2 hover:scale-[1.01] cursor-pointer"
                >
                  <span>Confirm Demo Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
