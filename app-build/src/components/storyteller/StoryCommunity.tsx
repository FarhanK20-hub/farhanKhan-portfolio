'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';
import { FaWhatsapp, FaDiscord, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function StoryCommunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { setHoverCursor } = useNavigation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="story-community-sec" ref={ref}>
      {/* Animated Background */}
      <div className="community-bg-anim">
        <div className="c-glow g1"></div>
        <div className="c-glow g2"></div>
      </div>
      
      <div className="community-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="community-inner"
        >
          <motion.div variants={itemVariants} className="story-sec-title" style={{ color: '#C9A84C', textAlign: 'center', marginBottom: '24px', fontSize: 'clamp(32px, 5vw, 56px)' }}>
            More Than a Creator.<br />A Community.
          </motion.div>
          
          <motion.div variants={itemVariants} className="community-desc">
            FRK Productions is building a community where filmmakers, designers, developers, photographers, editors, musicians, storytellers, and creators connect, collaborate, learn, and build meaningful projects together. Whether you're just starting out or already experienced, there's a place for you.
          </motion.div>

          <motion.div variants={itemVariants} className="community-grid">
            
            {/* WhatsApp - Primary */}
            <a 
              href="https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="comm-card primary"
              onMouseEnter={() => setHoverCursor(true, 'JOIN')}
              onMouseLeave={() => setHoverCursor(false)}
            >
              <div className="comm-icon-wrap"><FaWhatsapp /></div>
              <div className="comm-text">
                <span className="comm-title">Join WhatsApp</span>
                <span className="comm-sub">The main creative hub</span>
              </div>
              <div className="comm-arrow">→</div>
            </a>

            {/* Discord */}
            <a 
              href="https://discord.gg/HcHXWY8Rkw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="comm-card"
              onMouseEnter={() => setHoverCursor(true, 'JOIN')}
              onMouseLeave={() => setHoverCursor(false)}
            >
              <div className="comm-icon-wrap"><FaDiscord /></div>
              <div className="comm-text">
                <span className="comm-title">Join Discord</span>
                <span className="comm-sub">Collab & Resources</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/frkproductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="comm-card"
              onMouseEnter={() => setHoverCursor(true, 'FOLLOW')}
              onMouseLeave={() => setHoverCursor(false)}
            >
              <div className="comm-icon-wrap"><FaLinkedin /></div>
              <div className="comm-text">
                <span className="comm-title">LinkedIn</span>
                <span className="comm-sub">Professional Network</span>
              </div>
            </a>

            {/* Website */}
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="comm-card"
              onMouseEnter={() => setHoverCursor(true, 'VISIT')}
              onMouseLeave={() => setHoverCursor(false)}
            >
              <div className="comm-icon-wrap"><FaGlobe /></div>
              <div className="comm-text">
                <span className="comm-title">Website</span>
                <span className="comm-sub">Coming Soon</span>
              </div>
            </a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
