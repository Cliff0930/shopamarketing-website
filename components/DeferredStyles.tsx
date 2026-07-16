'use client';
import { useEffect } from 'react';

// Fonts apply as soon as React hydrates (non-blocking but not idle-delayed):
// waiting for idle on a slow phone postpones the font swap by many seconds,
// and the swap re-render is what registers the hero text's LCP.
const FONTS = [
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap',
  // moved out of main.css @imports — they were render-blocking chained requests
  'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
];

const DEFERRED = [
  // Font Awesome full bundle (496KB raw) — icons may appear a beat late, worth it
  '/assets/css/all.min.css',
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

    FONTS.forEach(loadStyle);

    if ('requestIdleCallback' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).requestIdleCallback(() => DEFERRED.forEach(loadStyle));
    } else {
      setTimeout(() => DEFERRED.forEach(loadStyle), 0);
    }
  }, []);

  return null;
}
