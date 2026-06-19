'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import gsap from 'gsap';

const lines = [
  { text: "Some people make content.", size: '22px', weight: 300 },
  { text: "Some tell stories.", size: '26px', weight: 300 },
  { text: "Some make people feel something.", size: '30px', weight: 300 },
];

export default function StoryIntro() {
  const { navigate } = useNavigation();
  const containerRef = useRef<HTMLDivElement>(null);
  const leaderRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  // Show skip only on first mouse movement
  useEffect(() => {
    const onMove = () => setHasMouseMoved(true);
    window.addEventListener('mousemove', onMove, { once: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // ESC to skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') skipIntro();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const skipIntro = () => {
    if (tlRef.current) tlRef.current.kill();
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => navigate('storyteller'),
    });
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;

    // T+0ms: Void black. Silence.
    tl.set(containerRef.current, { opacity: 1 });

    // T+600ms: Film leader line expands from center
    tl.fromTo(leaderRef.current,
      { scaleX: 0, opacity: 1 },
      { scaleX: 1, opacity: 1, duration: 0.4, ease: 'power2.inOut' },
      0.6
    );

    // T+900ms: Leader fades
    tl.to(leaderRef.current, { opacity: 0, duration: 0.2 }, 0.9);

    // Type each line with character-by-character reveal
    let currentTime = 1.1;

    lines.forEach((line, lineIdx) => {
      const lineEl = linesRef.current[lineIdx];
      if (!lineEl) return;

      // Set up: make line visible
      tl.set(lineEl, { opacity: 1 }, currentTime);

      // Animate each character
      const chars = line.text.split('');
      chars.forEach((_, charIdx) => {
        const charDelay = currentTime + charIdx * 0.03 + (Math.random() * 0.01 - 0.005);
        tl.fromTo(
          lineEl.children[charIdx] as HTMLElement,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.15, ease: 'power2.out' },
          charDelay
        );
      });

      // Calculate when typing finishes
      const typeEndTime = currentTime + chars.length * 0.03 + 0.15;

      // Hold, then fade out
      if (lineIdx < lines.length - 1) {
        tl.to(lineEl, { opacity: 0, duration: 0.3 }, typeEndTime + 0.8);
        currentTime = typeEndTime + 1.5; // Gap between lines
      } else {
        // Last line — longer hold
        tl.to(lineEl, { opacity: 0, duration: 0.5 }, typeEndTime + 1.5);
        currentTime = typeEndTime + 2.2;
      }
    });

    // Welcome — fade in softly (NOT typed)
    tl.fromTo(welcomeRef.current,
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
      currentTime + 0.5
    );

    // Hold welcome for 2s, then fade everything
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in',
      onComplete: () => navigate('storyteller'),
    }, currentTime + 3.5);

    return () => {
      tl.kill();
    };
  }, [navigate]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      onClick={skipIntro}
    >
      {/* Film leader line */}
      <div
        ref={leaderRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #fff, transparent)',
          opacity: 0,
          transformOrigin: 'center',
        }}
      />

      {/* Typed lines container */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '600px', padding: '40px', textAlign: 'center' }}>
        {lines.map((line, idx) => (
          <div
            key={idx}
            ref={(el) => { linesRef.current[idx] = el; }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-cormorant)',
              fontSize: line.size,
              fontWeight: line.weight,
              fontStyle: 'italic',
              color: '#F5F0E8',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              opacity: 0,
            }}
          >
            {line.text.split('').map((char, charIdx) => (
              <span
                key={charIdx}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  minWidth: char === ' ' ? '0.3em' : undefined,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Welcome */}
      <div
        ref={welcomeRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(48px, 6vw, 72px)',
          fontWeight: 300,
          color: '#F5F0E8',
          letterSpacing: '0.3em',
          opacity: 0,
          textAlign: 'center',
        }}
      >
        Welcome.
      </div>

      {/* Skip — only appears on first mouse move */}
      {hasMouseMoved && (
        <button
          ref={skipRef}
          onClick={(e) => { e.stopPropagation(); skipIntro(); }}
          style={{
            position: 'absolute',
            top: '32px',
            right: '40px',
            color: '#F5F0E8',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '9px',
            letterSpacing: '0.2em',
            zIndex: 110,
            opacity: 0.3,
            transition: 'opacity 0.3s',
            cursor: 'none',
            background: 'none',
            border: 'none',
            outline: 'none',
            textTransform: 'uppercase',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '0.3')}
        >
          SKIP →
        </button>
      )}
    </div>
  );
}
