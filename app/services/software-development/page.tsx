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
  MoreHorizontal,
  Globe,
  Monitor,
  HardDrive,
  Lock,
  Key,
  Bug,
  Container,
  FolderArchive,
  Network,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Full-stack fintech development for P2P lending, digital lending platforms, and payment systems. Built for Malaysia's regulatory landscape with KPKT and SC compliance.",
  openGraph: {
    title: "Custom Fintech Software Development | Truestack",
    description:
      "Full-stack development for P2P lending, digital lending platforms, and payment systems. Built for Malaysia's regulatory landscape.",
    images: ["/truestack-favicon.png"],
  },
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


const technologyPartners = [
  {
    name: "CTOS",
    category: "Credit Intelligence",
    description: "Leading credit bureau and risk management solutions for comprehensive financial insights",
    logo: "/logos/ctos.png",
  },
  {
    name: "Regtank",
    category: "Onboarding & AML",
    description: "Customer onboarding, AML checks, KYC verification, and compliance screening",
    logo: "/logos/regtank.webp",
  },
  {
    name: "Trustgate",
    category: "e-Signature & e-KYC",
    description: "On-premise digital identity verification and Malaysia-compliant e-signatures",
    logo: "/logos/trustgate.png",
  },
  {
    name: "Airwallex",
    category: "Payments",
    description: "Payment gateway for international and local payment methods",
    logo: "/logos/airwallex.png",
  },
  {
    name: "Meta",
    category: "Notifications",
    description: "WhatsApp notifications for payments, OTP, and marketing",
    logo: "/logos/meta.svg",
  },
  {
    name: "Infomina",
    category: "SSM Reports",
    description: "SSM company reports and business intelligence for due diligence and verification",
    logo: "/logos/infomina.png",
  },
];

const inHouseCapabilities = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "Backend & API Engineering",
  "Database Architecture",
  "Cloud Infrastructure",
  "UI/UX Design",
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
            {/* And More Card */}
            <Card className="h-full border-dashed bg-muted/30 transition-all hover:border-muted-foreground/30">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <MoreHorizontal className="h-6 w-6 text-muted-foreground/60" />
                </div>
                <CardTitle className="text-xl text-muted-foreground/70">And More...</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground/60">
                  Enterprise platforms, internal tools, dashboards, and custom solutions tailored to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="border-t bg-gradient-to-b from-muted/50 to-background py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Typical Deployment Architecture"
            subtitle="A secure, scalable fintech infrastructure built on AWS Malaysia with on-premise components for compliance."
            centered
          />
          
          {/* Architecture Diagram */}
          <div className="relative">
            {/* Row 1: Users/Clients */}
            <div className="flex justify-center gap-6 mb-4">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 ring-2 ring-blue-500/30">
                  <Globe className="h-7 w-7 text-blue-500" />
                </div>
                <span className="mt-2 text-xs font-medium text-muted-foreground">Web App</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 ring-2 ring-purple-500/30">
                  <Smartphone className="h-7 w-7 text-purple-500" />
                </div>
                <span className="mt-2 text-xs font-medium text-muted-foreground">Mobile App</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-500/10 ring-2 ring-slate-500/30">
                  <Monitor className="h-7 w-7 text-slate-500" />
                </div>
                <span className="mt-2 text-xs font-medium text-muted-foreground">Admin Portal</span>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center my-3">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-gradient-to-b from-muted-foreground/40 to-muted-foreground/20" />
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 rotate-90" />
              </div>
            </div>

            {/* Row 2: AWS Cloud Box */}
            <div className="relative rounded-2xl border-2 border-orange-500/30 bg-orange-500/5 p-6 mb-4">
              {/* AWS Label */}
              <div className="absolute -top-3 left-6 bg-background px-3">
                <span className="text-sm font-semibold text-orange-600">AWS Malaysia Region</span>
              </div>

              {/* Cloud Components Grid - Row 1 */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 mt-2">
                {/* ALB Load Balancer */}
                <div className="group flex flex-col items-center rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/30 mb-2">
                    <Network className="h-6 w-6 text-indigo-600" />
                  </div>
                  <span className="text-sm font-semibold">ALB</span>
                  <span className="text-xs text-muted-foreground">Load Balancer</span>
                </div>

                {/* Cognito */}
                <div className="group flex flex-col items-center rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-500/30 mb-2">
                    <Key className="h-6 w-6 text-amber-600" />
                  </div>
                  <span className="text-sm font-semibold">Cognito</span>
                  <span className="text-xs text-muted-foreground">Authentication</span>
                </div>

                {/* ECS */}
                <div className="group flex flex-col items-center rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 ring-1 ring-orange-500/30 mb-2">
                    <Container className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-sm font-semibold">ECS</span>
                  <span className="text-xs text-muted-foreground">Containers</span>
                </div>

                {/* S3 */}
                <div className="group flex flex-col items-center rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 ring-1 ring-green-500/30 mb-2">
                    <FolderArchive className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold">S3</span>
                  <span className="text-xs text-muted-foreground">File Storage</span>
                </div>

                {/* RDS PostgreSQL */}
                <div className="group flex flex-col items-center rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-500/30 mb-2">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold">RDS</span>
                  <span className="text-xs text-muted-foreground">PostgreSQL</span>
                </div>

                {/* SES */}
                <div className="group flex flex-col items-center rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 ring-1 ring-pink-500/30 mb-2">
                    <Mail className="h-6 w-6 text-pink-600" />
                  </div>
                  <span className="text-sm font-semibold">SES</span>
                  <span className="text-xs text-muted-foreground">Email Service</span>
                </div>
              </div>
            </div>

            {/* Connector arrows - bidirectional */}
            <div className="flex justify-center gap-20 my-3">
              <div className="flex flex-col items-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 -rotate-90" />
                <div className="w-0.5 h-4 bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/40" />
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 rotate-90" />
              </div>
              <div className="flex flex-col items-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 -rotate-90" />
                <div className="w-0.5 h-4 bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/40" />
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 rotate-90" />
              </div>
            </div>

            {/* Row 3: On-Premise & Security */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* On-Premise Box */}
              <div className="relative rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-6">
                <div className="absolute -top-3 left-6 bg-background px-3">
                  <span className="text-sm font-semibold text-emerald-600">On-Premise Server</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 ring-2 ring-emerald-500/30">
                    <Server className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Digital Signing Server</p>
                    <p className="text-sm text-muted-foreground">KPKT compliant e-signatures</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                    <Lock className="h-3 w-3" /> HSM Integration
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                    <HardDrive className="h-3 w-3" /> Local Storage
                  </span>
                </div>
              </div>

              {/* Security Testing Box */}
              <div className="relative rounded-2xl border-2 border-red-500/30 bg-red-500/5 p-6">
                <div className="absolute -top-3 left-6 bg-background px-3">
                  <span className="text-sm font-semibold text-red-600">Security & Compliance</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 ring-2 ring-red-500/30">
                    <Bug className="h-7 w-7 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Penetration Testing</p>
                    <p className="text-sm text-muted-foreground">Regular security assessments</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-700">
                    <Shield className="h-3 w-3" /> Vulnerability Scans
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-700">
                    <FileCheck className="h-3 w-3" /> Audit Reports
                  </span>
                </div>
              </div>
            </div>

            {/* Legend / Summary */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <span className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-muted-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Malaysia Data Residency Compliant
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            {/* Frameworks & Technologies */}
            <div className="mt-12 rounded-2xl border bg-card p-6">
              <h3 className="mb-6 text-center text-lg font-semibold">Frameworks & Technologies We Use</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Frontend */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mobile</p>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter", "iOS", "Android", "Dart"].map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "Python", "REST APIs", "GraphQL"].map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database & Infrastructure */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Database & Infra</p>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "Redis", "MongoDB", "Docker"].map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-orange-500/10 px-2.5 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-house Expertise & Technology Partners */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="In-house Expertise Meets World-class Partnerships"
            subtitle="Our core team of developers, engineers, and designers work seamlessly with industry-leading technology partners to deliver comprehensive, enterprise-grade solutions."
            centered
          />

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Truestack In-House Card */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-primary/5 via-background to-background border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src="/truestack-logo-transparent.svg"
                    alt="Truestack"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <Badge className="mb-4">In-House Expertise</Badge>
                <p className="mb-6 text-muted-foreground">
                  Our core team brings deep technical expertise across the full stack, from system architecture to user experience design.
                </p>
                <ul className="space-y-3">
                  {inHouseCapabilities.map((capability) => (
                    <li key={capability} className="flex items-center gap-3 text-sm">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technology Partners Grid */}
            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="mb-2 text-xl font-semibold">Technology Partners</h3>
                  <p className="mb-6 text-muted-foreground">
                    We integrate with best-in-class platforms to extend our capabilities and deliver proven, enterprise-ready solutions.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {technologyPartners.map((partner) => (
                      <div
                        key={partner.name}
                        className="rounded-lg border bg-muted/50 p-4 transition-colors hover:border-primary/50 hover:bg-muted"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={120}
                            height={32}
                            className="h-6 w-auto shrink-0 object-contain"
                          />
                        </div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {partner.category}
                        </Badge>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    ))}
                    {/* And more indicator */}
                    <div className="flex items-center justify-center rounded-lg border border-dashed bg-muted/30 p-4">
                      <div className="text-center">
                        <div className="mb-1 text-2xl font-semibold text-primary">+</div>
                        <p className="text-sm font-medium text-muted-foreground">And more</p>
                        <p className="text-xs text-muted-foreground">We partner with the best to deliver complete solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Success Story - Side by Side */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Built for Compliance */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
              <CardContent className="p-8">
                <Badge className="mb-4">Built for Compliance</Badge>
                <h3 className="mb-3 text-2xl font-bold">Every Platform Meets Regulatory Requirements</h3>
                <p className="mb-6 text-muted-foreground">
                  We understand Malaysia&apos;s regulatory landscape. Every platform includes the compliance features required for KPKT and SC Malaysia licensing.
                </p>
                <div className="space-y-3">
                  {complianceFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">Success Stories</Badge>
                
                {/* CreditXpress */}
                <div className="mb-6 rounded-xl border bg-muted/30 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/logos/creditxpress.svg"
                        alt="CreditXpress"
                        width={140}
                        height={45}
                        className="h-9 w-auto"
                      />
                      <Badge className="bg-primary text-xs">Live</Badge>
                    </div>
                    <Button asChild variant="outline" size="sm" className="gap-2 w-fit">
                      <Link href="https://creditxpress.com.my" target="_blank" rel="noopener noreferrer">
                        Visit
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    KPKT-licensed digital lending platform serving customers across Malaysia.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["KPKT Digital License", "Web + Mobile", "On-prem Signing"].map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CashSouk */}
                <div className="rounded-xl border bg-muted/30 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-3">
                    <Image
                      src="/logos/cashsouk_logo.png"
                      alt="CashSouk"
                      width={120}
                      height={40}
                      className="h-9 w-auto"
                    />
                    <Button asChild variant="outline" size="sm" className="gap-2 w-fit">
                      <Link href="https://cashsouk.com" target="_blank" rel="noopener noreferrer">
                        Visit
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    P2P lending marketplace connecting borrowers with investors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["P2P Marketplace", "Multi-product", "SC Compliance"].map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <Button asChild variant="ghost" size="sm" className="gap-2 px-0 hover:bg-transparent hover:text-primary">
                    <Link href="/work">
                      View All Projects
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Build?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Whether you&apos;re starting fresh or upgrading an existing system, we&apos;ll help you build a fintech platform that meets your business needs and regulatory requirements.
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

