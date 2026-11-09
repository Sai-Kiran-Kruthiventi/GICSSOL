import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { Zap, Sun } from 'lucide-react';

interface NavbarProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, isMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isElectric = location.pathname.startsWith('/electric');
  const isSolar = location.pathname.startsWith('/solar');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? 'bg-[#06142F]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-gradient-to-b from-[#040D1F]/90 via-[#06142F]/40 to-transparent py-5 lg:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between relative">
        {/* Left Sector Links */}
        <div className="flex items-center gap-5 sm:gap-8 text-[10px] sm:text-[11px] tracking-[0.25em] font-semibold uppercase font-tech">
          <Link
            to="/electric"
            data-cursor-sector="electric"
            data-cursor-text="EV"
            className={`inline-flex items-center gap-1.5 transition-all duration-200 ${
              isElectric 
                ? 'text-[#00D9FF] font-bold text-glow-cyan' 
                : 'text-[#EAF2FF]/70 hover:text-[#00D9FF]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>ELECTRIC</span>
          </Link>

          <Link
            to="/solar"
            data-cursor-sector="solar"
            data-cursor-text="SOLAR"
            className={`inline-flex items-center gap-1.5 transition-all duration-200 ${
              isSolar 
                ? 'text-[#FFD84A] font-bold text-glow-gold' 
                : 'text-[#EAF2FF]/70 hover:text-[#FFD84A]'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-[#FFC928]" />
            <span>SOLAR</span>
          </Link>
        </div>

        {/* Center Brand: Authentic GICSSOL Logo */}
        <Link
          to="/"
          data-cursor-text="HOME"
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center select-none transition-opacity hover:opacity-90 group"
        >
          <BrandLogo size="md" showTagline={true} />
        </Link>

        {/* Right Side: Quick Action & Menu Button */}
        <div className="flex items-center gap-4 sm:gap-7 text-[10px] sm:text-[11px] tracking-[0.25em] font-medium uppercase font-tech">
          <Link
            to="/about"
            className="hidden md:inline transition-colors text-[#EAF2FF]/70 hover:text-white"
          >
            ABOUT
          </Link>

          <Link
            to="/contact"
            className="hidden sm:inline transition-colors text-[#EAF2FF]/70 hover:text-white"
          >
            CONTACT
          </Link>

          {/* Minimalist Tech Menu Trigger */}
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-[#00D9FF]/50 text-[#EAF2FF] hover:text-white tracking-[0.25em] transition-all cursor-pointer group"
            aria-label="Toggle Fullscreen Menu"
            data-cursor-text="MENU"
          >
            <span className="hidden sm:inline text-[10px] font-bold">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className="w-3.5 h-3.5 flex flex-col justify-center gap-1">
              <span className={`h-[1.5px] bg-[#00D9FF] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[2.5px] bg-white' : 'w-3.5'}`} />
              <span className={`h-[1.5px] bg-[#FFD84A] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[2.5px] bg-white' : 'w-2 ml-auto group-hover:w-3.5'}`} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};


