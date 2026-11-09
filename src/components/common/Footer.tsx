import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { ArrowUp, Zap, Sun, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      navigate(route || '/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      navigate(path);
      scrollToTop();
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#06142F] to-[#040D1F] border-t border-white/[0.08] text-white pt-16 pb-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Top Newsletter & Brand Statement Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 border-b border-white/[0.08]">
          <div className="lg:col-span-6 space-y-4">
            <BrandLogo size="lg" showTagline={true} />
            <p className="text-sm text-[#EAF2FF]/70 font-light font-sans max-w-md">
              A unified clean ecosystem engineered for sustainable human mobility, hyper-efficient velocity, and zero-carbon energy independence.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs uppercase font-tech tracking-[0.2em] text-[#00D9FF] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
              STAY INFORMED &bull; GICSSOL INTELLIGENCE BULLETINS
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#9BE51A] bg-[#9BE51A]/10 border border-[#9BE51A]/30 px-5 py-3 rounded-full font-tech">
                <CheckCircle className="w-4 h-4" />
                <span>Thank you. You are subscribed to GICSSOL Technology updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate or personal email"
                  required
                  className="flex-1 bg-white/[0.06] border border-white/15 rounded-full px-5 py-3 text-xs text-white placeholder-[#EAF2FF]/40 focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
                <button
                  type="submit"
                  className="btn-electric px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Electric Mobility */}
          <div className="space-y-4">
            <div className="text-xs uppercase font-tech tracking-[0.25em] text-[#00D9FF] flex items-center gap-1.5 font-bold">
              <Zap className="w-3.5 h-3.5 text-[#00D9FF]" />
              ELECTRIC MOBILITY
            </div>
            <ul className="space-y-2.5 text-xs text-[#EAF2FF]/70">
              <li>
                <button onClick={() => handleNav('/electric')} className="hover:text-[#00D9FF] transition-colors text-left">
                  Mobility Platform Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/electric#models')} className="hover:text-[#00D9FF] transition-colors text-left">
                  GICSSOL E1 &bull; Urban City
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/electric#models')} className="hover:text-[#00D9FF] transition-colors text-left">
                  GICSSOL X1 &bull; Apex Performance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/electric#models')} className="hover:text-[#00D9FF] transition-colors text-left">
                  GICSSOL GT &bull; Cyber Superbike
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/electric#test-drive')} className="hover:text-[#00D9FF] transition-colors text-left">
                  Book VIP Test Ride
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/electric#dealer')} className="hover:text-[#00D9FF] transition-colors text-left">
                  Franchise Dealership
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Solar Energy */}
          <div className="space-y-4">
            <div className="text-xs uppercase font-tech tracking-[0.25em] text-[#FFD84A] flex items-center gap-1.5 font-bold">
              <Sun className="w-3.5 h-3.5 text-[#FFC928]" />
              SOLAR & STORAGE
            </div>
            <ul className="space-y-2.5 text-xs text-[#EAF2FF]/70">
              <li>
                <button onClick={() => handleNav('/solar')} className="hover:text-[#FFD84A] transition-colors text-left">
                  Solar Architecture Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/solar#solutions')} className="hover:text-[#FFD84A] transition-colors text-left">
                  Residential Solar Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/solar#solutions')} className="hover:text-[#FFD84A] transition-colors text-left">
                  Commercial Microgrids
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/solar#solutions')} className="hover:text-[#FFD84A] transition-colors text-left">
                  GICSSOL PowerVault Storage
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/solar#calculator')} className="hover:text-[#FFD84A] transition-colors text-left">
                  Live Solar ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/solar#quote')} className="hover:text-[#FFD84A] transition-colors text-left">
                  Request Site Survey & Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Network */}
          <div className="space-y-4">
            <div className="text-xs uppercase font-tech tracking-[0.25em] text-[#9BE51A] font-bold">
              CORPORATION
            </div>
            <ul className="space-y-2.5 text-xs text-[#EAF2FF]/70">
              <li>
                <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors text-left">
                  Ecosystem Vision & Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors text-left">
                  Global Flagship Showrooms
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors text-left">
                  Investor Relations & ESG
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors text-left">
                  Career Opportunities
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Standards */}
          <div className="space-y-4">
            <div className="text-xs uppercase font-tech tracking-[0.25em] text-white/50 font-bold">
              COMPLIANCE & LEGAL
            </div>
            <ul className="space-y-2.5 text-xs text-[#EAF2FF]/70">
              <li className="hover:text-white cursor-pointer">Privacy Charter & GDPR</li>
              <li className="hover:text-white cursor-pointer">Warranty Disclosures</li>
              <li className="hover:text-white cursor-pointer">Battery Recycling Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
            </ul>

            {/* Back to Top */}
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#00D9FF] text-white text-xs font-tech uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF2FF]/40 font-tech">
          <p>&copy; 2026 GICSSOL (Glow Infinite Smart Solutions). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#instagram" className="hover:text-[#00D9FF] transition-colors">INSTAGRAM</a>
            <a href="#linkedin" className="hover:text-[#00D9FF] transition-colors">LINKEDIN</a>
            <a href="#youtube" className="hover:text-[#FFD84A] transition-colors">YOUTUBE</a>
            <a href="#x" className="hover:text-[#9BE51A] transition-colors">X / TWITTER</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

