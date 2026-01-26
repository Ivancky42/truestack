"use client";

import { FileText, Shield, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "Loan Management",
    description: "Complete loan lifecycle management with borrower tracking, disbursement scheduling, and repayment monitoring.",
  },
  {
    icon: Shield,
    title: "Compliance Exports",
    description: "One-click KPKT regulatory reports and compliance documentation, always audit-ready.",
  },
  {
    icon: Zap,
    title: "Ease of Use",
    description: "Intuitive interface designed for offline lenders — no technical expertise required to get started.",
  },
];

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
            id="orange-grid"
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
        <rect width="100%" height="100%" fill="url(#orange-grid)" />
      </svg>

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          background: "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.3) 0%, transparent 70%)"
        }}
      />
      
      {/* Animated gradient orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-3xl"
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

export function KpktPlatform() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <GridPattern />

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center justify-center gap-2">
            <Rocket className="h-5 w-5 text-orange-400" />
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
              Coming Soon
            </span>
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">TrueStack Kredit</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 md:text-xl">
            A purpose-built SaaS platform for offline KPKT lenders — 
            streamline operations, ensure compliance, and scale with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-orange-500/50 hover:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 transition-colors group-hover:bg-orange-500/20">
                <feature.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400">
            Launching at{" "}
            <span className="font-medium text-orange-400">kredit.truestack.my</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
