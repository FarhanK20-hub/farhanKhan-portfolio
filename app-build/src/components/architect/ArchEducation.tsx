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
      <div className="sec-eyebrow">04 — EDUCATION</div>
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
            'Web Technologies',
            'Computational Thinking',
            'Communication Skills',
            'Introduction to Python Programming',
            'Yoga and Mental Health',
            'Integrated Disaster Management',
            'Digital Design Tools - Visual Media',
            'Relational Database Management Systems',
            'Data Structures and Algorithms',
            'Creative Writing',
            'Server Side Web Technology',
            'Yoga Therapy Principles and Practices',
            'Fitness for Life',
            'Consumer Behaviour',
            'Operating Systems',
            'Structured Query Language',
            'Network Essentials',
            'Innovation Management',
            'Software Engineering',
            'Business and Managerial Communication',
            'Data Analysis using Python',
            'Core Environmental Studies',
            'Film, Documentary and TV Appreciation',
            'Introduction to Cloud Computing',
            'Foundation of Data Warehousing and Data Mining',
            'Internet of Things',
            'Service Learning',
            'Java Programming',
            'Network Security Essentials',
            'Vasudhaiva Kutumbakam',
            'Basics of Java Enterprise Technology',
            'Mathematics Foundation',
            'Fog Computing and Edge Computing',
            'Cloud Administration and Management',
            'Introduction to Web Services',
            'Introduction to Best Programming Practices',
            'Research Methodology',
            'Cloud Applications for Business Process',
            'Cloud Architecture and Security',
            'Mobile Programming',
            'Emotional Well Being',
            'Scientific Paper Writing',
            'Literature Review',
            'R Programming',
            'Ethics in Research'
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
