"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/sections/hero";
import LogoCloud1 from "@/components/logo-cloud-1";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  FileCheck,
  Code2,
  Server,
  Database,
  Quote,
  Fingerprint,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type WorkStatus = "Live" | "Coming Soon";

type WorkProject = {
  title: string;
  href: string;
  logo: string;
  lede: string;
  narrative: string;
  challenge: string;
  outcome: string;
  features: string[];
  tags: string[];
  status: WorkStatus;
  highlights: { icon: LucideIcon; label: string }[];
  stats: { label: string; value: string }[];
  accent: "primary" | "kpkt";
};

const projects: WorkProject[] = [
  {
    title: "CreditXpress",
    href: "https://creditxpress.com.my",
    logo: "/logos/creditxpress.svg",
    lede: "A full digital KPKT conversion: nationwide lending with web and mobile apps, signing, and infrastructure auditors can follow end to end.",
    narrative:
      "We led a Digital License Conversion — product, engineering, and operational design so the business could move off paper without losing the paper trail regulators expect.",
    challenge:
      "Digitise the borrower journey and back-office while every disbursement, signature, and report remained explainable under KPKT review.",
    outcome:
      "Approved digital KPKT license, production web and Flutter apps, on-premise digital signing, Malaysia-hosted AWS, and a complete audit trail in daily use.",
    features: [
      "Digital KPKT license approved",
      "Web application + Flutter mobile app",
      "On-premise digital signing server",
      "Malaysia data residency (AWS)",
      "Complete audit trail system",
      "Serving customers nationwide",
    ],
    tags: ["Digital License Conversion", "Web + Mobile App", "KPKT Licensed"],
    status: "Live",
    highlights: [
      { icon: FileCheck, label: "Digital license" },
      { icon: Server, label: "Web + mobile" },
      { icon: Database, label: "AWS Malaysia" },
    ],
    stats: [
      { label: "Time to launch", value: "3 mo" },
      { label: "License", value: "KPKT" },
    ],
    accent: "kpkt",
  },
  {
    title: "Andas Capital",
    href: "https://andas.com.my",
    logo: "/logos/Andas.svg",
    lede: "Enterprise loan operations: lifecycle management, automated workflows, and reporting tuned for a KPKT-licensed lender at pace.",
    narrative:
      "The ask was an operator-grade core — control over the full loan lifecycle, repeatable processes, and numbers and exports that hold up when compliance asks questions.",
    challenge:
      "Go from kickoff to production in months without trading off controls: real audits, real portfolios, and a team that had to run the business on day one.",
    outcome:
      "A live enterprise stack with deep loan management, workflow automation, and regulatory reporting — delivered in roughly three months.",
    features: [
      "Enterprise loan management",
      "Automated operational workflows",
      "Regulatory reporting aligned to KPKT expectations",
      "KPKT licensed operating context",
      "Malaysia data residency (AWS)",
      "Comprehensive audit trail and controls",
    ],
    tags: ["Custom Software", "KPKT Licensed", "Enterprise"],
    status: "Live",
    highlights: [
      { icon: Code2, label: "Enterprise platform" },
      { icon: Shield, label: "KPKT" },
      { icon: Database, label: "AWS Malaysia" },
    ],
    stats: [
      { label: "Time to launch", value: "3 mo" },
      { label: "License", value: "KPKT" },
    ],
    accent: "primary",
  },
  {
    title: "CashSouk",
    href: "https://cashsouk.com",
    logo: "/logos/cashsouk_logo.png",
    lede: "P2P marketplace infrastructure: separate investor and borrower experiences, real-time flows, and the traceability SC-licensed marketplaces need.",
    narrative:
      "We architected CashSouk as scalable P2P plumbing — room for multiple products, high transaction volume, and the evidence trail a regulator expects from a licensed platform.",
    challenge:
      "Move fast on product without weak ledgers: investor protection, clear money trails, and headroom to add products as the marketplace grows.",
    outcome:
      "Dual portals, Malaysia data residency, end-to-end audit trails, and processing paths ready for serious transaction load.",
    features: [
      "P2P lending marketplace",
      "Investor and borrower portals",
      "Malaysia data residency (AWS)",
      "Comprehensive audit trails",
      "Multi-product support",
      "Real-time transaction processing",
    ],
    tags: ["Custom Software", "P2P Lending", "SC Licensed"],
    status: "Coming Soon",
    highlights: [
      { icon: Code2, label: "P2P platform" },
      { icon: Database, label: "AWS Malaysia" },
    ],
    stats: [
      { label: "Model", value: "Marketplace" },
      { label: "Regulator", value: "SC Malaysia" },
    ],
    accent: "primary",
  },
];

function CtaLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function WorkHero() {
  return (
    <section className="relative overflow-hidden border-b">
      <GridPattern variant="primary" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-primary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Selected work
            </motion.p>
            <motion.h1
              className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Production fintech for{" "}
              <span className="text-primary">Malaysia&apos;s</span> regulated
              market
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              These are live (or soon-to-launch) platforms we&apos;ve shaped
              end-to-end — from license journeys and architecture to hosting,
              signing, and the audit trail behind the UI.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <Button asChild size="lg" className="gap-2">
                <CtaLink href="#case-studies">
                  Read the case studies
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Talk to us about your build</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="min-w-0 self-start rounded-2xl border border-border/60 bg-background/40 p-3 shadow-sm backdrop-blur-sm md:p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <LogoCloud1
              asContainer="div"
              variant="clients"
              showCategories={false}
              compact
              dense
              className="[&_.container]:max-w-none [&_.container]:px-0 [&_.max-w-5xl]:max-w-none"
              title="Trusted by Industry Leaders"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StoryBeat({
  kicker,
  children,
  className,
}: {
  kicker: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {kicker}
      </p>
      <div className="text-base leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

function ProjectStory({ project, index }: { project: WorkProject; index: number }) {
  const isLive = project.status === "Live";
  const accent =
    project.accent === "kpkt"
      ? {
          border: "border-kpkt/30",
          bar: "bg-kpkt/[0.07]",
          icon: "text-kpkt",
          chip: "border-kpkt/20 bg-kpkt/[0.06]",
        }
      : {
          border: "border-primary/25",
          bar: "bg-primary/[0.06]",
          icon: "text-primary",
          chip: "border-primary/15 bg-primary/[0.04]",
        };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.18) }}
      className={cn(
        "overflow-hidden rounded-3xl border bg-card shadow-sm",
        accent.border
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-5 border-b px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-8 md:py-6",
          accent.bar
        )}
      >
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-[140px] shrink-0 items-center md:h-14 md:w-[160px]">
            <Image
              src={project.logo}
              alt={project.title}
              width={200}
              height={56}
              className="max-h-12 w-auto object-contain object-left md:max-h-14"
            />
          </div>
          <div className="min-w-0 pt-0.5">
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
              {project.title}
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant={isLive ? "default" : "secondary"}>
                {project.status}
              </Badge>
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 sm:justify-end">
          {isLive ? (
            <Button asChild className="w-full gap-2 sm:w-auto" size="lg">
              <Link href={project.href} target="_blank" rel="noopener noreferrer">
                Visit site
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button
              size="lg"
              variant="outline"
              disabled
              className="w-full gap-2 sm:w-auto"
            >
              Launching soon
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-8 p-5 md:gap-10 md:p-8 lg:grid-cols-12 lg:items-start lg:gap-12 lg:p-10">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:col-span-4">
          <div className="grid grid-cols-2 gap-2">
            {project.stats.map((s) => (
              <div
                key={s.label}
                className={cn(
                  "rounded-xl border px-3 py-2.5",
                  accent.chip
                )}
              >
                <div className="text-base font-semibold tracking-tight md:text-lg">
                  {s.value}
                </div>
                <div className="text-[11px] text-muted-foreground leading-snug md:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Capabilities
            </p>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-xs font-medium"
                >
                  <h.icon className={cn("h-3.5 w-3.5", accent.icon)} />
                  {h.label}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8 lg:col-span-8">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {project.lede}
          </p>

          <StoryBeat kicker="Background">{project.narrative}</StoryBeat>

          <div className="grid gap-4 md:grid-cols-2">
            <div
              className={cn(
                "rounded-2xl border p-5 md:p-6",
                accent.chip
              )}
            >
              <div className="flex items-start gap-2.5">
                <Quote className={cn("mt-0.5 h-4 w-4 shrink-0", accent.icon)} />
                <StoryBeat kicker="Constraint">{project.challenge}</StoryBeat>
              </div>
            </div>
            <div className="rounded-2xl border border-border/80 bg-muted/20 p-5 md:p-6">
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  className={cn("mt-0.5 h-4 w-4 shrink-0", accent.icon)}
                />
                <StoryBeat kicker="Result">{project.outcome}</StoryBeat>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What we delivered
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-sm leading-snug text-muted-foreground"
                >
                  <CheckCircle2
                    className={cn("mt-0.5 h-4 w-4 shrink-0", accent.icon)}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function WorkPageContent() {
  return (
    <>
      <WorkHero />

      <section className="border-b bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
            Software is easy to demo.{" "}
            <span className="text-primary">Production fintech</span> has to
            survive audits, residency rules, and years of operational load.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            The projects below span digital KPKT conversion, enterprise lending
            cores, and SC-facing marketplace infrastructure — each with its own
            license story, and the same insistence on traceability and hosting
            choices you can defend.
          </p>
        </div>
      </section>

      <section id="case-studies" className="scroll-mt-24 bg-muted/10 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Case studies"
            subtitle="Scope, constraint, and delivery — how we partnered with each operator from problem definition to systems their teams run today."
            className="mb-10 md:mb-14"
          />
          <div className="flex flex-col gap-12 md:gap-16">
            {projects.map((project, index) => (
              <ProjectStory key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        data-nav-theme="dark"
        className="border-t border-slate-800 bg-slate-950 py-16 text-white md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3 md:gap-8">
          {[
            {
              value: "≤3 mo",
              label: "Proven go-live velocity",
              detail:
                "Andas Capital went from kickoff to a production lending platform in about three months.",
            },
            {
              value: "Malaysia",
              label: "In-region hosting",
              detail: "AWS in Malaysia — data and operations your auditors can map to geography.",
            },
            {
              value: "KPKT & SC",
              label: "License contexts we ship for",
              detail: "Money lending, digital conversion, and SC-regulated marketplaces — not generic SaaS templates.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-l-2 border-primary/60 pl-6 md:border-l md:border-primary/40 md:pl-8"
            >
              <div className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
                {item.value}
              </div>
              <p className="mt-2 font-semibold text-slate-200">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Work with us"
            subtitle="Compliance-only, digital license conversion, or a ground-up platform — the same senior team across discovery, build, and go-live."
            centered
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <Card className="h-full border-border/80 transition-all hover:border-primary/40 hover:shadow-md">
              <CardContent className="flex h-full flex-col pt-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Fingerprint className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-center text-lg font-semibold">
                  TrueIdentity (KYC)
                </h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  e-KYC infrastructure for onboarding, verification, and
                  compliant identity checks in Malaysian fintech workflows.
                </p>
                <div className="mt-auto flex justify-center pt-6">
                  <Button
                    asChild
                    variant="ghost"
                    className="gap-2 text-black hover:bg-black/5 hover:text-black"
                  >
                    <Link href="/trueidentity">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full border-kpkt/25 transition-all hover:border-kpkt/50 hover:shadow-md">
              <CardContent className="flex h-full flex-col pt-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-kpkt/15">
                  <FileCheck className="h-7 w-7 text-kpkt" />
                </div>
                <h3 className="text-center text-lg font-semibold">
                  Digital license
                </h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Transform into a fully digital KPKT-licensed platform on a
                  defined timeline.
                </p>
                <div className="mt-auto flex justify-center pt-6">
                  <Button
                    asChild
                    variant="ghost"
                    className="gap-2 text-black hover:bg-black/5 hover:text-black"
                  >
                    <Link href="/services/digital-license">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full border-border/80 transition-all hover:border-primary/40 hover:shadow-md">
              <CardContent className="flex h-full flex-col pt-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Code2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-center text-lg font-semibold">
                  Custom software
                </h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Full-stack fintech development for P2P and digital lending.
                </p>
                <div className="mt-auto flex justify-center pt-6">
                  <Button
                    asChild
                    variant="ghost"
                    className="gap-2 text-black hover:bg-black/5 hover:text-black"
                  >
                    <Link href="/services/software-development">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
