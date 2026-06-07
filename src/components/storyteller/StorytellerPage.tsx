'use client';

import React, { useEffect, useState } from 'react';
import StoryHero from './StoryHero';
import StoryAbout from './StoryAbout';
import StoryReel from './StoryReel';
import StoryWork from './StoryWork';
import StoryClients from './StoryClients';
import StoryContact from './StoryContact';
import StoryFooter from './StoryFooter';
import { useNavigation } from '@/context/NavigationContext';

export default function StorytellerPage() {
  const { navigate, setHoverCursor } = useNavigation();

  // Back nav scroll hide
  const [showBack, setShowBack] = useState(true);
  useEffect(() => {
    const handleScroll = () => setShowBack(window.scrollY <= 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="page-storyteller" className="active" style={{ display: 'block' }}>
      <div className="letterbox lb-top"></div>
      <div className="letterbox lb-bottom"></div>
      
      <div 
        className="back-story" 
        onClick={() => navigate('select')}
        onMouseEnter={() => setHoverCursor(true)}
        onMouseLeave={() => setHoverCursor(false)}
        style={{ opacity: showBack ? 1 : 0, pointerEvents: showBack ? 'auto' : 'none' }}
      >
        RETURN TO SELECTION
      </div>
      
      <StoryHero />
      <StoryAbout />
      <StoryReel />
      <StoryWork />
      <StoryClients />
      <StoryContact />
      <StoryFooter />
    </div>
  );
}
