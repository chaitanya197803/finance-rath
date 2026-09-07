"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_CONFIG } from "../config/company";
import { Building2, ShieldCheck, MapPin, Phone, Mail, Clock, Award, Users } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Corporate Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Finance Rath</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Customer-Focused Financial Advisory Services
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              We are a customer-focused financial services company helping people and businesses explore suitable loan options through a network of lending partners across Chhattisgarh and India.
            </p>

            {/* Core Values 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1">Customer-First Approach</div>
                <p className="text-xs text-slate-500">
                  Your financial goals drive our recommendations. We prioritize options aligned with your repayment capacity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1">Transparent Communication</div>
                <p className="text-xs text-slate-500">
                  No hidden charges or unrealistic guarantees. Complete clarity on interest rates, processing fees &amp; tenure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1">Multiple Lending Options</div>
                <p className="text-xs text-slate-500">
                  Compare offerings from public sector banks, private institutions, and regulated NBFC partners under one roof.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1">End-to-End Application Support</div>
                <p className="text-xs text-slate-500">
                  Dedicated loan experts handle profile evaluation, documentation guidance, and bank follow-up through disbursal.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-wider text-[#7a1c1c] bg-amber-50 border border-amber-200 hover:bg-[#7a1c1c] hover:text-white transition-colors"
              >
                <span>READ FULL COMPANY PROFILE</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Office Location & Corporate Details Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="space-y-1 pb-4 border-b border-slate-800">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Head Office Location
                </div>
                <div className="text-xl font-bold">{COMPANY_CONFIG.name}</div>
                <div className="text-xs text-slate-400">{COMPANY_CONFIG.legalName}</div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Office Address:</strong>
                    <span>{COMPANY_CONFIG.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Helpline:</strong>
                    <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-amber-400 transition-colors">
                      {COMPANY_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Official Email:</strong>
                    <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-amber-400 transition-colors">
                      {COMPANY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Business Hours:</strong>
                    <span>Monday to Saturday: 9:30 AM – 6:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Serving Durg, Bhilai, Raipur &amp; All Over Chhattisgarh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
