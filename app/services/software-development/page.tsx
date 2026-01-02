import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Landmark,
  Users,
  CreditCard,
  Code2,
  Smartphone,
  Server,
  Database,
  Cloud,
  Shield,
  FileCheck,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Full-stack fintech development for P2P lending, digital lending platforms, and payment systems. Built for Malaysia's regulatory landscape with KPKT and SC compliance.",
};

const fintechFocus = [
  {
    icon: Landmark,
    title: "Digital Lending Platforms",
    description: "End-to-end loan management systems with KPKT and SC Malaysia compliance. From application to disbursement, fully licensed and audit-ready.",
  },
  {
    icon: Users,
    title: "P2P Lending Marketplaces",
    description: "Connect borrowers with investors through a modern, secure platform. Multi-product support with real-time transaction processing.",
  },
  {
    icon: CreditCard,
    title: "Payment Solutions",
    description: "Secure payment gateway integrations and transaction processing. Built with Malaysia data residency and complete audit trails.",
  },
];

const techStack = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "iOS", "Android", "Cross-platform"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "Redis", "MongoDB"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    items: ["AWS Malaysia", "ECS", "EC2", "S3", "Cognito"],
  },
  {
    category: "Security",
    icon: Shield,
    items: ["Penetration Testing", "Encryption", "Audit Logs"],
  },
];

const integrations = [
  {
    icon: FileCheck,
    title: "KYC & eKYC",
    description: "Identity verification for regulatory compliance with automated onboarding.",
  },
  {
    icon: Layers,
    title: "Digital Signing",
    description: "On-premise electronic signature solutions for KPKT compliance.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    description: "Integration with local and international payment processors.",
  },
  {
    icon: Shield,
    title: "Security & Pentesting",
    description: "Penetration testing and vulnerability assessments with partners.",
  },
];

const complianceFeatures = [
  "KPKT Malaysia licensed",
  "SC Malaysia regulatory compliance",
  "Malaysia data residency (AWS)",
  "On-premise digital signing",
  "Complete audit trail system",
  "PDPA compliant",
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Hero
        title="Custom Fintech Software Development"
        subtitle="Full-stack development for digital lending and payment platforms. Built for Malaysia's regulatory landscape."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />

      {/* Fintech Focus */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="What We Build"
            subtitle="We specialize in fintech software that powers digital lending and payment solutions."
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {fintechFocus.map((item) => (
              <Card key={item.title} className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Our Tech Stack"
            subtitle="Modern technologies chosen for performance, security, and developer productivity."
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((stack) => (
              <Card key={stack.category}>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <stack.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">{stack.category}</h3>
                    <div className="flex flex-wrap gap-1">
                      {stack.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Integrations */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Third-Party Integrations"
            subtitle="We connect your platform with best-in-class services for compliance and operations."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration) => (
              <Card key={integration.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <integration.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{integration.title}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="border-t bg-primary/5 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Built for Compliance</Badge>
            <h2 className="mb-4 text-2xl font-bold">Every Platform We Build Meets Regulatory Requirements</h2>
            <p className="mb-6 text-muted-foreground">
              We understand Malaysia's regulatory landscape. Every platform includes the compliance features required for KPKT and SC Malaysia licensing.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {complianceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Success Story"
            subtitle="See what we've built for fintech companies in the region."
            centered
          />
          <Card className="mx-auto max-w-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logos/cashsouk_logo.png"
                    alt="CashSouk"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://cashsouk.com" target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-lg text-muted-foreground">
                A P2P lending platform connecting borrowers with investors. Modern fintech infrastructure built for scale with full compliance features and Malaysia data residency.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  P2P lending marketplace
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Investor and borrower portals
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Malaysia data residency (AWS)
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Comprehensive audit trails
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Multi-product support
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Real-time transaction processing
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Build?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Whether you're starting fresh or upgrading an existing system, we'll help you build a fintech platform that meets your business needs and regulatory requirements.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

