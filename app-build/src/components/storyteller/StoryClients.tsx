/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { CLIENTS_LIST } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';
import LiveCounter from '@/components/shared/LiveCounter';

export default function StoryClients() {
  const { setHoverCursor } = useNavigation();
  const doubled = [...CLIENTS_LIST, ...CLIENTS_LIST];

  return (
    <RevealOnScroll className="story-sec" style={{ paddingTop: '64px', paddingBottom: '64px', overflow: 'hidden' }}>
      <div className="story-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>03 — COLLABORATIONS</div>
      <div style={{ textAlign: 'center', marginBottom: '64px', color: '#C9A84C' }}>

        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 6vw, 64px)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <div><LiveCounter to={2} />M+ <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(12px, 2vw, 16px)', fontStyle: 'normal', letterSpacing: '0.15em', opacity: 0.8, verticalAlign: 'middle' }}>VIEWS</span></div>
          <span style={{ opacity: 0.3, fontFamily: 'var(--font-inter)', fontSize: '24px', fontStyle: 'normal' }}>&amp;</span>
          <div><LiveCounter to={30} />K+ <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(12px, 2vw, 16px)', fontStyle: 'normal', letterSpacing: '0.15em', opacity: 0.8, verticalAlign: 'middle' }}>FOLLOWERS</span></div>
        </div>
        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.5, marginTop: '20px' }}>
          Across FRK Productions Collaborations
        </div>
      </div>
      <div className="clients-outer">
        <div className="clients-track">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="client-card"
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
            >
              <img src={c} alt="Client Logo" className="client-logo" />
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
