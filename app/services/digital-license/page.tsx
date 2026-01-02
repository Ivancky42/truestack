import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Presentation,
  Code2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital KPKT License Conversion",
  description:
    "Transform your money lending business to operate fully online. Complete digital KPKT license conversion in 6 months with custom web and mobile platforms.",
};

const processSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Digital KPKT License Application",
    description: "Complete application preparation and submission to KPKT. We handle all documentation, requirements, and regulatory correspondence.",
  },
  {
    step: 2,
    icon: Presentation,
    title: "Provisional License Presentation",
    description: "Professional presentation and documentation for provisional approval. We guide you through the KPKT review process.",
  },
  {
    step: 3,
    icon: Code2,
    title: "Custom Software Development",
    description: "Fully branded web platform and mobile app built to KPKT standards. Your platform, your brand, fully compliant.",
  },
  {
    step: 4,
    icon: ShieldCheck,
    title: "Compliance & Deployment",
    description: "Rigorous testing, compliance verification, and seamless launch. Go live with confidence.",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Operate Nationwide",
    description: "Serve customers across all of Malaysia, not just your local area.",
  },
  {
    icon: Smartphone,
    title: "Web + Mobile Apps",
    description: "Customers can apply and manage loans from anywhere, anytime.",
  },
  {
    icon: Clock,
    title: "Within 6 Months",
    description: "Our proven process gets you operational faster than going it alone.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Compliant",
    description: "Built to meet all KPKT digital licensing requirements from day one.",
  },
];

const platformFeatures = [
  "Online loan application & approval",
  "eKYC identity verification",
  "On-premise digital signing",
  "Automated disbursement",
  "Complete audit trails",
  "Malaysia data residency (AWS)",
  "Real-time reporting dashboard",
  "Customer mobile app",
];

export default function DigitalLicensePage() {
  return (
    <>
      <Hero
        title="Digital KPKT License Conversion"
        subtitle="Operate online. Expand nationwide. Within 6 months."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "See Success Story", href: "#success-story" }}
        variant="kpkt"
      />

      {/* Value Proposition */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Transform Your Lending Business"
            subtitle="Go from traditional branch-based operations to a fully digital, KPKT-licensed platform."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-kpkt/10">
                    <benefit.icon className="h-6 w-6 text-kpkt" />
                  </div>
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Our Proven 4-Step Process"
            subtitle="End-to-end digital transformation, from license application to platform launch."
            centered
          />
          <div className="relative">
            {/* Connection Line (desktop only) */}
            <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-border lg:block" />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-kpkt text-xl font-bold text-kpkt-foreground shadow-md">
                        {step.step}
                      </div>
                      <div className="mb-2 flex justify-center">
                        <step.icon className="h-6 w-6 text-kpkt" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">Your Digital Platform</Badge>
              <h2 className="mb-4 text-3xl font-bold">A Complete Digital Lending Platform</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                We build a fully branded web platform and mobile app tailored to your business. 
                Everything is designed to meet KPKT digital licensing requirements while providing 
                an exceptional customer experience.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {platformFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-kpkt" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-kpkt/20 via-kpkt/10 to-transparent p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt">
                      <Globe className="h-5 w-5 text-kpkt-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Web Application</div>
                      <div className="text-sm text-muted-foreground">Responsive, modern interface</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt">
                      <Smartphone className="h-5 w-5 text-kpkt-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Mobile Apps</div>
                      <div className="text-sm text-muted-foreground">iOS & Android (Flutter)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt">
                      <ShieldCheck className="h-5 w-5 text-kpkt-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">KPKT Compliant</div>
                      <div className="text-sm text-muted-foreground">Built to regulatory standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section id="success-story" className="scroll-mt-20 border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Proven Success"
            subtitle="See what we've built for operators who made the digital transition."
            centered
          />
          <Card className="mx-auto max-w-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-kpkt/10 to-transparent">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logos/creditxpress.svg"
                    alt="CreditXpress"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                  <Badge variant="default" className="bg-kpkt hover:bg-kpkt/90">Live</Badge>
                </div>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://creditxpress.com.my" target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-lg text-muted-foreground">
                A fully digital, KPKT-licensed money lending platform serving customers across Malaysia. 
                Built, launched, and operating successfully with our end-to-end support.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  KPKT digital license approved
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Web + Flutter mobile app
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  On-premise digital signing
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Malaysia data residency (AWS)
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Complete audit trail system
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Serving customers nationwide
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="border-t py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-xl bg-kpkt/5 p-6 text-center">
            <h3 className="mb-2 text-lg font-semibold">Custom Pricing</h3>
            <p className="mb-4 text-muted-foreground">
              Digital KPKT license conversion is a comprehensive project tailored to your business. 
              Contact us for a detailed quote based on your specific requirements.
            </p>
            <Button asChild className="bg-kpkt hover:bg-kpkt/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Go Digital?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join operators who have successfully transitioned to digital lending. 
            We'll guide you through every step of the process.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-kpkt hover:bg-kpkt/90">
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/account-management">
                Need Account Management Instead?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
