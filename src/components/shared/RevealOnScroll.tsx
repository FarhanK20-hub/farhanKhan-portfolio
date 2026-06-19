'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  id?: string;
}

export default function RevealOnScroll({ children, className = '', delay = 0, style, id }: RevealOnScrollProps) {
  const { ref, isInView } = useInView({ threshold: 0.08 });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
