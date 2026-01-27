import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";
import { ComplianceSection } from "@/components/sections/compliance-section";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { CtaSection } from "@/components/sections/cta-section";
import { TrueIdentitySection } from "@/components/sections/true-identity-section";
import LogoCloud1 from "@/components/logo-cloud-1";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Build & Scale Your Lending Business"
        subtitle="Compliance services, digital license conversion, and custom fintech platforms — everything you need to operate and grow in Malaysia's regulated lending space."
        primaryCta={{ label: "Explore Services", href: "/services" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />
      <LogoCloud1 
        variant="clients" 
        showCategories={false}
        compact
      />
      <WhatWeDo />
      <TrueIdentitySection />
      <ServicesGrid />
      <ExpertiseSection />
      <ComplianceSection />
      <CaseStudies />
      <CtaSection />
    </>
  );
}
