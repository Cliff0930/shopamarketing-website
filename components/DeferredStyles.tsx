'use client';
import { useEffect } from 'react';

const DEFERRED = [
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap',
  '/assets/css/flaticon_choicy.css',
  '/assets/css/swiper.min.css',
  '/assets/css/odometer.min.css',
  '/assets/css/magnific-popup.css',
];

export default function DeferredStyles() {
  useEffect(() => {
    const loadStyle = (href: string) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    if ('requestIdleCallback' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).requestIdleCallback(() => DEFERRED.forEach(loadStyle));
    } else {
      setTimeout(() => DEFERRED.forEach(loadStyle), 0);
    }
  }, []);

  return null;
}
