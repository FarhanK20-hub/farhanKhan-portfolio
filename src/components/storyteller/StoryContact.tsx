'use client';

import React, { useRef, useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import { useNavigation } from '@/context/NavigationContext';
import { sendContactForm } from '@/lib/emailjs';

export default function StoryContact() {
  const { setHoverCursor } = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);
  const [btnText, setBtnText] = useState('SEND MESSAGE');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setBtnText('SENDING…');

    try {
      await sendContactForm(formRef.current, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_STORY || '');
      setBtnText('SENT SUCCESSFULLY');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setBtnText('FAILED TO SEND');
    } finally {
      setTimeout(() => {
        setBtnText('SEND MESSAGE');
        setIsSubmitting(false);
      }, 3000);
    }
  };

  return (
    <RevealOnScroll className="story-sec">
      <div className="story-eyebrow">05 — CONNECT</div>
      <div className="story-sec-title">Let&apos;s talk vision.</div>
      <div className="story-rule"></div>
      
      <div className="story-contact-grid">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="sf-row">
            <label className="sf-label">Your Name</label>
            <input className="sf-input" type="text" name="name" placeholder="How shall I address you?" required />
          </div>
          <div className="sf-row">
            <label className="sf-label">Your Email</label>
            <input className="sf-input" type="email" name="email" placeholder="Where can I reach you?" required />
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

        <div>
          <div className="story-info-block">
            <strong>Location:</strong> Pune, India<br/>
            <strong>Availability:</strong> Booking for Q4 2025<br/>
            <strong>Direct:</strong> devrevolutionx@gmail.com
          </div>
          
          <div className="story-socials">
            {[
              { name: 'Instagram', url: 'https://www.instagram.com/_farhan.who_/' },
              { name: 'GitHub', url: 'https://github.com/FarhanK20-hub' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/farhan-khan-3aa5442b0/' }
            ].map(soc => (
              <a 
                key={soc.name} 
                className="story-soc" 
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoverCursor(true)}
                onMouseLeave={() => setHoverCursor(false)}
              >
                <span>{soc.name}</span>
                <span className="soc-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
