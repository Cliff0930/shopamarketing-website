import HeroCounters from "@/components/HeroCounters";

export default function ServiceHero({
  headline,
  subtext,
}: {
  headline: React.ReactNode;
  subtext: string;
}) {
  return (
    <>
      <HeroCounters />
      <section className="service-hero">
        <div className="container chy-container-1">
          <div className="service-hero__inner">

            <h1 className="chy-title-1 service-hero__headline wow fadeInLeft" data-wow-duration="1.2s">
              {headline}
            </h1>

            <p className="service-hero__sub wow fadeInUp" data-wow-duration="2s">
              {subtext}
            </p>

            <div className="service-hero__stats service-hero__stats--animate">
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
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
