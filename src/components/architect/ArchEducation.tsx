'use client';

import React from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { useNavigation } from '@/context/NavigationContext';
import { useTitleGlitch } from '@/hooks/useGlitch';
import { CERTIFICATES } from '@/lib/data';

export default function ArchEducation() {
  const { setHoverCursor } = useNavigation();
  const { text: titleText, triggerGlitch, stopGlitch } = useTitleGlitch('The Foundation');

  return (
    <RevealOnScroll className="arch-sec bg-surface" id="arch-education">
      <div className="sec-eyebrow">05 — EDUCATION</div>
      <div
        className="sec-title-arch"
        onMouseEnter={triggerGlitch}
        onMouseLeave={stopGlitch}
      >
        {titleText}
      </div>
      <div className="sec-rule"></div>

      {/* University */}
      <div className="edu-card">
        <div className="edu-top">
          <div>
            <div className="edu-inst">Symbiosis International University</div>
            <div className="edu-degree">Bachelor of Computer Applications (Honours with Research)</div>
          </div>
          <div className="edu-year">2023 — 2027</div>
        </div>

        <div className="edu-rule"></div>

        <div className="edu-spec-tags">
          {[
            'Artificial Intelligence',
            'Machine Learning',
            'Cloud Computing',
            'Software Engineering',
          ].map(tag => (
            <div
              key={tag}
              className="edu-tag"
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="edu-courses">
          {[
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Database Management Systems',
            'Operating Systems',
            'Computer Networks',
            'Software Engineering',
            'Cloud Computing',
            'Machine Learning',
          ].map(course => (
            <div key={course} className="edu-course">{course}</div>
          ))}
        </div>
      </div>

      {/* Certificates — all sourced from data.ts */}
      <div className="certs-section">
        {/* All certs (excluding internships) in a tight grid */}
        <div className="cert-row">
          {CERTIFICATES.filter(c => c.category !== 'Internship').map(item => (
            <div
              key={item.name}
              className="cert-card"
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
            >
              <div className="cert-name">{item.name}</div>
              <div className="cert-issuer">{item.issuer} · {item.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Education */}
      <div className="edu-history">
        <div className="edu-history-title">Previous Academic Milestones</div>

        {/* ISC */}
        <div className="edu-history-card">
          <div className="edu-history-card-left">
            <div className="edu-history-school">Hill Top School</div>
            <div className="edu-history-board">ISC · Commerce &amp; Computer Science</div>
          </div>
          <div className="edu-history-card-right">
            <div className="edu-history-grade">90%</div>
            <div className="edu-history-year">2023</div>
          </div>
        </div>

        {/* ICSE */}
        <div className="edu-history-card">
          <div className="edu-history-card-left">
            <div className="edu-history-school">Hill Top School</div>
            <div className="edu-history-board">ICSE · Computer Science</div>
          </div>
          <div className="edu-history-card-right">
            <div className="edu-history-grade">92%</div>
            <div className="edu-history-year">2021</div>
          </div>
        </div>
      </div>

      <div
        style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, #0d0d18 20%, #0d0d18 80%, transparent)',
          opacity: 0.6,
          marginTop: '64px',
        }}
      />
    </RevealOnScroll>
  );
}
