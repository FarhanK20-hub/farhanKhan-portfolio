'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@/context/NavigationContext';

declare global {
  // It's possible the API is already loaded from MainIntro, but we declare just in case
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export default function StoryIntro() {
  const { navigate, setHoverCursor } = useNavigation();
  const [showSkip, setShowSkip] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Show skip button after 3 seconds
    const timer = setTimeout(() => setShowSkip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
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
      // Small timeout to ensure YT is fully ready if it was just loaded
      if (!window.YT || !window.YT.Player) {
        setTimeout(initPlayer, 100);
        return;
      }
      playerRef.current = new window.YT.Player('youtube-player-story', {
        videoId: 'kkr8t7Xo74k', // from https://youtu.be/kkr8t7Xo74k
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          disablekb: 1,
          playsinline: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            // YT.PlayerState.ENDED = 0
            if (event.data === 0) {
              navigate('storyteller');
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
    <div className="screen active" id="screen-story-intro" style={{ backgroundColor: '#000', display: 'flex', position: 'fixed', inset: 0, zIndex: 100 }}>
      <div style={{ position: 'absolute', inset: -100, pointerEvents: 'none' }}>
        <div 
          id="youtube-player-story" 
          style={{ 
            width: '100%', 
            height: '100%',
          }} 
        />
      </div>
      
      {showSkip && (
        <button
          onClick={() => navigate('storyteller')}
          onMouseEnter={() => setHoverCursor(true)}
          onMouseLeave={() => setHoverCursor(false)}
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            color: '#fff',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            letterSpacing: '0.15em',
            zIndex: 110,
            opacity: 0.6,
            transition: 'opacity 0.3s',
            cursor: 'none'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'}
        >
          SKIP INTRO →
        </button>
      )}
    </div>
  );
}
