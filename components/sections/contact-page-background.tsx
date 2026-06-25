"use client";

import { motion } from "framer-motion";

export function ContactPageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-primary/1.5 to-background" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern
            id="contact-page-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="contact-page-dots"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0" cy="0" r="1.25" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-page-grid)" />
        <rect width="100%" height="100%" fill="url(#contact-page-dots)" opacity="0.45" />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse 75% 50% at 50% 12%, var(--primary) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 72%, var(--primary) 0%, transparent 72%)",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-[18%] h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-x-1/2 rounded-full bg-linear-to-r from-primary/15 to-primary/5 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-[48%] h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-linear-to-l from-primary/12 to-transparent blur-3xl"
        animate={{ x: [0, -24, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-24 top-[38%] h-[min(65vw,380px)] w-[min(65vw,380px)] rounded-full bg-linear-to-r from-primary/10 to-transparent blur-3xl"
        animate={{ x: [0, 20, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}
