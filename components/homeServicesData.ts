export interface HomeService {
  title: string;
  desc: string;
  items: string[];
  link: string;
  image?: string;
  video?: string;
}

export const homeServices: HomeService[] = [
  {
    title: 'Done For You',
    desc: 'Your entire marketing department for one monthly fee. Strategy, ads, SEO, content, creative and reporting, all handled end to end by one senior team while you get on with running the business.',
    items: ['All-Inclusive Monthly Plans', 'Ads, SEO, Content & Creative', 'Dedicated Account Manager'],
    link: '/services/done-for-you',
    image: '/assets/img/services/DONWFORYOU-v2.webp',
    video: '/assets/img/services/done-for-you.mp4',
  },
  {
    title: 'OOH Advertising',
    desc: "Ad blockers can't touch a billboard! Put your brand where your customers actually live: grocery stores, medical centres, digital billboards and transit networks.",
    items: ['Grocery Store TV Screens', 'Digital Billboards', 'Transit & Outdoor Media'],
    link: '/services/ooh-advertising',
    image: '/assets/img/services/ooh-v2.webp',
    video: '/assets/img/services/ooh.mp4',
  },
  {
    title: 'AI SEO Services',
    desc: 'Google, ChatGPT, AI Overviews: wherever your customers ask, be the answer they find. Modern SEO that climbs the rankings and gets your business cited by AI search, driving leads without ongoing ad spend.',
    items: ['Keyword Research', 'On-Page Optimisation', 'Search Rankings Boost'],
    link: '/services/seo-services',
    image: '/assets/img/services/seoAI-v2.webp',
    video: '/assets/img/services/ai-seo.mp4',
  },
  {
    title: 'Social Media Ads',
    desc: 'Your customers are scrolling right now. We run targeted Facebook, Instagram and TikTok campaigns that turn scrollers into shoppers, with every dollar tied back to actual revenue.',
    items: ['Facebook & Instagram Ads', 'TikTok Campaigns', 'Audience Targeting'],
    link: '/services/social-media',
    image: '/assets/img/services/SocialMedia-v2.webp',
    video: '/assets/img/services/social-media.mp4',
  },
  {
    title: 'Website Design',
    desc: 'Your website is the one employee who never clocks off, so it should be selling around the clock. Fast, mobile-first custom builds, with 12 months of maintenance and a lifetime technical guarantee included.',
    items: ['Custom Web Design', 'Mobile Responsive', 'Conversion Optimised'],
    link: '/services/website',
    image: '/assets/img/services/webdesign-v2.webp',
    video: '/assets/img/services/website.mp4',
  },
  {
    title: 'Google Ads',
    desc: 'Catch customers mid-search, the exact moment they want what you sell. Search, Shopping, Display and YouTube campaigns obsessed with cost per lead, with every dollar tracked home.',
    items: ['Google Search Ads', 'Display & YouTube Ads', 'Real ROI Tracking'],
    link: '/services/google-ads',
    image: '/assets/img/services/GAds-v2.webp',
    video: '/assets/img/services/google-ads.mp4',
  },
  {
    title: 'Graphic Design',
    desc: 'Your brand gets one heartbeat to make a first impression. Logos, brand identities and creative that make your business look as good as it performs, everywhere it shows up.',
    items: ['Logo & Brand Identity', 'Marketing Collateral', 'Social Media Assets'],
    link: '/services/graphic-design',
    image: '/assets/img/services/GraphicDes-v2.webp',
    video: '/assets/img/services/graphic.mp4',
  },
];
