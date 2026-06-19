'use client';

import React from 'react';

export default function StoryFooter() {
  return (
    <footer className="story-footer">
      <div>FRK PRODUCTIONS © {new Date().getFullYear()}</div>
      <div style={{ fontSize: '12px', marginTop: '12px', color: '#5a4f40' }}>PUNE, INDIA</div>
    </footer>
  );
}
