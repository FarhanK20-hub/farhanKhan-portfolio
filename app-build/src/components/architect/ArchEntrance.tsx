'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playStartupSound } from '@/lib/sound';

export default function ArchEntrance({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence timing
    const t1 = setTimeout(() => setStep(1), 800);  // "Most people build projects."
    const t2 = setTimeout(() => setStep(2), 3200); // Pause, then "I build systems."
    const t3 = setTimeout(() => {
      setStep(3);
      playStartupSound();
    }, 5500); // Fade out entrance & play boot sound
    const t4 = setTimeout(() => onComplete(), 6500); // Mount main content fully

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#050505',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '1.25rem',
            letterSpacing: '0.05em'
          }}
        >
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ 
              opacity: step >= 1 ? 1 : 0,
              filter: step >= 1 ? 'blur(0px)' : 'blur(10px)'
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ marginBottom: '1.5rem', color: '#888' }}
          >
            Most people build projects.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ 
              opacity: step >= 2 ? 1 : 0,
              filter: step >= 2 ? 'blur(0px)' : 'blur(10px)'
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ color: '#00FF94', fontWeight: 'bold' }}
          >
            I build systems.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
