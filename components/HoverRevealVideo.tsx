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

  // Only the first frame loads with the page (preload="metadata"); the full
  // file downloads as a blob once the card scrolls near the viewport, so the
  // hover-play and rewind never buffer — without weighing down page load.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let objectUrl = '';
    const abortController = new AbortController();
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        fetch(src, { signal: abortController.signal })
          .then((res) => res.blob())
          .then((blob) => {
            objectUrl = URL.createObjectURL(blob);
            const keepTime = video.currentTime;
            const wasPlaying = !video.paused;
            video.src = objectUrl;
            video.addEventListener('loadedmetadata', () => {
              video.currentTime = keepTime;
              if (wasPlaying) video.play().catch(() => {});
            }, { once: true });
          })
          .catch(() => {});
      }
    }, { rootMargin: '800px 0px' });
    io.observe(video);
    return () => {
      io.disconnect();
      abortController.abort();
      cancelAnimationFrame(rafRef.current);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src]);

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
      preload="metadata"
      className={className}
      aria-label={ariaLabel}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
