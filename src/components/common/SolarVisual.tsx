import React from 'react';
import { motion } from 'motion/react';

interface SolarVisualProps {
  className?: string;
  showLightingEffects?: boolean;
  variant?: 'rooftop' | 'grid' | 'microgrid' | 'storage';
}

export const SolarVisual: React.FC<SolarVisualProps> = ({
  className = '',
  showLightingEffects = true,
  variant = 'rooftop',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Ambient Solar Lighting Atmosphere */}
      {showLightingEffects && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Subtle sun aura bloom */}
          <div className="absolute top-4 right-12 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200/20 via-white/10 to-transparent blur-3xl opacity-50" />
          
          {/* Lens flare ray */}
          <div className="absolute top-1/4 -right-10 w-[450px] h-[1px] bg-gradient-to-r from-transparent via-amber-100/40 to-transparent rotate-[32deg]" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl opacity-30" />
        </div>
      )}

      {/* High-Fidelity Modern Architectural Solar Rooftop & Microgrid SVG */}
      <motion.svg
        viewBox="0 0 1000 600"
        className="w-full h-auto max-w-[900px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          {/* Glass & Silicon Cell Gradients */}
          <linearGradient id="solarGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c3444" />
            <stop offset="35%" stopColor="#141824" />
            <stop offset="70%" stopColor="#090b10" />
            <stop offset="100%" stopColor="#1a202c" />
          </linearGradient>

          <linearGradient id="panelGleam" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="archConcrete" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0f1117" />
          </linearGradient>

          <linearGradient id="steelBeams" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          <linearGradient id="energyFlowLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </linearGradient>

          <filter id="sunGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Minimal Modernist Architectural Horizon */}
        <path d="M0 480 L1000 480 L1000 600 L0 600 Z" fill="#08090d" />
        <path d="M120 480 L280 340 L520 340 L680 480 Z" fill="#0d1017" stroke="#1e293b" strokeWidth="1.5" />

        {/* Minimal Villa / Building Geometry */}
        <polygon points="180,480 320,380 720,380 840,480" fill="url(#archConcrete)" stroke="#334155" strokeWidth="1" />
        <polygon points="320,380 440,280 840,280 720,380" fill="#131722" stroke="#1e293b" strokeWidth="1.5" />
        
        {/* Modernist Architectural Cantilever Roof Plane */}
        <polygon points="260,330 480,180 940,180 720,330" fill="#0a0d14" stroke="#475569" strokeWidth="2" />

        {/* ----------------- PRIMARY SOLAR PHOTOVOLTAIC ARRAY (3D ISOMETRIC PLANE) ----------------- */}
        {/* Outer Titanium Racking Frame */}
        <polygon 
          points="280,315 480,180 920,180 720,315" 
          fill="url(#solarGlass)" 
          stroke="#64748b" 
          strokeWidth="3" 
        />

        {/* Photovoltaic Cells & High-Yield Shingle Grid Lines */}
        {/* Longitudinal busbars */}
        <line x1="330" y1="315" x2="530" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="380" y1="315" x2="580" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="430" y1="315" x2="630" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="480" y1="315" x2="680" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="530" y1="315" x2="730" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="580" y1="315" x2="780" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="630" y1="315" x2="830" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="680" y1="315" x2="880" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Lateral cell strings */}
        <line x1="330" y1="280" x2="770" y2="280" stroke="#475569" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="380" y1="245" x2="820" y2="245" stroke="#475569" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="430" y1="210" x2="870" y2="210" stroke="#475569" strokeWidth="1" strokeOpacity="0.7" />

        {/* High-Gloss Solar Glass Reflection Flare */}
        <polygon 
          points="420,315 540,180 720,180 500,315" 
          fill="url(#panelGleam)" 
          style={{ mixBlendMode: 'screen' }} 
        />

        {/* ----------------- SECONDARY GROUND MICROGRID ARRAY ----------------- */}
        <g id="secondary-array">
          <polygon points="120,460 260,370 480,370 340,460" fill="url(#solarGlass)" stroke="#334155" strokeWidth="2" />
          <line x1="155" y1="460" x2="295" y2="370" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="190" y1="460" x2="330" y2="370" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="225" y1="460" x2="365" y2="370" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="260" y1="460" x2="400" y2="370" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="295" y1="460" x2="435" y2="370" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" />
          <polygon points="180,460 280,370 380,370 240,460" fill="url(#panelGleam)" opacity="0.5" />
        </g>

        {/* ----------------- SMART INVERTER & POWERVAULT STORAGE UNIT ----------------- */}
        <g id="storage-unit" transform="translate(680, 360)">
          {/* Wall-Mounted Lithium PowerVault */}
          <rect x="0" y="0" width="70" height="110" rx="4" fill="#06142F" stroke="#FFC928" strokeWidth="1.5" />
          <rect x="4" y="4" width="62" height="102" rx="2" fill="#081D3F" />
          
          {/* Glowing Capacity Status Bar */}
          <line x1="10" y1="20" x2="60" y2="20" stroke="#9BE51A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="15" cy="40" r="3" fill="#FFD84A" />
          <text x="24" y="43" fill="#EAF2FF" fontSize="6" fontFamily="sans-serif">100% SOLAR AUTONOMY</text>
          
          <rect x="10" y="55" width="50" height="35" rx="2" fill="#06142F" stroke="#0A2550" strokeWidth="1" />
          <text x="14" y="70" fill="#FFD84A" fontSize="8" fontFamily="monospace" fontWeight="bold">12.4 kW</text>
          <text x="14" y="82" fill="#9BE51A" fontSize="6" fontFamily="sans-serif">Clean Solar Inflow</text>

          {/* Connected conduit */}
          <path d="M35 110 L35 140 L-40 140" stroke="#FFC928" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
        </g>

        {/* ----------------- SUN FLARE ASTRONOMICAL RADIANCE ----------------- */}
        <g id="sun-radiance" transform="translate(780, 110)">
          {/* Core Sun Disc */}
          <circle cx="0" cy="0" r="18" fill="#FFD84A" filter="url(#sunGlow)" />
          <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
          
          {/* Radiating Precision Laser Corona */}
          <line x1="-70" y1="0" x2="70" y2="0" stroke="#FFD84A" strokeWidth="1.8" strokeOpacity="0.9" />
          <line x1="0" y1="-70" x2="0" y2="70" stroke="#FFD84A" strokeWidth="1.8" strokeOpacity="0.9" />
          <line x1="-48" y1="-48" x2="48" y2="48" stroke="#9BE51A" strokeWidth="1.5" strokeOpacity="0.7" />
          <line x1="-48" y1="48" x2="48" y2="-48" stroke="#9BE51A" strokeWidth="1.5" strokeOpacity="0.7" />

          {/* Atmospheric Halo */}
          <circle cx="0" cy="0" r="95" stroke="#FFC928" strokeWidth="0.9" strokeDasharray="4 6" strokeOpacity="0.4" />
        </g>

        {/* Subtle Telemetry Overlay Inset */}
        <g id="telemetry-badge" transform="translate(60, 100)">
          <rect x="0" y="0" width="165" height="48" rx="6" fill="#06142F" fillOpacity="0.9" stroke="#FFC928" strokeWidth="1.2" />
          <text x="14" y="20" fill="#FFD84A" fontSize="8" letterSpacing="1.5" fontFamily="monospace">GICSSOL SOLAR EFFICIENCY</text>
          <text x="14" y="38" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">24.8% N-TOPCon</text>
        </g>
      </motion.svg>
    </div>
  );
};
