'use client';

import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@/context/NavigationContext';

/**
 * ScrollProgress — Ultra-lightweight scroll progress bar.
 * OPTIMIZED: Uses direct DOM manipulation instead of useState + re-renders.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const { screen } = useNavigation();

  useEffect(() => {
    if (screen !== 'architect' && screen !== 'storyteller') return;

    const bar = barRef.current;
    if (!bar) return;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        bar.style.width = '0%';
      } else {
        const progress = Math.min((scrollY / docHeight) * 100, 100);
        bar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, [screen]);

  if (screen !== 'architect' && screen !== 'storyteller') return null;

  const bg = screen === 'architect' 
    ? 'linear-gradient(to right, rgba(0,255,148,0.6), rgba(0,255,148,0.3))'
    : 'linear-gradient(to right, rgba(201,168,76,0.6), rgba(201,168,76,0.3))';

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '1px',
        width: '0%',
        background: bg,
        zIndex: 999,
        pointerEvents: 'none',
        willChange: 'width',
      }}
    />
  );
}
