'use client';

import React, { useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { WORK_ITEMS, WORK_TABS_LIST } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';

export default function StoryWork() {
  const { setHoverCursor } = useNavigation();
  const [activeTab, setActiveTab] = useState(WORK_TABS_LIST[0]);

  return (
    <RevealOnScroll className="story-sec">
      <div className="story-eyebrow">03 — WORK</div>
      <div className="story-sec-title">Selected Work</div>
      <div className="story-rule"></div>
      
      <div className="work-tabs">
        {WORK_TABS_LIST.map((tab) => (
          <div 
            key={tab}
            className={`work-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={() => setHoverCursor(true)}
            onMouseLeave={() => setHoverCursor(false)}
          >
            {tab}
          </div>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab} // Force re-render grid on tab change
          className="work-grid"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            exit: { opacity: 0, transition: { duration: 0.2 } }
          }}
        >
          {WORK_ITEMS.map((w, i) => (
            <motion.div 
              key={i} 
              className="work-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              onMouseEnter={(e) => {
                setHoverCursor(true);
                const inner = e.currentTarget.querySelector('.wc-inner') as HTMLElement;
                if (inner) inner.style.transition = 'transform 0.15s ease';
              }}
              onMouseLeave={(e) => {
                setHoverCursor(false);
                const inner = e.currentTarget.querySelector('.wc-inner') as HTMLElement;
                if (inner) {
                  inner.style.transition = 'transform 0.5s ease';
                  inner.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
                  setTimeout(() => { if (inner) inner.style.transition = ''; }, 500);
                }
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                const inner = card.querySelector('.wc-inner') as HTMLElement;
                if (inner) {
                  inner.style.transform = `scale(1.05) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
                }
              }}
            >
              <div className="wc-inner">
                <div className="wc-bg" style={{ background: w.grad }}></div>
                <div className="wc-overlay"></div>
              </div>
              <div className="wc-cat">{w.cat}</div>
              <div className="wc-title">{w.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </RevealOnScroll>
  );
}
