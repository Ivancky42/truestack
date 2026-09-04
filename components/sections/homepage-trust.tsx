"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function HomepageTrust() {
	const t = useTranslations("Home");
	const faq = t.raw("faq.items") as { question: string; answer: string }[];

	return (
		<section
			id="about"
			className="scroll-mt-20 border-t bg-background py-16 md:py-20"
		>
			<div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-14">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-primary">
						{t("trust.eyebrow")}
					</p>
					<h2 className="type-h2">
						{t("trust.title")}
					</h2>
					<div className="mt-7 flex flex-col gap-5">
						{faq.map((item) => (
							<div key={item.question}>
								<h3 className="type-subhead">
									{item.question}
								</h3>
								<p className="mt-1.5 text-base text-muted-foreground">
									{item.answer}
								</p>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<div className="relative aspect-5/4 overflow-hidden rounded-3xl border shadow-sm">
						<Image
							src="/photos/homepage-fintech-team.jpg"
							alt={t("trust.alt")}
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
						<div
							className="absolute inset-0 bg-primary/10 mix-blend-multiply"
							aria-hidden
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
