'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { PROJECTS } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';
import { useTitleGlitch } from '@/hooks/useGlitch';
import { playProjectOpenSound } from '@/lib/sound';
import LiveCounter from '@/components/shared/LiveCounter';

export default function ArchProjects() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [termError, setTermError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setHoverCursor } = useNavigation();
  const { text: titleText, triggerGlitch, stopGlitch } = useTitleGlitch('Proof of Work');

  const toggleProject = (num: string) => {
    setOpenProject(prev => {
      const isOpening = prev !== num;
      if (isOpening) playProjectOpenSound();
      return isOpening ? num : null;
    });
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    
    if (cmd === 'show projects') {
      setIsUnlocked(true);
      setTermError(false);
    } else if (cmd === 'boot os') {
      window.dispatchEvent(new CustomEvent('TRIGGER_OS'));
      setTerminalInput('');
    } else {
      setTermError(true);
      setTerminalInput('');
      setTimeout(() => setTermError(false), 2000);
    }
  };

  return (
    <RevealOnScroll className="arch-sec bg-surface" id="arch-projects">
      <div className="sec-eyebrow">02 — PROOF OF WORK</div>
      <div 
        className="sec-title-arch"
        onMouseEnter={triggerGlitch}
        onMouseLeave={stopGlitch}
      >
        {titleText}
      </div>
      <div className="sec-rule"></div>
      
      <div className="arch-live-stats" style={{ display: 'flex', gap: '40px', justifyContent: 'center', margin: '40px 0', fontFamily: 'var(--font-jetbrains)' }}>
         <div className="arch-stat-box" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', color: '#00FF94', fontWeight: 'bold' }}><LiveCounter to={100} duration={2} />+</div>
            <div style={{ fontSize: '10px', color: '#555', letterSpacing: '0.1em' }}>CONTRIBUTIONS / YEAR</div>
         </div>
         <div className="arch-stat-box" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', color: '#00FF94', fontWeight: 'bold' }}><LiveCounter to={20} duration={2} />+</div>
            <div style={{ fontSize: '10px', color: '#555', letterSpacing: '0.1em' }}>PROJECTS</div>
         </div>
         <div className="arch-stat-box" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', color: '#00FF94', fontWeight: 'bold' }}><LiveCounter to={4} duration={2} />+</div>
            <div style={{ fontSize: '10px', color: '#555', letterSpacing: '0.1em' }}>PRODUCTS SHIPPED</div>
         </div>
      </div>
      
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
            transition={{ duration: 0.4 }}
            className="terminal-wrapper" 
            onClick={() => inputRef.current?.focus()}
          >
            <div className="term-line">
               <span className="term-user">guest@portfolio</span>:<span className="term-dir">~/projects</span>$ <span className="term-cmd">ls -la</span>
            </div>
            <div className="term-line">
               Accessing encrypted project records...<br/>
               <span style={{color: '#ff3366'}}>Error:</span> manual override required.
            </div>
            <form onSubmit={handleTerminalSubmit} className="term-input-line">
               <span className="term-prompt-char">&gt;</span>
               <input 
                 ref={inputRef}
                 type="text" 
                 value={terminalInput}
                 onChange={e => setTerminalInput(e.target.value)}
                 placeholder="type 'show projects' to decrypt"
                 className="term-input"
                 onMouseEnter={() => setHoverCursor(true, 'TYPE')}
                 onMouseLeave={() => setHoverCursor(false)}
               />
            </form>
            {termError && (
              <div className="term-error">Command not recognized. Hint: show projects</div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="projects-list"
          >
            {PROJECTS.map((p) => {
              const isOpen = openProject === p.num;
              return (
                <div key={p.num} className={`project-card ${isOpen ? 'open' : ''}`}>
                  <div 
                    className="proj-header" 
                    onClick={() => toggleProject(p.num)}
                    onMouseEnter={() => setHoverCursor(true, isOpen ? 'CLOSE' : 'VIEW')}
                    onMouseLeave={() => setHoverCursor(false)}
                  >
                    <div className="proj-num">{p.num}</div>
                    <div className="proj-name-wrap">
                      <div className="proj-name">{p.title}</div>
                      <div className="proj-tagline">{p.tagline}</div>
                    </div>
                    <div className="proj-year">{p.year}</div>
                    <div className={`status-badge ${p.badgeClass}`}>{p.badge}</div>
                    <div className="proj-chevron">▾</div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        className="proj-body"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto', transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
                          collapsed: { opacity: 0, height: 0, transition: { duration: 0.35 } }
                        }}
                      >
                        <div className="proj-body-inner">
                          <p className="proj-desc">{p.desc}</p>
                          <div className="proj-metrics">
                            {p.metrics.map((m, i) => (
                              <div key={i} className="proj-metric">
                                <div className="metric-val">{m.v}</div>
                                <div className="metric-key">{m.k}</div>
                              </div>
                            ))}
                          </div>
                          <div className="proj-stack">
                            {p.stack.map((s, i) => (
                              <div key={i} className="stack-tag"
                                onMouseEnter={() => setHoverCursor(true)}
                                onMouseLeave={() => setHoverCursor(false)}
                              >
                                {s}
                              </div>
                            ))}
                          </div>
                          <div className="proj-links">
                            {p.links.map((l, i) => (
                              <a
                                key={i}
                                className="proj-link"
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoverCursor(true, l.label.toUpperCase() === 'GITHUB' ? 'EXPLORE' : 'VISIT')}
                                onMouseLeave={() => setHoverCursor(false)}
                              >
                                {l.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #0d0d18 20%, #0d0d18 80%, transparent)', opacity: 0.6, marginTop: '160px' }}></div>
    </RevealOnScroll>
  );
}
