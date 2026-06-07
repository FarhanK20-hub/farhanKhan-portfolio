import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef || hasTriggered) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasTriggered(true);
        observer.unobserve(currentRef);
      }
    }, { threshold: 0.08, ...options });

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasTriggered, options]);

  return { ref, isInView };
}
