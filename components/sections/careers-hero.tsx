"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/sections/hero";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Laptop,
  Users,
  Sparkles,
} from "lucide-react";

const statPills = (openCount: number) => [
  { icon: Briefcase, label: `${openCount} open roles` },
  { icon: MapPin, label: "KL HQ" },
  { icon: Laptop, label: "Hybrid engineering" },
  { icon: Users, label: "Fresh grads welcome" },
];

export function CareersHero({
  openCount,
}: {
  openCount: number;
}) {
  return (
    <section className="relative overflow-hidden">
      <GridPattern />

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-5 gap-1.5 border-primary/30 bg-primary/5 px-3 py-1 text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              We&apos;re hiring
            </Badge>

            <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Build with us.{" "}
              <span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                Grow with us.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Join Truestack from our KL headquarters — building fintech
              platforms, digital products, and the teams that support them
              across Malaysia.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {statPills(openCount).map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  <pill.icon className="h-3.5 w-3.5 text-primary" />
                  {pill.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="#open-roles">
                  View Open Roles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right — team photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-3/4 overflow-hidden rounded-3xl border shadow-sm"
          >
            <Image
              src="/photos/careers-pairing-laptops.jpg"
              alt="Two developers pairing on laptops at a shared desk"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
