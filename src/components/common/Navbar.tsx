"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  Receipt,
  ChevronDown,
  Menu,
  X,
  Package,
  FileCheck2,
  Calculator,
  Users2,
  Building2,
  BookOpen,
  PlayCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { NAV_LINKS } from "@/data/landingData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const getDropdownIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5 text-emerald-600" />;
      case "Package":
        return <Package className="w-5 h-5 text-emerald-600" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-emerald-600" />;
      case "Calculator":
        return <Calculator className="w-5 h-5 text-emerald-600" />;
      case "Users2":
        return <Users2 className="w-5 h-5 text-emerald-600" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case "PlayCircle":
        return <PlayCircle className="w-5 h-5 text-emerald-600" />;
      case "HelpCircle":
        return <HelpCircle className="w-5 h-5 text-emerald-600" />;
      default:
        return <Receipt className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center border border-white/90 shadow-sm group-hover:border-emerald-400/80 group-hover:shadow-emerald-500/10 transition overflow-hidden p-1">
              <Image
                src="/logo.png"
                alt="GoodBilling Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-600 transition flex items-center gap-0.5">
                Good<span className="text-emerald-600 font-black">Billing</span>
              </span>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                Billing &amp; Inventory ERP
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        openDropdown === link.label || pathname.startsWith(link.href)
                          ? "text-emerald-700 bg-white/80 shadow-xs border border-white/90 backdrop-blur-md"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                      aria-expanded={openDropdown === link.label}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180 text-emerald-600" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {/* Glass Dropdown Menu */}
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 w-84 pt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white/85 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/95 p-3 grid gap-1.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-emerald-50/70 transition-all duration-200 group"
                            >
                              <div className="p-2 rounded-xl bg-white shadow-xs border border-white/90 group-hover:border-emerald-300 transition mt-0.5">
                                {getDropdownIcon(child.icon)}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition">
                                  {child.label}
                                </p>
                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-emerald-700 bg-white/80 shadow-xs border border-white/90 backdrop-blur-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 bg-white/60 hover:bg-white/90 border border-white/80 rounded-xl shadow-xs transition backdrop-blur-md"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4.5 py-2 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-200 flex items-center gap-1.5 hover:scale-[1.02]"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-white/70 backdrop-blur-md border border-white/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/60 bg-white/85 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="py-1">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-semibold rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-sm text-slate-500 hover:text-emerald-700 hover:bg-emerald-50/40 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/60 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 bg-white/80 border border-white/90 rounded-xl"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
