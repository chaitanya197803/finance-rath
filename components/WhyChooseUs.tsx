"use client";

import React from "react";
import {
  Layers,
  UserCheck,
  Percent,
  PhoneCall,
  FileCheck,
  ShieldAlert
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Layers className="w-6 h-6 text-[#7a1c1c]" />,
      title: "Multiple Lending Options",
      desc: "Access options across major public sector banks, private institutions, and registered NBFCs through one single enquiry."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#7a1c1c]" />,
      title: "Personalized Loan Assistance",
      desc: "We analyze your specific income, CIBIL profile, and requirements to highlight loans with suitable eligibility alignment."
    },
    {
      icon: <Percent className="w-6 h-6 text-[#7a1c1c]" />,
      title: "Competitive Rates Based on Profile",
      desc: "We assist you in comparing interest rates, tenure options, and fee structures so you can choose the optimal offer."
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-[#7a1c1c]" />,
      title: "One Dedicated Point of Contact",
      desc: "Avoid dealing with multiple sales calls from different banks. Your assigned Finance Rath expert handles your case."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#7a1c1c]" />,
      title: "Documentation Guidance",
      desc: "We help format and structure your financial papers, GST returns, or income proofs to meet lender underwriting standards."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#7a1c1c]" />,
      title: "End-to-End Application Support",
      desc: "From initial enquiry, loan application filing, query resolution, to final bank sanction and disbursal tracking."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
            <span>Our Commitment to You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Work With Finance Rath?
          </h2>
          <p className="text-base text-slate-600">
            Professional loan advisory focused on transparency, efficiency, and finding options matched to your profile.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
