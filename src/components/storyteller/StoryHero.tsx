'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_QUOTES } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';

export default function StoryHero() {
  const { setHoverCursor } = useNavigation();
  const [quoteIdx, setQuoteIdx] = useState(0);

  // Parallax state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.22}px)`,
    opacity: Math.max(0, 1 - scrollY / 520)
  };

  // Rotating quotes
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % STORY_QUOTES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="story-hero">
      <div className="story-hero-bg"></div>
      <div className="story-grain"></div>
      <div className="story-vignette"></div>
      
      <div className="story-hero-inner" style={parallaxStyle}>
        <div className="gold-rule"></div>
        <div className="story-name">Farhan Khan</div>
        <div className="story-roles-line">CINEMATOGRAPHER &nbsp;·&nbsp; EDITOR &nbsp;·&nbsp; VISUAL STORYTELLER</div>
        
        <div className="story-quote-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIdx}
              className="story-quote"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
            >
              {STORY_QUOTES[quoteIdx]}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div 
          className="story-cta-btn"
          onMouseEnter={() => setHoverCursor(true)}
          onMouseLeave={() => setHoverCursor(false)}
        >
          ▶&nbsp;&nbsp;ENTER THE REEL
        </div>
      </div>
      
      <div 
        className="frk-credit"
        onMouseEnter={() => setHoverCursor(true)}
        onMouseLeave={() => setHoverCursor(false)}
      >
        FRK PRODUCTIONS
      </div>
      
      <div className="story-scroll">
        <div className="story-scroll-track"><div className="story-scroll-fill"></div></div>
      </div>
    </section>
  );
}
