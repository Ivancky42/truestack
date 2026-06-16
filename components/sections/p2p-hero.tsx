"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Layers,
  Receipt,
  ShieldCheck,
  Sparkles,
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

function P2PHeroVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[560px]"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-primary/15 bg-linear-to-br from-primary/5 via-white to-violet-500/5 shadow-xl">
        <Image
          src="/p2p/hero.png"
          alt="TrueP2P peer-to-peer financing platform — investor portal, marketplace listings, escrow, e-signing and SC Malaysia compliance modules"
          fill
          priority
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 100vw"
          className="object-cover"
        />
      </div>
      {/* Floating credibility chips */}
      <div className="absolute -bottom-4 left-6 hidden items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 shadow-md sm:inline-flex">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-semibold text-primary">
          SC RMO-aligned
        </span>
      </div>
      <div className="absolute -top-4 right-6 hidden items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 shadow-md sm:inline-flex">
        <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
        <span className="text-[11px] font-semibold text-emerald-800">
          Conventional &amp; Shariah
        </span>
      </div>
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
              Investor and issuer portals, escrow, payments, e-signing, and
              Gharamah/Ta&apos;widh accounting — built for SC Malaysia, with
              RMO registration support alongside the build.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact?subject=TrueP2P">
                  Book a Free Consultation
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
