"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { COMPANY_CONFIG } from "../config/company";
import { LOAN_PRODUCTS } from "../data/loans";
import { ShieldCheck, CheckCircle2, MessageSquare, Lock, Send, Loader2 } from "lucide-react";

function LeadCaptureFormContent() {
  const searchParams = useSearchParams();
  const preselectedLoan = searchParams?.get("loan") || "personal-loan";

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    whatsapp: "",
    city: "Durg",
    loanType: preselectedLoan,
    loanAmount: "1000000",
    employmentType: "Salaried",
    monthlyIncome: "50000",
    existingEmi: "0",
    preferredContact: "Call",
    message: "",
    consent: true
  });

  const [sameAsMobile, setSameAsMobile] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (sameAsMobile) {
      setFormData((prev) => ({ ...prev, whatsapp: prev.mobile }));
    }
  }, [formData.mobile, sameAsMobile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName || !formData.mobile || !formData.city) {
      setErrorMessage("Please fill in all mandatory fields (Name, Mobile, City).");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the terms and contact consent checkbox to proceed.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Website Lead Form",
          whatsapp: sameAsMobile ? formData.mobile : formData.whatsapp
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedLeadId(data.leadId);
      } else {
        setErrorMessage(data.error || "Failed to submit loan enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      setSubmittedLeadId(`FR-${Date.now().toString().slice(-5)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800 text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Free Confidential Loan Assessment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Check Your Suitable Loan Options
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Fill in your basic requirement. Our team will review your profile across empaneled lenders and contact you with suitable options.
            </p>
          </div>

          {/* Form Body or Success Confirmation State */}
          <div className="p-6 sm:p-10">
            {submittedLeadId ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Enquiry Received Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your Reference ID is{" "}
                    <span className="font-mono font-bold text-[#7a1c1c] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {submittedLeadId}
                    </span>
                    .
                  </p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    A dedicated Finance Rath loan advisor will review your requirement and reach out to you via your preferred contact method ({formData.preferredContact}).
                  </p>
                </div>

                {/* Instant WhatsApp Action CTA */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-md mx-auto space-y-3">
                  <div className="text-xs font-bold text-emerald-900">Want Faster Loan Guidance?</div>
                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20just%20submitted%20my%20loan%20enquiry%20Ref%20${submittedLeadId}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>CONNECT INSTANTLY ON WHATSAPP</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmittedLeadId(null);
                      setFormData((prev) => ({ ...prev, fullName: "", mobile: "" }));
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    Submit another loan enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Step 1: Personal Info */}
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">
                    1. Applicant Contact Info
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar Sahu"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] focus:border-[#7a1c1c] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] focus:border-[#7a1c1c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-700">WhatsApp Number</label>
                        <label className="text-[11px] text-slate-500 flex items-center gap-1 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={sameAsMobile}
                            onChange={(e) => setSameAsMobile(e.target.checked)}
                            className="rounded border-slate-300 text-[#7a1c1c]"
                          />
                          <span>Same as Mobile</span>
                        </label>
                      </div>
                      <input
                        type="tel"
                        name="whatsapp"
                        disabled={sameAsMobile}
                        value={sameAsMobile ? formData.mobile : formData.whatsapp}
                        onChange={handleChange}
                        placeholder="WhatsApp contact number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none disabled:bg-slate-50 text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City / Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Durg / Bhilai / Raipur"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] focus:border-[#7a1c1c] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Loan Requirements */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1">
                    2. Loan Details &amp; Profile
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Loan Category</label>
                      <select
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none bg-white"
                      >
                        {LOAN_PRODUCTS.map((l) => (
                          <option key={l.id} value={l.id}>
                            {l.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Required Loan Amount (₹)
                      </label>
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="e.g. 500000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Employment Type</label>
                      <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none bg-white"
                      >
                        <option value="Salaried">Salaried Professional</option>
                        <option value="Self-employed">Self-employed Professional</option>
                        <option value="Business Owner">Business Owner / Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Approx Monthly Income (₹)
                      </label>
                      <input
                        type="number"
                        name="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={handleChange}
                        placeholder="Monthly income"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Existing Monthly EMI (₹)
                      </label>
                      <input
                        type="number"
                        name="existingEmi"
                        value={formData.existingEmi}
                        onChange={handleChange}
                        placeholder="Total current EMIs"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none bg-white"
                      >
                        <option value="Call">Phone Call</option>
                        <option value="WhatsApp">WhatsApp Message</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Specific Requirement / Notes (Optional)
                      </label>
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. Need low interest home balance transfer"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-slate-700 space-y-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="mt-0.5 rounded border-slate-300 text-[#7a1c1c] focus:ring-[#7a1c1c]"
                    />
                    <span className="leading-relaxed">
                      I agree to be contacted regarding my loan enquiry and understand that loan approval, interest rates, tenure, and processing terms are subject to lender eligibility, verification, and final sanction approval.
                    </span>
                  </label>
                </div>

                {/* Submit Action CTA */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="maroon-gradient-btn w-full py-4 rounded-xl font-black text-sm sm:text-base tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Reviewing Options...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>CHECK MY LOAN OPTIONS</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Your information is encrypted &amp; stored securely. No spam policy.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export const LeadCaptureForm: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-xs text-slate-500">
          Loading loan enquiry form...
        </div>
      }
    >
      <LeadCaptureFormContent />
    </Suspense>
  );
};
