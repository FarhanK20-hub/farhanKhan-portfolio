'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useGlitch } from '@/hooks/useGlitch';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useNavigation } from '@/context/NavigationContext';
import { TYPEWRITER_WORDS } from '@/lib/data';
import ParticleCanvas from './ParticleCanvas';

export default function ArchHero() {
  const { setHoverCursor } = useNavigation();
  const typewriterText = useTypewriter(TYPEWRITER_WORDS);
  const { text: glitchedText, triggerGlitch } = useGlitch('ARCHITECT', 6000);
  const btnRef = useMagnetic<HTMLAnchorElement>();

  // Parallax state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.28}px)`,
    opacity: Math.max(0, 1 - scrollY / 480)
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.querySelector('#arch-about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="arch-hero">
      <ParticleCanvas />
      <div className="arch-vignette"></div>
      <div className="arch-scanlines"></div>

      <div className="hero-content" style={parallaxStyle}>
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          PORTFOLIO &nbsp;·&nbsp; 2026
        </motion.div>

        <motion.div
          className="hero-name"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="line-white">THE</div>
          <div className="line-green" onMouseEnter={triggerGlitch}>
            {glitchedText}
            <span className="cursor-blink"></span>
          </div>
        </motion.div>

        <motion.div
          className="hero-tagline"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
        >
          I don&apos;t just build systems.<br />
          <em>I make them inevitable.</em>
        </motion.div>

        <motion.div
          className="hero-typewriter"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          <span className="tw-prompt">&gt;&nbsp;</span>
          <span id="tw-text">{typewriterText}</span>
          <span className="tw-cursor-char">|</span>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <a
            href="#arch-about"
            className="btn-arch"
            ref={btnRef}
            onClick={handleSmoothScroll}
            onMouseEnter={() => setHoverCursor(true, 'ENTER')}
            onMouseLeave={() => setHoverCursor(false)}
          >
            [ ENTER THE STACK ]
          </a>
          <div className="hero-scroll-link">↓ SCROLL</div>
        </motion.div>
      </div>

      <div className="scroll-ind">
        <div className="scroll-track">
          <div className="scroll-fill"></div>
        </div>
        <div className="scroll-label">SCROLL</div>
      </div>
    </section>
  );
}
