"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  FileCheck,
  FileSearch,
  FileText,
  Layers,
  Receipt,
  Search,
  Settings,
  Shield,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/shared/section-badge";
import { TrueSsmFaq } from "@/components/sections/truessm-faq";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Zap,
    title: "One Integration",
    description:
      "ROC, ROB, and LLP profiles, particulars, and scanned documents — all from a single REST API.",
  },
  {
    icon: Shield,
    title: "Free Validation",
    description:
      "Automatic free entity search before billable pulls. Nothing charged when an entity isn't found.",
  },
  {
    icon: Receipt,
    title: "RM Pricing",
    description:
      "Transparent per-operation pricing in Malaysian Ringgit; custom tiers available.",
  },
  {
    icon: Layers,
    title: "Idempotent Pulls",
    description:
      "Safe retries with Idempotency-Key. Delivered results aren't billed twice for the same key.",
  },
];

const businessBenefits = [
  {
    icon: TrendingUp,
    title: "Faster Onboarding & Underwriting",
    description:
      "Pull company profiles, officers, and shareholders in seconds — no manual SSM lookups.",
  },
  {
    icon: Shield,
    title: "Reduce Risk Exposure",
    description:
      "Verify counterparties with charges, share capital, and current officers data straight from the registry.",
  },
  {
    icon: Receipt,
    title: "Predictable Costs",
    description:
      "Pay only for delivered pulls. Failed validations and most no-data responses incur no charge.",
  },
  {
    icon: Settings,
    title: "Built for Automation",
    description:
      "Idempotency, structured errors, and provider-native fields make it easy to wire into your workflows.",
  },
];

type Endpoint = {
  path: string;
  name: string;
  usageType: string;
  /** Billable amount in RM for a delivered pull (template pricing). */
  rm: number | "Free";
  description: string;
};

const endpoints: Endpoint[] = [
  {
    path: "entities/search",
    name: "Entity Search",
    usageType: "entity_search",
    rm: "Free",
    description:
      "Match entities by registration number and/or name with pagination.",
  },
  {
    path: "reports/company-profile",
    name: "Company Profile",
    usageType: "company_profile",
    rm: 15.4,
    description:
      "ROC profile: name, registration, type, status, address, share info, officers, shareholders, charges.",
  },
  {
    path: "reports/business-profile",
    name: "Business Profile",
    usageType: "business_profile",
    rm: 15.4,
    description:
      "ROB profile: name, ownership, addresses, dates, status, branches, current and previous owners.",
  },
  {
    path: "reports/llp-profile",
    name: "LLP Profile",
    usageType: "llp_profile",
    rm: 25.4,
    description:
      "LLP current profile: entity details, addresses, business code, partner information.",
  },
  {
    path: "reports/officers",
    name: "Particulars of Officers",
    usageType: "officers",
    rm: 23.2,
    description:
      "Current and previous directors/officers with appointment and resignation dates.",
  },
  {
    path: "reports/share-capital",
    name: "Share Capital",
    usageType: "share_capital",
    rm: 23.2,
    description:
      "Total issued shares, ordinary and preference shares, allotments and details.",
  },
  {
    path: "reports/shareholders",
    name: "Shareholders",
    usageType: "shareholders",
    rm: 23.2,
    description:
      "Shareholder particulars: name, ID, address, shares held, acquired and disposed.",
  },
  {
    path: "reports/registered-address",
    name: "Registered Address",
    usageType: "registered_address",
    rm: 23.2,
    description: "Current registered address and history of changes.",
  },
  {
    path: "reports/company-secretary",
    name: "Company Secretary",
    usageType: "company_secretary",
    rm: 23.2,
    description:
      "Secretary particulars: name, IC, licence, status, residential address.",
  },
  {
    path: "reports/charges",
    name: "Company Charges",
    usageType: "charges",
    rm: 23.2,
    description:
      "Charge number, instrument type, properties affected, charge type and date.",
  },
  {
    path: "reports/audit-firm",
    name: "Audit Firm",
    usageType: "audit_firm",
    rm: 13.2,
    description:
      "Firm number, auditor name, licence, commencement date and address.",
  },
  {
    path: "documents/list",
    name: "View Scanned Documents",
    usageType: "document_list",
    rm: 15.4,
    description:
      "Scanned document metadata: form type, document date, total pages, version id.",
  },
  {
    path: "documents/image",
    name: "Scanned Document",
    usageType: "document_image",
    rm: 15.4,
    description:
      "Binary content for one filing (typically base64). Requires regNo and verId.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Lenders & Underwriters",
    description:
      "Pull officers, charges, and share capital to assess corporate borrowers in seconds.",
  },
  {
    icon: Users,
    title: "KYB & Onboarding",
    description:
      "Verify business counterparties with ROC/ROB profiles and live registered addresses.",
  },
  {
    icon: FileSearch,
    title: "Compliance & Audit",
    description:
      "Retrieve scanned filings on-demand for due diligence, audits, and regulatory submissions.",
  },
];

// ─── Grid Pattern Background ──────────────────────────────────────────────────

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
            id="grid-ssm"
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
        <rect width="100%" height="100%" fill="url(#grid-ssm)" />
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// ─── Animated Registry Pull Diagram ───────────────────────────────────────────

const SSM_STEPS = [
  {
    icon: Search,
    label: "Entity Search",
    sublabel: "Free validation",
    color: "text-sky-600",
    bg: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    icon: BadgeCheck,
    label: "Validate Type",
    sublabel: "ROC / ROB / LLP",
    color: "text-amber-600",
    bg: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: FileText,
    label: "Pull Report",
    sublabel: "Profile or document",
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    borderColor: "border-fuchsia-200",
  },
  {
    icon: Receipt,
    label: "Acknowledged",
    sublabel: "Billed in RM",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

function RegistryFlowDiagram() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        className="mx-auto w-full max-w-[360px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="overflow-hidden rounded-2xl border-2 border-border/80 bg-white shadow-xl">
          {/* Console-style header */}
          <div className="flex items-center gap-2 border-b bg-slate-50 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="ml-2 flex-1 truncate rounded bg-white px-3 py-1 text-[11px] text-slate-500">
              POST /api/v1/ssm/reports/company-profile
            </div>
          </div>

          <div className="px-5 pb-6 pt-4">
            <div className="mb-5 text-center">
              <motion.div
                className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.5 }}
              >
                <Building2 className="h-5 w-5 text-primary" />
              </motion.div>
              <p className="text-xs font-medium text-foreground">
                Registry Pull
              </p>
              <p className="text-[10px] text-muted-foreground">
                Powered by TrueSSM™
              </p>
            </div>

            <div className="space-y-3">
              {SSM_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === SSM_STEPS.length - 1;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }}
                  >
                    <div
                      className={`flex items-center gap-3 rounded-xl border ${step.borderColor} bg-white p-3 shadow-sm`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${step.bg}`}
                      >
                        <Icon className={`h-5 w-5 ${step.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {step.label}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {step.sublabel}
                        </p>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0 + i * 0.25, type: "spring" }}
                      >
                        {isLast ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                        )}
                      </motion.div>
                    </div>
                    {!isLast && (
                      <motion.div
                        className="ml-8 h-2 w-0.5 bg-border"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.8 + i * 0.2, duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 rounded-lg border bg-slate-50 p-3 text-[11px] text-slate-600">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">
                  acknowledgement
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  200 OK
                </span>
              </div>
              <div className="mt-2 grid gap-1 font-mono">
                <div>
                  <span className="text-slate-400">usage_type:</span>{" "}
                  company_profile
                </div>
                <div>
                  <span className="text-slate-400">billed_rm:</span> 15.4
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-4 top-12 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-foreground">13</p>
        <p className="text-[10px] text-muted-foreground">Endpoints</p>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-32 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-emerald-600">Free</p>
        <p className="text-[10px] text-muted-foreground">Entity search</p>
      </motion.div>

      <motion.div
        className="absolute -left-8 bottom-16 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-primary">Idempotent</p>
        <p className="text-[10px] text-muted-foreground">Safe retries</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TrueSsmPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <GridPattern />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
                <Building2 className="h-4 w-4" />
                TrueSSM™ Registry API
              </motion.div>
              <motion.h1
                className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                SSM Registry Data, Programmatically
              </motion.h1>
              <motion.p
                className="mt-6 text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Entity search, ROC/ROB/LLP profiles, particulars, and scanned
                documents — one REST API for the Malaysian registry, billed
                transparently in RM.
              </motion.p>

              <motion.div
                className="mt-6 inline-flex items-center gap-3 rounded-full border bg-background/80 py-2 pl-3 pr-4 backdrop-blur"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Powered by
                </span>
                <div className="relative h-6 w-24">
                  <Image
                    src="/truekredit/integrations/ssmsearch-logo.webp"
                    alt="SSM Search logo"
                    fill
                    className="object-contain object-left"
                    sizes="96px"
                  />
                </div>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Request Access
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#endpoints">View Endpoints</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { value: "13", label: "Endpoints" },
                  { value: "Free", label: "Entity Search" },
                  { value: "RM", label: "Per operation" },
                  { value: "Idempotent", label: "By Design" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <RegistryFlowDiagram />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge
              icon={Zap}
              text="Key Features"
              className="justify-center"
            />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Built for Malaysian operators
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need to integrate the SSM registry into your
              product — without building it from scratch.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge
              icon={TrendingUp}
              text="Business Impact"
              className="justify-center"
            />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Skip the manual SSM lookups
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group rounded-2xl border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoints catalog */}
      <section
        id="endpoints"
        className="border-t bg-muted/30 py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge
              icon={Layers}
              text="Endpoints"
              className="justify-center"
            />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              13 endpoints, one API key
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Template prices shown. Custom pricing tiers may apply — every
              response carries an authoritative{" "}
              <code className="rounded bg-background px-1.5 py-0.5 text-sm">
                acknowledgement.billed_rm
              </code>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                      <tr>
                        <th className="px-6 py-3 font-semibold">Endpoint</th>
                        <th className="px-6 py-3 font-semibold">Description</th>
                        <th className="px-6 py-3 text-right font-semibold">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {endpoints.map((ep) => (
                        <tr key={ep.path} className="align-top">
                          <td className="px-6 py-4">
                            <div className="font-medium">{ep.name}</div>
                            <div className="mt-1 font-mono text-xs text-muted-foreground">
                              POST /api/v1/ssm/{ep.path}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {ep.description}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            {ep.rm === "Free" ? (
                              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                                Free
                              </span>
                            ) : (
                              <span className="font-semibold">
                                RM {ep.rm.toFixed(1)}
                              </span>
                            )}
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

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge
              icon={Settings}
              text="How It Works"
              className="justify-center"
            />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Predictable, idempotent, billed only on delivery
            </h2>
          </motion.div>

          <div className="mb-12 grid gap-8 md:grid-cols-4">
            {[
              {
                step: 1,
                title: "Authenticate",
                desc: "Send your TrueSSM™ API key. Separate from TrueIdentity keys.",
              },
              {
                step: 2,
                title: "Free Validation",
                desc: "We auto-validate the registry number with a free entity search before any billable pull.",
              },
              {
                step: 3,
                title: "Pull Report",
                desc: "Profile, particulars, or scanned document — provider-native fields in the response.",
              },
              {
                step: 4,
                title: "Acknowledged",
                desc: "Every delivery returns an acknowledgement with the billed amount in RM.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-2xl border bg-background p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-center text-xl font-semibold">
              Built-in safeguards
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  label: "Free entity validation",
                  desc: "ENTITY_NOT_FOUND returns no charge.",
                },
                {
                  icon: BadgeCheck,
                  label: "Entity-type routing",
                  desc: "Wrong endpoint family is blocked before billing.",
                },
                {
                  icon: Layers,
                  label: "Idempotency keys",
                  desc: "Delivered results aren't billed twice.",
                },
                {
                  icon: Receipt,
                  label: "Acknowledgement receipt",
                  desc: "Every response includes billed_rm.",
                },
                {
                  icon: Clock,
                  label: "ISO-8601 timestamps",
                  desc: "All delivery times in UTC.",
                },
                {
                  icon: FileCheck,
                  label: "Provider-native fields",
                  desc: "Response data uses provider's JSON shape.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg bg-muted/40 p-4"
                >
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge
              icon={Building2}
              text="Use Cases"
              className="justify-center"
            />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Built for fintech, lending, and compliance
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer section — Dark */}
      <section
        id="developers"
        data-nav-theme="dark"
        className="bg-slate-950 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                For Developers
              </span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              REST in, structured registry data out
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              POST JSON, get JSON back. Idempotent, with provider-native fields
              under{" "}
              <code className="rounded bg-slate-900 px-1.5 py-0.5 text-sm text-slate-200">
                data
              </code>
              .
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* curl example */}
            <motion.div
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-sm text-slate-400">
                    company-profile.sh
                  </span>
                </div>
                <Copy className="h-4 w-4 text-slate-500" />
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-slate-300">
                <code>
                  <span className="text-slate-500">
                    {"# Pull a ROC company profile"}
                  </span>
                  {"\n"}
                  <span className="text-purple-400">curl</span> -X{" "}
                  <span className="text-green-400">POST</span> \{"\n"}
                  {"  "}
                  <span className="text-green-400">
                    https://api.truestack.my/api/v1/ssm/reports/company-profile
                  </span>{" "}
                  \{"\n"}
                  {"  "}-H{" "}
                  <span className="text-green-400">
                    &quot;Authorization: Bearer ssm_live_...&quot;
                  </span>{" "}
                  \{"\n"}
                  {"  "}-H{" "}
                  <span className="text-green-400">
                    &quot;Content-Type: application/json&quot;
                  </span>{" "}
                  \{"\n"}
                  {"  "}-H{" "}
                  <span className="text-green-400">
                    &quot;Idempotency-Key: cp-201801000082-001&quot;
                  </span>{" "}
                  \{"\n"}
                  {"  "}-d{" "}
                  <span className="text-green-400">
                    &apos;{"{"} &quot;regNo&quot;: &quot;201801000082&quot; {"}"}&apos;
                  </span>
                </code>
              </pre>
            </motion.div>

            {/* JSON Response */}
            <motion.div
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-sm text-slate-400">
                  response.json
                </span>
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-slate-300">
                <code>
                  {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300">&quot;data&quot;</span>:{" "}
                  {"{"}
                  {"\n"}
                  {"    "}
                  <span className="text-blue-300">
                    &quot;getCompProfile&quot;
                  </span>
                  : {"{"}
                  {"\n"}
                  {"      "}
                  <span className="text-blue-300">
                    &quot;rocCompanyInfo&quot;
                  </span>
                  : {"{"}
                  {"\n"}
                  {"        "}
                  <span className="text-blue-300">
                    &quot;companyName&quot;
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    &quot;EXAMPLE SDN. BHD.&quot;
                  </span>
                  ,{"\n"}
                  {"        "}
                  <span className="text-blue-300">&quot;companyNo&quot;</span>:{" "}
                  <span className="text-green-400">
                    &quot;201801000082&quot;
                  </span>
                  {"\n"}
                  {"      }"}
                  {"\n"}
                  {"    }"}
                  {"\n"}
                  {"  }"},{"\n"}
                  {"  "}
                  <span className="text-blue-300">
                    &quot;acknowledgement&quot;
                  </span>
                  : {"{"}
                  {"\n"}
                  {"    "}
                  <span className="text-blue-300">&quot;usage_type&quot;</span>
                  :{" "}
                  <span className="text-green-400">
                    &quot;company_profile&quot;
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-blue-300">
                    &quot;billed_rm&quot;
                  </span>
                  : <span className="text-orange-400">15.4</span>,{"\n"}
                  {"    "}
                  <span className="text-blue-300">
                    &quot;acknowledged_at&quot;
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    &quot;2026-05-07T06:30:00.000Z&quot;
                  </span>
                  {"\n"}
                  {"  }"}
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { value: "POST", label: "Every endpoint" },
              { value: "JSON", label: "In and out" },
              { value: "REST", label: "No SDK required" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrueSsmFaq />

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Ready to wire SSM into your product?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Get an API key, add funds in RM, and pull your first profile
              today. We&apos;ll help you integrate.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Back to truestack.my</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
