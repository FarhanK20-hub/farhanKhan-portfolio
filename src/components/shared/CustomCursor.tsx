'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const { hoverText } = useNavigation();
  
  const mousePos = useRef({ x: 0, y: 0 });
  
  // Physics states
  const mainPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (textRef.current) {
        textRef.current.style.left = `${e.clientX}px`;
        textRef.current.style.top = `${e.clientY}px`;
      }
    };

    let initialized = false;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = Math.min(1, (time - lastTime) / 16); // Normalize to ~60fps
      lastTime = time;

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      if (!initialized && (mx !== 0 || my !== 0)) {
        mainPos.current = { x: mx, y: my };
        trailPos.current = { x: mx, y: my };
        vel.current = { x: mx, y: my };
        initialized = true;
      }
      
      // Main blob follows mouse closely with a slight spring
      mainPos.current.x += (mx - mainPos.current.x) * 0.4 * dt;
      mainPos.current.y += (my - mainPos.current.y) * 0.4 * dt;

      // Calculate velocity for stretching
      const dx = mainPos.current.x - vel.current.x;
      const dy = mainPos.current.y - vel.current.y;
      vel.current.x = mainPos.current.x;
      vel.current.y = mainPos.current.y;

      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      
      // Dynamic stretch factor based on speed
      const stretch = Math.min(speed * 0.04, 1.2); 
      const scaleX = 1 + stretch;
      const scaleY = 1 - stretch * 0.4; // Squeeze width to maintain volume

      if (mainRef.current) {
        mainRef.current.style.transform = `translate(-50%, -50%) translate(${mainPos.current.x}px, ${mainPos.current.y}px) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
      }

      // Trail blob follows main blob with lag, creating the "split/merge" gooey effect
      trailPos.current.x += (mainPos.current.x - trailPos.current.x) * 0.15 * dt;
      trailPos.current.y += (mainPos.current.y - trailPos.current.y) * 0.15 * dt;

      if (trailRef.current) {
        const tScale = 1 - Math.min(speed * 0.01, 0.4); // Shrink slightly when moving fast
        trailRef.current.style.transform = `translate(-50%, -50%) translate(${trailPos.current.x}px, ${trailPos.current.y}px) scale(${tScale})`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <svg style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div id="cursor-goo-container">
        <div id="blob-trail" ref={trailRef}></div>
        <div id="blob-main" ref={mainRef}></div>
      </div>
      <div id="cursor-text" ref={textRef}>{hoverText}</div>
    </>
  );
}
