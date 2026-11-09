import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VehicleVisual } from '../common/VehicleVisual';
import { ELECTRIC_MODELS } from '../../data/mockData';
import { ArrowRight, Zap, Shield, RotateCw, Gauge, Battery, Activity } from 'lucide-react';

interface ElectricHeroProps {
  onBookTestRide: (modelId?: string) => void;
  onExploreModels: () => void;
}

export const ElectricHero: React.FC<ElectricHeroProps> = ({
  onBookTestRide,
  onExploreModels,
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const currentModel = ELECTRIC_MODELS[0]; // VOLT X1 Flagship

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 bg-gradient-to-b from-[#070709] via-[#0b0c10] to-[#070709] overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-white/10 to-transparent blur-3xl opacity-40" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Header Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-tech text-white/80 uppercase tracking-[0.25em]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              GICSSOL ELECTRIC VEHICLES &bull; GEN 3 PLATFORM
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[0.92]">
              BUILT FOR THE<br />
              NEXT MOVE.
            </h1>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-base sm:text-lg text-white/70 font-light font-sans">
              Electric performance. Designed for everyday freedom. Zero tailpipe emissions meets razor-sharp aerodynamic precision.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreModels}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all duration-300 shadow-md"
                data-cursor-text="VIEW"
              >
                EXPLORE MODELS
              </button>
              <button
                onClick={() => onBookTestRide(currentModel.id)}
                className="px-6 py-3 rounded-full border border-white/20 hover:border-white text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-md"
                data-cursor-text="DRIVE"
              >
                BOOK A TEST RIDE
              </button>
            </div>
          </div>
        </div>

        {/* Centerpiece 3D Vehicle Stage */}
        <div className="relative my-8 lg:my-2 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <VehicleVisual
              modelId={currentModel.id}
              activeColorHex={currentModel.colors[selectedColorIdx].hex}
              showLightingEffects={true}
              className="py-4"
            />
          </motion.div>

          {/* Color Selector Pills */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md z-20 -mt-4">
            <span className="text-[10px] uppercase font-tech tracking-wider text-white/50 pr-2">
              FINISH:
            </span>
            {currentModel.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={() => setSelectedColorIdx(idx)}
                className={`w-6 h-6 rounded-full border transition-all duration-300 relative ${
                  selectedColorIdx === idx ? 'scale-125 border-white ring-2 ring-white/30' : 'border-white/20 opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                data-cursor-text={color.name}
              />
            ))}
            <span className="text-xs font-tech text-white/90 pl-1">
              {currentModel.colors[selectedColorIdx].name}
            </span>
          </div>
        </div>

        {/* Bottom Hero Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <Gauge className="w-3.5 h-3.5" />
              <span>CERTIFIED RANGE</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              145 <span className="text-sm font-normal text-white/60">KM</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">True IDC Range</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>TOP SPEED</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              95 <span className="text-sm font-normal text-white/60">KM/H</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">HyperBoost Active</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <Battery className="w-3.5 h-3.5" />
              <span>BATTERY PACK</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              4.8 <span className="text-sm font-normal text-white/60">KWH</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">Li-NMC 21700 Core</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-white/40 text-xs font-tech mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>RAPID CHARGE</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech">
              45 <span className="text-sm font-normal text-white/60">MINS</span>
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">0 to 80% Fast-Charge</div>
          </div>
        </div>
      </div>
    </section>
  );
};
