import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { VehicleVisual } from '../common/VehicleVisual';
import { SolarVisual } from '../common/SolarVisual';
import { ArrowRight, Zap, Sun } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE } from '../../data/mockData';

interface SplitHeroProps {
  onSelectSector: (sector: 'electric' | 'solar') => void;
}

export const SplitHero: React.FC<SplitHeroProps> = ({ onSelectSector }) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Active hover state: null | 'electric' | 'solar'
  const [activeSide, setActiveSide] = useState<'electric' | 'solar' | null>(null);

  // Mouse position normalized from -1 to 1 for 3D parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Transitioning state when user clicks Explore
  const [transitioningTo, setTransitioningTo] = useState<'electric' | 'solar' | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setMousePos({ x, y });
  };

  const handleExplore = (sector: 'electric' | 'solar') => {
    setTransitioningTo(sector);
    onSelectSector(sector);
    setTimeout(() => {
      navigate(sector === 'electric' ? '/electric' : '/solar');
    }, 650);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-[#06142F] flex flex-col lg:flex-row select-none"
    >
      {/* -------------------- FULL SCREEN CINEMATIC TRANSITION OVERLAY -------------------- */}
      <AnimatePresence>
        {transitioningTo && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className={`fixed inset-0 z-[200] flex flex-col items-center justify-center p-6 text-center ${
              transitioningTo === 'electric' 
                ? 'bg-gradient-to-b from-[#06142F] via-[#0A2550] to-[#040D1F] text-white' 
                : 'bg-gradient-to-b from-[#081D3F] via-[#0D2E5C] to-[#06142F] text-white'
            }`}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-4 max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-[0.4em] font-tech">
                <span className={`w-2 h-2 rounded-full ${transitioningTo === 'electric' ? 'bg-[#00D9FF] animate-ping' : 'bg-[#FFD84A] animate-ping'}`} />
                {BRAND_NAME} &bull; ENTERING SECTOR
              </div>
              <h2 className="luxury-text text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
                {transitioningTo === 'electric' ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0066FF]">
                    ELECTRIC MOBILITY
                  </span>
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD84A] via-[#FFC928] to-[#9BE51A]">
                    SOLAR ENERGY
                  </span>
                )}
              </h2>
              <p className="text-xs uppercase tracking-[0.3em] opacity-80 font-tech text-[#EAF2FF]">
                {BRAND_TAGLINE}
              </p>
              <div className={`w-24 h-[2px] mx-auto mt-6 rounded-full ${
                transitioningTo === 'electric' 
                  ? 'bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent shadow-[0_0_15px_#00D9FF]' 
                  : 'bg-gradient-to-r from-transparent via-[#FFC928] to-transparent shadow-[0_0_15px_#FFC928]'
              }`} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------- LEFT PANEL: ELECTRIC MOBILITY (BLUE / CYAN THEME) -------------------- */}
      <motion.section
        data-cursor-sector="electric"
        onMouseEnter={() => setActiveSide('electric')}
        onMouseLeave={() => setActiveSide(null)}
        onClick={() => {
          if (window.innerWidth < 1024) handleExplore('electric');
        }}
        animate={{
          flex: activeSide === 'electric' ? 1.25 : activeSide === 'solar' ? 0.8 : 1,
        }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
        className="relative h-1/2 lg:h-full flex-1 overflow-hidden group cursor-pointer border-b lg:border-b-0 lg:border-r border-[#00D9FF]/20 bg-gradient-to-br from-[#06142F] via-[#081D3F] to-[#040D1F] text-white flex flex-col justify-between pt-20 lg:pt-24 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-14"
      >
        {/* Ambient Electric Glow & Grid Background */}
        <div className="absolute inset-0 electric-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-electric-ambient pointer-events-none" />

        {/* Floating Cyan Energy Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-energy-particle opacity-60" style={{ animationDelay: '0s' }} />
          <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-[#0066FF] animate-energy-particle opacity-70" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-energy-particle opacity-50" style={{ animationDelay: '2.8s' }} />
        </div>

        {/* 3D Parallax Vehicle Visual */}
        <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-10 z-10 pointer-events-none">
          <motion.div
            animate={{
              x: activeSide === 'electric' ? -mousePos.x * 24 : 0,
              y: activeSide === 'electric' ? -mousePos.y * 18 : 0,
              rotateX: activeSide === 'electric' ? mousePos.y * 2.5 : 0,
              rotateY: activeSide === 'electric' ? -mousePos.x * 3.5 : 0,
              scale: activeSide === 'electric' ? 1.05 : activeSide === 'solar' ? 0.94 : 1,
            }}
            transition={{ type: 'spring', damping: 28, stiffness: 120, mass: 0.5 }}
            className="w-full max-w-[540px] transition-transform duration-500 perspective-1000"
          >
            <VehicleVisual 
              modelId="gicssol-x1" 
              activeColorHex="#06142F"
              showLightingEffects={true}
            />
          </motion.div>
        </div>

        {/* Top Tag & Sector Marker */}
        <div className="relative z-20 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#00D9FF]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
            <p className="text-[10px] tracking-[0.35em] font-tech uppercase text-[#00D9FF] font-semibold">
              01 &mdash; ELECTRIC MOBILITY
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] font-tech text-[#EAF2FF]/70">
            <Zap className="w-3 h-3 text-[#00D9FF]" /> HYPER-INTELLIGENT EV
          </span>
        </div>

        {/* Center Content & Action */}
        <div className="relative z-20 text-center flex flex-col items-center my-auto py-2">
          <div className="space-y-1 mb-2">
            <h1 className="luxury-text text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.35em] text-white">
              ELECTRIC
            </h1>
            <h1 className="luxury-text text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0066FF] text-glow-cyan">
              MOBILITY
            </h1>
          </div>
          
          <p className="text-xs sm:text-sm uppercase font-light tracking-[0.3em] font-tech text-[#EAF2FF]/90 mb-4 sm:mb-6">
            MOVE BEYOND.
          </p>

          {/* Quick Specs Highlight Bar */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeSide === 'electric' ? 1 : 0.85,
              borderColor: activeSide === 'electric' ? 'rgba(0, 217, 255, 0.45)' : 'rgba(0, 217, 255, 0.2)',
            }}
            className="flex items-center gap-4 sm:gap-6 py-2.5 px-6 mb-5 rounded-full border border-[#00D9FF]/20 bg-[#06142F]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-bold font-tech text-[#00D9FF]">150 KM</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#EAF2FF]/60">Range</span>
            </div>
            <div className="h-4 w-[1px] bg-[#00D9FF]/25" />
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-bold font-tech text-white">95 KM/H</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#EAF2FF]/60">Top Speed</span>
            </div>
            <div className="h-4 w-[1px] bg-[#00D9FF]/25" />
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-bold font-tech text-[#00D9FF]">2.9 S</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#EAF2FF]/60">0–50 KM/H</span>
            </div>
          </motion.div>

          {/* Electric Brand CTA Button */}
          <button
            data-cursor-text="EXPLORE"
            onClick={(e) => {
              e.stopPropagation();
              handleExplore('electric');
            }}
            className="btn-electric relative z-30 inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.25em] cursor-pointer group"
          >
            <span>EXPLORE ELECTRIC</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute left-6 sm:left-8 bottom-12 vertical-rail text-[9px] tracking-[0.35em] opacity-50 text-[#00D9FF] pointer-events-none hidden sm:block font-tech">
          CYBERNETIC VELOCITY
        </div>

        <div className="h-2" />
      </motion.section>

      {/* -------------------- RIGHT PANEL: SOLAR ENERGY (GOLD / YELLOW / GREEN THEME) -------------------- */}
      <motion.section
        data-cursor-sector="solar"
        onMouseEnter={() => setActiveSide('solar')}
        onMouseLeave={() => setActiveSide(null)}
        onClick={() => {
          if (window.innerWidth < 1024) handleExplore('solar');
        }}
        animate={{
          flex: activeSide === 'solar' ? 1.25 : activeSide === 'electric' ? 0.8 : 1,
        }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
        className="relative h-1/2 lg:h-full flex-1 overflow-hidden group cursor-pointer bg-gradient-to-bl from-[#081D3F] via-[#0A2550] to-[#06142F] text-white flex flex-col justify-between pt-20 lg:pt-24 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-14"
      >
        {/* Ambient Solar Glow & Photovoltaic Grid */}
        <div className="absolute inset-0 solar-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-solar-ambient pointer-events-none" />

        {/* Floating Solar Gold & Green Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#FFD84A] animate-energy-particle opacity-65" style={{ animationDelay: '0.4s' }} />
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[#9BE51A] animate-energy-particle opacity-60" style={{ animationDelay: '1.8s' }} />
          <div className="absolute top-1/5 right-1/2 w-2 h-2 rounded-full bg-[#FFC928] animate-energy-particle opacity-70" style={{ animationDelay: '3.1s' }} />
        </div>

        {/* 3D Parallax Solar Visual */}
        <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-10 z-10 pointer-events-none">
          <motion.div
            animate={{
              x: activeSide === 'solar' ? -mousePos.x * 24 : 0,
              y: activeSide === 'solar' ? -mousePos.y * 18 : 0,
              rotateX: activeSide === 'solar' ? mousePos.y * 2.5 : 0,
              rotateY: activeSide === 'solar' ? -mousePos.x * 3.5 : 0,
              scale: activeSide === 'solar' ? 1.05 : activeSide === 'electric' ? 0.94 : 1,
            }}
            transition={{ type: 'spring', damping: 28, stiffness: 120, mass: 0.5 }}
            className="w-full max-w-[540px] transition-transform duration-500 perspective-1000"
          >
            <SolarVisual 
              showLightingEffects={true}
              variant="rooftop"
            />
          </motion.div>
        </div>

        {/* Top Tag & Sector Marker */}
        <div className="relative z-20 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928]/15 border border-[#FFC928]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD84A] animate-pulse" />
            <p className="text-[10px] tracking-[0.35em] font-tech uppercase text-[#FFD84A] font-semibold">
              02 &mdash; SOLAR ENERGY
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] font-tech text-[#EAF2FF]/70">
            <Sun className="w-3 h-3 text-[#FFC928]" /> CLEAN POWER REVOLUTION
          </span>
        </div>

        {/* Center Content & Action */}
        <div className="relative z-20 text-center flex flex-col items-center my-auto py-2">
          <div className="space-y-1 mb-2">
            <h2 className="luxury-text text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.35em] text-white">
              SOLAR
            </h2>
            <h2 className="luxury-text text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFD84A] via-[#FFC928] to-[#9BE51A] text-glow-gold">
              ENERGY
            </h2>
          </div>

          <p className="text-xs sm:text-sm uppercase font-light tracking-[0.3em] font-tech text-[#EAF2FF]/90 mb-4 sm:mb-6">
            POWER THE FUTURE.
          </p>

          {/* Quick Specs Highlight Bar */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeSide === 'solar' ? 1 : 0.85,
              borderColor: activeSide === 'solar' ? 'rgba(255, 201, 40, 0.45)' : 'rgba(255, 201, 40, 0.2)',
            }}
            className="flex items-center gap-4 sm:gap-6 py-2.5 px-6 mb-5 rounded-full border border-[#FFC928]/20 bg-[#06142F]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-bold font-tech text-[#FFD84A]">24.8%</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#EAF2FF]/60">Efficiency</span>
            </div>
            <div className="h-4 w-[1px] bg-[#FFC928]/25" />
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-bold font-tech text-white">25 YRS</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#EAF2FF]/60">Warranty</span>
            </div>
            <div className="h-4 w-[1px] bg-[#FFC928]/25" />
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-bold font-tech text-[#9BE51A]">~3.2 Y</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#EAF2FF]/60">Payback</span>
            </div>
          </motion.div>

          {/* Solar Brand CTA Button */}
          <button
            data-cursor-text="EXPLORE"
            onClick={(e) => {
              e.stopPropagation();
              handleExplore('solar');
            }}
            className="btn-solar relative z-30 inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.25em] cursor-pointer group"
          >
            <span>EXPLORE SOLAR</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-6 sm:right-8 bottom-12 vertical-rail text-[9px] tracking-[0.35em] opacity-50 text-[#FFD84A] uppercase pointer-events-none hidden sm:block font-tech">
          SUSTAINABLE SOVEREIGNTY
        </div>

        <div className="h-2" />
      </motion.section>

      {/* -------------------- CENTER ENERGY BRIDGE & INFINITY INTERACTION LINE -------------------- */}
      <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pointer-events-none z-30">
        {/* Glowing Energy Line */}
        <div className="w-[2px] h-48 bg-gradient-to-b from-[#00D9FF] via-[#FFD84A] to-[#9BE51A] opacity-70 shadow-[0_0_15px_rgba(0,217,255,0.6)]" />

        {/* Center Ecosystem Node */}
        <div className="my-2 p-2 rounded-full bg-[#06142F] border border-[#00D9FF]/40 shadow-[0_0_20px_rgba(255,201,40,0.4)] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#FFD84A] animate-ping" />
        </div>

        <div className="w-[2px] h-48 bg-gradient-to-b from-[#9BE51A] via-[#FFD84A] to-[#00D9FF] opacity-70 shadow-[0_0_15px_rgba(255,201,40,0.6)]" />
      </div>

      {/* -------------------- BOTTOM AMBIENT ECOSYSTEM BAR -------------------- */}
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full p-6 justify-between items-end pointer-events-none z-30 bg-gradient-to-t from-[#040D1F]/90 to-transparent">
        <div className="flex items-center gap-3 text-[9px] tracking-[0.25em] text-[#EAF2FF]/70 font-tech uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00D9FF]" />
          <span>SOLAR GENERATION</span>
          <span className="text-[#00D9FF]">&rarr;</span>
          <span className="w-2 h-2 rounded-full bg-[#FFD84A]" />
          <span>STORAGE</span>
          <span className="text-[#FFD84A]">&rarr;</span>
          <span className="w-2 h-2 rounded-full bg-[#9BE51A]" />
          <span>ELECTRIC MOBILITY</span>
        </div>
        <div className="flex gap-6 text-[9px] tracking-[0.25em] text-[#EAF2FF]/80 font-tech uppercase">
          <span className="text-[#FFD84A]">GLOW INFINITE</span>
          <span className="text-[#00D9FF]">SMART SOLUTIONS</span>
        </div>
      </div>
    </div>
  );
};
