"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Calculator,
  CreditCard,
  FileText,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";

const highlights = [
  { icon: Shield, text: "KPKT Audit-Ready" },
  { icon: FileText, text: "Auto Generate Jadual J and K" },
  { icon: Calculator, text: "Auto Loan Scheduling" },
];

export function TrueKreditPromo() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionBadge icon={CreditCard} text="Loan Management" />
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            TrueKredit™
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Purpose-built loan management system for Malaysian KPKT-licensed
            money lenders. Manage borrowers, loans, compliance and audits — with
            optional borrower web, mobile apps, and on-premises digital signing
            in <span className="font-medium text-foreground">TrueKredit Pro</span>.
          </p>
          {/* Two editions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              TrueKredit — Multi-tenant SaaS
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-700">
              <Award className="h-4 w-4" />
              TrueKredit Pro — Dedicated AWS
            </span>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{item.text}</h3>
            </motion.div>
          ))}
        </div>

        {/* Screenshot & CTA */}
        <motion.div
          className="grid gap-8 rounded-2xl border bg-background p-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Screenshot — dark chrome to match the admin dashboard */}
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-lg">
            {/* Browser header */}
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
                app.truekredit.my
              </div>
            </div>
            {/* Screenshot */}
            <Image
              src="/truekredit/dashboard_screenshot.png"
              alt="TrueKredit Loan Management System"
              width={600}
              height={400}
              className="w-full"
            />
          </div>

          {/* CTA Content */}
          <div className="flex flex-col justify-center gap-4 md:pl-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold">End-to-End Loan Management</h3>
              <p className="text-muted-foreground">
                From customer enquiry to final payment — handle the entire loan lifecycle with
                automated compliance reporting, instalment calculations, and audit-ready records.
              </p>
            </div>
            <ul className="space-y-2">
              {[
                "Customer enquiry & document capture",
                "Loan calculation & approval workflow",
                "Repayment tracking & collections",
                "Lampiran A & iDEAL CSV export",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            {/* Pro callout */}
            <div className="mt-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15">
                  <Award className="h-4 w-4 text-violet-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Need a Digital KPKT Licence?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    TrueKredit Pro adds borrower web, native mobile apps, and
                    on-prem digital signing on a dedicated AWS deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <Link href="/truekredit">
                  Explore TrueKredit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/truekredit#pro">See TrueKredit Pro</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
