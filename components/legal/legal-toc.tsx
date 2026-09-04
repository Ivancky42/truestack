"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { LegalTocItem } from "@/lib/legal";
import { cn } from "@/lib/utils";

type LegalTocProps = {
  items: readonly LegalTocItem[];
};

export function LegalToc({ items }: LegalTocProps) {
  const t = useTranslations("LegalChrome");
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    for (const heading of headings) observer.observe(heading);
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={t("onThisPage")} className="lg:sticky lg:top-28">
      <p className="mb-3 type-eyebrow text-primary">{t("onThisPage")}</p>
      <ul className="space-y-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-px block border-l py-1.5 pl-4 type-ui transition-colors",
                activeId === item.id
                  ? "border-primary font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
