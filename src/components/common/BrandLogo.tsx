import React from 'react';
import { motion } from 'motion/react';

interface BrandLogoProps {
  variant?: 'compact' | 'full' | 'emblem-only' | 'footer' | 'large-hero';
  className?: string;
  showTagline?: boolean;
  showPillars?: boolean;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'compact',
  className = '',
  showTagline = true,
  showPillars = false,
  onClick,
}) => {
  // SVG Emblem reproducing the GICSSOL 3D G-Infinity Logo
  const renderEmblem = (size: number) => {
    return (
      <div 
        className="relative flex items-center justify-center select-none shrink-0 group"
        style={{ width: size, height: size }}
      >
        {/* Luminous Glow Behind Logo */}
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 35% 50%, rgba(0, 217, 255, 0.45) 0%, rgba(0, 102, 255, 0.25) 30%, rgba(255, 201, 40, 0.35) 60%, rgba(155, 229, 26, 0.2) 80%, transparent 100%)'
          }}
        />

        <svg 
          viewBox="0 0 200 200" 
          width={size} 
          height={size} 
          className="relative z-10 filter drop-shadow-[0_4px_12px_rgba(0,102,255,0.4)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer Ring Gold-to-Blue Arc Gradient */}
            <linearGradient id="gicssolRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="35%" stopColor="#0066FF" />
              <stop offset="70%" stopColor="#FFC928" />
              <stop offset="100%" stopColor="#9BE51A" />
            </linearGradient>

            {/* Left Electric Infinity Loop Gradient */}
            <linearGradient id="electricLoopGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="60%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#1769E0" />
            </linearGradient>

            {/* Right Solar Infinity Loop Gradient */}
            <linearGradient id="solarLoopGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FFD84A" />
              <stop offset="50%" stopColor="#FFC928" />
              <stop offset="100%" stopColor="#9BE51A" />
            </linearGradient>

            {/* 3D G Spine Gradient */}
            <linearGradient id="gSpineGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="40%" stopColor="#0066FF" />
              <stop offset="80%" stopColor="#0A2550" />
              <stop offset="100%" stopColor="#00D9FF" />
            </linearGradient>

            {/* Solar Photovoltaic Grid Pattern */}
            <pattern id="solarCells" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
              <rect width="11" height="11" fill="#06142F" stroke="#FFC928" strokeWidth="0.8" opacity="0.85" />
              <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="#FFD84A" strokeWidth="0.5" opacity="0.6" />
              <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="#FFD84A" strokeWidth="0.5" opacity="0.6" />
            </pattern>

            {/* Cyber Neural Mesh Dots Pattern */}
            <pattern id="cyberDots" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="#00D9FF" opacity="0.7" />
              <line x1="0" y1="4" x2="8" y2="4" stroke="#00D9FF" strokeWidth="0.4" opacity="0.3" />
            </pattern>
          </defs>

          {/* 1. Luminous Outer Orbital Ring */}
          <circle 
            cx="100" 
            cy="100" 
            r="86" 
            stroke="url(#gicssolRingGrad)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle 
            cx="100" 
            cy="100" 
            r="88" 
            stroke="#00D9FF" 
            strokeWidth="1" 
            opacity="0.4"
            strokeDasharray="4 8" 
          />

          {/* 2. Top-Right Sun Flare Glow Accent */}
          <circle cx="165" cy="85" r="7" fill="#FFD84A" filter="drop-shadow(0 0 10px #FFC928)" />
          <path d="M165 72 L165 98 M152 85 L178 85 M156 76 L174 94 M156 94 L174 76" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.85" />

          {/* 3. The 3D Master "G" Form (Bold Curved Top Arc and Inward Bar) */}
          <path 
            d="M135 70 C125 50, 85 45, 62 65 C40 85, 42 120, 65 140 C88 160, 130 152, 142 130 C146 122, 148 110, 148 102 L102 102 L102 88 L160 88 C162 105, 160 128, 144 148 C122 174, 72 176, 45 145 C18 114, 20 68, 52 40 C84 14, 138 20, 158 55 Z" 
            fill="url(#gSpineGrad)" 
            stroke="rgba(0,217,255,0.8)" 
            strokeWidth="1.5"
          />

          {/* Inner 3D Bevel Highlight on the G */}
          <path 
            d="M130 68 C120 54, 88 50, 68 68 C50 84, 50 114, 68 132 C86 150, 122 144, 134 126 L134 108 L108 108 L108 96 L150 96 C150 108, 150 122, 138 138" 
            stroke="#00D9FF" 
            strokeWidth="2" 
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* 4. The Intertwining Infinity Loop Base */}
          {/* Left Loop: Electric Cybernetic Blue / Cyan Network */}
          <path 
            d="M100 125 C80 105, 52 105, 40 122 C26 140, 36 166, 62 166 C86 166, 106 142, 120 125" 
            fill="url(#cyberDots)"
            stroke="url(#electricLoopGrad)" 
            strokeWidth="8" 
            strokeLinecap="round"
            filter="drop-shadow(0 0 8px rgba(0,217,255,0.8))"
          />

          {/* Right Loop: Solar Photovoltaic Grid with Gold/Green Gradient */}
          <path 
            d="M100 125 C120 105, 148 105, 160 122 C174 140, 164 166, 138 166 C114 166, 94 142, 80 125" 
            fill="url(#solarCells)"
            stroke="url(#solarLoopGrad)" 
            strokeWidth="8" 
            strokeLinecap="round"
            filter="drop-shadow(0 0 10px rgba(255,201,40,0.8))"
          />

          {/* Photovoltaic Solar Panel Texture Inlay on Right Loop */}
          <path 
            d="M125 125 L155 120 L168 145 L135 155 Z" 
            fill="url(#solarCells)" 
            stroke="#FFC928" 
            strokeWidth="1.2"
            opacity="0.95"
          />

          {/* Central Infinity Intersection Node */}
          <circle cx="100" cy="125" r="4.5" fill="#FFFFFF" filter="drop-shadow(0 0 8px #00D9FF)" />
        </svg>
      </div>
    );
  };

  if (variant === 'emblem-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} onClick={onClick}>
        {renderEmblem(48)}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div 
        className={`inline-flex items-center gap-3 cursor-pointer select-none group ${className}`}
        onClick={onClick}
      >
        {renderEmblem(38)}
        <div className="flex flex-col text-left">
          <div className="flex items-center tracking-[0.25em] font-extrabold text-lg sm:text-xl font-display leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD84A] to-[#FFC928] text-glow-gold">
              GIC
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0066FF] text-glow-cyan">
              SSOL
            </span>
          </div>
          {showTagline && (
            <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.28em] font-tech text-[#EAF2FF]/70 -mt-0.5 whitespace-nowrap">
              GLOW INFINITE SMART SOLUTIONS
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col items-start gap-4 ${className}`}>
        <div className="flex items-center gap-3.5" onClick={onClick}>
          {renderEmblem(44)}
          <div className="flex flex-col text-left">
            <div className="flex items-center tracking-[0.25em] font-extrabold text-2xl font-display leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD84A] to-[#FFC928] text-glow-gold">
                GIC
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0066FF] text-glow-cyan">
                SSOL
              </span>
            </div>
            <span className="text-[8.5px] uppercase tracking-[0.3em] font-tech text-[#EAF2FF]/80 whitespace-nowrap">
              GLOW INFINITE SMART SOLUTIONS
            </span>
          </div>
        </div>
        <p className="text-xs text-[#EAF2FF]/70 font-light font-sans max-w-sm leading-relaxed">
          Pioneering the closed-loop sustainable ecosystem: Autonomous solar energy capture, intelligent battery storage, and high-performance zero-emission electric mobility.
        </p>
      </div>
    );
  }

  // Master Full / Hero Brand Presentation (with 4 Pillars)
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* 3D Master Emblem */}
      <motion.div 
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mb-3"
      >
        {renderEmblem(variant === 'large-hero' ? 140 : 96)}
      </motion.div>

      {/* Dual-Tone Metallic Wordmark */}
      <div className="flex items-center justify-center tracking-[0.28em] font-extrabold text-3xl sm:text-5xl lg:text-6xl font-display leading-none mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0A0] via-[#FFD84A] to-[#FFC928] text-glow-gold filter drop-shadow-[0_2px_15px_rgba(255,201,40,0.5)]">
          GIC
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#1769E0] to-[#0066FF] text-glow-cyan filter drop-shadow-[0_2px_15px_rgba(0,217,255,0.5)]">
          SSOL
        </span>
      </div>

      {/* Tagline with Glowing Wings */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 w-full max-w-md">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/70 to-[#00D9FF]" />
        <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.38em] font-tech text-[#EAF2FF] font-medium whitespace-nowrap">
          GLOW INFINITE SMART SOLUTIONS
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#9BE51A]/70 to-[#9BE51A]" />
      </div>

      {/* 4 Brand Pillars (from the logo bottom bar) */}
      {showPillars && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-4xl pt-6 border-t border-[#0A2550]">
          {/* Pillar 1: Infinite Possibilities */}
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#081D3F]/60 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00D9FF] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" />
            </svg>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] font-tech text-white uppercase text-center">
              INFINITE POSSIBILITIES
            </span>
            <span className="text-[8px] text-[#EAF2FF]/60 mt-0.5 text-center">Clean Energy Cycle</span>
          </div>

          {/* Pillar 2: Smart Innovation */}
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#081D3F]/60 border border-[#9BE51A]/20 hover:border-[#9BE51A]/50 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#9BE51A] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] font-tech text-white uppercase text-center">
              SMART INNOVATION
            </span>
            <span className="text-[8px] text-[#EAF2FF]/60 mt-0.5 text-center">IoT & AI Telemetry</span>
          </div>

          {/* Pillar 3: Sustainable Solutions */}
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#081D3F]/60 border border-[#FFC928]/20 hover:border-[#FFC928]/50 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FFC928] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              <rect x="6" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] font-tech text-white uppercase text-center">
              SUSTAINABLE SOLUTIONS
            </span>
            <span className="text-[8px] text-[#EAF2FF]/60 mt-0.5 text-center">Solar Photovoltaics</span>
          </div>

          {/* Pillar 4: Growth With Intelligence */}
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#081D3F]/60 border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0066FF] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18M7 16v-3M12 16V9M17 16V5M7 13l5-4 5-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] font-tech text-white uppercase text-center">
              GROWTH WITH INTELLIGENCE
            </span>
            <span className="text-[8px] text-[#EAF2FF]/60 mt-0.5 text-center">Scalable Clean Tech</span>
          </div>
        </div>
      )}
    </div>
  );
};
