import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetailsBody from "@/components/ServiceDetailsBody";

export default function SocialMediaPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Social Ads That Actually Convert."
        subtext="Meta and Instagram campaigns built on real audience data — not boosted posts. Creative, targeting, and reporting that ties back to revenue."
      />

      <ServiceDetailsBody
        currentPath="/services/social-media"
        marquee="Social Media Ads"
        introTitle="Social Media Ads: Targeted Campaigns That Convert"
        introParas={[
          'Social media advertising gives businesses unparalleled ability to reach precisely defined audiences with compelling creative at scale. Our social media ads service helps Australian businesses drive leads, sales, and brand awareness across Facebook, Instagram, TikTok, LinkedIn, and beyond.',
          'We combine audience intelligence, creative strategy, and performance optimisation to deliver campaigns that go beyond impressions — we focus on outcomes that directly impact your bottom line.',
        ]}
        provideIntro="From campaign strategy and audience building to creative production and ongoing optimisation, we manage every element of your social media advertising for maximum ROI."
        features={[
          {
            icon: 'flaticon-target',
            title: 'Audience Targeting',
            body: 'Build precise custom audiences using demographics, interests, behaviours, lookalikes, and retargeting to reach the right people at the right moment.',
          },
          {
            icon: 'flaticon-megaphone',
            title: 'Ad Creative',
            body: 'Scroll-stopping creative — static images, video, carousel, and stories — crafted to communicate your message and compel action.',
          },
          {
            icon: 'flaticon-web-design-1',
            title: 'Campaign Management',
            body: 'Ongoing campaign monitoring, A/B testing, bid optimisation, and budget management to continuously improve performance and reduce cost per result.',
          },
          {
            icon: 'flaticon-web-design',
            title: 'Performance Reporting',
            body: 'Clear, jargon-free reporting on reach, engagement, leads, conversions, and ROAS — with actionable insights each month.',
          },
        ]}
        challenge="Social media platforms constantly evolve their algorithms, ad formats, and targeting capabilities. Without specialist expertise and daily attention, ad budgets are easily wasted on campaigns that don't deliver. Our team stays ahead of platform changes to keep your campaigns profitable."
        faqPrefix="social"
        faqs={[
          {
            q: 'Which social platforms do you advertise on?',
            a: "We run campaigns across Facebook, Instagram, TikTok, LinkedIn, Pinterest, and YouTube. Platform selection is driven by your target audience and objectives — we'll recommend the right mix based on where your customers spend their time.",
          },
          {
            q: 'What ad budget do I need to get started?',
            a: 'We recommend a minimum ad spend of $1,500/month per platform to gather meaningful data and optimise effectively. Our management fee is charged separately. Lower budgets are possible for highly targeted local campaigns.',
          },
          {
            q: 'Do you create the ad creative as well?',
            a: 'Yes. Our team handles copywriting, graphic design, and video editing for your ads. We can also work with your existing brand assets. Creative is developed, tested, and iterated based on performance data to continuously improve results.',
          },
          {
            q: 'How soon will I see results?',
            a: 'Social media ads can deliver results quickly — often within the first 2–4 weeks of launch. The first month is typically a learning phase where we test audiences and creative. Months 2–3 see significant performance improvements as we optimise based on data.',
          },
        ]}
      />
    </>
  );
}
