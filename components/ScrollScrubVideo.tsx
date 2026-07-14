'use client';
import { useEffect, useRef } from 'react';

// Scroll-driven video scrub for in-flow sections (same mechanics as the home
// hero's HeroVideoScrub, but progress comes from the element's journey through
// the viewport instead of a sticky container). Source must be all-intra
// encoded (-g 1) or seeking stalls between keyframes.
const END_TRIM_SECONDS = 0.1;

export default function ScrollScrubVideo({ src, className, ariaLabel }: { src: string; className?: string; ariaLabel?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile: no scroll-scrub — show the first frame only
    if (window.innerWidth < 768) {
      video.src = src;
      return;
    }

    let objectUrl = '';
    let rafId = 0;
    const abortController = new AbortController();
    let animating = false;
    let targetTime = 0;
    let scrubEnabled = false;

    const animate = () => {
      const diff = targetTime - video.currentTime;
      if (Math.abs(diff) > 0.016) {
        video.currentTime += diff * 0.12;
        rafId = requestAnimationFrame(animate);
      } else {
        video.currentTime = targetTime;
        animating = false;
      }
    };

    const onScroll = () => {
      if (!scrubEnabled || !video.duration) return;
      const rect = video.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the video's top enters at the bottom of the viewport,
      // 1 when its bottom leaves at the top
      const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      targetTime = progress * Math.max(video.duration - END_TRIM_SECONDS, 0);

      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const activate = (videoSrc: string) => {
      video.src = videoSrc;
      const onReady = () => {
        scrubEnabled = true;
        onScroll();
      };
      if (video.readyState >= 1) onReady();
      else video.addEventListener('loadedmetadata', onReady, { once: true });
    };

    // Fetch the whole file as a blob first so seeks never stall on the network
    fetch(src, { signal: abortController.signal })
      .then((res) => res.blob())
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        activate(objectUrl);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        activate(src);
      });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
      abortController.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="metadata"
      className={className}
      aria-label={ariaLabel}
    />
  );
}
