"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { Database, Server, Shield, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const complianceFeatures = [
  {
    icon: Database,
    title: "Malaysia Data Residency",
    description:
      "All data hosted on AWS Malaysia region ensuring data sovereignty and regulatory compliance.",
  },
  {
    icon: Server,
    title: "On-Premise Digital Signing",
    description:
      "Dedicated on-premise servers for digital signing as required by KPKT regulations.",
  },
  {
    icon: FileCheck,
    title: "Complete Audit Trails",
    description:
      "Comprehensive logging for every action, ensuring full traceability and compliance.",
  },
  {
    icon: Shield,
    title: "KPKT & SC Licensed",
    description:
      "Platforms built to meet KPKT and SC Malaysia regulatory requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ComplianceSection() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Built for Compliance"
          subtitle="Every platform we build adheres to Malaysian regulatory requirements and international security standards."
          centered
        />
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {complianceFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              className="text-center"
              variants={itemVariants}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

