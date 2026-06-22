'use client';

import React from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { TIMELINE } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';
import { useTitleGlitch } from '@/hooks/useGlitch';

export default function ArchTimeline() {
  const { setHoverCursor } = useNavigation();
  const { text: titleText, triggerGlitch, stopGlitch } = useTitleGlitch('The Journey');

  return (
    <RevealOnScroll className="arch-sec bg-void" id="arch-timeline">
      <div className="sec-eyebrow">03 — THE JOURNEY</div>
      <div 
        className="sec-title-arch"
        onMouseEnter={triggerGlitch}
        onMouseLeave={stopGlitch}
      >
        {titleText}
      </div>
      <div className="sec-rule"></div>
      
      <div className="timeline-wrap">
        <div className="tl-line"></div>
        {TIMELINE.map((t, i) => (
          <div key={i} className="tl-item" style={t.dot === 'todo' ? { opacity: 0.3 } : {}}>
            <div className="tl-period">{t.period}</div>
            <div className="tl-dot-col">
              <div className={`tl-dot ${t.dot}`}></div>
            </div>
            <div 
              className="tl-info"
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
            >
              <div className="tl-title">{t.title}</div>
              <div className="tl-org">{t.org}</div>
              {t.detail && <div className="tl-detail">{t.detail}</div>}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #0d0d18 20%, #0d0d18 80%, transparent)', opacity: 0.6, marginTop: '160px' }}></div>
    </RevealOnScroll>
  );
}
