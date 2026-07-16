import { testimonials } from "@/components/testimonialsData";

export default function ServiceTestimonials() {
  return (
    <div className="wds-reviews-area pt-110 pb-110">
      <div className="container chy-container-1">
        <div className="section-title-wrap text-center mb-50">
          <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
          <h2 className="chy-title-1 chy-split-in-right chy-split-text">Results Business Owners Rave About</h2>
          <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '640px', margin: '10px auto 0' }}>
            We&apos;d happily brag all day, but our clients tell it better. Here&apos;s what business owners say about working with us.
          </p>
        </div>
        <div className="wds-reviews-wall">
          {testimonials.map((t, i) => (
            <div key={i} className="wds-review-holder wow wds-unfold-in" data-wow-delay={`${i * 0.12}s`} data-wow-duration="0.8s">
              <figure className="wds-review-card">
                <span className="wds-review-card__mark" aria-hidden="true">&ldquo;</span>
                <blockquote className="wds-review-card__quote">{t.quote}</blockquote>
                <figcaption className="wds-review-card__person">
                  <span className="wds-review-card__avatar">
                    {t.logo
                      ? <img src={t.logo} alt={t.name} loading="lazy" />
                      : <span className="wds-review-card__initials">{t.name.split(' ').slice(0, 2).map(w => w[0]).join('')}</span>
                    }
                  </span>
                  <span className="wds-review-card__who">
                    <span className="wds-review-card__name">{t.name}</span>
                    <span className="wds-review-card__bio">{t.bio}</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
