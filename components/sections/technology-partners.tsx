"use client";

import Image from "next/image";
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
    logo: "/logos/ctos.png",
    showName: false, // Logo includes the name
  },
  {
    name: "Regtank",
    category: "Onboarding & AML",
    description:
      "Customer onboarding, AML checks, KYC verification, and compliance screening",
    logo: "/logos/regtank.webp",
    showName: false, // Logo includes the name
  },
  {
    name: "Trustgate",
    category: "e-Signature & e-KYC",
    description:
      "On-premise digital identity verification and Malaysia-compliant e-signatures",
    logo: "/logos/trustgate.png",
    showName: false, // Logo includes the name
  },
  {
    name: "Airwallex",
    category: "Payments",
    description:
      "Payment gateway for international and local payment methods",
    logo: "/logos/airwallex.png",
    showName: false, // Logo includes the name
  },
  {
    name: "Meta",
    category: "Notifications",
    description:
      "WhatsApp notifications for payments, OTP, and marketing",
    logo: "/logos/meta.svg",
    showName: false, // Logo includes the name
  },
  {
    name: "AWS",
    category: "Cloud Hosting",
    description:
      "Cloud hosting on AWS Malaysia for data residency and scalable infrastructure",
    logo: "/logos/aws.svg",
    showName: false, // Logo includes the name
  },
  {
    name: "Infomina",
    category: "SSM Reports",
    description:
      "SSM company reports and business intelligence for due diligence and verification",
    logo: "/logos/infomina.png",
    showName: false, // Logo includes the name
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
                  <Image
                    src="/truestack-logo-transparent.svg"
                    alt="Truestack"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <p className="mb-2 text-sm font-medium text-primary">In-House Expertise</p>
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
                        {partner.logo ? (
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={120}
                            height={32}
                            className="h-6 w-auto shrink-0 object-contain"
                          />
                        ) : (
                          <>
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                              {partner.name.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="font-medium text-foreground">{partner.name}</span>
                          </>
                        )}
                        {partner.logo && partner.showName && (
                          <span className="font-medium text-foreground">{partner.name}</span>
                        )}
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
                      <p className="text-xs text-muted-foreground">We partner with the best to deliver complete solutions</p>
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
