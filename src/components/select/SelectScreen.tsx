'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
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

  // Spring physics for the split width
  // When hovered, the side grows to take up 58% of the screen (springy)
  const archFlex = hoveredSide === 'arch' ? 58 : hoveredSide === 'story' ? 42 : 50;
  const storyFlex = hoveredSide === 'story' ? 58 : hoveredSide === 'arch' ? 42 : 50;

  // Mouse follow glow state
  const archMouseX = useMotionValue(0);
  const archMouseY = useMotionValue(0);
  const storyMouseX = useMotionValue(0);
  const storyMouseY = useMotionValue(0);
  
  const archSpringX = useSpring(archMouseX, { stiffness: 100, damping: 30 });
  const archSpringY = useSpring(archMouseY, { stiffness: 100, damping: 30 });
  const storySpringX = useSpring(storyMouseX, { stiffness: 100, damping: 30 });
  const storySpringY = useSpring(storyMouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent, side: 'arch' | 'story') => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (side === 'arch') {
      archMouseX.set(x);
      archMouseY.set(y);
    } else {
      storyMouseX.set(x);
      storyMouseY.set(y);
    }
  };

  // Spawn particles on hover
  useEffect(() => {
    if (!hoveredSide) return;
    
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

    const interval = setInterval(() => spawnParticle(hoveredSide), 180);
    return () => clearInterval(interval);
  }, [hoveredSide]);

  return (
    <div className="screen active" id="screen-select" style={{ display: 'flex', width: '100vw' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes particleRise {
          0%   { opacity:0.5; transform:translateY(0) scale(1); }
          100% { opacity:0;   transform:translateY(-40px) scale(0.3); }
        }
        .half-wrapper {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }
        .sel-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          z-index: 10;
        }
        .mouse-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .half-wrapper:hover .mouse-glow {
          opacity: 1;
        }
      `}} />

      <motion.div 
        className="half-wrapper" 
        id="half-arch" 
        style={{ flex: archFlex, background: '#09090E' }}
        layout
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        onClick={() => navigate('architect')}
        onMouseMove={(e) => handleMouseMove(e, 'arch')}
        onMouseEnter={() => { setHoveredSide('arch'); setHoverCursor(true); }}
        onMouseLeave={() => { setHoveredSide(null); setHoverCursor(false); }}
      >
        <div className="arch-grid-bg" style={{ opacity: hoveredSide === 'arch' ? 1 : 0, transition: 'opacity 0.6s' }}></div>
        
        {/* Mouse follow glow */}
        <motion.div 
          className="mouse-glow"
          style={{ 
            x: archSpringX, 
            y: archSpringY,
            background: 'radial-gradient(circle at center, rgba(0,255,148,0.06) 0%, transparent 70%)'
          }}
        />

        <div className="sel-content">
          <motion.div animate={{ scale: hoveredSide === 'arch' ? 1.05 : 1 }} transition={{ duration: 0.4 }}>
            <div className="sel-title-arch">THE ARCHITECT</div>
            <div className="sel-sub-arch">Systems that think.</div>
            <div className="sel-sub2-arch">Code that endures.</div>
            <div className="sel-arrow-arch">→</div>
          </motion.div>
        </div>
        <div className="sel-corner">Enter</div>
      </motion.div>

      <div className="split-divider" style={{ left: 'auto', position: 'relative' }}></div>

      <motion.div 
        className="half-wrapper" 
        id="half-story" 
        style={{ flex: storyFlex, background: '#08060A' }}
        layout
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        onClick={() => navigate('story-intro')}
        onMouseMove={(e) => handleMouseMove(e, 'story')}
        onMouseEnter={() => { setHoveredSide('story'); setHoverCursor(true); }}
        onMouseLeave={() => { setHoveredSide(null); setHoverCursor(false); }}
      >
        <div className="story-grain-bg"></div>
        
        {/* Mouse follow glow */}
        <motion.div 
          className="mouse-glow"
          style={{ 
            x: storySpringX, 
            y: storySpringY,
            background: 'radial-gradient(circle at center, rgba(201,168,76,0.06) 0%, transparent 70%)'
          }}
        />

        <div className="sel-content">
          <motion.div animate={{ scale: hoveredSide === 'story' ? 1.05 : 1 }} transition={{ duration: 0.4 }}>
            <div className="sel-title-story">THE STORYTELLER</div>
            <div className="sel-sub-story">Frames that feel.</div>
            <div className="sel-sub2-story">Stories that stay.</div>
            <div className="sel-arrow-story">▶</div>
          </motion.div>
        </div>
        <div className="sel-corner" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', letterSpacing: '0.25em' }}>
          Enter
        </div>
      </motion.div>

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
