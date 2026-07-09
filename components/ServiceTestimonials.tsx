const testimonials = [
  {
    quote: 'Royal Park Dental uses Shopa Marketing and are pleased with their customer service and product. Thank you for your patience and being so accommodating to our needs. Highly recommend!',
    name: 'Royal Park Dental',
    bio: 'Dental Clinic, Melbourne',
    logo: '/assets/img/testimonials/royal-park-dental.png',
  },
  {
    quote: 'We really appreciate Shopa Marketing and their service. Their employees are reliable and quick to action anything you need.',
    name: 'First Step Fertility',
    bio: 'Fertility Clinic, Australia',
    logo: '/assets/img/testimonials/first-step-fertility.png',
  },
  {
    quote: 'I am so happy with the entire process and end product. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design. Result is excellent.',
    name: 'Lmt Finance',
    bio: 'Mortgage Broker, Geelong',
    logo: '/assets/img/testimonials/lmt-finance.jpg',
  },
  {
    quote: 'They look after the people they work with, with very good deals.',
    name: 'Bargain Beds',
    bio: 'Small Family Business',
    logo: '/assets/img/testimonials/bargain-beds.png',
  },
  {
    quote: 'Very professional and very helpful with building a new business website and online marketing.',
    name: 'Independent Property Sales',
    bio: 'Real Estate, Geelong',
  },
  {
    quote: 'Easy well supported process with excellent communication along the way.',
    name: 'Coastal Skin & Beauty',
    bio: 'Beauty Clinic, Kapiti Coast',
    logo: '/assets/img/testimonials/coastal-skin-beauty.png',
  },
  {
    quote: "Lawrence's professional guidance was instrumental in crafting a compelling advertisement. Thrilled with the results and highly recommend his services.",
    name: 'Home Caring Tranmere',
    bio: 'NDIS & Home Care Provider, Adelaide',
    logo: '/assets/img/testimonials/home-caring-tranmere.webp',
  },
  {
    quote: 'The team were easy to communicate with which made the process smooth.',
    name: 'Hutt Dental Hub',
    bio: 'Dental Clinic',
    logo: '/assets/img/testimonials/hutt-dental-hub.png',
  },
  {
    quote: 'They were quick to respond and provided us with great quality artwork.',
    name: 'Fountain College',
    bio: 'Education',
    logo: '/assets/img/testimonials/fountain-college.png',
  },
  {
    quote: 'We (Bare) partnered with Shopa Marketing to execute our branded in-store print and digital signage across local supermarkets in Adelaide, and the results have been great. From initial discussions to final rollout, the team has been wonderful to work with - highly professional, responsive, and deeply attentive. They brought our vision to life, and the signage has significantly expanded our brand awareness in the local community.',
    name: 'Bare',
    bio: 'Brand, Adelaide',
    logo: '/assets/img/testimonials/bare.svg',
  },
];

export default function ServiceTestimonials() {
  return (
    <div className="chy-team-slider-1-area pt-90 pb-90" style={{ backgroundColor: '#f8f8fb' }}>
      <div className="container chy-container-1">
        <div className="section-title-wrap text-center mb-40">
          <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
          <h2 className="chy-title-1 chy-split-in-right chy-split-text">Trusted by Australian Business Owners</h2>
          <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700, marginTop: '8px' }}>
            Real Results. Real Businesses.
          </p>
          <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '640px', margin: '10px auto 0' }}>
            Don&apos;t take our word for it. Here is what Australian business owners say about working with Shopa Marketing.
          </p>
        </div>
        <div className="chy-team-slider-1-wrap">
          <div className="swiper-container chy_team_slider_1_active fix">
            <div className="swiper-wrapper">
              {testimonials.map((t, i) => (
                <div key={i} className="swiper-slide">
                  <div className="chy-team-slider-1-item">
                    <div className={`main-img${t.logo ? ' has-client-logo' : ' no-logo'}`}>
                      {t.logo
                        ? <img src={t.logo} alt={t.name} loading="lazy" />
                        : <span className="testimonial-initials">{t.name.split(' ').slice(0, 2).map(w => w[0]).join('')}</span>
                      }
                    </div>
                    <div className="content-wrap">
                      <h4 className="chy-heading-1 title">What people are saying</h4>
                      <p className="chy-para-1 comment">{t.quote}</p>
                      <div className="person">
                        <h5 className="chy-heading-1 name">{t.name}</h5>
                        <span className="chy-para-1 bio">{t.bio}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="chy-team-slider-1-pagination"></div>
        </div>
      </div>
    </div>
  );
}
