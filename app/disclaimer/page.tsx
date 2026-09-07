import React from "react";
import { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { COMPANY_CONFIG } from "../../config/company";

export const metadata: Metadata = {
  title: "Compliance Disclaimer | Finance Rath",
  description: "Official legal and regulatory disclaimer for Finance Rath loan comparison services."
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-6 text-slate-700 text-sm leading-relaxed">
          <h1 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
            Compliance &amp; Regulatory Disclaimer
          </h1>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-semibold text-xs">
            {COMPANY_CONFIG.disclaimerText}
          </div>

          <h2 className="text-lg font-bold text-slate-900 pt-2">Detailed Compliance Declarations</h2>
          <p>
            1. <strong>No Unsupported Claims:</strong> {COMPANY_CONFIG.name} does not make claims of &ldquo;guaranteed approval&rdquo;, &ldquo;100% sanction&rdquo;, or &ldquo;lowest interest rate for everyone.&rdquo; Interest rates and loan terms vary per applicant profile and lender risk assessment.
          </p>

          <p>
            2. <strong>Empaneled Lender Network:</strong> We assist in comparing options across empaneled public sector banks, private commercial banks, and RBI-regulated non-banking financial companies (NBFCs).
          </p>

          <p>
            3. <strong>Fee Transparency:</strong> We do not ask for cash upfront fees for checking loan eligibility options on our website.
          </p>

          <p>
            For further clarification, please contact our helpline at <strong>{COMPANY_CONFIG.phone}</strong> or email <strong>{COMPANY_CONFIG.email}</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
