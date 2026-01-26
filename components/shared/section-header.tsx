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
      <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground md:text-xl",
          !centered && "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

