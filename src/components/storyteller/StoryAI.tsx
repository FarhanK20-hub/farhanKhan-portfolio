'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';

type Message = { id: string; role: 'user' | 'ai'; text: string; isStreaming?: boolean };

const QUESTIONS = [
  "Who is the storyteller?",
  "What's his filmmaking style?",
  "What tools does he use?",
  "Can we collaborate?",
];

const ANSWERS: Record<string, string> = {
  "Who is the storyteller?":
    "Farhan Khan. Director. Cinematographer. Editor. But labels feel thin for what he actually does — he translates emotion into moving image. Under FRK Productions, he's crafted reels with 1.2M+ views, cinematic edits that stop thumbs mid-scroll, and visual work that makes clients feel something before they even read the brief. He doesn't make content. He makes moments.",

  "What's his filmmaking style?":
    "Farhan shoots with restraint and edits with intention. Influenced by slow cinema — long holds, natural light, rhythm over pace. He's drawn to the space between moments: the exhale after a laugh, the glance before a goodbye. Whether it's a 15-second reel or a short film, every frame earns its place. The result is work that feels less like it was produced, and more like it was found.",

  "What tools does he use?":
    "On set: Sony mirrorless systems, prime lenses, natural and motivated light. In post: DaVinci Resolve for color grading, Premiere Pro for editorial, After Effects for motion. For 3D work and cinematic sequences — Unreal Engine. His Reels and Edits have combined for millions of views across platforms. The tools vary. The eye doesn't.",

  "Can we collaborate?":
    "Yes — and he's selective about it. Farhan works with brands, artists, and projects that have something to say. If your vision deserves to be seen, scroll down to the contact section and tell him about it. He responds to good stories. Whether that's a brand film, a music video, a cinematic reel, or something that doesn't have a name yet — bring the idea. He'll bring the camera.",
};

export default function StoryAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'ai', text: "The director is in. Ask me about the work, the vision, or the man behind the lens." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { setHoverCursor } = useNavigation();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleQuestion = (q: string) => {
    if (isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsgId = (Date.now() + 1).toString();
      const aiResponse = ANSWERS[q] || "Cut. Let's try that again — ask me something about the work.";

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
      }, 18);
    }, 600);
  };

  return (
    <>
      {/* FAB — clapperboard icon in gold */}
      <div
        className="story-ai-fab"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setHoverCursor(true, isOpen ? 'CLOSE' : 'ASK')}
        onMouseLeave={() => setHoverCursor(false)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
              <path d="M7 2l1 4" />
              <path d="M12 2l1 4" />
              <path d="M17 2l1 4" />
            </>
          )}
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="story-ai-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="story-ai-header">
              <div className="story-ai-status">
                <div className="story-ai-dot"></div>
                FRK PRODUCTIONS · LIVE
              </div>
            </div>

            <div className="story-ai-disclaimer">
              🎬 An AI that speaks on behalf of the director. Results may be cinematic.
            </div>

            <div className="story-ai-messages">
              {messages.map(msg => (
                <div key={msg.id} className={`story-ai-message ${msg.role}`}>
                  <div className="story-ai-msg-inner">
                    {msg.text}
                    {msg.isStreaming && <span className="story-ai-cursor">_</span>}
                  </div>
                </div>
              ))}
              {isTyping && !messages[messages.length - 1]?.isStreaming && (
                <div className="story-ai-message ai">
                  <div className="story-ai-msg-inner">…</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="story-ai-questions">
              {QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  className="story-ai-q-btn"
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
