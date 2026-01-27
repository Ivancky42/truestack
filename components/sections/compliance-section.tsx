"use client";

import { Database, Server, Shield, FileCheck, Lock, Eye, Clock, BadgeCheck } from "lucide-react";
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

function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="compliance-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#compliance-grid)" />
      </svg>

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(37, 99, 235, 0.3) 0%, transparent 70%)"
        }}
      />
      
      {/* Animated gradient orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/10 to-blue-400/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function ComplianceCard({ feature, index }: { feature: ComplianceFeature; index: number }) {
  const colSpanClass = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    4: "lg:col-span-4",
  };

  return (
    <motion.div
      className={`group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-blue-500/50 hover:bg-slate-900 md:col-span-1 ${colSpanClass[feature.colSpan]}`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
        <feature.icon className="h-5 w-5 text-blue-400" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
      <p className="text-sm text-slate-400">{feature.description}</p>
    </motion.div>
  );
}

export function ComplianceSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <GridPattern />
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center justify-center gap-2">
            <BadgeCheck className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-400">
              Built for Compliance
            </span>
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 md:text-xl">
            Modern technology stack with Malaysian regulatory compliance built in from day one.
          </p>
        </motion.div>
        
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

