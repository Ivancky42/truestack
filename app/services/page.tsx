import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/shared/service-card";
import { ProcessSection } from "@/components/sections/process-section";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  CreditCard,
  FileCheck,
  Server,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack fintech development services. From frontend to backend, cloud infrastructure to third-party integrations.",
};

const coreServices = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive web applications built with React and Next.js. Fast, accessible, and user-friendly interfaces.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs and server-side applications with Node.js and Express. Built for performance and reliability.",
    icon: Server,
  },
  {
    title: "Database Design",
    description:
      "PostgreSQL database architecture optimized for financial data. Secure, scalable, and well-structured.",
    icon: Database,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "AWS Malaysia deployment for data residency compliance. ECS, EC2, Cognito, SES, S3 — configured for your needs.",
    icon: Cloud,
  },
];

const integrations = [
  {
    title: "KYC & eKYC",
    description:
      "Identity verification integrations for regulatory compliance. Automated customer onboarding with full audit trails.",
    icon: FileCheck,
  },
  {
    title: "Digital Signing",
    description:
      "On-premise electronic signature solutions for KPKT compliance. Legally binding and audit-ready.",
    icon: Layers,
  },
  {
    title: "Payment Gateways",
    description:
      "Integration with payment processors for seamless transactions. Local and international support.",
    icon: CreditCard,
  },
  {
    title: "Security & Pentesting",
    description:
      "We work with security partners for penetration testing and vulnerability assessments.",
    icon: Shield,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Full-Stack Fintech Development"
        subtitle="From concept to launch, we build the complete software stack for digital lending and payment platforms. Fully compliant with Malaysian regulations."
      />

      {/* Core Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Core Services"
            subtitle="Everything you need to build and scale your fintech platform with regulatory compliance."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2">
            {coreServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Integrations */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Third-Party Integrations"
            subtitle="We connect your platform with best-in-class services for compliance and operations."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2">
            {integrations.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Compliance Note */}
      <section className="border-t bg-primary/5 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-muted-foreground">
            All platforms built with <span className="font-medium text-foreground">Malaysia data residency</span>, 
            <span className="font-medium text-foreground"> complete audit trails</span>, and 
            <span className="font-medium text-foreground"> on-premise digital signing</span> where required for KPKT compliance.
          </p>
        </div>
      </section>
    </>
  );
}
