"use client";

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
  roles,
}: {
  openCount: number;
  roles: { title: string; department: string }[];
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

          {/* Right — open roles preview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/10 to-primary/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-lg">
              <div className="border-b bg-linear-to-r from-primary-start to-primary-end px-5 py-4 text-primary-foreground">
                <p className="text-sm font-medium opacity-90">Open Positions</p>
                <p className="font-display text-3xl font-medium">{openCount}</p>
              </div>
              <div className="space-y-2 p-4">
                {roles.map((role, i) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    className="flex items-center justify-between gap-2 rounded-lg border bg-muted/30 px-3 py-2.5 text-sm"
                  >
                    <span className="truncate font-medium">{role.title}</span>
                    <Badge
                      variant="outline"
                      className="shrink-0 border-primary/20 bg-primary/5 text-[10px] text-primary"
                    >
                      {role.department}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <div className="border-t px-4 py-3">
                <Link
                  href="#open-roles"
                  className="flex items-center justify-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  See all roles
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
