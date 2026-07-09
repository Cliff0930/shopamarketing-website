import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetailsBody from "@/components/ServiceDetailsBody";

export default function SeoServicesPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Rank Higher. Grow Organic Traffic."
        subtext="Technical SEO, content, and link building that compounds — built for long-term organic growth, not quick wins that fade."
      />

      <ServiceDetailsBody
        currentPath="/services/seo-services"
        marquee="SEO Services"
        introTitle="SEO Services: Rank Higher, Grow Faster"
        introParas={[
          'Search engine optimisation is the foundation of sustainable online growth. Our SEO services help Australian businesses climb Google rankings, attract high-intent organic traffic, and convert visitors into customers — without relying solely on paid advertising.',
          "We take a data-driven, holistic approach to SEO — combining technical excellence, compelling content, and strategic link building to deliver lasting results. Whether you're targeting local customers or competing nationally, our team builds strategies tailored to your market.",
        ]}
        provideIntro="Our SEO service covers every dimension of search optimisation — from site architecture and page speed to content strategy and authoritative backlinks."
        features={[
          {
            icon: 'flaticon-target',
            title: 'Technical SEO',
            body: "Audit and optimise your site's technical foundations — crawlability, indexability, Core Web Vitals, schema markup, and site speed — so search engines can rank your content.",
          },
          {
            icon: 'flaticon-megaphone',
            title: 'Keyword Research',
            body: 'Identify high-value keywords your target customers are searching for, mapping opportunities across the full funnel from awareness to purchase intent.',
          },
          {
            icon: 'flaticon-web-design-1',
            title: 'Content Optimisation',
            body: 'Create and optimise content that satisfies both search engines and users — from landing pages and blog posts to service pages and FAQs.',
          },
          {
            icon: 'flaticon-web-design',
            title: 'Link Building',
            body: "Build your site's authority with high-quality, relevant backlinks from reputable Australian and international publications in your industry.",
          },
        ]}
        challenge="Google's algorithms reward expertise, authority, and trust — all of which take time and consistent effort to build. Many businesses see SEO as a set-and-forget exercise, only to find rankings slip as competitors invest. Our ongoing SEO service keeps you ahead of algorithm updates and competitive shifts with proactive strategy and execution."
        faqPrefix="seo"
        faqs={[
          {
            q: 'How long does SEO take to show results?',
            a: 'SEO is a long-term investment. Most clients see initial improvements in rankings within 3–4 months, with significant traffic growth typically appearing at the 6–12 month mark. Competitive industries may take longer, while local SEO often shows results faster.',
          },
          {
            q: 'Do you offer local SEO for Australian businesses?',
            a: "Yes. Local SEO is one of our specialties. We optimise your Google Business Profile, build local citations, and create location-specific content to help you dominate local search results in your service area — whether that's a suburb, city, or state.",
          },
          {
            q: 'What SEO reporting do you provide?',
            a: 'We provide monthly reports covering keyword rankings, organic traffic, click-through rates, conversions, and backlink growth. We use Google Search Console, GA4, and SEMrush to give you a transparent view of progress against your goals.',
          },
          {
            q: 'Do you use white-hat SEO techniques only?',
            a: "Absolutely. We only use ethical, white-hat SEO techniques that comply with Google's guidelines. Black-hat tactics may produce short-term gains but risk manual penalties that can devastate your rankings. Our approach builds sustainable, long-term organic growth.",
          },
        ]}
      />
    </>
  );
}
