"use client";

import React, { useState } from "react";
import { GLOBAL_FAQS, FAQItem } from "../data/faqs";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Process", "Eligibility", "Documents"];

  const filteredFaqs = GLOBAL_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparent Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Clear, honest answers regarding our loan comparison process, eligibility criteria, and documentation requirements.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. credit score, interest rate, documents)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none bg-slate-50"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#7a1c1c] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-50/80 rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#7a1c1c] focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#7a1c1c]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-sm text-slate-500">
              No matching questions found. Try searching for &ldquo;loan&rdquo; or &ldquo;documents&rdquo;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
