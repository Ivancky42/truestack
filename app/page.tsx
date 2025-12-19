import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";
import { TechStack } from "@/components/sections/tech-stack";
import { ComplianceSection } from "@/components/sections/compliance-section";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Fintech Software. Built Right."
        subtitle="We build digital lending platforms, payment systems, and financial applications. Licensed, compliant, and ready for scale."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
        showCodeCard
      />
      <ServicesGrid />
      <ComplianceSection />
      <CaseStudies />
      <TechStack />
    </>
  );
}
