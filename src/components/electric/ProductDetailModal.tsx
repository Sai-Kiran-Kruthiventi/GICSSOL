import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ElectricModel } from '../../types';
import { VehicleVisual } from '../common/VehicleVisual';
import { X, Check, ArrowRight, Zap, Shield, Battery, Gauge, Activity, Sparkles, Cpu, Disc } from 'lucide-react';

interface ProductDetailModalProps {
  model: ElectricModel | null;
  onClose: () => void;
  onBookTestRide: (modelId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  model,
  onClose,
  onBookTestRide,
}) => {
  if (!model) return null;

  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'technology'>('overview');

  const activeColor = model.colors[activeColorIdx] || model.colors[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e13] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-10 text-white space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            data-cursor-text="CLOSE"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Header */}
          <div className="space-y-2 pr-12">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-tech uppercase tracking-widest text-white/80">
                {model.category}
              </span>
              <span className="text-xs font-tech text-white/50">{model.heroBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
              {model.name}
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light font-sans max-w-2xl">
              {model.description}
            </p>
          </div>

          {/* Center Stage Vehicle Presentation */}
          <div className="relative rounded-2xl bg-black/50 border border-white/[0.06] p-6 flex flex-col items-center justify-center min-h-[320px]">
            <VehicleVisual
              modelId={model.id}
              activeColorHex={activeColor.hex}
              showLightingEffects={true}
              className="max-h-[320px]"
            />

            {/* Interactive Color Switcher */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 mt-4">
              <span className="text-[10px] uppercase font-tech tracking-wider text-white/50">
                COLORWAY:
              </span>
              {model.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={() => setActiveColorIdx(idx)}
                  className={`w-6 h-6 rounded-full border transition-all duration-200 ${
                    activeColorIdx === idx ? 'scale-125 border-white ring-2 ring-white/40' : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              <span className="text-xs font-tech text-white font-medium pl-1">
                {activeColor.name}
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 gap-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-xs uppercase tracking-widest font-bold transition-colors relative ${
                activeTab === 'overview' ? 'text-white' : 'text-white/40 hover:text-white/80'
              }`}
            >
              Key Metrics
              {activeTab === 'overview' && (
                <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-xs uppercase tracking-widest font-bold transition-colors relative ${
                activeTab === 'specs' ? 'text-white' : 'text-white/40 hover:text-white/80'
              }`}
            >
              Full Engineering Specs
              {activeTab === 'specs' && (
                <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('technology')}
              className={`pb-3 text-xs uppercase tracking-widest font-bold transition-colors relative ${
                activeTab === 'technology' ? 'text-white' : 'text-white/40 hover:text-white/80'
              }`}
            >
              Smart Ecosystem & Safety
              {activeTab === 'technology' && (
                <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {model.specs.map((spec) => (
                <div key={spec.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-[10px] uppercase font-tech text-white/40 mb-1">{spec.label}</div>
                  <div className="text-xl sm:text-2xl font-extrabold font-tech text-white">{spec.value}</div>
                  {spec.sub && <div className="text-xs text-white/50 mt-0.5">{spec.sub}</div>}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <span className="font-bold uppercase tracking-wider text-white/50 text-[10px] font-tech">POWERTRAIN & BATTERY</span>
                  <p className="text-white/90">Motor Peak Power: <span className="text-white font-bold">{model.motorPeakPowerKw} kW Mid-Drive</span></p>
                  <p className="text-white/90">Battery Chemistry: <span className="text-white font-bold">Li-NMC 21700 Smart Thermal Core</span></p>
                  <p className="text-white/90">Charging Rate: <span className="text-white font-bold">0–80% in {model.chargingTimeHours * 12} mins Fast-Charge</span></p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <span className="font-bold uppercase tracking-wider text-white/50 text-[10px] font-tech">CHASSIS & BRAKING</span>
                  <p className="text-white/90">Total Kerb Weight: <span className="text-white font-bold">{model.weightKg} KG</span></p>
                  <p className="text-white/90">Frame: <span className="text-white font-bold">Aerospace 6061-T6 Tubular Aluminum</span></p>
                  <p className="text-white/90">Brakes: <span className="text-white font-bold">Dual Hydraulic Disc with Electronic ABS</span></p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technology' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {model.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-white/90 font-sans leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Action Drawer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-tech text-white/50 uppercase">STARTING PRICE</div>
              <div className="text-2xl font-bold font-tech text-white">{model.price}</div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-white/20 hover:border-white text-xs font-bold uppercase tracking-wider text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookTestRide(model.id);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg"
                data-cursor-text="RIDE"
              >
                <span>BOOK TEST RIDE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
