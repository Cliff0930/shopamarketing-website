import React from "react";
import HeroCounters from "@/components/HeroCounters";

type Stat = { value: string; label: string };

export default function ServiceHero({
  headline,
  subtext,
  bgImage,
  stats,
}: {
  headline: React.ReactNode;
  subtext: React.ReactNode;
  bgImage?: string;
  stats?: Stat[];
}) {
  return (
    <>
      {/* Default hero shows animated counters; a `stats` override renders static proof points */}
      {!stats && <HeroCounters />}
      <section
        className={`service-hero${bgImage ? ' service-hero--photo' : ''}`}
        style={bgImage ? { backgroundImage: `linear-gradient(90deg, #f6f6f6 0%, #f6f6f6 35%, rgba(246, 246, 246,0.55) 58%, rgba(246, 246, 246,0) 78%), url('${bgImage}')` } : undefined}
      >
        <div className="container chy-container-1">
          <div className="service-hero__inner">

            <h1 className="chy-title-1 service-hero__headline wow fadeInLeft" data-wow-duration="1.2s">
              {headline}
            </h1>

            <p className="service-hero__sub wow fadeInUp" data-wow-duration="2s">
              {subtext}
            </p>

            <div className="service-hero__stats service-hero__stats--animate">
              {stats ? (
                stats.map((s, i) => {
                  // Values render at full size; only very long ones (e.g. "Meta, TikTok & LinkedIn") shrink so they don't blow out the row
                  const isLong = s.value.length > 18;
                  return (
                    <React.Fragment key={s.label}>
                      {i > 0 && <div className="service-hero__stat-divider" />}
                      <div className="service-hero__stat">
                        <span className={`service-hero__stat-num${isLong ? ' service-hero__stat-num--text' : ''}`}>{s.value}</span>
                        <span className="service-hero__stat-label">{s.label}</span>
                      </div>
                    </React.Fragment>
                  );
                })
              ) : (
                <>
                  <div className="service-hero__stat">
                    <span className="service-hero__stat-num"><span id="hero-counter-1">0</span>+</span>
                    <span className="service-hero__stat-label">Years Combined Experience</span>
                  </div>
                  <div className="service-hero__stat-divider" />
                  <div className="service-hero__stat">
                    <span className="service-hero__stat-num"><span id="hero-counter-2">0</span>+</span>
                    <span className="service-hero__stat-label">Campaigns Delivered</span>
                  </div>
                  <div className="service-hero__stat-divider" />
                  <div className="service-hero__stat">
                    <span className="service-hero__stat-num"><span id="hero-counter-3">0</span>+</span>
                    <span className="service-hero__stat-label">Businesses Served</span>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
