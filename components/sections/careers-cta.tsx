"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CareersCta({ howToApply }: { howToApply: string }) {
  return (
    <section className="pb-14 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary-start to-primary-end px-6 py-10 text-center text-primary-foreground md:px-12 md:py-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="careers-cta-grid"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 32 0 L 0 0 0 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#careers-cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
              Ready to join us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 md:text-base">
              {howToApply}
            </p>
            <p className="mt-2 text-xs text-primary-foreground/70">
              HQ in Kuala Lumpur ·{" "}
              <a
                href="https://truestack.my"
                className="underline underline-offset-2 hover:text-primary-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                truestack.my
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/contact">
                  <MessageSquare className="h-4 w-4" />
                  Apply Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="#open-roles">
                  Browse Roles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
