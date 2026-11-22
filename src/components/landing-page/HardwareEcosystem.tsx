import React from "react";
import {
  Printer,
  Barcode,
  Scale,
  Monitor,
  Smartphone,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function HardwareEcosystem() {
  const hardwareList = [
    {
      title: "Thermal Receipt Printers",
      desc: "Instant 58mm & 80mm auto-cutting print over USB, Bluetooth & WiFi. Compatible with TVS, Epson, NGX & Rugtek.",
      icon: Printer,
      supported: "USB / Bluetooth / LAN",
    },
    {
      title: "Barcode & QR Scanners",
      desc: "High-speed 1D & 2D QR decoding. Supports handheld wireless guns and hands-free desktop presentation scanners.",
      icon: Barcode,
      supported: "Wireless 2.4G / USB Plug & Play",
    },
    {
      title: "Digital Weighing Scales",
      desc: "Live weight synchronization over RS-232 serial. Automatically multiplies grams with price per kg for fruits, vegetables & sweets.",
      icon: Scale,
      supported: "RS-232 Serial / USB",
    },
    {
      title: "Customer Facing Dual Screen",
      desc: "Turn any second monitor or tablet into a customer checkout screen displaying real-time bill items and dynamic UPI QR code.",
      icon: Monitor,
      supported: "HDMI / WiFi Display",
    },
    {
      title: "Electronic Cash Drawers",
      desc: "Automatic electronic solenoid trigger via RJ11 printer port. Opens cash drawer seamlessly when cash receipt prints.",
      icon: Cpu,
      supported: "RJ-11 Standard Trigger",
    },
    {
      title: "Barcode Label Printers",
      desc: "Design and print product stickers, MRP tags, and garment tags on 50x25mm or dual 38x25mm adhesive rolls.",
      icon: Smartphone,
      supported: "TSC / Zebra / Godex Direct Thermal",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/40 backdrop-blur-xl border-y border-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            Hardware Freedom
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Plug &amp; Play with <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Any POS Counter Hardware</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            No expensive proprietary locked-in hardware needed. Connect your existing thermal printers, barcode scanners, and weighing machines in under 2 minutes.
          </p>
        </div>

        {/* 6 Hardware Cards Grid in Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-6.5 rounded-3xl bg-white/70 hover:bg-white/90 backdrop-blur-xl border border-white/85 hover:border-emerald-400/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.22)] hover:ring-2 hover:ring-emerald-400/20 -translate-y-0 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Corner radial glow */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-emerald-400/0 rounded-full blur-xl group-hover:bg-emerald-400/15 transition-all duration-300 pointer-events-none" />

                <div>
                  <div className="w-13 h-13 rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 shadow-xs flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:border-emerald-300 transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-black text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/70 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.supported}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
