"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const beliefs = [
	{ key: "compliance", number: "01" },
	{ key: "loanBook", number: "02" },
	{ key: "oneTeam", number: "03" },
	{ key: "goLive", number: "04" },
] as const;

export function AboutBeliefs() {
	const t = useTranslations("About");
	return (
		<section
			id="beliefs"
			aria-labelledby="about-beliefs-heading"
			className="scroll-mt-24 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="max-w-3xl"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-primary">{t("beliefs.eyebrow")}</p>
					<h2 id="about-beliefs-heading" className="type-h2">
						{t("beliefs.title")}
					</h2>
					<p className="mt-4 max-w-2xl type-lede text-muted-foreground">
						{t("beliefs.lede")}
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 md:grid-cols-2">
					{beliefs.map((belief, index) => (
						<motion.article
							key={belief.key}
							className="rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md md:p-8"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<p className="mb-3 type-mono-label text-primary">
								{belief.number}
							</p>
							<h3 className="type-card-title">
								{t(`beliefs.items.${belief.key}.title`)}
							</h3>
							<p className="mt-2 text-base leading-relaxed text-muted-foreground">
								{t(`beliefs.items.${belief.key}.body`)}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
