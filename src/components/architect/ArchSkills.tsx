'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { SKILLS, PROJECTS } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';
import { useTitleGlitch } from '@/hooks/useGlitch';

// Flatten all skills into orbit data
const CATEGORIES = Object.keys(SKILLS);
const ORBIT_CONFIG = [
  { radius: 110, speed: 60, color: 'rgba(0,255,148,0.6)' },   // Ring 0
  { radius: 170, speed: 80, color: 'rgba(68,136,255,0.5)' },   // Ring 1
  { radius: 230, speed: 100, color: 'rgba(255,100,200,0.4)' },  // Ring 2
  { radius: 280, speed: 120, color: 'rgba(255,200,80,0.4)' },   // Ring 3
  { radius: 330, speed: 140, color: 'rgba(140,120,255,0.4)' },  // Ring 4
];

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

export default function ArchSkills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const { setHoverCursor } = useNavigation();
  const { text: titleText, triggerGlitch, stopGlitch } = useTitleGlitch('What I Build');

  // Find projects matching active skill
  const matchedProjects = useMemo(() => {
    if (!activeSkill) return [];
    return PROJECTS.filter(p =>
      p.stack.some(s => s.toLowerCase() === activeSkill.toLowerCase())
    );
  }, [activeSkill]);

  return (
    <RevealOnScroll className="arch-sec bg-void" id="arch-skills">
      <div className="sec-eyebrow">02 — WHAT I BUILD</div>
      <div
        className="sec-title-arch"
        onMouseEnter={triggerGlitch}
        onMouseLeave={stopGlitch}
      >
        {titleText}
      </div>
      <div className="sec-rule"></div>

      {/* Category legend */}
      <div className="galaxy-legend">
        {CATEGORIES.map((cat, i) => (
          <div key={cat} className="galaxy-legend-item">
            <span className="galaxy-legend-dot" style={{ background: ORBIT_CONFIG[i]?.color }} />
            <span>{cat}</span>
          </div>
        ))}
      </div>

      {/* Galaxy */}
      <div className="galaxy-container">
        <div className="galaxy-viewport">
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
                  width: orbit.radius * 2,
                  height: orbit.radius * 2,
                  animationDuration: `${orbit.speed}s`,
                  animationDelay: `-${(node.angle / 360) * orbit.speed}s`,
                }}
              >
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
                  <span className="galaxy-node-label">{node.name}</span>
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

      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #0d0d18 20%, #0d0d18 80%, transparent)', opacity: 0.6, marginTop: '80px' }}></div>
    </RevealOnScroll>
  );
}
