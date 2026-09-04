"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaLink } from "@/components/shared/cta-link";
import { publishedFaqItems } from "@/lib/i18n/faq";

export function DigitalLicenseFaq() {
	const t = useTranslations("DigitalLicense");
	const items = publishedFaqItems(
		t.raw("faq.items") as { question: string; answer: string }[],
	);

	return (
		<section
			id="faq"
			aria-labelledby="digital-license-faq-heading"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="type-eyebrow mb-3 text-primary">
						{t("faq.eyebrow")}
					</p>
					<h2
						id="digital-license-faq-heading"
						className="type-h2 text-foreground"
					>
						{t("faq.title")}
					</h2>
					<p className="mt-3.5 text-[17px] text-muted-foreground">
						{t("faq.body")}
					</p>
					<CtaLink
						href="/contact?subject=Digital%20KPKT%20Licence"
						className="mt-[18px] inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
					>
						{t("faq.askCta")}
						<ArrowRight className="h-4 w-4" />
					</CtaLink>
				</motion.div>

				<motion.div
					className="flex flex-col gap-2.5"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<Accordion
						type="single"
						collapsible
						defaultValue="item-0"
						className="w-full space-y-2.5"
					>
						{items.map((faq, index) => (
							<AccordionItem
								key={faq.question}
								value={`item-${index}`}
								className="overflow-hidden rounded-xl border bg-card px-[22px] last:border-b"
							>
								<AccordionTrigger className="py-5 text-left text-[17px] font-semibold hover:no-underline">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-base leading-relaxed text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	);
}
