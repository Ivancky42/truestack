"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";

const partners = [
  {
    name: "CTOS",
    category: "Credit Intelligence",
    description:
      "Leading credit bureau and risk management solutions for comprehensive financial insights",
  },
  {
    name: "Trustgate",
    category: "e-Signature & e-KYC",
    description:
      "On-premise digital identity verification and Malaysia-compliant e-signatures",
  },
  {
    name: "Airwallex",
    category: "Payments",
    description:
      "Payment gateway for international and local payment methods",
  },
  {
    name: "Meta",
    category: "Notifications",
    description:
      "WhatsApp notifications for payments, OTP, and marketing",
  },
  {
    name: "AWS",
    category: "Cloud Hosting",
    description:
      "Cloud hosting on AWS Malaysia for data residency and scalable infrastructure",
  },
];

const teamRoles = [
  "Full-Stack Web Developers",
  "Backend Engineers",
  "Database Specialists",
  "Cloud & DevOps Engineers",
  "UX/UI Designers",
  "Technical Architects",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function TechnologyPartners() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="In-house Expertise Meets World-class Partnerships"
          subtitle="Our core team of developers, engineers, and designers work seamlessly with industry-leading technology partners to deliver comprehensive, enterprise-grade solutions."
          centered
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Truestack Team Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                    T
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Truestack Team</h3>
                    <p className="text-sm font-medium text-primary">In-House Expertise</p>
                  </div>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Our core team brings deep technical expertise across the full
                  stack, from system architecture to user experience design.
                </p>
                <ul className="space-y-3">
                  {teamRoles.map((role) => (
                    <li key={role} className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-foreground">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technology Partners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="mb-2 text-xl font-semibold">Technology Partners</h3>
                <p className="mb-6 text-muted-foreground">
                  We integrate with best-in-class platforms to extend our
                  capabilities and deliver proven, enterprise-ready solutions.
                </p>
                <motion.div
                  className="grid gap-4 sm:grid-cols-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {partners.map((partner) => (
                    <motion.div
                      key={partner.name}
                      className="rounded-lg border bg-muted/50 p-4 transition-colors hover:border-primary/50 hover:bg-muted"
                      variants={itemVariants}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                          {partner.name.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="font-medium text-foreground">{partner.name}</span>
                      </div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {partner.category}
                      </Badge>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {partner.description}
                      </p>
                    </motion.div>
                  ))}
                  {/* And more indicator */}
                  <motion.div
                    className="flex items-center justify-center rounded-lg border border-dashed bg-muted/30 p-4"
                    variants={itemVariants}
                  >
                    <div className="text-center">
                      <div className="mb-1 text-2xl font-semibold text-primary">+</div>
                      <p className="text-sm font-medium text-muted-foreground">And more</p>
                      <p className="text-xs text-muted-foreground">Additional partners for payments, SMS, and more</p>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
