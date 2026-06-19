'use client';

import React, { useEffect, useRef } from 'react';

/**
 * GrainOverlay — A fixed canvas that renders subtle film grain noise.
 * OPTIMIZED: Uses a pre-rendered static grain tile and CSS animation
 * instead of per-frame pixel manipulation. Near-zero runtime cost.
 */
export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Generate a single static grain tile (no animation loop needed)
    canvas.width = 256;
    canvas.height = 256;

    const imageData = ctx.createImageData(256, 256);
    const pixels = imageData.data;

    for (let i = 0; i < 256 * 256; i++) {
      const v = (Math.random() * 255) | 0;
      const pi = i * 4;
      pixels[pi] = v;
      pixels[pi + 1] = v;
      pixels[pi + 2] = v;
      pixels[pi + 3] = 18;
    }

    ctx.putImageData(imageData, 0, 0);
    // No animation loop — CSS handles the subtle movement via background-position animation
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="grain-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.035,
        mixBlendMode: 'overlay',
      }}
    />
  );
}
