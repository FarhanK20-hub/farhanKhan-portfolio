'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';
import { sendContactForm } from '@/lib/emailjs';
import { playProjectOpenSound } from '@/lib/sound';

export default function StoryContact() {
  const { setHoverCursor, setCursorState } = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });
  
  const [btnText, setBtnText] = useState('SEND MESSAGE');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setBtnText('SENDING…');

    try {
      await sendContactForm(formRef.current, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_STORY || '');
      playProjectOpenSound();
      setBtnText('SENT SUCCESSFULLY');
      formRef.current.reset();
    } catch (error: unknown) {
      const emailErr = error as { status?: number; text?: string };
      console.error('EmailJS Error:', emailErr?.status, emailErr?.text, error);
      setBtnText('FAILED TO SEND');
    } finally {
      setTimeout(() => {
        setBtnText('SEND MESSAGE');
        setIsSubmitting(false);
      }, 3000);
    }
  };

  const handleCopyEmail = () => {
    playProjectOpenSound();
    navigator.clipboard.writeText('devrevolutionx@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={containerRef} className="story-sec contact-sec-wrap">
      <motion.div
        className="contact-cinematic-wipe"
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0% 0 0 0)' } : { clipPath: 'inset(100% 0 0 0)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="story-eyebrow">04 — CONNECT</div>
        <div className="story-sec-title">Let&apos;s talk vision.</div>
        <div className="story-rule"></div>
        
        <div className="story-contact-grid">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="sf-row">
              <label className="sf-label">Your Name</label>
              <input className="sf-input" type="text" name="user_name" placeholder="How shall I address you?" required />
            </div>
            <div className="sf-row">
              <label className="sf-label">Your Email</label>
              <input className="sf-input" type="email" name="user_email" placeholder="Where can I reach you?" required />
            </div>
            <div className="sf-row">
              <label className="sf-label">Mobile</label>
              <input className="sf-input" type="tel" name="user_mobile" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="sf-row">
              <label className="sf-label">Subject</label>
              <input className="sf-input" type="text" name="user_subject" placeholder="What's on your mind?" required />
            </div>
            <div className="sf-row">
              <label className="sf-label">Project Details</label>
              <textarea className="sf-input" name="message" placeholder="Tell me about the story…" required></textarea>
            </div>
            <button 
              type="submit" 
              className="btn-story"
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.6 : 1 }}
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
            >
              {btnText}
            </button>
          </form>

          <div className="credits-col">
            <div className="story-info-block">
              <div className="credit-line">
                <span className="credit-role">Location</span>
                <span className="credit-name">Pune, India</span>
              </div>
              <div className="credit-line">
                <span className="credit-role">Availability</span>
                <span className="credit-name">Booking for Q4 {new Date().getFullYear()}</span>
              </div>
              <div className="credit-line" style={{ marginTop: '24px' }}>
                <span className="credit-role">Direct</span>
                <span 
                  className="credit-name email-copy" 
                  onClick={handleCopyEmail}
                  onMouseEnter={() => {
                    setCursorState('link');
                    // We don't set text here because we want the standard dot expansion, but maybe text is good
                  }}
                  onMouseLeave={() => setCursorState('default')}
                >
                  devrevolutionx@gmail.com {copied && <span className="copied-toast">Copied!</span>}
                </span>
              </div>
            </div>
            
            <div className="story-socials" style={{ marginTop: '48px' }}>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 300, color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>Follow the Journey</div>
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/_farhan.who_/', stats: '1.7k+ Followers / 1.9M+ Views' },
                { name: 'GitHub', url: 'https://github.com/FarhanK20-hub', stats: '100+ Contributions / 4+ SaaS' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/farhan-khan-3aa5442b0/', stats: '1.5k+ Followers / 43k+ Impressions' }
              ].map(soc => (
                <a 
                  key={soc.name} 
                  className="story-soc" 
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ alignItems: 'center' }}
                  onMouseEnter={() => setHoverCursor(true)}
                  onMouseLeave={() => setHoverCursor(false)}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span className="soc-name">{soc.name}</span>
                    <span className="sl-stat" style={{ fontSize: '10px', color: '#7a6f62', letterSpacing: '0.15em', transition: 'color 0.4s', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', fontStyle: 'normal' }}>
                      {soc.stats}
                    </span>
                  </div>
                  <span className="soc-arrow" style={{ fontSize: '16px' }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* End Mark */}
        <div className="story-end-mark">
          <div className="frk-productions">FRK PRODUCTIONS © {new Date().getFullYear()}</div>
        </div>
      </motion.div>
    </section>
  );
}
