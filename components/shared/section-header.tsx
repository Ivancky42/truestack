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
        centered && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground",
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

