"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fingerprint,
  Zap,
  Shield,
  Settings,
  Clock,
  DollarSign,
  ArrowRight,
  Check,
  FileCheck,
  ScanFace,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";

const features = [
  {
    icon: Zap,
    title: "Quick Setup",
    description:
      "Get started in minutes with our simple API integration. No complex configurations required.",
  },
  {
    icon: DollarSign,
    title: "Low Cost",
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

const capabilities = [
  { label: "MyKad OCR extraction", icon: FileCheck },
  { label: "Liveness detection", icon: BadgeCheck },
  { label: "Facial biometric matching", icon: Fingerprint },
  { label: "Fraud detection", icon: Shield },
  { label: "Real-time verification", icon: Zap },
  { label: "Audit trail logging", icon: Clock },
];

const verificationSteps = [
  {
    icon: FileCheck,
    label: "Scan",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: ScanFace,
    label: "Selfie",
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    icon: Fingerprint,
    label: "Match",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    icon: CheckCircle2,
    label: "Done",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

export function TrueIdentitySection() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12 grid gap-6 md:grid-cols-2 md:items-end md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <SectionBadge icon={Fingerprint} text="e-KYC Service" />
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              TrueIdentity™
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Programmatic e-KYC verification for Malaysian fintechs. Fast
              integration, secure processing, competitive pricing.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">&lt;1 day</div>
                <div className="text-sm text-muted-foreground">
                  Integration time
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Capabilities & CTA */}
        <motion.div
          className="overflow-hidden rounded-2xl border bg-background"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-5">
            {/* Left — KYC flow graphic */}
            <div className="relative flex flex-col items-center justify-center bg-muted/40 p-8 lg:col-span-2">
              {/* Faint grid overlay */}
              <svg
                className="absolute inset-0 h-full w-full opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="suite-grid"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#suite-grid)" />
              </svg>

              {/* Step flow */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                {verificationSteps.map((step, i) => {
                  const Icon = step.icon;
                  const isLast = i === verificationSteps.length - 1;
                  return (
                    <motion.div
                      key={step.label}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.5 + i * 0.12 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.bg}`}
                        >
                          <Icon className={`h-5 w-5 ${step.color}`} />
                        </div>
                        <span className="text-sm font-medium">{step.label}</span>
                        {/* Checkmark */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            delay: 0.8 + i * 0.15,
                          }}
                        >
                          {isLast ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15">
                              <Check className="h-2.5 w-2.5 text-primary" />
                            </div>
                          )}
                        </motion.div>
                      </div>
                      {/* Connector */}
                      {!isLast && (
                        <motion.div
                          className="my-1 h-3 w-px bg-border"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + i * 0.12, duration: 0.25 }}
                        />
                      )}
                    </motion.div>
                  );
                })}

                {/* Verification result badge */}
                <motion.div
                  className="mt-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  <span className="text-xs font-semibold text-emerald-700">
                    Verified in &lt;3 seconds
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Right — capabilities + CTA */}
            <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-3">
              <div>
                <h3 className="mb-5 text-xl font-semibold">
                  Complete Verification Suite
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className="flex items-center gap-2.5 rounded-lg bg-muted/50 px-3 py-2.5"
                    >
                      <cap.icon className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {cap.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    API documentation available
                  </div>
                  <p className="mt-1 text-muted-foreground">
                    Simple REST API. Start verifying customers in minutes.
                  </p>
                </div>
                <Button asChild className="w-fit shrink-0 gap-2">
                  <Link href="/trueidentity">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
