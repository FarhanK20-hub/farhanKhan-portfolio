'use client';

import React from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

export default function StoryAbout() {
  return (
    <RevealOnScroll className="story-sec" style={{ textAlign: 'center' }}>
      <div className="story-eyebrow">01 — ABOUT</div>
      <div className="story-sec-title">The Storyteller</div>
      <div className="story-rule" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
      <div className="story-about-inner">
        <p className="story-para">
          I am drawn to the spaces between moments — the held breath before a cut, the light that falls just so, the silence that carries more weight than any dialogue. Cinema is not about what you show. It is about what you make the audience feel.
        </p>
        <p className="story-para">
          Under FRK Productions, I craft visual narratives for brands, artists, and stories that deserve to be seen. Every project begins with a single question: what do you want someone to carry with them long after the screen goes dark?
        </p>
      </div>
      <div className="story-divider"></div>
    </RevealOnScroll>
  );
}
