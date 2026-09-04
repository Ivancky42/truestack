"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function AboutStory() {
	const t = useTranslations("About");
	return (
		<section
			id="story"
			aria-labelledby="about-story-heading"
			className="scroll-mt-24 border-t bg-background py-16 md:py-20"
		>
			<div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-primary">{t("story.eyebrow")}</p>
					<h2 id="about-story-heading" className="type-h2">
						{t("story.title")}
					</h2>
					<div className="relative mt-6 aspect-4/3 overflow-hidden rounded-3xl border shadow-sm lg:mt-8">
						<Image
							src="/photos/about-team-collaboration.jpg"
							alt={t("story.imageAlt")}
							fill
							sizes="(max-width: 1024px) 100vw, 42vw"
							className="object-cover"
						/>
						<div
							className="absolute inset-0 bg-primary/10 mix-blend-multiply"
							aria-hidden
						/>
					</div>
				</motion.div>

				<motion.div
					className="lg:pt-11"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<p className="type-lede font-medium text-pretty text-foreground">
						{t("story.lede")}
					</p>
					<div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-[17px] md:leading-7">
						<p>{t("story.p1")}</p>
						<p>{t("story.p2")}</p>
						<p>{t("story.p3")}</p>
						<p>{t("story.p4")}</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
