"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_CONFIG } from "../config/company";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Click to Call */}
        <a
          href={`tel:${COMPANY_CONFIG.phone.replace(/\s+/g, "")}`}
          className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-[10px] active:bg-slate-200 border border-slate-200"
        >
          <Phone className="w-4 h-4 text-[#7a1c1c] mb-0.5" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hello%20Finance%20Rath,%20I%20want%20to%20check%20my%20loan%20options.`}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-[10px] active:bg-emerald-100 border border-emerald-200"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WHATSAPP</span>
        </a>

        {/* Main CTA button */}
        <Link
          href="#lead-form"
          className="col-span-6 maroon-gradient-btn flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-extrabold text-xs tracking-tight shadow-md text-white"
        >
          <span>CHECK OPTIONS</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
