import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetailsBody from "@/components/ServiceDetailsBody";

export default function OohAdvertisingPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Get Seen Where Your Customers Actually Are."
        subtext="Billboards, transit, and outdoor media planned and placed for maximum local reach — from concept to installation."
      />

      <ServiceDetailsBody
        currentPath="/services/ooh-advertising"
        marquee="OOH Advertising"
        introTitle="OOH Advertising: Make Your Brand Unmissable"
        introParas={[
          'Out-of-Home advertising places your brand in front of audiences where they live, work, and play. From billboards and transit ads to digital screens and street furniture, our OOH advertising service helps Australian businesses command attention and drive brand recall at scale.',
          'We handle everything from creative concept and production through to placement, scheduling, and performance reporting — ensuring your OOH campaign delivers maximum impact within your budget.',
        ]}
        provideIntro="Our OOH advertising service covers the full campaign lifecycle — strategy, creative, media buying, production, installation, and measurement — all under one roof."
        features={[
          {
            icon: 'flaticon-target',
            title: 'Strategic Planning',
            body: 'Identify the right formats, locations, and timing to reach your target audience with precision and efficiency.',
          },
          {
            icon: 'flaticon-megaphone',
            title: 'Creative Design',
            body: 'Bold, impactful creative designed specifically for OOH formats — built to stop audiences in their tracks and leave a lasting impression.',
          },
          {
            icon: 'flaticon-web-design-1',
            title: 'Media Buying',
            body: 'Leverage our media relationships to secure prime placements at competitive rates, from premium billboards to transit networks.',
          },
          {
            icon: 'flaticon-web-design',
            title: 'Campaign Reporting',
            body: 'Measure reach, frequency, and brand lift with post-campaign analysis and audience data to inform future placements.',
          },
        ]}
        challenge="In an increasingly digital world, physical advertising cuts through the noise in ways screens can't. But OOH advertising requires specialist knowledge of formats, audiences, and media networks. Without the right strategy and creative, budget is easily wasted on placements that don't deliver. We bring the expertise to make every dollar count."
        faqPrefix="ooh"
        faqs={[
          {
            q: 'What types of OOH advertising do you offer?',
            a: 'We work across the full spectrum of OOH formats including billboards (static and digital), transit advertising (buses, trains, taxis), street furniture (bus shelters, kiosks), airport advertising, shopping centre displays, and large-format building wraps.',
          },
          {
            q: 'What budget do I need for an OOH campaign?',
            a: "We recommend a minimum of $5,000 for local campaigns and $20,000+ for city-wide or national campaigns. We'll work with your budget to maximise impact and coverage.",
          },
          {
            q: 'How do you measure OOH campaign effectiveness?',
            a: 'We measure OOH effectiveness using audience reach data, foot traffic analysis, brand lift studies, and integration with your digital campaigns to track uplift in online searches and website visits during the campaign period.',
          },
          {
            q: 'How long does it take to launch an OOH campaign?',
            a: 'A typical OOH campaign takes 3–6 weeks from briefing to launch. Digital OOH formats can be deployed more quickly — sometimes within days of creative approval.',
          },
        ]}
      />
    </>
  );
}
