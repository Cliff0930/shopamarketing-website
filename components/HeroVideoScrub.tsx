'use client';
import { useEffect } from 'react';

// All-intra encode (every frame a keyframe) — scrubbing seeks to arbitrary
// timestamps, and sparse keyframes make the scrub stall between them.
const VIDEO_SRC = '/assets/img/hero/hero-scrub-v3.mp4';
// Safety margin so full scroll never lands on a dark tail frame.
const END_TRIM_SECONDS = 0.1;

export default function HeroVideoScrub() {
  useEffect(() => {
    // No video source on mobile/tablet — hero is static below 992px
    if (window.innerWidth < 992) return;

    const video = document.getElementById('hero-bg-video') as HTMLVideoElement | null;
    const section = document.getElementById('hero-section') as HTMLElement | null;
    if (!video || !section) return;

    let objectUrl = '';
    let rafId = 0;
    const abortController = new AbortController();
    let animating = false;
    let targetTime = 0;
    let scrubEnabled = false;

    // Smoothly lerp currentTime toward targetTime each frame.
    // This avoids the browser seeking on every scroll tick —
    // instead it glides to the target frame, hiding keyframe gaps.
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
      const scrollRange = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      targetTime = progress * Math.max(video.duration - END_TRIM_SECONDS, 0);

      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const refreshLayout = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.ScrollTrigger) { try { w.ScrollTrigger.refresh(); } catch { /* ignore */ } }
      if (w.$) { try { w.$(window).trigger('scroll'); } catch { /* ignore */ } }
    };

    // Fetch the whole file into memory first. Scrubbing via currentTime seeks
    // into arbitrary timestamps — if those bytes aren't downloaded yet the
    // browser blocks the seek until they arrive, which is what causes the
    // scrub to freeze on real-world connections (invisible on localhost,
    // where the file loads instantly off disk). Once it's a blob URL, every
    // seek reads from memory, so it can never stall on the network again.
    const activate = (src: string) => {
      video.src = src;
      const onReady = () => {
        scrubEnabled = true;
        onScroll();
        // Video metadata loaded = layout is stable. Refresh ScrollTrigger so
        // GSAP animations below the 250vh hero fire at the correct positions.
        setTimeout(refreshLayout, 300);
      };
      if (video.readyState >= 1) onReady();
      else video.addEventListener('loadedmetadata', onReady, { once: true });
    };

    fetch(VIDEO_SRC, { signal: abortController.signal })
      .then((res) => res.blob())
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        activate(objectUrl);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        // Network/CORS failure — fall back to native progressive seeking
        // rather than leaving the hero on a static poster forever.
        activate(VIDEO_SRC);
      });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
      abortController.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return null;
}
