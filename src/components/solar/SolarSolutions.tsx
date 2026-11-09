import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SOLAR_SOLUTIONS } from '../../data/mockData';
import { SolarSolution } from '../../types';
import { Sun, Check, ArrowRight, Battery, Building2, Factory, Home } from 'lucide-react';

interface SolarSolutionsProps {
  onRequestQuoteForSolution: (solution: SolarSolution) => void;
}

export const SolarSolutions: React.FC<SolarSolutionsProps> = ({
  onRequestQuoteForSolution,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Storage'];

  const filteredSolutions = activeCategory === 'All'
    ? SOLAR_SOLUTIONS
    : SOLAR_SOLUTIONS.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Residential': return <Home className="w-4 h-4 text-[#FFD84A]" />;
      case 'Commercial': return <Building2 className="w-4 h-4 text-[#00D9FF]" />;
      case 'Industrial': return <Factory className="w-4 h-4 text-[#9BE51A]" />;
      case 'Storage': return <Battery className="w-4 h-4 text-[#FFC928]" />;
      default: return <Sun className="w-4 h-4 text-[#FFD84A]" />;
    }
  };

  return (
    <section id="solutions" className="py-24 px-6 md:px-12 bg-[#06142F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928]/15 border border-[#FFC928]/30 text-[10px] uppercase tracking-[0.3em] text-[#FFD84A] font-tech font-semibold">
              <Sun className="w-3 h-3 text-[#FFD84A]" />
              ENGINEERED RENEWABLES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-display">
              SOLAR & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD84A] to-[#FFC928] text-glow-gold">STORAGE SYSTEMS</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-tech uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#FFC928] text-[#06142F] font-bold shadow-md shadow-[#FFC928]/20'
                    : 'text-[#EAF2FF]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSolutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-gradient-to-b from-[#081D3F] to-[#06142F] border border-white/[0.08] hover:border-[#FFC928]/40 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
              data-cursor-sector="solar"
            >
              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928]/15 border border-[#FFC928]/30 text-xs font-tech text-[#FFD84A] font-semibold">
                    {getCategoryIcon(solution.category)}
                    <span>{solution.category.toUpperCase()} SYSTEM</span>
                  </div>

                  <span className="text-xs font-tech text-[#9BE51A] font-bold bg-[#9BE51A]/10 border border-[#9BE51A]/30 px-2.5 py-0.5 rounded-full">
                    {solution.efficiency} EFFICIENCY
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {solution.name}
                  </h3>
                  <p className="text-xs font-tech text-[#EAF2FF]/60 mt-1">
                    {solution.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#EAF2FF]/75 font-sans leading-relaxed">
                  {solution.description}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/[0.08] bg-[#040D1F]/60 rounded-xl p-3.5">
                  <div>
                    <span className="text-[10px] uppercase font-tech text-[#EAF2FF]/50 block">CAPACITY RANGE</span>
                    <span className="text-xs font-bold text-white font-tech">{solution.capacityRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-tech text-[#EAF2FF]/50 block">EST. PAYBACK</span>
                    <span className="text-xs font-bold text-[#FFD84A] font-tech">{solution.paybackEst}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] uppercase font-tech text-[#EAF2FF]/50 block">WARRANTY</span>
                    <span className="text-xs text-[#9BE51A] font-tech font-semibold">{solution.warranty}</span>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-2 pt-1">
                  {solution.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#EAF2FF]/85">
                      <Check className="w-3.5 h-3.5 text-[#FFD84A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-tech text-[#EAF2FF]/50 uppercase block">INDICATIVE VALUE</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-tech">{solution.startingPrice}</span>
                </div>

                <button
                  onClick={() => onRequestQuoteForSolution(solution)}
                  className="btn-solar inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                  data-cursor-sector="solar"
                  data-cursor-text="QUOTE"
                >
                  <span>REQUEST SURVEY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

