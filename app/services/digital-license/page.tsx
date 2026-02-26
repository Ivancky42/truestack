import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DigitalLicenseHero } from "@/components/sections/digital-license-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionBadge } from "@/components/shared/section-badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stepper } from "@/components/ui/stepper";
import {
  Presentation,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Clock,
  ArrowUpRight,
  Server,
  Building2,
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
  keywords: [
    "digital KPKT license",
    "KPKT digital license conversion",
    "license conversion Malaysia",
    "digital money lender Malaysia",
    "online lending platform Malaysia",
    "KPKT PPW to digital",
    "fully digital money lender",
  ],
  alternates: { canonical: "/services/digital-license" },
  openGraph: {
    title: "Digital KPKT License Conversion - Truestack",
    description:
      "Go digital and expand nationwide. Complete digital KPKT license conversion in ~3 months with custom web and mobile platforms.",
    type: "website",
    locale: "en_MY",
    siteName: "Truestack",
    images: [
      {
        url: "/truestack-favicon.png",
        width: 250,
        height: 250,
        alt: "Digital KPKT License Conversion - Truestack",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Digital KPKT License Conversion - Truestack",
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
      <DigitalLicenseHero />

      {/* Value Proposition */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Transform Your Lending Business"
            subtitle="Go from traditional branch-based operations to a fully digital, KPKT-licensed platform."
            centered
          />

          {/* Bento grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Before → After: spans full width on lg */}
            <div className="overflow-hidden rounded-2xl border bg-card lg:col-span-2">
              <div className="grid sm:grid-cols-2">
                {/* Before */}
                <div className="relative p-6">
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Before</p>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <Building2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-semibold">1 Location</p>
                  <p className="mt-1 text-sm text-muted-foreground">Branch-based only, limited to your local area</p>
                  {/* Coverage bar */}
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Customer Reach</span>
                      <span>Local</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[8%] rounded-full bg-muted-foreground/40" />
                    </div>
                  </div>
                </div>
                {/* After */}
                <div className="relative border-t bg-primary/5 p-6 sm:border-l sm:border-t-0">
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">After</p>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                    <Globe className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-semibold text-primary">All of Malaysia</p>
                  <p className="mt-1 text-sm text-muted-foreground">Web &amp; mobile platform serving customers nationwide</p>
                  {/* Coverage bar */}
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-primary">Customer Reach</span>
                      <span className="font-medium text-primary">Nationwide</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-primary/20">
                      <div className="h-2 w-full rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 benefit cards */}
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="flex flex-col justify-between rounded-2xl">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Don't have a license callout — spans 2 cols */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-6 py-5 sm:flex-row lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="font-medium">Don&apos;t have a KPKT traditional license yet?</p>
                <p className="text-sm text-muted-foreground">We can help you obtain or acquire one to get started.</p>
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

      {/* Timeline Section */}
      <section id="timeline" className="scroll-mt-20 border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Your 3-Month Journey to Digital"
            subtitle="End-to-end digital transformation, from license application to platform launch."
            centered
          />

          {/* Stepper (md+) */}
          <Stepper
            steps={[
              { title: "Weeks 1–2", description: "Preparation" },
              { title: "Weeks 3–8", description: "Build" },
              { title: "Weeks 9–10", description: "Testing" },
              { title: "Weeks 11–12", description: "Go Live" },
            ]}
            className="mx-auto mb-10 hidden max-w-2xl md:block"
          />

          {/* Phase cards — 4-column grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Phase 1 */}
            <div className="group relative rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <FileCheck className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Weeks 1–2</Badge>
              </div>
              <h3 className="mb-1.5 font-semibold leading-snug">Preparation & Provisional License</h3>
              <p className="text-sm text-muted-foreground">
                Documentation prep and KPKT presentation for provisional license approval.
              </p>
            </div>

            {/* Phase 2 — highlighted as longest phase */}
            <div className="group relative rounded-2xl border border-primary/30 bg-primary/5 p-5 transition-colors hover:border-primary/50">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Layers className="h-5 w-5 text-primary-foreground" />
                </div>
                <Badge className="bg-primary text-xs hover:bg-primary/90">Weeks 3–8</Badge>
              </div>
              <h3 className="mb-1.5 font-semibold leading-snug">Build & Infrastructure</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                AWS hosting, digital signing server, and full development of your branded platform.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="text-[11px]">Web App</Badge>
                <Badge variant="outline" className="text-[11px]">iOS</Badge>
                <Badge variant="outline" className="text-[11px]">Android</Badge>
                <Badge variant="outline" className="text-[11px]">Dashboard</Badge>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="group relative rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Weeks 9–10</Badge>
              </div>
              <h3 className="mb-1.5 font-semibold leading-snug">UAT & Pen Testing</h3>
              <p className="text-sm text-muted-foreground">
                User acceptance testing with your team and third-party security penetration testing.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="group relative rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Weeks 11–12</Badge>
              </div>
              <h3 className="mb-1.5 font-semibold leading-snug">Final Approval & Go Live</h3>
              <p className="text-sm text-muted-foreground">
                KPKT final inspection, approval, platform launch, and go-live support.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-6 py-4 text-center text-sm text-muted-foreground">
            <span className="font-medium text-primary">~3 months</span> from initial application to serving customers nationwide
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section data-nav-theme="dark" className="border-t bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionBadge icon={Layers} text="Your Digital Platform" className="[&>svg]:text-primary [&>span]:text-primary" />
              <h2 className="mb-4 font-display text-4xl font-medium tracking-tight md:text-5xl">A Complete Digital Lending Platform</h2>
              <p className="mb-6 text-lg text-slate-400 md:text-xl">
                We build a fully branded web platform and mobile app tailored to your business. 
                Everything is designed to meet KPKT digital licensing requirements while providing 
                an exceptional customer experience.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {platformFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
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
                    <Globe className="h-5 w-5 text-primary" />
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
                      <div className="mb-3 h-3 w-32 rounded bg-primary/30" />
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
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-white">Mobile App</span>
                    </div>
                    {/* Phone mockup */}
                    <div className="mx-auto w-28">
                      <div className="overflow-hidden rounded-2xl border-2 border-slate-600 bg-slate-800">
                        {/* Phone notch */}
                        <div className="mx-auto h-4 w-12 rounded-b-lg bg-slate-900" />
                        {/* Screen content */}
                        <div className="p-3">
                          <div className="mb-2 h-2 w-12 rounded bg-primary/30" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                          <div className="mb-1.5 h-1.5 w-3/4 rounded bg-slate-700" />
                          <div className="mt-3 h-8 rounded bg-primary/20" />
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
                      <Presentation className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-white">Admin</span>
                    </div>
                    {/* Dashboard mockup */}
                    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
                      <div className="flex">
                        {/* Sidebar */}
                        <div className="w-8 border-r border-slate-700 bg-slate-900 p-1.5">
                          <div className="mb-2 h-2 w-full rounded bg-primary/50" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
                        </div>
                        {/* Main content */}
                        <div className="flex-1 p-2">
                          <div className="mb-2 grid grid-cols-2 gap-1">
                            <div className="h-6 rounded bg-primary/20" />
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

      {/* Built on TrueKredit */}
      <section data-nav-theme="dark" className="border-t border-slate-800 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left — copy */}
            <div>
              <SectionBadge icon={Layers} text="Proven Foundation" className="[&>svg]:text-primary [&>span]:text-primary" />
              <h2 className="mb-4 font-display text-4xl font-medium tracking-tight md:text-5xl">
                Built on TrueKredit™.{" "}
                <span className="text-primary">Evolved for Digital.</span>
              </h2>
              <p className="mb-6 text-lg text-slate-400">
                Your digital lending platform runs on <strong className="text-white">TrueKredit™ Plus</strong> — an
                evolved edition of our{" "}
                <Link href="/truekredit" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  battle-tested TrueKredit™ system
                </Link>{" "}
                already powering KPKT-licensed money lenders across Malaysia.
              </p>
              <p className="mb-4 text-slate-400">
                TrueKredit™ Plus takes the same rock-solid loan management engine — borrower lifecycle,
                compliance automation, repayment tracking, and audit-ready reporting — and layers on
                the capabilities required for a fully digital operation.
              </p>
              <p className="mb-8 text-slate-400">
                Every digital license gets its own <strong className="text-white">fully isolated TrueKredit™ Plus instance</strong> — separate
                infrastructure, separate database, separate environment. Your data is never shared or
                co-mingled with any other operator.
              </p>

              {/* What TrueKredit+ adds */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">What TrueKredit+ adds</p>
                {[
                  {
                    icon: Smartphone,
                    title: "Borrower App & Web Portal",
                    desc: "Customers apply, upload documents, track loans, and make payments from their phone or browser.",
                  },
                  {
                    icon: FileCheck,
                    title: "On-Premise Digital Signing",
                    desc: "Legally compliant e-signatures via an on-premise HSM server — no wet-ink required.",
                  },
                  {
                    icon: Globe,
                    title: "Nationwide Online Operations",
                    desc: "Serve borrowers across all 16 states from a single digital platform.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — layer diagram */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm space-y-3">
                {/* Top layer — TrueKredit+ additions */}
                <div className="rounded-2xl border border-primary/40 bg-primary/10 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">TrueKredit™+ Layer</p>
                  <div className="space-y-2">
                    {["Borrower Web Portal", "Borrower Mobile App (iOS + Android)", "On-Premise Digital Signing (HSM)", "Digital Attestation", "Online Repayments", "e-KYC Verification", "Online Loan Application Flow"].map((f) => (
                      <div key={f} className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-slate-200">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider with arrow */}
                <div className="flex items-center justify-center">
                  <div className="h-6 w-px bg-slate-700" />
                </div>

                {/* Bottom layer — TrueKredit core */}
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">TrueKredit™ Core</p>
                    <Link href="/truekredit" className="flex items-center gap-1 text-xs text-primary hover:underline">
                      Learn more <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Loan Management", "Borrower Lifecycle", "Compliance & Audit", "Auto Documents", "Late Fees Engine", "Repayment Tracking"].map((f) => (
                      <div key={f} className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                        <span className="text-xs text-slate-400">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Data Residency Section */}
      <section data-nav-theme="dark" className="border-t border-slate-800 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="mb-12">
            <SectionBadge icon={ShieldCheck} text="Built for Compliance" className="[&>svg]:text-primary [&>span]:text-primary" />
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
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
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
                      <span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">ap-southeast-5</span>
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
                                <div className="h-1 w-full rounded-sm bg-primary/60" />
                                <div className="h-1 w-full rounded-sm bg-primary/40" />
                                <div className="h-1 w-full rounded-sm bg-slate-600" />
                                <div className="h-1 w-full rounded-sm bg-primary/50" />
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
                          <div className="h-0.5 w-8 bg-gradient-to-r from-primary/60 to-primary" />
                          <div className="h-0.5 w-8 bg-gradient-to-r from-primary/60 to-primary" />
                          <div className="h-0.5 w-8 bg-gradient-to-r from-primary/60 to-primary" />
                        </div>
                        
                        {/* Malaysia indicator */}
                        <div className="flex flex-col items-center">
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-slate-800">
                            <div className="absolute inset-2 animate-pulse rounded-full bg-primary/10" />
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">MY</div>
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
                          <span>Uptime: <span className="text-primary">99.9%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* On-Premise Digital Signing */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">On-Premise Digital Signing</h3>
              <p className="mb-4 text-sm text-slate-400">
                Dedicated servers for digital signing as required by KPKT regulations.
              </p>
              {/* Server illustration */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-10 flex-col items-center justify-center rounded border border-slate-600 bg-slate-900">
                    <div className="mb-1 h-1 w-6 rounded bg-primary" />
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
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Enterprise Security</h3>
              <p className="mb-4 text-sm text-slate-400">
                Bank-grade encryption, secure APIs, and role-based access control.
              </p>
              {/* Security layers illustration */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs text-slate-300">256-bit AES Encryption</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs text-slate-300">TLS 1.3 Protocol</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs text-slate-300">RBAC Controls</span>
                </div>
              </div>
            </div>

            {/* Complete Audit Trails */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <FileCheck className="h-5 w-5 text-primary" />
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
                    <span className="text-primary">LOAN_APPROVED</span>
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
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-5 w-5 text-primary" />
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
                      className="flex-1 rounded-t bg-primary/50"
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
              <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/logos/creditxpress.svg"
                      alt="CreditXpress"
                      width={180}
                      height={60}
                      className="h-12 w-auto"
                    />
                    <Badge variant="default" className="bg-primary hover:bg-primary/90">Live</Badge>
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
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    KPKT digital license approved
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Web + Flutter mobile app
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    On-premise digital signing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Malaysia data residency (AWS)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Complete audit trail system
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Serving customers nationwide
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Andas Capital Card */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/logos/Andas.svg"
                      alt="Andas Capital"
                      width={180}
                      height={60}
                      className="h-12 w-auto"
                    />
                    <Badge variant="default" className="bg-primary hover:bg-primary/90">Live</Badge>
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
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    KPKT digital license approved
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Web + Flutter mobile app
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    On-premise digital signing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Malaysia data residency (AWS)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Complete audit trail system
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
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
            <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Your Transformation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/truekredit">
                Explore TrueKredit™ for Traditional Licenses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
