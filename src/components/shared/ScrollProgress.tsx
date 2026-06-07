'use client';

import React, { useEffect, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { screen } = useNavigation();

  useEffect(() => {
    if (screen !== 'architect' && screen !== 'storyteller') return;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
      } else {
        const currentProgress = Math.min((scrollY / docHeight) * 100, 100);
        setProgress(currentProgress);
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '1px',
        width: `${progress}%`,
        background: bg,
        zIndex: 999,
        pointerEvents: 'none',
        transition: 'width 0.1s linear'
      }}
    />
  );
}
