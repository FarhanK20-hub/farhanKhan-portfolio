'use client';

import React, { useRef, useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useNavigation } from '@/context/NavigationContext';
import { useTitleGlitch } from '@/hooks/useGlitch';
import { sendContactForm } from '@/lib/emailjs';

export default function ArchContact() {
  const { setHoverCursor } = useNavigation();
  const btnRef = useMagnetic<HTMLButtonElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const [btnText, setBtnText] = useState('[ TRANSMIT ]');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { text: titleText, triggerGlitch, stopGlitch } = useTitleGlitch("Let's Build Something");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setBtnText('[ TRANSMITTING… ]');

    try {
      await sendContactForm(formRef.current, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ARCH || '');
      setBtnText('[ TRANSMITTED ✓ ]');
      formRef.current.reset();
    } catch (error: unknown) {
      const emailErr = error as { status?: number; text?: string };
      console.error('EmailJS Error:', emailErr?.status, emailErr?.text, error);
      setBtnText('[ TRANSMISSION FAILED ]');
    } finally {
      setTimeout(() => {
        setBtnText('[ TRANSMIT ]');
        setIsSubmitting(false);
      }, 2800);
    }
  };

  return (
    <RevealOnScroll className="arch-sec bg-alt" id="arch-contact">
      <div className="sec-eyebrow">05 — LET&apos;S BUILD SOMETHING</div>
      <div 
        className="sec-title-arch"
        onMouseEnter={triggerGlitch}
        onMouseLeave={stopGlitch}
      >
        {titleText}
      </div>
      <div className="sec-rule"></div>
      
      <div className="contact-grid">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <input className="form-input" type="text" name="user_name" placeholder="your name" required />
            <label className="form-label">Name</label>
          </div>
          <div className="form-row">
            <input className="form-input" type="email" name="user_email" placeholder="you@domain.com" required />
            <label className="form-label">Email</label>
          </div>
          <div className="form-row">
            <input className="form-input" type="tel" name="user_mobile" placeholder="+91 XXXXX XXXXX" />
            <label className="form-label">Mobile</label>
          </div>
          <div className="form-row">
            <input className="form-input" type="text" name="user_subject" placeholder="RE: Let's build something" required />
            <label className="form-label">Subject</label>
          </div>
          <div className="form-row">
            <textarea className="form-input" name="message" placeholder="Describe the problem…" required></textarea>
            <label className="form-label">Message</label>
          </div>
          <button 
            type="submit"
            className="form-submit" 
            ref={btnRef}
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.6 : 1 }}
            onMouseEnter={() => setHoverCursor(true, 'CONNECT')}
            onMouseLeave={() => setHoverCursor(false)}
          >
            {btnText}
          </button>
        </form>

        <div>
          <div className="contact-info">
            <div><span className="ci-key">location</span><span className="ci-val">Pune, India</span></div>
            <div><span className="ci-key">status&nbsp;&nbsp;</span><span className="ci-val">Open to opportunities</span></div>
            <div><span className="ci-key">response</span><span className="ci-val">&lt; 24 hours</span></div>
            <div><span className="ci-key">timezone</span><span className="ci-val">IST (UTC +5:30)</span></div>
            <div><span className="ci-key">email&nbsp;&nbsp;&nbsp;</span><span className="ci-val">devrevolutionx@gmail.com</span></div>
          </div>
          <div className="social-links">
            {[
              { name: 'GitHub', url: 'https://github.com/FarhanK20-hub', stats: '100+ Contributions · 20+ Projects · 4+ SaaS' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/farhan-khan-3aa5442b0/', stats: '1.5k+ Followers · 43k+ Impressions' },
              { name: 'LeetCode', url: 'https://leetcode.com/u/Q3tQQteAio/', stats: 'DSA · Problem Solving' },
              { name: 'Instagram', url: 'https://www.instagram.com/_farhan.who_/', stats: '1.7k+ Followers · 1.9M+ Views' },
              { name: 'Resume PDF', url: '/Farhan_Khan.pdf', stats: 'Latest 2026 Version' }
            ].map(social => (
              <a 
                key={social.name} 
                className="social-link" 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ alignItems: 'flex-start' }}
                onMouseEnter={() => setHoverCursor(true, social.name === 'GitHub' ? 'EXPLORE' : 'CONNECT')}
                onMouseLeave={() => setHoverCursor(false)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span>{social.name}</span>
                  <span style={{ fontSize: '8px', color: '#555', letterSpacing: '0.1em', transition: 'color 0.3s' }} className="sl-stat">
                    {social.stats}
                  </span>
                </div>
                <span className="sl-arrow" style={{ marginTop: '2px' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
