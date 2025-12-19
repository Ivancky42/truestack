"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, CreditCard, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

function AnimatedServiceCard({
  title,
  description,
  icon: Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader>
          <motion.div
            className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="h-6 w-6 text-primary" />
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const services = [
  {
    title: "Digital Lending Platforms",
    description:
      "End-to-end loan management systems with KPKT and SC Malaysia compliance. From application to disbursement, fully licensed and audit-ready.",
    icon: Landmark,
  },
  {
    title: "Payment Solutions",
    description:
      "Secure payment gateway integrations and transaction processing. Built with Malaysia data residency and complete audit trails.",
    icon: CreditCard,
  },
  {
    title: "Financial Applications",
    description:
      "Custom fintech software tailored to your business. P2P lending, credit scoring, and more — built for scale and security.",
    icon: Building2,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="What We Build"
          subtitle="We specialize in building fintech software that powers digital lending and payment solutions."
          centered
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
