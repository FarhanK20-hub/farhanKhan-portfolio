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
      <div style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'var(--font-inter)', fontSize: '10px', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        <span style={{opacity: 0.7}}>GENERATING</span> <LiveCounter to={400} />K+ VIEWS <span style={{opacity: 0.7}}>&</span> <LiveCounter to={22} />K+ FOLLOWERS <span style={{opacity: 0.7}}>AVERAGE PER MANAGED PROFILE</span>
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
