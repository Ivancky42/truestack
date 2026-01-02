import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { TechnologyPartners } from "@/components/sections/technology-partners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Code2,
  Users,
  ArrowRight,
  ClipboardCheck,
  FileCheck,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Truestack — KPKT compliance services and fintech software development for licensed money lenders in Malaysia.",
};

const values = [
  {
    title: "KPKT Expertise",
    description:
      "Deep understanding of Malaysia's KPKT regulatory landscape. We've helped operators navigate compliance and go digital.",
    icon: Shield,
  },
  {
    title: "Modern Tech Stack",
    description:
      "We use battle-tested technologies like Next.js, Flutter, Node.js, and PostgreSQL. Built for performance and maintainability.",
    icon: Code2,
  },
  {
    title: "End-to-End Delivery",
    description:
      "From compliance management to software development and deployment, we handle everything so you can focus on your business.",
    icon: Landmark,
  },
  {
    title: "Collaborative Approach",
    description:
      "We work closely with your team, providing regular updates and adapting to your needs throughout our engagement.",
    icon: Users,
  },
];

const services = [
  {
    title: "KPKT Account Management",
    description: "License renewals, annual submissions, and regulatory coordination.",
    icon: ClipboardCheck,
    href: "/services/account-management",
    isKpkt: true,
  },
  {
    title: "Digital License Conversion",
    description: "Transform to a fully digital KPKT-licensed platform in 6 months.",
    icon: FileCheck,
    href: "/services/digital-license",
    isKpkt: true,
  },
  {
    title: "Custom Software Development",
    description: "Full-stack fintech development for P2P and digital lending platforms.",
    icon: Code2,
    href: "/services/software-development",
    isKpkt: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Truestack"
        subtitle="KPKT compliance services and fintech software development for licensed money lenders in Malaysia."
      />

      {/* Who We Are */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Who We Are" />
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Truestack is a specialized service provider for KPKT-licensed money lenders 
                in Malaysia. We offer a complete range of services — from regulatory 
                compliance management to custom software development — helping operators 
                run and grow their lending businesses.
              </p>
              <p>
                Our team combines deep expertise in Malaysia's regulatory landscape with 
                strong technical capabilities. We've helped traditional lenders go digital, 
                built KPKT-compliant platforms from scratch, and managed ongoing compliance 
                requirements for operators across the country.
              </p>
              <p>
                We work with trusted partners for specialized services like penetration 
                testing, KYC verification, and digital signing — allowing us to deliver 
                complete solutions while focusing on what we do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="What We Do"
            subtitle="Three core services to help you succeed as a licensed money lender."
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className={`group transition-all hover:shadow-md ${
                  service.isKpkt ? "hover:border-kpkt/50" : "hover:border-primary/50"
                }`}
              >
                <CardHeader>
                  <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg ${
                    service.isKpkt ? "bg-kpkt/10" : "bg-primary/10"
                  }`}>
                    <service.icon className={`h-6 w-6 ${
                      service.isKpkt ? "text-kpkt" : "text-primary"
                    }`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className={`gap-2 px-0 hover:bg-transparent ${
                      service.isKpkt ? "hover:text-kpkt" : "hover:text-primary"
                    }`}
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Truestack */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Why Truestack"
            subtitle="What sets us apart as your compliance and development partner."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <TechnologyPartners />

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you need help with compliance, want to go digital, or are building 
              a new platform — we're here to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
