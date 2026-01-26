"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="cta-grid"
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
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <motion.h2
              className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ready To Launch?
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80 md:text-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let&apos;s discuss how we can help you launch or scale your lending business with compliant, modern technology.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="gap-2"
              >
                <Link href="/contact">
                  <MessageSquare className="h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
