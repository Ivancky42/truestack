import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <h2 className="type-h2">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 type-lede text-muted-foreground",
          !centered && "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

