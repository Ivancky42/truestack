"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

export function CareersFaq() {
	const t = useTranslations("Careers");
	const items = t.raw("faq.items") as { question: string; answer: string }[];
	const aboutQuestion = t("faq.aboutQuestion");
	return (
		<section
			id="faq"
			aria-labelledby="careers-faq-heading"
			className="scroll-mt-24 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid items-start gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 type-eyebrow text-primary">
							{t("faq.eyebrow")}
						</p>
						<h2 id="careers-faq-heading" className="type-h2">
							{t("faq.title")}
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							{t("faq.lede")}
						</p>
					</motion.div>

					<dl className="border-t">
						{items.map((item, index) => (
							<motion.div
								key={item.question}
								className="border-b py-5"
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.45,
									delay: index * 0.05,
								}}
							>
								<dt className="type-subhead">{item.question}</dt>
								<dd className="mt-1.5 text-base leading-relaxed text-muted-foreground">
									{item.question === aboutQuestion
										? t.rich("faq.aboutAnswerDisplay", {
												link: (c) => (
													<Link
														href="/about"
														className="font-medium text-primary underline-offset-4 hover:underline"
													>
														{c}
													</Link>
												),
											})
										: item.answer}
								</dd>
							</motion.div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
