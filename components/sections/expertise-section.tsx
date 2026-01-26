"use client";

import { motion } from "framer-motion";
import { Shield, Code2, Users, Landmark, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionBadge } from "@/components/shared/section-badge";

interface ExpertiseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    icon: Shield,
    title: "Fintech Expertise",
    description:
      "Deep understanding of Malaysia's fintech regulatory landscape. We've helped operators navigate compliance and go digital.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end fintech development — web platforms, mobile apps, APIs, and integrations. Built for performance and scale.",
  },
  {
    icon: Landmark,
    title: "End-to-End Delivery",
    description:
      "From requirements to deployment and maintenance, we handle everything so you can focus on your business.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description:
      "We work closely with your team, providing regular updates and adapting to your needs throughout our engagement.",
  },
];

const techCategories = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "iOS", "Android"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Redis"],
  },
  {
    label: "Cloud",
    items: ["AWS Malaysia", "DigitalOcean", "Docker"],
  },
];

export function ExpertiseSection() {
  return (
    <section className="border-t bg-muted/30 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12 grid gap-6 md:grid-cols-2 md:items-end md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <SectionBadge icon={Cpu} text="Full-Stack Fintech Team" />
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              Our Expertise
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground md:text-xl">
              A specialized team combining regulatory knowledge with strong technical capabilities to deliver compliant fintech solutions.
            </p>
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-12 rounded-2xl border bg-background p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Modern Tech Stack</h3>
            <p className="text-sm text-muted-foreground">Battle-tested technologies for reliable fintech applications</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {techCategories.map((category) => (
              <div key={category.label}>
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {category.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-md bg-muted/50 px-2 py-0.5 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual connector to next section */}
        <div className="mt-16 flex justify-center">
          <motion.div
            className="h-12 w-px bg-gradient-to-b from-border to-transparent"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}
