"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Trash2,
  Printer,
  QrCode,
  CreditCard,
  Banknote,
  CheckCircle2,
  Share2,
  Sparkles,
  Barcode,
  RotateCcw,
} from "lucide-react";

interface BillItem {
  id: string;
  name: string;
  category: string;
  price: number;
  gstRate: number;
  qty: number;
}

const SAMPLE_PRODUCTS = [
  { id: "p1", name: "Amul Butter 500g", category: "Dairy", price: 275, gstRate: 12 },
  { id: "p2", name: "Fortune Sunlite Oil 1L", category: "Grocery", price: 165, gstRate: 5 },
  { id: "p3", name: "Daawat Basmati Rice 5kg", category: "Grains", price: 620, gstRate: 5 },
  { id: "p4", name: "Tata Tea Gold 500g", category: "Beverages", price: 310, gstRate: 5 },
  { id: "p5", name: "Cadbury Celebrations", category: "Confectionery", price: 350, gstRate: 18 },
  { id: "p6", name: "Dettol Antiseptic 500ml", category: "Personal Care", price: 215, gstRate: 18 },
];

export default function InteractivePosDemo() {
  const [cart, setCart] = useState<BillItem[]>([
    { id: "p1", name: "Amul Butter 500g", category: "Dairy", price: 275, gstRate: 12, qty: 1 },
    { id: "p3", name: "Daawat Basmati Rice 5kg", category: "Grains", price: 620, gstRate: 5, qty: 1 },
  ]);
  const [paymentMode, setPaymentMode] = useState<"upi" | "cash" | "card">("upi");
  const [billGenerated, setBillGenerated] = useState(false);

  const addToCart = (product: typeof SAMPLE_PRODUCTS[0]) => {
    setBillGenerated(false);
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setBillGenerated(false);
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQty = (id: string, delta: number) => {
    setBillGenerated(false);
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as BillItem[]
    );
  };

  const resetCart = () => {
    setCart([
      { id: "p1", name: "Amul Butter 500g", category: "Dairy", price: 275, gstRate: 12, qty: 1 },
      { id: "p3", name: "Daawat Basmati Rice 5kg", category: "Grains", price: 620, gstRate: 5, qty: 1 },
    ]);
    setBillGenerated(false);
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalTax = cart.reduce((acc, item) => {
    const itemTotal = item.price * item.qty;
    return acc + (itemTotal * item.gstRate) / 100;
  }, 0);
  const grandTotal = Math.round(subtotal + totalTax);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-teal-50/25 to-transparent">
      {/* Floating Glassmorphism Ambient Mesh Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-gradient-to-r from-emerald-300/20 via-teal-300/20 to-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Live Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Experience the <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">3-Second Fast Checkout</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Try our express counter below: click items to add them, pick a payment method, and watch the GST invoice generate instantly.
          </p>
        </div>

        {/* POS Counter Container with Ultra-Clear Frosted Glass */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-[0_25px_60px_rgba(16,185,129,0.12)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          {/* Left Column: Product Grid & Barcode Scanner Simulator (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-white/80 flex flex-col justify-between">
            <div>
              {/* Counter Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/70 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">
                    Counter #01 (Express Aisle)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-white/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/90 shadow-xs">
                  <Barcode className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scanner Ready (USB)</span>
                </div>
              </div>

              {/* Product Catalog Grid */}
              <div className="space-y-2 mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Quick Touch Product Catalog
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SAMPLE_PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => addToCart(prod)}
                      className="group p-3 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/15 transition-all duration-200 text-left flex flex-col justify-between h-24 cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                          GST {prod.gstRate}%
                        </span>
                        <h4 className="text-xs font-bold text-slate-800 line-clamp-1 mt-1.5 group-hover:text-emerald-700 transition-colors">
                          {prod.name}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100">
                        <span className="text-xs font-extrabold text-slate-900">
                          ₹{prod.price}
                        </span>
                        <div className="w-5 h-5 rounded-md bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-emerald-700 transition">
                          <Plus className="w-3 h-3" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/70 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Click any product tile to add to cart</span>
              <button
                onClick={resetCart}
                className="flex items-center gap-1 text-slate-600 hover:text-emerald-700 font-bold transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset items</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Bill Summary & Print Preview (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-7 bg-white/50 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/80 mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-sm text-slate-900">Current Cart</span>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white shadow-xs">
                  {cart.reduce((a, b) => a + b.qty, 0)} Items
                </span>
              </div>

              {/* Items List in Cart */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1 mb-4">
                {cart.length === 0 ? (
                  <div className="text-center py-8 text-xs text-slate-400 font-medium">
                    Cart is empty. Click a product on the left to add.
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/95 shadow-xs flex items-center justify-between text-xs"
                    >
                      <div className="flex-1 pr-2">
                        <p className="font-bold text-slate-800 line-clamp-1">{item.name}</p>
                        <p className="text-[10px] text-slate-400">
                          ₹{item.price} × {item.qty} (GST {item.gstRate}%)
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-bold text-slate-800">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-500 ml-1 p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 pt-3 border-t border-white/80 text-xs">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>CGST + SGST (Auto Slabs)</span>
                  <span className="text-emerald-700 font-bold">₹{totalTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-slate-900 pt-1.5 border-t border-white/80">
                  <span>Grand Total</span>
                  <span className="text-emerald-600 text-base">₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-4 pt-3 border-t border-white/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Payment Mode
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <button
                    onClick={() => setPaymentMode("upi")}
                    className={`py-2 px-2 rounded-xl border font-bold flex items-center justify-center gap-1 transition-all ${
                      paymentMode === "upi"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                        : "bg-white/80 text-slate-700 border-white/90 hover:bg-white"
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>UPI QR</span>
                  </button>
                  <button
                    onClick={() => setPaymentMode("cash")}
                    className={`py-2 px-2 rounded-xl border font-bold flex items-center justify-center gap-1 transition-all ${
                      paymentMode === "cash"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                        : "bg-white/80 text-slate-700 border-white/90 hover:bg-white"
                    }`}
                  >
                    <Banknote className="w-3.5 h-3.5" />
                    <span>Cash</span>
                  </button>
                  <button
                    onClick={() => setPaymentMode("card")}
                    className={`py-2 px-2 rounded-xl border font-bold flex items-center justify-center gap-1 transition-all ${
                      paymentMode === "card"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                        : "bg-white/80 text-slate-700 border-white/90 hover:bg-white"
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Print & Generate Button */}
            <div className="pt-5">
              {billGenerated ? (
                <div className="p-3.5 bg-emerald-100/90 backdrop-blur-md border border-emerald-300 rounded-2xl space-y-2 text-center animate-in fade-in">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-900 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Invoice #INV-2026-0891 Printed!</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 flex items-center justify-center gap-1.5 font-medium">
                    <Share2 className="w-3 h-3 text-emerald-600" />
                    <span>Printed to 80mm Thermal Printer &amp; Sent via WhatsApp.</span>
                  </p>
                  <button
                    onClick={() => setBillGenerated(false)}
                    className="text-[11px] font-bold text-emerald-900 underline block mx-auto"
                  >
                    Create Next Bill
                  </button>
                </div>
              ) : (
                <button
                  disabled={cart.length === 0}
                  onClick={() => setBillGenerated(true)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Printer className="w-4 h-4" />
                  <span>Generate &amp; Print Bill (₹{grandTotal})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
