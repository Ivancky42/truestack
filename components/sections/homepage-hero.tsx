"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Wallet, Users, ShieldCheck } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ─── Mock data ────────────────────────────────────────────────────────────────

const CHART_POINTS = [
  12, 18, 15, 28, 24, 38, 34, 46, 42, 55, 52, 64, 60, 72, 78, 85, 82, 90, 88, 95,
];

// Metric definitions with min (start) and max (end) numeric values for interpolation
const METRIC_DEFS = [
  {
    label: "Active Loans",
    min: 340,
    max: 2847,
    format: (v: number) => Math.round(v).toLocaleString(),
    suffix: "",
    change: "+120.3%",
    icon: Users,
    delay: 0.3,
  },
  {
    label: "Portfolio Value",
    min: 5.1,
    max: 48.2,
    format: (v: number) => `RM ${v.toFixed(1)}M`,
    suffix: "",
    change: "+691.7%",
    icon: Wallet,
    delay: 0.45,
  },
  {
    label: "Repayment Rate",
    min: 78.2,
    max: 99.4,
    format: (v: number) => `${v.toFixed(1)}%`,
    suffix: "",
    change: "+10.1%",
    icon: TrendingUp,
    delay: 0.6,
  },
  {
    label: "Compliance",
    min: 100,
    max: 100,
    format: (v: number) => `${Math.round(v)}%`,
    suffix: "",
    change: "Safe",
    icon: ShieldCheck,
    delay: 0.75,
  },
];

// ─── SVG chart path builder ───────────────────────────────────────────────────

function buildChartPath(
  points: number[],
  width: number,
  height: number,
  padding = 8
): { line: string; area: string; coords: { x: number; y: number }[] } {
  const maxVal = Math.max(...points);
  const minVal = Math.min(...points);
  const range = maxVal - minVal || 1;

  const coords = points.map((p, i) => ({
    x: padding + (i / (points.length - 1)) * (width - padding * 2),
    y: padding + (1 - (p - minVal) / range) * (height - padding * 2),
  }));

  let line = `M ${coords[0].x},${coords[0].y}`;
  for (let i = 1; i < coords.length; i++) {
    const prev = coords[i - 1];
    const curr = coords[i];
    const cpx = (prev.x + curr.x) / 2;
    line += ` C ${cpx},${prev.y} ${cpx},${curr.y} ${curr.x},${curr.y}`;
  }

  const lastCoord = coords[coords.length - 1];
  const area =
    line + ` L ${lastCoord.x},${height} L ${coords[0].x},${height} Z`;

  return { line, area, coords };
}

// Interpolate a Y value along the chart at a given normalized progress (0–1)
function interpolateChart(points: number[], progress: number): number {
  const idx = progress * (points.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.min(lo + 1, points.length - 1);
  const t = idx - lo;
  return points[lo] + (points[hi] - points[lo]) * t;
}

// ─── Metric Card ──────────────────────────────────────────────────────────────

function MetricCard({
  label,
  displayValue,
  change,
  icon: Icon,
  delay,
  mouseX,
  mouseY,
  containerRef,
}: {
  label: string;
  displayValue: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  delay: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const unsubX = mouseX.on("change", (latestX) => {
      if (!cardRef.current || !containerRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2 - containerRect.left;
      const cardCenterY = rect.top + rect.height / 2 - containerRect.top;
      const dx = latestX - cardCenterX;
      const dy = mouseY.get() - cardCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 400;
      const factor = Math.max(0, 1 - distance / maxDist);
      x.set(dx * factor * 0.04);
      y.set(dy * factor * 0.04);
    });

    return unsubX;
  }, [mouseX, mouseY, containerRef, x, y]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ x: springX, y: springY }}
    >
      <Card className="relative gap-3 overflow-hidden border-border/60 bg-card/80 px-4 py-4 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
          <span className="text-xs font-medium text-emerald-600">{change}</span>
        </div>
        <div className="pl-10">
          <span className="text-2xl font-semibold tracking-tight tabular-nums">
            {displayValue}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

// ─── Growth Chart ─────────────────────────────────────────────────────────────

const CHART_WIDTH = 480;
const CHART_HEIGHT = 200;
const CHART_PADDING = 8;

function GrowthChart({
  mouseX,
  mouseY,
  progress,
  chartHovered,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  progress: number;
  chartHovered: boolean;
}) {
  const { line, area, coords } = buildChartPath(
    CHART_POINTS,
    CHART_WIDTH,
    CHART_HEIGHT,
    CHART_PADDING
  );

  // Compute the scrubber position along the chart
  const scrubIdx = progress * (coords.length - 1);
  const lo = Math.floor(scrubIdx);
  const hi = Math.min(lo + 1, coords.length - 1);
  const t = scrubIdx - lo;
  const scrubX = coords[lo].x + (coords[hi].x - coords[lo].x) * t;
  const scrubY = coords[lo].y + (coords[hi].y - coords[lo].y) * t;

  // Interpolated point value for the tooltip
  const pointValue = interpolateChart(CHART_POINTS, progress);
  const growthPct = ((pointValue / CHART_POINTS[0]) * 100 - 100).toFixed(1);

  // Radial glow follows cursor
  const glowX = useSpring(useTransform(mouseX, (v) => v), {
    stiffness: 100,
    damping: 25,
  });
  const glowY = useSpring(useTransform(mouseY, (v) => v), {
    stiffness: 100,
    damping: 25,
  });

  // Clip path that reveals the chart up to the scrub point
  const clipRight = chartHovered
    ? `inset(0 ${CHART_WIDTH - scrubX}px 0 0)`
    : "inset(0 0 0 0)";

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-border/60 bg-card/80 p-5 shadow-sm backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      {/* Radial glow that follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]: number[]) =>
              `radial-gradient(300px circle at ${gx}px ${gy}px, var(--color-primary) 0%, transparent 70%)`
          ),
          opacity: 0.06,
        }}
      />

      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">Portfolio Growth</p>
          <p className="text-xs text-muted-foreground">Last 12 months</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium tabular-nums text-emerald-700">
          <TrendingUp className="h-3 w-3" />
          {chartHovered ? `+${growthPct}%` : "+691.7%"}
        </div>
      </div>

      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        className="w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="chartGradientDim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Dimmed full area (shown when hovered to give context) */}
        {chartHovered && (
          <path
            d={area}
            fill="url(#chartGradientDim)"
          />
        )}

        {/* Dimmed full line (shown when hovered) */}
        {chartHovered && (
          <path
            d={line}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.15}
          />
        )}

        {/* Active area fill — clipped to scrub position when hovered */}
        <g style={{ clipPath: clipRight }}>
          <motion.path
            d={area}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />

          {/* Active line */}
          <motion.path
            d={line}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          />
        </g>

        {/* Scrubber line + dot when hovered */}
        {chartHovered && (
          <>
            <line
              x1={scrubX}
              y1={CHART_PADDING}
              x2={scrubX}
              y2={CHART_HEIGHT - CHART_PADDING}
              stroke="var(--color-primary)"
              strokeWidth="1"
              strokeDasharray="4 3"
              opacity={0.3}
            />
            <circle
              cx={scrubX}
              cy={scrubY}
              r="6"
              fill="white"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
            />
            {/* Pulsing ring around scrub dot */}
            <circle
              cx={scrubX}
              cy={scrubY}
              r="6"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              opacity={0.3}
            >
              <animate
                attributeName="r"
                values="6;14;6"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0;0.3"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}

        {/* Static end dot (only when not hovered) */}
        {!chartHovered && (() => {
          const lastCoord = coords[coords.length - 1];
          return (
            <>
              <motion.circle
                cx={lastCoord.x}
                cy={lastCoord.y}
                r="5"
                fill="var(--color-primary)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.0 }}
              />
              <motion.circle
                cx={lastCoord.x}
                cy={lastCoord.y}
                r="5"
                fill="var(--color-primary)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{
                  duration: 2,
                  delay: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </>
          );
        })()}
      </svg>
    </motion.div>
  );
}

// ─── CTA helper ───────────────────────────────────────────────────────────────

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

// ─── Main Component ───────────────────────────────────────────────────────────

export function HomepageHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartAreaRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Progress: 0 = start of chart, 1 = end. Defaults to 1 (show full chart).
  const [progress, setProgress] = useState(1);
  const [chartHovered, setChartHovered] = useState(false);

  // Smooth the progress for the metric numbers
  const progressMotion = useMotionValue(1);
  const progressSpring = useSpring(progressMotion, { stiffness: 120, damping: 18 });
  const [displayProgress, setDisplayProgress] = useState(1);

  // Subscribe to spring changes to update display values
  useEffect(() => {
    const unsub = progressSpring.on("change", (v) => {
      setDisplayProgress(v);
    });
    return unsub;
  }, [progressSpring]);

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

  // Chart area mouse tracking — converts mouse X within chart to a 0–1 progress
  const handleChartMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!chartAreaRef.current) return;
      const rect = chartAreaRef.current.getBoundingClientRect();
      // Account for padding (p-5 = 20px)
      const paddingX = 20;
      const innerLeft = rect.left + paddingX;
      const innerWidth = rect.width - paddingX * 2;
      const relX = e.clientX - innerLeft;
      const p = Math.max(0.02, Math.min(1, relX / innerWidth));
      setProgress(p);
      progressMotion.set(p);
      setChartHovered(true);
    },
    [progressMotion]
  );

  const handleChartMouseLeave = useCallback(() => {
    setProgress(1);
    progressMotion.set(1);
    setChartHovered(false);
  }, [progressMotion]);

  // Compute interpolated metric values based on displayProgress
  const metricValues = METRIC_DEFS.map((m) => {
    const val = m.min + (m.max - m.min) * displayProgress;
    return m.format(val);
  });

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
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
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
          {/* ── Left: Text Content ── */}
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
              Build &amp; Scale Your Lending Business
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              End-to-end lending software, compliance services, and infrastructure
              to operate and grow in Malaysia&apos;s regulated lending space.
            </motion.p>

            {/* CTAs — hidden on mobile, shown on desktop alongside text */}
            <motion.div
              className="mt-10 hidden flex-col gap-4 sm:flex-row sm:items-center lg:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild size="lg" className="gap-2">
                <CtaLink href="/contact">
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-muted-foreground">
                <CtaLink href="#what-we-do">What We Do</CtaLink>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: Growth Visual ── */}
          <div className="relative">
            {/* Chart — with its own mouse tracking for scrubbing */}
            <div
              ref={chartAreaRef}
              className="cursor-crosshair"
              onMouseMove={handleChartMouseMove}
              onMouseLeave={handleChartMouseLeave}
            >
              <GrowthChart
                mouseX={mouseX}
                mouseY={mouseY}
                progress={progress}
                chartHovered={chartHovered}
              />
            </div>

            {/* Metric cards grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {METRIC_DEFS.map((metric, i) => (
                <MetricCard
                  key={metric.label}
                  label={metric.label}
                  displayValue={metricValues[i]}
                  change={metric.change}
                  icon={metric.icon}
                  delay={metric.delay}
                  mouseX={mouseX}
                  mouseY={mouseY}
                  containerRef={containerRef}
                />
              ))}
            </div>
          </div>

          {/* ── Mobile CTAs — shown below chart on small screens ── */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="gap-2">
              <CtaLink href="/contact">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground">
              <CtaLink href="#what-we-do">View Features</CtaLink>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
