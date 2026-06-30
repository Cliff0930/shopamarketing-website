'use client';
import { useEffect } from 'react';

export default function HeroVideoScrub() {
  useEffect(() => {
    const video = document.getElementById('hero-bg-video') as HTMLVideoElement | null;
    const section = document.getElementById('hero-section') as HTMLElement | null;
    if (!video || !section) return;

    video.pause();
    video.currentTime = 0;

    let targetTime = 0;
    let rafId = 0;
    let animating = false;

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
      if (!video.duration) return;
      const scrollRange = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      targetTime = progress * video.duration;

      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    const init = () => {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      // Video metadata loaded = layout is stable. Refresh ScrollTrigger so GSAP
      // animations below the 250vh hero fire at the correct scroll positions.
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        if (w.ScrollTrigger) { try { w.ScrollTrigger.refresh(); } catch { /* ignore */ } }
        if (w.$) { try { w.$(window).trigger('scroll'); } catch { /* ignore */ } }
      }, 300);
    };

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener('loadedmetadata', init, { once: true });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
