import React from "react";
import { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StickyMobileBar } from "../../components/StickyMobileBar";
import { LeadCaptureForm } from "../../components/LeadCaptureForm";
import { COMPANY_CONFIG } from "../../config/company";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Finance Rath | Durg Office & Support Helpline",
  description:
    "Get in touch with Finance Rath loan advisors at City Center Mall, Station Road, Durg, Chhattisgarh. Phone: 88888 99999, Email: info@financerath.com."
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#b45309]">
              <ShieldCheck className="w-4 h-4 text-[#7a1c1c]" />
              <span>We Are Here To Assist You</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Contact Finance Rath
            </h1>
            <p className="text-sm text-slate-600">
              Reach out to our loan advisory desk for personalized assistance regarding your loan requirement.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#7a1c1c] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Office Location</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {COMPANY_CONFIG.officeAddress}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#7a1c1c] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Helpline Phone</h3>
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="text-xs font-bold text-[#7a1c1c] hover:underline block"
              >
                {COMPANY_CONFIG.phone}
              </a>
              <span className="text-[11px] text-slate-400 block">Mon - Sat: 9:30 AM to 6:30 PM</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">WhatsApp Line</h3>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20need%20loan%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline block"
              >
                Connect on WhatsApp →
              </a>
              <span className="text-[11px] text-slate-400 block">Instant Chat Support</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#7a1c1c] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Email Address</h3>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="text-xs font-bold text-slate-900 hover:underline block"
              >
                {COMPANY_CONFIG.email}
              </a>
              <span className="text-[11px] text-slate-400 block">Official Support Inbox</span>
            </div>
          </div>

          {/* Google Maps Location Embed Graphic Placeholder */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 px-2">
              <span>Google Maps Office Direction</span>
              <span className="text-slate-400">Station Road, Durg</span>
            </div>
            <div className="w-full h-64 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 text-xs flex-col space-y-2">
              <MapPin className="w-8 h-8 text-[#7a1c1c]" />
              <span className="font-bold text-slate-700">City Center Mall, Station Road, Durg, Chhattisgarh</span>
              <span>[Interactive Google Maps Embed Integrated]</span>
            </div>
          </div>

          {/* Embedded Form */}
          <LeadCaptureForm />
        </div>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
