import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ClipboardCheck,
  FileCheck,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KPKT compliance services and fintech software development. Account management, digital license conversion, and custom software solutions for licensed money lenders in Malaysia.",
  keywords: [
    "KPKT services Malaysia",
    "account management KPKT",
    "digital license conversion",
    "fintech software development",
    "money lender compliance",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services - Truestack",
    description:
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
    images: ["/truestack-favicon.png"],
  },
};

const services = [
  {
    title: "KPKT Account Management",
    description:
      "We handle regulatory and administrative work so you can focus on growth. License renewals, annual submissions, and compliance coordination — all managed by a single, trusted partner.",
    icon: ClipboardCheck,
    href: "/services/account-management",
    badge: "Managed Service",
    isKpkt: true,
    highlights: [
      "License renewals & permit management",
      "Annual B & B1 submissions",
      "Director & shareholder updates",
      "PDPA license applications",
      "CoSec & SSM coordination",
      "Express handling available",
    ],
  },
  {
    title: "Digital KPKT License",
    description:
      "Transform your money lending business to operate fully online. We handle the complete digital license conversion process — from application to deployment — in as little as 6 months.",
    icon: FileCheck,
    href: "/services/digital-license",
    badge: "End-to-End",
    isKpkt: true,
    highlights: [
      "Digital KPKT license application",
      "Provisional license presentation",
      "Custom web & mobile platform",
      "Compliance verification",
      "Operate nationwide online",
    ],
  },
  {
    title: "Custom Software",
    description:
      "Full-stack fintech development for digital lending and payment platforms. From P2P lending marketplaces to KPKT-compliant loan management systems — built for Malaysia's regulatory landscape.",
    icon: Code2,
    href: "/services/software-development",
    badge: "Fintech Focused",
    isKpkt: false,
    highlights: [
      "P2P lending platforms",
      "Digital lending systems",
      "Payment integrations",
      "Malaysia data residency (AWS)",
      "KPKT & SC compliance",
      "Web + mobile apps",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services Built for Licensed Money Lenders"
        subtitle="From compliance management to custom software development, we provide end-to-end solutions for KPKT-licensed operators in Malaysia."
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="How We Can Help"
            subtitle="Choose the service that fits your business needs — or combine them for a complete solution."
            centered
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className={`group relative flex flex-col overflow-hidden transition-all hover:shadow-lg ${
                  service.isKpkt 
                    ? "hover:border-kpkt/50" 
                    : "hover:border-primary/50"
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                      service.isKpkt ? "bg-kpkt/10" : "bg-primary/10"
                    }`}>
                      <service.icon className={`h-6 w-6 ${
                        service.isKpkt ? "text-kpkt" : "text-primary"
                      }`} />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={service.isKpkt ? "bg-kpkt/10 text-kpkt" : ""}
                    >
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mb-6 flex-1 space-y-2">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${
                          service.isKpkt ? "text-kpkt" : "text-primary"
                        }`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    className={`w-full gap-2 ${
                      service.isKpkt 
                        ? "bg-kpkt hover:bg-kpkt/90" 
                        : ""
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

      {/* Why Choose Us */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Why Work With Us"
            subtitle="We specialize in Malaysia's KPKT regulatory landscape and fintech development."
            centered
          />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-kpkt/10">
                <span className="text-2xl font-bold text-kpkt">5+</span>
              </div>
              <h3 className="mb-2 font-semibold">Years Experience</h3>
              <p className="text-sm text-muted-foreground">
                Deep expertise in KPKT compliance and fintech software development.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>
              <h3 className="mb-2 font-semibold">Platforms Launched</h3>
              <p className="text-sm text-muted-foreground">
                Successfully deployed digital lending platforms across Malaysia.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-kpkt/10">
                <span className="text-2xl font-bold text-kpkt">100%</span>
              </div>
              <h3 className="mb-2 font-semibold">Compliance Rate</h3>
              <p className="text-sm text-muted-foreground">
                All our platforms meet KPKT and SC Malaysia regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Whether you need help with compliance, want to go digital, or are building a new fintech platform — we&apos;re here to help.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
