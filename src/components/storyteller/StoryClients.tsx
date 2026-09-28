/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { useNavigation } from '@/context/NavigationContext';
import LiveCounter from '@/components/shared/LiveCounter';

const ALL_LOGOS: { src: string; name: string; size: 'lg' | 'md' | 'sm'; invert?: boolean }[] = [
  { src: '/logos/knorrbremse.png',            name: 'Knorr-Bremse',      size: 'lg' },
  { src: '/logos/JK Cement.png',              name: 'JK Cement',         size: 'lg' },
  { src: '/logos/Navneet-Logo-Name_2-1.png',  name: 'Navneet',           size: 'lg' },
  { src: '/logos/Beyoung.png',                name: 'Beyoung',           size: 'lg' },
  { src: '/logos/Fast&Up.png',               name: 'Fast&Up',           size: 'lg' },
  { src: '/logos/Kenzo.png',                  name: 'Kenzo',             size: 'lg' },
  { src: '/logos/sabkadentist.png',           name: 'Sabka Dentist',     size: 'lg' },
  { src: '/logos/airavat.png',               name: 'Airavat',           size: 'md' },
  { src: '/logos/Skin Inspired.png',          name: 'Skin Inspired',     size: 'md' },
  { src: '/logos/pitjam.PNG',                name: 'Pit Jam',           size: 'md' },
  { src: '/logos/Dogue.png',                 name: 'Dogue',             size: 'md' },
  { src: '/logos/The Pet Partner.png',        name: 'The Pet Partner',   size: 'md' },
  { src: '/logos/K Nutrition.png',            name: 'K Nutrition',       size: 'md' },
  { src: '/logos/NOURRIR.png',               name: 'Nourrir',           size: 'md', invert: true },
  { src: '/logos/COBC.png',                  name: 'COBC',              size: 'md' },
  { src: '/logos/Plaques Wall.png',           name: 'Plaques Wall',      size: 'md' },
  { src: '/logos/Project 831 Jamshedpur.png', name: 'Project 831',       size: 'md' },
  { src: '/logos/18 craft media.jpg',         name: '18 Craft Media',    size: 'sm' },
  { src: '/logos/challengefitness.png',       name: 'Challenge Fitness', size: 'sm' },
  { src: '/logos/Kita P L A N S.png',        name: 'Kita P L A N S',   size: 'sm' },
  { src: '/logos/Kita.png',                  name: 'Kita',              size: 'sm' },
  { src: '/logos/Panache 26 SPSU.png',        name: 'Panache 26',        size: 'sm' },
  { src: '/logos/shark fitness.png',          name: 'Shark Fitness',     size: 'sm' },
  { src: '/logos/taiso fitness.png',          name: 'Taiso Fitness',     size: 'sm' },
  { src: '/logos/tarnado fitness.png',        name: 'Tarnado Fitness',   size: 'sm' },
];

const headliners = ALL_LOGOS.filter(l => l.size === 'lg');
const rest       = ALL_LOGOS.filter(l => l.size !== 'lg');

export default function StoryClients() {
  const { setHoverCursor } = useNavigation();
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent, name: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const panelRect = (e.currentTarget as HTMLElement).closest('.clients-panel')!.getBoundingClientRect();
    setHoveredName(name);
    setTooltipPos({
      x: rect.left + rect.width / 2 - panelRect.left,
      y: rect.top - panelRect.top - 10,
    });
    setHoverCursor(true);
  };

  const handleMouseLeave = () => {
    setHoveredName(null);
    setHoverCursor(false);
  };

  const LogoItem = ({ item }: { item: typeof ALL_LOGOS[0] }) => (
    <div
      className={`logo-item logo-item--${item.size}`}
      onMouseEnter={(e) => handleMouseEnter(e, item.name)}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={item.src}
        alt={item.name}
        className={`logo-img${item.invert ? ' logo-img--invert' : ''}`}
      />
    </div>
  );

  return (
    <RevealOnScroll className="story-sec clients-sec-wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="story-eyebrow" style={{ textAlign: 'center', marginBottom: '10px' }}>03 — COLLABORATIONS</div>
      <div style={{ textAlign: 'center', marginBottom: '48px', color: '#C9A84C' }}>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 5vw, 58px)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <div><LiveCounter to={2} />M+ <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(11px, 1.8vw, 15px)', fontStyle: 'normal', letterSpacing: '0.15em', opacity: 0.8, verticalAlign: 'middle' }}>VIEWS</span></div>
          <span style={{ opacity: 0.3, fontFamily: 'var(--font-inter)', fontSize: '22px', fontStyle: 'normal' }}>&amp;</span>
          <div><LiveCounter to={30} />K+ <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(11px, 1.8vw, 15px)', fontStyle: 'normal', letterSpacing: '0.15em', opacity: 0.8, verticalAlign: 'middle' }}>FOLLOWERS</span></div>
        </div>
        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.4, marginTop: '16px' }}>
          Across FRK Productions Collaborations
        </div>
      </div>

      <div className="clients-panel">
        <div className="clients-panel__label">Brands I&apos;ve worked with</div>

        {/* React-state tooltip */}
        {hoveredName && (
          <div
            className="logo-tooltip-popup"
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            {hoveredName}
          </div>
        )}

        <div className="clients-row clients-row--headliners">
          {headliners.map((item, i) => <LogoItem key={i} item={item} />)}
        </div>
        <div className="clients-divider" />
        <div className="clients-row clients-row--rest">
          {rest.map((item, i) => <LogoItem key={i} item={item} />)}
        </div>
      </div>
    </RevealOnScroll>
  );
}