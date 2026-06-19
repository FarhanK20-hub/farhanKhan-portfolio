'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import gsap from 'gsap';

/**
 * Cinematic Cursor — Dot + Ring system
 * 
 * States:
 * DEFAULT:  8px gold dot, 32px outer ring (low opacity, lagged)
 * HOVER:    Dot shrinks. Ring expands to 56px, fills with color at 15%
 * LINK:     Ring morphs to pill, "VIEW" text fades in
 * CAMERA:   Ring becomes camera reticle (handled via CSS class)
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { cursorState, hoverText, screen } = useNavigation();

  // GSAP quickTo refs for smooth interpolation
  const dotX = useRef<gsap.QuickToFunc | null>(null);
  const dotY = useRef<gsap.QuickToFunc | null>(null);
  const ringX = useRef<gsap.QuickToFunc | null>(null);
  const ringY = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    // Render on client only
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Initialize GSAP quickTo for buttery smooth cursor tracking
    // Dot follows mouse tightly (0.35 duration = snappy)
    dotX.current = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power2.out' });
    dotY.current = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power2.out' });

    // Ring follows with more lag (0.45 duration = cinematic delay)
    ringX.current = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    ringY.current = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    // Set initial position immediately to avoid top-left corner flash
    // We assume center of screen initially, or just rely on first mouse move
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      dotX.current?.(e.clientX);
      dotY.current?.(e.clientY);
      ringX.current?.(e.clientX);
      ringY.current?.(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isVisible]);

  // Animate cursor state transitions
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    if (!dot || !ring || !text) return;

    switch (cursorState) {
      case 'default':
        gsap.to(dot, { width: 8, height: 8, opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(ring, { width: 32, height: 32, borderWidth: 1, borderRadius: '50%', opacity: 0.4, duration: 0.4, ease: 'power2.out' });
        gsap.to(text, { opacity: 0, duration: 0.15 });
        break;

      case 'hover':
        gsap.to(dot, { width: 4, height: 4, opacity: 0.6, duration: 0.3, ease: 'power2.out' });
        gsap.to(ring, { width: 56, height: 56, borderWidth: 2, borderRadius: '50%', opacity: 0.7, duration: 0.4, ease: 'back.out(1.4)' });
        gsap.to(text, { opacity: 0, duration: 0.15 });
        break;

      case 'link':
        gsap.to(dot, { width: 0, height: 0, opacity: 0, duration: 0.2, ease: 'power2.out' });
        gsap.to(ring, { width: 80, height: 36, borderWidth: 1.5, borderRadius: '18px', opacity: 0.85, duration: 0.4, ease: 'back.out(1.2)' });
        gsap.to(text, { opacity: 1, duration: 0.3, delay: 0.1 });
        break;

      case 'camera':
        gsap.to(dot, { width: 2, height: 2, opacity: 0.8, duration: 0.3 });
        gsap.to(ring, { width: 48, height: 48, borderWidth: 1, borderRadius: '50%', opacity: 0.6, duration: 0.4, ease: 'power2.out' });
        gsap.to(text, { opacity: 0, duration: 0.15 });
        break;
    }
  }, [cursorState]);

  if (!isVisible) return null;

  // Determine color theme based on current screen
  const isStory = screen === 'storyteller' || screen === 'story-intro';
  const themeColor = isStory ? '#C9A84C' : '#00FF94';

  return (
    <>
      {/* Dot — follows mouse tightly */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          background: themeColor,
        }}
      />

      {/* Ring — follows with cinematic lag */}
      <div
        ref={ringRef}
        className={`cursor-ring ${cursorState === 'camera' ? 'cursor-ring-camera' : ''}`}
        style={{
          borderColor: themeColor,
          backgroundColor: cursorState === 'hover' ? `${themeColor}15` : 'transparent',
        }}
      />

      {/* Text label — visible only in 'link' state */}
      <div
        ref={textRef}
        className="cursor-text"
        style={{ color: themeColor }}
      >
        {hoverText || 'VIEW'}
      </div>
    </>
  );
}
