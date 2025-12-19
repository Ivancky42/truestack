import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted",
        className
      )}
    >
      <span>{name}</span>
    </div>
  );
}

