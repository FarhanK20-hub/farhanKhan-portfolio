'use client';

import React, { useEffect, createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = React.useState<Lenis | null>(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const newLenis = new Lenis({
      lerp: 0.12,
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    setTimeout(() => setLenis(newLenis), 0);

    // Connect Lenis to GSAP ticker for perfect sync
    gsap.ticker.add((time) => {
      newLenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      newLenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
