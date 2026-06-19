'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';

export default function ArchFooter() {
  const [showNotes, setShowNotes] = useState(false);
  const { setHoverCursor } = useNavigation();
  return (
    <footer className="arch-footer" style={{ paddingBottom: showNotes ? '120px' : '40px', transition: 'padding 0.8s ease' }}>
      <div className="footer-text">
        FARHAN KHAN <span className="footer-dot">·</span> BUILT WITH INTENT <span className="footer-dot">·</span> {new Date().getFullYear()}
      </div>
      <div 
        className="footer-text" 
        style={{ color: '#1a1a2a', cursor: 'none', display: 'inline-block', marginTop: '10px' }}
        onClick={() => setShowNotes(!showNotes)}
        onMouseEnter={() => setHoverCursor(true, '[ // ]')}
        onMouseLeave={() => setHoverCursor(false)}
      >
        [ // ]
      </div>

      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 40 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{
              overflow: 'hidden',
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'left'
            }}
          >
            <div style={{
              background: '#07070A',
              border: '1px solid #141420',
              padding: '32px',
              borderLeft: '2px solid #00FF94'
            }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: '#00FF94', letterSpacing: '0.2em', marginBottom: '16px' }}>
                SYSTEM.ARCHITECTURE.NOTES
              </div>
              <p style={{ fontFamily: 'var(--font-space)', fontSize: '13px', color: '#888', lineHeight: 1.8, marginBottom: '12px' }}>
                You found it. I built this portfolio to reflect how I approach software engineering: systematic, performant, and intentional.
              </p>
              <ul style={{ fontFamily: 'var(--font-space)', fontSize: '13px', color: '#777', lineHeight: 1.8, listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}><span style={{ color: '#444' }}>&gt;</span> <strong>Tech Stack:</strong> Next.js App Router for server-side optimizations, Framer Motion for GPU-accelerated micro-interactions.</li>
                <li style={{ marginBottom: '8px' }}><span style={{ color: '#444' }}>&gt;</span> <strong>Audio Engine:</strong> Instead of loading heavy MP3 files, the sounds you hear (clicks, swooshes, Jarvis boot) are synthesized natively using the Web Audio API. Zero load time.</li>
                <li style={{ marginBottom: '8px' }}><span style={{ color: '#444' }}>&gt;</span> <strong>Smart Cursor:</strong> The magnetic cursor and custom trails use requestAnimationFrame over raw React state to maintain 60fps without causing render thrashing.</li>
                <li><span style={{ color: '#444' }}>&gt;</span> <strong>Dual Persona:</strong> The split-screen architecture isolates state between the Architect (system-focused) and Storyteller (creative) experiences, ensuring modularity.</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
