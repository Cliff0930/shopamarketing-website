'use client';
import { useEffect, useRef } from 'react';

// Scroll-driven video scrub for in-flow sections (same mechanics as the home
// hero's HeroVideoScrub, but progress comes from the element's journey through
// the viewport instead of a sticky container). Source must be all-intra
// encoded (-g 1) or seeking stalls between keyframes.
const END_TRIM_SECONDS = 0.1;

export default function ScrollScrubVideo({ src, poster, className, ariaLabel, pinContainerId }: { src: string; poster?: string; className?: string; ariaLabel?: string; pinContainerId?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile/tablet: never load the video — the poster stays as a static image,
    // so there's no per-frame decode/seek and the scroll stays smooth.
    if (window.innerWidth < 992) return;

    // Pinned mode: scrub follows a sticky wrapper's scroll progress
    // (same mechanics as the home hero) instead of the element's own
    // journey through the viewport.
    const pin = pinContainerId ? document.getElementById(pinContainerId) : null;

    // Show the first frame immediately without downloading the whole file
    video.src = src;

    let objectUrl = '';
    let rafId = 0;
    const abortController = new AbortController();
    let targetTime = 0;
    let scrubEnabled = false;

    // One persistent ease loop — restarting the loop on every wheel tick
    // reads as stutter; a soft factor keeps the glide continuous.
    const tick = () => {
      if (scrubEnabled) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > 0.008) video.currentTime += diff * 0.08;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onScroll = () => {
      if (!scrubEnabled || !video.duration) return;
      const vh = window.innerHeight;
      let progress;
      if (pin) {
        const range = pin.offsetHeight - vh;
        progress = range > 0 ? Math.min(Math.max(-pin.getBoundingClientRect().top / range, 0), 1) : 0;
      } else {
        // 0 when the video's top enters at the bottom of the viewport,
        // 1 when its bottom leaves at the top
        const rect = video.getBoundingClientRect();
        progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      }
      targetTime = progress * Math.max(video.duration - END_TRIM_SECONDS, 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Full download as a blob (so seeks never stall on the network), but only
    // once the section approaches the viewport — page load stays light.
    const startFetch = () => {
      fetch(src, { signal: abortController.signal })
        .then((res) => res.blob())
        .then((blob) => {
          objectUrl = URL.createObjectURL(blob);
          const keepTime = video.currentTime;
          video.src = objectUrl;
          const onReady = () => {
            video.currentTime = keepTime;
            scrubEnabled = true;
            onScroll();
          };
          if (video.readyState >= 1) onReady();
          else video.addEventListener('loadedmetadata', onReady, { once: true });
        })
        .catch((err) => {
          if (err.name === 'AbortError') return;
          // Network failure — scrub against the progressive src instead
          scrubEnabled = true;
        });
    };

    // Never compete with first paint: wait for window load before downloading
    const begin = () => {
      if (document.readyState === 'complete') startFetch();
      else window.addEventListener('load', startFetch, { once: true });
    };

    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        begin();
      }
    }, { rootMargin: '1200px 0px' });
    io.observe(pin ?? video);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
      abortController.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src, pinContainerId]);

  return (
    <>
      {/* Mobile/tablet: a real <img> so it sizes itself (a src-less <video>
          collapses to zero height); desktop uses the scrubbable <video>. */}
      {poster && (
        <img
          src={poster}
          alt={ariaLabel}
          loading="lazy"
          className={`${className ?? ''} scrub-poster`.trim()}
        />
      )}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        poster={poster}
        className={`${className ?? ''} scrub-video`.trim()}
        aria-label={ariaLabel}
      />
    </>
  );
}
