"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Container,
  Database,
  FileCheck,
  FileText,
  Fingerprint,
  FolderArchive,
  Globe,
  HardDrive,
  Key,
  Landmark,
  Layers3,
  Lock,
  Mail,
  Monitor,
  Network,
  Server,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CoreInfrastructure } from "@/components/sections/core-infrastructure";
import { Input } from "@/components/ui/input";

const PAGE_PASSWORD = "Berjaya2026";
const ACCESS_KEY = "truestack-berjaya-investor-access";

const productCards = [
  {
    name: "TrueKredit",
    status: "Live",
    icon: Landmark,
    url: "/truekredit",
    summary:
      "Core lending system for KPKT money lenders, covering borrower onboarding, loan workflow, repayments, collections, and compliance reporting.",
    bullets: [
      "Purpose-built for regulated lending operations",
      "Operational workflow from enquiry to final payment",
      "Designed for audit readiness and reporting discipline",
    ],
  },
  {
    name: "TrueKredit Pro",
    status: "Live",
    icon: Layers3,
    url: "/services/digital-license",
    summary:
      "Expanded digital lending stack for higher-spec deployments, moving beyond a core LMS into a more complete operating layer.",
    bullets: [
      "On-prem digital signing for compliant execution",
      "Attestation workflows for regulated environments",
      "Borrower origination and automation for digital journeys",
    ],
  },
  {
    name: "Infrastructure",
    status: "Active Build",
    icon: Blocks,
    url: "https://core.truestack.my",
    summary:
      "Shared infrastructure layer that reduces time-to-market across new deployments and adjacent regulated product opportunities.",
    bullets: [
      "e-KYC implemented",
      "Credit Report API coming soon",
      "SSM API coming soon",
    ],
  },
];

const orderbook = [
  { customer: "CreditXpress", type: "KPKT Digital License", status: "Completed", amount: 750000 },
  { customer: "Yinshan", type: "KPKT Digital License", status: "Confirmed", amount: 630000 },
  { customer: "Proficient Premium", type: "KPKT Digital License", status: "Confirmed", amount: 340000 },
  { customer: "Andas Capital", type: "KPKT Digital License", status: "Confirmed", amount: 750000 },
  { customer: "Credibly", type: "KPKT Digital License", status: "Confirmed", amount: 800000 },
  { customer: "Kapitaly", type: "P2P License", status: "Confirmed", amount: 1500000 },
  { customer: "Shoraka", type: "P2P License", status: "Confirmed", amount: 790000 },
  { customer: "K&B", type: "KPKT Digital License", status: "TBC", amount: 750000 },
  { customer: "XOX Bhd", type: "KPKT Digital License", status: "TBC", amount: 380000 },
  { customer: "e-Micro", type: "KPKT Digital License", status: "TBC", amount: 380000 },
  { customer: "Wong", type: "KPKT Digital License", status: "TBC", amount: 600000 },
  { customer: "Nina", type: "KPKT Digital License", status: "TBC", amount: 400000 },
  { customer: "Richfund", type: "KPKT Digital License", status: "TBC", amount: 350000 },
];

const infrastructureForecast = [
  { item: "e-KYC", values: [72000, 4320000, 7200000, 10080000] },
  { item: "Credit Report API", values: [420000, 630000, 945000, 1417500] },
  { item: "SSM API", values: [120000, 180000, 270000, 405000] },
];

const forecastProfit = [612000, 5130000, 8415000, 11902500];

const diligenceGroups = [
  {
    title: "Technology & Systems",
    icon: Shield,
    items: [
      { text: "IT systems architecture" },
      { text: "Software licenses" },
      { text: "Cybersecurity policies" },
      { text: "Data protection compliance (PDPA)", href: "/pdpa" },
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Regulator: Personal Data Protection Department" },
    ],
  },
  {
    title: "Customers & Market",
    icon: BriefcaseBusiness,
    items: [
      { text: "Top customer list" },
      { text: "Revenue breakdown by customer" },
      { text: "Sales pipeline" },
      { text: "Marketing agreements" },
      { text: "Market position analysis" },
    ],
  },
];

const years = ["2026", "2027", "2028", "2029"];

const techPartners = [
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Trustgate", logo: "/logos/trustgate.png" },
  { name: "CTOS", logo: "/logos/ctos.png" },
  { name: "Regtank", logo: "/logos/regtank.webp" },
  { name: "Infomina", logo: "/logos/infomina.png" },
];

function formatMoney(amount: number) {
  return `RM ${new Intl.NumberFormat("en-MY").format(amount)}`;
}

function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

function getStatusClasses(status: string) {
  if (status === "Completed") return "border-green-500/20 bg-green-500/10 text-green-700";
  if (status === "Confirmed") return "border-primary/20 bg-primary/10 text-primary";
  return "border-slate-300 bg-slate-100 text-slate-700";
}

function ExternalLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Button asChild variant="outline" className="gap-2">
      <Link href={href} target="_blank" rel="noreferrer">
        {label}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

export default function InvestorPage() {
  const [password, setPassword] = useState("");
  const [accessState, setAccessState] = useState<"locked" | "unlocked">("locked");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const granted = window.sessionStorage.getItem(ACCESS_KEY) === "granted";
    if (!granted) return;
    const id = setTimeout(() => setAccessState("unlocked"), 0);
    return () => clearTimeout(id);
  }, []);

  const totals = useMemo(() => {
    const totalRevenue = orderbook.reduce((sum, i) => sum + i.amount, 0);
    const completedValue = orderbook.filter((i) => i.status === "Completed").reduce((sum, i) => sum + i.amount, 0);
    const confirmedValue = orderbook.filter((i) => i.status === "Confirmed").reduce((sum, i) => sum + i.amount, 0);
    const pipelineValue = orderbook.filter((i) => i.status === "TBC").reduce((sum, i) => sum + i.amount, 0);
    const kpktValue = orderbook.filter((i) => i.type === "KPKT Digital License").reduce((sum, i) => sum + i.amount, 0);
    const p2pValue = orderbook.filter((i) => i.type === "P2P License").reduce((sum, i) => sum + i.amount, 0);
    return { totalRevenue, completedValue, confirmedValue, pipelineValue, kpktValue, p2pValue };
  }, []);

  const topCustomers = useMemo(() => [...orderbook].sort((a, b) => b.amount - a.amount).slice(0, 5), []);

  function handleUnlock() {
    if (password !== PAGE_PASSWORD) { setError("Incorrect password."); return; }
    window.sessionStorage.setItem(ACCESS_KEY, "granted");
    setAccessState("unlocked");
    setError("");
  }

  if (accessState === "locked") {
    return (
      <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.92),rgba(2,6,23,1))]" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
          >
            <Badge className="mb-5 border-white/10 bg-white/10 text-white hover:bg-white/10">
              Berjaya Investor Access
            </Badge>
            <h1 className="font-display text-3xl font-medium tracking-tight">Strategic Presentation</h1>
            <p className="mt-3 text-slate-300">
              This page contains investor-facing information prepared for Berjaya Corporation Bhd.
            </p>
            <div className="mt-8 space-y-3">
              <label htmlFor="investor-password" className="text-sm font-medium text-slate-200">Password</label>
              <Input
                id="investor-password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); if (error) setError(""); }}
                onKeyDown={(e) => { if (e.key === "Enter") handleUnlock(); }}
                placeholder="Enter password"
                className="h-11 border-white/15 bg-white/10 text-white placeholder:text-slate-400"
              />
              {error && <p className="text-sm text-red-300">{error}</p>}
            </div>
            <Button onClick={handleUnlock} size="lg" className="mt-6 w-full gap-2">
              Unlock page <ChevronRight className="h-4 w-4" />
            </Button>
            <p className="mt-4 text-xs text-slate-400">This link is intentionally hidden from site navigation.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_45%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
            <div>
              <Badge className="border-primary/20 bg-primary/15 text-primary-foreground hover:bg-primary/15">
                Strategic Presentation for Berjaya Corporation Bhd
              </Badge>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                One stack. Multiple product streams.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Truestack is a technology-led Malaysian company building the infrastructure, platforms, and operating systems that power licensed lenders and regulated fintech deployments.
              </p>
              <p className="mt-4 text-base text-slate-400 md:text-lg">
                This page covers: <strong className="text-slate-200">Technology & Systems</strong> and{" "}
                <strong className="text-slate-200">Customers & Market</strong> — the due diligence items requested for Berjaya Corporation Bhd.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { href: "/truekredit", label: "TrueKredit" },
                  { href: "/services/digital-license", label: "TrueKredit Pro" },
                  { href: "https://core.truestack.my", label: "Core Infrastructure" },
                ].map((link) => (
                  <Button key={link.label} asChild variant="outline" className="gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                    <Link href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
                <Button asChild variant="outline" className="gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  <Link href="/Truestack - Company Profile.pdf" target="_blank" rel="noreferrer" download>
                    <FileText className="h-4 w-4" />
                    Download presentation
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-white/20 bg-slate-800 px-6 py-6 shadow-sm">
                <p className="text-sm text-slate-300">2026 Software Orderbook</p>
                <p className="mt-2 font-display text-4xl font-semibold text-white">{formatMoney(totals.totalRevenue)}</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800 px-6 py-6 shadow-sm">
                <p className="text-sm text-slate-300">Gross Margin</p>
                <p className="mt-2 font-display text-4xl font-semibold text-white">70%</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800 px-6 py-6 shadow-sm">
                <p className="text-sm text-slate-300">Infrastructure Profit 2029</p>
                <p className="mt-2 font-display text-4xl font-semibold text-white">{formatMoney(forecastProfit[3])}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. KEY METRICS STRIP ────────────────────────────────────────────── */}
      <section className="border-b bg-muted/30 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-4">
          {[
            { label: "Commercially weighted to KPKT digital license work", value: formatPercent((totals.kpktValue / totals.totalRevenue) * 100), icon: Building2 },
            { label: "Confirmed or completed orderbook", value: formatMoney(totals.completedValue + totals.confirmedValue), icon: CheckCircle2 },
            { label: "Near-term pipeline (TBC)", value: formatMoney(totals.pipelineValue), icon: TrendingUp },
            { label: "Current infrastructure implementation status", value: "e-KYC live", icon: Fingerprint },
          ].map((item) => (
            <Card key={item.label}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── 3. PRODUCTS ─────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro
            eyebrow="What We Build"
            title="Regulated lending software with reusable infrastructure leverage"
            description="For this presentation, the focus is intentionally narrow: TrueKredit, TrueKredit Pro, and the underlying infrastructure layer. e-KYC is implemented today; the Credit Report API and SSM API are scheduled next."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {productCards.map((product, index) => (
              <motion.div key={product.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4, delay: index * 0.08 }}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className={product.status === "Live" ? "border-green-500/20 bg-green-500/10 text-green-700" : "border-primary/20 bg-primary/10 text-primary"}>
                        {product.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{product.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ul className="space-y-3">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <ExternalLinkButton href={product.url} label="Open product" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PLATFORM ARCHITECTURE (Core Infrastructure diagram) ──────── */}
      <CoreInfrastructure
        title="Built for rapid development and deployment"
        description="All products share Truestack Core™ Infrastructure. TrueKredit Pro leverages our existing TrueKredit setup and shared modules — enabling faster deployment, easier maintenance, and efficient delivery to customers."
      />

      {/* ── 5. TECHNOLOGY & SYSTEMS ─────────────────────────────────────────── */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro
            eyebrow="Technology & Systems"
            title="Purpose-built architecture for regulated workflows"
            description="The platform architecture is designed around regulated lending operations, digital onboarding, and reusable infrastructure modules that can be deployed across adjacent workflows."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">System architecture</CardTitle>
                <CardDescription className="text-base">
                  A shared stack supports the public site, lending operations, and infrastructure services while keeping product experiences separated by role and use case.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: "truestack.my", description: "Corporate and product-facing web presence", icon: Globe },
                    { name: "kredit.truestack.my", description: "TrueKredit lending platform", icon: Landmark },
                    { name: "admin.truestack.my", description: "Administrative and digital lending operations layer", icon: Users },
                    { name: "core.truestack.my", description: "Shared infrastructure services and future APIs", icon: Layers3 },
                  ].map((item) => (
                    <div key={item.name} className="rounded-2xl border bg-background p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="mt-4 font-semibold">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <p className="text-sm font-medium text-foreground">TrueKredit Pro deployments</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Deployed on customer-specific domains with a dedicated on-prem server per customer for data privacy and compliance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card>
                <CardHeader><CardTitle>Cybersecurity & hosting</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Hosted with Malaysia data residency on AWS.</p>
                  <p>Encrypted data handling with audit trails and role-based access controls.</p>
                  <p>Daily backup posture and infrastructure positioned for regulated workloads.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Compliance & regulator context</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <Link href="/pdpa" target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">PDPA notice</Link>{" "}
                    already published across Truestack service domains.
                  </p>
                  <p>Data processing aligned to Personal Data Protection Act 2010 (Act 709).</p>
                  <p>
                    <Link href="/privacy" target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">Privacy Policy</Link>{" "}
                    published and maintained for all platform services.
                  </p>
                  <p>Relevant data protection regulator: Personal Data Protection Department.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Software and integration footprint</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>Commercial projects currently span KPKT Digital License and P2P License work.</p>
                  <p>Technology partners on the broader stack:</p>
                  <div className="flex flex-wrap items-center gap-4">
                    {techPartners.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex h-12 items-center rounded-lg border bg-muted/50 px-4 py-2 transition-colors hover:border-primary/50 hover:bg-muted"
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={100}
                          height={32}
                          className="h-6 w-auto max-w-[80px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Deployment architecture */}
          <div className="mt-14">
            <h3 className="mb-2 font-display text-2xl font-medium tracking-tight">Typical deployment architecture</h3>
            <p className="mb-8 max-w-3xl text-muted-foreground">
              Secure, scalable fintech infrastructure built on AWS Malaysia with on-premise components for compliance.
            </p>
            <div className="relative">
              <div className="flex justify-center gap-6 mb-4">
                {[
                  { icon: Globe, label: "Web App" },
                  { icon: Smartphone, label: "Mobile App" },
                  { icon: Monitor, label: "Admin Portal" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 ring-2 ring-primary/20">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="mt-2 text-xs font-medium text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center my-3">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-linear-to-b from-muted-foreground/40 to-muted-foreground/20" />
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 rotate-90" />
                </div>
              </div>

              <div className="relative rounded-2xl border-2 border-primary/20 bg-primary/3 p-6 mb-4">
                <div className="absolute -top-3 left-6 bg-muted/30 px-3">
                  <span className="text-sm font-semibold text-primary">AWS Malaysia Region</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 mt-2">
                  {[
                    { icon: Network, name: "ALB", desc: "Load Balancer" },
                    { icon: Key, name: "Cognito", desc: "Authentication" },
                    { icon: Container, name: "ECS", desc: "Containers" },
                    { icon: FolderArchive, name: "S3", desc: "File Storage" },
                    { icon: Database, name: "RDS", desc: "PostgreSQL" },
                    { icon: Mail, name: "SES", desc: "Email Service" },
                  ].map((svc) => (
                    <div key={svc.name} className="flex flex-col items-center rounded-xl border bg-card p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/8 ring-1 ring-primary/20 mb-2">
                        <svc.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-semibold">{svc.name}</span>
                      <span className="text-xs text-muted-foreground">{svc.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-20 my-3">
                {[0, 1].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 -rotate-90" />
                    <div className="w-0.5 h-4 bg-linear-to-b from-muted-foreground/20 to-muted-foreground/40" />
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 rotate-90" />
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative rounded-2xl border-2 border-primary/20 bg-primary/3 p-6">
                  <div className="absolute -top-3 left-6 bg-muted/30 px-3">
                    <span className="text-sm font-semibold text-primary">On-Premise Server</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 ring-2 ring-primary/20">
                      <Server className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Digital Signing Server</p>
                      <p className="text-sm text-muted-foreground">KPKT compliant e-signatures</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"><Lock className="h-3 w-3" /> HSM Integration</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"><HardDrive className="h-3 w-3" /> Local Storage</span>
                  </div>
                </div>
                <div className="relative rounded-2xl border-2 border-primary/20 bg-primary/3 p-6">
                  <div className="absolute -top-3 left-6 bg-muted/30 px-3">
                    <span className="text-sm font-semibold text-primary">Security & Compliance</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 ring-2 ring-primary/20">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Penetration Testing</p>
                      <p className="text-sm text-muted-foreground">Regular security assessments</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"><Shield className="h-3 w-3" /> Vulnerability Scans</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"><FileCheck className="h-3 w-3" /> Audit Reports</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                <span className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-muted-foreground">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Malaysia Data Residency Compliant
                </span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. COMMERCIAL VALIDATION ────────────────────────────────────────── */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro
            eyebrow="Commercial Validation"
            title="2026 software development orderbook"
            description="The current orderbook provides immediate evidence of commercial demand across regulated lending software work, with a strong margin profile and a visible pipeline conversion layer."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "Revenue", value: formatMoney(totals.totalRevenue) },
              { label: "Gross Margin", value: "70%" },
              { label: "Gross Profit", value: formatMoney(5894000) },
            ].map((item) => (
              <Card key={item.label}>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-primary">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/70">
                  <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold">
                    <th>Customer</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th className="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orderbook.map((entry, index) => (
                    <tr key={`${entry.customer}-${entry.amount}`} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-4 py-3 font-medium">{entry.customer}</td>
                      <td className="px-4 py-3 text-muted-foreground">{entry.type}</td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className={getStatusClasses(entry.status)}>{entry.status}</Badge>
                      </td>
                      <td className="px-4 py-3 text-right font-medium">{formatMoney(entry.amount)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="border-t bg-muted/40 font-semibold">
                  <tr className="[&>td]:px-4 [&>td]:py-3"><td>Revenue</td><td colSpan={2} /><td className="text-right">{formatMoney(totals.totalRevenue)}</td></tr>
                  <tr className="[&>td]:px-4 [&>td]:py-3"><td>Margin</td><td colSpan={2} /><td className="text-right">70%</td></tr>
                  <tr className="[&>td]:px-4 [&>td]:py-3"><td>Profit</td><td colSpan={2} /><td className="text-right">{formatMoney(5894000)}</td></tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Infrastructure projections */}
          <div className="mt-16">
            <h3 className="mb-2 font-display text-2xl font-medium tracking-tight">Projected infrastructure contribution</h3>
            <p className="mb-8 max-w-3xl text-muted-foreground">
              The infrastructure layer is intended to deepen recurring economics over time, starting from implemented e-KYC and expanding into additional API-led modules.
            </p>
            <div className="overflow-hidden rounded-2xl border bg-background">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-muted/70">
                    <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold">
                      <th>Infrastructure</th>
                      {years.map((year) => (<th key={year} className="text-right">{year}</th>))}
                    </tr>
                  </thead>
                  <tbody>
                    {infrastructureForecast.map((row, ri) => (
                      <tr key={row.item} className={ri % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="px-4 py-3 font-medium">{row.item}</td>
                        {row.values.map((v, vi) => (<td key={vi} className="px-4 py-3 text-right">{formatMoney(v)}</td>))}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="border-t bg-primary/5 font-semibold">
                    <tr className="[&>td]:px-4 [&>td]:py-3">
                      <td>Profit</td>
                      {forecastProfit.map((v, i) => (<td key={i} className="text-right text-primary">{formatMoney(v)}</td>))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CUSTOMERS & MARKET ───────────────────────────────────────────── */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro
            eyebrow="Customers & Market"
            title="Revenue concentration, pipeline visibility, and segment mix"
            description="The current commercial base is concentrated in regulated lending deployments, with the strongest weight in KPKT digital license projects and a smaller but meaningful P2P component."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Top customers by orderbook value</CardTitle>
                <CardDescription className="text-base">Based on the current 2026 software development orderbook.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCustomers.map((c) => (
                  <div key={c.customer} className="flex items-center justify-between rounded-2xl border bg-background px-4 py-4">
                    <div>
                      <p className="font-medium">{c.customer}</p>
                      <p className="text-sm text-muted-foreground">{c.type} · {c.status}</p>
                    </div>
                    <p className="font-semibold">{formatMoney(c.amount)}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <div className="grid gap-6">
              <Card>
                <CardHeader><CardTitle>Revenue breakdown by segment</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "KPKT Digital License", amount: totals.kpktValue, percent: (totals.kpktValue / totals.totalRevenue) * 100 },
                    { label: "P2P License", amount: totals.p2pValue, percent: (totals.p2pValue / totals.totalRevenue) * 100 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-muted-foreground">{formatMoney(item.amount)} · {formatPercent(item.percent)}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Sales pipeline</CardTitle></CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border bg-background p-4"><p className="text-sm text-muted-foreground">Completed</p><p className="mt-1 text-xl font-semibold">{formatMoney(totals.completedValue)}</p></div>
                  <div className="rounded-2xl border bg-background p-4"><p className="text-sm text-muted-foreground">Confirmed</p><p className="mt-1 text-xl font-semibold">{formatMoney(totals.confirmedValue)}</p></div>
                  <div className="rounded-2xl border bg-background p-4"><p className="text-sm text-muted-foreground">TBC</p><p className="mt-1 text-xl font-semibold">{formatMoney(totals.pipelineValue)}</p></div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Market position</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Primary focus is the Malaysian non-bank regulated lending stack.</p>
                  <p>Current traction indicates strongest positioning in KPKT digital licensing workflows.</p>
                  <p>P2P delivery work provides exposure beyond the traditional KPKT operator base.</p>
                  <p>Formal marketing agreements can be furnished separately during diligence.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. DILIGENCE SCOPE ──────────────────────────────────────────────── */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro
            eyebrow="Diligence Scope"
            title="Technology & Systems · Customers & Market"
            description="This page covers both due diligence categories requested for Berjaya Corporation Bhd. Technology & Systems: IT architecture, software licenses, cybersecurity, PDPA compliance, regulator info. Customers & Market: top customer list, revenue breakdown, sales pipeline, marketing agreements, market position."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {diligenceGroups.map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <group.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.text} className="flex gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item.href ? (
                          <Link href={item.href} target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">{item.text}</Link>
                        ) : (
                          <span>{item.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Card className="overflow-hidden border-primary/20 bg-primary/5">
            <CardContent className="grid gap-8 py-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-tight">Direct discussion and diligence follow-up</h3>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Additional supporting materials, agreements, and deeper diligence items can be provided directly through management.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border bg-background p-5">
                  <p className="font-semibold">Datuk Andrew Ooi</p>
                  <p className="text-sm text-muted-foreground">hello@truestack.my · +6010 880 0298</p>
                </div>
                <div className="rounded-2xl border bg-background p-5">
                  <p className="font-semibold">Dr. Ivan Chew</p>
                  <p className="text-sm text-muted-foreground">ivan.chew@truestack.my · +6018 244 0976</p>
                </div>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/Truestack - Company Profile.pdf" target="_blank" rel="noreferrer">
                    <FileText className="h-4 w-4" />
                    Company Profile (PDF)
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
