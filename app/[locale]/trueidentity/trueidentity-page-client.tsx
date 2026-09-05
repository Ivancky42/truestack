"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Fingerprint,
  Clock,
  Terminal,
  Copy,
  Building2,
  TrendingUp,
  Lock,
  FileCheck,
  Globe,
  BadgeCheck,
  Smartphone,
  Monitor,
  Camera,
  ScanFace,
  Webhook,
  Check,
  DollarSign,
  Settings,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/shared/section-badge";
import { TrueIdentityFaq } from "@/components/sections/trueidentity-faq";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { KycFlowDiagram } from "@/components/sections/trueidentity-hero-visual";

// ─── Data ─────────────────────────────────────────────────────────────────────

const businessBenefits = [
  { key: "accelerate", icon: TrendingUp },
  { key: "fraud", icon: Shield },
  { key: "compliant", icon: Lock },
  { key: "costs", icon: TrendingUp },
] as const;

const useCases = [
  { key: "financial", icon: Building2 },
  { key: "digital", icon: Users },
  { key: "telecom", icon: Globe },
] as const;

const capabilities = [
  { key: "ocr", icon: FileCheck },
  { key: "liveness", icon: BadgeCheck },
  { key: "biometrics", icon: Fingerprint },
  { key: "realtime", icon: Zap },
  { key: "fraud", icon: Shield },
  { key: "audit", icon: Clock },
] as const;

const features = [
  { key: "quickSetup", icon: Zap },
  { key: "costEffective", icon: DollarSign },
  { key: "security", icon: Shield },
  { key: "everythingHandled", icon: Settings },
] as const;

const heroStats = ["instant", "uptime", "hosted", "pdpa"] as const;
const howItWorksSteps = ["capture", "verify", "results"] as const;
const hostedUiItems = [
  { key: "documentCapture", icon: Camera },
  { key: "livenessSelfie", icon: ScanFace },
  { key: "webhookResults", icon: Webhook },
] as const;
const pricingIncludes = ["noMinimum", "hostedUi", "residency"] as const;
const developerStats = ["integrationTime", "restApi", "sdk"] as const;

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
            id="grid-identity"
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
        <rect width="100%" height="100%" fill="url(#grid-identity)" />
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TrueIdentityPage() {
  const t = useTranslations("TrueIdentity");
  const tCommon = useTranslations("Common");
  const trustedBy = t.raw("useCases.trustedByItems") as string[];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-under-nav relative overflow-hidden">
        <GridPattern />
        <div className="hero-shell px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text */}
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
                <Fingerprint className="h-4 w-4" />
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
                  <Link href="#pricing">{t("hero.ctaSecondary")}</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {heroStats.map((key) => (
                  <div key={key}>
                    <div className="text-2xl font-bold text-primary">{t(`hero.stats.${key}.value`)}</div>
                    <div className="text-sm text-muted-foreground">{t(`hero.stats.${key}.label`)}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Animated KYC Flow */}
            <KycFlowDiagram />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Zap} text={t("features.eyebrow")} className="justify-center" />
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
                <p className="text-sm text-muted-foreground">{t(`features.items.${feature.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={TrendingUp} text={t("benefits.eyebrow")} className="justify-center" />
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
                    <h3 className="mb-2 text-xl font-semibold">{t(`benefits.items.${benefit.key}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`benefits.items.${benefit.key}.description`)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Settings} text={t("howItWorks.eyebrow")} className="justify-center" />
            <h2 className="type-h2">
              {t("howItWorks.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("howItWorks.body")}
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="mb-16 flex flex-col gap-8 md:flex-row">
            {howItWorksSteps.map((key, i) => (
              <motion.div
                key={key}
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                    {i + 1}
                  </div>
                  {i < 2 && <div className="hidden h-0.5 flex-1 bg-border md:block" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(`howItWorks.steps.${key}.title`)}</h3>
                <p className="text-muted-foreground">{t(`howItWorks.steps.${key}.desc`)}</p>
              </motion.div>
            ))}
          </div>

          {/* Capabilities Grid */}
          <motion.div
            className="rounded-2xl border bg-background p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-center text-xl font-semibold">
              {t("howItWorks.suiteTitle")}
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {capabilities.map((cap) => (
                <div key={cap.key} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <cap.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{t(`howItWorks.capabilities.${cap.key}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hosted UI Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <SectionBadge icon={Monitor} text={t("hostedUi.eyebrow")} />
              <h2 className="type-h2">
                {t("hostedUi.title")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("hostedUi.body")}
              </p>

              <div className="mt-8 space-y-4">
                {hostedUiItems.map((item) => (
                  <div key={item.key} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t(`hostedUi.items.${item.key}.title`)}</h4>
                      <p className="text-sm text-muted-foreground">{t(`hostedUi.items.${item.key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t("hostedUi.worksOnWeb")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t("hostedUi.worksOnMobile")}</span>
                </div>
              </div>
            </motion.div>

            {/* UI Mockups */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid gap-6">
                {/* Web Browser Mockup */}
                <div className="rounded-2xl border bg-background p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{t("hostedUi.mock.webBrowser")}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {t("hostedUi.mock.desktopTablet")}
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-lg border bg-white">
                    <div className="flex items-center gap-2 border-b bg-slate-50 px-3 py-2">
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="ml-2 flex-1 rounded bg-slate-100 px-3 py-1 text-xs text-slate-400">
                        verify.truestack.my/session/abc123
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4 text-center">
                        <div className="mx-auto mb-2 h-3 w-32 rounded bg-primary/20" />
                        <div className="mx-auto h-2 w-48 rounded bg-slate-200" />
                      </div>
                      <div className="mx-auto max-w-xs">
                        <div className="flex aspect-4/3 items-center justify-center rounded-lg border-2 border-dashed border-primary/30 bg-slate-50">
                          <div className="text-center">
                            <Camera className="mx-auto mb-2 h-8 w-8 text-primary/30" />
                            <div className="mx-auto h-2 w-24 rounded bg-slate-200" />
                          </div>
                        </div>
                        <div className="mt-4 flex h-10 items-center justify-center rounded-lg bg-primary/10">
                          <div className="h-2 w-20 rounded bg-primary/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Mockups */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Document Capture */}
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{t("hostedUi.mock.mobile")}</span>
                    </div>
                    <div className="mx-auto w-28">
                      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white">
                        <div className="mx-auto h-4 w-12 rounded-b-lg bg-slate-100" />
                        <div className="p-3">
                          <div className="mx-auto mb-2 h-2 w-16 rounded bg-primary/20" />
                          <div className="mx-auto mb-3 h-1.5 w-20 rounded bg-slate-200" />
                          <div className="flex aspect-[1.6/1] items-center justify-center rounded border border-dashed border-primary/30 bg-slate-50 mb-2">
                            <FileCheck className="h-4 w-4 text-primary/30" />
                          </div>
                          <div className="flex h-6 items-center justify-center rounded bg-primary/10">
                            <div className="h-1.5 w-12 rounded bg-primary/30" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      {t("hostedUi.mock.documentCapture")}
                    </p>
                  </div>

                  {/* Selfie */}
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <ScanFace className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{t("hostedUi.mock.selfie")}</span>
                    </div>
                    <div className="mx-auto w-28">
                      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white">
                        <div className="mx-auto h-4 w-12 rounded-b-lg bg-slate-100" />
                        <div className="p-3">
                          <div className="mx-auto mb-2 h-2 w-14 rounded bg-primary/20" />
                          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-primary/30 bg-slate-50">
                            <ScanFace className="h-5 w-5 text-primary/30" />
                          </div>
                          <div className="mb-1.5 h-1.5 w-full rounded bg-slate-200" />
                          <div className="flex h-6 items-center justify-center rounded bg-emerald-50">
                            <div className="h-1.5 w-10 rounded bg-emerald-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      {t("hostedUi.mock.livenessCheck")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Building2} text={t("useCases.eyebrow")} className="justify-center" />
            <h2 className="type-h2">
              {t("useCases.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("useCases.body")}
            </p>
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
                <p className="text-sm text-muted-foreground">{t(`useCases.items.${useCase.key}.description`)}</p>
              </motion.div>
            ))}
          </div>

          {/* Trusted By */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-sm text-muted-foreground">{t("useCases.trustedBy")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {trustedBy.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Receipt} text={t("pricing.eyebrow")} className="justify-center" />
            <h2 className="type-h2">
              {t("pricing.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("pricing.body")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="w-full">
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody className="divide-y">
                    <tr className="bg-primary/5">
                      <td className="px-6 py-4">
                        <div className="font-semibold">{t("pricing.setupFee")}</div>
                        <div className="text-sm text-muted-foreground">{t("pricing.setupFeeDesc")}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-2xl font-bold text-primary">RM 8,000</div>
                        <div className="text-sm text-muted-foreground">{t("pricing.oneTime")}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium">{t("pricing.perVerification")}</div>
                        <div className="text-sm text-muted-foreground">{t("pricing.perVerificationDesc")}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-2xl font-bold">RM 3.50</div>
                        <div className="text-sm text-muted-foreground">{t("pricing.perTransaction")}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-medium">{t("pricing.annualFee")}</div>
                        <div className="text-sm text-muted-foreground">{t("pricing.annualFeeDesc")}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-2xl font-bold">RM 4,000</div>
                        <div className="text-sm text-muted-foreground">{t("pricing.perYear")}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {pricingIncludes.map((key) => (
                <div
                  key={key}
                  className="flex items-start gap-3 rounded-xl border bg-background p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{t(`pricing.includes.${key}.label`)}</p>
                    <p className="text-xs text-muted-foreground">{t(`pricing.includes.${key}.desc`)}</p>
                  </div>
                </div>
              ))}
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
            {t("pricing.footnote")}
          </motion.div>
        </div>
      </section>

      {/* Developer Section — Dark */}
      <section id="developers" data-nav-theme="dark" className="bg-slate-950 py-20 text-white">
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
              {t("developers.body")}
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* TypeScript Example */}
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
                  <span className="ml-2 text-sm text-slate-400">verify.ts</span>
                </div>
                <Copy className="h-4 w-4 text-slate-500" />
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-slate-300">
                <code>
                  <span className="text-slate-500">{"// Initialize TrueIdentity client"}</span>{"\n"}
                  <span className="text-purple-400">import</span> {"{ "}
                  <span className="text-blue-400">TrueIdentity</span>
                  {" }"} <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">&apos;@truestack/identity&apos;</span>;{"\n\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">client</span> ={" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-blue-400">TrueIdentity</span>({"{"}
                  {"\n"}
                  {"  "}apiKey: process.env.TRUESTACK_API_KEY,{"\n"}
                  {"  "}environment:{" "}
                  <span className="text-green-400">&apos;production&apos;</span>
                  {"\n"}
                  {"}"});{"\n\n"}
                  <span className="text-slate-500">{"// Verify a customer"}</span>{"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">result</span> ={" "}
                  <span className="text-purple-400">await</span> client.verify({"{"}
                  {"\n"}
                  {"  "}document: myKadImage,{"\n"}
                  {"  "}selfie: customerSelfie,{"\n"}
                  {"  "}options: {"{"} livenessCheck:{" "}
                  <span className="text-cyan-400">true</span> {"}"}
                  {"\n"}
                  {"}"});{"\n\n"}
                  console.log(result.verified);{" "}
                  <span className="text-slate-500">{"// true"}</span>{"\n"}
                  console.log(result.confidence);{" "}
                  <span className="text-slate-500">{"// 0.98"}</span>
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
                <span className="ml-2 text-sm text-slate-400">response.json</span>
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-slate-300">
                <code>
                  {"{"}{"\n"}
                  {"  "}<span className="text-blue-300">&quot;verified&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>,{"\n"}
                  {"  "}<span className="text-blue-300">&quot;confidence&quot;</span>:{" "}
                  <span className="text-orange-400">0.98</span>,{"\n"}
                  {"  "}<span className="text-blue-300">&quot;document&quot;</span>: {"{"}{"\n"}
                  {"    "}<span className="text-blue-300">&quot;type&quot;</span>:{" "}
                  <span className="text-green-400">&quot;mykad&quot;</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;id_number&quot;</span>:{" "}
                  <span className="text-green-400">&quot;******-**-****&quot;</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;name&quot;</span>:{" "}
                  <span className="text-green-400">&quot;AHMAD BIN ABDULLAH&quot;</span>{"\n"}
                  {"  }"},{"\n"}
                  {"  "}<span className="text-blue-300">&quot;checks&quot;</span>: {"{"}{"\n"}
                  {"    "}<span className="text-blue-300">&quot;liveness&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;face_match&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>,{"\n"}
                  {"    "}<span className="text-blue-300">&quot;document_valid&quot;</span>:{" "}
                  <span className="text-cyan-400">true</span>{"\n"}
                  {"  }"}{"\n"}
                  {"}"}
                </code>
              </pre>
            </motion.div>
          </div>

          {/* Integration Stats */}
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

      <TrueIdentityFaq />

      <ConsultationCta
        heading={t("cta.heading")}
        body={t("cta.body")}
        secondary={{ href: "/", label: t("cta.secondary") }}
      />
    </>
  );
}
