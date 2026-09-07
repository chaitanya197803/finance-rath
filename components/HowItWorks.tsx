"use client";

import React from "react";
import { FileText, UserCheck, Scale, CheckCircle } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <FileText className="w-6 h-6 text-[#7a1c1c]" />,
      title: "Tell Us Your Requirement",
      desc: "Submit your basic loan requirement details, employment profile, and desired amount through our secure form."
    },
    {
      number: "02",
      icon: <UserCheck className="w-6 h-6 text-[#7a1c1c]" />,
      title: "We Review Your Profile",
      desc: "Our financial experts conduct a soft review of your requirement against empaneled lender criteria."
    },
    {
      number: "03",
      icon: <Scale className="w-6 h-6 text-[#7a1c1c]" />,
      title: "Compare Suitable Options",
      desc: "We present suitable options from multiple banks/NBFCs outlining interest rates, EMIs, and terms."
    },
    {
      number: "04",
      icon: <CheckCircle className="w-6 h-6 text-[#7a1c1c]" />,
      title: "Apply & Process",
      desc: "We assist you step-by-step through document submission, lender verification, until loan disbursal."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
            <span>Simplified 4-Step Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Finance Rath Works For You
          </h2>
          <p className="text-base text-slate-600">
            A transparent, hassle-free process designed to save your time and help you choose the right loan option.
          </p>
        </div>

        {/* 4 Cards Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs relative flex flex-col justify-between"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-[#d4af37]">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
