"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  Coins,
  FileSignature,
  Layers,
  Network,
  Receipt,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern
            id="grid-p2p-hero"
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
        <rect width="100%" height="100%" fill="url(#grid-p2p-hero)" />
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-violet-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const ORBIT_FEATURES = [
  { label: "Investor portal", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Issuer onboarding", icon: Building2, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Listings engine", icon: Layers, color: "text-fuchsia-600", bg: "bg-fuchsia-50" },
  { label: "Escrow & FPX", icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "e-KYC & AML", icon: ScanFace, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "e-Signing vault", icon: FileSignature, color: "text-rose-600", bg: "bg-rose-50" },
  { label: "Reporting & audit", icon: BarChart3, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Gharamah / Ta'widh", icon: Coins, color: "text-teal-600", bg: "bg-teal-50" },
];

function P2PHeroVisual() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      aria-hidden
    >
      {/* Connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 520"
      >
        {ORBIT_FEATURES.map((_, i) => {
          const angle = (i / ORBIT_FEATURES.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 200;
          const nx = 260 + Math.cos(angle) * radius;
          const ny = 260 + Math.sin(angle) * radius;
          return (
            <motion.line
              key={i}
              x1={260}
              y1={260}
              x2={Math.round(nx * 100) / 100}
              y2={Math.round(ny * 100) / 100}
              stroke="var(--color-primary)"
              strokeWidth={0.8}
              strokeDasharray="4 4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.18, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
            />
          );
        })}
      </svg>

      {/* Center hub — the Platform */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border-2 border-primary/25 bg-white shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Network className="h-6 w-6" />
        </div>
        <p className="mt-2 text-center text-[11px] font-semibold leading-tight text-foreground">
          TrueP2P™
        </p>
        <p className="text-[10px] text-muted-foreground">SC-aligned</p>
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Orbiting feature nodes */}
      {ORBIT_FEATURES.map((feature, i) => {
        const Icon = feature.icon;
        const angle = (i / ORBIT_FEATURES.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 200;
        const baseX = 260 + Math.cos(angle) * radius;
        const baseY = 260 + Math.sin(angle) * radius;
        const leftPct = Math.round((baseX / 520) * 10000) / 100;
        const topPct = Math.round((baseY / 520) * 10000) / 100;

        return (
          <motion.div
            key={feature.label}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${leftPct}%`, top: `${topPct}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3 + i * 0.07,
            }}
          >
            <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 bg-white px-3 py-2.5 shadow-sm">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${feature.bg}`}
              >
                <Icon className={`h-4.5 w-4.5 ${feature.color}`} />
              </div>
              <span className="whitespace-nowrap text-[11px] font-medium text-foreground/80">
                {feature.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Soft background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
    </motion.div>
  );
}

export function P2PHero() {
  return (
    <section id="hero" className="relative overflow-hidden">
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
              className="mb-5 flex flex-wrap gap-2 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-primary">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                SC RMO-aligned
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-emerald-700">
                <Sparkles className="h-4 w-4 shrink-0" />
                Conventional &amp; Shariah-aligned
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3.5 py-1.5 text-violet-700">
                <BadgeCheck className="h-4 w-4 shrink-0" />
                Examiner-ready by design
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              TrueP2P™ — peer-to-peer platforms for{" "}
              <span className="bg-linear-to-r from-primary via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Malaysia.
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg font-medium text-primary md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Conventional and Shariah-aligned peer-to-peer financing platforms.
            </motion.p>

            <motion.p
              className="mt-4 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We design and engineer end-to-end P2P platforms for Malaysian
              operators — investor onboarding, listings, escrow, payments,
              e-signing,{" "}
              <span className="font-medium text-foreground/90">
                Gharamah and Ta&apos;widh
              </span>{" "}
              accounting, and reporting — built for{" "}
              <span className="font-medium text-foreground/90">
                Securities Commission Malaysia
              </span>{" "}
              requirements. Our consultancy
              team can also guide SC Malaysia Recognised Market Operator (RMO)
              registration end-to-end alongside the build.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact?subject=TrueP2P">
                  Talk to our TrueP2P™ team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="#what-we-build">
                  <Layers className="h-4 w-4" />
                  See platform modules
                </Link>
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="mt-10 grid grid-cols-3 gap-4 border-t pt-6 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: Banknote, value: "End-to-end", label: "Investor + Issuer + Admin" },
                { icon: ShieldCheck, value: "AWS Malaysia", label: "Data residency" },
                { icon: Receipt, value: "Audit-ready", label: "Logs & exports" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-start gap-2">
                  <stat.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <P2PHeroVisual />
        </div>
      </div>
    </section>
  );
}
