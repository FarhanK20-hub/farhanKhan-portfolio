'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import gsap from 'gsap';
import { playStartupSound } from '@/lib/sound';

const lines = [
  "SOME PEOPLE MAKE CONTENT.",
  "SOME TELL STORIES.",
  "SOME MAKE YOU FEEL."
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

  const skipIntro = React.useCallback(() => {
    if (tlRef.current) tlRef.current.kill();
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => navigate('storyteller'),
    });
  }, [navigate]);

  // ESC to skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') skipIntro();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [skipIntro]);

  useEffect(() => {
    playStartupSound();
    const tl = gsap.timeline();
    tlRef.current = tl;

    // T+0ms: Void black. Silence.
    tl.set(containerRef.current, { opacity: 1 });

    let currentTime = 0.8;

    lines.forEach((line, lineIdx) => {
      const lineEl = linesRef.current[lineIdx];
      if (!lineEl) return;

      // Stark fade in while slowly pushing in (scale)
      tl.fromTo(lineEl,
        { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
        { opacity: 1, scale: 1.05, filter: 'blur(0px)', duration: 3.5, ease: 'power1.out' },
        currentTime
      );

      // Sudden cut to black
      tl.to(lineEl, { opacity: 0, duration: 0.1 }, currentTime + 3.5);

      currentTime += 4.5; // 3.5s animation + 1s beat of silence
    });

    // Welcome — pure Nolan tracking out effect
    tl.fromTo(welcomeRef.current,
      { opacity: 0, letterSpacing: '0.1em', scale: 0.9 },
      { opacity: 1, letterSpacing: '0.6em', scale: 1.1, duration: 4.5, ease: 'power2.out' },
      currentTime
    );

    // Fade to black and transition
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: () => navigate('storyteller'),
    }, currentTime + 4.5);

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
      {/* Cinematic lines container */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {lines.map((line, idx) => (
          <div
            key={idx}
            ref={(el) => { linesRef.current[idx] = el; }}
            style={{
              position: 'absolute',
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(14px, 3vw, 24px)',
              fontWeight: 400,
              color: '#F5F0E8',
              letterSpacing: '0.25em',
              textAlign: 'center',
              textTransform: 'uppercase',
              opacity: 0,
              width: '100%',
              padding: '0 20px',
            }}
          >
            {line}
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
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: 300,
          color: '#C9A84C',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          opacity: 0,
          textAlign: 'center',
          width: '100%',
        }}
      >
        WELCOME
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
