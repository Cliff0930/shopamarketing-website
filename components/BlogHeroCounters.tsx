'use client';
import { useEffect } from 'react';

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

export default function BlogHeroCounters({
  years,
  articles,
  categories,
}: {
  years: number;
  articles: number;
  categories: number;
}) {
  useEffect(() => {
    const counters = [
      { selector: '#blog-hero-counter-1', target: years },
      { selector: '#blog-hero-counter-2', target: articles },
      { selector: '#blog-hero-counter-3', target: categories },
    ];
    // Wait for the stats strip CSS animation to finish (0.5s delay + 0.8s = 1.3s),
    // then count up so numbers are always visible before they change.
    const timer = setTimeout(() => {
      counters.forEach(({ selector, target }) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (el) animateCount(el, target, 1200);
      });
    }, 1400);
    return () => clearTimeout(timer);
  }, [years, articles, categories]);

  return null;
}
