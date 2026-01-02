"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, FileCheck, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index: number;
  isKpkt?: boolean;
}

function AnimatedServiceCard({
  title,
  description,
  icon: Icon,
  href,
  index,
  isKpkt = false,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`group h-full transition-all hover:shadow-md ${
        isKpkt ? "hover:border-kpkt/50" : "hover:border-primary/50"
      }`}>
        <CardHeader>
          <motion.div
            className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg ${
              isKpkt ? "bg-kpkt/10" : "bg-primary/10"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className={`h-6 w-6 ${isKpkt ? "text-kpkt" : "text-primary"}`} />
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="flex-1 text-muted-foreground">{description}</p>
          <Button 
            asChild 
            variant="ghost" 
            className={`w-fit gap-2 px-0 hover:bg-transparent ${
              isKpkt ? "hover:text-kpkt" : "hover:text-primary"
            }`}
          >
            <Link href={href}>
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const services = [
  {
    title: "KPKT Account Management",
    description:
      "We handle regulatory and administrative work so you can focus on growth. License renewals, annual submissions, and compliance coordination.",
    icon: ClipboardCheck,
    href: "/services/account-management",
    isKpkt: true,
  },
  {
    title: "Digital KPKT License",
    description:
      "Transform to a fully digital, KPKT-licensed platform. Operate online and expand nationwide within 6 months.",
    icon: FileCheck,
    href: "/services/digital-license",
    isKpkt: true,
  },
  {
    title: "Custom Software Development",
    description:
      "Full-stack fintech development for P2P lending, digital lending platforms, and payment systems. Built for Malaysia's regulatory landscape.",
    icon: Code2,
    href: "/services/software-development",
    isKpkt: false,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Our Services"
          subtitle="From compliance management to custom software development — everything you need to run and grow your lending business."
          centered
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              index={index}
              isKpkt={service.isKpkt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
