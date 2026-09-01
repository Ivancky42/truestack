import type { ReactNode } from "react";
import { LegalToc } from "@/components/legal/legal-toc";
import type { LegalTocItem } from "@/lib/legal";

type LegalDocumentProps = {
  toc: readonly LegalTocItem[];
  children: ReactNode;
};

export function LegalDocument({ toc, children }: LegalDocumentProps) {
  return (
    <section className="border-t bg-background py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <div className="hidden lg:block">
          <LegalToc items={toc} />
        </div>
        <div className="lg:hidden">
          <p className="mb-3 type-eyebrow text-primary">On this page</p>
          <ul className="flex flex-wrap gap-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-block rounded-full border bg-card px-3 py-1.5 type-ui text-muted-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <article className="min-w-0 space-y-14 lg:col-start-2">{children}</article>
      </div>
    </section>
  );
}

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <h2 id={`${id}-heading`} className="mb-5 type-h2-sm">
        {title}
      </h2>
      <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
