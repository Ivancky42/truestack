"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showCodeCard?: boolean;
  variant?: "primary" | "kpkt";
}

function CtaLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const isHashLink = href.startsWith("#");
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHashLink) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isHashLink) {
    return (
      <a href={href} onClick={handleClick} className={className}>
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

function GridPattern({ variant = "primary" }: { variant?: "primary" | "kpkt" }) {
  const colorVar = variant === "kpkt" ? "var(--kpkt)" : "var(--primary)";
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className={`absolute inset-0 bg-linear-to-b to-transparent ${
          variant === "kpkt" 
            ? "from-kpkt/5 via-transparent" 
            : "from-primary/5 via-transparent"
        }`} 
      />
      
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
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
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          background: `radial-gradient(ellipse at center, ${colorVar} 0%, transparent 70%)`
        }}
      />
      
      {/* Animated gradient orb */}
      <motion.div
        className={`absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          variant === "kpkt"
            ? "bg-linear-to-r from-kpkt/10 to-kpkt/5"
            : "bg-linear-to-r from-primary/10 to-primary/5"
        }`}
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

function CodeCard() {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-sm text-slate-300 shadow-2xl md:p-8 md:text-base">
        <div className="mb-4 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">platform</span>{" "}
            <span className="text-slate-500">=</span>{" "}
            <span className="text-orange-400">{`{`}</span>
          </div>
          <div className="pl-4 md:pl-6">
            <span className="text-slate-400">frontend:</span>{" "}
            <span className="text-green-400">&apos;Next.js&apos;</span>,
          </div>
          <div className="pl-4 md:pl-6">
            <span className="text-slate-400">backend:</span>{" "}
            <span className="text-green-400">&apos;Express&apos;</span>,
          </div>
          <div className="pl-4 md:pl-6">
            <span className="text-slate-400">database:</span>{" "}
            <span className="text-green-400">&apos;PostgreSQL&apos;</span>,
          </div>
          <div className="pl-4 md:pl-6">
            <span className="text-slate-400">cloud:</span>{" "}
            <span className="text-green-400">&apos;AWS Malaysia&apos;</span>,
          </div>
          <div className="pl-4 md:pl-6">
            <span className="text-slate-400">compliance:</span>{" "}
            <span className="text-cyan-400">true</span>,
          </div>
          <div className="pl-4 md:pl-6">
            <span className="text-slate-400">auditTrail:</span>{" "}
            <span className="text-cyan-400">true</span>,
          </div>
          <div>
            <span className="text-orange-400">{`}`}</span>;
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800">
            <span className="text-slate-500">{`// Licensed & Compliant`}</span>
          </div>
          <div>
            <span className="text-purple-400">export</span>{" "}
            <span className="text-blue-400">deploy</span>
            <span className="text-orange-400">(</span>
            <span className="text-slate-300">platform</span>
            <span className="text-orange-400">)</span>;
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showCodeCard = false,
  variant = "primary",
}: HeroProps) {
  const buttonClass = variant === "kpkt" ? "bg-kpkt hover:bg-kpkt/90" : "";
  
  if (showCodeCard) {
    return (
      <section className="relative min-h-[600px] overflow-hidden">
        <GridPattern variant={variant} />

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="font-display text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="mt-6 text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
              {(primaryCta || secondaryCta) && (
                <motion.div
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {primaryCta && (
                    <Button asChild size="lg" className={`gap-2 ${buttonClass}`}>
                      <CtaLink href={primaryCta.href}>
                        {primaryCta.label}
                        <ArrowRight className="h-4 w-4" />
                      </CtaLink>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button asChild variant="outline" size="lg">
                      <CtaLink href={secondaryCta.href}>{secondaryCta.label}</CtaLink>
                    </Button>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Right: Code Card */}
            <div className="hidden lg:block">
              <CodeCard />
            </div>
          </div>

          {/* Mobile Code Card */}
          <div className="mt-12 lg:hidden">
            <CodeCard />
          </div>
        </div>
      </section>
    );
  }

  // Default centered hero (for other pages)
  return (
    <section className="relative overflow-hidden">
      <GridPattern variant={variant} />

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="font-display text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          {(primaryCta || secondaryCta) && (
            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {primaryCta && (
                <Button asChild size="lg" className={`gap-2 ${buttonClass}`}>
                  <CtaLink href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </CtaLink>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg">
                  <CtaLink href={secondaryCta.href}>{secondaryCta.label}</CtaLink>
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
