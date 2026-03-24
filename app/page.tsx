import type { Metadata } from "next";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";
import { ComplianceSection } from "@/components/sections/compliance-section";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { CtaSection } from "@/components/sections/cta-section";
import { TrueIdentitySection } from "@/components/sections/true-identity-section";
import { TrueKreditPromo } from "@/components/sections/truekredit-promo";
import LogoCloud1 from "@/components/logo-cloud-1";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <LogoCloud1 
        variant="clients" 
        showCategories={false}
        compact
      />
      <WhatWeDo />
      <TrueKreditPromo />
      <TrueIdentitySection />
      <ServicesGrid />
      <ExpertiseSection />
      <ComplianceSection />
      <CaseStudies />
      <CtaSection />
    </>
  );
}
