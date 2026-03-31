import { SiteFooter } from "@/components/layout/site-footer";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InnovationLabSection } from "@/components/sections/innovation-lab-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { TechnicalDepthSection } from "@/components/sections/technical-depth-section";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <div className="page-frame">
      <SiteHeader />

      <main>
        <HeroSection />
        <MetricsSection />
        <CaseStudiesSection />
        <TechnicalDepthSection />
        <InnovationLabSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
