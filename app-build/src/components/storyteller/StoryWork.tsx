/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { WORK_ITEMS, WORK_TABS_LIST } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';
import { WorkItem } from '@/types';


/* ════════════════════════════════════════════
   CUSTOM VIDEO PLAYER
   Uses YouTube Iframe API to toggle mute while hiding all native controls
════════════════════════════════════════════ */
function VideoPlayer({ videoId, title }: { videoId: string, title: string }) {
  const [isMuted, setIsMuted] = React.useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const func = isMuted ? 'unMute' : 'mute';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: [] }), '*');
      setIsMuted(!isMuted);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&enablejsapi=1&disablekb=1&modestbranding=1&playsinline=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
      />
      <button 
        onClick={toggleMute}
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(201,168,76,0.3)',
          color: '#C9A84C',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'background 0.3s, border-color 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.8)';
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
        }}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        )}
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════
   STACKED PHOTO LAYOUT — Cinematography & Photography
   Scattered photographs that lift on hover
════════════════════════════════════════════ */
const photoTransforms = [
  { x: '2%',  y: '0px',   rotate: -4.5, scale: 1 },
  { x: '28%', y: '30px',  rotate: 3.2,  scale: 1.02 },
  { x: '55%', y: '-10px', rotate: -2.1, scale: 0.98 },
  { x: '78%', y: '45px',  rotate: 5.8,  scale: 1 },
];

function StackedPhotoLayout({ items }: { items: WorkItem[] }) {
  const { setHoverCursor } = useNavigation();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [topZ, setTopZ] = useState(10);
  
  const isImageTab = items.length > 0 && (items[0].tab === 'Photography' || items[0].tab === 'CoverArt');

  const handlePhotoHover = (idx: number) => {
    setActiveIdx(idx);
    setTopZ(prev => prev + 1);
    setHoverCursor(true);
  };

  const handlePhotoLeave = () => {
    setActiveIdx(null);
    setHoverCursor(false);
  };

  return (
    <div 
      className="photos-scattered-container"
      style={isImageTab ? { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' } : {}}
    >
      {items.map((w, i) => {
        const t = photoTransforms[i % photoTransforms.length];
        const isActive = activeIdx === i;

        return (
          <motion.div
            key={i}
            className={`scattered-photo ${isActive ? 'active' : ''}`}
            initial={{ opacity: 0, y: 40, rotate: t.rotate }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: isActive ? 0 : t.rotate,
              scale: isActive && isImageTab ? 1.5 : isActive ? 1.08 : t.scale,
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              rotate: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            style={{
              zIndex: isActive ? topZ : i + 1,
              width: isImageTab ? '20%' : 'auto',
              minWidth: isImageTab ? '120px' : 'auto',
            }}
            onMouseEnter={() => handlePhotoHover(i)}
            onMouseLeave={handlePhotoLeave}
          >
            {/* Photo border (like a physical print) */}
            <div className="photo-print" style={{ padding: isImageTab ? '6px' : undefined }}>
              <div 
                className="photo-surface" 
                style={{ 
                  background: w.grad, 
                  aspectRatio: w.image ? 'auto' : '3 / 2' 
                }}
              >
                {w.videoId ? (
                  <VideoPlayer videoId={w.videoId} title={w.title} />
                ) : w.image ? (
                  <img 
                    src={w.image} 
                    alt={w.title} 
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                  />
                ) : (
                  <>
                    <div className="photo-grain" />
                    <div className="photo-light-leak" />
                  </>
                )}
              </div>

              {/* Bottom info strip like a darkroom note */}
              {!isImageTab && (
                <div className="photo-caption">
                  <div className="photo-title-line">
                    <span className="photo-title">{w.title}</span>
                  </div>
                  <div className="photo-desc">{w.desc}</div>
                  {w.metrics && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                      {w.metrics.map((m, idx) => (
                        <span key={idx} style={{ 
                          fontFamily: 'var(--font-jetbrains)', 
                          fontSize: '9px', 
                          color: '#8a8070', 
                          border: '1px solid rgba(201,168,76,0.2)', 
                          padding: '4px 8px', 
                          borderRadius: '4px',
                          letterSpacing: '0.05em',
                          background: 'rgba(201,168,76,0.03)'
                        }}>
                          <strong style={{ color: '#C9A84C', fontWeight: 600 }}>{m.v}</strong> {m.k}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Category stamp */}
            {!isImageTab && <div className="photo-stamp">{w.cat}</div>}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════ */
export default function StoryWork() {
  const { setHoverCursor } = useNavigation();
  const [activeTab, setActiveTab] = useState(WORK_TABS_LIST[0]);

  const filteredItems = WORK_ITEMS.filter(w => w.tab === activeTab);

  return (
    <RevealOnScroll className="story-sec">
      <div className="story-eyebrow">02 — WORK</div>
      <div className="story-sec-title">Selected Work</div>
      <div className="story-rule" />

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
            {activeTab === tab && (
              <motion.div
                layoutId="work-tab-underline"
                className="work-tab-underline"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ marginTop: '36px' }}
        >
          <StackedPhotoLayout items={filteredItems} />
        </motion.div>
      </AnimatePresence>
    </RevealOnScroll>
  );
}
