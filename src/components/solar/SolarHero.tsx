import React from 'react';
import { motion } from 'motion/react';
import { SolarVisual } from '../common/SolarVisual';
import { ArrowRight, Sun, Shield, Sparkles, BatteryCharging, Zap, Leaf } from 'lucide-react';

interface SolarHeroProps {
  onCalculate: () => void;
  onRequestQuote: () => void;
}

export const SolarHero: React.FC<SolarHeroProps> = ({
  onCalculate,
  onRequestQuote,
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 bg-gradient-to-b from-[#080a0f] via-[#0d1017] to-[#080a0f] overflow-hidden">
      {/* Background Solar Flare & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-amber-400/10 blur-[120px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: 'radial-gradient(rgba(251, 191, 36, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/[0.2] text-xs font-tech text-amber-200/90 uppercase tracking-[0.25em]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              GICSSOL CLEAN ENERGY &bull; SMART SOLAR
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[0.92]">
              POWER YOUR<br />
              FUTURE.
            </h1>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-base sm:text-lg text-white/70 font-light font-sans">
              Clean energy. Designed for a smarter tomorrow. Architectural all-black photovoltaic shingle tiles and industrial microgrids engineered for 30+ year grid independence.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onCalculate}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all duration-300 shadow-md flex items-center gap-2"
                data-cursor-text="CALCULATE"
              >
                <span>CALCULATE YOUR SOLAR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onRequestQuote}
                className="px-6 py-3 rounded-full border border-white/20 hover:border-white text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-md"
                data-cursor-text="QUOTE"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>

        {/* Centerpiece Solar Visual Stage */}
        <div className="relative my-8 lg:my-2 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="w-full max-w-4xl"
          >
            <SolarVisual
              showLightingEffects={true}
              variant="rooftop"
              className="py-4"
            />
          </motion.div>
        </div>

        {/* Bottom Hero Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>CELL EFFICIENCY</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              24.8% <span className="text-sm font-normal text-white/60">TOPCon</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">Bifacial Monocrystalline</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <Shield className="w-3.5 h-3.5 text-white/60" />
              <span>LINEAR WARRANTY</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              25 <span className="text-sm font-normal text-white/60">YEARS</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">90% Yield at Year 25</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
              <span>STORAGE INTEGRATION</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              10–100 <span className="text-sm font-normal text-white/60">KWH</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">PowerVault LiFePO4</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>EST. PAYBACK</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              ~3.2 <span className="text-sm font-normal text-white/60">YEARS</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">ROI Accelerated</div>
          </div>
        </div>
      </div>
    </section>
  );
};
