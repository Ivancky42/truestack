"use client";

import {
  Database,
  Server,
  Shield,
  FileCheck,
  Lock,
  Eye,
  Clock,
  BadgeCheck,
  Globe,
  ArrowRight,
  Zap,
} from "lucide-react";
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
    title: "KPKT + SC + Bank Negara Compliance",
    description:
      "Platforms built to meet KPKT and SC Malaysia regulatory requirements from day one.",
    colSpan: 2,
  },
  // Row 2
  {
    icon: Server,
    title: "On-Premise Digital Signing",
    description: "Dedicated servers for digital signing as required by KPKT.",
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
    description: "24/7 system monitoring with instant alerts.",
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
          background:
            "radial-gradient(ellipse at center bottom, rgba(37, 99, 235, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Animated gradient orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-600/10 to-blue-400/10 blur-3xl"
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

// ─── Infrastructure Diagram ───────────────────────────────────────────────────

const INFRA_LAYERS = [
  {
    icon: Globe,
    label: "Client Applications",
    sublabel: "Web & Mobile",
    color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    dotColor: "bg-sky-400",
  },
  {
    icon: Shield,
    label: "Security Layer",
    sublabel: "Encryption · RBAC · WAF",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    dotColor: "bg-blue-400",
  },
  {
    icon: Server,
    label: "Application Servers",
    sublabel: "Auto-scaling · Redundant",
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    dotColor: "bg-indigo-400",
  },
  {
    icon: Database,
    label: "Data Layer",
    sublabel: "AWS MY Region · Encrypted",
    color: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    dotColor: "bg-violet-400",
  },
];

function InfrastructureDiagram() {
  return (
    <motion.div
      className="mb-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid lg:grid-cols-2">
        {/* Left — architecture stack */}
        <div className="p-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Architecture Overview
          </p>
          <div className="space-y-3">
            {INFRA_LAYERS.map((layer, i) => {
              const Icon = layer.icon;
              const isLast = i === INFRA_LAYERS.length - 1;
              return (
                <div key={layer.label}>
                  <motion.div
                    className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${layer.color}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">
                        {layer.label}
                      </p>
                      <p className="text-xs opacity-70">{layer.sublabel}</p>
                    </div>
                    {/* Animated data-flow dots */}
                    <motion.div
                      className={`h-2 w-2 rounded-full ${layer.dotColor}`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  {/* Connector arrow */}
                  {!isLast && (
                    <motion.div
                      className="flex justify-center py-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <ArrowRight className="h-3.5 w-3.5 rotate-90 text-slate-700" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — live metrics panel */}
        <div className="flex flex-col justify-center border-t border-slate-800 p-8 lg:border-l lg:border-t-0">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Live System Status
          </p>
          <div className="space-y-5">
            {/* Uptime bar */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-slate-300">System Uptime</span>
                <motion.span
                  className="text-sm font-semibold text-emerald-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  99.9%
                </motion.span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  className="h-full rounded-full bg-emerald-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "99.9%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Speed hero callout */}
            <motion.div
              className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <motion.span
                      className="text-2xl font-bold text-blue-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      45ms
                    </motion.span>
                    <span className="text-xs text-slate-500">avg response</span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Sub-second page loads with edge caching across Malaysia
                  </p>
                </div>
              </div>
              {/* Latency ping visualization */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[10px] text-slate-500">Ping</span>
                <div className="flex flex-1 items-center gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-3 flex-1 rounded-sm bg-blue-500"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      style={{ originY: 1, opacity: 0.35 + (((i * 7 + 3) % 10) / 20) }}
                      transition={{ delay: 0.9 + i * 0.05, duration: 0.2 }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-emerald-400">Excellent</span>
              </div>
            </motion.div>

            {/* Encryption & data metrics */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                className="rounded-lg border border-slate-800 bg-slate-800/50 p-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-violet-400" />
                  <span className="text-xs text-slate-400">Encryption</span>
                </div>
                <span className="text-lg font-bold text-violet-400">100%</span>
                <p className="text-[10px] text-slate-500">End-to-end AES-256</p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-slate-800 bg-slate-800/50 p-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-xs text-slate-400">Cache Hit</span>
                </div>
                <span className="text-lg font-bold text-emerald-400">96%</span>
                <p className="text-[10px] text-slate-500">Edge CDN in KL</p>
              </motion.div>
            </div>

            {/* Status indicators */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "AWS MY", status: "Operational" },
                { label: "API", status: "45ms" },
                { label: "CDN", status: "12ms" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-lg border border-slate-800 bg-slate-800/50 px-3 py-2.5 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                >
                  <div className="mb-1 flex items-center justify-center gap-1.5">
                    <motion.div
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                    <span className="text-[11px] font-medium text-emerald-400">
                      {item.status}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Compliance Card ──────────────────────────────────────────────────────────

function ComplianceCard({
  feature,
  index,
}: {
  feature: ComplianceFeature;
  index: number;
}) {
  const colSpanClass = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    4: "lg:col-span-4",
  };

  return (
    <motion.div
      className={`group rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-4 transition-all hover:border-blue-500/50 hover:bg-slate-900 md:col-span-1 ${colSpanClass[feature.colSpan]}`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
          <feature.icon className="h-4 w-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
      </div>
      <p className="text-xs leading-relaxed text-slate-400">{feature.description}</p>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ComplianceSection() {
  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-slate-950 py-20">
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
           Designed with Malaysian regulatory compliance
            from day one. Built with near instant loading times.
          </p>
        </motion.div>

        {/* Infrastructure Diagram */}
        <InfrastructureDiagram />

        {/* Compliance Features Grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {complianceFeatures.map((feature, index) => (
            <ComplianceCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

