'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';
import { PROJECTS, TIMELINE } from '@/lib/data';

interface FarhanOSProps {
  onClose: () => void;
}

const BOOT_SEQUENCE = [
  'Loading FarhanOS v1.0 Kernel...',
  'Mounting cognitive drives...',
  'Connecting to Neural Net...',
  '[OK] Neural Net synchronized.',
  'Decrypting portfolio modules...',
  '[OK] Modules decrypted.',
  'Initializing graphics subsystem...',
  'Access Granted.',
];

export default function FarhanOS({ onClose }: FarhanOSProps) {
  const { setHoverCursor } = useNavigation();
  const [bootPhase, setBootPhase] = useState<'booting' | 'desktop'>('booting');
  const [bootLines, setBootLines] = useState<string[]>([]);
  
  // OS State
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < BOOT_SEQUENCE.length) {
        setBootLines(prev => [...prev, BOOT_SEQUENCE[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBootPhase('desktop'), 800);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const openModule = (module: string) => {
    if (!openWindows.includes(module)) {
      setOpenWindows([...openWindows, module]);
    }
    setActiveWindow(module);
  };

  const closeModule = (module: string) => {
    setOpenWindows(openWindows.filter(w => w !== module));
    if (activeWindow === module) {
      setActiveWindow(openWindows[openWindows.length - 2] || null);
    }
  };

  return (
    <motion.div 
      className="os-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Boot Sequence */}
      {bootPhase === 'booting' && (
        <div className="os-boot-screen">
          <div className="os-boot-text">
            {bootLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <span className="os-cursor">_</span>
          </div>
        </div>
      )}

      {/* Desktop Interface */}
      {bootPhase === 'desktop' && (
        <div className="os-desktop">
          {/* Top Bar */}
          <div className="os-topbar">
            <div className="os-topbar-left">
              <span>FarhanOS</span>
              <span>v1.0.0</span>
            </div>
            <div className="os-topbar-right">
              <span>{new Date().toLocaleTimeString()}</span>
              <button 
                className="os-btn-shutdown" 
                onClick={onClose}
                onMouseEnter={() => setHoverCursor(true, 'EXIT')}
                onMouseLeave={() => setHoverCursor(false)}
              >
                SHUTDOWN
              </button>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="os-icons">
            <div className="os-icon" onClick={() => openModule('Projects')} onMouseEnter={() => setHoverCursor(true, 'OPEN')} onMouseLeave={() => setHoverCursor(false)}>
              <span className="os-icon-emoji">📁</span>
              <span className="os-icon-label">Projects.exe</span>
            </div>
            <div className="os-icon" onClick={() => openModule('Experience')} onMouseEnter={() => setHoverCursor(true, 'OPEN')} onMouseLeave={() => setHoverCursor(false)}>
              <span className="os-icon-emoji">📁</span>
              <span className="os-icon-label">Experience.log</span>
            </div>

            <div className="os-icon" onClick={() => openModule('Contact')} onMouseEnter={() => setHoverCursor(true, 'OPEN')} onMouseLeave={() => setHoverCursor(false)}>
              <span className="os-icon-emoji">✉️</span>
              <span className="os-icon-label">Network.sh</span>
            </div>
          </div>

          {/* Windows */}
          <AnimatePresence>
            {openWindows.map(win => (
              <motion.div 
                key={win}
                drag 
                dragMomentum={false}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, zIndex: activeWindow === win ? 50 : 10 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onPointerDown={() => setActiveWindow(win)}
                className="os-window"
                style={{ position: 'absolute', top: '15%', left: '20%' }}
              >
                <div className="os-window-header">
                  <span>{win}</span>
                  <button 
                    className="os-window-close"
                    onClick={() => closeModule(win)}
                    onMouseEnter={() => setHoverCursor(true)}
                    onMouseLeave={() => setHoverCursor(false)}
                  >×</button>
                </div>
                <div className="os-window-content">
                  {win === 'Projects' && (
                    <div className="os-module-projects">
                      {PROJECTS.map(p => (
                        <div key={p.num} className="os-proj">
                          <div className="os-proj-title">{p.title}</div>
                          <div className="os-proj-desc">{p.desc}</div>
                          <div className="os-proj-stack">{p.stack.join(' • ')}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {win === 'Experience' && (
                    <div className="os-module-timeline">
                      {TIMELINE.map((t, i) => (
                        <div key={i} className="os-timeline-item">
                          <div className="os-tl-period">{t.period}</div>
                          <div className="os-tl-title">{t.title}</div>
                          <div className="os-tl-org">{t.org}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {win === 'Contact' && (
                    <div className="os-module-contact">
                      <div className="os-term-line">Initializing connection protocol...</div>
                      <div className="os-term-line">Awaiting secure handshake...</div>
                      <br />
                      <a href="mailto:devrevolutionx@gmail.com" target="_blank" rel="noopener noreferrer" className="os-link" onMouseEnter={() => setHoverCursor(true)} onMouseLeave={() => setHoverCursor(false)}>&gt; INITIALIZE EMAIL PROTOCOL</a>
                      <a href="https://www.linkedin.com/in/farhan-khan-3aa5442b0/" target="_blank" rel="noopener noreferrer" className="os-link" onMouseEnter={() => setHoverCursor(true)} onMouseLeave={() => setHoverCursor(false)}>&gt; ESTABLISH LINKEDIN CONNECTION</a>
                      <a href="https://github.com/FarhanK20-hub" target="_blank" rel="noopener noreferrer" className="os-link" onMouseEnter={() => setHoverCursor(true)} onMouseLeave={() => setHoverCursor(false)}>&gt; ACCESS GITHUB REPOSITORY</a>
                      <a href="https://leetcode.com/u/Q3tQQteAio/" target="_blank" rel="noopener noreferrer" className="os-link" onMouseEnter={() => setHoverCursor(true)} onMouseLeave={() => setHoverCursor(false)}>&gt; QUERY LEETCODE DATABASE</a>
                      <a href="https://www.instagram.com/_farhan.who_/" target="_blank" rel="noopener noreferrer" className="os-link" onMouseEnter={() => setHoverCursor(true)} onMouseLeave={() => setHoverCursor(false)}>&gt; PING INSTAGRAM PROTOCOL</a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
