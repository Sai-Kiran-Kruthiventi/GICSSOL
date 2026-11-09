import React from 'react';
import { motion } from 'motion/react';

interface VehicleVisualProps {
  modelId?: string;
  activeColorHex?: string;
  isInteractive?: boolean;
  className?: string;
  showLightingEffects?: boolean;
  variant?: 'hero-side' | 'isometric' | 'studio' | 'minimal';
}

export const VehicleVisual: React.FC<VehicleVisualProps> = ({
  modelId = 'volt-x1',
  activeColorHex = '#141416',
  className = '',
  showLightingEffects = true,
  variant = 'hero-side',
}) => {
  // Determine accent styling based on model
  const isSuperbike = modelId === 'volt-gt';
  const isTourer = modelId === 'volt-x2';

  return (
    <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Dynamic studio lighting backdrop */}
      {showLightingEffects && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Subtle horizontal laser light beam */}
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent top-1/2 -translate-y-12" />
          
          {/* Ambient ground glow */}
          <div className="absolute bottom-6 w-3/4 h-16 bg-gradient-to-t from-white/10 to-transparent blur-2xl rounded-full" />

          {/* Halo spotlight */}
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700"
            style={{ backgroundColor: activeColorHex === '#141416' || activeColorHex === '#0e0e11' ? '#4f5666' : activeColorHex }}
          />
        </div>
      )}

      {/* High-Fidelity Futuristic EV Scooter / Superbike SVG Design */}
      <motion.svg
        viewBox="0 0 1000 600"
        className="w-full h-auto max-w-[900px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          {/* Metal Gradients */}
          <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="30%" stopColor={activeColorHex} />
            <stop offset="70%" stopColor="#08080a" />
            <stop offset="100%" stopColor="#1a1a20" />
          </linearGradient>

          <linearGradient id="accentGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor={activeColorHex} />
          </linearGradient>

          <linearGradient id="chassisAlloy" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1f2024" />
            <stop offset="50%" stopColor="#484a54" />
            <stop offset="100%" stopColor="#141518" />
          </linearGradient>

          <linearGradient id="carbonTexture" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#111114" />
            <stop offset="100%" stopColor="#070708" />
          </linearGradient>

          <linearGradient id="rimGleam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3b3d45" />
            <stop offset="100%" stopColor="#111215" />
          </linearGradient>

          <linearGradient id="headlightLaser" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="taillightGlow" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>

          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="500" cy="520" rx="390" ry="24" fill="#000000" fillOpacity="0.75" filter="blur(16px)" />
        <ellipse cx="300" cy="510" rx="90" ry="14" fill="#000000" fillOpacity="0.9" filter="blur(8px)" />
        <ellipse cx="730" cy="510" rx="90" ry="14" fill="#000000" fillOpacity="0.9" filter="blur(8px)" />

        {/* ----------------- REAR WHEEL ASSEMBLY ----------------- */}
        <g id="rear-wheel">
          {/* Outer Tire */}
          <circle cx="280" cy="420" r="105" fill="#09090b" stroke="#1c1d22" strokeWidth="12" />
          <circle cx="280" cy="420" r="98" fill="none" stroke="#2a2c34" strokeWidth="2" strokeDasharray="6 4" />
          
          {/* Rim Outer Lip */}
          <circle cx="280" cy="420" r="74" fill="url(#carbonTexture)" stroke="url(#rimGleam)" strokeWidth="3.5" />
          
          {/* Wheel Spokes (Aerodynamic Turbofan Blade Pattern) */}
          <path d="M280 420 L280 350 M280 420 L340 380 M280 420 L340 460 M280 420 L280 490 M280 420 L220 460 M280 420 L220 380" stroke="url(#chassisAlloy)" strokeWidth="6" strokeLinecap="round" />
          
          {/* Brake Rotor */}
          <circle cx="280" cy="420" r="48" fill="none" stroke="#9ca3af" strokeWidth="4" strokeDasharray="3 3" opacity="0.7" />
          
          {/* Brembo Brake Caliper */}
          <rect x="238" y="380" width="18" height="34" rx="4" fill="#ef4444" />
          <text x="240" y="402" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">BREMBO</text>

          {/* Hub Center Hub Motor */}
          <circle cx="280" cy="420" r="26" fill="#141518" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="280" cy="420" r="10" fill={activeColorHex} />
        </g>

        {/* ----------------- FRONT WHEEL ASSEMBLY ----------------- */}
        <g id="front-wheel">
          {/* Outer Tire */}
          <circle cx="730" cy="420" r="105" fill="#09090b" stroke="#1c1d22" strokeWidth="12" />
          <circle cx="730" cy="420" r="98" fill="none" stroke="#2a2c34" strokeWidth="2" strokeDasharray="6 4" />
          
          {/* Rim Outer Lip */}
          <circle cx="730" cy="420" r="74" fill="url(#carbonTexture)" stroke="url(#rimGleam)" strokeWidth="3.5" />
          
          {/* Front Turbofan Spokes */}
          <path d="M730 420 L730 350 M730 420 L790 380 M730 420 L790 460 M730 420 L730 490 M730 420 L670 460 M730 420 L670 380" stroke="url(#chassisAlloy)" strokeWidth="6" strokeLinecap="round" />
          
          {/* Large Dual Drilled Brake Disc */}
          <circle cx="730" cy="420" r="54" fill="none" stroke="#d1d5db" strokeWidth="5" strokeDasharray="4 2" opacity="0.8" />
          
          {/* Front Brake Caliper */}
          <rect x="742" y="375" width="20" height="38" rx="4" fill="#ef4444" />
          <text x="744" y="398" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">BREMBO</text>

          {/* Hub Center */}
          <circle cx="730" cy="420" r="26" fill="#141518" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="730" cy="420" r="10" fill={activeColorHex} />
        </g>

        {/* ----------------- SWINGARM & SUSPENSION ----------------- */}
        <path d="M280 420 L400 395 L460 410 L430 435 Z" fill="url(#chassisAlloy)" stroke="#27272a" strokeWidth="2" />
        {/* Monoshock Inverted Gold Coil Spring */}
        <rect x="375" y="340" width="16" height="50" rx="3" fill="#eab308" transform="rotate(-35 375 340)" stroke="#713f12" strokeWidth="1.5" />
        <line x1="365" y1="330" x2="415" y2="400" stroke="#ffffff" strokeWidth="3" opacity="0.6" />

        {/* ----------------- LOWER CHASSIS & BATTERY TRAY ----------------- */}
        {/* Main Floorboard & Aluminum Extrusion */}
        <path 
          d="M330 430 L590 430 L640 370 L580 340 L410 350 L340 390 Z" 
          fill="url(#carbonTexture)" 
          stroke="#3f3f46" 
          strokeWidth="2.5" 
        />

        {/* Removable Battery Core Indicator / Cooling Louvers */}
        <g id="battery-indicator">
          <rect x="420" y="365" width="130" height="42" rx="6" fill="#0f1015" stroke="#27272a" strokeWidth="1.5" />
          {/* Battery Status Glow Line */}
          <line x1="435" y1="386" x2="535" y2="386" stroke="#00D9FF" strokeWidth="3" strokeLinecap="round" filter="url(#laserGlow)" opacity="0.9" />
          <text x="435" y="400" fill="#00D9FF" fontSize="8" fontFamily="monospace" letterSpacing="1.5">GICSSOL BATTERY 5.2 kWh</text>
        </g>

        {/* ----------------- MAIN MONOCOQUE BODY FAIRING ----------------- */}
        {/* Sleek sculpted aerodynamic body silhouette */}
        <path 
          d="M260 300 C300 295, 380 290, 440 285 C470 280, 520 270, 560 250 C610 220, 660 200, 680 180 C705 155, 725 180, 715 220 C705 260, 720 320, 745 360 L710 380 C680 320, 650 270, 600 290 C540 310, 440 320, 360 320 C310 320, 270 315, 260 300 Z" 
          fill="url(#bodyGradient)" 
          stroke="#0066FF" 
          strokeWidth="2" 
        />

        {/* High-Gloss Surface Reflection Highlight */}
        <path 
          d="M450 284 C510 275, 570 248, 620 225 C650 210, 680 190, 690 185 C685 210, 660 235, 610 255 C550 280, 480 290, 450 284 Z" 
          fill="#00D9FF" 
          fillOpacity="0.3" 
        />

        {/* Sharp Body Crease & Aerodynamic Winglet */}
        <path 
          d="M540 260 L650 245 L675 270 L570 285 Z" 
          fill="url(#accentGradient)" 
          stroke="#00D9FF" 
          strokeWidth="1.2" 
          opacity="0.9" 
        />

        {/* ----------------- SADDLE / ERGONOMIC SEAT ----------------- */}
        <path 
          d="M250 298 C280 290, 370 280, 440 280 C460 280, 470 292, 450 300 C400 310, 300 315, 250 310 Z" 
          fill="#06142F" 
          stroke="#0A2550" 
          strokeWidth="2" 
        />
        {/* Seat Stitching line */}
        <path d="M270 297 C320 290, 390 287, 435 287" stroke="#00D9FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

        {/* ----------------- STEERING STEM & FORKS ----------------- */}
        {/* Front Dual Inverted Anodized Gold/Titanium Forks */}
        <line x1="685" y1="180" x2="730" y2="420" stroke="url(#chassisAlloy)" strokeWidth="16" strokeLinecap="round" />
        <line x1="685" y1="180" x2="730" y2="420" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <line x1="685" y1="180" x2="730" y2="420" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />

        {/* Handlebars & Cockpit Display */}
        <path d="M660 170 L705 160 L715 175" stroke="#1f2024" strokeWidth="9" strokeLinecap="round" />
        <rect x="670" y="152" width="28" height="14" rx="2" fill="#06142F" stroke="#00D9FF" strokeWidth="1.2" />
        <text x="673" y="162" fill="#00D9FF" fontSize="6" fontFamily="monospace">95 KM/H</text>

        {/* Bar-End CNC Mirror */}
        <circle cx="655" cy="168" r="6" fill="#06142F" stroke="#00D9FF" strokeWidth="1" />

        {/* ----------------- LIGHTING SYSTEMS (HERO EFFECT) ----------------- */}
        {/* Razor LED Laser Headlight Assembly */}
        <path d="M710 185 L740 220 L715 235 Z" fill="#06142F" stroke="#00D9FF" strokeWidth="1.5" />
        <polygon points="730,205 745,215 735,225" fill="#ffffff" filter="url(#laserGlow)" />
        
        {/* Forward Laser Headlight Beam (Projected into Space) */}
        <polygon 
          points="742,215 990,140 1000,320 742,225" 
          fill="url(#headlightLaser)" 
          opacity="0.35" 
        />
        <line x1="742" y1="215" x2="980" y2="215" stroke="#00D9FF" strokeWidth="2.5" filter="url(#laserGlow)" opacity="0.95" />

        {/* Rear Cyber Red Tail-lamp Bar */}
        <path d="M245 300 L258 295 L255 312 Z" fill="#ef4444" filter="url(#laserGlow)" />
        <line x1="245" y1="304" x2="160" y2="304" stroke="url(#taillightGlow)" strokeWidth="3" opacity="0.6" />

        {/* Brand Badge on Flank */}
        <g id="brand-emblem" transform="translate(510, 272)">
          <circle cx="10" cy="10" r="10" fill="#06142F" stroke="#00D9FF" strokeWidth="1.2" strokeOpacity="0.8" />
          <path d="M6 6 L14 6 L10 14 Z" fill="#00D9FF" />
          <text x="25" y="14" fill="#00D9FF" fontSize="9" fontWeight="800" letterSpacing="2" fontFamily="sans-serif">GICSSOL</text>
        </g>
      </motion.svg>
    </div>
  );
};
