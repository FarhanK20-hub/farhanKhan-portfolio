'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';
import { useInView } from '@/hooks/useInView';
import { 
  SiDavinciresolve, 
  SiFigma, 
  SiFramer, 
  SiBlender,
  SiOpenai,
  SiAnthropic
} from 'react-icons/si';
import { FiVideo, FiFilm, FiImage, FiAperture } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { FaWandMagicSparkles, FaRobot } from 'react-icons/fa6';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const CREATIVE_TOOLS = [
  { name: 'Premiere Pro', icon: FiVideo },
  { name: 'After Effects', icon: FiFilm },
  { name: 'DaVinci Resolve', icon: SiDavinciresolve },
  { name: 'Photoshop', icon: FiImage },
  { name: 'Lightroom', icon: FiAperture },
  { name: 'Figma', icon: SiFigma },
  { name: 'Framer', icon: SiFramer },
  { name: 'Blender', icon: SiBlender },
];

const AI_TOOLS = [
  { name: 'Claude', icon: SiAnthropic },
  { name: 'ChatGPT', icon: SiOpenai },
  { name: 'Seadance Pro', icon: BsStars },
  { name: 'Higgsfield', icon: FaRobot },
  { name: 'Magnific', icon: FaWandMagicSparkles },
];

export default function StoryTools() {
  const { setHoverCursor } = useNavigation();

  return (
    <RevealOnScroll className="story-tools-sec" id="story-tools">
      <div className="story-sec-title" style={{ textAlign: 'center', marginBottom: '80px' }}>
        The Toolkit.
      </div>

      <div className="tools-container">
        {/* Creative Tools */}
        <div className="tools-group">
          <h3 className="tools-group-title">CREATIVE SUITE</h3>
          <div className="tools-grid">
            {CREATIVE_TOOLS.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={idx} 
                  className="tool-card"
                  onMouseEnter={() => setHoverCursor(true, 'TOOL')}
                  onMouseLeave={() => setHoverCursor(false)}
                >
                  <div className="tool-icon-wrap">
                    <Icon className="tool-icon" />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical Divider for desktop, horizontal for mobile */}
        <div className="tools-divider"></div>

        {/* AI Tools */}
        <div className="tools-group">
          <h3 className="tools-group-title">AI & SYNTHESIS</h3>
          <div className="tools-grid ai-grid">
            {AI_TOOLS.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={idx} 
                  className="tool-card"
                  onMouseEnter={() => setHoverCursor(true, 'AI')}
                  onMouseLeave={() => setHoverCursor(false)}
                >
                  <div className="tool-icon-wrap">
                    <Icon className="tool-icon" />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
