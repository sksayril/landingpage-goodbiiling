"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Printer,
  Barcode,
  Monitor,
} from "lucide-react";

export default function PosHardwareMockup() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
      {/* Ambient background mint glow */}
      <div className="absolute -inset-4 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Primary Display Container */}
      <div className="relative z-10 w-full transition-transform hover:scale-[1.02] duration-300">
        {!imageError ? (
          <div className="relative rounded-2xl overflow-hidden bg-white/40 p-2 backdrop-blur-sm">
            <Image
              src="/images/pos-hardware.jpg"
              alt="GoodBilling POS Terminal, Thermal Printer, and Barcode Scanner"
              width={650}
              height={500}
              className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
              priority
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          /* High-Fidelity Vector POS Hardware Fallback */
          <div className="relative bg-slate-900/95 p-6 rounded-3xl border border-slate-800 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold text-sm">GoodBilling Touch POS 15.6&quot;</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                Connected &amp; Ready
              </span>
            </div>

            {/* Simulated POS Screen */}
            <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-slate-800">
              <div className="grid grid-cols-3 gap-2">
                {["Burger Combo", "Espresso", "Cold Drink", "French Fries", "Pizza Slice", "Ice Cream"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="bg-slate-900 hover:bg-emerald-950/60 p-2 rounded-lg border border-slate-800 text-center transition cursor-pointer"
                    >
                      <div className="w-8 h-8 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xs font-bold mb-1">
                        #{i + 1}
                      </div>
                      <p className="text-[10px] font-medium text-slate-200">{item}</p>
                      <p className="text-[9px] text-emerald-400 font-bold mt-0.5">₹120.00</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Hardware Status Strip */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <Printer className="w-4 h-4 text-emerald-400" />
                <div>
                  <p className="font-medium text-slate-200">Thermal Printer</p>
                  <p className="text-[10px] text-emerald-400">80mm Auto-cutter Ready</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <Barcode className="w-4 h-4 text-emerald-400" />
                <div>
                  <p className="font-medium text-slate-200">2D Barcode Scanner</p>
                  <p className="text-[10px] text-emerald-400">Wireless 2.4G Online</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
