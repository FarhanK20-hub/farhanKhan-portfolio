'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function ArchSaaSDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setHoverCursor } = useNavigation();

  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    function initPlayer() {
      const newPlayer = new window.YT.Player('saas-demo-player', {
        videoId: 'BFepsk5ZlgM',
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1,
          playlist: 'BFepsk5ZlgM',
          modestbranding: 1,
          playsinline: 1,
          disablekb: 1,
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
            event.target.playVideo();
            setIsLoaded(true);
          },
        }
      });
    }
  }, []);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="saas-demo-section" ref={containerRef}>
      <motion.div 
        className="saas-demo-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="saas-eyebrow">FEATURED SYSTEM</div>
        <h3 className="saas-title">Product Architecture in Motion</h3>
        <p className="saas-desc">
          Building systems that feel intuitive requires more than just clean code. 
          It requires a deep understanding of user workflows, micro-interactions, and visual hierarchy.
        </p>
      </motion.div>

      <motion.div 
        className="saas-demo-container"
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="saas-video-wrapper">
          {/* We use pointer-events-none on the iframe wrapper to prevent user from pausing the video by clicking it */}
          <div className="saas-player-shield">
            <div id="saas-demo-player"></div>
          </div>
          
          <AnimatePresence>
            {isLoaded && (
              <motion.button
                className={`saas-mute-btn ${!isMuted ? 'active' : ''}`}
                onClick={toggleMute}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onMouseEnter={() => setHoverCursor(true, isMuted ? 'UNMUTE' : 'MUTE')}
                onMouseLeave={() => setHoverCursor(false)}
                aria-label="Toggle mute"
              >
                <div className="sound-waves">
                  <span className="wave w1"></span>
                  <span className="wave w2"></span>
                  <span className="wave w3"></span>
                </div>
                <span className="mute-label">{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
