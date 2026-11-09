import React from 'react';
import { motion } from 'motion/react';
import { BRAND_NAME, BRAND_STATS } from '../../data/mockData';
import { Zap, Sun, ShieldCheck, Cpu, Globe2, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 md:px-12 bg-[#070709] min-h-screen text-white space-y-24">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-tech uppercase tracking-[0.25em] text-white/70">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          THE UNIFIED ECOSYSTEM
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase font-display leading-[0.95] max-w-4xl">
          POWERED BY THE SUN.<br />
          PROPELLED BY FREEDOM.
        </h1>
        <p className="text-lg sm:text-xl text-white/70 font-light font-sans max-w-3xl leading-relaxed">
          {BRAND_NAME} was founded on a singular engineering truth: electric mobility is only truly zero-emission when the electricity powering it comes from clean, sovereign rooftop energy.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/[0.08]">
        {BRAND_STATS.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-tech">{stat.value}</div>
            <div className="text-xs font-bold uppercase text-white/80">{stat.label}</div>
            <div className="text-[11px] text-white/40">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Dual Sector Symphony Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0f15] border border-white/10 space-y-6">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display uppercase">
            Mobility Engineering
          </h2>
          <p className="text-sm text-white/70 font-sans leading-relaxed">
            Our electric scooters and superbikes are built with Formula-E derived Silicon Carbide inverters, aviation-grade 6061-T6 aluminum unibodies, and 5G telematics that optimize battery health with machine-learned thermal regulation.
          </p>
          <Link
            to="/electric"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors"
          >
            <span>Explore Electric Mobility</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0e1018] border border-amber-400/20 space-y-6">
          <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 w-fit">
            <Sun className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display uppercase">
            Solar & Storage Grid
          </h2>
          <p className="text-sm text-white/70 font-sans leading-relaxed">
            Our architectural N-TOPCon photovoltaic roof systems and modular liquid-cooled LiFePO4 PowerVault storage units ensure 100% self-sustained clean energy generation for villas, commercial towers, and industrial plants.
          </p>
          <Link
            to="/solar"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-amber-400 transition-colors"
          >
            <span>Explore Solar Energy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Engineering Principles */}
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3">
          <div className="text-xs uppercase font-tech tracking-[0.3em] text-white/50">
            OUR CORE PILLARS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-display">
            DESIGNED WITHOUT COMPROMISE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="text-xs font-tech text-white/40">01 / MINIMAL LUXURY</div>
            <h3 className="text-xl font-bold text-white font-display">Monochrome Aesthetics</h3>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              Stripping away unnecessary visual noise. Every line, fillet, and surface texture serves aerodynamic efficiency and tactile elegance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="text-xs font-tech text-white/40">02 / UNIFIED POWER</div>
            <h3 className="text-xl font-bold text-white font-display">Direct Solar-to-Wheel</h3>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              Our bidirectional EV chargers allow your Volt scooter to act as a mobile home battery during grid emergencies, creating a truly circular energy node.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="text-xs font-tech text-white/40">03 / LIFECYCLE COMMITMENT</div>
            <h3 className="text-xl font-bold text-white font-display">25-Year Reliability</h3>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              We design systems to endure decades of tropical heat, monsoons, and extreme freezing cycles with guaranteed power outputs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
