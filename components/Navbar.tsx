"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { COMPANY_CONFIG } from "../config/company";
import { LOAN_PRODUCTS } from "../data/loans";
import { Phone, MessageSquare, MapPin, ChevronDown, Menu, X, ShieldCheck } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Professional Announcement & Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_CONFIG.cityArea}</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Comparing Options across RBI-Regulated Banks & NBFCs</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY_CONFIG.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">{COMPANY_CONFIG.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20want%20to%20check%20my%20loan%20options.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Responsive Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-[#7a1c1c] transition-colors py-2">
              Home
            </Link>

            {/* Loan Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#7a1c1c] transition-colors py-2 focus:outline-none">
                <span>Loan Options</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {loansDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-3 grid grid-cols-1 gap-1 z-50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1 mb-1">
                    Compare Loan Options
                  </div>
                  {LOAN_PRODUCTS.map((loan) => (
                    <Link
                      key={loan.id}
                      href={`/${loan.slug}`}
                      className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-1.5 rounded-md bg-amber-50 text-[#7a1c1c] group-hover:bg-[#7a1c1c] group-hover:text-white transition-colors">
                        <span className="w-4 h-4 block text-center font-bold text-xs">
                          {loan.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-[#7a1c1c]">
                          {loan.name}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {loan.indicativeRates}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#how-it-works" className="hover:text-[#7a1c1c] transition-colors py-2">
              How It Works
            </Link>
            <Link href="/#comparison" className="hover:text-[#7a1c1c] transition-colors py-2">
              Why Us
            </Link>
            <Link href="/about" className="hover:text-[#7a1c1c] transition-colors py-2">
              About Us
            </Link>
            <Link href="/#faqs" className="hover:text-[#7a1c1c] transition-colors py-2">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-[#7a1c1c] transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20need%20loan%20guidance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WHATSAPP US</span>
            </a>

            <Link
              href="/#lead-form"
              className="maroon-gradient-btn inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide shadow-md"
            >
              CHECK MY LOAN OPTIONS
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 font-medium text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-md hover:bg-slate-50"
            >
              Home
            </Link>
            <div className="border-t border-b border-slate-100 py-2 my-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Loan Products
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {LOAN_PRODUCTS.map((loan) => (
                  <Link
                    key={loan.id}
                    href={`/${loan.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-md bg-slate-50 text-slate-700 hover:bg-amber-50 hover:text-[#7a1c1c] font-medium"
                  >
                    {loan.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-md hover:bg-slate-50"
            >
              How It Works
            </Link>
            <Link
              href="/#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-md hover:bg-slate-50"
            >
              Why Choose Us
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-md hover:bg-slate-50"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-md hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/#lead-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center maroon-gradient-btn py-3 rounded-xl font-bold text-sm shadow-md"
            >
              CHECK MY LOAN OPTIONS
            </Link>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20want%20to%20check%20my%20loan%20options.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-emerald-700 bg-emerald-50 border border-emerald-200"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
