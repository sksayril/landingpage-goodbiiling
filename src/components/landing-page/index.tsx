import React from "react";
import HeroSection from "./HeroSection";
import ClientLogos from "./ClientLogos";
import FeaturesSection from "./FeaturesSection";
import InteractivePosDemo from "./InteractivePosDemo";
import StatsSection from "./StatsSection";
import IndustrySection from "./IndustrySection";
import HardwareEcosystem from "./HardwareEcosystem";
import ComparisonSection from "./ComparisonSection";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";
import CtaBanner from "./CtaBanner";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero Section with Headline, Checklist, CTAs & Laptop Dashboard Mockup */}
      <HeroSection />

      {/* 2. Client Brands, Trust Ratings & Security Certifications */}
      <ClientLogos />

      {/* 3. 8 Powerful Features Grid with Glowing Borders */}
      <FeaturesSection />

      {/* 4. Live Interactive POS Checkout Simulation Counter */}
      <InteractivePosDemo />

      {/* 5. Business Stats & Uptime Metrics Bar */}
      <StatsSection />

      {/* 6. Industry Solutions & POS Hardware Setup Showcase */}
      <IndustrySection />

      {/* 7. Hardware Ecosystem (Printers, Barcode, Weighing Scale) */}
      <HardwareEcosystem />

      {/* 8. Comparison Matrix (GoodBilling vs Old Desktop Software) */}
      <ComparisonSection />

      {/* 9. Verified Business Reviews & Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 11. High-Impact Deep Green CTA Banner */}
      <CtaBanner />
    </div>
  );
}
