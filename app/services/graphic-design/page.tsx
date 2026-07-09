import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetailsBody from "@/components/ServiceDetailsBody";

export default function GraphicDesignPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Brand Identity That Actually Looks Like You."
        subtext="Logos, brand assets, and creative design that make your business instantly recognisable — consistent across every touchpoint."
      />

      <ServiceDetailsBody
        currentPath="/services/graphic-design"
        marquee="Graphic Design"
        introTitle="Graphic Design: Visual Identity That Stands Out"
        introParas={[
          'Great design communicates before a single word is read. Our graphic design service helps Australian businesses create compelling visual identities, marketing materials, and digital assets that make a powerful first impression and build long-term brand recognition.',
          'From logo design and brand identity systems to social media graphics, print collateral, and advertising creative, our designers bring strategic thinking and aesthetic excellence to every project — ensuring your visual communication is always on-brand and on-point.',
        ]}
        provideIntro="Our graphic design service spans brand identity, marketing collateral, digital assets, and advertising creative — all aligned with your brand guidelines and business objectives."
        features={[
          {
            icon: 'flaticon-target',
            title: 'Brand Identity',
            body: 'Logo design, typography, colour palettes, and brand guidelines that define a consistent, memorable visual identity across every touchpoint.',
          },
          {
            icon: 'flaticon-megaphone',
            title: 'Marketing Collateral',
            body: 'Brochures, flyers, business cards, presentations, and exhibition materials designed to communicate your value proposition clearly and professionally.',
          },
          {
            icon: 'flaticon-web-design-1',
            title: 'Digital Assets',
            body: 'Social media graphics, email templates, banner ads, and website graphics optimised for digital platforms and designed to drive engagement.',
          },
          {
            icon: 'flaticon-web-design',
            title: 'Ad Creative',
            body: 'Performance-focused advertising creative for Google Display, social media, OOH, and print — designed to stop audiences in their tracks and communicate your message instantly.',
          },
        ]}
        challenge="Inconsistent, low-quality design undermines trust and erodes brand equity. Businesses that invest in professional design consistently outperform competitors on conversion rates, customer retention, and premium pricing power. Our team ensures your visual communication reflects the quality of your product or service."
        faqPrefix="gfx"
        faqs={[
          {
            q: 'Do I need brand guidelines before starting?',
            a: "No. If you don't have brand guidelines, we can create them for you as part of a brand identity project. If you do have existing guidelines, we work within them to maintain consistency across all deliverables.",
          },
          {
            q: 'What file formats will I receive?',
            a: 'We deliver all final files in the formats you need — typically PNG, JPG, SVG, PDF, and editable source files (AI, EPS, or Figma). For print projects, we provide print-ready PDFs with correct colour profiles, bleed, and trim marks.',
          },
          {
            q: 'How many revision rounds are included?',
            a: 'We include two rounds of revisions on all design projects, which covers the vast majority of client feedback. Additional revision rounds are available at an hourly rate. Thorough briefing upfront significantly reduces the need for extensive revisions.',
          },
          {
            q: 'Can you match our existing brand style?',
            a: "Absolutely. Our designers are experienced at working within established brand styles and guidelines. Share your existing brand assets and we'll ensure every deliverable feels like a natural extension of your visual identity.",
          },
        ]}
      />
    </>
  );
}
