import React from "react";
import { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { COMPANY_CONFIG } from "../../config/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Finance Rath",
  description: "Terms and conditions of service for Finance Rath website visitors and loan applicants."
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-6 text-slate-700 text-sm leading-relaxed">
          <h1 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
            Terms &amp; Conditions
          </h1>

          <p>
            Welcome to <strong>{COMPANY_CONFIG.name}</strong> (&ldquo;{COMPANY_CONFIG.domain}&rdquo;). By accessing or using this website, submitting an enquiry, or communicating with our loan advisory desk, you agree to comply with and be bound by the following terms.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">1. Nature of Advisory Service</h2>
          <p>
            {COMPANY_CONFIG.name} acts as an independent loan advisory and comparison facilitator connecting borrowers with empaneled banks and RBI-regulated NBFC partners. We are not a direct lender and do not issue loan capital directly.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">2. No Guarantee of Approval</h2>
          <p>
            Loan approval, interest rates, sanctioned amount, processing fees, and repayment tenure are determined solely by the underwriting policies, credit appraisal, and final discretion of the respective lending bank or NBFC.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">3. Applicant Information Accuracy</h2>
          <p>
            Applicants are responsible for providing truthful, accurate income details and documentation during the application process.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">4. Contact &amp; Legal Entity</h2>
          <p>
            {COMPANY_CONFIG.legalName}, Office: {COMPANY_CONFIG.officeAddress}. Email: {COMPANY_CONFIG.email}.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
