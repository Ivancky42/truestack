"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqSchemaItem } from "@/components/seo/faq-schema";

type LegalFaqProps = {
  items: readonly FaqSchemaItem[];
};

export function LegalFaq({ items }: LegalFaqProps) {
  const t = useTranslations("LegalChrome");
  return (
    <section
      id="faq"
      aria-labelledby="legal-faq-heading"
      className="scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 type-eyebrow text-primary">{t("faq.eyebrow")}</p>
        <h2 id="legal-faq-heading" className="type-h2-sm">
          {t("faq.title")}
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="mt-6 w-full space-y-2.5"
        >
          {items.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="rounded-xl border bg-card px-5 last:border-b data-open:border-primary/20"
            >
              <AccordionTrigger className="py-5 text-left type-ui font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
