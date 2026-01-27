import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionBadge } from "@/components/shared/section-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Presentation,
  Code2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Clock,
  ArrowUpRight,
  Server,
  TestTube,
  Award,
  Building2,
  Zap,
  Layers,
  Database,
  Lock,
  FileCheck,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital KPKT License Conversion",
  description:
    "Transform your money lending business to operate fully online. Complete digital KPKT license conversion in ~3 months with custom web and mobile platforms.",
  openGraph: {
    title: "Digital KPKT License Conversion | Truestack",
    description:
      "Go digital and expand nationwide. Complete digital KPKT license conversion in ~3 months with custom web and mobile platforms.",
    images: ["/truestack-favicon.png"],
  },
};

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
    title: "~3 Months to Launch",
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
  "Admin dashboard",
  "Auto document generation (receipts, notices)",
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
        subtitle="Operate online. Expand nationwide. Go live in ~3 months."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "See Timeline", href: "#timeline" }}
        variant="kpkt"
      />

      {/* Value Proposition */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Side-by-side header */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              Transform Your Lending Business
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Go from traditional branch-based operations to a fully digital, KPKT-licensed platform.
            </p>
          </div>
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

          {/* License Transformation - Compact Horizontal */}
          <div className="mt-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Horizontal comparison */}
                <div className="grid md:grid-cols-[1fr,auto,1fr]">
                  {/* Before */}
                  <div className="flex items-center gap-4 bg-muted/30 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Building2 className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Traditional License</p>
                      <p className="font-semibold">1 Location</p>
                      <p className="text-sm text-muted-foreground">Branch-based only</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center bg-gradient-to-r from-muted/30 to-kpkt/10 px-4 py-3 md:py-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kpkt">
                        <Zap className="h-5 w-5 text-kpkt-foreground" />
                      </div>
                      <ArrowRight className="hidden h-5 w-5 text-kpkt md:block" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex items-center gap-4 bg-kpkt/10 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-kpkt">
                      <Globe className="h-7 w-7 text-kpkt-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-kpkt">Digital License</p>
                      <p className="font-semibold text-kpkt">All of Malaysia</p>
                      <p className="text-sm text-muted-foreground">Web &amp; mobile platform</p>
                    </div>
                  </div>
                </div>

                {/* Coverage comparison bar */}
                <div className="border-t bg-card px-6 py-4">
                  <p className="mb-3 text-center text-sm font-medium text-muted-foreground">Customer Reach</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs text-muted-foreground">Traditional</span>
                      <div className="h-3 w-full rounded-full bg-muted">
                        <div className="h-3 w-[8%] rounded-full bg-muted-foreground/50" />
                      </div>
                      <span className="w-16 shrink-0 text-right text-xs text-muted-foreground">Local</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs font-medium text-kpkt">Digital</span>
                      <div className="h-3 w-full rounded-full bg-muted">
                        <div className="h-3 w-full rounded-full bg-kpkt" />
                      </div>
                      <span className="w-16 shrink-0 text-right text-xs font-medium text-kpkt">Nationwide</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Don't have a license - inline callout */}
            <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-lg border bg-muted/30 px-6 py-4 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="font-medium">Don&apos;t have an existing KPKT traditional license?</p>
                <p className="text-muted-foreground">We can help you obtain or acquire one.</p>
              </div>
              <Button asChild variant="outline" size="lg" className="shrink-0 gap-2">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Combined Process & Timeline */}
      <section id="timeline" className="scroll-mt-20 border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Your 3-Month Journey to Digital"
            subtitle="End-to-end digital transformation, from license application to platform launch."
            centered
          />
          
          <div className="mx-auto max-w-4xl">
            {/* Timeline Items */}
            <div className="relative space-y-8">
              {/* Vertical Timeline Line - stops at top of last circle */}
              <div className="absolute left-8 top-0 hidden w-0.5 bg-gradient-to-b from-kpkt via-kpkt/50 to-kpkt md:block" style={{ height: 'calc(100% - 8rem)' }} />
              {/* Week 1-2: Preparation & Presentation */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    1–2
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="text-sm font-bold text-kpkt">1–2</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">Weeks 1–2</Badge>
                        <CardTitle className="text-lg">Preparation & Provisional License</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Presentation className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                      <div>
                        <p className="text-muted-foreground">
                          Complete documentation preparation and presentation to KPKT for provisional license approval. We handle all regulatory correspondence and requirements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Weeks 3-8: Infrastructure + Software Development (Parallel) */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    3–8
                  </div>
                </div>
                <Card className="flex-1 border-kpkt/30 bg-gradient-to-r from-kpkt/5 to-transparent">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="text-sm font-bold text-kpkt">3–8</span>
                      </div>
                      <div>
                        <Badge className="mb-1 bg-kpkt hover:bg-kpkt/90">Weeks 3–8</Badge>
                        <CardTitle className="text-lg">Infrastructure & Software Development</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Infrastructure */}
                      <div className="flex items-start gap-3">
                        <Server className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                        <div>
                          <p className="font-medium">Infrastructure Setup</p>
                          <p className="text-muted-foreground">
                            AWS Malaysia cloud hosting and on-premise digital signing server deployment.
                          </p>
                        </div>
                      </div>
                      {/* Software */}
                      <div className="flex items-start gap-3">
                        <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                        <div>
                          <p className="font-medium">Software Development</p>
                          <p className="mb-2 text-muted-foreground">
                            Full development of your branded web platform and mobile apps. Regular demos and iterative refinement.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">Web Application</Badge>
                            <Badge variant="outline" className="text-xs">iOS App</Badge>
                            <Badge variant="outline" className="text-xs">Android App</Badge>
                            <Badge variant="outline" className="text-xs">Admin Dashboard</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Weeks 9-10: UAT & Pentest */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    9–10
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="text-sm font-bold text-kpkt">9–10</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">Weeks 9–10</Badge>
                        <CardTitle className="text-lg">UAT & Penetration Testing</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <TestTube className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                      <div>
                        <p className="text-muted-foreground">
                          User acceptance testing with your team. Third-party penetration testing to ensure security compliance. Bug fixes and final refinements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Weeks 11-12: Final Approval */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    11–12
                  </div>
                </div>
                <Card className="flex-1 border-kpkt/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="text-sm font-bold text-kpkt">11–12</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">Weeks 11–12</Badge>
                        <CardTitle className="text-lg">Final Approval & Go Live</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Award className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                      <div>
                        <p className="text-muted-foreground">
                          Final KPKT inspection and approval. Platform launch and go-live support. Your digital lending business is now operational nationwide.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-10 rounded-xl border-2 border-dashed border-kpkt/30 bg-kpkt/5 p-6 text-center">
              <div className="mb-2 font-display text-4xl font-medium tracking-tight text-kpkt md:text-5xl">~3 Months</div>
              <div className="text-lg text-muted-foreground">From initial application to serving customers nationwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="border-t bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionBadge icon={Layers} text="Your Digital Platform" className="[&>svg]:text-kpkt [&>span]:text-kpkt" />
              <h2 className="mb-4 font-display text-4xl font-medium tracking-tight md:text-5xl">A Complete Digital Lending Platform</h2>
              <p className="mb-6 text-lg text-slate-400 md:text-xl">
                We build a fully branded web platform and mobile app tailored to your business. 
                Everything is designed to meet KPKT digital licensing requirements while providing 
                an exceptional customer experience.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {platformFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-kpkt" />
                    <span className="text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Platform Illustrations */}
            <div className="relative">
              <div className="grid gap-6">
                {/* Web Application - Desktop mockup */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-kpkt" />
                    <span className="text-sm font-medium text-white">Web Application</span>
                    <span className="ml-auto text-xs text-slate-500">Desktop & Tablet</span>
                  </div>
                  {/* Desktop browser mockup */}
                  <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
                    {/* Browser header */}
                    <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-3 py-2">
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="ml-2 flex-1 rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
                        yourbrand.com.my
                      </div>
                    </div>
                    {/* Screen content */}
                    <div className="p-4">
                      <div className="mb-3 h-3 w-32 rounded bg-kpkt/30" />
                      <div className="mb-2 h-2 w-full rounded bg-slate-700" />
                      <div className="mb-2 h-2 w-3/4 rounded bg-slate-700" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded bg-slate-700/50" />
                        <div className="h-16 rounded bg-slate-700/50" />
                        <div className="h-16 rounded bg-slate-700/50" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile & Admin - Side by side */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Mobile App */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-kpkt" />
                      <span className="text-sm font-medium text-white">Mobile App</span>
                    </div>
                    {/* Phone mockup */}
                    <div className="mx-auto w-28">
                      <div className="overflow-hidden rounded-2xl border-2 border-slate-600 bg-slate-800">
                        {/* Phone notch */}
                        <div className="mx-auto h-4 w-12 rounded-b-lg bg-slate-900" />
                        {/* Screen content */}
                        <div className="p-3">
                          <div className="mb-2 h-2 w-12 rounded bg-kpkt/30" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                          <div className="mb-1.5 h-1.5 w-3/4 rounded bg-slate-700" />
                          <div className="mt-3 h-8 rounded bg-kpkt/20" />
                          <div className="mt-2 h-8 rounded bg-slate-700/50" />
                          <div className="mt-2 h-8 rounded bg-slate-700/50" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs text-slate-500">iOS & Android</p>
                  </div>

                  {/* Admin Dashboard */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Presentation className="h-5 w-5 text-kpkt" />
                      <span className="text-sm font-medium text-white">Admin</span>
                    </div>
                    {/* Dashboard mockup */}
                    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
                      <div className="flex">
                        {/* Sidebar */}
                        <div className="w-8 border-r border-slate-700 bg-slate-900 p-1.5">
                          <div className="mb-2 h-2 w-full rounded bg-kpkt/50" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                        </div>
                        {/* Main content */}
                        <div className="flex-1 p-2">
                          <div className="mb-2 grid grid-cols-2 gap-1">
                            <div className="h-6 rounded bg-kpkt/20" />
                            <div className="h-6 rounded bg-slate-700/50" />
                          </div>
                          <div className="h-12 rounded bg-slate-700/30" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs text-slate-500">Full Control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Data Residency Section */}
      <section className="border-t border-slate-800 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="mb-12">
            <SectionBadge icon={ShieldCheck} text="Built for Compliance" className="[&>svg]:text-kpkt [&>span]:text-kpkt" />
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400 md:text-xl">
              Modern technology stack with Malaysian regulatory compliance built in from day one.
            </p>
          </div>

          {/* Compliance Grid with Illustrations */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Malaysia Data Residency - Large card with illustration */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kpkt/10">
                    <Database className="h-5 w-5 text-kpkt" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Malaysia Data Residency</h3>
                  <p className="text-slate-400">
                    All data hosted on AWS Malaysia region ensuring data sovereignty and regulatory compliance. Your customer data never leaves Malaysia.
                  </p>
                </div>
                {/* AWS Malaysia illustration */}
                <div className="relative">
                  <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                    {/* Header with AWS badge */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-[#FF9900]/20">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#FF9900">
                            <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-slate-300">Amazon Web Services</span>
                      </div>
                      <span className="rounded bg-kpkt/20 px-2 py-0.5 text-xs font-medium text-kpkt">ap-southeast-5</span>
                    </div>
                    
                    {/* Data center visualization */}
                    <div className="relative rounded-lg border border-slate-700 bg-slate-900 p-4">
                      {/* Server rack representation */}
                      <div className="flex items-center justify-center gap-4">
                        {/* Server racks */}
                        <div className="flex gap-2">
                          {[1, 2, 3].map((rack) => (
                            <div key={rack} className="flex h-20 w-8 flex-col items-center justify-between rounded border border-slate-600 bg-slate-800 p-1">
                              <div className="w-full space-y-0.5">
                                <div className="h-1 w-full rounded-sm bg-kpkt/60" />
                                <div className="h-1 w-full rounded-sm bg-kpkt/40" />
                                <div className="h-1 w-full rounded-sm bg-slate-600" />
                                <div className="h-1 w-full rounded-sm bg-kpkt/50" />
                              </div>
                              <div className="flex w-full justify-center gap-0.5">
                                <div className="h-1 w-1 rounded-full bg-green-500" />
                                <div className="h-1 w-1 rounded-full bg-green-500" />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Connection lines */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-0.5 w-8 bg-gradient-to-r from-kpkt/60 to-kpkt" />
                          <div className="h-0.5 w-8 bg-gradient-to-r from-kpkt/60 to-kpkt" />
                          <div className="h-0.5 w-8 bg-gradient-to-r from-kpkt/60 to-kpkt" />
                        </div>
                        
                        {/* Malaysia indicator */}
                        <div className="flex flex-col items-center">
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-kpkt/30 bg-slate-800">
                            <div className="absolute inset-2 animate-pulse rounded-full bg-kpkt/10" />
                            <div className="text-center">
                              <div className="text-lg font-bold text-kpkt">MY</div>
                            </div>
                          </div>
                          <span className="mt-1 text-[10px] font-medium text-slate-400">Malaysia</span>
                        </div>
                      </div>
                      
                      {/* Status bar */}
                      <div className="mt-4 flex items-center justify-between rounded bg-slate-800/50 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="text-[10px] text-slate-400">All systems operational</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-slate-500">
                          <span>Latency: <span className="text-green-400">12ms</span></span>
                          <span>Uptime: <span className="text-kpkt">99.9%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* On-Premise Digital Signing */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kpkt/10">
                <Server className="h-5 w-5 text-kpkt" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">On-Premise Digital Signing</h3>
              <p className="mb-4 text-sm text-slate-400">
                Dedicated servers for digital signing as required by KPKT regulations.
              </p>
              {/* Server illustration */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-10 flex-col items-center justify-center rounded border border-slate-600 bg-slate-900">
                    <div className="mb-1 h-1 w-6 rounded bg-kpkt" />
                    <div className="mb-1 h-1 w-6 rounded bg-slate-600" />
                    <div className="h-1 w-6 rounded bg-slate-600" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-xs font-medium text-white">HSM Server</div>
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] text-slate-500">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kpkt/10">
                <Lock className="h-5 w-5 text-kpkt" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Enterprise Security</h3>
              <p className="mb-4 text-sm text-slate-400">
                Bank-grade encryption, secure APIs, and role-based access control.
              </p>
              {/* Security layers illustration */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-kpkt" />
                  <span className="text-xs text-slate-300">256-bit AES Encryption</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-kpkt" />
                  <span className="text-xs text-slate-300">TLS 1.3 Protocol</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-kpkt" />
                  <span className="text-xs text-slate-300">RBAC Controls</span>
                </div>
              </div>
            </div>

            {/* Complete Audit Trails */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kpkt/10">
                <FileCheck className="h-5 w-5 text-kpkt" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Complete Audit Trails</h3>
              <p className="mb-4 text-sm text-slate-400">
                Comprehensive logging for every action, ensuring full traceability.
              </p>
              {/* Audit log illustration */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                <div className="space-y-2 font-mono text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">10:42:15</span>
                    <span className="text-kpkt">LOAN_APPROVED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">10:41:02</span>
                    <span className="text-slate-300">EKYC_VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">10:40:28</span>
                    <span className="text-slate-300">DOC_SIGNED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Monitoring */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kpkt/10">
                <Eye className="h-5 w-5 text-kpkt" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">24/7 Monitoring</h3>
              <p className="mb-4 text-sm text-slate-400">
                Real-time system monitoring with instant alerts and 99.9% SLA.
              </p>
              {/* Monitoring dashboard illustration */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">System Status</span>
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    All Systems Operational
                  </span>
                </div>
                <div className="flex h-8 items-end gap-1">
                  {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-kpkt/50"
                      style={{ height: `${h}%` }}
                    />
                  ))}
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
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* CreditXpress Card */}
            <Card className="overflow-hidden">
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
                  <Button asChild variant="outline" size="lg" className="gap-2">
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
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    KPKT digital license approved
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Web + Flutter mobile app
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    On-premise digital signing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Malaysia data residency (AWS)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Complete audit trail system
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Serving customers nationwide
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Andas Capital Card */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-kpkt/10 to-transparent">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/logos/Andas.svg"
                      alt="Andas Capital"
                      width={180}
                      height={60}
                      className="h-12 w-auto"
                    />
                    <Badge variant="default" className="bg-kpkt hover:bg-kpkt/90">Live</Badge>
                  </div>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link href="https://andascapital.com.my" target="_blank" rel="noopener noreferrer">
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
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    KPKT digital license approved
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Web + Flutter mobile app
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    On-premise digital signing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Malaysia data residency (AWS)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Complete audit trail system
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-kpkt" />
                    Serving customers nationwide
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">Ready to Go Digital?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Join operators who have successfully transitioned to digital lending. 
            We&apos;ll guide you through every step of the process.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 bg-kpkt hover:bg-kpkt/90">
              <Link href="/contact">
                Start Your Transformation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/services/account-management">
                Need Account Management Instead?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
