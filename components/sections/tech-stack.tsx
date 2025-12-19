"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export function TechStack() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Modern Tech Stack"
          subtitle="We use battle-tested technologies to build reliable, scalable fintech applications."
          centered
        />
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="inline-flex items-center gap-2 rounded-full border bg-background px-5 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-primary/5 hover:border-primary/50"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* AWS Malaysia callout */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            All infrastructure hosted on <span className="font-medium text-primary">AWS Malaysia</span> for data residency compliance
          </p>
        </motion.div>
      </div>
    </section>
  );
}
