import { useState, useEffect, useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

export function useGlitch(originalText: string, autoGlitchIntervalMs?: number) {
  const [text, setText] = useState(originalText);
  const isGlitching = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerGlitch = useCallback(() => {
    if (isGlitching.current) return;
    isGlitching.current = true;
    let iterations = 0;
    const maxIter = 14;

    const glitchInterval = setInterval(() => {
      const scrambled = originalText.split('').map((ch, i) => {
        if (i < iterations / 1.5) return ch;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      
      setText(scrambled);
      iterations++;

      if (iterations > maxIter) {
        setText(originalText);
        clearInterval(glitchInterval);
        isGlitching.current = false;
      }
    }, 55);
  }, [originalText]);

  useEffect(() => {
    if (autoGlitchIntervalMs) {
      intervalRef.current = setInterval(() => {
        triggerGlitch();
      }, autoGlitchIntervalMs);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoGlitchIntervalMs, triggerGlitch]);

  return { text, triggerGlitch };
}

export function useTitleGlitch(originalText: string) {
  const [text, setText] = useState(originalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerGlitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let frame = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    intervalRef.current = setInterval(() => {
      setText(originalText.split('').map((ch, i) => {
        if (ch === ' ') return ' ';
        if (i < frame / 2) return ch;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      frame++;
      
      if (frame > originalText.length * 2.2) {
        setText(originalText);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 35);
  };

  const stopGlitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(originalText);
  };

  return { text, triggerGlitch, stopGlitch };
}
