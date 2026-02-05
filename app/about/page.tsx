import type { Metadata } from "next";
import Link from "next/link";
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

// const services = [
//   {
//     title: "KPKT Account Management",
//     description: "License renewals, annual submissions, and regulatory coordination.",
//     icon: ClipboardCheck,
//     href: "/services/account-management",
//     isKpkt: true,
//   },
//   {
//     title: "Digital License Conversion",
//     description: "Transform to a fully digital KPKT-licensed platform in 6 months.",
//     icon: FileCheck,
//     href: "/services/digital-license",
//     isKpkt: true,
//   },
//   {
//     title: "Custom Software Development",
//     description: "Full-stack fintech development for P2P and digital lending platforms.",
//     icon: Code2,
//     href: "/services/software-development",
//     isKpkt: false,
//   },
// ];

export default function AboutPage() {
  return (
    <>
      {/* Combined Hero + Who We Are */}
      <section className="relative overflow-hidden border-b bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* Hero header */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Who We Are
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
              We are building the technology that 
              powers licensed money lenders and fintechs across Malaysia and beyond.
            </p>
          </div>
          
          {/* Expanded content */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-6 text-lg text-muted-foreground md:grid-cols-2 md:gap-10">
              <div className="space-y-4">
                <p>
                  We develop <strong className="text-foreground">purpose-built platforms</strong> for 
                  the lending industry — from loan origination and management to e-KYC verification 
                  and regulatory reporting. Our technology is designed specifically for Malaysia&apos;s 
                  regulatory environment.
                </p>
                <p>
                  For traditional lenders looking to modernize, we provide <strong className="text-foreground">end-to-end 
                  digital transformation</strong> — helping operators transition from paper-based 
                  processes to fully digital, KPKT-compliant operations.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Beyond technology, we offer <strong className="text-foreground">ongoing compliance 
                  services</strong> that handle the regulatory burden — license renewals, annual 
                  submissions, audits, and coordination with KPKT — so you can focus on growing 
                  your business.
                </p>
                <p>
                  Whether you&apos;re an established lender seeking to digitize, a new operator 
                  building from scratch, or a fintech company needing custom development — 
                  we have the expertise and platforms to support your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Three pillars */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Platforms */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Our Platforms</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">TrueKredit™</strong> — a complete loan 
                management system, and <strong className="text-foreground">TrueIdentity™</strong> — 
                our e-KYC verification platform — power lending operations across Malaysia.
              </p>
            </div>

            {/* Digital Transformation */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-kpkt/10">
                <FileCheck className="h-6 w-6 text-kpkt" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Digital Transformation</h3>
              <p className="text-muted-foreground">
                For operators looking to go digital, we offer end-to-end KPKT Digital License 
                Conversion that transforms traditional lenders into compliant digital platforms.
              </p>
            </div>

            {/* Compliance & Development */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-kpkt/10">
                <ClipboardCheck className="h-6 w-6 text-kpkt" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Compliance & Development</h3>
              <p className="text-muted-foreground">
                We handle ongoing KPKT compliance — license renewals, annual submissions, 
                and regulatory coordination. We also build custom fintech solutions for P2P 
                lending, digital lending, and payment systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      {/* <section className="border-t bg-muted/30 py-20">
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
      </section> */}

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
              a new platform — we&apos;re here to help.
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
