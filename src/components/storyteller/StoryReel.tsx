'use client';

import React, { useEffect, useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { useNavigation } from '@/context/NavigationContext';

export default function StoryReel() {
  const { setHoverCursor } = useNavigation();
  const [hue, setHue] = useState(0);

  // Breathing border
  useEffect(() => {
    const timer = setInterval(() => {
      setHue((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const intensity = 0.04 + Math.sin(Date.now() / 2000) * 0.03;

  return (
    <RevealOnScroll className="story-sec">
      <div className="story-eyebrow">02 — THE REEL</div>
      <div className="story-sec-title">The Work Speaks</div>
      <div className="story-rule"></div>
      
      <div className="reel-outer">
        <div 
          className="reel-frame"
          style={{ borderColor: `rgba(201,168,76,${intensity})` }}
        >
          <div className="reel-corners">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="reel-inner">
            <div className="play-btn">
              <div 
                className="play-circle"
                onMouseEnter={() => setHoverCursor(true)}
                onMouseLeave={() => setHoverCursor(false)}
              ></div>
              <div className="play-label">LATEST REEL &nbsp;·&nbsp; 2025</div>
            </div>
          </div>
        </div>
        
        <div className="reel-meta-row">
          <span className="reel-meta-text">FRK PRODUCTIONS &nbsp;·&nbsp; DIRECTOR & EDITOR</span>
          <span className="reel-meta-text">FULL SCREEN ↗</span>
        </div>
        
        <div className="film-strip"></div>
      </div>
    </RevealOnScroll>
  );
}
