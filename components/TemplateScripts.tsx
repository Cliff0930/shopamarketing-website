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
        // After GSAP + main.js initialise their ScrollTrigger animations, refresh
        // so every scrubbed animation snaps to the correct position for the current
        // scroll offset (prevents half-stuck animations on slow dev first load).
        // First refresh — catches most animations quickly
        setTimeout(() => {
          if (w.ScrollTrigger) { try { w.ScrollTrigger.refresh(); } catch { /* ignore */ } }
          w.$(window).trigger('scroll');
        }, 400);
        // Second refresh — catches animations whose trigger positions shifted due
        // to the 250vh sticky hero container settling after first paint
        setTimeout(() => {
          if (w.ScrollTrigger) { try { w.ScrollTrigger.refresh(); } catch { /* ignore */ } }
          if (typeof w.WOW !== 'undefined') { try { new w.WOW({ live: false }).init(); } catch { /* ignore */ } }
        }, 1200);
      }

      // On mobile, GSAP SplitText sets inline styles (white-space:nowrap, pixel
      // widths) on split-line divs based on DESKTOP measurements. This makes
      // headings overflow on narrow screens. After GSAP finishes, fix each
      // split-line to be a full-width block so text wraps naturally.
      if (window.innerWidth <= 767) {
        setTimeout(() => {
          document.querySelectorAll<HTMLElement>('.chy-split-in-right, .chy-split-in-hero-1').forEach(el => {
            el.style.setProperty('overflow', 'visible', 'important');
            el.style.setProperty('white-space', 'normal', 'important');
            el.querySelectorAll<HTMLElement>('.split-line').forEach(line => {
              line.style.setProperty('display', 'block', 'important');
              line.style.setProperty('width', '100%', 'important');
              line.style.setProperty('max-width', '100%', 'important');
              line.style.setProperty('overflow', 'visible', 'important');
              line.style.setProperty('white-space', 'normal', 'important');
              line.style.setProperty('opacity', '1', 'important');
              line.style.setProperty('transform', 'none', 'important');
              line.querySelectorAll<HTMLElement>('div').forEach(d => {
                d.style.setProperty('display', 'inline', 'important');
                d.style.setProperty('transform', 'none', 'important');
                d.style.setProperty('opacity', '1', 'important');
                d.style.setProperty('white-space', 'normal', 'important');
              });
            });
          });
        }, 600); // after GSAP init (~400ms) finishes
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
