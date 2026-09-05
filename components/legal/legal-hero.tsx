"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { FileText, Scale, Shield } from "lucide-react";
import { GridPattern } from "@/components/sections/hero";
import {
  LEGAL_LAST_UPDATED,
  legalPolicies,
  type LegalPolicyHref,
} from "@/lib/legal";
import { cn } from "@/lib/utils";

const HERO_ICONS = {
  "/cybersecurity": Shield,
  "/pdpa": Scale,
  "/privacy": Shield,
  "/terms": FileText,
} as const;

const TAB_KEYS: Record<LegalPolicyHref, "cybersecurity" | "pdpa" | "privacy" | "terms"> = {
  "/cybersecurity": "cybersecurity",
  "/pdpa": "pdpa",
  "/privacy": "privacy",
  "/terms": "terms",
};

type LegalHeroProps = {
  eyebrow: string;
  title: string;
  titleMuted: string;
  lede: string;
  currentPath: LegalPolicyHref;
};

export function LegalHero({
  eyebrow,
  title,
  titleMuted,
  lede,
  currentPath,
}: LegalHeroProps) {
  const t = useTranslations("LegalChrome");
  const Icon = HERO_ICONS[currentPath];
  return (
    <section className="hero-under-nav relative overflow-hidden border-b">
      <GridPattern />
      <div className="relative hero-shell px-6 py-14 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-2 type-eyebrow text-primary">
            <Icon className="h-4 w-4" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="type-h1 text-foreground">
            {title}{" "}
            <span className="text-muted-foreground">{titleMuted}</span>
          </h1>
          <p className="mt-5 max-w-2xl type-lede-hero text-muted-foreground">
            {lede}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border bg-background/80 px-3 py-1.5 type-micro font-medium text-muted-foreground backdrop-blur-sm">
              {t("lastUpdated", { date: LEGAL_LAST_UPDATED })}
            </span>
          </div>
        </motion.div>

        <motion.nav
          aria-label={t("pagesNav")}
          className="mt-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {legalPolicies.map((policy) => {
            const active = policy.href === currentPath;
            return (
              <Link
                key={policy.href}
                href={policy.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 type-ui transition-colors",
                  active
                    ? "border-primary/30 bg-primary/10 font-medium text-primary"
                    : "bg-background/80 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                {t(`tabs.${TAB_KEYS[policy.href]}`)}
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </section>
  );
}
