import React from "react";
import { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StickyMobileBar } from "../../components/StickyMobileBar";
import { AboutSection } from "../../components/AboutSection";
import { WhyChooseUs } from "../../components/WhyChooseUs";
import { COMPANY_CONFIG } from "../../config/company";
import { ShieldCheck, MapPin, Phone, Mail, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Finance Rath | Transparent Loan Comparison & Advisory",
  description:
    "Learn about Finance Rath's customer-first mission, independent loan advisory approach, and office location at City Center Mall, Durg, Chhattisgarh."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* About Hero Header */}
        <section className="bg-slate-900 text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Independent &amp; Transparent Financial Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              About <span className="text-amber-400">{COMPANY_CONFIG.name}</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              {COMPANY_CONFIG.subheadline}
            </p>
          </div>
        </section>

        {/* Embedded About Section */}
        <AboutSection />

        {/* Corporate Pillars & Office Detail */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Our Advisory Philosophy
              </h2>
              <p className="text-sm text-slate-600">
                We bridge the gap between borrowers seeking fair loan terms and empaneled lending partners looking for creditworthy profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#7a1c1c] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900">Empathetic Profile Evaluation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every borrower&apos;s journey is different. Whether you are a salaried individual, small merchant, or industrial promoter, we evaluate your financial strengths objectively.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#7a1c1c] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900">Multi-Lender Transparency</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instead of pushing a single product, we lay out multiple suitable options with transparent side-by-side breakdowns of EMIs, tenure limits, and processing terms.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#7a1c1c] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900">Disbursal Tracking</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We stay with you through application submission, bank query resolution, property evaluation checks, and final loan credit into your account.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
