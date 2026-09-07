"use client";

import React from "react";
import Link from "next/link";
import { LOAN_PRODUCTS } from "../data/loans";
import {
  UserCheck,
  Briefcase,
  Home,
  Building2,
  Car,
  Bike,
  GraduationCap,
  Coins,
  Factory,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-[#7a1c1c]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#7a1c1c]" />,
  Home: <Home className="w-6 h-6 text-[#7a1c1c]" />,
  Building2: <Building2 className="w-6 h-6 text-[#7a1c1c]" />,
  Car: <Car className="w-6 h-6 text-[#7a1c1c]" />,
  Bike: <Bike className="w-6 h-6 text-[#7a1c1c]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#7a1c1c]" />,
  Coins: <Coins className="w-6 h-6 text-[#7a1c1c]" />,
  Factory: <Factory className="w-6 h-6 text-[#7a1c1c]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#7a1c1c]" />
};

export const LoanProducts: React.FC = () => {
  return (
    <section id="loan-products" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Tailored Financial Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Suitable Loan Solutions
          </h2>
          <p className="text-base text-slate-600">
            Compare rates, terms, and eligibility across multiple lending partners to choose the right loan product for your needs.
          </p>
        </div>

        {/* 10 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {LOAN_PRODUCTS.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Icon + Product Title */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-amber-50 group-hover:bg-[#7a1c1c] group-hover:text-white transition-colors">
                    {ICON_MAP[loan.iconName] || <UserCheck className="w-6 h-6 text-[#7a1c1c]" />}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {loan.maxTenure}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7a1c1c] transition-colors">
                    {loan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-3 leading-relaxed">
                    {loan.shortDesc}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Indicative Rate</div>
                    <div className="font-bold text-[#b45309]">{loan.indicativeRates}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Max Limit</div>
                    <div className="font-bold text-slate-800">{loan.maxAmount}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/${loan.slug}`}
                  className="text-xs font-semibold text-slate-600 hover:text-[#7a1c1c] transition-colors"
                >
                  View Details
                </Link>

                <Link
                  href={`/#lead-form?loan=${loan.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#7a1c1c] bg-amber-50 hover:bg-[#7a1c1c] hover:text-white transition-colors"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
