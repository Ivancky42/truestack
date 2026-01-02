import { Hero } from "@/components/sections/hero";
import { ClientsSection } from "@/components/sections/clients-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";
import { TechStack } from "@/components/sections/tech-stack";
import { ComplianceSection } from "@/components/sections/compliance-section";

export default function HomePage() {
  return (
    <>
      <Hero
        title="KPKT Services & Fintech Software"
        subtitle="From compliance management to digital license conversion and custom platform development — everything you need to run and grow your lending business in Malaysia."
        primaryCta={{ label: "Explore Services", href: "/services" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
        showCodeCard
      />
      <ClientsSection />
      <ServicesGrid />
      <ComplianceSection />
      <CaseStudies />
      <TechStack />
    </>
  );
}
