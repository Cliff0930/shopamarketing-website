'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    tagline: 'For businesses ready to get serious about being seen.',
    monthly: '$3,499',
    annual: '$3,149',
    featured: false,
    features: [
      { text: 'Website management', included: true },
      { text: 'Custom dashboard access for all reports', included: true },
      { text: 'Creative design for all platforms', included: true },
      { text: 'Sponsored Facebook & Instagram ads', included: true },
      { text: 'Guaranteed 100,000 impressions per month', included: true },
      { text: 'Google Search & Display Ads included', included: true },
      { text: 'Includes Google & Meta ad spend', included: true },
      { text: 'Estimated monthly website traffic: 50+ visits', included: true },
      { text: 'SEO for 5 keywords', included: true },
      { text: '1 blog per month', included: true },
      { text: 'AI Search / AI SEO across ChatGPT, Gemini & other AI platforms', included: false },
      { text: 'Brand videos', included: false },
      { text: 'Organic social media posting', included: false },
    ],
  },
  {
    name: 'Growth',
    tagline: 'For businesses ready to outgrow their competitors.',
    monthly: '$4,999',
    annual: '$3,499',
    featured: true,
    features: [
      { text: 'Website management', included: true },
      { text: 'Custom dashboard access for all reports', included: true },
      { text: 'Creative design for all platforms', included: true },
      { text: 'Sponsored Facebook & Instagram ads', included: true },
      { text: 'Guaranteed 250,000 impressions per month', included: true },
      { text: 'Google Search & Display Ads included', included: true },
      { text: 'Includes Google & Meta ad spend', included: true },
      { text: 'Estimated monthly website traffic: 250+ visits', included: true },
      { text: 'SEO for 15 keywords', included: true },
      { text: '2 blogs per month', included: true },
      { text: 'AI Search / AI SEO across ChatGPT, Gemini & other AI platforms', included: true },
      { text: '2 brand videos per month', included: true },
      { text: 'Organic social media posting', included: false },
    ],
  },
  {
    name: 'Dominate',
    tagline: 'For businesses that want to own their market, full stop.',
    monthly: '$9,999',
    annual: '$8,999',
    featured: false,
    features: [
      { text: 'Website management', included: true },
      { text: 'Custom dashboard access for all reports', included: true },
      { text: 'Creative design for all platforms', included: true },
      { text: 'Sponsored Facebook, Instagram, TikTok & LinkedIn ads', included: true },
      { text: 'Guaranteed 500,000 impressions per month', included: true },
      { text: 'Google Search & Display Ads included', included: true },
      { text: 'Includes Google & Meta ad spend', included: true },
      { text: 'Estimated monthly website traffic: 500+ visits', included: true },
      { text: 'SEO for up to 30 keywords', included: true },
      { text: '4 blogs per month', included: true },
      { text: 'AI Search / AI SEO across ChatGPT, Gemini & other AI platforms', included: true },
      { text: '4 brand videos per month', included: true },
      { text: 'Organic social media posting', included: true },
    ],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="wdsp-area pt-110 pb-110">
      <div className="container chy-container-1">

        <div className="section-title-wrap mb-40 text-center">
          <h5 className="chy-subtitle-1 wow fadeInDown">our service plans</h5>
          <h2 className="chy-title-1 chy-split-in-right chy-split-text">Simple, All-Inclusive Rates. No Nasty Surprises.</h2>
          <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '680px', margin: '10px auto 0' }}>
            Every plan includes strategy, execution, creative AND ad spend. The price you see is the price you pay. Pick your pace:
          </p>
        </div>

        {/* ── Monthly / Annually toggle ── */}
        <div className="wdsp-toggle-wrap wow fadeInUp">
          <div className="wdsp-toggle">
            <button className={`wdsp-tog-btn${!annual ? ' active' : ''}`} onClick={() => setAnnual(false)}>
              Monthly
            </button>
            <button className={`wdsp-tog-btn${annual ? ' active' : ''}`} onClick={() => setAnnual(true)}>
              Annually
              <span className="wdsp-save-tag">Save 10%</span>
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="wdsp-grid">
          {plans.map((plan, i) => (
            <div key={plan.name} className={`wdsp-card${plan.featured ? ' wdsp-card--featured' : ''} wow fadeInUp`} data-wow-delay={`${i * 0.12}s`}>

              {plan.featured && <div className="wdsp-badge">★ Best Value</div>}

              <div className="wdsp-name">{plan.name}</div>
              <p className="wdsp-tagline">{plan.tagline}</p>
              <div>
                <span className="wdsp-price">{annual ? plan.annual : plan.monthly}</span>
                <span className="wdsp-per">/mo</span>
              </div>
              <p className="wdsp-bill">Billed {annual ? 'annually' : 'monthly'} + GST</p>

              <a href="/contact-us" className={`wdsp-cta${plan.featured ? ' wdsp-cta--filled' : ''}`}>
                Book a Strategy Call <i className="fa-solid fa-right-long"></i>
              </a>

              <div className="wdsp-divider">
                <span>What&apos;s included every month</span>
              </div>

              <ul className="wdsp-feats">
                {plan.features.map((f) => (
                  <li key={f.text} className={f.included ? 'yes' : 'no'}>
                    {f.included
                      ? <i className="flaticon-check"></i>
                      : <i className="fas fa-times"></i>
                    }
                    {f.text}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
