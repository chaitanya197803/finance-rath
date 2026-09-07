import React from "react";
import { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { COMPANY_CONFIG } from "../../config/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Finance Rath",
  description: "Read Finance Rath's privacy policy and data security practices for loan applicants."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-6 text-slate-700 text-sm leading-relaxed">
          <h1 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
            Privacy Policy
          </h1>

          <p>
            At <strong>{COMPANY_CONFIG.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), respecting your privacy and protecting your personal information is paramount. This Privacy Policy outlines how we collect, store, handle, and process information submitted by visitors and loan applicants on <strong>{COMPANY_CONFIG.domain}</strong>.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">1. Information We Collect</h2>
          <p>
            When you request loan options through our website forms or contact channels, we collect basic contact and financial requirement details, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full Name, Mobile Number, WhatsApp Number, City</li>
            <li>Desired Loan Category &amp; Loan Amount</li>
            <li>Employment Type (Salaried, Self-employed, Business Owner)</li>
            <li>Approximate Monthly Income &amp; Existing Monthly EMIs</li>
          </ul>
          <p>
            We do NOT collect sensitive payment card numbers, bank account passwords, or confidential identity tokens on initial enquiry forms.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to evaluate suitable loan options across our empaneled bank and NBFC partners, contact you regarding your enquiry, and assist you through the application process.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">3. Data Sharing &amp; Consent</h2>
          <p>
            By submitting an enquiry on our platform, you explicitly consent to allow {COMPANY_CONFIG.name} and authorized loan advisors to reach out to you via phone call, WhatsApp, or email regarding your loan request.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">4. Data Protection &amp; Contact</h2>
          <p>
            If you have questions regarding data privacy or wish to update your details, email us at{" "}
            <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-[#7a1c1c] font-bold underline">
              {COMPANY_CONFIG.email}
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
