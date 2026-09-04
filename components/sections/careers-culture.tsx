"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const principles = [
	{ key: "name", number: "01" },
	{ key: "together", number: "02" },
	{ key: "audited", number: "03" },
	{ key: "learn", number: "04" },
] as const;

export function CareersCulture() {
	const t = useTranslations("Careers");
	return (
		<section
			id="culture"
			aria-labelledby="careers-culture-heading"
			className="scroll-mt-24 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 type-eyebrow text-primary">
							{t("culture.eyebrow")}
						</p>
						<h2 id="careers-culture-heading" className="type-h2">
							{t("culture.title")}
						</h2>
						<p className="mt-4 max-w-xl type-lede text-muted-foreground">
							{t("culture.lede")}
						</p>
					</motion.div>
					<motion.div
						className="relative aspect-4/3 overflow-hidden rounded-3xl border shadow-sm"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						<Image
							src="/photos/careers-office-culture.jpg"
							alt={t("culture.imageAlt")}
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
						<div
							className="absolute inset-0 bg-primary/10 mix-blend-multiply"
							aria-hidden
						/>
					</motion.div>
				</div>

				<div className="mt-10 grid gap-5 md:grid-cols-2">
					{principles.map((item, index) => (
						<motion.article
							key={item.key}
							className="rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md md:p-8"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<p className="mb-3 type-mono-label text-primary">
								{item.number}
							</p>
							<h3 className="type-card-title">
								{t(`culture.items.${item.key}.title`)}
							</h3>
							<p className="mt-2 text-base leading-relaxed text-muted-foreground">
								{t(`culture.items.${item.key}.body`)}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
