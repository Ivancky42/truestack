"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Fingerprint,
  Clock,
  CheckCircle2,
  Terminal,
  Copy,
  Building2,
  TrendingUp,
  Lock,
  FileCheck,
  Globe,
  BadgeCheck,
  Smartphone,
  Monitor,
  Camera,
  ScanFace,
  Webhook,
  Check,
  DollarSign,
  Settings,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/shared/section-badge";

// ─── Data ─────────────────────────────────────────────────────────────────────

const businessBenefits = [
  {
    icon: TrendingUp,
    title: "Accelerate Customer Onboarding",
    description:
      "Reduce onboarding time from days to minutes. Verify customers instantly while maintaining compliance.",
  },
  {
    icon: Shield,
    title: "Reduce Fraud & Risk",
    description:
      "AI-powered fraud detection with liveness checks prevents identity spoofing and document forgery.",
  },
  {
    icon: Lock,
    title: "Stay Compliant",
    description:
      "Meet regulatory requirements with our PDPA-compliant solution. Full audit trails and data residency in Malaysia.",
  },
  {
    icon: TrendingUp,
    title: "Lower Operational Costs",
    description:
      "Automate manual verification processes. Scale without adding headcount or infrastructure.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Financial Services",
    description:
      "Banks, lenders, and fintechs use TrueIdentity for loan applications, account opening, and regulatory compliance.",
  },
  {
    icon: Users,
    title: "Digital Platforms",
    description:
      "E-commerce, gig economy, and sharing platforms verify sellers, drivers, and service providers.",
  },
  {
    icon: Globe,
    title: "Telecommunications",
    description:
      "Telcos and digital services verify subscribers for SIM registration and account activation.",
  },
];

const capabilities = [
  { label: "MyKad OCR extraction", icon: FileCheck },
  { label: "Liveness detection", icon: BadgeCheck },
  { label: "Facial biometric matching", icon: Fingerprint },
  { label: "Real-time verification", icon: Zap },
  { label: "Fraud detection", icon: Shield },
  { label: "Audit trail logging", icon: Clock },
];

const features = [
  {
    icon: Zap,
    title: "Quick Setup",
    description:
      "Get started in minutes with our simple API integration. No complex configurations required.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description:
      "Pay-per-verification pricing that scales with your business. No minimum commitments.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption with data residency in Malaysia. Fully compliant with local regulations.",
  },
  {
    icon: Settings,
    title: "Everything Handled",
    description:
      "MyKad OCR, liveness detection, biometric matching — all in one unified API endpoint.",
  },
];

const trustedBy = [
  "Licensed money lenders",
  "Digital banks",
  "Insurance providers",
  "E-commerce platforms",
  "Fintech startups",
];

// ─── Grid Pattern Background ──────────────────────────────────────────────────

function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-identity"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-identity)" />
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// ─── Animated KYC Flow Diagram ────────────────────────────────────────────────

const KYC_STEPS = [
  {
    icon: FileCheck,
    label: "Scan MyKad",
    sublabel: "OCR extraction",
    color: "text-blue-600",
    bg: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: ScanFace,
    label: "Selfie Capture",
    sublabel: "Liveness check",
    color: "text-violet-600",
    bg: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    icon: Fingerprint,
    label: "Biometric Match",
    sublabel: "Face comparison",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    icon: CheckCircle2,
    label: "Verified",
    sublabel: "Result in <3s",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

function KycFlowDiagram() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Phone mockup with verification flow */}
      <motion.div
        className="mx-auto w-full max-w-[320px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Phone frame */}
        <div className="overflow-hidden rounded-[2rem] border-2 border-border/80 bg-white shadow-xl">
          {/* Phone status bar */}
          <div className="flex items-center justify-between bg-slate-50 px-6 py-2">
            <span className="text-[10px] font-medium text-slate-400">9:41</span>
            <div className="mx-auto h-5 w-20 rounded-full bg-slate-900" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-slate-300" />
              <div className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
          </div>

          {/* Screen content */}
          <div className="px-5 pb-6 pt-4">
            {/* App header */}
            <div className="mb-5 text-center">
              <motion.div
                className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.5 }}
              >
                <Fingerprint className="h-5 w-5 text-primary" />
              </motion.div>
              <p className="text-xs font-medium text-foreground">Identity Verification</p>
              <p className="text-[10px] text-muted-foreground">Powered by TrueIdentity™</p>
            </div>

            {/* Step flow */}
            <div className="space-y-3">
              {KYC_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === KYC_STEPS.length - 1;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }}
                  >
                    <div
                      className={`flex items-center gap-3 rounded-xl border ${step.borderColor} bg-white p-3 shadow-sm`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${step.bg}`}
                      >
                        <Icon className={`h-5 w-5 ${step.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">{step.label}</p>
                        <p className="text-[11px] text-muted-foreground">{step.sublabel}</p>
                      </div>
                      {/* Progress indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0 + i * 0.25, type: "spring" }}
                      >
                        {isLast ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                        )}
                      </motion.div>
                    </div>
                    {/* Connector line */}
                    {!isLast && (
                      <motion.div
                        className="ml-8 h-2 w-0.5 bg-border"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.8 + i * 0.2, duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-medium text-muted-foreground">Verification complete</span>
                <span className="text-[10px] font-semibold text-emerald-600">100%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-emerald-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stat badges around the phone */}
      <motion.div
        className="absolute -left-4 top-12 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-foreground">&lt;3s</p>
        <p className="text-[10px] text-muted-foreground">Verification</p>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-32 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-emerald-600">99.9%</p>
        <p className="text-[10px] text-muted-foreground">Uptime SLA</p>
      </motion.div>

      <motion.div
        className="absolute -left-8 bottom-24 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-primary">PDPA</p>
        <p className="text-[10px] text-muted-foreground">Compliant</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TrueIdentityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <GridPattern />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Fingerprint className="h-4 w-4" />
                TrueIdentity™ e-KYC
              </motion.div>
              <motion.h1
                className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Verify Customers In Minutes, Not Days
              </motion.h1>
              <motion.p
                className="mt-6 text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Malaysia&apos;s e-KYC platform for businesses. Automate identity
                verification, reduce fraud, and stay compliant — all while
                delivering a seamless customer experience.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Request a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#pricing">View Pricing</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { value: "Instant", label: "Verification Time" },
                  { value: "99.9%", label: "Uptime SLA" },
                  { value: "100%", label: "Malaysia-Hosted" },
                  { value: "PDPA", label: "Compliant" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Animated KYC Flow */}
            <KycFlowDiagram />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Zap} text="Key Features" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Why Leading Businesses Choose TrueIdentity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Streamline your KYC process, reduce operational costs, and deliver a
              frictionless onboarding experience.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={TrendingUp} text="Business Impact" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Transform Your Verification Process
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group rounded-2xl border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Settings} text="How It Works" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Simple, Secure Verification
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A seamless verification flow that takes seconds, not minutes.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="mb-16 flex flex-col gap-8 md:flex-row">
            {[
              {
                step: 1,
                title: "Capture Document",
                desc: "Customer takes a photo of their MyKad. Our OCR extracts all details automatically.",
              },
              {
                step: 2,
                title: "Verify Identity",
                desc: "Selfie capture with liveness detection. AI matches face to document photo.",
              },
              {
                step: 3,
                title: "Get Results",
                desc: "Receive instant verification results with confidence scores and extracted data.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                    {item.step}
                  </div>
                  {i < 2 && <div className="hidden h-0.5 flex-1 bg-border md:block" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Capabilities Grid */}
          <motion.div
            className="rounded-2xl border bg-background p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-center text-xl font-semibold">
              Complete Verification Suite
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {capabilities.map((cap) => (
                <div key={cap.label} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <cap.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{cap.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hosted UI Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <SectionBadge icon={Monitor} text="Hosted UI" />
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                We Handle the Frontend, You Bring the Customers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No need to build verification UI yourself. We provide a fully hosted
                customer frontend that handles the entire verification flow — just
                redirect your users and receive results via webhook.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Camera,
                    title: "Document Capture",
                    desc: "Camera access and file upload for MyKad photos with built-in quality checks.",
                  },
                  {
                    icon: ScanFace,
                    title: "Liveness & Selfie",
                    desc: "Real-time liveness detection with guided selfie capture flow.",
                  },
                  {
                    icon: Webhook,
                    title: "Webhook Results",
                    desc: "Receive verification results instantly via secure webhook to your backend.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">Works on Web</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span className="text-sm">Works on Mobile</span>
                </div>
              </div>
            </motion.div>

            {/* UI Mockups */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid gap-6">
                {/* Web Browser Mockup */}
                <div className="rounded-2xl border bg-background p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Web Browser</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      Desktop & Tablet
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-lg border bg-white">
                    <div className="flex items-center gap-2 border-b bg-slate-50 px-3 py-2">
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="ml-2 flex-1 rounded bg-slate-100 px-3 py-1 text-xs text-slate-400">
                        verify.truestack.my/session/abc123
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4 text-center">
                        <div className="mx-auto mb-2 h-3 w-32 rounded bg-primary/20" />
                        <div className="mx-auto h-2 w-48 rounded bg-slate-200" />
                      </div>
                      <div className="mx-auto max-w-xs">
                        <div className="flex aspect-4/3 items-center justify-center rounded-lg border-2 border-dashed border-primary/30 bg-slate-50">
                          <div className="text-center">
                            <Camera className="mx-auto mb-2 h-8 w-8 text-primary/30" />
                            <div className="mx-auto h-2 w-24 rounded bg-slate-200" />
                          </div>
                        </div>
                        <div className="mt-4 flex h-10 items-center justify-center rounded-lg bg-primary/10">
                          <div className="h-2 w-20 rounded bg-primary/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Mockups */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Document Capture */}
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Mobile</span>
                    </div>
                    <div className="mx-auto w-28">
                      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white">
                        <div className="mx-auto h-4 w-12 rounded-b-lg bg-slate-100" />
                        <div className="p-3">
                          <div className="mx-auto mb-2 h-2 w-16 rounded bg-primary/20" />
                          <div className="mx-auto mb-3 h-1.5 w-20 rounded bg-slate-200" />
                          <div className="flex aspect-[1.6/1] items-center justify-center rounded border border-dashed border-primary/30 bg-slate-50 mb-2">
                            <FileCheck className="h-4 w-4 text-primary/30" />
                          </div>
                          <div className="flex h-6 items-center justify-center rounded bg-primary/10">
                            <div className="h-1.5 w-12 rounded bg-primary/30" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      Document Capture
                    </p>
                  </div>

                  {/* Selfie */}
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <ScanFace className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Selfie</span>
                    </div>
                    <div className="mx-auto w-28">
                      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white">
                        <div className="mx-auto h-4 w-12 rounded-b-lg bg-slate-100" />
                        <div className="p-3">
                          <div className="mx-auto mb-2 h-2 w-14 rounded bg-primary/20" />
                          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-primary/30 bg-slate-50">
                            <ScanFace className="h-5 w-5 text-primary/30" />
                          </div>
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-200" />
                          <div className="flex h-6 items-center justify-center rounded bg-emerald-50">
                            <div className="h-1.5 w-10 rounded bg-emerald-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      Liveness Check
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Building2} text="Use Cases" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Built for Every Industry
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From banks to startups, businesses across Malaysia trust TrueIdentity.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Trusted By */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-sm text-muted-foreground">Trusted by</p>
            <div className="flex flex-wrap justify-center gap-3">
              {trustedBy.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Receipt} text="Transparent Pricing" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Simple, Predictable Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A one-time setup, pay-per-use transactions, and an annual platform fee. No hidden costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="w-full">
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody className="divide-y">
                    <tr className="bg-primary/5">
                      <td className="px-6 py-4">
                        <div className="font-semibold">Setup Fee</div>
                        <div className="text-sm text-muted-foreground">One-time integration & onboarding — includes 100 free verifications</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-2xl font-bold text-primary">RM 8,000</div>
                        <div className="text-sm text-muted-foreground">one-time</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium">Per Verification</div>
                        <div className="text-sm text-muted-foreground">Each completed e-KYC transaction</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-2xl font-bold">RM 3.50</div>
                        <div className="text-sm text-muted-foreground">/ transaction</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium">Annual Platform Fee</div>
                        <div className="text-sm text-muted-foreground">Ongoing access, hosting & support</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-2xl font-bold">RM 4,000</div>
                        <div className="text-sm text-muted-foreground">/ year</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "No minimum volume", desc: "Pay only for verifications you use" },
                { label: "Includes hosted UI", desc: "No frontend development needed" },
                { label: "Malaysia data residency", desc: "PDPA-compliant infrastructure" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-xl border bg-background p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Shield className="h-4 w-4" />
            All verification data is encrypted and stored securely in Malaysia.
          </motion.div>
        </div>
      </section>

      {/* Developer Section — Dark */}
      <section id="developers" data-nav-theme="dark" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                For Developers
              </span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Integrate in Minutes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Simple REST API with comprehensive documentation. Your team can start verifying customers today.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* TypeScript Example */}
            <motion.div
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-sm text-slate-400">verify.ts</span>
                </div>
                <Copy className="h-4 w-4 text-slate-500" />
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-slate-300">
                <code>
                  <span className="text-slate-500">{"// Initialize TrueIdentity client"}</span>{"\n"}
                  <span className="text-purple-400">import</span> {"{ "}
                  <span className="text-blue-400">TrueIdentity</span>
                  {" }"} <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">&apos;@truestack/identity&apos;</span>;{"\n\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">client</span> ={" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-blue-400">TrueIdentity</span>({"{"}
                  {"\n"}
                  {"  "}apiKey: process.env.TRUESTACK_API_KEY,{"\n"}
                  {"  "}environment:{" "}
                  <span className="text-green-400">&apos;production&apos;</span>
                  {"\n"}
                  {"}"});{"\n\n"}
                  <span className="text-slate-500">{"// Verify a customer"}</span>{"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">result</span> ={" "}
                  <span className="text-purple-400">await</span> client.verify({"{"}
                  {"\n"}
                  {"  "}document: myKadImage,{"\n"}
                  {"  "}selfie: customerSelfie,{"\n"}
                  {"  "}options: {"{"} livenessCheck:{" "}
                  <span className="text-cyan-400">true</span> {"}"}
                  {"\n"}
                  {"}"});{"\n\n"}
                  console.log(result.verified);{" "}
                  <span className="text-slate-500">{"// true"}</span>{"\n"}
                  console.log(result.confidence);{" "}
                  <span className="text-slate-500">{"// 0.98"}</span>
                </code>
              </pre>
            </motion.div>

            {/* JSON Response */}
            <motion.div
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-sm text-slate-400">response.json</span>
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-slate-300">
                <code>
                  {"{"}{"\n"}
                  {"  "}<span className="text-blue-300">&quot;verified&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>,{"\n"}
                  {"  "}<span className="text-blue-300">&quot;confidence&quot;</span>:{" "}
                  <span className="text-orange-400">0.98</span>,{"\n"}
                  {"  "}<span className="text-blue-300">&quot;document&quot;</span>: {"{"}{"\n"}
                  {"    "}<span className="text-blue-300">&quot;type&quot;</span>:{" "}
                  <span className="text-green-400">&quot;mykad&quot;</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;id_number&quot;</span>:{" "}
                  <span className="text-green-400">&quot;******-**-****&quot;</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;name&quot;</span>:{" "}
                  <span className="text-green-400">&quot;AHMAD BIN ABDULLAH&quot;</span>{"\n"}
                  {"  }"},{"\n"}
                  {"  "}<span className="text-blue-300">&quot;checks&quot;</span>: {"{"}{"\n"}
                  {"    "}<span className="text-blue-300">&quot;liveness&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;face_match&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;document_valid&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>{"\n"}
                  {"  }"}{"\n"}
                  {"}"}
                </code>
              </pre>
            </motion.div>
          </div>

          {/* Integration Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { value: "<1 day", label: "Integration time" },
              { value: "REST API", label: "Simple integration" },
              { value: "SDK", label: "Node.js, Python, Go" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Ready to Transform Your KYC Process?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join leading Malaysian businesses using TrueIdentity. Get started with a demo today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Back to truestack.my</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
