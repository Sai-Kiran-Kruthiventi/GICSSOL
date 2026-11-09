import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { X, ArrowUpRight, Zap, Sun, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { num: '01', title: 'ELECTRIC MOBILITY', sub: 'Smart Scooters, GT & Hyper Velocity', path: '/electric', sector: 'electric' },
    { num: '02', title: 'SOLAR ENERGY', sub: 'Architectural Photovoltaics & PowerVault', path: '/solar', sector: 'solar' },
    { num: '03', title: 'ELECTRIC MODELS', sub: 'Explore GICSSOL E1, X1 & GT', path: '/electric#models', sector: 'electric' },
    { num: '04', title: 'SOLAR CALCULATOR', sub: 'Simulate Rooftop ROI & Solar Autonomy', path: '/solar#calculator', sector: 'solar' },
    { num: '05', title: 'BOOK A TEST RIDE', sub: 'Experience Instant Electric Torque', path: '/electric#test-drive', sector: 'electric' },
    { num: '06', title: 'DEALERSHIP INQUIRY', sub: 'Partner with GICSSOL EV Network', path: '/electric#dealer', sector: 'electric' },
    { num: '07', title: 'GET SOLAR QUOTE', sub: 'Bespoke Clean Energy Engineering', path: '/solar#quote', sector: 'solar' },
    { num: '08', title: 'ABOUT GICSSOL', sub: 'Glow Infinite Smart Solutions Vision', path: '/about', sector: 'brand' },
    { num: '09', title: 'CONTACT & HUBS', sub: 'Experience Centers & 24/7 Concierge', path: '/contact', sector: 'brand' },
  ];

  const handleNavigate = (path: string) => {
    onClose();
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      navigate(route || '/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      navigate(path);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#06142F]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar inside Menu */}
          <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-5 flex items-center justify-between border-b border-white/[0.08]">
            <BrandLogo size="md" showTagline={true} />

            <button
              onClick={onClose}
              data-cursor-text="CLOSE"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#00D9FF] text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer group"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Center Navigation Content */}
          <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Main Links */}
            <div className="lg:col-span-8 space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#00D9FF] font-tech mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                NAVIGATION DIRECTORY
              </div>

              {menuItems.map((item, idx) => {
                const isElectric = item.sector === 'electric';
                const isSolar = item.sector === 'solar';

                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.35 }}
                  >
                    <button
                      onClick={() => handleNavigate(item.path)}
                      data-cursor-sector={isElectric ? 'electric' : isSolar ? 'solar' : undefined}
                      data-cursor-text="VISIT"
                      className="group w-full text-left flex items-baseline justify-between py-2.5 border-b border-white/[0.06] hover:border-white/25 transition-all"
                    >
                      <div className="flex items-baseline gap-4 md:gap-8">
                        <span className={`text-xs font-tech transition-colors ${
                          isElectric 
                            ? 'text-[#00D9FF]/50 group-hover:text-[#00D9FF]' 
                            : isSolar 
                              ? 'text-[#FFD84A]/50 group-hover:text-[#FFD84A]' 
                              : 'text-white/40 group-hover:text-white'
                        }`}>
                          {item.num}
                        </span>
                        <div>
                          <span className={`text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#EAF2FF] inline-block transition-transform duration-300 group-hover:translate-x-2 font-display ${
                            isElectric 
                              ? 'group-hover:text-[#00D9FF] group-hover:text-glow-cyan' 
                              : isSolar 
                                ? 'group-hover:text-[#FFD84A] group-hover:text-glow-gold' 
                                : 'group-hover:text-white'
                          }`}>
                            {item.title}
                          </span>
                          <span className="block text-xs text-[#EAF2FF]/50 group-hover:text-[#EAF2FF]/80 font-sans tracking-normal mt-0.5">
                            {item.sub}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                        isElectric 
                          ? 'text-[#00D9FF]/40 group-hover:text-[#00D9FF] group-hover:translate-x-1 group-hover:-translate-y-1' 
                          : isSolar 
                            ? 'text-[#FFD84A]/40 group-hover:text-[#FFD84A] group-hover:translate-x-1 group-hover:-translate-y-1' 
                            : 'text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1'
                      }`} />
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Information Panel */}
            <div className="lg:col-span-4 space-y-6 lg:pl-8 lg:border-l border-white/[0.08]">
              {/* Dual Ecosystem Card */}
              <div className="p-6 rounded-2xl bg-[#081D3F]/60 border border-white/[0.08] space-y-4 shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0066FF]/20 text-[#00D9FF] border border-[#00D9FF]/30">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded-lg bg-[#FFC928]/20 text-[#FFD84A] border border-[#FFC928]/30">
                    <Sun className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  Closed-Loop Renewable Ecosystem
                </h4>
                <p className="text-xs leading-relaxed text-[#EAF2FF]/70">
                  Solar rooftops capture clean solar photons. GICSSOL PowerVault buffers zero-loss energy. GICSSOL Electric Mobility drives 100% emission-free.
                </p>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#00D9FF] font-tech font-semibold">
                  CONCIERGE & SUPPORT
                </div>
                <div className="space-y-2.5 text-xs text-[#EAF2FF]/80">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#00D9FF]" />
                    <span>+1 (800) 442-7765 &bull; 1800-GICSSOL</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-[#FFD84A]" />
                    <span>concierge@gicssol.com</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9BE51A]" />
                    <span>Silicon Valley &bull; Munich &bull; Bengaluru &bull; Tokyo</span>
                  </div>
                </div>
              </div>

              {/* Global Network Availability */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#9BE51A]/10 border border-[#9BE51A]/30 text-[#9BE51A] text-[11px] font-tech font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#9BE51A] animate-ping" />
                  Showrooms & Fast-Charging Network Active
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar inside Menu */}
          <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAF2FF]/50 gap-4">
            <p>&copy; 2026 GICSSOL (Glow Infinite Smart Solutions). All rights reserved.</p>
            <div className="flex items-center gap-6 font-tech text-[10px] tracking-wider uppercase">
              <span className="text-[#00D9FF]">ELECTRIC MOBILITY</span>
              <span className="text-white/30">&bull;</span>
              <span className="text-[#FFD84A]">SOLAR ENERGY</span>
              <span className="text-white/30">&bull;</span>
              <span className="text-[#9BE51A]">SUSTAINABILITY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

