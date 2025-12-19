"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  Zap,
  Network,
  Plug,
  HeadphonesIcon,
  CheckCircle2,
  Timer,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    icon: Lightbulb,
    description:
      "We dive deep into your business requirements, regulatory needs, and technical constraints to design a robust system architecture.",
    details: [
      "Requirements gathering & stakeholder interviews",
      "System architecture design",
      "Technology stack selection",
      "Compliance & security planning",
      "Third-party vendor evaluation",
    ],
  },
  {
    step: "02",
    title: "Design & Planning",
    icon: PenTool,
    description:
      "From UI/UX to database schemas, we plan every layer of your application with scalability and maintainability in mind.",
    details: [
      "UI/UX design & prototyping",
      "Database schema design",
      "API contract definition",
      "Integration planning with vendors",
      "Sprint planning & timeline",
    ],
  },
  {
    step: "03",
    title: "Development & Integration",
    icon: Code2,
    description:
      "Agile development with continuous integration. We handle all third-party API integrations so you don't have to.",
    details: [
      "Frontend & backend development",
      "Third-party API integrations",
      "Payment gateway setup",
      "KYC/eKYC implementation",
      "Digital signing integration",
    ],
  },
  {
    step: "04",
    title: "Deploy & Support",
    icon: Rocket,
    description:
      "Launch to AWS Malaysia with full monitoring, documentation, and ongoing support to ensure your platform runs smoothly.",
    details: [
      "AWS Malaysia deployment",
      "Performance optimization",
      "Security hardening",
      "Documentation & training",
      "Ongoing maintenance & support",
    ],
  },
];

const advantages = [
  {
    icon: Network,
    title: "System Architecture",
    description: "We design scalable architectures that grow with your business",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless integration with any third-party service or vendor",
  },
  {
    icon: HeadphonesIcon,
    title: "Vendor Management",
    description: "We interface with vendors on your behalf — less headaches for you",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ProcessSection() {
  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Our Process"
          subtitle="A proven, end-to-end approach that takes your project from idea to production — with zero headaches."
          centered
        />

        {/* Speed Advantage Banner */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
            <CardContent className="p-0">
              <div className="grid items-center gap-8 md:grid-cols-2">
                {/* Speed Visual */}
                <div className="relative flex items-center justify-center p-8 md:p-12">
                  <div className="relative">
                    {/* Background circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-48 w-48 rounded-full bg-primary/10 md:h-56 md:w-56" />
                    </div>
                    {/* Progress rings */}
                    <svg className="h-48 w-48 md:h-56 md:w-56" viewBox="0 0 200 200">
                      {/* Others (slower) */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="12"
                        className="text-muted/30"
                        strokeDasharray="502"
                        strokeDashoffset="0"
                        transform="rotate(-90 100 100)"
                      />
                      {/* Truestack (faster) */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="12"
                        className="text-primary"
                        strokeLinecap="round"
                        strokeDasharray="502"
                        initial={{ strokeDashoffset: 502 }}
                        whileInView={{ strokeDashoffset: 251 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        transform="rotate(-90 100 100)"
                      />
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                      >
                        <span className="text-5xl font-bold text-primary md:text-6xl">50%</span>
                        <p className="text-sm font-medium text-muted-foreground">Faster</p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Speed Description */}
                <div className="p-8 md:py-12 md:pr-12">
                  <div className="mb-4 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Speed Advantage
                    </Badge>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                    Ship 50% Faster Than Traditional Agencies
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Our extensive experience in fintech and agile team structure allows us to move fast without 
                    compromising quality. We've built the same systems multiple times — we know what works.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Pre-built components for common fintech patterns",
                      "Streamlined vendor integration processes",
                      "Battle-tested architecture templates",
                      "Experienced team with no learning curve",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Full-Stack Advantages */}
        <motion.div
          className="mb-16 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((advantage) => (
            <motion.div key={advantage.title} variants={itemVariants}>
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-semibold">{advantage.title}</h4>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <motion.div key={step.step} variants={itemVariants} className="relative">
                {/* Timeline connector */}
                <div className="absolute left-[39px] top-0 hidden w-0.5 md:block">
                  {/* Line above (not for first item) */}
                  {index > 0 && (
                    <div className="absolute -top-4 left-0 h-4 w-full bg-primary/30" />
                  )}
                  {/* Line below (not for last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute bottom-0 left-0 h-4 w-full translate-y-full bg-primary/30" />
                  )}
                </div>

                <div className="flex gap-6 pb-8 md:gap-8">
                  {/* Step number with timeline */}
                  <div className="relative flex shrink-0 flex-col items-center">
                    {/* Timeline line above */}
                    {index > 0 && (
                      <div className="absolute -top-8 hidden h-8 w-0.5 bg-gradient-to-b from-primary/20 to-primary md:block" />
                    )}
                    {/* Step circle */}
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                      {step.step}
                    </div>
                    {/* Timeline line below */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden flex-1 w-0.5 bg-gradient-to-b from-primary to-primary/20 md:block" style={{ minHeight: "calc(100% - 5rem)" }} />
                    )}
                  </div>

                  {/* Content card */}
                  <Card className="flex-1 overflow-hidden">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="mb-4 text-muted-foreground">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {detail}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 rounded-2xl border bg-muted/30 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TrendingUp className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-3 text-2xl font-bold">Truly Full-Stack. Zero Headaches.</h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We handle everything — from system architecture to vendor negotiations, API integrations to 
            compliance requirements. You focus on your business, we handle the tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

