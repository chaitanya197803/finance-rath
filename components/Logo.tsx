import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true, size = "md" }) => {
  const dimensions = {
    sm: { height: 40, iconSize: 36, textFinance: "text-lg", textRath: "text-xs" },
    md: { height: 52, iconSize: 48, textFinance: "text-xl", textRath: "text-sm" },
    lg: { height: 68, iconSize: 64, textFinance: "text-2xl", textRath: "text-base" }
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Emblem representing the Finance Rath logo */}
      <svg
        width={dimensions.iconSize}
        height={dimensions.iconSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="maroonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9E2A2A" />
            <stop offset="100%" stopColor="#7A1C1C" />
          </linearGradient>
        </defs>

        {/* Outer Compass Circle & Cardinal Arrow Tips */}
        <circle cx="100" cy="100" r="76" stroke="#7A1C1C" strokeWidth="4" fill="none" />
        <circle cx="100" cy="100" r="82" stroke="#7A1C1C" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

        {/* North Arrow Tip */}
        <polygon points="100,10 108,24 92,24" fill="#7A1C1C" />
        {/* South Arrow Tip */}
        <polygon points="100,190 108,176 92,176" fill="#7A1C1C" />
        {/* East Arrow Tip */}
        <polygon points="190,100 176,108 176,92" fill="#7A1C1C" />
        {/* West Arrow Tip */}
        <polygon points="10,100 24,108 24,92" fill="#7A1C1C" />

        {/* Upward Growth Bar Chart (Maroon Red) */}
        <rect x="62" y="125" width="12" height="25" rx="2" fill="url(#maroonGrad)" />
        <rect x="80" y="110" width="12" height="40" rx="2" fill="url(#maroonGrad)" />
        <rect x="98" y="95" width="12" height="55" rx="2" fill="url(#maroonGrad)" />
        <rect x="116" y="105" width="12" height="45" rx="2" fill="url(#maroonGrad)" />
        <rect x="134" y="118" width="12" height="32" rx="2" fill="url(#maroonGrad)" />

        {/* Chariot ("Rath") Golden Silhouette */}
        <path
          d="M 60,105 C 60,75 85,60 115,60 C 130,60 142,66 148,74 L 140,78 C 135,72 126,67 115,67 C 90,67 70,80 70,105 L 60,105 Z"
          fill="url(#goldGrad)"
        />
        {/* Chariot Seat Body */}
        <path
          d="M 68,102 L 138,102 C 145,102 152,108 152,114 L 148,118 L 64,118 Z"
          fill="url(#goldGrad)"
        />
        {/* Rear Wheel (Golden) */}
        <circle cx="82" cy="126" r="16" stroke="url(#goldGrad)" strokeWidth="3" fill="#FFFFFF" />
        <circle cx="82" cy="126" r="4" fill="url(#goldGrad)" />
        <line x1="82" y1="110" x2="82" y2="142" stroke="url(#goldGrad)" strokeWidth="2" />
        <line x1="66" y1="126" x2="98" y2="126" stroke="url(#goldGrad)" strokeWidth="2" />

        {/* Front Wheel (Golden) */}
        <circle cx="132" cy="126" r="14" stroke="url(#goldGrad)" strokeWidth="3" fill="#FFFFFF" />
        <circle cx="132" cy="126" r="3.5" fill="url(#goldGrad)" />
        <line x1="132" y1="112" x2="132" y2="140" stroke="url(#goldGrad)" strokeWidth="2" />
        <line x1="118" y1="126" x2="146" y2="126" stroke="url(#goldGrad)" strokeWidth="2" />

        {/* Golden Swoosh Arrow Wrapping Bottom-Left to Top-Right */}
        <path
          d="M 28,115 C 35,160 80,175 135,150 C 160,138 175,115 180,85"
          stroke="url(#goldGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="185,78 184,92 172,85" fill="url(#goldGrad)" />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-black tracking-wider text-[#b45309] ${dimensions.textFinance}`}>
            FINANCE
          </span>
          <span className={`font-black tracking-widest text-[#7a1c1c] ${dimensions.textRath}`}>
            RATH
          </span>
        </div>
      )}
    </div>
  );
};
