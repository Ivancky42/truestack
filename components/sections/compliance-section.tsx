"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { Database, Server, Shield, FileCheck, Lock, Eye, Clock, BadgeCheck } from "lucide-react";
import { SectionBadge } from "@/components/shared/section-badge";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ComplianceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  colSpan: 1 | 2 | 4;
}

// Layout: 4 columns total, 3 rows
// Row 1: [2 cols] [2 cols]
// Row 2: [1 col] [2 cols] [1 col]
// Row 3: [2 cols] [2 cols]
const complianceFeatures: ComplianceFeature[] = [
  // Row 1
  {
    icon: Database,
    title: "Malaysia Data Residency",
    description:
      "All data hosted on AWS Malaysia region ensuring data sovereignty and regulatory compliance.",
    colSpan: 2,
  },
  {
    icon: Shield,
    title: "KPKT & SC Licensed",
    description:
      "Platforms built to meet KPKT and SC Malaysia regulatory requirements from day one.",
    colSpan: 2,
  },
  // Row 2
  {
    icon: Server,
    title: "On-Premise Digital Signing",
    description:
      "Dedicated servers for digital signing as required by KPKT.",
    colSpan: 1,
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, secure APIs, and role-based access control to protect sensitive financial data.",
    colSpan: 2,
  },
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description:
      "24/7 system monitoring with instant alerts.",
    colSpan: 1,
  },
  // Row 3
  {
    icon: FileCheck,
    title: "Complete Audit Trails",
    description:
      "Comprehensive logging for every action, ensuring full traceability and compliance readiness for audits.",
    colSpan: 2,
  },
  {
    icon: Clock,
    title: "99.9% SLA",
    description:
      "Enterprise-grade uptime guarantee with redundant infrastructure and proactive incident response.",
    colSpan: 2,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ComplianceCard({ feature, index }: { feature: ComplianceFeature; index: number }) {
  const colSpanClass = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    4: "lg:col-span-4",
  };

  return (
    <motion.div
      className={`group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg md:col-span-1 ${colSpanClass[feature.colSpan]}`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
        <feature.icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
}

export function ComplianceSection() {
  return (
    <section className="bg-muted/30 pb-20 pt-8">
      <div className="mx-auto max-w-6xl px-6">
        <SectionBadge icon={BadgeCheck} text="Built for Compliance" />
        <SectionHeader
          title="Enterprise-Grade Infrastructure"
          subtitle="Modern technology stack with Malaysian regulatory compliance built in from day one."
        />
        
        {/* Compliance Features Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {complianceFeatures.map((feature, index) => (
            <ComplianceCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

