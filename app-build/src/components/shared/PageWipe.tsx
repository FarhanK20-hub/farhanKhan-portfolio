'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';

export default function PageWipe() {
  const { isWiping } = useNavigation();

  return (
    <motion.div
      id="page-wipe"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: isWiping ? 1 : 0 }}
      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      style={{
        originY: isWiping ? 1 : 0 // Bottom when entering, top when exiting
      }}
    />
  );
}
