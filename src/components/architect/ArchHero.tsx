'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useGlitch } from '@/hooks/useGlitch';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useNavigation } from '@/context/NavigationContext';
import { TYPEWRITER_WORDS } from '@/lib/data';
import ParticleCanvas from './ParticleCanvas';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function ArchHero() {
  const { setHoverCursor } = useNavigation();
  const typewriterText = useTypewriter(TYPEWRITER_WORDS);
  const { text: glitchedText, triggerGlitch } = useGlitch('ARCHITECT', 6000);
  const btnRef = useMagnetic<HTMLAnchorElement>();
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Parallax using direct DOM manipulation (no re-renders)
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const y = window.scrollY;
        contentRef.current.style.transform = `translateY(${y * 0.28}px)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - y / 480)}`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



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

      <div className="hero-content" ref={contentRef}>
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

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          style={{ display: 'flex', gap: '24px', marginTop: '32px' }}
        >
          <a href="https://github.com/FarhanK20-hub" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF94', fontSize: '22px', opacity: 0.5, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'GITHUB'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; setHoverCursor(false); }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/farhan-khan-3aa5442b0/" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF94', fontSize: '22px', opacity: 0.5, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'LINKEDIN'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; setHoverCursor(false); }}><FaLinkedin /></a>
          <a href="https://leetcode.com/u/Q3tQQteAio/" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF94', fontSize: '22px', opacity: 0.5, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'LEETCODE'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; setHoverCursor(false); }}><SiLeetcode /></a>
          <a href="https://www.instagram.com/_farhan.who_/" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF94', fontSize: '22px', opacity: 0.5, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'INSTAGRAM'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; setHoverCursor(false); }}><FaInstagram /></a>
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
