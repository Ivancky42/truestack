"use client";

import { motion } from "framer-motion";

export function AboutHeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.623 0.214 259.815 / 0.35), transparent 55%)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full text-white opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern
            id="about-hero-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
      </svg>

      <motion.div
        className="absolute -left-1/4 top-1/4 h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-primary/25 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[min(85vw,480px)] w-[min(85vw,480px)] rounded-full bg-kpkt/20 blur-3xl"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1.05, 1, 1.05],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/20 to-zinc-950" />
    </div>
  );
}
