"use client";

import { motion } from "framer-motion";
import { Server } from "lucide-react";

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

export function TechStack() {
  return (
    <section className="border-t bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Compact header */}
        <motion.div
          className="mb-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Server className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-medium">Modern Tech Stack</h2>
          <span className="text-muted-foreground">—</span>
          <p className="text-muted-foreground">Battle-tested technologies for reliable fintech applications</p>
        </motion.div>

        {/* Tech categories in a row */}
        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {techCategories.map((category) => (
            <div key={category.label} className="text-center">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {category.label}
              </div>
              <div className="flex flex-wrap justify-center gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block rounded-md bg-background px-2.5 py-1 text-sm border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
