'use client';

interface Service {
  title: string;
  desc: string;
  items: string[];
  link: string;
  image?: string;
  video?: string;
}

export default function ServicesDeck({ services }: { services: Service[] }) {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const video = e.currentTarget.querySelector<HTMLVideoElement>('video');
    if (video) { video.currentTime = 0; video.play().catch(() => {}); }
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const video = e.currentTarget.querySelector<HTMLVideoElement>('video');
    if (video) { video.pause(); video.currentTime = 0; }
  };

  return (
    <div className="wds-deck">
      {services.map((svc, i) => (
        <a
          key={svc.link}
          href={svc.link}
          className="wds-deck__card"
          onMouseEnter={svc.video ? handleEnter : undefined}
          onMouseLeave={svc.video ? handleLeave : undefined}
        >
          <div className="wds-deck__media">
            {svc.image && (
              <img
                src={svc.image}
                alt={svc.title}
                className={`wds-deck__img${svc.video ? ' has-video' : ''}`}
                loading="lazy"
              />
            )}
            {svc.video && (
              <video
                src={svc.video}
                muted
                loop
                playsInline
                preload="none"
                className="wds-deck__video"
              />
            )}
          </div>

          <span className="wds-deck__label">
            <span className="wds-deck__label-num">{`0${i + 1}`}</span>
            <span className="wds-deck__label-title">{svc.title}</span>
          </span>

          <div className="wds-deck__content">
            <h3 className="chy-heading-1 wds-deck__title">{svc.title}</h3>
            <p className="chy-para-1 wds-deck__desc">{svc.desc}</p>
            <ul className="wds-deck__list">
              {svc.items.map((item) => (
                <li key={item}><i className="flaticon-straight-right-arrow"></i>{item}</li>
              ))}
            </ul>
            <span className="chy-pr-btn-1 wds-deck__btn">
              <span className="text">Learn More</span>
              <span className="icon"><i className="fa-solid fa-right-long"></i></span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
