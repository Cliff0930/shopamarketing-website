'use client';
import { useEffect } from 'react';

export default function StarAnimationTrigger() {
  useEffect(() => {
    const stars = document.getElementById('animated-stars');
    if (!stars) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stars.classList.add('in-view');
          observer.disconnect(); // fire once only
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(stars);
    return () => observer.disconnect();
  }, []);

  return null;
}
