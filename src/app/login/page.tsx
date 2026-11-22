"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      <div className="relative z-10 max-w-md w-full space-y-8 bg-white/75 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
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
            Welcome back
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Log in to manage your store, billing counter, and inventory
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50/90 backdrop-blur-md border border-emerald-200 text-center space-y-3">
            <div className="w-11 h-11 mx-auto rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-emerald-900 text-sm">
              Logging into Dashboard...
            </h3>
            <p className="text-xs text-emerald-700">
              Session initiated for {email || "user"}. Redirecting to your POS counter.
            </p>
            <Link
              href="/"
              className="inline-block mt-2 text-xs font-bold text-emerald-800 underline"
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                Work Email or Mobile
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="admin@yourbusiness.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  Password
                </label>
                <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700 font-bold">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-white/90 bg-white/80 focus:bg-white focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
            >
              <span>Sign In to POS Counter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Footer info */}
        <div className="text-center pt-2 border-t border-white/80">
          <p className="text-xs text-slate-500 font-medium">
            Don&apos;t have an account yet?{" "}
            <Link href="/register" className="font-bold text-emerald-600 hover:text-emerald-700">
              Start 14-day Free Trial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
