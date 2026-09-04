"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";

type CtaAccent = "brand" | "truekredit" | "truesyariah" | "kpkt";

interface CtaAction {
  href: string;
  label: string;
}

interface ConsultationCtaProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  primary?: CtaAction;
  secondary?: CtaAction;
  accent?: CtaAccent;
  className?: string;
}

// Tailwind needs literal class strings, so accents map to full gradient classes.
const ACCENT_GRADIENTS: Record<CtaAccent, string> = {
  brand: "from-primary-start to-primary-end",
  truekredit: "from-indigo-600 to-violet-600",
  truesyariah: "from-emerald-600 to-teal-600",
  kpkt: "from-kpkt to-cyan-600",
};

export function ConsultationCta({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
  accent = "brand",
  className,
}: ConsultationCtaProps) {
  const t = useTranslations("Common");
  const resolvedHeading = heading ?? t("consultationHeading");
  const resolvedBody = body ?? t("consultationBody");
  const resolvedPrimary = primary ?? {
    href: "/contact",
    label: t("bookConsultation"),
  };
  return (
    <section className={`py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          data-nav-theme="dark"
          className={`relative overflow-hidden rounded-3xl bg-linear-to-br ${ACCENT_GRADIENTS[accent]} px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="consultation-cta-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#consultation-cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            {eyebrow && (
              <motion.p
                className="mb-3 type-eyebrow text-primary-foreground/70"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h2
              className="type-h2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {resolvedHeading}
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-2xl type-lede text-primary-foreground/80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {resolvedBody}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <CtaLink href={resolvedPrimary.href}>
                  <MessageSquare className="h-4 w-4" />
                  {resolvedPrimary.label}
                </CtaLink>
              </Button>
              {secondary && (
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <CtaLink href={secondary.href}>
                    {secondary.label}
                    <ArrowRight className="h-4 w-4" />
                  </CtaLink>
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
