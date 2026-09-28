'use client';

import React from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { CLIENT_EDITS_LIST } from '@/lib/data';
import { useNavigation } from '@/context/NavigationContext';
import VideoPlayer from './VideoPlayer';
import '@/index.css';

export default function StoryClientEdits() {
  const { setHoverCursor } = useNavigation();

  return (
    <RevealOnScroll className="story-sec client-edits-sec" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '12px' }} className="story-eyebrow">
        04 — CLIENT WORK
      </div>
      <div className="story-sec-title" style={{ textAlign: 'center', marginBottom: '80px' }}>
        Real Brands.{' '}
        <span style={{ color: '#C9A84C', fontStyle: 'italic', fontFamily: 'var(--font-cormorant)' }}>
          Real Results.
        </span>
      </div>

      <div className="client-edits-grid">
        {CLIENT_EDITS_LIST.map((edit, idx) => (
          <div
            key={idx}
            className="client-edit-card"
            style={{ background: edit.grad }}
            onMouseEnter={() => setHoverCursor(true)}
            onMouseLeave={() => setHoverCursor(false)}
          >
            {edit.videoId && (
              <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
                <VideoPlayer videoId={edit.videoId} title={edit.title} />
              </div>
            )}
            
            {/* Gradient overlay to ensure text remains readable */}
            {edit.videoId && (
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }} />
            )}

            <div className="edit-card-inner" style={{ zIndex: 2, pointerEvents: 'none' }}>
              <div className="edit-client-name">{edit.client}</div>
              <h3 className="edit-title">{edit.title}</h3>
              <p className="edit-desc">{edit.desc}</p>
            </div>
            
            <div className="edit-card-glow" style={{ pointerEvents: 'none' }}></div>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}