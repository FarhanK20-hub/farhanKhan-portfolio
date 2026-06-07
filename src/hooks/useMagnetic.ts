import { useEffect, useRef } from 'react';

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.18;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0,0)';
      el.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
      setTimeout(() => {
        if(el) el.style.transition = '';
      }, 400);
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return ref;
}
