"use client";

import * as React from "react";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

type ListingPreview = {
  title: string;
  sector: string;
  noteRef: string;
  daysLeft: number;
  funded: number;
  goal: number;
  ratePercent: number;
  tenorDays: number;
  score: string;
};

const SAMPLE_LISTINGS: ListingPreview[] = [
  {
    title: "Invoice financing note",
    sector: "Food & beverage",
    noteRef: "00011",
    daysLeft: 14,
    funded: 3000,
    goal: 24000,
    ratePercent: 15,
    tenorDays: 45,
    score: "A",
  },
  {
    title: "SME working capital",
    sector: "Wholesale & retail",
    noteRef: "00024",
    daysLeft: 9,
    funded: 12000,
    goal: 50000,
    ratePercent: 12,
    tenorDays: 60,
    score: "A+",
  },
  {
    title: "Receivables programme",
    sector: "Logistics",
    noteRef: "00008",
    daysLeft: 21,
    funded: 48000,
    goal: 72000,
    ratePercent: 13.5,
    tenorDays: 90,
    score: "A",
  },
  {
    title: "Manufacturer trade line",
    sector: "Manufacturing",
    noteRef: "00033",
    daysLeft: 6,
    funded: 18500,
    goal: 40000,
    ratePercent: 14,
    tenorDays: 30,
    score: "B+",
  },
  {
    title: "Healthcare supply note",
    sector: "Healthcare supplies",
    noteRef: "00041",
    daysLeft: 18,
    funded: 62000,
    goal: 95000,
    ratePercent: 11.75,
    tenorDays: 75,
    score: "A",
  },
  {
    title: "Tech services bridge",
    sector: "Technology services",
    noteRef: "00019",
    daysLeft: 11,
    funded: 9200,
    goal: 28000,
    ratePercent: 16,
    tenorDays: 45,
    score: "A-",
  },
  {
    title: "Anchor buyer programme",
    sector: "Consumer goods",
    noteRef: "00052",
    daysLeft: 4,
    funded: 71000,
    goal: 88000,
    ratePercent: 12.25,
    tenorDays: 120,
    score: "A+",
  },
];

const AUTO_SCROLL_PX_PER_SEC = 120;

function formatRm(amount: number) {
  return `RM ${amount.toLocaleString("en-MY")}`;
}

function loopSegmentWidth(el: HTMLElement) {
  return el.scrollWidth > 2 ? el.scrollWidth / 2 : 0;
}

function ListingCard({ data }: { data: ListingPreview }) {
  const pct =
    data.goal > 0 ? Math.min(100, Math.round((data.funded / data.goal) * 100)) : 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{data.title}</h3>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Building2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            {data.sector}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FileText className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            Note: {data.noteRef}
          </span>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex justify-end text-xs font-medium text-muted-foreground">
            {data.daysLeft} day(s) left
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${pct}%` }}
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Funding progress"
            />
          </div>
          <div className="flex items-baseline justify-between gap-3 text-sm font-semibold text-foreground">
            <span>Funded {formatRm(data.funded)}</span>
            <span className="text-muted-foreground">Goal {formatRm(data.goal)}</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 divide-x divide-border border-y py-5">
          <div className="px-2 text-center">
            <p className="text-xl font-bold tabular-nums text-foreground md:text-2xl">
              {data.ratePercent}%
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Per annum</p>
          </div>
          <div className="px-2 text-center">
            <p className="text-xl font-bold tabular-nums text-foreground md:text-2xl">
              {data.tenorDays}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Days</p>
          </div>
          <div className="px-2 text-center">
            <p className="text-xl font-bold tabular-nums text-foreground md:text-2xl">
              {data.score}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Score</p>
          </div>
        </div>

        <div className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground opacity-90">
          Invest now
        </div>
        <p className="mt-3 text-center text-[11px] uppercase tracking-wider text-muted-foreground/80">
          Sample UI — not a real listing
        </p>
      </div>
    </article>
  );
}

export function P2PListingsPreview() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const pausedRef = React.useRef(false);

  const [pauseHover, setPauseHover] = React.useState(false);
  const [pauseHiddenTab, setPauseHiddenTab] = React.useState(false);
  const [respectMotion, setRespectMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setRespectMotion(mq.matches);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const onVis = () => setPauseHiddenTab(document.visibilityState === "hidden");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  React.useEffect(() => {
    pausedRef.current = pauseHover || pauseHiddenTab || respectMotion;
  }, [pauseHover, pauseHiddenTab, respectMotion]);

  const normalizeLoop = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const loop = loopSegmentWidth(el);
    if (loop < 1) return;
    while (el.scrollLeft >= loop) {
      el.scrollLeft -= loop;
    }
    while (el.scrollLeft < 0) {
      el.scrollLeft += loop;
    }
  }, []);

  const scrollByCard = React.useCallback((direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.querySelector("[data-listing-slide]") as HTMLElement | null;
    const step = (slide?.getBoundingClientRect().width ?? 320) + 24;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => normalizeLoop();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [normalizeLoop]);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => normalizeLoop());
    ro.observe(el);
    return () => ro.disconnect();
  }, [normalizeLoop]);

  React.useEffect(() => {
    if (respectMotion || SAMPLE_LISTINGS.length < 2) return;

    let raf = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const el = scrollRef.current;
      if (el && !pausedRef.current) {
        const dt = Math.min((now - last) / 1000, 0.064);
        last = now;
        const half = loopSegmentWidth(el);
        if (half > 1) {
          el.scrollLeft += AUTO_SCROLL_PX_PER_SEC * dt;
          while (el.scrollLeft >= half) {
            el.scrollLeft -= half;
          }
        }
      } else {
        last = now;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [respectMotion]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPauseHover(true)}
      onMouseLeave={() => setPauseHover(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-linear-to-r from-background to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-linear-to-l from-background to-transparent md:block" />

      <div
        ref={scrollRef}
        role="region"
        aria-label="Sample P2P investment listings — illustrative UI"
        className="flex gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          paddingLeft:
            "max(1.5rem, calc((100vw - min(100vw, 72rem)) / 2 + 1.5rem))",
          paddingRight:
            "max(1.5rem, calc((100vw - min(100vw, 72rem)) / 2 + 1.5rem))",
        }}
      >
        {SAMPLE_LISTINGS.map((data, i) => (
          <div
            key={`${data.noteRef}-set-a-${i}`}
            data-listing-slide
            className="w-[min(22rem,calc(100vw-3rem))] shrink-0 sm:w-[min(24rem,calc(100vw-3.5rem))] lg:w-[min(26rem,calc(100vw-4rem))]"
          >
            <ListingCard data={data} />
          </div>
        ))}
        {SAMPLE_LISTINGS.map((data, i) => (
          <div
            key={`${data.noteRef}-set-b-${i}`}
            data-listing-slide
            aria-hidden
            className="w-[min(22rem,calc(100vw-3rem))] shrink-0 sm:w-[min(24rem,calc(100vw-3.5rem))] lg:w-[min(26rem,calc(100vw-4rem))]"
          >
            <ListingCard data={data} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Scroll listings left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Scroll listings right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
