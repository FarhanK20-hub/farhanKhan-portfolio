'use client';

import React, { useEffect, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { initAudio } from '@/lib/sound';

export default function GateScreen() {
  const { navigate, setHoverCursor } = useNavigation();
  const [isOn, setIsOn] = useState(true);
  const [phase, setPhase] = useState(0);

  const [messages] = useState(() => {
    const hour = new Date().getHours();
    
    if (hour === 0) {
      return ["Midnight.", "The world sleeps. You\u2019re still here."];
    } else if (hour >= 1 && hour < 4) {
      return ["Deep night.", "The quietest hours build the loudest work."];
    } else if (hour >= 4 && hour < 6) {
      return ["Almost dawn.", "First light belongs to those who didn\u2019t stop."];
    } else if (hour >= 6 && hour < 8) {
      return ["Good morning.", "The day hasn\u2019t been claimed yet."];
    } else if (hour >= 8 && hour < 11) {
      return ["Morning.", "Momentum starts with showing up."];
    } else if (hour === 11) {
      return ["Almost noon.", "Halfway there. Keep building."];
    } else if (hour === 12) {
      return ["Midday.", "The sun is overhead. So is the opportunity."];
    } else if (hour >= 13 && hour < 16) {
      return ["Afternoon.", "Good work doesn\u2019t watch the clock."];
    } else if (hour === 16) {
      return ["Late afternoon.", "The day is closing. The work isn\u2019t."];
    } else if (hour === 17) {
      return ["Dusk.", "The golden hour, for cameras and for code."];
    } else if (hour >= 18 && hour < 21) {
      return ["Good evening.", "The noise fades. Focus sharpens."];
    } else {
      return ["Night.", "Some of the best things are built in the dark."];
    }
  });

  // Time-based message phases
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2500);
    const t2 = setTimeout(() => setPhase(2), 5200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleEnter = () => {
    initAudio();
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error enabling fullscreen: ${err.message}`);
      });
    }
    navigate('main-intro');
  };

  // Morse code blink effect
  useEffect(() => {
    if (phase !== 2) return;

    const morse = [100, 200, 100, 200, 100, 600]; // S = ...
    let idx = 0;
    let timer: NodeJS.Timeout;

    const blink = () => {
      setIsOn((prev) => !prev);
      idx = (idx + 1) % morse.length;
      timer = setTimeout(blink, morse[idx] + 120);
    };

    const initialTimer = setTimeout(blink, 1000);
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timer);
    };
  }, [phase]);

  return (
    <div className="screen active" id="screen-gate">
      <div className="gate-grid"></div>
      <div className="gate-ambient"></div>
      <div className="gate-inner">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="msg0"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="gate-instruction"
              style={{ color: '#E0E0E0', fontSize: '18px', letterSpacing: '0.08em' }}
            >
              {messages[0]}
            </motion.div>
          )}
          
          {phase === 1 && (
            <motion.div
              key="msg1"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="gate-instruction"
              style={{ color: '#E0E0E0', fontSize: '18px', letterSpacing: '0.08em' }}
            >
              {messages[1]}
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div 
              key="gate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="gate-eyebrow"
              >
                SOMETHING IS LOADING.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                className="gate-line"
                style={{ opacity: isOn ? 1 : 0.1, transition: 'opacity 0.1s' }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.1 }}
                className="gate-instruction"
              >
                For the full experience, enable sound.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.4 }}
                className="gate-device-note"
              >
                Mobile compatible · Best on tablets, laptops &amp; larger screens
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.7 }}
                className="gate-cta-wrap"
              >
                <button 
                  className="gate-btn" 
                  onClick={handleEnter}
                  onMouseEnter={() => setHoverCursor(true)}
                  onMouseLeave={() => setHoverCursor(false)}
                >
                  [ ENTER ]
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 2.2 }}
                className="gate-skip"
                onClick={handleEnter}
                onMouseEnter={() => setHoverCursor(true)}
                onMouseLeave={() => setHoverCursor(false)}
              >
                NO AUDIO? CONTINUE ANYWAY →
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
