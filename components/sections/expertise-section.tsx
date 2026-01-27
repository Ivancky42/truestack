"use client";

import { motion } from "framer-motion";
import { Shield, Code2, Users, Landmark, Cog } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="expertise-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#expertise-grid)" />
      </svg>

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          background: "radial-gradient(ellipse at center top, rgba(99, 102, 241, 0.3) 0%, transparent 70%)"
        }}
      />
      
      {/* Animated gradient orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <GridPattern />
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
            <div className="mb-4 inline-flex items-center justify-center gap-2">
              <Cog className="h-5 w-5 text-indigo-400" />
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
                Full-Stack Fintech Team
              </span>
            </div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
              Our Expertise
            </h2>
          </div>
          <div>
            <p className="text-lg text-slate-400 md:text-xl">
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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 transition-colors group-hover:bg-indigo-500/20">
                <item.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">Modern Tech Stack</h3>
            <p className="text-sm text-slate-400">Battle-tested technologies for reliable fintech applications</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {techCategories.map((category) => (
              <div key={category.label}>
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {category.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-md bg-slate-800/50 px-2 py-0.5 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
