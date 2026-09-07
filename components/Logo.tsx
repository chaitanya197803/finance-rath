"use client";

import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
  animated = true
}) => {
  const dimensions = {
    sm: { height: 38, iconSize: 42, textFinance: "text-lg", textRath: "text-[#0d3b66] text-sm" },
    md: { height: 50, iconSize: 56, textFinance: "text-2xl", textRath: "text-[#0d3b66] text-lg" },
    lg: { height: 68, iconSize: 72, textFinance: "text-3xl", textRath: "text-[#0d3b66] text-xl" }
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-3.5 select-none cursor-pointer group ${
        animated ? "transition-all duration-300 transform hover:scale-[1.03]" : ""
      } ${className}`}
    >
      {/* Emblem SVG matching the Royal Blue & Gold Logo */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={dimensions.iconSize}
          height={dimensions.iconSize}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] group-hover:rotate-1"
        >
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#0D3B66" />
              <stop offset="100%" stopColor="#0A2540" />
            </linearGradient>

            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#D4AF37" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Outer Royal Blue Thick Ring */}
          <circle cx="100" cy="100" r="92" fill="url(#blueGrad)" />

          {/* Gold Inner Accent Ring */}
          <circle cx="100" cy="100" r="82" stroke="url(#goldGrad)" strokeWidth="5" fill="#FFFFFF" />
          <circle cx="100" cy="100" r="76" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" />

          {/* Cardinal Arrow Compass Tips (Deep Blue & Gold Trim) */}
          {/* North Arrow Tip */}
          <polygon points="100,6 110,24 90,24" fill="url(#blueGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
          {/* South Arrow Tip */}
          <polygon points="100,194 110,176 90,176" fill="url(#blueGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
          {/* East Arrow Tip */}
          <polygon points="194,100 176,110 176,90" fill="url(#blueGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
          {/* West Arrow Tip */}
          <polygon points="6,100 24,110 24,90" fill="url(#blueGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />

          {/* Upward Growth Bar Chart (Deep Royal Blue with Upward Arrow Tips) */}
          <g filter="url(#goldGlow)">
            <rect x="60" y="130" width="12" height="25" rx="2" fill="url(#blueGrad)" />
            <rect x="76" y="112" width="12" height="43" rx="2" fill="url(#blueGrad)" />
            <polygon points="82,102 90,113 74,113" fill="url(#blueGrad)" />

            <rect x="92" y="96" width="12" height="59" rx="2" fill="url(#blueGrad)" />
            <polygon points="98,86 106,97 90,97" fill="url(#blueGrad)" />

            <rect x="108" y="108" width="12" height="47" rx="2" fill="url(#blueGrad)" />
            <polygon points="114,98 122,109 106,109" fill="url(#blueGrad)" />

            <rect x="124" y="118" width="12" height="37" rx="2" fill="url(#blueGrad)" />
            <polygon points="130,108 138,119 122,119" fill="url(#blueGrad)" />
          </g>

          {/* Chariot ("Rath") Deep Blue & Gold Accent Silhouette */}
          {/* Carriage Top Curved Shield */}
          <path
            d="M 68,96 C 68,68 90,52 118,52 C 132,52 144,58 150,66 L 142,70 C 137,64 128,60 118,60 C 96,60 76,72 76,96 L 68,96 Z"
            fill="url(#blueGrad)"
            stroke="url(#goldGrad)"
            strokeWidth="1.5"
          />
          {/* Main Chariot Seat Body */}
          <path
            d="M 74,94 L 142,94 C 148,94 154,100 154,106 L 150,110 L 70,110 Z"
            fill="url(#blueGrad)"
            stroke="url(#goldGrad)"
            strokeWidth="1.5"
          />
          {/* Chariot Arm Front Handle Curve */}
          <path
            d="M 52,100 C 45,95 40,84 48,78 C 54,74 62,80 58,86"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Rear Wheel (Deep Blue with Gold Spokes & Hub) */}
          <circle cx="84" cy="120" r="16" stroke="url(#goldGrad)" strokeWidth="3" fill="#FFFFFF" />
          <circle cx="84" cy="120" r="14" stroke="url(#blueGrad)" strokeWidth="2" fill="none" />
          <circle cx="84" cy="120" r="4" fill="url(#goldGrad)" />
          <line x1="84" y1="104" x2="84" y2="136" stroke="url(#goldGrad)" strokeWidth="2" />
          <line x1="68" y1="120" x2="100" y2="120" stroke="url(#goldGrad)" strokeWidth="2" />
          <line x1="72" y1="108" x2="96" y2="132" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <line x1="72" y1="132" x2="96" y2="108" stroke="url(#goldGrad)" strokeWidth="1.5" />

          {/* Front Wheel (Deep Blue with Gold Spokes & Hub) */}
          <circle cx="134" cy="120" r="15" stroke="url(#goldGrad)" strokeWidth="3" fill="#FFFFFF" />
          <circle cx="134" cy="120" r="13" stroke="url(#blueGrad)" strokeWidth="2" fill="none" />
          <circle cx="134" cy="120" r="4" fill="url(#goldGrad)" />
          <line x1="134" y1="105" x2="134" y2="135" stroke="url(#goldGrad)" strokeWidth="2" />
          <line x1="119" y1="120" x2="149" y2="120" stroke="url(#goldGrad)" strokeWidth="2" />
          <line x1="123" y1="109" x2="145" y2="131" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <line x1="123" y1="131" x2="145" y2="109" stroke="url(#goldGrad)" strokeWidth="1.5" />

          {/* Golden Dynamic Swoosh Arrow Sweeping Bottom-Left to Top-Right */}
          <path
            d="M 24,112 C 32,158 78,174 135,148 C 160,136 174,114 178,82"
            stroke="url(#goldGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Blue Arrow Tip with Gold Outline at the end of Swoosh */}
          <polygon
            points="186,74 184,90 170,82"
            fill="url(#blueGrad)"
            stroke="url(#goldGrad)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Horizontal Landscape Brand Typography with On-Hover Shine */}
      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span
            className={`font-black tracking-widest text-[#c68a16] uppercase drop-shadow-2xs transition-colors duration-300 group-hover:text-[#d4af37] ${dimensions.textFinance}`}
            style={{
              fontFamily: "var(--font-sans), Arial Black, sans-serif",
              WebkitTextStroke: "0.5px #7c5208"
            }}
          >
            FINANCE
          </span>
          <span
            className={`font-black tracking-[0.25em] text-[#0d3b66] uppercase transition-colors duration-300 group-hover:text-[#1e40af] ${dimensions.textRath}`}
            style={{
              fontFamily: "var(--font-sans), Arial Black, sans-serif"
            }}
          >
            RATH
          </span>
        </div>
      )}
    </div>
  );
};
