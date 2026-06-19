'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';

type Message = { id: string; role: 'user' | 'ai'; text: string; isStreaming?: boolean };

const QUESTIONS = [
  "Who is Farhan?",
  "What has he built?",
  "Show his experience",
  "Any secrets here?"
];

const ANSWERS: Record<string, string> = {
  "Who is Farhan?": "Let me be direct. Farhan isn't a student who codes on the side. He's an ML Engineer, Full-Stack Developer, and Cloud Architect who happens to also be pursuing a BCA (Honours with Research) at Symbiosis Institute of Technology. He's shipped AI systems for Tata Steel, built prosthetics intelligence at HyBionics, and done data science at Tata Motors. Most people his age are still figuring out what to major in.",

  "What has he built?": "Ten production-grade systems. NephroSense — an XGBoost-powered clinical platform for Chronic Kidney Disease detection. BlockVote — a fully on-chain Ethereum voting infrastructure. A YOLOv8 defect detection system built during his Tata Steel internship. AttritionAI — a stacking ensemble of six ML models with 89% accuracy. And that's not even half of it. Scroll through the projects. Each one has a GitHub link.",

  "Show his experience?": "Three internships. Tata Steel in 2025 as an AI/ML Engineer, where he independently built a computer vision system for steel surface defect detection. HyBionics in 2026 as a Machine Learning Intern, contributing to fall-detection AI for smart prosthetics. Tata Motors in 2026 for Data Science and AI/ML. He also served as a Project Administrator and Campus Ambassador for GirlScript Summer of Code. The résumé speaks for itself.",

  "Any secrets here?": "Since you asked — yes.\n\n⌨  Type \"hire farhan\" anywhere on the page and see what happens.\n\n>_  Type \"boot os\" to access FarhanOS — a hidden terminal interface.\n\nI'd tell you more, but then it wouldn't be a secret."
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'ai', text: "I don't have time for small talk. Ask me something worth answering." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { setHoverCursor } = useNavigation();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

let nextMsgId = 100;

  const handleQuestion = (q: string) => {
    if (isTyping) return;
    
    const userMsg: Message = { id: String(nextMsgId++), role: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsgId = String(nextMsgId++);
      const aiResponse = ANSWERS[q] || "I don't have that information right now.";
      
      setMessages(prev => [...prev, { id: aiMsgId, role: 'ai', text: '', isStreaming: true }]);
      
      let i = 0;
      const interval = setInterval(() => {
        setMessages(prev => prev.map(msg => {
          if (msg.id === aiMsgId) {
            return { ...msg, text: aiResponse.slice(0, i + 1) };
          }
          return msg;
        }));
        i++;
        if (i >= aiResponse.length) {
          clearInterval(interval);
          setMessages(prev => prev.map(msg => 
            msg.id === aiMsgId ? { ...msg, isStreaming: false } : msg
          ));
          setIsTyping(false);
        }
      }, 20); // typing speed
    }, 600); // initial delay
  };

  return (
    <>
      <div 
        className="ai-fab"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setHoverCursor(true, isOpen ? 'CLOSE' : 'ASK AI')}
        onMouseLeave={() => setHoverCursor(false)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          )}
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="ai-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="ai-header">
              <div className="ai-status">
                <div className="ai-dot"></div>
                SYSTEM ONLINE
              </div>
            </div>

            <div className="ai-disclaimer">
              ⚠ Disclaimer: This AI thinks very highly of itself. Accuracy may vary. Ego does not.
            </div>
            
            <div className="ai-messages">
              {messages.map(msg => (
                <div key={msg.id} className={`ai-message ${msg.role}`}>
                  <div className="ai-msg-inner">
                    {msg.text}
                    {msg.isStreaming && <span className="ai-cursor">_</span>}
                  </div>
                </div>
              ))}
              {isTyping && !messages[messages.length - 1]?.isStreaming && (
                <div className="ai-message ai typing">
                  <div className="ai-msg-inner">...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="ai-questions">
              {QUESTIONS.map((q, idx) => (
                <button 
                  key={idx} 
                  className="ai-q-btn"
                  onClick={() => handleQuestion(q)}
                  disabled={isTyping}
                  onMouseEnter={() => setHoverCursor(true, 'ASK')}
                  onMouseLeave={() => setHoverCursor(false)}
                >
                  {q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
