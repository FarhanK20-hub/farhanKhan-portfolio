'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

/* ── Line-by-line text reveal component ── */
function RevealLines({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  // Split text into words, then wrap each word for animation
  const words = children.split(' ');

  return (
    <p ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.6,
            delay: i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

/* ── Pull Quote with animated gold border ── */
function PullQuote({ children }: { children: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <div ref={ref} className="story-pull-quote">
      <motion.div
        className="pull-quote-border"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      <motion.blockquote
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        {children}
      </motion.blockquote>
    </div>
  );
}

/* ── Film Strip Divider ── */
function FilmStripDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const fragments = ['LIGHT', 'STORY', 'CUT', 'TAKE', 'SCENE', 'ACTION', 'ROLL', 'FIN'];

  return (
    <div ref={ref} className="film-strip-divider">
      {fragments.map((text, i) => (
        <motion.div
          key={i}
          className="film-strip-frame"
          initial={{ opacity: 0, rotate: -2 + (i % 3) }}
          animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -2 + (i % 3) }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {text && <span className="film-strip-text">{text}</span>}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main About Section ── */
export default function StoryAbout() {
  return (
    <RevealOnScroll className="story-sec" style={{ textAlign: 'center' }}>
      <div className="story-eyebrow">01 — ABOUT</div>
      <div className="story-sec-title">The Storyteller</div>
      <div className="story-rule" style={{ marginLeft: 'auto', marginRight: 'auto' }} />

      <div className="story-about-inner">
        <RevealLines className="story-para">
          I am drawn to the spaces between moments, the held breath before a cut, the light that falls just so, the silence that carries more weight than any dialogue. Cinema is not about what you show. It is about what you make the audience feel.
        </RevealLines>

        <FilmStripDivider />

        <PullQuote>I don&apos;t make content. I make moments.</PullQuote>

        <RevealLines className="story-para">
          Under FRK Productions, I craft visual narratives for brands, artists, and stories that deserve to be seen. Every project begins with a single question: what do you want someone to carry with them long after the screen goes dark?
        </RevealLines>
      </div>

      <div className="story-divider" />
    </RevealOnScroll>
  );
}
