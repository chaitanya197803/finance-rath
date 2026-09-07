"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyMobileBar } from "./StickyMobileBar";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { LoanCalculator } from "./LoanCalculator";
import { COMPANY_CONFIG } from "../config/company";
import { LoanProduct } from "../data/loans";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  ChevronDown
} from "lucide-react";

interface LandingPageProps {
  loan: LoanProduct;
}

export const LoanLandingTemplate: React.FC<LandingPageProps> = ({ loan }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Landing Hero */}
        <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Empaneled Bank &amp; NBFC Comparison</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Compare Suitable <br />
                <span className="text-amber-400">{loan.name} Options</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {loan.fullDesc}
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-semibold">
                <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Indicative Interest</span>
                  <span className="text-amber-400 font-bold text-base">{loan.indicativeRates}</span>
                </div>
                <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Max Tenure</span>
                  <span className="text-white font-bold text-base">{loan.maxTenure}</span>
                </div>
                <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Sanction Limit</span>
                  <span className="text-white font-bold text-base">{loan.maxAmount}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="#lead-form"
                  className="maroon-gradient-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wider shadow-lg"
                >
                  <span>CHECK {loan.name.toUpperCase()} ELIGIBILITY</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20am%20interested%20in%20${encodeURIComponent(loan.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/80 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Highlights */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Key Features of {loan.name} via Finance Rath
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Transparent processing without unverified rate claims or hidden charges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {loan.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs space-y-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#7a1c1c] font-black text-sm flex items-center justify-center">
                    0{i + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility & Documents Grid */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Eligibility Box */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-[#7a1c1c] font-black text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3>Eligibility Criteria Guidance</h3>
                </div>
                <p className="text-xs text-slate-500">
                  Subject to lender underwriting guidelines and credit verification:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {loan.eligibility.map((el, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7a1c1c] shrink-0 mt-2" />
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents Checklist Box */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-[#b45309] font-black text-lg">
                  <FileText className="w-5 h-5" />
                  <h3>Required Documents Checklist</h3>
                </div>
                <p className="text-xs text-slate-500">
                  Standard paperwork required for bank appraisal:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {loan.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b45309] shrink-0 mt-2" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Loan Calculator */}
        <LoanCalculator />

        {/* Product FAQs */}
        {loan.faqs && loan.faqs.length > 0 && (
          <section className="py-16 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-black text-slate-900">
                  {loan.name} FAQs
                </h2>
                <p className="text-xs text-slate-500">
                  Common questions answered for {loan.name} applicants.
                </p>
              </div>

              <div className="space-y-3">
                {loan.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#7a1c1c] shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lead Capture Form */}
        <LeadCaptureForm />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
};
