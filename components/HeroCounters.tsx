'use client';
import { useEffect } from 'react';

const COUNTERS = [
  { selector: '#hero-counter-1', target: 45 },
  { selector: '#hero-counter-2', target: 5000 },
  { selector: '#hero-counter-3', target: 1000 },
];

function animateCount(el: HTMLElement, target: number, duration: number) {
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(step);
}

export default function HeroCounters() {
  useEffect(() => {
    // Wait for the stats strip CSS animation to finish (0.5s delay + 0.8s = 1.3s),
    // then count up so numbers are always visible before they change.
    const timer = setTimeout(() => {
      COUNTERS.forEach(({ selector, target }) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (el) animateCount(el, target, 1200);
      });
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
