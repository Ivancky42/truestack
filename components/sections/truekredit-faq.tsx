"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaLink } from "@/components/shared/cta-link";
import { truekreditFaq } from "@/lib/truekredit-faq";

export function TrueKreditFaq() {
	return (
		<section
			id="faq"
			aria-labelledby="truekredit-faq-heading"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="type-eyebrow mb-3 text-primary">FAQ</p>
					<h2
						id="truekredit-faq-heading"
						className="type-h2"
					>
						Frequently asked questions
					</h2>
					<p className="mt-3.5 text-[17px] text-muted-foreground">
						Straight answers on Standard vs Pro, KPKT paperwork,
						and where your loan data lives.
					</p>
					<CtaLink
						href="/contact?subject=TrueKredit"
						className="mt-4 inline-flex items-center gap-1.5 type-ui font-medium text-primary hover:underline"
					>
						Ask us something else
						<ArrowRight className="h-3.5 w-3.5" />
					</CtaLink>
				</motion.div>

				<motion.div
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
						{truekreditFaq.map((faq, index) => (
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
			</div>
		</section>
	);
}
