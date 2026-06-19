'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { useInView } from '@/hooks/useInView';
import { useTitleGlitch } from '@/hooks/useGlitch';
import { SKILLS, PROJECTS } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';

// Flatten all skills into orbit data
const CATEGORIES = Object.keys(SKILLS);

const COLORS = [
  'rgba(0,255,148,0.6)',
  'rgba(68,136,255,0.5)',
  'rgba(255,100,200,0.4)',
  'rgba(255,200,80,0.4)',
  'rgba(140,120,255,0.4)',
  'rgba(255,150,100,0.4)',
  'rgba(100,255,200,0.4)',
  'rgba(200,100,255,0.4)',
];

const ORBIT_CONFIG = CATEGORIES.map((_, i) => ({
  radius: 110 + i * 55, // 110, 165, 220, 275, 330, 385, 440
  speed: 60 + i * 20,   // 60, 80, 100, 120, 140, 160, 180
  color: COLORS[i % COLORS.length],
}));

type OrbitNode = { name: string; icon: string; pct: number; ring: number; angle: number; category: string };

function buildNodes(): OrbitNode[] {
  const nodes: OrbitNode[] = [];
  CATEGORIES.forEach((cat, ringIdx) => {
    const skills = SKILLS[cat];
    skills.forEach((s, i) => {
      nodes.push({
        name: s.name,
        icon: s.icon,
        pct: s.pct,
        ring: ringIdx,
        angle: (360 / skills.length) * i,
        category: cat,
      });
    });
  });
  return nodes;
}

const ALL_NODES = buildNodes();

export default function ArchAbout() {
  const { ref } = useInView({ threshold: 0.1 });
  const { text: titleText, triggerGlitch, stopGlitch } = useTitleGlitch('The Beginning');

  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const { setHoverCursor } = useNavigation();

  // Find projects matching active skill
  const matchedProjects = useMemo(() => {
    if (!activeSkill) return [];
    return PROJECTS.filter(p =>
      p.stack.some(s => s.toLowerCase() === activeSkill.toLowerCase())
    );
  }, [activeSkill]);

  return (
    <RevealOnScroll className="arch-sec bg-surface" id="arch-about">
      <div className="sec-eyebrow">01 — THE BEGINNING</div>
      <div
        className="sec-title-arch"
        onMouseEnter={triggerGlitch}
        onMouseLeave={stopGlitch}
      >
        {titleText}
      </div>
      <div className="sec-rule"></div>

      <div className="about-grid" ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
        <div>
          <div className="pull-quote">
            &quot;I build systems that are fast, precise,<br />and built to <strong>last</strong>.&quot;
          </div>
          <p className="body-text">I&apos;m a machine learning engineer and full-stack developer who lives at the intersection of elegant code and real-world impact. Every system I build is designed to be not just functional, but inevitable, the kind of solution that makes you wonder how you ever did without it.</p>
          <p className="body-text">From training neural networks for medical diagnostics to architecting blockchain platforms, I bring the same obsessive precision to every layer of the stack. Clean abstractions. Ruthless optimization. Zero tolerance for technical debt.</p>
          <p className="body-text">Currently pursuing <span className="hero-name-word">BCA (Hons.) with Research</span> at Symbiosis Institute of Technology (Symbiosis International University), Pune, building at the intersection of machine intelligence and systems design.</p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Galaxy */}
          <div className="galaxy-container" style={{ height: '520px', margin: '20px 0' }}>
            <div className="galaxy-viewport" style={{ transform: 'scale(0.55)' }}>
              {/* Orbit rings */}
              {ORBIT_CONFIG.map((orbit, i) => (
                <div
                  key={i}
                  className="galaxy-ring"
                  style={{
                    width: orbit.radius * 2,
                    height: orbit.radius * 2,
                    borderColor: orbit.color.replace(/[\d.]+\)$/, '0.12)'),
                  }}
                />
              ))}

              {/* Core */}
              <div className="galaxy-core">
                <span className="galaxy-core-text">{activeSkill || 'SKILLS'}</span>
              </div>

              {/* Skill nodes */}
              {ALL_NODES.map((node) => {
                const orbit = ORBIT_CONFIG[node.ring];
                const isActive = activeSkill === node.name;
                return (
                  <div
                    key={node.name}
                    className="galaxy-orbit-wrapper"
                    style={{
                      animationDuration: `${orbit.speed}s`,
                      animationDelay: `-${(node.angle / 360) * orbit.speed}s`,
                    }}
                  >
                    <div style={{ transform: `translateX(${orbit.radius}px)` }}>
                      <div
                        className={`galaxy-node ${isActive ? 'active' : ''}`}
                        style={{
                          animationDuration: `${orbit.speed}s`,
                          animationDelay: `-${(node.angle / 360) * orbit.speed}s`,
                          '--node-color': orbit.color,
                        } as React.CSSProperties}
                        onClick={() => setActiveSkill(prev => prev === node.name ? null : node.name)}
                        onMouseEnter={() => setHoverCursor(true, node.name.toUpperCase())}
                        onMouseLeave={() => setHoverCursor(false)}
                      >
                        <span className="galaxy-node-icon">{node.icon}</span>
                        <span className="galaxy-node-label" style={{ fontSize: '14px', bottom: '-28px' }}>{node.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project reveal panel */}
          <AnimatePresence>
            {activeSkill && (
              <motion.div
                className="galaxy-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', zIndex: 30 }}
              >
                <div className="galaxy-panel-header">
                  <span className="galaxy-panel-tag">{activeSkill}</span>
                  <span className="galaxy-panel-count">
                    {matchedProjects.length} PROJECT{matchedProjects.length !== 1 ? 'S' : ''}
                  </span>
                  <button
                    className="galaxy-panel-close"
                    onClick={() => setActiveSkill(null)}
                    onMouseEnter={() => setHoverCursor(true, 'CLOSE')}
                    onMouseLeave={() => setHoverCursor(false)}
                  >
                    ×
                  </button>
                </div>

                {matchedProjects.length > 0 ? (
                  <div className="galaxy-panel-projects">
                    {matchedProjects.map((p) => (
                      <div key={p.num} className="galaxy-panel-project">
                        <div className="galaxy-panel-proj-top">
                          <span className="galaxy-panel-proj-title">{p.title}</span>
                          <span className={`status-badge ${p.badgeClass}`}>{p.badge}</span>
                        </div>
                        <p className="galaxy-panel-proj-desc">{p.tagline}</p>
                        <div className="galaxy-panel-proj-metrics">
                          {p.metrics.map((m, i) => (
                            <span key={i}><strong>{m.v}</strong> {m.k}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="galaxy-panel-empty">
                    No projects directly use {activeSkill} yet — but it powers the systems underneath.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #0d0d18 20%, #0d0d18 80%, transparent)', opacity: 0.6, marginTop: '160px' }}></div>
    </RevealOnScroll>
  );
}
