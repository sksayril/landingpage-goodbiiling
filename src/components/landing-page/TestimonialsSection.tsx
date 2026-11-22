import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "We replaced our slow desktop Tally setup across 4 supermarket outlets with GoodBilling. Our cashier checkout speed doubled, and we now monitor live sales from anywhere on our phones.",
      author: "Rajesh Aggarwal",
      role: "Managing Director",
      business: "Metro Fresh Supermarkets",
      location: "New Delhi (4 Outlets)",
      metric: "65% Faster Counter Checkout",
      rating: 5,
    },
    {
      quote:
        "Generating E-Waybills and GSTR-1 used to take 2 full days at the end of every month. With GoodBilling's direct Govt portal API, it happens in literally 1 click directly while printing the invoice.",
      author: "Amit Sen",
      role: "Founder & CEO",
      business: "Bengal Wholesale Traders",
      location: "Kolkata (Hub & 2 Warehouses)",
      metric: "18+ Hours Saved Monthly",
      rating: 5,
    },
    {
      quote:
        "The multi-branch centralized inventory saved us from over-ordering stock. If an item is low in one branch, we easily transfer stock with a challan. Absolute game changer for apparel retail.",
      author: "Priya Sharma",
      role: "Operations Head",
      business: "StyleVogue Lifestyle Apparel",
      location: "Bangalore & Hyderabad",
      metric: "₹8.4 Lakhs Saved on Overstock",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/40 backdrop-blur-xl border-t border-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-xl text-emerald-800 text-xs font-bold border border-white/90 shadow-xs">
            Customer Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Retailers <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Across India</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            See how modern business owners scale faster with GoodBilling.
          </p>
        </div>

        {/* 3 Review Cards Grid in Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="group relative p-7 rounded-3xl bg-white/70 hover:bg-white/90 backdrop-blur-xl border border-white/85 hover:border-emerald-400/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.22)] hover:ring-2 hover:ring-emerald-400/20 -translate-y-0 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Corner radial glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400/0 rounded-full blur-xl group-hover:bg-emerald-400/15 transition-all duration-300 pointer-events-none" />

              <div>
                {/* Rating & Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-white/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/90 shadow-xs">
                    {rev.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-emerald-400/60 mb-2" />

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/70 flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                  {rev.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <span>{rev.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {rev.role}, {rev.business}
                  </p>
                  <p className="text-[10px] text-slate-400">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
