'use client';

import React from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { CLIENTS_LIST } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';

export default function StoryClients() {
  const { setHoverCursor } = useNavigation();
  const doubled = [...CLIENTS_LIST, ...CLIENTS_LIST];

  return (
    <RevealOnScroll className="story-sec" style={{ paddingTop: '64px', paddingBottom: '64px', overflow: 'hidden' }}>
      <div className="story-eyebrow" style={{ textAlign: 'center', marginBottom: '40px' }}>04 — COLLABORATIONS</div>
      <div className="clients-outer">
        <div className="clients-track">
          {doubled.map((c, i) => (
            <div 
              key={i} 
              className="client-card"
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
