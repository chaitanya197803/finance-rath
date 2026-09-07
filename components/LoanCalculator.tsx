"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

export const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000000); // 10 Lakhs default
  const [rate, setRate] = useState<number>(10.5); // 10.5% default
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 years default

  // EMI Calculation Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const tenureMonths = tenureYears * 12;

    if (monthlyRate === 0) {
      const calculatedEmi = amount / tenureMonths;
      return {
        emi: Math.round(calculatedEmi),
        totalInterest: 0,
        totalPayment: amount
      };
    }

    const emiCalc =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    const roundedEmi = Math.round(emiCalc);
    const totalPay = roundedEmi * tenureMonths;
    const totalInt = totalPay - amount;

    return {
      emi: roundedEmi,
      totalInterest: Math.max(0, totalInt),
      totalPayment: totalPay
    };
  }, [amount, rate, tenureYears]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Calculate Your Indicative Monthly EMI
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Estimate your monthly outgo based on desired loan amount, expected interest rate, and tenure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-6">
            {/* Loan Amount Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-800">Required Loan Amount</label>
                <span className="text-base font-black text-[#7a1c1c] bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {formatCurrency(amount)}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={20000000}
                step={50000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#7a1c1c]"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>₹50,000</span>
                <span>₹1 Crore</span>
                <span>₹2 Crores</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-800">Indicative Interest Rate (p.a.)</label>
                <span className="text-base font-black text-[#b45309] bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {rate}%
                </span>
              </div>
              <input
                type="range"
                min={7.5}
                max={24}
                step={0.25}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#b45309]"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>7.5% (Home Loan)</span>
                <span>12% (Business Loan)</span>
                <span>24% (Unsecured)</span>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-800">Loan Tenure</label>
                <span className="text-base font-black text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {tenureYears} {tenureYears === 1 ? "Year" : "Years"} ({tenureYears * 12} Months)
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>1 Year</span>
                <span>5 Years</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7a1c1c] shrink-0 mt-0.5" />
              <span>
                Note: EMI calculation is illustrative. Actual interest rates, processing fees, and EMI structures are finalized upon formal bank appraisal.
              </span>
            </div>
          </div>

          {/* Right Column: Calculated Breakdown Display */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-md space-y-6 text-center lg:text-left">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estimated Monthly EMI
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#7a1c1c] mt-1">
                  {formatCurrency(emi)}
                  <span className="text-xs font-medium text-slate-500"> / month</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Principal Amount</span>
                  <span className="font-bold text-slate-800">{formatCurrency(amount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Total Interest Payable</span>
                  <span className="font-bold text-[#b45309]">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100 font-bold">
                  <span className="text-slate-900">Total Payable Amount</span>
                  <span className="text-slate-900 text-base">{formatCurrency(totalPayment)}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="#lead-form"
                  className="maroon-gradient-btn w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm shadow-md"
                >
                  <span>APPLY FOR THIS AMOUNT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
