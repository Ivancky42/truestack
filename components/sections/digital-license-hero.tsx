"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  Globe,
  MapPin,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

function CtaLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
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

const STATES = [
  "Johor", "Kedah", "Kelantan", "Melaka", "N. Sembilan",
  "Pahang", "Penang", "Perak", "Perlis", "Sabah",
  "Sarawak", "Selangor", "Terengganu", "KL", "Putrajaya", "Labuan",
];

function CoverageIllustration({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const initial = setTimeout(() => setExpanded(true), 1200);
    const interval = setInterval(() => {
      setExpanded((v) => !v);
    }, 4000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  const glowX = useSpring(useTransform(mouseX, (v) => v), {
    stiffness: 100,
    damping: 25,
  });
  const glowY = useSpring(useTransform(mouseY, (v) => v), {
    stiffness: 100,
    damping: 25,
  });

  return (
    <div className="relative">
      <motion.div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]: number[]) =>
              `radial-gradient(300px circle at ${gx}px ${gy}px, var(--color-primary) 0%, transparent 70%)`
          ),
          opacity: 0.06,
          borderRadius: "1rem",
        }}
      />

      <div className="space-y-3">
        {/* Coverage visualization card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-border/60 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  animate={{
                    backgroundColor: expanded
                      ? "var(--color-primary)"
                      : "var(--color-muted)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {expanded ? (
                      <motion.div
                        key="globe"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Globe className="h-4 w-4 text-primary-foreground" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="building"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={expanded ? "d" : "t"}
                      className="text-sm font-medium"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expanded ? "Nationwide Coverage" : "Single Branch"}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-xs text-muted-foreground">
                    {expanded ? "Digital License" : "Traditional License"}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={() => setExpanded((v) => !v)}
                className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {expanded ? "Go Digital" : "Before"}
              </motion.button>
            </div>

            {/* Radial coverage visualization */}
            <div className="relative flex items-center justify-center py-6">
              <svg viewBox="0 0 240 240" className="h-48 w-48 sm:h-56 sm:w-56">
                <defs>
                  <radialGradient id="coverageFill" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
                    <stop offset="70%" stopColor="var(--color-primary)" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Expanding rings */}
                {expanded && [100, 80, 60].map((r, i) => (
                  <motion.circle
                    key={r}
                    cx="120"
                    cy="120"
                    r={r}
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    initial={{ r: 10, opacity: 0 }}
                    animate={{ r, opacity: 0.25 - i * 0.05 }}
                    exit={{ r: 10, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.15 }}
                  />
                ))}

                {/* Coverage fill */}
                <AnimatePresence>
                  {expanded && (
                    <motion.circle
                      cx="120"
                      cy="120"
                      r="100"
                      fill="url(#coverageFill)"
                      initial={{ r: 10, opacity: 0 }}
                      animate={{ r: 100, opacity: 1 }}
                      exit={{ r: 10, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  )}
                </AnimatePresence>

                {/* Center pin — always visible */}
                <motion.circle
                  cx="120"
                  cy="120"
                  r="6"
                  fill={expanded ? "var(--color-primary)" : "var(--color-muted-foreground)"}
                  transition={{ duration: 0.3 }}
                />
                <motion.circle
                  cx="120"
                  cy="120"
                  r="6"
                  fill="none"
                  stroke={expanded ? "var(--color-primary)" : "var(--color-muted-foreground)"}
                  strokeWidth="1.5"
                  animate={{
                    r: [6, expanded ? 20 : 16, 6],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />

                {/* Satellite dots when expanded — placed on rings */}
                <AnimatePresence>
                  {expanded &&
                    Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i * 30 - 90) * (Math.PI / 180);
                      const ring = i % 3 === 0 ? 60 : i % 3 === 1 ? 80 : 100;
                      const cx = 120 + Math.cos(angle) * ring;
                      const cy = 120 + Math.sin(angle) * ring;
                      return (
                        <motion.circle
                          key={i}
                          cx={cx}
                          cy={cy}
                          r="3"
                          fill="var(--color-primary)"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.8 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.3 + i * 0.05,
                            type: "spring",
                            stiffness: 300,
                          }}
                        />
                      );
                    })}
                </AnimatePresence>

                {/* Connection lines from center to satellite dots */}
                <AnimatePresence>
                  {expanded &&
                    Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i * 30 - 90) * (Math.PI / 180);
                      const ring = i % 3 === 0 ? 60 : i % 3 === 1 ? 80 : 100;
                      const x2 = 120 + Math.cos(angle) * ring;
                      const y2 = 120 + Math.sin(angle) * ring;
                      return (
                        <motion.line
                          key={i}
                          x1="120"
                          y1="120"
                          x2={x2}
                          y2={y2}
                          stroke="var(--color-primary)"
                          strokeWidth="0.5"
                          strokeDasharray="2 3"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.15 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                        />
                      );
                    })}
                </AnimatePresence>
              </svg>

              {/* Labels around the visualization */}
              <AnimatePresence>
                {!expanded && (
                  <motion.div
                    className="absolute inset-0 flex items-end justify-center pb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      <MapPin className="mr-1 inline h-3 w-3" />1 branch in KL
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* State badges grid */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {STATES.map((state, i) => (
                <motion.span
                  key={state}
                  className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
                  animate={{
                    borderColor: expanded
                      ? "var(--color-primary)"
                      : "var(--color-border)",
                    backgroundColor: expanded
                      ? "color-mix(in srgb, var(--color-primary) 8%, transparent)"
                      : "transparent",
                    color: expanded
                      ? "var(--color-primary)"
                      : "var(--color-muted-foreground)",
                  }}
                  transition={{ duration: 0.3, delay: expanded ? 0.3 + i * 0.03 : 0 }}
                >
                  {state}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Bottom row: key metrics */}
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              icon: MapPin,
              before: "1 Location",
              after: "16 States",
              label: "Coverage",
              delay: 0.35,
            },
            {
              icon: Smartphone,
              before: "In-Person",
              after: "Web & App",
              label: "Channels",
              delay: 0.45,
            },
            {
              icon: ShieldCheck,
              before: "Traditional",
              after: "KPKT Digital",
              label: "License",
              delay: 0.55,
            },
          ].map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: metric.delay }}
            >
              <Card className="border-border/60 bg-card/80 px-3 py-3 shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                  <metric.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={expanded ? metric.after : metric.before}
                    className="text-sm font-semibold leading-tight"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expanded ? (
                      <span className="text-primary">{metric.after}</span>
                    ) : (
                      metric.before
                    )}
                  </motion.p>
                </AnimatePresence>
                <p className="text-[11px] text-muted-foreground">{metric.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DigitalLicenseHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-primary/3 via-transparent to-transparent" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dlHeroGrid"
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
          <rect width="100%" height="100%" fill="url(#dlHeroGrid)" />
        </svg>
        <motion.div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-primary/5 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24 lg:py-32">
        <div
          ref={containerRef}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="font-display text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Go Digital.{" "}
              <span className="text-primary">Serve All of Malaysia.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Convert your traditional KPKT money lending license to digital and
              expand from local branches to nationwide operations — complete
              with web platform, mobile apps, and full regulatory compliance in
              ~3 months.
            </motion.p>

            {/* Desktop CTAs */}
            <motion.div
              className="mt-10 hidden flex-col gap-4 sm:flex-row sm:items-center lg:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild size="lg" className="gap-2">
                <CtaLink href="/contact">
                  Start Your Conversion
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-muted-foreground"
              >
                <CtaLink href="#timeline">See the 3-Month Plan</CtaLink>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Coverage Illustration */}
          <div className="relative">
            <CoverageIllustration mouseX={mouseX} mouseY={mouseY} />
          </div>

          {/* Mobile CTAs */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="gap-2">
              <CtaLink href="/contact">
                Start Your Conversion
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-muted-foreground"
            >
              <CtaLink href="#timeline">See the 3-Month Plan</CtaLink>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
