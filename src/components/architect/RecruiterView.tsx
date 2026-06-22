'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';
import { PROJECTS, SKILLS, TIMELINE } from '@/lib/data';

const topSkills = Object.entries(SKILLS).flatMap(([, skills]) => 
  skills.filter(s => s.pct >= 80).map(s => s.name)
);

export default function RecruiterView() {
  const { setHoverCursor } = useNavigation();

  return (
    <motion.div
      className="recruiter-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="rv-header">
        <div>
          <h1 className="rv-name">Farhan Khan</h1>
          <p className="rv-title">ML Engineer · Full-Stack Developer · Creative Technologist</p>
        </div>
        <div className="rv-links">
          <a href="mailto:devrevolutionx@gmail.com" target="_blank" rel="noopener noreferrer" className="rv-link"
            onMouseEnter={() => setHoverCursor(true, 'EMAIL')}
            onMouseLeave={() => setHoverCursor(false)}
          >Email</a>
          <a href="https://github.com/FarhanK20-hub" target="_blank" rel="noopener noreferrer" className="rv-link"
            onMouseEnter={() => setHoverCursor(true, 'EXPLORE')}
            onMouseLeave={() => setHoverCursor(false)}
          >GitHub</a>
          <a href="https://www.linkedin.com/in/farhan-khan-3aa5442b0/" target="_blank" rel="noopener noreferrer" className="rv-link"
            onMouseEnter={() => setHoverCursor(true, 'CONNECT')}
            onMouseLeave={() => setHoverCursor(false)}
          >LinkedIn</a>
          <a href="https://leetcode.com/u/Q3tQQteAio/" target="_blank" rel="noopener noreferrer" className="rv-link"
            onMouseEnter={() => setHoverCursor(true, 'EXPLORE')}
            onMouseLeave={() => setHoverCursor(false)}
          >LeetCode</a>
          <a href="/Farhan_Khan.pdf" target="_blank" rel="noopener noreferrer" download="Farhan_Khan.pdf" className="rv-link rv-link-primary"
            onMouseEnter={() => setHoverCursor(true, 'DOWNLOAD')}
            onMouseLeave={() => setHoverCursor(false)}
          >Download Resume ↓</a>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="rv-stats">
        <div className="rv-stat"><span className="rv-stat-num">3+</span><span className="rv-stat-label">Production Projects</span></div>
        <div className="rv-stat"><span className="rv-stat-num">98%</span><span className="rv-stat-label">ML Model Accuracy</span></div>
        <div className="rv-stat"><span className="rv-stat-num">200+</span><span className="rv-stat-label">Students Mentored</span></div>
        <div className="rv-stat"><span className="rv-stat-num">2</span><span className="rv-stat-label">Domains (ML + Web3)</span></div>
      </section>

      {/* Skills */}
      <section className="rv-section">
        <h2 className="rv-section-title">Core Skills</h2>
        <div className="rv-tags">
          {topSkills.map(s => <span key={s} className="rv-tag">{s}</span>)}
        </div>
      </section>

      {/* Projects */}
      <section className="rv-section">
        <h2 className="rv-section-title">Key Projects</h2>
        <div className="rv-projects">
          {PROJECTS.map(p => {
            const projUrl = p.links && p.links.length > 0 ? p.links[0].url : '#';
            
            return (
              <div 
                key={p.num} 
                className="rv-project"
                onMouseEnter={() => setHoverCursor(true)}
                onMouseLeave={() => setHoverCursor(false)}
              >
                <div className="rv-proj-top">
                  <span className="rv-proj-title">{p.title}</span>
                  <span className={`rv-badge ${p.badgeClass}`}>{p.badge}</span>
                </div>
                <p className="rv-proj-tagline">{p.tagline}</p>
                <div className="rv-proj-metrics">
                  {p.metrics.map((m, i) => (
                    <span key={i} className="rv-metric"><strong>{m.v}</strong> {m.k}</span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px', flexWrap: 'wrap', gap: '12px' }}>
                  <div className="rv-proj-stack" style={{ flex: 1 }}>
                    {p.stack.map((s, i) => <span key={i} className="rv-stack-tag">{s}</span>)}
                  </div>
                  
                  {projUrl !== '#' && (
                    <a
                      href={projUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rv-link-btn"
                      style={{ 
                        padding: '4px 10px', 
                        fontSize: '9px',
                        border: '1px solid rgba(0, 255, 148, 0.4)', 
                        borderRadius: '3px', 
                        background: 'rgba(0, 255, 148, 0.05)', 
                        color: '#00FF94',
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                      onMouseEnter={() => setHoverCursor(true, 'EXPLORE')}
                      onMouseLeave={() => setHoverCursor(false)}
                    >
                      View GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="rv-section">
        <h2 className="rv-section-title">Experience & Education</h2>
        <div className="rv-timeline">
          {TIMELINE.filter(t => t.dot !== 'todo').map((t, i) => (
            <div key={i} className="rv-tl-item">
              <span className="rv-tl-period">{t.period}</span>
              <div>
                <div className="rv-tl-title">{t.title}</div>
                <div className="rv-tl-org">{t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="rv-section">
        <h2 className="rv-section-title">Education</h2>
        <div className="rv-edu" style={{ marginBottom: '16px' }}>
          <div className="rv-edu-main">
            <span className="rv-edu-degree">Bachelor of Computer Applications (Honours with Research)</span>
            <span className="rv-edu-inst">Symbiosis International University, Pune</span>
          </div>
          <span className="rv-edu-year">2023 — 2027</span>
        </div>

        <div className="rv-edu" style={{ marginBottom: '16px' }}>
          <div className="rv-edu-main">
            <span className="rv-edu-degree">ISC (Commerce + Computer Science) · 90%</span>
            <span className="rv-edu-inst">Hill Top School</span>
          </div>
          <span className="rv-edu-year">2023</span>
        </div>

        <div className="rv-edu">
          <div className="rv-edu-main">
            <span className="rv-edu-degree">ICSE (Computer Science) · 92%</span>
            <span className="rv-edu-inst">Hill Top School</span>
          </div>
          <span className="rv-edu-year">2021</span>
        </div>
      </section>

      <footer className="rv-footer">
        <span>Switch back to the full cinematic experience using the toggle above.</span>
      </footer>
    </motion.div>
  );
}
