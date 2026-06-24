'use client';
import { useRef, useEffect } from 'react';

interface Service {
  title: string;
  desc: string;
  items: string[];
  link: string;
  image?: string;
}

export default function ServicesTicker({ services }: { services: Service[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isDragging = useRef(false);
  const isPaused = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const scroll = () => {
      if (!isPaused.current && !isDragging.current) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      animRef.current = requestAnimationFrame(scroll);
    };
    animRef.current = requestAnimationFrame(scroll);

    const onEnter = () => { isPaused.current = true; };
    const onLeave = () => { isPaused.current = false; isDragging.current = false; el.style.cursor = 'grab'; };
    const onDown = (e: MouseEvent) => { isDragging.current = true; startX.current = e.pageX; scrollStart.current = el.scrollLeft; el.style.cursor = 'grabbing'; };
    const onUp = () => { isDragging.current = false; el.style.cursor = 'grab'; };
    const onMove = (e: MouseEvent) => { if (!isDragging.current) return; e.preventDefault(); el.scrollLeft = scrollStart.current - (e.pageX - startX.current); };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseup', onUp);
    el.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(animRef.current);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mouseup', onUp);
      el.removeEventListener('mousemove', onMove);
    };
  }, []);

  const doubled = [...services, ...services];

  return (
    <div ref={wrapRef} className="svc-ticker-drag-wrap" style={{ cursor: 'grab' }}>
      <div className="svc-ticker-track-js">
        {doubled.map((svc, i) => (
          <div key={i} className="svc-ticker-card">
            <div className="svc-ticker-img">
              {svc.image
                ? <img src={svc.image} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                : <span style={{ fontSize: '11px', color: '#bbb', letterSpacing: '1px', textTransform: 'uppercase' }}>Image</span>
              }
            </div>
            <h4 className="chy-heading-1 svc-ticker-title">{svc.title}</h4>
            <p className="chy-para-1 svc-ticker-desc">{svc.desc}</p>
            <ul className="svc-ticker-list">
              {svc.items.map((item) => (
                <li key={item}><i className="flaticon-straight-right-arrow"></i>{item}</li>
              ))}
            </ul>
            <a href={svc.link} className="chy-pr-btn-1" style={{ marginTop: '16px', alignSelf: 'flex-start' }}>
              <span className="text">Learn More</span>
              <span className="icon"><i className="fa-solid fa-right-long"></i></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
