import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [sector, setSector] = useState<'electric' | 'solar' | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('[data-cursor-text], [data-cursor-hover], [data-cursor-sector], button, a, input, select');
        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor-text');
          const customSector = interactiveEl.getAttribute('data-cursor-sector') as 'electric' | 'solar' | null;
          setCursorText(customText || null);
          setSector(customSector);
        } else {
          setIsHovered(false);
          setCursorText(null);
          setSector(null);
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isElectric = sector === 'electric';
  const isSolar = sector === 'solar';

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full"
        style={{
          backgroundColor: isElectric ? '#00D9FF' : isSolar ? '#FFD84A' : '#FFFFFF',
          boxShadow: isElectric ? '0 0 10px #00D9FF' : isSolar ? '0 0 10px #FFC928' : 'none',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorText ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center backdrop-blur-[2px] transition-colors duration-200"
        animate={{
          x: cursorText 
            ? mousePosition.x - 42 
            : isHovered 
              ? mousePosition.x - 22 
              : mousePosition.x - 14,
          y: cursorText 
            ? mousePosition.y - 42 
            : isHovered 
              ? mousePosition.y - 22 
              : mousePosition.y - 14,
          width: cursorText ? 84 : isHovered ? 44 : 28,
          height: cursorText ? 84 : isHovered ? 44 : 28,
          backgroundColor: cursorText 
            ? isElectric ? 'rgba(0, 217, 255, 0.95)' : isSolar ? 'rgba(255, 201, 40, 0.95)' : 'rgba(234, 242, 255, 0.95)' 
            : isHovered 
              ? isElectric ? 'rgba(0, 102, 255, 0.25)' : isSolar ? 'rgba(255, 201, 40, 0.25)' : 'rgba(255, 255, 255, 0.15)'
              : 'rgba(6, 20, 47, 0.4)',
          borderColor: isElectric 
            ? '#00D9FF' 
            : isSolar 
              ? '#FFC928' 
              : isHovered ? 'rgba(234, 242, 255, 0.7)' : 'rgba(234, 242, 255, 0.25)',
          borderWidth: isHovered ? '1.5px' : '1px',
          boxShadow: isElectric 
            ? '0 0 20px rgba(0, 217, 255, 0.4)' 
            : isSolar 
              ? '0 0 20px rgba(255, 201, 40, 0.4)' 
              : 'none',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 220, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[9.5px] font-bold tracking-widest uppercase text-[#06142F] font-tech select-none px-2 text-center"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

