"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
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
import { ConsultationCta } from "@/components/sections/consultation-cta";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  { key: "oneIntegration", icon: Zap },
  { key: "freeValidation", icon: Shield },
  { key: "rmPricing", icon: Receipt },
  { key: "idempotentPulls", icon: Layers },
] as const;

const businessBenefits = [
  { key: "faster", icon: TrendingUp },
  { key: "risk", icon: Shield },
  { key: "costs", icon: Receipt },
  { key: "automation", icon: Settings },
] as const;

type Endpoint = {
  path: string;
  usageType:
    | "entity_search"
    | "company_profile"
    | "business_profile"
    | "llp_profile"
    | "officers"
    | "share_capital"
    | "shareholders"
    | "registered_address"
    | "company_secretary"
    | "charges"
    | "audit_firm"
    | "document_list"
    | "document_image";
  /** Billable amount in RM for a delivered pull (template pricing). */
  rm: number | "Free";
};

const endpoints: Endpoint[] = [
  { path: "entities/search", usageType: "entity_search", rm: "Free" },
  { path: "reports/company-profile", usageType: "company_profile", rm: 15.4 },
  { path: "reports/business-profile", usageType: "business_profile", rm: 15.4 },
  { path: "reports/llp-profile", usageType: "llp_profile", rm: 25.4 },
  { path: "reports/officers", usageType: "officers", rm: 23.2 },
  { path: "reports/share-capital", usageType: "share_capital", rm: 23.2 },
  { path: "reports/shareholders", usageType: "shareholders", rm: 23.2 },
  { path: "reports/registered-address", usageType: "registered_address", rm: 23.2 },
  { path: "reports/company-secretary", usageType: "company_secretary", rm: 23.2 },
  { path: "reports/charges", usageType: "charges", rm: 23.2 },
  { path: "reports/audit-firm", usageType: "audit_firm", rm: 13.2 },
  { path: "documents/list", usageType: "document_list", rm: 15.4 },
  { path: "documents/image", usageType: "document_image", rm: 15.4 },
];

const useCases = [
  { key: "lenders", icon: Building2 },
  { key: "kyb", icon: Users },
  { key: "compliance", icon: FileSearch },
] as const;

const heroStats = ["endpoints", "entitySearch", "rm", "idempotent"] as const;
const howItWorksSteps = [
  "authenticate",
  "freeValidation",
  "pullReport",
  "acknowledged",
] as const;
const safeguards = [
  { key: "freeValidation", icon: Shield },
  { key: "entityTypeRouting", icon: BadgeCheck },
  { key: "idempotencyKeys", icon: Layers },
  { key: "acknowledgementReceipt", icon: Receipt },
  { key: "timestamps", icon: Clock },
  { key: "providerFields", icon: FileCheck },
] as const;
const developerStats = ["post", "json", "rest"] as const;

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
  const t = useTranslations("TrueSSM");
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
        <p className="text-xs font-semibold text-foreground">{t("hero.chips.endpoints.value")}</p>
        <p className="text-[10px] text-muted-foreground">{t("hero.chips.endpoints.label")}</p>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-32 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-emerald-600">{t("hero.chips.entitySearch.value")}</p>
        <p className="text-[10px] text-muted-foreground">{t("hero.chips.entitySearch.label")}</p>
      </motion.div>

      <motion.div
        className="absolute -left-8 bottom-16 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-primary">{t("hero.chips.idempotent.value")}</p>
        <p className="text-[10px] text-muted-foreground">{t("hero.chips.idempotent.label")}</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TrueSsmPage() {
  const t = useTranslations("TrueSSM");
  const tCommon = useTranslations("Common");

  return (
    <>
      {/* Hero */}
      <section className="hero-under-nav relative overflow-hidden">
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
                {t("hero.eyebrow")}
              </motion.div>
              <motion.h1
                className="type-h1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t("hero.title")}
              </motion.h1>
              <motion.p
                className="mt-6 type-lede-hero text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("hero.body")}
              </motion.p>

              <motion.div
                className="mt-6 inline-flex items-center gap-3 rounded-full border bg-background/80 py-2 pl-3 pr-4 backdrop-blur"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {t("hero.poweredBy")}
                </span>
                <div className="relative h-6 w-24">
                  <Image
                    src="/truekredit/integrations/ssmsearch-logo.webp"
                    alt={t("hero.ssmSearchAlt")}
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
                    {tCommon("bookConsultation")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#endpoints">{t("hero.ctaSecondary")}</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {heroStats.map((key) => (
                  <div key={key}>
                    <div className="text-2xl font-bold text-primary">
                      {t(`hero.stats.${key}.value`)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t(`hero.stats.${key}.label`)}
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
              text={t("features.eyebrow")}
              className="justify-center"
            />
            <h2 className="type-h2">
              {t("features.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("features.body")}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(`features.items.${feature.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(`features.items.${feature.key}.description`)}
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
              text={t("benefits.eyebrow")}
              className="justify-center"
            />
            <h2 className="type-h2">
              {t("benefits.title")}
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.key}
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
                      {t(`benefits.items.${benefit.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">{t(`benefits.items.${benefit.key}.description`)}</p>
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
              text={t("endpoints.eyebrow")}
              className="justify-center"
            />
            <h2 className="type-h2">
              {t("endpoints.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.rich("endpoints.body", {
                code: (chunks) => (
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm">
                    {chunks}
                  </code>
                ),
              })}
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
                        <th className="px-6 py-3 font-semibold">{t("endpoints.columns.endpoint")}</th>
                        <th className="px-6 py-3 font-semibold">{t("endpoints.columns.description")}</th>
                        <th className="px-6 py-3 text-right font-semibold">
                          {t("endpoints.columns.price")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {endpoints.map((ep) => (
                        <tr key={ep.path} className="align-top">
                          <td className="px-6 py-4">
                            <div className="font-medium">{t(`endpoints.items.${ep.usageType}.name`)}</div>
                            <div className="mt-1 font-mono text-xs text-muted-foreground">
                              POST /api/v1/ssm/{ep.path}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {t(`endpoints.items.${ep.usageType}.description`)}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            {ep.rm === "Free" ? (
                              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                                {t("endpoints.free")}
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
              text={t("howItWorks.eyebrow")}
              className="justify-center"
            />
            <h2 className="type-h2">
              {t("howItWorks.title")}
            </h2>
          </motion.div>

          <div className="mb-12 grid gap-8 md:grid-cols-4">
            {howItWorksSteps.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(`howItWorks.steps.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`howItWorks.steps.${key}.desc`)}</p>
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
              {t("howItWorks.safeguardsTitle")}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {safeguards.map((item) => (
                <div
                  key={item.key}
                  className="flex items-start gap-3 rounded-lg bg-muted/40 p-4"
                >
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{t(`howItWorks.safeguards.${item.key}.label`)}</p>
                    <p className="text-xs text-muted-foreground">{t(`howItWorks.safeguards.${item.key}.desc`)}</p>
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
              text={t("useCases.eyebrow")}
              className="justify-center"
            />
            <h2 className="type-h2">
              {t("useCases.title")}
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.key}
                className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(`useCases.items.${useCase.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(`useCases.items.${useCase.key}.description`)}
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
              <span className="type-eyebrow text-primary">
                {t("developers.eyebrow")}
              </span>
            </div>
            <h2 className="type-h2">
              {t("developers.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              {t.rich("developers.body", {
                code: (chunks) => (
                  <code className="rounded bg-slate-900 px-1.5 py-0.5 text-sm text-slate-200">
                    {chunks}
                  </code>
                ),
              })}
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
            {developerStats.map((key) => (
              <motion.div
                key={key}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-2xl font-bold text-white">{t(`developers.stats.${key}.value`)}</div>
                <div className="mt-1 text-sm text-slate-400">{t(`developers.stats.${key}.label`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrueSsmFaq />

      <ConsultationCta
        heading={t("cta.heading")}
        body={t("cta.body")}
        secondary={{ href: "/", label: t("cta.secondary") }}
      />
    </>
  );
}
