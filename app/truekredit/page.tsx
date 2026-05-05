"use client";

import { useState, useRef, useCallback, useEffect, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { truekreditFaq } from "@/lib/truekredit-faq";
import type { LucideIcon } from "lucide-react";
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
  ScanFace,
  CheckCircle2,
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
  Layers,
  Link2,
  Smartphone,
  Globe,
  PenLine,
  Briefcase,
  Award,
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

// Apple-style horizontal feature carousel with peek-overflow + snap scroll.
// Each card pairs a visual (screenshot, image grid, or designed icon header)
// with title + description copy below. Cards are large with a near-square
// visual area on top. Includes prev/next controls (md+) plus native swipe.
type FeatureCardData = {
  icon: LucideIcon;
  title: string;
  desc: string;
  // Choose ONE of four visual modes: custom node, image, images (grid),
  // or fall back to a designed icon header.
  visual?: ReactNode;
  image?: { src: string; alt: string };
  images?: { src: string; alt: string; label?: string }[];
  accent?: string;
  iconColor?: string;
  iconBg?: string;
  tag?: string;
};

// Shared shell for all in-card module visuals: tinted gradient bg with a
// soft glow blob behind the mock, plus optional floating stat badges.
type ShellBadge = {
  label: string;
  sub: string;
  pos: string; // tailwind position classes, e.g. "left-3 top-4"
  emphasis?: string; // text color class for the headline label
};

function VisualShell({
  tint,
  glow,
  badges,
  children,
}: {
  tint: string;
  glow: string;
  badges?: ShellBadge[];
  children: ReactNode;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br ${tint} px-6 py-5`}
    >
      <div
        className={`absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full ${glow} blur-3xl`}
      />
      {children}
      {badges?.map((b) => (
        <div
          key={b.label + b.pos}
          className={`absolute ${b.pos} hidden rounded-md border bg-white px-2 py-1 shadow-sm sm:block`}
        >
          <p
            className={`text-[9px] font-semibold leading-tight ${b.emphasis ?? "text-foreground"}`}
          >
            {b.label}
          </p>
          <p className="text-[7px] leading-tight text-muted-foreground">{b.sub}</p>
        </div>
      ))}
    </div>
  );
}

// Phone-frame chrome reused by phone-style mocks.
function PhoneChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[78%] max-w-[260px] overflow-hidden rounded-[1.4rem] border border-border/70 bg-white shadow-xl">
      <div className="flex items-center justify-between bg-slate-50 px-4 py-1.5">
        <span className="text-[9px] font-medium text-slate-400">9:41</span>
        <div className="mx-auto h-3.5 w-14 rounded-full bg-slate-900" />
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
      <div className="px-3 pb-3 pt-3">{children}</div>
    </div>
  );
}

// ── TrueIdentity ────────────────────────────────────────────────────────────
function TrueIdentityVisual() {
  const steps: {
    icon: LucideIcon;
    label: string;
    sub: string;
    color: string;
    bg: string;
    border: string;
  }[] = [
    { icon: FileCheck, label: "Scan MyKad", sub: "OCR extraction", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
    { icon: ScanFace, label: "Selfie + liveness", sub: "Face capture", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200" },
    { icon: Fingerprint, label: "Biometric match", sub: "Compared to IC", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
    { icon: CheckCircle2, label: "Verified", sub: "Saved to loan file", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  ];

  return (
    <VisualShell
      tint="from-primary/10 via-primary/5 to-violet-500/10"
      glow="bg-primary/15"
      badges={[
        { label: "<3s", sub: "Verification", pos: "left-3 top-4" },
        { label: "PDPA", sub: "Compliant", pos: "bottom-4 right-3", emphasis: "text-primary" },
      ]}
    >
      <PhoneChrome>
        <div className="mb-3 text-center">
          <div className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
            <Fingerprint className="h-3.5 w-3.5 text-primary" />
          </div>
          <p className="text-[10px] font-semibold text-foreground">Identity Verification</p>
          <p className="text-[8px] text-muted-foreground">Powered by TrueIdentity™</p>
        </div>
        <div className="space-y-1.5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === steps.length - 1;
            return (
              <div
                key={s.label}
                className={`flex items-center gap-2 rounded-md border ${s.border} bg-white px-2 py-1.5`}
              >
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${s.bg}`}>
                  <Icon className={`h-3 w-3 ${s.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-medium leading-tight text-foreground">{s.label}</p>
                  <p className="truncate text-[8px] leading-tight text-muted-foreground">{s.sub}</p>
                </div>
                {isLast ? (
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                ) : (
                  <Check className="h-2.5 w-2.5 text-primary" />
                )}
              </div>
            );
          })}
        </div>
      </PhoneChrome>
    </VisualShell>
  );
}

// ── Truesend ────────────────────────────────────────────────────────────────
function TruesendVisual() {
  const messages = [
    {
      tag: "Receipt",
      meta: "Email • 09:14",
      text: "Payment of RM 750 received",
      icon: Receipt,
      border: "border-emerald-200",
      chip: "bg-emerald-100 text-emerald-700",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      tag: "Reminder",
      meta: "WhatsApp • 08:00",
      text: "Instalment due in 3 days",
      icon: Clock,
      border: "border-sky-200",
      chip: "bg-sky-100 text-sky-700",
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
    },
    {
      tag: "Default notice",
      meta: "Email • 07:45",
      text: "Account in arrears since 12 Apr",
      icon: AlertTriangle,
      border: "border-amber-200",
      chip: "bg-amber-100 text-amber-700",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <VisualShell
      tint="from-sky-500/15 via-cyan-500/5 to-sky-500/10"
      glow="bg-sky-500/20"
      badges={[
        { label: "12 today", sub: "Auto-sent", pos: "left-3 top-4" },
        { label: "18", sub: "Templates", pos: "bottom-4 right-3", emphasis: "text-sky-600" },
      ]}
    >
      <PhoneChrome>
        <div className="mb-2.5 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100">
            <Mail className="h-3.5 w-3.5 text-sky-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold leading-tight">Truesend™ Outbox</p>
            <p className="text-[8px] leading-tight text-muted-foreground">Auto-sent today</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
            Live
          </span>
        </div>
        <div className="space-y-1.5">
          {messages.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.tag}
                className={`flex items-center gap-2 rounded-md border ${m.border} bg-white px-2 py-1.5`}
              >
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${m.iconBg}`}>
                  <Icon className={`h-3 w-3 ${m.iconColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className={`rounded px-1 py-px text-[7px] font-semibold uppercase tracking-wide ${m.chip}`}>
                      {m.tag}
                    </span>
                    <p className="truncate text-[7px] text-muted-foreground">{m.meta}</p>
                  </div>
                  <p className="mt-0.5 truncate text-[9px] leading-tight text-foreground">{m.text}</p>
                </div>
                <Check className="h-3 w-3 text-emerald-500" />
              </div>
            );
          })}
        </div>
      </PhoneChrome>
    </VisualShell>
  );
}

// ── CTOS ────────────────────────────────────────────────────────────────────
function CTOSVisual() {
  return (
    <VisualShell
      tint="from-amber-500/15 via-orange-500/5 to-amber-500/10"
      glow="bg-amber-500/20"
      badges={[
        { label: "Pulled 09:14", sub: "In loan file", pos: "left-3 top-4" },
        { label: "Audit ✓", sub: "Logged", pos: "bottom-4 right-3", emphasis: "text-emerald-600" },
      ]}
    >
      <div className="relative w-[80%] max-w-[280px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-amber-100">
              <BarChart3 className="h-3 w-3 text-amber-600" />
            </div>
            <p className="text-[10px] font-semibold">Credit Report</p>
          </div>
          <span className="text-[8px] font-semibold uppercase tracking-wide text-amber-700">CTOS</span>
        </div>
        <div className="px-4 py-3">
          <p className="text-[8px] uppercase tracking-wide text-muted-foreground">Credit Score</p>
          <div className="mt-0.5 flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-amber-600">720</span>
            <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
              Good
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[72%] rounded-full bg-linear-to-r from-amber-400 to-emerald-400" />
          </div>
          <div className="mt-0.5 flex justify-between text-[7px] text-muted-foreground">
            <span>300</span>
            <span>850</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 border-t bg-slate-50/60 px-3 py-2.5">
          {[
            { value: "3", label: "Active", color: "text-sky-600" },
            { value: "96%", label: "On-time", color: "text-emerald-600" },
            { value: "0", label: "Defaulted", color: "text-rose-600" },
          ].map((s) => (
            <div key={s.label} className="rounded-md bg-white p-1.5 text-center">
              <p className={`text-[11px] font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[7px] uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

// ── SSM (Infomina) ──────────────────────────────────────────────────────────
function SSMVisual() {
  const directors = [
    { name: "Lim Wei Ming", role: "Director • 51%", initials: "LW" },
    { name: "Tan Siew Ling", role: "Director • 49%", initials: "TS" },
  ];
  return (
    <VisualShell
      tint="from-emerald-500/15 via-teal-500/5 to-emerald-500/10"
      glow="bg-emerald-500/20"
      badges={[
        { label: "via Infomina", sub: "SSM lookup", pos: "left-3 top-4", emphasis: "text-emerald-700" },
        { label: "Active", sub: "Status", pos: "bottom-4 right-3", emphasis: "text-emerald-600" },
      ]}
    >
      <div className="relative w-[80%] max-w-[280px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
        <div className="border-b bg-slate-50 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
              <Building2 className="h-3.5 w-3.5 text-emerald-600" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold uppercase tracking-tight">
                Acme Enterprise Sdn Bhd
              </p>
              <p className="text-[7px] text-muted-foreground">202401012345 (1234567-X)</p>
            </div>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          </div>
        </div>
        <div className="px-4 py-3">
          <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
            Directors & shareholders
          </p>
          <div className="space-y-1.5">
            {directors.map((d) => (
              <div
                key={d.name}
                className="flex items-center gap-2 rounded-md border border-emerald-100 bg-emerald-50/50 px-2 py-1.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-500 text-[8px] font-bold text-white">
                  {d.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-medium leading-tight">{d.name}</p>
                  <p className="text-[7px] leading-tight text-muted-foreground">{d.role}</p>
                </div>
                <Check className="h-3 w-3 text-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

// ── TrueSight ───────────────────────────────────────────────────────────────
function TrueSightVisual() {
  return (
    <VisualShell
      tint="from-violet-500/15 via-fuchsia-500/5 to-indigo-500/10"
      glow="bg-violet-500/20"
      badges={[
        { label: "6 lenders", sub: "Network match", pos: "left-3 top-4", emphasis: "text-violet-700" },
        { label: "On-time 96%", sub: "Performance", pos: "bottom-4 right-3", emphasis: "text-emerald-600" },
      ]}
    >
      <div className="relative w-[82%] max-w-[290px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-violet-100">
              <Sparkles className="h-3 w-3 text-violet-600" />
            </div>
            <p className="text-[10px] font-semibold">Borrower 360°</p>
          </div>
          <span className="rounded-full bg-violet-100 px-1.5 py-0.5 text-[8px] font-semibold text-violet-700">
            TrueSight™
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 px-3 py-3">
          {[
            { value: "3", label: "Active", color: "text-sky-600" },
            { value: "8", label: "Completed", color: "text-emerald-600" },
            { value: "0", label: "Defaulted", color: "text-rose-600" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-slate-100 bg-slate-50/70 p-2 text-center"
            >
              <p className={`text-base font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[7px] uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="border-t bg-slate-50/50 px-4 py-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
              On-time payments
            </p>
            <p className="text-[9px] font-bold text-emerald-600">96%</p>
          </div>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 flex-1 rounded-sm ${
                  i === 4 || i === 11 ? "bg-amber-300" : "bg-emerald-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

// ── On-prem digital signing (Trustgate) ─────────────────────────────────────
function DigitalSigningVisual() {
  return (
    <VisualShell
      tint="from-indigo-500/15 via-blue-500/5 to-indigo-500/10"
      glow="bg-indigo-500/20"
      badges={[
        { label: "PKI", sub: "Trustgate", pos: "left-3 top-4", emphasis: "text-indigo-600" },
        { label: "On-prem", sub: "Your servers", pos: "bottom-4 right-3", emphasis: "text-indigo-700" },
      ]}
    >
      <div className="relative w-[72%] max-w-[240px] overflow-hidden rounded-lg border border-border/70 bg-white shadow-xl">
        <div className="flex items-center gap-1.5 border-b bg-slate-50 px-3 py-1.5">
          <FileText className="h-3 w-3 text-indigo-600" />
          <p className="text-[9px] font-semibold">Loan Agreement.pdf</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-center text-[10px] font-bold uppercase tracking-wide">
            Loan Agreement
          </p>
          <p className="mt-0.5 text-center text-[7px] text-muted-foreground">
            Akta Pemberi Pinjam Wang 1951
          </p>
          <div className="mt-2.5 space-y-1">
            {[100, 92, 88, 95, 70].map((w, i) => (
              <div
                key={i}
                className="h-1 rounded-full bg-slate-100"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="mt-3 rounded-md border-2 border-dashed border-indigo-200 bg-indigo-50/50 p-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                <PenLine className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-semibold leading-tight">Digitally signed</p>
                <p className="text-[7px] leading-tight text-muted-foreground">
                  by Borrower • 12 May 2026
                </p>
              </div>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            </div>
          </div>
          <div className="mt-2 flex items-center justify-end gap-1">
            <ShieldCheck className="h-3 w-3 text-indigo-600" />
            <p className="text-[7px] font-semibold uppercase tracking-wide text-indigo-700">
              MSC Trustgate verified
            </p>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function FeatureCarousel({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureCardData[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 16;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Section-style centered header. Title is centered and stays
          perfectly centered; the prev/next buttons live at the bottom-right
          of the same header block on md+. */}
      <div className="relative mx-auto mb-8 max-w-6xl px-5 sm:mb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Prev/Next pinned to the right side (md+) */}
        <div className="absolute bottom-0 right-5 hidden gap-2 sm:right-6 md:flex lg:right-8">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={!canPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={!canNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Scroller — scroll-pl ensures snap respects the left padding so the
          first card stays inset (doesn't snap back to the edge after
          interaction). pr keeps matching breathing room after the last card. */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 pl-5 pr-5 scroll-pl-5 sm:gap-5 sm:pl-6 sm:pr-6 sm:scroll-pl-6 lg:pl-8 lg:pr-8 lg:scroll-pl-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <FeatureCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ item }: { item: FeatureCardData }) {
  const Icon = item.icon;
  const accent = item.accent ?? "bg-primary/10";
  const iconColor = item.iconColor ?? "text-primary";
  const iconBg = item.iconBg ?? "bg-linear-to-br from-primary/10 via-primary/5 to-background";

  return (
    <div
      data-carousel-item
      className="group flex w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:w-[440px] md:w-[500px] lg:w-[540px]"
    >
      {/* Visual area — squarish, ~62% of card */}
      <div className="relative aspect-5/4 w-full shrink-0 overflow-hidden bg-muted/40">
        {item.visual ? (
          <div className="h-full w-full">{item.visual}</div>
        ) : item.images ? (
          <div className="grid h-full w-full grid-cols-2 gap-1 bg-muted">
            {item.images.slice(0, 4).map((img) => (
              <div key={img.src} className="relative overflow-hidden bg-white">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 768px) 250px, (min-width: 640px) 220px, 170px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {img.label && (
                  <span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    {img.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : item.image ? (
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 500px, (min-width: 640px) 440px, 340px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center ${iconBg}`}>
            <div className={`flex h-24 w-24 items-center justify-center rounded-2xl ${accent} shadow-sm`}>
              <Icon className={`h-12 w-12 ${iconColor}`} />
            </div>
          </div>
        )}
      </div>

      {/* Copy area — compact bottom whitespace */}
      <div className="flex flex-col gap-2 p-6 sm:p-7">
        {item.tag && (
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
            {item.tag}
          </span>
        )}
        <h4 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
          {item.title}
        </h4>
        <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

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
                className="mb-5 flex flex-wrap gap-2 text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-primary">
                  <Shield className="h-4 w-4 shrink-0" />
                  TrueKredit™ — Multi-tenant SaaS
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3.5 py-1.5 text-violet-700">
                  <Award className="h-4 w-4 shrink-0" />
                  TrueKredit™ Pro — Dedicated AWS
                </span>
              </motion.div>
              <motion.h1
                className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Run your entire lending business from{" "}
                <span className="bg-linear-to-r from-primary via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  one platform.
                </span>
              </motion.h1>
              <motion.p
                className="mt-5 text-lg font-medium text-primary md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Built for Malaysian KPKT-licensed money lenders.
              </motion.p>
              <motion.p
                className="mt-4 text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                One integrated loan management system — borrowers, products, schedules, collections,
                and KPKT compliance — with optional borrower web, native mobile apps, and on-premises
                digital signing in <span className="font-medium text-foreground/90">TrueKredit Pro</span>.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <Button asChild size="lg" className="gap-2">
                  <Link href="#demo">
                    Book a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-violet-300 bg-violet-500/5 text-violet-700 hover:bg-violet-500/10 hover:text-violet-800"
                >
                  <Link href="#pro">
                    Explore TrueKredit Pro
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Feature Constellation */}
            <FeatureConstellation />
          </div>
        </div>
      </section>

      {/* Problem → Answer Narrative — compact before/after contrast */}
      <section id="story" className="border-t bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          {/* Centered header (matches the carousel section style) */}
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              The challenge
            </p>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Lending shouldn&apos;t mean stitching eight vendors together.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Separate tools, separate contracts, separate bills — and manual gaps that creep
              back into your compliance.
            </p>
          </motion.div>

          {/* Before / After visual contrast */}
          <motion.div
            className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* BEFORE — scattered stack */}
            <div className="rounded-2xl border border-red-200/70 bg-linear-to-br from-red-50/70 via-background to-background p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                  <X className="h-3.5 w-3.5" />
                  Without TrueKredit
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  8+ tools
                </span>
              </div>
              <h3 className="mb-5 font-display text-lg font-medium leading-snug md:text-xl">
                Eight vendor logins. Eight bills. Months of integration.
              </h3>
              {/* Scattered vendor pills */}
              <div className="mb-6 flex flex-wrap gap-2">
                {[
                  "Excel",
                  "Paper files",
                  "CTOS",
                  "e-KYC",
                  "Trustgate",
                  "SSM",
                  "Email",
                  "Payments",
                ].map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-red-200/70 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Manual instalment, interest, and late-fee maths",
                  "Months of integration before the first disbursement",
                  "Compliance reporting pressure and audit stress",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow / divider */}
            <div className="flex items-center justify-center py-2 lg:py-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 lg:h-14 lg:w-14">
                <ArrowRight className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
              </div>
            </div>

            {/* AFTER — TrueKredit unified */}
            <div className="rounded-2xl border border-primary/30 bg-linear-to-br from-primary/5 via-background to-background p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Check className="h-3.5 w-3.5" />
                  With TrueKredit
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-primary/70">
                  1 platform
                </span>
              </div>
              <h3 className="mb-5 font-display text-lg font-medium leading-snug md:text-xl">
                One platform. Everything connected. KPKT-aligned by design.
              </h3>
              {/* Unified pillars */}
              <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { label: "Borrowers", icon: Users },
                  { label: "Loans", icon: Wallet },
                  { label: "Payments", icon: Receipt },
                  { label: "Compliance", icon: Shield },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-primary/15 bg-background px-2 py-3 text-center"
                  >
                    <p.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium">{p.label}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                {[
                  "CTOS, Trustgate, Infomina, e-KYC, payments — already integrated",
                  "Live in weeks — no integration project required",
                  "Built around KPKT requirements from day one",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Two-edition selector ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-10 grid gap-4 rounded-2xl border bg-background p-5 shadow-sm md:grid-cols-2 md:p-6"
          >
            <div className="flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Shield className="h-4 w-4" />
                  TrueKredit
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-primary/80">
                  SaaS
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Multi-tenant on TrueStack&apos;s AWS Malaysia. Predictable subscription, fully
                managed, shared core for licensed money lenders.
              </p>
              <Link
                href="#features"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                See connected modules <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-violet-300/60 bg-violet-500/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
                  <Award className="h-4 w-4" />
                  TrueKredit Pro
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-violet-700/80">
                  Dedicated AWS
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Same platform on a dedicated, isolated AWS environment — adds borrower web,
                native mobile apps, on-prem PKI signing, and pen-test packaging.
              </p>
              <Link
                href="#pro"
                className="inline-flex items-center gap-1 text-sm font-medium text-violet-700 hover:underline"
              >
                Explore Pro <ArrowRight className="h-3.5 w-3.5" />
              </Link>
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

      {/* Core Features Section — full bleed Apple-style carousels.
          The section title is dropped; each carousel's title is promoted to a
          centered section-style header. */}
      <section id="features" className="border-t bg-muted/30 py-20">
        <div className="space-y-20">
          <FeatureCarousel
            eyebrow="Core Platform"
            title="The full lending lifecycle in one place"
            description="From customer enquiry through disbursement, repayment, late fees, default, and KPKT-ready compliance — every screen ships in TrueKredit."
            items={[
              {
                icon: FileText,
                title: "Customer enquiry & document capture",
                desc: "Digitise borrower information and supporting documents from the very first contact.",
                image: {
                  src: "/truekredit/borrower_details_screenshot.png",
                  alt: "Borrower details",
                },
              },
              {
                icon: Calculator,
                title: "Loan calculation & approval",
                desc: "Automated interest and instalment maths with approval tracking and one-click WhatsApp quote sharing.",
                image: {
                  src: "/truekredit/loan_summary_screenshot.png",
                  alt: "Loan summary",
                },
              },
              {
                icon: FilePlusCorner,
                title: "Product configuration",
                desc: "Define products once — interest model, eligibility, Jadual J or K schedule — and reuse across every loan.",
                image: {
                  src: "/truekredit/edit_product_screenshot.png",
                  alt: "Edit product",
                },
              },
              {
                icon: Wallet,
                title: "Disbursement & repayment tracking",
                desc: "Track every disbursement and repayment with full fund-flow records and a live, sen-accurate schedule.",
                image: {
                  src: "/truekredit/repayment_schedule_screenshot.png",
                  alt: "Repayment schedule",
                },
              },
              {
                icon: History,
                title: "Early settlement engine",
                desc: "Reward early payoff with discounts on remaining interest. Configure lock-in periods and waive late fees.",
                image: {
                  src: "/truekredit/early_settlement_screenshot.png",
                  alt: "Early settlement",
                },
              },
              {
                icon: AlertTriangle,
                title: "Late fees, arrears & default",
                desc: "Auto-calculated late charges, automatic arrears-to-default progression, and the right letters generated for you.",
                accent: "bg-amber-500/10",
                iconColor: "text-amber-500",
                iconBg:
                  "bg-linear-to-br from-amber-500/10 via-amber-500/5 to-background",
                image: {
                  src: "/truekredit/late_summary_screenshot.png",
                  alt: "Late payment summary",
                },
              },
              {
                icon: Lock,
                title: "Role-based access for your whole team",
                desc: "Default presets for Owner, Super Admin, Approval L1/L2, Attestor, Auditor and Collections — or build custom roles with granular per-permission controls.",
                accent: "bg-indigo-500/10",
                iconColor: "text-indigo-600",
                iconBg:
                  "bg-linear-to-br from-indigo-500/10 via-indigo-500/5 to-background",
                image: {
                  src: "/truekredit/rba_screenshot.png",
                  alt: "Role-based access controls",
                },
              },
              {
                icon: ShieldCheck,
                title: "KPKT-ready, audit-ready, every day",
                desc: "Jadual J & K, Lampiran A, receipts, default notices and discharge letters — all auto-generated and inspection-ready.",
                images: [
                  {
                    src: "/truekredit/jadual_j_screenshot.png",
                    alt: "Jadual J",
                    label: "Jadual J",
                  },
                  {
                    src: "/truekredit/lampiran_a_screenshot.png",
                    alt: "Lampiran A",
                    label: "Lampiran A",
                  },
                  {
                    src: "/truekredit/document_example_receipt.png",
                    alt: "Payment receipt",
                    label: "Receipt",
                  },
                  {
                    src: "/truekredit/document_example_default.png",
                    alt: "Default notice",
                    label: "Default notice",
                  },
                ],
              },
            ]}
          />

          <FeatureCarousel
            eyebrow="Connected Modules"
            title="Modules that make everything work as one"
            description="Identity, credit, company checks, comms, and intelligence — first-party modules and pre-wired partners that live inside the loan file, not across five portals."
            items={[
              {
                icon: Fingerprint,
                title: "TrueIdentity™ — e-KYC & liveness",
                desc: "QR-based borrower verification with IC OCR and face-liveness. Pass or fail saved straight into the loan file.",
                tag: "First-party",
                visual: <TrueIdentityVisual />,
              },
              {
                icon: Mail,
                title: "Truesend™ — automated comms",
                desc: "Receipts, reminders, default notices and discharge letters delivered automatically — no more manual emails.",
                tag: "First-party",
                visual: <TruesendVisual />,
              },
              {
                icon: BarChart3,
                title: "CTOS credit reports",
                desc: "Pull credit reports right inside the loan workflow. Risk indicators surface next to underwriting decisions, with a full audit trail.",
                tag: "Powered by CTOS",
                visual: <CTOSVisual />,
              },
              {
                icon: Building2,
                title: "SSM company lookups",
                desc: "Company info, director and shareholder checks for corporate borrowers — pulled inside the loan file via Infomina.",
                tag: "Powered by Infomina",
                visual: <SSMVisual />,
              },
              {
                icon: Sparkles,
                title: "TrueSight™ cross-lender intelligence",
                desc: "See how a borrower performs across the TrueKredit network — active, completed, defaulted loans, plus on-time payment rate.",
                tag: "Network",
                visual: <TrueSightVisual />,
              },
              {
                icon: PenLine,
                title: "On-prem digital signing",
                desc: "Trustgate-backed PKI signing on infrastructure you control. Borrowers sign from web or mobile.",
                tag: "Pro only",
                visual: <DigitalSigningVisual />,
              },
            ]}
          />
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

      {/* TrueKredit Pro Section */}
      <section
        id="pro"
        data-nav-theme="dark"
        className="relative overflow-hidden border-t border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-24 text-white"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -bottom-32 left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pro-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pro-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-500/30">
                <Award className="h-3.5 w-3.5" />
                TrueKredit Pro
              </span>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                <span className="bg-linear-to-r from-indigo-200 via-violet-200 to-purple-200 bg-clip-text text-transparent">
                  For lenders who go further.
                </span>
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Everything in TrueKredit, plus borrower-facing web and mobile apps, on-premises
                digital signing, and a dedicated AWS deployment in your own account — designed for
                <span className="font-medium text-white"> KPKT Online Money Lending License</span> workloads.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  {
                    icon: Check,
                    title: "Includes everything in TrueKredit",
                    desc: "Same platform — deployed on your own AWS account.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Designed for digital licence compliance",
                    desc: "Tenant isolation, dedicated DB & secrets, pinned semver releases.",
                  },
                  {
                    icon: Server,
                    title: "On-premises signing where you need it",
                    desc: "PKI signing stack lives at your site; cloud talks to it via Cloudflare Tunnel.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-violet-400/20 bg-white/4 p-4 backdrop-blur-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/20">
                      <item.icon className="h-5 w-5 text-violet-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: 4 spotlight cards */}
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {[
                {
                  icon: PenLine,
                  title: "On-Premise Digital Signing",
                  desc: "Powered by MSC Trustgate. Your keys, your control — Malaysian Digital Signature Act–aligned.",
                  tag: "Trustgate",
                },
                {
                  icon: Globe,
                  title: "Borrower Web Origination",
                  desc: "Fully branded portal — borrowers self-onboard, apply, and sign 24/7.",
                  tag: "Branded",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App — iOS & Android",
                  desc: "Native borrower app with e-KYC, e-sign, and live loan tracking. Included in Pro.",
                  tag: "Native",
                },
                {
                  icon: Building2,
                  title: "Branded Marketing Website",
                  desc: "Your own front door — capture leads before they ever pick up the phone.",
                  tag: "Lead Gen",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="group relative overflow-hidden rounded-2xl border border-violet-400/20 bg-linear-to-br from-white/6 to-white/3 p-5 backdrop-blur-sm transition-colors hover:border-violet-300/40"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500/30 to-violet-500/30">
                    <card.icon className="h-5 w-5 text-violet-200" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{card.desc}</p>
                  <span className="mt-3 inline-flex rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-violet-300">
                    {card.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Signing flow */}
          <motion.div
            className="mt-20 rounded-3xl border border-violet-400/15 bg-white/4 p-8 backdrop-blur-sm md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-14">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">Pro Spotlight</span>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
                  Loan agreements signed digitally — on your own server.
                </h3>
                <p className="mt-4 text-slate-400">
                  Trustgate-backed PKI signing runs on infrastructure you control. Borrowers sign
                  remotely from web or mobile; signed documents land back in TrueKredit, audit-ready.
                </p>
              </div>
              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Agreement generated",
                    desc: "TrueKredit Pro auto-generates the loan agreement from approved terms.",
                  },
                  {
                    step: "2",
                    title: "Borrower receives signing link",
                    desc: "Sent via email or in the borrower mobile app — sign from any device.",
                  },
                  {
                    step: "3",
                    title: "Signed. Stored. Compliant.",
                    desc: "Trustgate-signed document stored securely — legally binding, audit-ready.",
                  },
                ].map((s, i) => (
                  <motion.li
                    key={s.step}
                    className="flex gap-4 rounded-xl border border-violet-400/15 bg-white/4 p-5"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-violet-500/40">
                      {s.step}
                    </div>
                    <div>
                      <p className="font-medium text-white">{s.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600">
              <Link href="/contact?subject=TrueKredit%20Pro">
                Talk to us about Pro
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-violet-400/30 bg-white/4 text-white hover:bg-white/8 hover:text-white">
              <Link href="#compare">
                Compare TrueKredit vs Pro
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SaaS vs Pro Comparison */}
      <section id="compare" className="border-t bg-muted/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Layers} text="Feature Comparison" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              TrueKredit vs TrueKredit Pro
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Both editions share the full KPKT-aligned core. Pro adds borrower channels, on-prem
              signing, and a dedicated environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="w-1/2 px-5 py-4 font-semibold">Capability</th>
                        <th className="w-1/4 px-5 py-4 text-center font-semibold text-primary">
                          <div className="flex flex-col items-center gap-0.5">
                            <span>TrueKredit</span>
                            <span className="text-[10px] font-normal text-muted-foreground normal-case">TrueStack-hosted SaaS</span>
                          </div>
                        </th>
                        <th className="w-1/4 px-5 py-4 text-center font-semibold text-violet-700">
                          <div className="flex flex-col items-center gap-0.5">
                            <span>TrueKredit Pro</span>
                            <span className="text-[10px] font-normal text-muted-foreground normal-case">Dedicated AWS</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-muted/40">
                        <td colSpan={3} className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Core platform
                        </td>
                      </tr>
                      {[
                        "Loan lifecycle management",
                        "Book A / Book B management",
                        "e-KYC — MyKad OCR, liveness, biometric match",
                        "CTOS reports — built in",
                        "SSM reports via Infomina — built in",
                        "Auto document generation — Lampiran A, Jadual J & K, default letters",
                        "Auto emails & WhatsApp notifications",
                        "Payment gateway integration",
                        "Audit trail & KPKT-compliant reporting",
                        "AWS Malaysia data residency",
                        "iDeaL system export for KPKT submissions",
                        "Walk-in borrower origination (counter / branch)",
                        "Daily automated backups",
                      ].map((row) => (
                        <tr key={row} className="text-foreground">
                          <td className="px-5 py-3">{row}</td>
                          <td className="px-5 py-3 text-center text-primary">
                            <Check className="mx-auto h-5 w-5" />
                          </td>
                          <td className="bg-violet-500/5 px-5 py-3 text-center text-violet-700">
                            <Check className="mx-auto h-5 w-5" />
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-violet-500/5">
                        <td colSpan={3} className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-violet-700">
                          Pro exclusive
                        </td>
                      </tr>
                      {[
                        "Digital signing — on-prem Trustgate server",
                        "Borrower web origination portal (branded)",
                        "Borrower mobile app — iOS & Android (native)",
                        "Branded marketing website",
                        "Penetration test report & security compliance",
                        "Dedicated AWS account, DB, and secrets",
                      ].map((row) => (
                        <tr key={row} className="text-foreground">
                          <td className="px-5 py-3">{row}</td>
                          <td className="px-5 py-3 text-center text-muted-foreground/50">—</td>
                          <td className="bg-violet-500/5 px-5 py-3 text-center text-violet-700">
                            <Check className="mx-auto h-5 w-5" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Integration Advantage */}
      <section id="integrations" className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Link2} text="Integration Advantage" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Integrations included. We negotiate better rates for you.
            </h2>
          </motion.div>

          {/* Partner strip */}
          <motion.div
            className="overflow-hidden rounded-2xl border bg-card shadow-sm"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
              {[
                { name: "CTOS", desc: "Credit reporting" },
                { name: "Trustgate", desc: "PKI signing (MTSA)" },
                { name: "Infomina", desc: "SSM company checks" },
                { name: "e-KYC", desc: "MyKad + biometric" },
                { name: "Payment", desc: "Gateway integration" },
              ].map((p) => (
                <div key={p.name} className="px-6 py-6 text-center">
                  <div className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {p.name}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Check,
                title: "No integration fees",
                desc: "You'd otherwise pay each vendor separately to integrate. With TrueKredit, it's already done and included.",
              },
              {
                icon: BarChart3,
                title: "Better partner rates",
                desc: "Our volume and partnerships unlock pricing you can't reach by going direct — especially on payment and e-KYC.",
              },
              {
                icon: Briefcase,
                title: "One vendor, one contract",
                desc: "We manage the partner relationships so you can focus on lending. Especially valuable for SaaS operators.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{c.title}</CardTitle>
                    <CardDescription>{c.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero to Licensed — services bridge */}
      <section id="zero-to-license" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <SectionBadge icon={Building2} text="Full-Service Partnership" />
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                We take you from zero to licensed and lending.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Don&apos;t have a KPKT licence yet? TrueStack covers the full journey — licence work,
                compliance setup, and the digital infrastructure that makes you operational fast.
              </p>
              <Button asChild size="lg" className="mt-6 gap-2">
                <Link href="/services/digital-license">
                  Explore Digital KPKT Licence
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ol className="space-y-3">
              {[
                {
                  step: "1",
                  title: "Licence acquisition",
                  desc: "KPKT licence trading, new applications & renewals — we handle paperwork and liaison.",
                },
                {
                  step: "2",
                  title: "Compliance & consultancy",
                  desc: "KPKT account management, regulatory advisory, annual submissions, audit readiness.",
                },
                {
                  step: "3",
                  title: "Digital licence conversion",
                  desc: "Transform a physical KPKT lender into a fully digital, cloud-ready operation.",
                },
                {
                  step: "4",
                  title: "TrueKredit goes live",
                  desc: "Platform onboarded, staff trained, first loan disbursed — compliant from day one.",
                  highlight: true,
                },
              ].map((s) => (
                <li
                  key={s.step}
                  className={`flex gap-4 rounded-xl border bg-background p-5 ${s.highlight ? "border-primary/30 bg-primary/5" : ""}`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${s.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
                  >
                    {s.step}
                  </div>
                  <div>
                    <p className={`font-medium ${s.highlight ? "text-primary" : "text-foreground"}`}>
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
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
      <section
        id="demo"
        data-nav-theme="dark"
        className="relative overflow-hidden border-t border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-24 text-white"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h2 className="mx-auto mb-4 max-w-3xl font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            <span className="bg-linear-to-r from-indigo-200 via-violet-200 to-purple-200 bg-clip-text text-transparent">
              Ready to consolidate your stack?
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            We&apos;ll show you TrueKredit in action — and walk you through whether SaaS or Pro fits
            your licence, your borrowers, and your roadmap.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="gap-2 bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600">
              <Link href="/contact">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-violet-400/30 bg-white/4 text-white hover:bg-white/8 hover:text-white">
              <Link href="#compare">
                Compare TrueKredit vs Pro
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2 text-slate-300 hover:bg-white/6 hover:text-white">
              <Link href="/services/digital-license">
                Need a KPKT licence?
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
