"use client";

import { motion } from "framer-motion";
import { Cloud, CreditCard, ClipboardCheck, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface OfferingProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function Offering({ icon: Icon, title, description, index }: OfferingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

const offerings = [
  {
    icon: Cloud,
    title: "Infrastructure as a Service",
    description:
      "e-KYC verification, WhatsApp notifications, and email services — all through a unified API platform.",
  },
  {
    icon: CreditCard,
    title: "KPKT Digital License Conversion",
    description:
      "A fully licensed, ready-to-deploy lending platform you can brand as your own and launch in weeks.",
  },
  {
    icon: ClipboardCheck,
    title: "KPKT Services",
    description:
      "Loan management system, regulatory compliance, license management, and administrative support for your lending operations.",
  },
  {
    icon: Code2,
    title: "Fintech Software Development",
    description:
      "Tailored fintech solutions built from scratch to meet your unique business requirements.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Side-by-side header */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              What We Do
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground md:text-xl">
              We provide the infrastructure, platforms, and expertise to help
              Malaysian Fintechs and lenders build, operate, and grow their businesses.
            </p>
          </motion.div>
        </div>

        {/* Offerings grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {offerings.map((offering, index) => (
            <Offering
              key={offering.title}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
