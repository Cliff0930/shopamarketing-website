'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SCRIPTS = [
  '/assets/js/jquery-3.7.1.min.js',
  '/assets/js/bootstrap.bundle.min.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/wow.js',
  '/assets/js/marquee.min.js',
  '/assets/js/nice-select.min.js',
  '/assets/js/knob.min.js',
  '/assets/js/SplitText.min.js',
  '/assets/js/gsap.min.js',
  '/assets/js/tilt.jquery.min.js',
  '/assets/js/waypoints.min.js',
  '/assets/js/counterup.min.js',
  '/assets/js/split-type.min.js',
  '/assets/js/ScrollTrigger.min.js',
  '/assets/js/odometer.min.js',
  '/assets/js/magnific-popup.min.js',
  '/assets/js/appear.min.js',
  '/assets/js/main.js',
  '/assets/js/reinit.js',   // exposes window.shopaReinit
];

function loadNext(index: number, onDone: () => void) {
  if (index >= SCRIPTS.length) { onDone(); return; }
  const s = document.createElement('script');
  s.src = SCRIPTS[index];
  s.async = false;
  s.onload = () => loadNext(index + 1, onDone);
  s.onerror = () => loadNext(index + 1, onDone);
  document.body.appendChild(s);
}

export default function TemplateScripts() {
  const pathname = usePathname();
  const ready = useRef(false);

  // ── Initial load: load all scripts once ──────────────────────────
  useEffect(() => {
    const ids = SCRIPTS.map(src => src.split('/').pop()!);
    if (ids.some(id => document.querySelector(`script[src*="${id}"]`))) {
      ready.current = true;
      return;
    }

    loadNext(0, () => {
      const preloader = document.querySelector('#preloader') as HTMLElement | null;
      if (preloader) preloader.remove = () => {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.$ !== 'undefined') {
        w.$(window).trigger('load');
      }
      ready.current = true;
    });
  }, []);

  // ── Route change: hide preloader + re-init all template plugins ──
  useEffect(() => {
    const preloader = document.querySelector('#preloader') as HTMLElement | null;
    if (preloader) {
      preloader.classList.add('preloaded');
      setTimeout(() => { preloader.style.display = 'none'; }, 900);
    }

    // Skip initial render — initial load effect handles it
    if (!ready.current) return;

    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      const preloader = document.querySelector('#preloader') as HTMLElement | null;
      if (preloader) preloader.remove = () => {};

      if (typeof w.shopaReinit === 'function') {
        w.shopaReinit();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
