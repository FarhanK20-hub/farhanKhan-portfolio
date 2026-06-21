'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_QUOTES } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

export default function StoryHero() {
  const { setHoverCursor } = useNavigation();
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [phase, setPhase] = useState(0); // 0=black, 1=flicker, 2=main
  const heroInnerRef = useRef<HTMLDivElement>(null);

  // Cinematic open sequence: black → flicker → reveal
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);  // flicker starts
    const t2 = setTimeout(() => setPhase(2), 1600); // full reveal
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Parallax scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroInnerRef.current) {
        gsap.to(heroInnerRef.current, {
          yPercent: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: '.story-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  // Rotating quotes
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % STORY_QUOTES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="story-hero">
      {/* Film grain */}
      <div className="story-grain" />

      {/* Ambient radial vignette */}
      <div className="story-vignette" />

      {/* Scan lines overlay */}
      <div className="hero-scanlines" />

      {/* Horizontal light leak top */}
      <div className="hero-light-leak-top" />

      {/* Film counter — top left */}
      <motion.div
        className="hero-film-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="hero-film-id">FRK-001</span>
        <span className="hero-film-dot" />
        <span className="hero-film-id">35MM</span>
      </motion.div>

      {/* Aspect ratio bars — cinematic 2.39:1 */}
      <motion.div
        className="hero-bar hero-bar-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="hero-bar hero-bar-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Cinematic black flash */}
      <AnimatePresence>
        {phase < 2 && (
          <motion.div
            className="hero-flash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <div ref={heroInnerRef} className="story-hero-inner">

        {/* Production house — small opener line */}
        <motion.div
          className="hero-production-label"
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: phase >= 2 ? 0.5 : 0, letterSpacing: phase >= 2 ? '0.3em' : '0.6em' }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          FRK PRODUCTIONS PRESENTS
        </motion.div>

        {/* Gold divider rule */}
        <motion.div
          className="gold-rule"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: phase >= 2 ? 1 : 0, opacity: phase >= 2 ? 0.6 : 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Name — large cinematic title */}
        <div className="hero-title-wrap">
          {'Farhan Khan'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="hero-title-char"
              initial={{ opacity: 0, y: 60, rotateX: -40 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 60, rotateX: phase >= 2 ? 0 : -40 }}
              transition={{
                duration: 1.2,
                delay: 0.6 + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        {/* Roles line */}
        <motion.div
          className="story-roles-line"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 16 }}
          transition={{ duration: 1.0, delay: 1.2, ease: 'easeOut' }}
        >
          CINEMATOGRAPHER&nbsp;·&nbsp;EDITOR&nbsp;·&nbsp;VISUAL STORYTELLER
        </motion.div>

        {/* Gold thin rule */}
        <motion.div
          className="hero-thin-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Rotating quote */}
        <div className="story-quote-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIdx}
              className="story-quote"
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.9, delay: quoteIdx === 0 ? 1.6 : 0 }}
            >
              {STORY_QUOTES[quoteIdx]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="story-cta-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 1.9 }}
          onMouseEnter={() => setHoverCursor(true)}
          onMouseLeave={() => setHoverCursor(false)}
        >
          ▶&nbsp;&nbsp;ENTER THE REEL
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="story-social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 2.1 }}
          style={{ display: 'flex', gap: '28px', marginTop: '40px', justifyContent: 'center' }}
        >
          <a href="https://www.instagram.com/_farhan.who_/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C', fontSize: '24px', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'INSTAGRAM'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; setHoverCursor(false); }}><FaInstagram /></a>
          <a href="https://github.com/FarhanK20-hub" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C', fontSize: '24px', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'GITHUB'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; setHoverCursor(false); }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/farhan-khan-3aa5442b0/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C', fontSize: '24px', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'LINKEDIN'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; setHoverCursor(false); }}><FaLinkedin /></a>
          <a href="https://leetcode.com/u/Q3tQQteAio/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C', fontSize: '24px', opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; setHoverCursor(true, 'LEETCODE'); }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; setHoverCursor(false); }}><SiLeetcode /></a>
        </motion.div>
      </div>

      {/* Bottom reel number — right side */}
      <motion.div
        className="frk-credit"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 2.0 }}
        onMouseEnter={() => setHoverCursor(true)}
        onMouseLeave={() => setHoverCursor(false)}
      >
        FRK PRODUCTIONS
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="story-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 2.2 }}
      >
        <div className="story-scroll-track"><div className="story-scroll-fill" /></div>
      </motion.div>
    </section>
  );
}
