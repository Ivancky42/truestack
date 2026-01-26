import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export function SectionBadge({ icon: Icon, text, className }: SectionBadgeProps) {
  return (
    <div className={cn("mb-4 flex items-center gap-2", className)}>
      <Icon className="h-5 w-5 text-primary" />
      <span className="text-sm font-semibold uppercase tracking-wide text-primary">
        {text}
      </span>
    </div>
  );
}
