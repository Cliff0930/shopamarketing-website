import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetailsBody from "@/components/ServiceDetailsBody";

export default function GoogleAdsPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Pay-Per-Click, With Real ROI."
        subtext="Google Ads campaigns managed by senior specialists who obsess over cost-per-lead, not just clicks. No wasted spend, no set-and-forget."
      />

      <ServiceDetailsBody
        currentPath="/services/google-ads"
        marquee="Google Ads"
        introTitle="Google Ads: Get In Front of Ready-to-Buy Customers"
        introParas={[
          "Google Ads puts your business in front of high-intent customers at the exact moment they're searching for what you offer. Our Google Ads management service helps Australian businesses capture demand, generate leads, and drive sales with precision-targeted campaigns that deliver measurable ROI.",
          "We manage Search, Shopping, Display, YouTube, and Performance Max campaigns across Google's full network — always focused on the metrics that actually matter to your business, not just clicks and impressions.",
        ]}
        provideIntro="From account setup and keyword strategy to ongoing optimisation and reporting, we handle every aspect of your Google Ads campaigns to maximise return on ad spend."
        features={[
          {
            icon: 'flaticon-target',
            title: 'Campaign Strategy',
            body: 'Comprehensive keyword research, competitor analysis, and campaign architecture designed to capture intent at every stage of the buyer journey.',
          },
          {
            icon: 'flaticon-megaphone',
            title: 'Ad Copywriting',
            body: 'Compelling ad copy crafted to maximise click-through rates and quality scores — reducing your cost per click while improving ad positions.',
          },
          {
            icon: 'flaticon-web-design-1',
            title: 'Bid Management',
            body: 'Smart bidding strategy and manual oversight to allocate budget where it delivers the highest return — continuously adjusted as market conditions change.',
          },
          {
            icon: 'flaticon-web-design',
            title: 'Conversion Tracking',
            body: 'Full conversion tracking setup — calls, form fills, purchases, and micro-conversions — so every optimisation decision is grounded in real revenue data.',
          },
        ]}
        challenge="Google Ads is increasingly complex — smart bidding, Performance Max campaigns, consent mode, and constant algorithm updates make it harder than ever to maintain profitability without specialist expertise. Poor account structure and wasted spend on irrelevant searches can quickly drain your budget. Our team actively manages your campaigns to eliminate waste and drive consistent results."
        faqPrefix="gads"
        faqs={[
          {
            q: 'How much should I spend on Google Ads?',
            a: "The right budget depends on your industry, competition, and goals. We typically recommend a minimum of $2,000/month in ad spend to compete effectively in most markets. We'll provide a budget recommendation based on keyword research for your specific industry.",
          },
          {
            q: 'Do I own my Google Ads account?',
            a: 'Yes, always. We work inside your own Google Ads account, which you own and retain full access to. We never lock clients into proprietary accounts. All your campaign data and history stays with you if you ever decide to manage campaigns in-house or switch agencies.',
          },
          {
            q: 'How quickly can Google Ads generate leads?',
            a: 'Google Ads can start driving traffic within hours of campaign launch. The first 2–4 weeks is typically a learning phase. Most clients see strong lead flow by week 4–6 as smart bidding strategies mature.',
          },
          {
            q: 'What types of Google Ads campaigns do you run?',
            a: "We manage Search, Shopping, Display, YouTube video, and Performance Max campaigns. We'll recommend the right campaign types based on your business objectives and budget.",
          },
        ]}
      />
    </>
  );
}
