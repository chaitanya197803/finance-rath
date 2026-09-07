"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { COMPANY_CONFIG } from "../config/company";
import { LOAN_PRODUCTS } from "../data/loans";
import { MapPin, Phone, Mail, ShieldAlert, ChevronDown, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  const [showPlaceholderChecklist, setShowPlaceholderChecklist] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl">
              <Logo size="md" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Finance Rath is a customer-focused financial advisory service. We help individuals, self-employed professionals, and businesses compare suitable loan options across multiple empaneled banking and NBFC partners.
            </p>

            <div className="pt-2 text-xs space-y-1">
              <div className="text-slate-400">
                <strong className="text-slate-200">Legal Entity:</strong> {COMPANY_CONFIG.legalName}
              </div>
              <div className="text-slate-400">
                <strong className="text-slate-200">Primary Region:</strong> {COMPANY_CONFIG.cityArea}
              </div>
            </div>
          </div>

          {/* Column 2: Loan Products (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Loan Options
            </h4>
            <ul className="space-y-2 text-xs">
              {LOAN_PRODUCTS.slice(0, 7).map((loan) => (
                <li key={loan.id}>
                  <Link
                    href={`/${loan.slug}`}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {loan.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#loan-products" className="text-amber-400 font-bold hover:underline">
                  View All 10 Loan Options →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Legal (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-amber-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-amber-400 transition-colors">
                  Compliance Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/admin/leads" className="text-[#d4af37] font-semibold hover:underline">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Office Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-amber-400">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-amber-400">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer Banner (Mandatory Rule) */}
        <div className="my-8 p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
            <ShieldAlert className="w-4 h-4" />
            <span>Important Compliance &amp; Regulatory Disclaimer</span>
          </div>
          <p className="leading-relaxed text-[11px] text-slate-300">
            {COMPANY_CONFIG.disclaimerText}
          </p>
        </div>

        {/* Pre-launch Configuration Checklist Drawer for Admin */}
        <div className="mb-6">
          <button
            onClick={() => setShowPlaceholderChecklist(!showPlaceholderChecklist)}
            className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-between text-xs font-semibold focus:outline-none"
          >
            <span>Pre-Launch Company Information Checklist ({COMPANY_CONFIG.placeholdersChecklist.length} Items)</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showPlaceholderChecklist ? "rotate-180" : ""}`} />
          </button>

          {showPlaceholderChecklist && (
            <div className="mt-2 p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Placeholder Configuration Status
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {COMPANY_CONFIG.placeholdersChecklist.map((item) => (
                  <div key={item.field} className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px]">
                    <div className="font-bold text-white flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>[{item.field}]</span>
                    </div>
                    <div className="text-amber-300 font-mono text-[10px] truncate mt-0.5">{item.value}</div>
                    <div className="text-slate-500 text-[9px] mt-0.5">{item.notes}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved.
          </div>
          <div>
            Designed for Trust, Transparency &amp; Speed | {COMPANY_CONFIG.cityArea}
          </div>
        </div>
      </div>
    </footer>
  );
};
