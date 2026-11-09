import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ELECTRIC_MODELS } from '../../data/mockData';
import { ElectricModel } from '../../types';
import { VehicleVisual } from '../common/VehicleVisual';
import { ArrowRight, Zap, Gauge, Battery, Activity } from 'lucide-react';

interface ProductShowcaseProps {
  onSelectModel: (model: ElectricModel) => void;
  onBookTestRide: (modelId: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectModel,
  onBookTestRide,
}) => {
  const [selectedColorMap, setSelectedColorMap] = useState<Record<string, number>>({
    'gicssol-e1': 0,
    'gicssol-x1': 0,
    'gicssol-gt': 0,
  });

  const handleColorChange = (modelId: string, colorIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColorMap((prev) => ({ ...prev, [modelId]: colorIdx }));
  };

  return (
    <section id="models" className="py-24 px-6 md:px-12 bg-[#06142F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#00D9FF]/30 text-[10px] uppercase tracking-[0.3em] text-[#00D9FF] font-tech font-semibold">
              <Zap className="w-3 h-3 text-[#00D9FF]" />
              ENGINEERED VELOCITY
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-display">
              ELECTRIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0066FF] text-glow-cyan">MODELS</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#EAF2FF]/70 font-sans">
            Every GICSSOL electric vehicle is engineered with aerospace alloy frames, hyper-dense lithium battery architectures, dynamic regenerative braking, and 5G AI telemetry.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ELECTRIC_MODELS.map((model, idx) => {
            const activeColorIdx = selectedColorMap[model.id] || 0;
            const activeColor = model.colors[activeColorIdx] || model.colors[0];

            return (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-gradient-to-b from-[#081D3F] to-[#06142F] border border-white/[0.08] hover:border-[#00D9FF]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                data-cursor-sector="electric"
                data-cursor-text="EXPLORE"
                onClick={() => onSelectModel(model)}
              >
                {/* Top Badge & Category */}
                <div className="p-6 sm:p-7 flex items-center justify-between z-10">
                  <div className="space-y-1">
                    <span className="text-[11px] font-tech uppercase tracking-[0.2em] text-[#00D9FF]">
                      {model.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-display">
                      {model.name}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#00D9FF]/30 text-[10px] font-tech text-[#00D9FF] uppercase tracking-widest font-semibold">
                    {model.badge}
                  </span>
                </div>

                {/* Center Visual Presentation */}
                <div className="relative py-4 px-6 flex items-center justify-center min-h-[220px]">
                  <div className="w-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    <VehicleVisual
                      modelId={model.id}
                      activeColorHex={activeColor.hex}
                      showLightingEffects={false}
                    />
                  </div>
                </div>

                {/* Color Selector Pills */}
                <div className="px-6 pb-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    {model.colors.map((color, cIdx) => (
                      <button
                        key={color.name}
                        onClick={(e) => handleColorChange(model.id, cIdx, e)}
                        className={`w-5 h-5 rounded-full border transition-all duration-200 cursor-pointer ${
                          activeColorIdx === cIdx ? 'scale-125 border-[#00D9FF] ring-2 ring-[#00D9FF]/40' : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                    <span className="text-[10px] font-tech text-[#EAF2FF]/60 ml-1.5">
                      {activeColor.name}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-tech text-[#EAF2FF]/50 block uppercase">STARTING FROM</span>
                    <span className="text-sm font-bold text-white font-tech">{model.price}</span>
                  </div>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-4 border-t border-b border-white/[0.08] bg-[#040D1F]/60 py-3 px-6 text-center">
                  <div>
                    <div className="text-[9px] text-[#EAF2FF]/50 uppercase font-tech">RANGE</div>
                    <div className="text-xs font-bold text-[#00D9FF] font-tech">{model.rangeKm} KM</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[#EAF2FF]/50 uppercase font-tech">SPEED</div>
                    <div className="text-xs font-bold text-white font-tech">{model.topSpeedKmh} KM/H</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[#EAF2FF]/50 uppercase font-tech">BATTERY</div>
                    <div className="text-xs font-bold text-[#00D9FF] font-tech">{model.batteryKwh} KWH</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[#EAF2FF]/50 uppercase font-tech">0–50 KM/H</div>
                    <div className="text-xs font-bold text-white font-tech">{model.acceleration0to50}s</div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-5 flex items-center justify-between gap-3 bg-[#06142F]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectModel(model);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#EAF2FF]/80 hover:text-[#00D9FF] transition-colors cursor-pointer"
                  >
                    <span>SPECS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookTestRide(model.id);
                    }}
                    className="btn-electric px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                    data-cursor-text="RIDE"
                  >
                    TEST RIDE
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

