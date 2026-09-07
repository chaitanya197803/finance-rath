"use client";

import React from "react";
import { Star, MessageSquareQuote, Info } from "lucide-react";

export const CustomerReviews: React.FC = () => {
  const placeholderReviews = [
    {
      id: "rev-1",
      category: "Business Loan Advisory",
      location: "Durg, CG",
      rating: 5,
      text: "[Placeholder Customer Review] - Finance Rath helped our manufacturing unit compare working capital options across two major banks. The team explained eligibility criteria clearly without making false promises.",
      authorLabel: "Client Testimonial #1 (Pending Genuine Client Upload)"
    },
    {
      id: "rev-2",
      category: "Home Loan Balance Transfer",
      location: "Bhilai, CG",
      rating: 5,
      text: "[Placeholder Customer Review] - Highly professional guidance for our home loan transfer. They guided us on processing fees, foreclosure charges, and document collection right from our office.",
      authorLabel: "Client Testimonial #2 (Pending Genuine Client Upload)"
    },
    {
      id: "rev-3",
      category: "Personal Loan Assistance",
      location: "Raipur, CG",
      rating: 5,
      text: "[Placeholder Customer Review] - Quick profile evaluation and transparent communication. Having one dedicated advisor meant I didn't have to handle repeated sales calls.",
      authorLabel: "Client Testimonial #3 (Pending Genuine Client Upload)"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Customer Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Client Feedback &amp; Advisory Reviews
          </h2>
          <p className="text-base text-slate-600">
            We value client trust above everything. Below are initial testimonial placements reserved for verified customer reviews.
          </p>
        </div>

        {/* Transparent Compliance Note */}
        <div className="mb-8 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center gap-2 max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> Testimonial spaces below are placeholders clearly marked for replacement with authenticated customer reviews upon client consent. We strictly prohibit fake customer generation.
          </span>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {rev.location}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#7a1c1c]">{rev.category}</div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                {rev.authorLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
