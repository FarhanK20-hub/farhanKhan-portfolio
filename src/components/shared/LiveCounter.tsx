'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface LiveCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export default function LiveCounter({ from = 0, to, duration = 2.5, suffix = '' }: LiveCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      
      // easeOutExpo for that satisfying slowdown at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = from + (to - from) * easeProgress;
      
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, from, to, duration]);

  // Format smartly based on whether 'to' is a float (like 1.9) or an integer (like 400)
  const isFloat = to % 1 !== 0;
  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}
