"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  description: string;
  quote?: string;
  tags: string[];
  href: string;
  logo: string;
  isComingSoon?: boolean;
  stats?: { label: string; value: string }[];
  wide?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    title: "CreditXpress",
    description:
      "Transformed from traditional lending to a fully digital, KPKT-licensed nationwide platform with web and mobile apps.",
    quote: "TrueStack transformed our entire operation. We went from paper-based to fully digital in under 6 months.",
    tags: ["Digital License", "Web + Mobile", "KPKT Licensed"],
    href: "https://creditxpress.com.my",
    logo: "/logos/creditxpress.svg",
    stats: [
      { label: "Time to Launch", value: "6 mo" },
      { label: "Platform", value: "Web + iOS + Android" },
    ],
  },
  {
    title: "Andas Capital",
    description:
      "Enterprise lending platform with comprehensive loan management, automated workflows, and regulatory reporting.",
    quote: "The fastest turnaround we've seen. From kickoff to live platform in just 3 months.",
    tags: ["Custom Software", "KPKT Licensed", "Enterprise"],
    href: "https://andas.com.my",
    logo: "/logos/Andas.svg",
    stats: [
      { label: "Time to Launch", value: "3 mo" },
      { label: "License", value: "KPKT" },
    ],
  },
  {
    title: "CashSouk",
    description:
      "P2P lending marketplace connecting borrowers with investors. Built for scale with full compliance features.",
    tags: ["P2P Lending", "SC Licensed", "Marketplace"],
    href: "https://cashsouk.com",
    isComingSoon: true,
    logo: "/logos/cashsouk_logo.png",
    stats: [
      { label: "Type", value: "P2P Platform" },
      { label: "Regulator", value: "SC Malaysia" },
    ],
    wide: true,
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const isComingSoon = study.isComingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={study.wide ? "md:col-span-2" : ""}
    >
      <Link
        href={study.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-muted/30 to-background transition-all hover:border-primary/40 hover:shadow-lg">
          {/* Header with logo */}
          <div className="flex items-center justify-between border-b bg-muted/20 px-8 py-5">
            <div className="flex h-12 w-36 items-center">
              <Image
                src={study.logo}
                alt={study.title}
                width={144}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            </div>
            {isComingSoon ? (
              <Badge variant="secondary">Coming Soon</Badge>
            ) : (
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-8">
            <p className="mb-6 flex-1 text-base text-muted-foreground">{study.description}</p>

            {/* Quote if available */}
            {study.quote && (
              <div className="mb-6 flex items-start gap-3 rounded-xl bg-primary/5 p-4">
                <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm italic text-foreground">{study.quote}</p>
              </div>
            )}

            {/* Stats */}
            {study.stats && (
              <div className="mb-6 grid grid-cols-2 gap-4">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-muted/30 p-3 text-center">
                    <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CaseStudies() {
  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Success Stories"
          subtitle="See how we've helped Malaysian Fintech operators go digital and scale their businesses."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
