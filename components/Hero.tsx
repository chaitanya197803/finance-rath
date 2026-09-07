"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_CONFIG } from "../config/company";
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Building2,
  ArrowRight,
  MessageSquare,
  Award,
  Zap,
  Lock
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Decorative background grid and lighting glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#7a1c1c]" />
              <span>Independent & Transparent Loan Advisory in Chhattisgarh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Find the Right Loan. <br />
              <span className="text-[#7a1c1c]">Compare Multiple Options.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              We help you compare suitable loan options from multiple lending partners and guide you from application to disbursal.
            </p>

            {/* Core Value Proposition Box */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
                Core Value Proposition
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-900">
                &ldquo;{COMPANY_CONFIG.tagline}&rdquo;
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                {COMPANY_CONFIG.subheadline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#lead-form"
                className="maroon-gradient-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all"
              >
                <span>CHECK MY LOAN OPTIONS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20want%20to%20check%20my%20loan%20options.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Quick Micro-Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-600 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No Charges to Check</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Soft Profile Evaluation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Advisor Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Loan Comparison Dashboard Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Card Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-[#7a1c1c] rounded-2xl blur-md opacity-20" />

              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Dashboard Card Header */}
                <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      Live Comparison Platform
                    </span>
                  </div>
                  <div className="text-lg font-bold">Multi-Lender Option Matcher</div>
                  <div className="text-xs text-slate-400">
                    Profile: Salaried &amp; Business Owners | Durg &amp; Pan-Chhattisgarh
                  </div>
                </div>

                {/* Dashboard Comparison Mock Matrix */}
                <div className="p-5 space-y-4 bg-slate-50/50">
                  {/* Option 1 */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-amber-400 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#7a1c1c]" />
                        <span className="text-xs font-bold text-slate-800">Leading PSU Bank Partner</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Low Interest Rate
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                      <div>
                        <div className="text-slate-400 text-[10px]">Indicative EMI</div>
                        <div className="font-bold text-slate-900">₹ 2,125 / L</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Tenure</div>
                        <div className="font-bold text-slate-900">Up to 7 Yrs</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Turnaround</div>
                        <div className="font-bold text-slate-900">3 - 5 Days</div>
                      </div>
                    </div>
                  </div>

                  {/* Option 2 */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-amber-400 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#b45309]" />
                        <span className="text-xs font-bold text-slate-800">Premier Private Bank</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                        Fast Sanction
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                      <div>
                        <div className="text-slate-400 text-[10px]">Indicative EMI</div>
                        <div className="font-bold text-slate-900">₹ 2,180 / L</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Tenure</div>
                        <div className="font-bold text-slate-900">Up to 5 Yrs</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Turnaround</div>
                        <div className="font-bold text-slate-900">24-48 Hours</div>
                      </div>
                    </div>
                  </div>

                  {/* Option 3 */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-amber-400 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-slate-800">Regulated NBFC Partner</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        Flexible Criteria
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                      <div>
                        <div className="text-slate-400 text-[10px]">Indicative EMI</div>
                        <div className="font-bold text-slate-900">Flexible</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Min Income</div>
                        <div className="font-bold text-slate-900">₹ 15k / mo</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px]">Documentation</div>
                        <div className="font-bold text-slate-900">Minimal</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-amber-900 font-semibold">
                      <Lock className="w-4 h-4 text-[#7a1c1c]" />
                      <span>Single Enquiry = Multiple Options</span>
                    </div>
                    <Link
                      href="#lead-form"
                      className="text-xs font-bold text-[#7a1c1c] underline underline-offset-2 hover:text-[#5c1212]"
                    >
                      Compare Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below-Hero Trust Indicators (Strictly No Fake Numbers) */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-50 text-[#7a1c1c] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Multiple Lending Partners</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Compare options from leading PSU banks, private banks, and NBFCs.
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-50 text-[#7a1c1c] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Personalized Assistance</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Dedicated loan advisors guide you based on your unique profile.
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-50 text-[#7a1c1c] shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Fast Application Support</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  End-to-end documentation assistance to speed up lender review.
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-50 text-[#7a1c1c] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Transparent Process</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  No hidden terms. Clear explanation of interest rates &amp; charges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
