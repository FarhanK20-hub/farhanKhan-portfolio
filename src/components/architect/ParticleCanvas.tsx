'use client';

import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pts: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let animationFrameId: number;
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Reduced from 85 to 50 particles — O(n²) line drawing scales quadratically
    const COUNT = 50;
    const CONNECT_DIST = 100;

    for (let i = 0; i < COUNT; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.1 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Move particles
      for (let i = 0; i < COUNT; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Draw particles (batch fill)
      ctx.fillStyle = 'rgba(0,255,148,0.2)';
      for (let i = 0; i < COUNT; i++) {
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections (batch stroke)
      ctx.strokeStyle = 'rgba(0,255,148,0.04)';
      ctx.lineWidth = 0.4;
      ctx.beginPath();
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          // Avoid expensive Math.hypot — use squared distance
          if (dx * dx + dy * dy < CONNECT_DIST * CONNECT_DIST) {
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
          }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" ref={canvasRef}></canvas>;
}
