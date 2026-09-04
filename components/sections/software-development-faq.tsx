"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/shared/section-badge";

export function SoftwareDevelopmentFaq() {
	const t = useTranslations("SoftwareDevelopment");
	const items = t.raw("faq.items") as { question: string; answer: string }[];

	return (
		<section
			id="faq"
			aria-labelledby="software-development-faq-heading"
			className="border-t bg-muted/30 py-14 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
				<motion.div
					className="mx-auto mb-10 max-w-3xl text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge
						icon={HelpCircle}
						text={t("faq.eyebrow")}
						className="justify-center"
					/>
					<h2
						id="software-development-faq-heading"
						className="type-h2"
					>
						{t("faq.title")}
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<Accordion type="single" collapsible className="w-full">
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
				</motion.div>
			</div>
		</section>
	);
}
