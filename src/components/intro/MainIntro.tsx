// Force refresh
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
  }
}

export default function MainIntro() {
  const { navigate, setHoverCursor } = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  // Show skip button after a short delay once video starts
  useEffect(() => {
    if (!hasStarted) return;
    const timer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(timer);
  }, [hasStarted]);

  const handleSkip = () => {
    if (playerRef.current && typeof playerRef.current.stopVideo === 'function') {
      playerRef.current.stopVideo();
    }
    navigate('select');
  };

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    function initPlayer() {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'KeKaZizc6Zk', // from https://youtu.be/KeKaZizc6Zk
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          disablekb: 1,
          playsinline: 1,
          mute: 0
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReady: (event: any) => {
            playerRef.current = event.target;
            setIsReady(true);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (event: any) => {
            // YT.PlayerState.ENDED = 0
            if (event.data === 0) {
              navigate('select');
            }
          }
        }
      });
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, [navigate]);

  return (
    <div className="screen active" id="screen-main-intro" style={{ backgroundColor: '#000', display: 'flex', position: 'fixed', inset: 0, zIndex: 100 }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: hasStarted ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
        <div 
          id="youtube-player" 
          style={{ 
            width: '100%', 
            height: '100%',
          }} 
        />
      </div>
      
      {!hasStarted && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 110,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000'
        }}>
          {isReady ? (
            <button
              onClick={() => {
                setHasStarted(true);
                if (playerRef.current) {
                  // Safely call methods, since YouTube API object structure can sometimes vary
                  if (typeof playerRef.current.unMute === 'function') playerRef.current.unMute();
                  if (typeof playerRef.current.setVolume === 'function') playerRef.current.setVolume(100);
                  if (typeof playerRef.current.playVideo === 'function') playerRef.current.playVideo();
                }
              }}
              onMouseEnter={() => setHoverCursor(true)}
              onMouseLeave={() => setHoverCursor(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#E0E0E0',
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '18px',
                letterSpacing: '0.15em',
                cursor: 'none',
                opacity: 0.8,
                transition: 'opacity 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              [ INITIATE PLAYBACK ]
            </button>
          ) : (
            <div style={{
              color: '#444',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '14px',
              letterSpacing: '0.2em'
            }}>
              LOADING...
            </div>
          )}
        </div>
      )}

      {showSkip && (
        <button
          id="skip-intro-btn"
          onClick={handleSkip}
          onMouseEnter={() => setHoverCursor(true)}
          onMouseLeave={() => setHoverCursor(false)}
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            zIndex: 120,
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '6px',
            color: '#aaa',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            letterSpacing: '0.15em',
            padding: '10px 22px',
            cursor: 'none',
            animation: 'fadeUp 0.6s ease forwards',
            transition: 'color 0.3s, border-color 0.3s, background 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#aaa';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          }}
        >
          SKIP INTRO →
        </button>
      )}

    </div>
  );
}
