"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/shared/section-badge";
import { digitalLicenseFaq } from "@/lib/digital-license-faq";

export function DigitalLicenseFaq() {
	return (
		<section
			id="faq"
			aria-labelledby="digital-license-faq-heading"
			className="border-t bg-background py-14 md:py-20"
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
						text="FAQ"
						className="justify-center"
					/>
					<h2
						id="digital-license-faq-heading"
						className="font-display text-3xl font-medium tracking-tight md:text-4xl"
					>
						Frequently asked questions
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<Accordion type="single" collapsible className="w-full">
						{digitalLicenseFaq.map((faq, index) => (
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
