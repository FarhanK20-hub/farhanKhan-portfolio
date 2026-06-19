'use client';

import React, { useEffect } from 'react';
import ArchHero from './ArchHero';
import ArchAbout from './ArchAbout';
import ArchProjects from './ArchProjects';
import ArchTimeline from './ArchTimeline';
import ArchEducation from './ArchEducation';
import ArchContact from './ArchContact';
import ArchFooter from './ArchFooter';
import { useNavigation } from '@/context/NavigationContext';
import { motion, AnimatePresence } from 'framer-motion';
import ArchEntrance from './ArchEntrance';
import AIAssistant from '../shared/AIAssistant';
import { useSecretCode } from '@/hooks/useSecretCode';
import RecruiterView from './RecruiterView';

import FarhanOS from './FarhanOS';

export default function ArchitectPage() {
  const { navigate, setHoverCursor } = useNavigation();
  const [entranceDone, setEntranceDone] = React.useState(false);
  const [recruiterMode, setRecruiterMode] = React.useState(false);
  const [osActive, setOsActive] = React.useState(false);

  // Secret triggers
  const triggeredHire = useSecretCode('hire farhan');
  const triggeredOS = useSecretCode('boot os');

  useEffect(() => {
    if (triggeredHire) {
      const a = document.createElement('a');
      a.href = '/resume-placeholder.pdf';
      a.download = 'Farhan_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }, [triggeredHire]);

  useEffect(() => {
    if (triggeredOS) {
      setTimeout(() => setOsActive(true), 0);
    }
    
    // Fallback/Custom event listener for the terminal
    const handleCustomTrigger = () => setOsActive(true);
    window.addEventListener('TRIGGER_OS', handleCustomTrigger);
    return () => window.removeEventListener('TRIGGER_OS', handleCustomTrigger);
  }, [triggeredOS]);

  // Console hint
  useEffect(() => {
    console.log(
      '%c[SYSTEM MESSAGE]\n%cLooking under the hood? Good.\nType "hire farhan" anywhere to unlock my resume.\nType "boot os" to access my neural net.\nCheck the footer for architecture notes.',
      'color: #00FF94; font-weight: bold; font-size: 14px;',
      'color: #888; font-size: 12px; line-height: 1.5;'
    );
  }, []);

  // Bottom mobile nav
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const sections = ['arch-about', 'arch-skills', 'arch-projects', 'arch-timeline'];
    const nav = document.createElement('div');
    nav.id = 'mobile-nav';
    nav.style.cssText = `
      position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
      z-index:60;display:flex;gap:8px;align-items:center;
      background:rgba(10,10,15,0.9);border:1px solid #141420;
      padding:10px 16px;backdrop-filter:blur(12px);
    `;

    sections.forEach((id) => {
      const dot = document.createElement('div');
      dot.style.cssText = `
        width:5px;height:5px;border-radius:50%;background:#1a1a2a;
        transition:background 0.3s,transform 0.3s;
      `;
      dot.dataset.section = id;
      nav.appendChild(dot);
    });

    const page = document.getElementById('page-architect');
    if (page) page.appendChild(nav);

    const handleScroll = () => {
      const dots = nav.querySelectorAll('div');
      dots.forEach(dot => {
        const sec = document.getElementById(dot.dataset.section || '');
        if (!sec) return;
        const r = sec.getBoundingClientRect();
        if (r.top < window.innerHeight / 2 && r.bottom > window.innerHeight / 2) {
          dot.style.background = '#00FF94';
          dot.style.transform = 'scale(1.4)';
        } else {
          dot.style.background = '#1a1a2a';
          dot.style.transform = 'scale(1)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (page && nav.parentNode) page.removeChild(nav);
    };
  }, []);

  // Back nav scroll hide
  const [showBack, setShowBack] = React.useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setShowBack(window.scrollY <= 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="page-architect" className="active" style={{ display: 'block' }}>
      {!entranceDone && <ArchEntrance onComplete={() => setEntranceDone(true)} />}

      {/* Top Toggles */}
      {entranceDone && (
        <motion.div
          className="recruiter-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="toggle-row">
            <span className="recruiter-toggle-label">RECRUITER MODE</span>
            <button
              className={`recruiter-toggle-switch ${recruiterMode ? 'active' : ''}`}
              onClick={() => { setRecruiterMode(prev => !prev); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onMouseEnter={() => setHoverCursor(true, recruiterMode ? 'CINEMATIC' : 'FAST')}
              onMouseLeave={() => setHoverCursor(false)}
              aria-label="Toggle recruiter mode"
            >
              <span className="recruiter-toggle-knob" />
            </button>
          </div>

          <div className="toggle-row">
            <span className="recruiter-toggle-label">OS MODE</span>
            <button
              onClick={() => setOsActive(true)}
              onMouseEnter={() => setHoverCursor(true, 'BOOT')}
              onMouseLeave={() => setHoverCursor(false)}
              style={{
                background: 'rgba(0, 255, 148, 0.1)',
                border: '1px solid rgba(0, 255, 148, 0.4)',
                color: '#00FF94',
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '9px',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'none',
                letterSpacing: '0.2em',
                transition: 'all 0.3s'
              }}
            >
              INITIALIZE
            </button>
          </div>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {recruiterMode ? (
          <RecruiterView key="recruiter" />
        ) : (
          <motion.div
            key="cinematic"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ 
              opacity: entranceDone ? 1 : 0,
              scale: entranceDone ? 1 : 0.95,
              filter: entranceDone ? 'blur(0px)' : 'blur(10px)'
            }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ pointerEvents: entranceDone ? 'auto' : 'none' }}
          >
            <div 
              className="back-arch" 
              onClick={() => navigate('select')}
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
              style={{ opacity: showBack ? 1 : 0, pointerEvents: showBack ? 'auto' : 'none' }}
            >
              SELECT
            </div>
            <ArchHero />
            <ArchAbout />
            <ArchProjects />
            <ArchTimeline />
            <ArchEducation />
            <ArchContact />
            <ArchFooter />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed overlays: outside animated wrapper so position:fixed works correctly */}
      {entranceDone && <AIAssistant />}
      
      {/* Hidden OS Mode */}
      <AnimatePresence>
        {osActive && <FarhanOS onClose={() => setOsActive(false)} />}
      </AnimatePresence>
    </div>
  );
}
