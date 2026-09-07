"use client";

import React from "react";
import Link from "next/link";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const LoanComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
            <span>Smart Financial Choice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Approach Multiple Banks Yourself?
          </h2>
          <p className="text-base text-slate-600">
            Compare how Finance Rath simplifies your loan journey versus navigating complex bank requirements alone.
          </p>
        </div>

        {/* Side-by-Side Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: WITHOUT OUR HELP */}
          <div className="bg-red-50/50 rounded-2xl border border-red-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-red-200/80">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-red-950">WITHOUT OUR HELP</h3>
                <p className="text-xs text-red-700">Time-consuming &amp; fragmented process</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-red-100">
                <span className="font-bold text-red-600">1.</span>
                <div>
                  <strong className="text-slate-900">Search Multiple Lenders:</strong> Visit multiple bank branches or websites individually.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-red-100">
                <span className="font-bold text-red-600">2.</span>
                <div>
                  <strong className="text-slate-900">Submit Multiple Enquiries:</strong> Risk multiple hard credit checks impacting your credit score.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-red-100">
                <span className="font-bold text-red-600">3.</span>
                <div>
                  <strong className="text-slate-900">Compare Rates Yourself:</strong> Decode hidden fine print, processing fees, and complex terms alone.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-red-100">
                <span className="font-bold text-red-600">4.</span>
                <div>
                  <strong className="text-slate-900">Understand Eligibility:</strong> Face rejections due to unknown lender-specific restrictions.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-red-100">
                <span className="font-bold text-red-600">5.</span>
                <div>
                  <strong className="text-slate-900">Manage Documents Alone:</strong> Re-submit paperwork multiple times for different bank formats.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-red-100">
                <span className="font-bold text-red-600">6.</span>
                <div>
                  <strong className="text-slate-900">Constant Follow-up:</strong> Track application status across multiple bank managers.
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: WITH OUR HELP */}
          <div className="bg-emerald-50/50 rounded-2xl border-2 border-emerald-500 p-6 sm:p-8 space-y-6 shadow-md relative">
            <div className="absolute -top-3.5 right-6 px-3 py-1 bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-xs">
              Recommended Choice
            </div>

            <div className="flex items-center gap-3 pb-4 border-b border-emerald-200/80">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-emerald-950">WITH FINANCE RATH</h3>
                <p className="text-xs text-emerald-700">Streamlined, single-window advisory</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">One Single Enquiry:</strong> Tell us your requirement once and compare multiple options.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Soft Profile Review:</strong> We analyze your eligibility without unnecessary credit inquiries.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Suitable Lender Options:</strong> Get side-by-side comparison of interest rates, fees &amp; tenures.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Transparent Comparison:</strong> Choose the option that fits your repayment capacity best.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Application Assistance:</strong> Complete document structuring support by dedicated advisors.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Single Point Follow-up:</strong> We handle bank follow-ups until sanction and disbursal.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#lead-form"
                className="maroon-gradient-btn w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm shadow-md"
              >
                <span>SIMPLIFY MY LOAN JOURNEY NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
