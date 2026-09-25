"use client";

import { useTranslations } from "next-intl";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { publishedFaqItems } from "@/lib/i18n/faq";

/** FAQ accordion for /compare/loan-management-systems (FAQPage schema is rendered by the page). */
export function TrueKreditCompareFaq() {
	const t = useTranslations("TrueKreditCompare");
	const items = publishedFaqItems(
		t.raw("faq.items") as { question: string; answer: string }[],
	);
	if (items.length === 0) return null;

	return (
		<section
			id="faq"
			aria-labelledby="compare-faq-heading"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-3xl px-6">
				<h2 id="compare-faq-heading" className="type-h2">
					{t("faq.title")}
				</h2>
				<Accordion type="single" collapsible className="mt-8 w-full">
					{items.map((faq, index) => (
						<AccordionItem key={faq.question} value={`item-${index}`}>
							<AccordionTrigger className="py-5 text-left text-base font-medium md:text-lg">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-base leading-relaxed text-muted-foreground md:text-lg">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
