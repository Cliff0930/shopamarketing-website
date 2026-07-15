'use client';
import { useEffect, useRef } from 'react';

// Behaves like a photo until hovered: plays forward once (no loop) and holds
// the final frame; on mouse-out it rewinds back to frame 1. Browsers can't
// play video backwards natively, so the rewind is rAF-driven seeking — the
// source must be all-intra encoded (-g 1) or reverse stutters.
const REWIND_RATE = 1.6; // rewind slightly faster than realtime

export default function HoverRevealVideo({ src, className, ariaLabel }: { src: string; className?: string; ariaLabel?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const stopRewind = () => cancelAnimationFrame(rafRef.current);

  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    stopRewind();
    video.play().catch(() => {});
  };

  const handleLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    stopRewind();
    let last = performance.now();
    const rewind = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const t = video.currentTime - dt * REWIND_RATE;
      if (t <= 0) {
        video.currentTime = 0;
        return;
      }
      video.currentTime = t;
      rafRef.current = requestAnimationFrame(rewind);
    };
    rafRef.current = requestAnimationFrame(rewind);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      className={className}
      aria-label={ariaLabel}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
