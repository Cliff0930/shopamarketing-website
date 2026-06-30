'use client';
import { useEffect } from 'react';

// Initial tilt → target tilt as card scrolls through viewport (alternating per card)
const ROTATIONS = [
  { iX: -15, iY: -15, iZ: -20, tX:  15, tY:  15, tZ:  15 },
  { iX:  16, iY:  16, iZ:  20, tX: -16, tY: -16, tZ: -16 },
  { iX: -15, iY: -15, iZ: -20, tX:  15, tY:  15, tZ:  15 },
  { iX:  16, iY:  16, iZ:  20, tX: -16, tY: -16, tZ: -16 },
];

export default function FloatingCardsGSAP() {
  useEffect(() => {
    let attempts = 0;

    const init = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if ((!w.gsap || !w.ScrollTrigger) && attempts < 25) {
        attempts++;
        setTimeout(init, 300);
        return;
      }
      if (!w.gsap || !w.ScrollTrigger) return;

      const { gsap } = w;
      const isMobile = window.innerWidth < 992;
      const factor = isMobile ? 0.35 : 1;
      const holders = document.querySelectorAll<HTMLElement>('.shopa-floating-holder');

      holders.forEach((holder, i) => {
        const card = holder.querySelector<HTMLElement>('.shopa-floating-card');
        if (!card || !ROTATIONS[i]) return;
        const r = ROTATIONS[i];

        // Set initial tilted state
        gsap.set(card, {
          rotationX: r.iX * factor,
          rotationY: r.iY * factor,
          rotationZ: r.iZ * factor,
          force3D: true,
        });

        // Scrub 3D rotation as card scrolls through viewport
        gsap.timeline({
          scrollTrigger: {
            trigger: holder,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }).to(card, {
          rotationX: r.tX * factor,
          rotationY: r.tY * factor,
          rotationZ: r.tZ * factor,
          force3D: true,
        });
      });

      // Touch devices: toggle active class on tap
      holders.forEach(holder => {
        const card = holder.querySelector<HTMLElement>('.shopa-floating-card');
        if (!card) return;
        card.addEventListener('click', () => {
          if (window.innerWidth < 992) {
            card.classList.toggle('shopa-floating-card--active');
          }
        });
      });
    };

    setTimeout(init, 700);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.ScrollTrigger) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        w.ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger?.classList?.contains('shopa-floating-holder')) t.kill();
        });
      }
    };
  }, []);

  return null;
}
