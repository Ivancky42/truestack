"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { truekreditFaq } from "@/lib/truekredit-faq";
import {
  ArrowRight,
  Check,
  X,
  FileText,
  Calculator,
  FileCheck,
  Wallet,
  Receipt,
  History,
  Shield,
  ShieldCheck,
  FileSpreadsheet,
  Clock,
  Search,
  AlertTriangle,
  Users,
  Fingerprint,
  Mail,
  Building2,
  ChevronRight,
  ChevronLeft,
  Database,
  Lock,
  Server,
  Eye,
  FilePlusCorner,
  Banknote,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/shared/section-badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

// Grid Pattern Background Component
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
            id="grid-truekredit"
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
        <rect width="100%" height="100%" fill="url(#grid-truekredit)" />
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
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

// Screenshot Display Component with browser mockup frame
function ScreenshotDisplay({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
        {/* Browser header */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-400">
            kredit.truestack.my
          </div>
        </div>
        {/* Screenshot */}
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-full"
          priority
        />
      </div>
    </div>
  );
}

// Document Gallery Modal Component with pagination
function DocumentGalleryModal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const doc = documentExamples[currentIndex];

  return (
    <Dialog onOpenChange={() => setCurrentIndex(0)}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-6 gap-2 border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
        >
          <FileText className="h-4 w-4" />
          View More Auto-Generated Documents
          <ChevronRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{doc.title}</DialogTitle>
          <DialogDescription>{doc.description}</DialogDescription>
        </DialogHeader>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {/* Dot indicators + counter */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              {documentExamples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-4"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {currentIndex + 1} of {documentExamples.length}
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={currentIndex === documentExamples.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Document Image */}
        <div className="overflow-hidden rounded-lg border bg-white">
          <Image
            src={doc.src}
            alt={doc.alt}
            width={800}
            height={1000}
            className="w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Auto-generated document examples
const documentExamples = [
  {
    src: "/truekredit/document_example_receipt.png",
    alt: "Payment Receipt",
    title: "Payment Receipt",
    description:
      "Auto-generated after every repayment. Includes payment details, late fees breakdown, and outstanding balance — ready to print or email to the borrower.",
  },
  {
    src: "/truekredit/document_example_arrears.png",
    alt: "Notice of Arrears",
    title: "Notice of Arrears",
    description:
      "Triggered automatically when a borrower misses a payment. Details the overdue instalments, accrued late fees, and the deadline to settle before the loan is classified as defaulted.",
  },
  {
    src: "/truekredit/document_example_default.png",
    alt: "Notice of Default",
    title: "Notice of Default",
    description:
      "Generated when a loan transitions to default status. Formally notifies the borrower of the default classification, total outstanding amount, and potential legal actions.",
  },
  {
    src: "/truekredit/document_example_discharge.png",
    alt: "Letter of Discharge",
    title: "Letter of Discharge",
    description:
      "Issued upon full settlement of a loan — including early settlements with discounts. Confirms all obligations are fulfilled and the borrower is released from liability.",
  },
  {
    src: "/truekredit/lampiran_a_screenshot.png",
    alt: "Lampiran A",
    title: "Lampiran A — Lejar Akaun Peminjam",
    description:
      "Auto-generated Lampiran A report as required under the Akta Pemberi Pinjam Wang 1951. Includes borrower details, loan terms, and full repayment history — ready for KPKT submission.",
  },
];

// Compliance features data
const complianceFeatures = [
  {
    icon: FilePlusCorner,
    text: "Jadual J and K auto-generated",
  },
  {
    icon: FileSpreadsheet,
    text: "Lampiran A auto-generated",
  },
  {
    icon: FileText,
    text: "CSV export for KPKT iDEAL submission",
  },
  {
    icon: History,
    text: "Full transaction history per loan",
  },
  {
    icon: Clock,
    text: "Timestamped, traceable records",
  },
  {
    icon: Search,
    text: "Inspection-ready: instant lookup & reports",
  },
];

// Comparison data
const comparisonData = [
  { without: "Manual records", with: "Centralised cloud system" },
  { without: "Human errors", with: "Automated accuracy" },
  { without: "Stressful audits", with: "Confident inspections" },
  { without: "Reactive management", with: "Real-time visibility" },
  { without: "Limited scaling", with: "Efficient scaling" },
];

// ─── Feature Constellation for Hero ──────────────────────────────────────────

const HERO_FEATURES = [
  { label: "Jadual J & K", icon: FilePlusCorner, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Lampiran A", icon: FileSpreadsheet, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Arrears & Default", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Receipt & Letters", icon: Receipt, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "e-KYC", icon: Fingerprint, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Late Fees", icon: Clock, color: "text-rose-600", bg: "bg-rose-50" },
  { label: "Early Settlement", icon: Banknote, color: "text-teal-600", bg: "bg-teal-50" },
  { label: "Loan Lifecycle", icon: History, color: "text-sky-600", bg: "bg-sky-50" },
  { label: "iDEAL Export", icon: Database, color: "text-orange-600", bg: "bg-orange-50" },
  { label: "Audit Trail", icon: Search, color: "text-slate-600", bg: "bg-slate-100" },
  { label: "Repayment Tracking", icon: BarChart3, color: "text-cyan-600", bg: "bg-cyan-50" },
  { label: "Auto Documents", icon: FileCheck, color: "text-pink-600", bg: "bg-pink-50" },
];

function FeatureConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      // Normalize to -1..1 from center
      mouseX.set((e.clientX - rect.left - cx) / cx);
      mouseY.set((e.clientY - rect.top - cy) / cy);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Subscribe to spring for re-render (lightweight)
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const unsubX = springX.on("change", (x) => {
      setOffset((prev) => ({ ...prev, x }));
    });
    const unsubY = springY.on("change", (y) => {
      setOffset((prev) => ({ ...prev, y }));
    });
    return () => { unsubX(); unsubY(); };
  }, [springX, springY]);

  // Compute positions in an ellipse around the center
  const count = HERO_FEATURES.length;

  return (
    <motion.div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Connection lines (SVG) */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520">
        {HERO_FEATURES.map((_, i) => {
          const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
          const radiusX = 200;
          const radiusY = 200;
          const nx = Math.round((260 + Math.cos(angle) * radiusX) * 100) / 100;
          const ny = Math.round((260 + Math.sin(angle) * radiusY) * 100) / 100;
          return (
            <motion.line
              key={i}
              x1={260}
              y1={260}
              x2={nx}
              y2={ny}
              stroke="var(--color-primary)"
              strokeWidth={hoveredIdx === i ? 1.5 : 0.8}
              strokeDasharray="4 4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: hoveredIdx === i ? 0.4 : 0.12, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary/20 bg-white shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        style={{
          transform: `translate(calc(-50% + ${offset.x * 3}px), calc(-50% + ${offset.y * 3}px))`,
        }}
      >
        <Shield className="h-7 w-7 text-primary" />
        <span className="mt-1 text-[10px] font-semibold text-primary leading-tight text-center">
          TrueKredit
        </span>
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Feature nodes */}
      {HERO_FEATURES.map((feature, i) => {
        const Icon = feature.icon;
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const radiusX = 200;
        const radiusY = 200;
        // Base position (center of 520x520 viewbox)
        const baseX = 260 + Math.cos(angle) * radiusX;
        const baseY = 260 + Math.sin(angle) * radiusY;

        // Parallax: nodes further from center move more with cursor
        const parallax = 8;
        const px = baseX + offset.x * parallax * (0.6 + 0.4 * Math.abs(Math.cos(angle)));
        const py = baseY + offset.y * parallax * (0.6 + 0.4 * Math.abs(Math.sin(angle)));

        // Convert to percentage positioning (rounded to avoid hydration mismatch)
        const leftPct = Math.round((px / 520) * 10000) / 100;
        const topPct = Math.round((py / 520) * 10000) / 100;

        const isHovered = hoveredIdx === i;

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
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              className={`flex cursor-default flex-col items-center gap-1.5 rounded-xl border bg-white px-3 py-2.5 shadow-sm transition-shadow ${
                isHovered ? "shadow-md border-primary/30" : "border-border/60"
              }`}
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${feature.bg}`}>
                <Icon className={`h-4.5 w-4.5 ${feature.color}`} />
              </div>
              <span className="whitespace-nowrap text-[11px] font-medium text-foreground/80">
                {feature.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Soft background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
    </motion.div>
  );
}

export default function TrueKreditPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <GridPattern />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text Content */}
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
                <Shield className="h-4 w-4" />
                Designed for KPKT operations. Audit-ready by default.
              </motion.div>
              <motion.h1
                className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                TrueKredit™ — KPKT Loan Management System
              </motion.h1>
              <motion.p
                className="mt-4 text-lg font-medium text-primary md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Tailor-made for KPKT Licensed Money Lenders
              </motion.p>
              <motion.p
                className="mt-4 text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Manage borrowers, loans, compliance, and audits — all in one secure system.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild size="lg" className="gap-2">
                  <Link href="#demo">
                    Book a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#pricing">View Pricing</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Feature Constellation */}
            <FeatureConstellation />
          </div>
        </div>
      </section>

      {/* Designed for Owners Section */}
      <section id="owners" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid gap-12 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <SectionBadge icon={Building2} text="For Business Owners" />
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                Designed for KPKT Loan Business Owners
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                As a director or owner of a KPKT-licensed money lending business, you oversee the
                entire borrower lifecycle — from enquiry to final payment — while ensuring full
                compliance with regulatory requirements. TrueKredit gives you the tools to manage
                it all efficiently.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-6 gap-2 border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  >
                    Without TrueKredit vs With TrueKredit
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl">
                      Without TrueKredit vs With TrueKredit
                    </DialogTitle>
                    <DialogDescription>
                      See how TrueKredit transforms your loan management operations.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 border-t pt-6 md:gap-8">
                    <div className="text-center">
                      <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                        Without TrueKredit
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="mb-4 rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        With TrueKredit
                      </div>
                    </div>
                  </div>
                  {comparisonData.map((row) => (
                    <div
                      key={row.without}
                      className="grid grid-cols-2 gap-4 border-b py-4 md:gap-8"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 shrink-0 text-red-400" />
                        {row.without}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {row.with}
                      </div>
                    </div>
                  ))}
                </DialogContent>
              </Dialog>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Current Challenges</h3>
              <ul className="space-y-3">
                {[
                  "Excel spreadsheets and paper files",
                  "Manual calculations for instalments and late charges",
                  "Manual document preparation",
                  "Compliance reporting pressure",
                  "Audit stress",
                ].map((challenge, index) => (
                  <motion.li
                    key={challenge}
                    className="flex items-start gap-3 rounded-lg border bg-background p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost of Manual Operations Section */}
      {/* <section id="cost" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={AlertTriangle} text="Hidden Costs" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Manual Work Creates Risk and Hidden Cost
            </h2>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              "Staff time wasted on repetitive admin",
              "Higher chance of human error",
              "Inconsistent records across loans/branches",
              "Missed/late compliance submissions",
              "Exposure to penalties/enforcement",
              "Hard to scale without hiring more staff",
            ].map((risk, index) => (
              <motion.div
                key={risk}
                className="flex items-start gap-3 rounded-xl border bg-red-50/50 p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <span className="text-sm text-muted-foreground">{risk}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg font-medium md:text-xl">
              Manual systems don&apos;t just slow you down — they increase compliance risk.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Core Features Section */}
      <section id="features" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Shield} text="End-to-End Solution" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              From Enquiry to Final Payment — All in One System
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Each part of the workflow is supported by clear screens and controls — from capturing
              borrowers and configuring products to tracking repayments and history.
            </p>
          </motion.div>

          {/* Block 1: Enquiry & calculation — Borrower details screenshot */}
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
            <h3 className="text-2xl font-semibold tracking-tight">
              Capture Enquiries & Approve Loans Faster
            </h3>
            <p className="text-muted-foreground">
              From the very first enquiry, borrower details and documents are captured
              digitally. Loan calculations and approval workflows are built in — so your
              team spends less time on data entry and more time serving customers.
            </p>
          </div>
          <motion.div
            className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Customer Enquiry & Document Capture</CardTitle>
                  <CardDescription>
                    Digitize borrower information and documents from first contact.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Loan Calculation & Approval Workflow</CardTitle>
                  <CardDescription>
                    Automated interest and instalment calculations with approval tracking. Quote generator with 1 click sharing to Whatsapp.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex justify-center">
              <ScreenshotDisplay
                src="/truekredit/loan_summary_screenshot.png"
                alt="Loan Summary View"
                className="max-w-md"
              />
            </div>
          </motion.div>

          {/* Block 2: Products & documents — Edit product screenshot */}
          <div className="mt-24 grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
            <h3 className="text-2xl font-semibold tracking-tight">
              Configure Products & Generate Documents Instantly
            </h3>
            <p className="text-muted-foreground">
              Set up loan products once — interest model, eligibility rules, and Jadual J/K
              schedule type — and the system does the rest. Offer letters and agreements are
              generated automatically, ensuring every document is compliant and consistent.
            </p>
          </div>
          <motion.div
            className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="order-2 lg:order-1 lg:flex lg:justify-end">
              <ScreenshotDisplay
                src="/truekredit/edit_product_screenshot.png"
                alt="Edit Product — Add or edit loan products (Basic Info, interest model, borrower eligibility, Jadual J/K)"
                className="max-w-md"
              />
            </div>
            <div className="space-y-6 lg:order-2 lg:pl-6">
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FilePlusCorner className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Product Configuration</CardTitle>
                  <CardDescription>
                    Define loan products with interest model, borrower eligibility, and Jadual J/K
                    schedule type.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Offer Letter & Agreement Generation</CardTitle>
                  <CardDescription>
                    Auto-generate compliant loan documents ready for signing.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          {/* Block 3: Disbursement, repayment & history — Repayment schedule screenshot */}
          <div className="mt-24 grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
            <h3 className="text-2xl font-semibold tracking-tight">
              Track Every Ringgit — From Disbursement to Final Payment
            </h3>
            <p className="text-muted-foreground">
              Once a loan is approved, TrueKredit tracks the full money trail — disbursements,
              repayments, and collections — with a complete audit history for every transaction.
              Your books are always balanced, and auditors get the records they need instantly.
            </p>
          </div>
          <motion.div
            className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Disbursement Tracking</CardTitle>
                  <CardDescription>
                    Track loan disbursements and maintain complete fund flow records.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Receipt className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Repayment & Collections</CardTitle>
                  <CardDescription>
                    Manage repayments, late charges, and collection workflows.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <History className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Early Settlement Feature</CardTitle>
                  <CardDescription>
                    Incentivize early settlements by offering discounts on the remaining interest payable. Set lock in period, waive late fees, and offer discounts in fixed amount or %.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col items-center gap-8">
              <ScreenshotDisplay
                src="/truekredit/repayment_schedule_screenshot.png"
                alt="Repayment Schedule"
                className="max-w-md"
              />
              <ScreenshotDisplay
                src="/truekredit/early_settlement_screenshot.png"
                alt="Early Settlement — Progress tracking with paid instalments, on-time rate, and discount summary"
                className="max-w-md"
              />
            </div>
          </motion.div>

          {/* Block 4: Late fees, arrears & default workflow — Late fees screenshot */}
          <div className="mt-24 grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
            <h3 className="text-2xl font-semibold tracking-tight">
              Late Fees, Arrears & Default — Handled Automatically
            </h3>
            <p className="text-muted-foreground">
              Stop worrying about miscalculated late charges or missed follow-ups.
              TrueKredit automatically tracks overdue payments, calculates late fees to the
              sen, and progresses loans through the arrears-to-default workflow — so nothing
              falls through the cracks.
            </p>
          </div>
          <motion.div
            className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="order-2 lg:order-1 flex flex-col items-end gap-8">
              <ScreenshotDisplay
                src="/truekredit/late_fees_screenshot.png"
                alt="Automated Late Fees, Arrears & Default Management"
                className="max-w-md"
              />
              <ScreenshotDisplay
                src="/truekredit/late_summary_screenshot.png"
                alt="Late Payment Summary — Progress tracking with overdue instalments, late fees, and on-time rate"
                className="max-w-md"
              />
            </div>
            <div className="space-y-6 lg:order-2 lg:pl-6">
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Auto-Calculated Late Fees</CardTitle>
                  <CardDescription>
                    Late charges computed automatically based on your product rules — no manual work, no errors.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <AlertTriangle className="h-6 w-6 text-amber-500" />
                  </div>
                  <CardTitle className="text-lg">Arrears & Default Workflow</CardTitle>
                  <CardDescription>
                    Loans automatically flagged and transitioned through arrears to default based on your rules.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Auto-Generated Arrears & Default Letters</CardTitle>
                  <CardDescription>
                    Reminder letters and default notices generated automatically — ready to print or email.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          {/* Block 5: TrueSight™ — Cross-Tenant Borrower Insights */}
          <div className="mt-24 grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
            <h3 className="text-2xl font-semibold tracking-tight">
              TrueSight™ — Cross-Lender Borrower Insights
            </h3>
            <p className="text-muted-foreground">
              Make informed lending decisions with aggregated borrower intelligence across the
              TrueKredit platform. See how a borrower performs with other lenders — and track
              detailed payment performance on your own platform. Included for free with core plan subscription.
            </p>
          </div>
          <motion.div
            className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Included with Core Plan
              </div>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                    <Sparkles className="h-6 w-6 text-violet-600" />
                  </div>
                  <CardTitle className="text-lg">Cross-Lender Borrower Profile</CardTitle>
                  <CardDescription>
                    See if a borrower has loans with other lenders on the platform, including how
                    many active, completed, or defaulted loans they carry — without revealing
                    lender identities.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Data Consistency Check</CardTitle>
                  <CardDescription>
                    Instantly verify whether a borrower&apos;s name and phone number match records
                    from other lenders — helping you spot inconsistencies early.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Borrowed Range & Payment Performance</CardTitle>
                  <CardDescription>
                    View the borrower&apos;s total borrowed amount as a range and their on-time
                    payment rate across the platform — giving you a clearer picture of risk.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Receipt className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Your Own Platform Performance</CardTitle>
                  <CardDescription>
                    Beyond cross-lender insights, see each borrower&apos;s detailed payment
                    performance on your own platform — on-time, late, and overdue
                    breakdowns with risk profiling.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex justify-center">
              <ScreenshotDisplay
                src="/truekredit/truesight_screenshot.png"
                alt="TrueSight™ — Cross-Tenant Borrower Insights showing data consistency, borrowed range, and payment performance"
                className="max-w-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" data-nav-theme="dark" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Compliance First
                </span>
              </div>
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                Stay KPKT Audit-Ready — All the Time
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Every feature is designed with KPKT compliance in mind. Generate reports, track
                every transaction, and be inspection-ready at a moment&apos;s notice.
              </p>

              <ul className="mt-8 space-y-4">
                {complianceFeatures.map((feature, index) => (
                  <motion.li
                    key={feature.text}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-slate-200">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Auto-Generated Documents Gallery Modal */}
              <DocumentGalleryModal />
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ScreenshotDisplay
                src="/truekredit/jadual_j_screenshot.png"
                alt="Compliance Report Generation"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-center text-lg font-medium text-primary md:text-xl">
              Respond to audits with confidence, not panic. Everything auditors need is already
              organised.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise-Grade Infrastructure Section */}
      <section id="infrastructure" data-nav-theme="dark" className="border-t border-slate-800 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={ShieldCheck} text="Your Data is Safe" className="[&>svg]:text-primary [&>span]:text-primary" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400 md:text-xl">
              Your loan data is securely stored and always available. Built on modern cloud infrastructure with Malaysian data residency.
            </p>
          </motion.div>

          {/* Infrastructure Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Malaysia Data Residency - Large card */}
            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Malaysia Data Residency</h3>
                  <p className="text-slate-400">
                    All data hosted on AWS Malaysia region ensuring data sovereignty and regulatory compliance. Your customer data never leaves Malaysia.
                  </p>
                </div>
                {/* AWS Malaysia illustration */}
                <div className="relative">
                  <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                    {/* Header with AWS badge */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-[#FF9900]/20">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#FF9900">
                            <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296z"/>
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-slate-300">Amazon Web Services</span>
                      </div>
                      <span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">ap-southeast-5</span>
                    </div>
                    
                    {/* Data center visualization */}
                    <div className="relative rounded-lg border border-slate-700 bg-slate-900 p-4">
                      {/* Server rack representation */}
                      <div className="flex items-center justify-center gap-4">
                        {/* Server racks */}
                        <div className="flex gap-2">
                          {[1, 2, 3].map((rack) => (
                            <div key={rack} className="flex h-20 w-8 flex-col items-center justify-between rounded border border-slate-600 bg-slate-800 p-1">
                              <div className="w-full space-y-0.5">
                                <div className="h-1 w-full rounded-sm bg-primary/60" />
                                <div className="h-1 w-full rounded-sm bg-primary/40" />
                                <div className="h-1 w-full rounded-sm bg-slate-600" />
                                <div className="h-1 w-full rounded-sm bg-primary/50" />
                              </div>
                              <div className="flex w-full justify-center gap-0.5">
                                <div className="h-1 w-1 rounded-full bg-green-500" />
                                <div className="h-1 w-1 rounded-full bg-green-500" />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Connection lines */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
                          <div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
                          <div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
                        </div>
                        
                        {/* Malaysia indicator */}
                        <div className="flex flex-col items-center">
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-slate-800">
                            <div className="absolute inset-2 animate-pulse rounded-full bg-primary/10" />
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">MY</div>
                            </div>
                          </div>
                          <span className="mt-1 text-[10px] font-medium text-slate-400">Malaysia</span>
                        </div>
                      </div>
                      
                      {/* Status bar */}
                      <div className="mt-4 flex items-center justify-between rounded bg-slate-800/50 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="text-[10px] text-slate-400">All systems operational</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-slate-500">
                          <span>Uptime: <span className="text-primary">99.9%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Automatic Backups */}
            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Automatic Backups</h3>
              <p className="mb-4 text-sm text-slate-400">
                Daily automated backups with point-in-time recovery. Your data is never lost.
              </p>
              {/* Backup illustration */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-10 flex-col items-center justify-center rounded border border-slate-600 bg-slate-900">
                    <div className="mb-1 h-1 w-6 rounded bg-primary" />
                    <div className="mb-1 h-1 w-6 rounded bg-slate-600" />
                    <div className="h-1 w-6 rounded bg-slate-600" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-xs font-medium text-white">Last Backup</div>
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] text-slate-500">Today, 03:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Security */}
            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Enterprise Security</h3>
              <p className="mb-4 text-sm text-slate-400">
                Bank-grade encryption protects your data at rest and in transit.
              </p>
              {/* Security layers illustration */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs text-slate-300">256-bit AES Encryption</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs text-slate-300">TLS 1.3 Protocol</span>
                </div>
                <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs text-slate-300">Role-Based Access</span>
                </div>
              </div>
            </motion.div>

            {/* Complete Audit Trails */}
            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Complete Audit Trails</h3>
              <p className="mb-4 text-sm text-slate-400">
                Every action is logged and traceable. Full history preserved indefinitely.
              </p>
              {/* Audit log illustration */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                <div className="space-y-2 font-mono text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">10:42:15</span>
                    <span className="text-primary">PAYMENT_RECEIVED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">10:41:02</span>
                    <span className="text-slate-300">LOAN_APPROVED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">10:40:28</span>
                    <span className="text-slate-300">DOC_GENERATED</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 24/7 Availability */}
            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">24/7 Availability</h3>
              <p className="mb-4 text-sm text-slate-400">
                Access your data anytime, anywhere. 99.9% uptime SLA guaranteed.
              </p>
              {/* Uptime chart illustration */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">System Status</span>
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Operational
                  </span>
                </div>
                <div className="flex h-8 items-end gap-1">
                  {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-primary/50"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Data Preservation Promise */}
          <motion.div
            className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg font-medium text-primary md:text-xl">
              Your data is preserved securely for as long as you subscribe. Access your complete loan history anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Add-on Modules Section */}
      <section id="pricing" className="border-t bg-muted/30 py-20">
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
              Simple Pricing That Scales With Your Business
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pay for what you need. Add optional modules to enhance your TrueKredit experience.
            </p>
          </motion.div>

          {/* Unified Pricing — Core then Add-on Modules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <Card className="w-full">
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody className="divide-y">
                    {/* Core Plan */}
                    <tr className="bg-primary/5">
                      <td className="px-6 py-4">
                        <div className="font-semibold">Core Plan</div>
                        <div className="text-sm text-muted-foreground">First 500 loans</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span className="text-lg text-muted-foreground line-through">RM 899</span>
                          <span className="text-2xl font-bold text-primary">RM 499</span>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">PROMO</span>
                          <span className="text-sm text-muted-foreground">/ month</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium">Additional 500 Loans</div>
                        <div className="text-sm text-muted-foreground">Per additional block</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-xl font-semibold">RM 200</div>
                        <div className="text-sm text-muted-foreground">/ month</div>
                      </td>
                    </tr>
                    {/* Add-on Modules */}
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium">TrueIdentity™ (e-KYC)</div>
                        <div className="text-sm text-muted-foreground">Digital identity verification per borrower</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-xl font-semibold">RM 4</div>
                        <div className="text-sm text-muted-foreground">/ verification</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium">Truesend™</div>
                        <div className="text-sm text-muted-foreground">Auto-send receipts, reminders, default notices</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-xl font-semibold">RM 50</div>
                        <div className="text-sm text-muted-foreground">/ month per 500 loans</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="mx-auto block text-sm text-primary underline-offset-4 hover:underline"
                >
                  See example calculation
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Example Monthly Cost</DialogTitle>
                  <DialogDescription>
                    Two scenarios. Add-ons are optional — you only pay for what you use.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 pt-2">
                  {/* Scenario 1: ~200 loans */}
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">~200 loans (first 500 block)</h4>

                    <div className="mb-3">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Core</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Core Plan</span>
                          <span>RM 499</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Add-ons (optional)</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>TrueIdentity™ — per verification (25 × RM 4)</span>
                          <span>RM 100</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Truesend™</span>
                          <span>RM 50</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-3 flex justify-between text-sm font-semibold">
                      <span>Total</span>
                      <span className="text-primary">RM 649 / month</span>
                    </div>
                  </div>

                  {/* Scenario 2: 800 loans */}
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">800 loans (2nd block)</h4>

                    <div className="mb-3">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Core</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Core Plan</span>
                          <span>RM 499</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Additional 500 Loans</span>
                          <span>RM 200</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Add-ons (optional)</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>TrueIdentity™ — per verification (40 × RM 4)</span>
                          <span>RM 160</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Truesend™ (2 × 500 loans)</span>
                          <span>RM 100</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-3 flex justify-between text-sm font-semibold">
                      <span>Total</span>
                      <span className="text-primary">RM 959 / month</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Add-on Modules — Learn More */}
          <motion.div
            id="addons"
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8 text-center">
              <SectionBadge icon={Users} text="Add-on Modules" className="justify-center" />
              <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                Optional Modules to Enhance Your Workflow
              </h3>
              <p className="mt-2 text-muted-foreground">
                Add only what you need — no long-term commitment for usage-based modules.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
            {/* TrueIdentity e-KYC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Fingerprint className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>TrueIdentity™ (e-KYC)</CardTitle>
                      <span className="text-sm text-muted-foreground">Add-on</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {[
                      "QR code flow for borrower verification",
                      "IC OCR extraction + face liveness check",
                      "Result (pass/fail) saved into loan file",
                      "Prevents misuse of someone else's IC",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-medium">
                      RM 4 per completed verification
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Charged only on completion. Up to 3 retries.
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full gap-2">
                        Learn More <ChevronRight className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <Fingerprint className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <DialogTitle className="text-xl">TrueIdentity™ (e-KYC)</DialogTitle>
                            <DialogDescription>Digital identity verification for borrowers</DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-6 pt-2">
                        <div>
                          <h4 className="mb-2 font-semibold">What is TrueIdentity?</h4>
                          <p className="text-sm text-muted-foreground">
                            TrueIdentity is our integrated e-KYC (electronic Know Your Customer) verification
                            system. It allows you to verify a borrower&apos;s identity digitally — directly from
                            TrueKredit — ensuring the person applying for a loan is who they claim to be.
                          </p>
                        </div>

                        <div>
                          <h4 className="mb-3 font-semibold">How It Works</h4>
                          <ol className="space-y-3">
                            {[
                              { step: "1", title: "Generate QR Code", desc: "From TrueKredit, generate a unique QR code for the borrower during the application process." },
                              { step: "2", title: "Borrower Scans & Verifies", desc: "The borrower scans the QR code on their phone, takes a photo of their IC (MyKad), and completes a face liveness check." },
                              { step: "3", title: "IC OCR Extraction", desc: "The system automatically extracts data from the IC — name, IC number, address — and cross-checks it against the liveness photo." },
                              { step: "4", title: "Result Saved to Loan File", desc: "The verification result (pass or fail) is automatically saved into the borrower's loan file in TrueKredit for audit and compliance reference." },
                            ].map((item) => (
                              <li key={item.step} className="flex gap-3">
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                  {item.step}
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{item.title}</p>
                                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div>
                          <h4 className="mb-2 font-semibold">Why It Matters</h4>
                          <ul className="space-y-2">
                            {[
                              "Prevents identity fraud — ensures the borrower is the IC holder",
                              "Reduces manual verification effort for your staff",
                              "Creates a tamper-proof digital record for KPKT inspections",
                              "Borrowers can verify from anywhere — no physical visit needed",
                            ].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                          <h4 className="mb-1 text-sm font-semibold">Pricing</h4>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">RM 4 per completed verification</span> (pass or fail).
                            Charged only when the verification is completed. Borrowers get up to 3 retries per session
                            at no extra cost. No monthly commitment — pay only for what you use.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>

            {/* Truesend™ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Truesend™</CardTitle>
                      <span className="text-sm text-muted-foreground">Add-on</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {[
                      "Auto email: receipts, reminders, default notices",
                      "Discharge letters sent automatically",
                      "Reduces admin workload significantly",
                      "Improves collection consistency",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm font-medium">RM 50/month per 500 loans</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      PDFs are still generated even without email service.
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full gap-2">
                        Learn More <ChevronRight className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <DialogTitle className="text-xl">Truesend™</DialogTitle>
                            <DialogDescription>Automated document delivery via email</DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-6 pt-2">
                        <div>
                          <h4 className="mb-2 font-semibold">What Is the Truesend™ Add-on?</h4>
                          <p className="text-sm text-muted-foreground">
                            TrueKredit already generates all loan-related PDFs automatically — receipts, reminder
                            letters, default notices, and discharge letters. The Truesend™ add-on takes it
                            a step further by <span className="font-medium text-foreground">sending these documents directly to borrowers via email</span>,
                            without any manual effort from your team.
                          </p>
                        </div>

                        <div>
                          <h4 className="mb-3 font-semibold">Documents Sent Automatically</h4>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {[
                              { icon: Receipt, title: "Payment Receipts", desc: "Sent immediately after each repayment is recorded." },
                              { icon: AlertTriangle, title: "Reminder Letters", desc: "Sent before due dates to reduce late payments." },
                              { icon: FileText, title: "Default Notices", desc: "Triggered automatically when borrowers miss payments past the grace period." },
                              { icon: FileCheck, title: "Discharge Letters", desc: "Sent when a loan is fully settled, completing the borrower lifecycle." },
                            ].map((item) => (
                              <div key={item.title} className="flex gap-3 rounded-lg border p-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                  <item.icon className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{item.title}</p>
                                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-2 font-semibold">Benefits</h4>
                          <ul className="space-y-2">
                            {[
                              "Eliminates manual emailing — no more downloading PDFs and attaching them",
                              "Improves borrower communication and professionalism",
                              "Reminder letters reduce late payments and improve collection rates",
                              "Creates a verifiable digital trail of all correspondence",
                              "Frees your staff to focus on higher-value tasks",
                            ].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-2 font-semibold">Do I Still Get PDFs Without This Add-on?</h4>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Yes.</span> All PDFs — receipts, reminder letters,
                            default notices, and discharge letters — are generated automatically in TrueKredit regardless
                            of whether you subscribe to this add-on. The add-on only automates the <em>sending</em> of
                            these documents via email.
                          </p>
                        </div>

                        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                          <h4 className="mb-1 text-sm font-semibold">Pricing</h4>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">RM 50/month per 500 loans.</span>{" "}
                            Covers all Truesend™ email sending for up to 500 active loans. If you have more than
                            500 loans, simply add another block at the same rate. Scales alongside your TrueKredit subscription.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
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
            All loan data is preserved securely with encryption and regular backups.
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {truekreditFaq.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Ready to Run Your Loan Business with Confidence?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Focus on growth, not paperwork. Let TrueKredit handle the operational complexity
            so you can focus on what matters — serving your customers and growing your business.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/services/digital-license">
                Explore Digital KPKT License
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
