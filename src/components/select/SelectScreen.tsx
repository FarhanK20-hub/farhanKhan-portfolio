'use client';

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export default function SelectScreen() {
  const { navigate, setHoverCursor } = useNavigation();
  const [hoveredSide, setHoveredSide] = useState<'arch' | 'story' | null>(null);

  // Background audio loop
  useEffect(() => {
    const audio = new Audio('/IntroPage-selection-loop.mp3');
    audio.loop = true;
    audio.play().catch(e => console.log('Audio play prevented:', e));

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Spawn particles on hover
  useEffect(() => {
    if (!hoveredSide) return;
    
    let interval: NodeJS.Timeout;
    const spawnParticle = (side: 'arch' | 'story') => {
      const p = document.createElement('div');
      const x = 20 + Math.random() * 60;
      const y = 50 + Math.random() * 30;
      const color = side === 'arch' ? '#00FF94' : '#C9A84C';
      
      p.style.cssText = `
        position:absolute;left:${x}%;top:${y}%;
        width:2px;height:2px;border-radius:50%;background:${color};
        pointer-events:none;z-index:1;opacity:0.5;
        animation:particleRise 1.2s ease forwards;
      `;
      
      const parent = document.getElementById(`half-${side}`);
      if (parent) {
        parent.appendChild(p);
        setTimeout(() => p.remove(), 1200);
      }
    };

    interval = setInterval(() => spawnParticle(hoveredSide), 180);
    return () => clearInterval(interval);
  }, [hoveredSide]);

  return (
    <div className="screen active" id="screen-select">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes particleRise {
          0%   { opacity:0.5; transform:translateY(0) scale(1); }
          100% { opacity:0;   transform:translateY(-40px) scale(0.3); }
        }
      `}} />

      <div 
        className="half" 
        id="half-arch" 
        onClick={() => navigate('architect')}
        onMouseEnter={() => { setHoveredSide('arch'); setHoverCursor(true); }}
        onMouseLeave={() => { setHoveredSide(null); setHoverCursor(false); }}
      >
        <div className="arch-grid-bg"></div>
        <div className="arch-glow"></div>
        <div className="sel-content">
          <div className="sel-title-arch">THE ARCHITECT</div>
          <div className="sel-sub-arch">Systems that think.</div>
          <div className="sel-sub2-arch">Code that endures.</div>
          <div className="sel-arrow-arch">→</div>
        </div>
        <div className="sel-corner">Enter</div>
      </div>

      <div className="split-divider"></div>

      <div 
        className="half" 
        id="half-story" 
        onClick={() => navigate('story-intro')}
        onMouseEnter={() => { setHoveredSide('story'); setHoverCursor(true); }}
        onMouseLeave={() => { setHoveredSide(null); setHoverCursor(false); }}
      >
        <div className="story-grain-bg"></div>
        <div className="story-amber-glow"></div>
        <div className="sel-content">
          <div className="sel-title-story">THE STORYTELLER</div>
          <div className="sel-sub-story">Frames that feel.</div>
          <div className="sel-sub2-story">Stories that stay.</div>
          <div className="sel-arrow-story">▶</div>
        </div>
        <div className="sel-corner" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', letterSpacing: '0.25em' }}>
          Enter
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: '#1a1a2a',
        letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center',
        zIndex: 20, pointerEvents: 'none', whiteSpace: 'nowrap'
      }}>
        [ A ] ARCHITECT  ·  [ S ] STORYTELLER  ·  [ ESC ] BACK
      </div>
    </div>
  );
}
