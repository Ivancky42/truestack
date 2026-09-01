import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { coveredSystems } from "@/lib/legal";
import { cn } from "@/lib/utils";

type LegalCalloutProps = {
  icon: LucideIcon;
  children: ReactNode;
  tone?: "info" | "caution";
};

export function LegalCallout({
  icon: Icon,
  children,
  tone = "info",
}: LegalCalloutProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border p-4",
        tone === "caution"
          ? "border-amber-600/20 bg-amber-600/5"
          : "border-primary/20 bg-primary/5",
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 h-5 w-5 shrink-0",
          tone === "caution" ? "text-amber-600" : "text-primary",
        )}
        aria-hidden
      />
      <div className="type-ui text-foreground">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type LegalCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
};

export function LegalCard({ icon: Icon, title, children }: LegalCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" aria-hidden />
        </span>
        <p className="type-card-title text-[1.05rem]">{title}</p>
      </div>
      <p className="type-ui text-muted-foreground">{children}</p>
    </div>
  );
}

export function CoveredSystems() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {coveredSystems.map((system) => (
        <li
          key={system.host}
          className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-sm"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <system.icon className="h-4 w-4 text-primary" aria-hidden />
          </span>
          <div className="min-w-0">
            <code className="font-mono text-sm text-foreground">{system.host}</code>
            <p className="mt-0.5 type-ui text-muted-foreground">{system.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
