"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  FileSpreadsheet,
  Building2,
  Users,
  Bell,
  ShieldCheck,
  Stamp,
  CreditCard,
  Landmark,
  Scale,
  Blocks,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface BuildingBlock {
  label: string;
  icon: LucideIcon;
}

const buildingBlocks: BuildingBlock[] = [
  { label: "e-KYC", icon: Fingerprint },
  { label: "Credit\nReporting", icon: CreditCard },
  { label: "SSM Business\nData", icon: Building2 },
  { label: "Attestation", icon: Stamp },
  { label: "Compliance", icon: ShieldCheck },
  { label: "Notifications", icon: Bell },
  { label: "Borrower\nOrigination", icon: Users },
  { label: "Document\nGeneration", icon: FileSpreadsheet },
  { label: "& More", icon: Blocks },
];

interface Product {
  name: string;
  tagline: string;
  icon: LucideIcon;
}

const products: Product[] = [
  { name: "TrueKredit™", tagline: "Lending Systems", icon: Landmark },
  { name: "TrueKredit™ Pro", tagline: "Digital Lending Stack", icon: Blocks },
  { name: "e-Sumpah", tagline: "Legal-Tech Platform", icon: Scale },
  { name: "Landbank.my", tagline: "Proptech Platform", icon: Building2 },
];

function BlockItem({ block, index }: { block: BuildingBlock; index: number }) {
  const angle = (index * 360) / buildingBlocks.length - 90;
  const radius = 148;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <g>
      <line
        x1={0}
        y1={0}
        x2={x}
        y2={y}
        stroke="currentColor"
        className="text-primary/20"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle
        cx={x}
        cy={y}
        r="38"
        fill="white"
        stroke="currentColor"
        className="text-primary/30"
        strokeWidth="1.5"
      />
      <foreignObject x={x - 16} y={y - 22} width={32} height={24} overflow="visible">
        <div className="flex h-full w-full items-center justify-center text-primary" style={{ width: 32, height: 24 }}>
          <block.icon size={18} strokeWidth={1.8} />
        </div>
      </foreignObject>
      {block.label.split("\n").map((line, i) => (
        <text
          key={i}
          x={x}
          y={y + 10 + i * 12}
          textAnchor="middle"
          className="fill-foreground text-[9px] font-semibold"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function ProductBubble({ product, index }: { product: Product; index: number }) {
  const positions = [
    { x: -280, y: -80 },
    { x: 280, y: -80 },
    { x: -280, y: 100 },
    { x: 280, y: 100 },
  ];
  const pos = positions[index];

  return (
    <g>
      <line
        x1={pos.x > 0 ? pos.x - 60 : pos.x + 60}
        y1={pos.y + 10}
        x2={pos.x > 0 ? 160 : -160}
        y2={pos.y > 0 ? 60 : -60}
        stroke="currentColor"
        className="text-primary/15"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <rect
        x={pos.x - 64}
        y={pos.y - 28}
        width={128}
        height={76}
        rx="16"
        className="fill-primary/5"
      />
      <rect
        x={pos.x - 64}
        y={pos.y - 28}
        width={128}
        height={76}
        rx="16"
        fill="none"
        stroke="currentColor"
        className="text-primary/20"
        strokeWidth="1.5"
      />
      <foreignObject x={pos.x - 60} y={pos.y - 24} width={120} height={68} overflow="visible">
        <div className="flex h-full w-full flex-col items-center justify-center text-center" style={{ width: 120, height: 68 }}>
          <product.icon size={20} strokeWidth={1.6} className="mb-1 shrink-0 text-primary" />
          <span className="text-[11px] font-bold leading-tight text-foreground">{product.name}</span>
          <span className="text-[9px] leading-tight text-muted-foreground">{product.tagline}</span>
        </div>
      </foreignObject>
    </g>
  );
}

function CoreDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-3xl" style={{ minHeight: 320 }}>
      <svg viewBox="-380 -220 760 440" className="w-full aspect-760/440" preserveAspectRatio="xMidYMid meet" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={0} cy={0} r="220" fill="url(#core-glow)" />

        <g transform="translate(0, 0)">
          <circle
            cx={0}
            cy={0}
            r="168"
            fill="none"
            stroke="currentColor"
            className="text-primary/10"
            strokeWidth="1"
          />

          {buildingBlocks.map((block, i) => (
            <BlockItem key={block.label} block={block} index={i} />
          ))}

          <circle cx={0} cy={0} r="58" fill="white" stroke="currentColor" className="text-primary" strokeWidth="2.5" />
          <circle cx={0} cy={0} r="50" fill="none" stroke="currentColor" className="text-primary/30" strokeWidth="1" />

          <text x={0} y={-10} textAnchor="middle" className="fill-primary text-[11px] font-bold">
            Truestack Core™
          </text>
          <text x={0} y={6} textAnchor="middle" className="fill-foreground text-[10px] font-medium">
            Infrastructure
          </text>
        </g>

        {products.map((product, i) => (
          <ProductBubble key={product.name} product={product} index={i} />
        ))}
      </svg>
    </div>
  );
}

interface CoreInfrastructureProps {
  title?: string;
  description?: string;
}

export function CoreInfrastructure({ title, description }: CoreInfrastructureProps = {}) {
  return (
    <section className="border-t py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Platform Architecture
          </p>
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            {title ?? "Built on Truestack Core™"}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {description ??
              "Our solutions across lending, legal-tech, property-finance, and enterprise digital transaction platforms are built upon our core infrastructure building blocks — dramatically reducing build cost and time to market for every new opportunity."}
          </p>
        </motion.div>

        <div className="mt-16">
          <CoreDiagram />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-card p-5 text-center shadow-sm">
            <p className="font-display text-3xl font-semibold text-primary">9+</p>
            <p className="mt-1 text-sm text-muted-foreground">Shared infrastructure modules</p>
          </div>
          <div className="rounded-xl border bg-card p-5 text-center shadow-sm">
            <p className="font-display text-3xl font-semibold text-primary">60%</p>
            <p className="mt-1 text-sm text-muted-foreground">Faster time to market on new platforms</p>
          </div>
          <div className="rounded-xl border bg-card p-5 text-center shadow-sm">
            <p className="font-display text-3xl font-semibold text-primary">4</p>
            <p className="mt-1 text-sm text-muted-foreground">Product verticals powered by one core</p>
          </div>
        </div>
      </div>
    </section>
  );
}
