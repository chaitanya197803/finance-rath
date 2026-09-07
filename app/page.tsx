import React from "react";
import { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { LoanCalculator } from "../components/LoanCalculator";
import { LoanProducts } from "../components/LoanProducts";
import { HowItWorks } from "../components/HowItWorks";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { LoanComparisonSection } from "../components/LoanComparisonSection";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { AboutSection } from "../components/AboutSection";
import { CustomerReviews } from "../components/CustomerReviews";
import { FAQAccordion } from "../components/FAQAccordion";
import { Footer } from "../components/Footer";
import { StickyMobileBar } from "../components/StickyMobileBar";
import { AnalyticsPlaceholder } from "../components/AnalyticsPlaceholder";
import { COMPANY_CONFIG } from "../config/company";

export const metadata: Metadata = {
  title: "Finance Rath | Find & Compare Loans across Multiple Banks | Durg & Chhattisgarh",
  description:
    "Your Loan. Compared. Simplified. We help you compare suitable personal, business, home, and LAP loan options from multiple lending partners in Durg, Bhilai & Chhattisgarh.",
  keywords: [
    "loan consultant",
    "loan advisor",
    "personal loan",
    "business loan",
    "home loan",
    "loan against property",
    "MSME loan",
    "loan consultant near me",
    "Durg loan consultant",
    "Finance Rath"
  ],
  openGraph: {
    title: "Finance Rath - Compare Suitable Loan Options",
    description: "Tell us what you need. We compare suitable loan options from multiple lending partners and guide you to disbursal.",
    url: "https://financerath.com",
    siteName: "Finance Rath",
    locale: "en_IN",
    type: "website"
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: COMPANY_CONFIG.name,
    legalName: COMPANY_CONFIG.legalName,
    url: `https://${COMPANY_CONFIG.domain}`,
    logo: `https://${COMPANY_CONFIG.domain}/logo.svg`,
    description: COMPANY_CONFIG.subheadline,
    telephone: COMPANY_CONFIG.phone,
    email: COMPANY_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "City Center Mall, Station Road",
      addressLocality: "Durg",
      addressRegion: "Chhattisgarh",
      postalCode: "491001",
      addressCountry: "IN"
    },
    areaServed: COMPANY_CONFIG.cityArea
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-100 selection:text-[#7a1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnalyticsPlaceholder />

      {/* Header & Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section + Trust Indicators */}
        <Hero />

        {/* 2. Interactive EMI & Loan Eligibility Estimator */}
        <LoanCalculator />

        {/* 3. 10 Loan Products Grid */}
        <LoanProducts />

        {/* 4. 4-Step How It Works Timeline */}
        <HowItWorks />

        {/* 5. Key Differentiator Comparison Matrix */}
        <LoanComparisonSection />

        {/* 6. Why Choose Us (6 Benefit Cards) */}
        <WhyChooseUs />

        {/* 7. Lead Capture Section */}
        <LeadCaptureForm />

        {/* 8. Corporate About Us */}
        <AboutSection />

        {/* 9. Testimonials & Client Reviews */}
        <CustomerReviews />

        {/* 10. 11 FAQ Items Accordion */}
        <FAQAccordion />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <StickyMobileBar />
    </div>
  );
}
