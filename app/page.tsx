import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";
import { TechStack } from "@/components/sections/tech-stack";
import { ComplianceSection } from "@/components/sections/compliance-section";
import LogoCloud1 from "@/components/logo-cloud-1";

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
      <div className="border-b bg-muted/30">
        <LogoCloud1 
          variant="clients" 
          showCategories={false}
          className="py-12 md:py-16"
        />
      </div>
      <ServicesGrid />
      <ComplianceSection />
      <CaseStudies />
      <TechStack />
    </>
  );
}
