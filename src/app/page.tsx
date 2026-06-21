'use client';

import React, { useEffect, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import GateScreen from '@/components/gate/GateScreen';
import MainIntro from '@/components/intro/MainIntro';
import StoryIntro from '@/components/intro/StoryIntro';
import SelectScreen from '@/components/select/SelectScreen';
import ArchitectPage from '@/components/architect/ArchitectPage';
import StorytellerPage from '@/components/storyteller/StorytellerPage';
import RadioWidget from '@/components/shared/RadioWidget';

export default function Home() {
  const { screen } = useNavigation();
  const [easterEgg, setEasterEgg] = useState<'arch' | 'story' | null>(null);

  // Easter egg listener
  useEffect(() => {
    let typed = '';
    const secret = 'farhan';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (screen !== 'architect' && screen !== 'storyteller') return;
      if (!e.key) return;

      typed += e.key.toLowerCase();
      if (typed.length > secret.length) {
        typed = typed.slice(-secret.length);
      }

      if (typed === secret) {
        setEasterEgg(screen === 'architect' ? 'arch' : 'story');
        typed = '';
        setTimeout(() => setEasterEgg(null), 3200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen]);

  return (
    <>
      {screen === 'gate' && <GateScreen />}
      {screen === 'main-intro' && <MainIntro />}
      {screen === 'select' && <SelectScreen />}
      {screen === 'story-intro' && <StoryIntro />}
      {screen === 'architect' && <ArchitectPage />}
      {screen === 'storyteller' && <StorytellerPage />}

      {/* Persistent Music Player */}
      {(screen === 'architect' || screen === 'storyteller') && <RadioWidget />}

      {/* Easter Egg Popup */}
      {easterEgg && (
        <div 
          id="easter-egg"
          style={{
            color: easterEgg === 'arch' ? '#00FF94' : '#C9A84C',
            borderColor: easterEgg === 'arch' ? '#00FF9440' : '#C9A84C40',
            fontFamily: easterEgg === 'arch' ? 'var(--font-jetbrains)' : 'var(--font-cormorant)',
            animation: 'fadeUp 0.4s ease forwards',
          }}
        >
          {easterEgg === 'arch' ? (
            <>
              &gt; farhan.exe found<br/>
              <span style={{ color: '#444', fontSize: '10px' }}>You found the easter egg. Nice.</span>
            </>
          ) : (
            <>
              <em>You found me.</em><br/>
              <span style={{ fontSize: '11px', color: '#3D3025', fontStyle: 'italic' }}>Every detail is intentional.</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
