'use client';

import { useState } from 'react';

const plans = [
  {
    icon: 'pc-1-icon-1.png',
    name: 'Starter',
    monthly: 3499,
    annual: 2799,
    note: 'No Lock-In Contracts — No Nasty Surprises',
    active: false,
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
    icon: 'pc-1-icon-2.png',
    name: 'Growth',
    monthly: 4999,
    annual: 3999,
    note: 'Dedicated Account Manager — No Nasty Surprises',
    active: true,
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
    icon: 'pc-1-icon-3.png',
    name: 'Dominate',
    monthly: 9999,
    annual: 7999,
    note: 'All-Inclusive & Transparent — No Nasty Surprises',
    active: false,
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
    <div className="chy-price-card-1-area pt-145 fix">
      <div className="container chy-container-1">

        <div className="section-title-wrap mb-30 text-center">
          <h5 className="chy-subtitle-1 wow fadeInDown">our service plans</h5>
          <h2 className="chy-title-1 chy-split-in-right chy-split-text">Simple, All-Inclusive Rates</h2>
        </div>

        {/* ── Monthly / Annually toggle ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#f0f0f5', borderRadius: 50, padding: 4,
          }}>
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: '10px 28px', borderRadius: 50, border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: 15, transition: 'all 0.25s',
                background: !annual ? '#141515' : 'transparent',
                color: !annual ? '#fff' : '#666',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                padding: '10px 24px', borderRadius: 50, border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'all 0.25s',
                background: annual ? '#141515' : 'transparent',
                color: annual ? '#fff' : '#666',
              }}
            >
              Annually
              <span style={{
                background: '#663dff', color: '#fff',
                fontSize: 11, fontWeight: 800, padding: '3px 9px', borderRadius: 20,
              }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="row chy-price-card-1-hight align-items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`col-xl-4 col-lg-6 col-md-6 d-flex${!plan.active ? ' asslideupcta' : ''}`}
            >
              <div className={`chy-price-card-1-item${plan.active ? ' active' : ''}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div className="icon-wrap" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <img src={`/assets/img/price/${plan.icon}`} alt="" />
                  </div>
                  <h3 className="chy-heading-1 price" style={{ fontSize: 26, fontWeight: 800, margin: 0 }}>{plan.name}</h3>
                </div>

                <h6 className="chy-heading-1 title" style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: 30, fontWeight: 900 }}>
                    ${(annual ? plan.annual : plan.monthly).toLocaleString()}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>/mo</span>
                </h6>

                <p className="chy-para-1" style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, opacity: 0.75 }}>
                  Billed {annual ? 'annually' : 'monthly'} + GST
                </p>

                <a href="/contact-us" className="pc1-btn">Book a Strategy Call →</a>

                <p className="chy-heading-1 date">{plan.note}</p>

                <ul className="chy-price-card-1-item-list" style={{ flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f.text} style={!f.included ? { opacity: 0.45 } : {}}>
                      {f.included
                        ? <i className="flaticon-check"></i>
                        : <i className="fas fa-times" style={{ marginRight: 8 }}></i>
                      }
                      {f.text}
                    </li>
                  ))}
                </ul>

                <img src="/assets/img/price/p1-il-2.png" alt="" className="style-icon" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
