'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ScreenState } from '@/types';
import { playHoverSound } from '@/lib/sound';

export type CursorState = 'default' | 'hover' | 'link' | 'camera';

interface NavigationContextType {
  screen: ScreenState;
  navigate: (target: ScreenState) => void;
  isWiping: boolean;
  setHoverCursor: (isHovering: boolean, text?: string) => void;
  hoverText: string | null;
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<ScreenState>('gate');
  const [isWiping, setIsWiping] = useState(false);
  const [nextScreen, setNextScreen] = useState<ScreenState | null>(null);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [cursorState, setCursorState] = useState<CursorState>('default');

  const navigate = (target: ScreenState) => {
    if (target === screen) return;
    setIsWiping(true);
    setNextScreen(target);
  };

  useEffect(() => {
    if (isWiping && nextScreen) {
      const wipeInTimer = setTimeout(() => {
        setScreen(nextScreen);
        window.scrollTo(0, 0);
        setIsWiping(false);
        setNextScreen(null);
      }, 550); // Matches the wipe in duration

      return () => clearTimeout(wipeInTimer);
    }
  }, [isWiping, nextScreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (screen === 'architect' || screen === 'storyteller')) {
        navigate('select');
      }
      if (e.key === ' ' && screen === 'gate') {
        e.preventDefault();
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
        navigate('main-intro');
      }
      if (e.key === ' ' && screen === 'main-intro') {
        e.preventDefault();
        navigate('select');
      }
      if (e.key === ' ' && screen === 'story-intro') {
        e.preventDefault();
        navigate('storyteller');
      }
      if (screen === 'select') {
        if (e.key.toLowerCase() === 'a') navigate('architect');
        if (e.key.toLowerCase() === 's') navigate('story-intro');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen]);

  // Body classes for cursor theme (arch vs story)
  useEffect(() => {
    document.body.className = '';
    if (screen === 'storyteller' || screen === 'story-intro') {
      document.body.classList.add('cursor-story');
    } else {
      document.body.classList.add('cursor-arch');
    }
  }, [screen]);

  const setHoverCursor = (isHovering: boolean, text?: string) => {
    if (isHovering) {
      playHoverSound();
      if (text) {
        setCursorState('link');
        setHoverText(text);
      } else {
        setCursorState('hover');
      }
    } else {
      setCursorState('default');
      setHoverText(null);
    }
  };

  return (
    <NavigationContext.Provider value={{ screen, navigate, isWiping, setHoverCursor, hoverText, cursorState, setCursorState }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

