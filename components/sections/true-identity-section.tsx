"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Fingerprint, Zap, Shield, Settings, Clock, DollarSign, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";

const features = [
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Get started in minutes with our simple API integration. No complex configurations required.",
  },
  {
    icon: DollarSign,
    title: "Low Cost",
    description: "Pay-per-verification pricing that scales with your business. No minimum commitments.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "End-to-end encryption with data residency in Malaysia. Fully compliant with local regulations.",
  },
  {
    icon: Settings,
    title: "Everything Handled",
    description: "MyKad OCR, liveness detection, biometric matching — all in one unified API endpoint.",
  },
];

const capabilities = [
  "MyKad OCR extraction",
  "Liveness detection",
  "Facial biometric matching",
  "Fraud detection",
  "Real-time verification",
  "Audit trail logging",
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
              Programmatic e-KYC verification for Malaysian fintechs. 
              Fast integration, secure processing, competitive pricing.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">&lt;1 day</div>
                <div className="text-sm text-muted-foreground">Integration time</div>
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
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Capabilities & CTA */}
        <motion.div
          className="grid gap-8 rounded-2xl border bg-background p-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h3 className="mb-4 text-xl font-semibold">Complete Verification Suite</h3>
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 md:items-end md:text-right">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                <Clock className="h-4 w-4" />
                API documentation available
              </div>
              <p className="mt-2 text-muted-foreground">
                Simple REST API. Start verifying customers in minutes.
              </p>
            </div>
            <Button asChild className="w-fit gap-2">
              <Link href="/trueidentity">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
