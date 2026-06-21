'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RADIO_TRACKS } from '@/lib/data';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaMusic, FaForward } from 'react-icons/fa';
import { useNavigation } from '@/context/NavigationContext';

export default function RadioWidget() {
  const { setHoverCursor, screen } = useNavigation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = RADIO_TRACKS[currentIdx];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Gentle background volume
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser prevented autoplay (gesture expired)
            setIsPlaying(false);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentIdx, isPlaying, track.src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const nextTrack = () => {
    setCurrentIdx((prev) => (prev + 1) % RADIO_TRACKS.length);
    setIsPlaying(true);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={track.src}
        onEnded={nextTrack}
        autoPlay={isPlaying}
      />

      <motion.div
        className="radio-widget"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '100px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '10px 16px',
          borderRadius: '12px',
          background: 'rgba(20, 20, 20, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          color: '#E0E0E0',
          fontFamily: 'var(--font-inter)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '140px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.03em', display: 'flex', alignItems: 'center', gap: '8px', color: screen === 'storyteller' ? '#C9A84C' : '#00FF94' }}>
            <motion.div
              animate={{ opacity: isPlaying && !isMuted ? [0.4, 1, 0.4] : 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaMusic size={10} />
            </motion.div>
            {track.title}
          </div>
          <div style={{ fontSize: '11px', opacity: 0.6, marginTop: '2px', letterSpacing: '0.02em' }}>
            {track.artist}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '14px' }}>
          <button 
            onClick={togglePlay}
            onMouseEnter={() => setHoverCursor(true, isPlaying ? 'PAUSE' : 'PLAY')}
            onMouseLeave={() => setHoverCursor(false)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'none', opacity: 0.8, display: 'flex' }}
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
          
          <button 
            onClick={nextTrack}
            onMouseEnter={() => setHoverCursor(true, 'NEXT')}
            onMouseLeave={() => setHoverCursor(false)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'none', opacity: 0.8, display: 'flex' }}
          >
            <FaForward size={14} />
          </button>

          <button 
            onClick={toggleMute}
            onMouseEnter={() => setHoverCursor(true, isMuted ? 'UNMUTE' : 'MUTE')}
            onMouseLeave={() => setHoverCursor(false)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'none', opacity: 0.8, display: 'flex' }}
          >
            {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
          </button>
        </div>
      </motion.div>
    </>
  );
}
