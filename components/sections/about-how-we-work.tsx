"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stages = [
	{ key: "stand", step: "1", highlight: false },
	{ key: "plan", step: "2", highlight: false },
	{ key: "base", step: "3", highlight: false },
	{ key: "stay", step: "4", highlight: true },
] as const;

const teams = ["engineering", "compliance", "design"] as const;

export function AboutHowWeWork() {
	const t = useTranslations("About");
	return (
		<section
			id="how"
			data-nav-theme="dark"
			aria-labelledby="about-how-heading"
			className="scroll-mt-24 bg-slate-950 py-16 text-white md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="max-w-3xl"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-blue-400">{t("howWeWork.eyebrow")}</p>
					<h2 id="about-how-heading" className="type-h2 text-white">
						{t("howWeWork.title")}
					</h2>
					<p className="mt-4 max-w-2xl type-lede text-slate-400">
						{t("howWeWork.lede")}
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{stages.map((stage, index) => (
						<motion.article
							key={stage.key}
							className={cn(
								"rounded-2xl border p-6 md:p-7",
								stage.highlight
									? "border-primary/40 bg-primary/10"
									: "border-slate-800 bg-slate-900/80",
							)}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<div className="mb-3.5 flex items-center gap-2.5">
								<span
									className={cn(
										"flex h-8 w-8 items-center justify-center rounded-full type-mono-label",
										stage.highlight
											? "bg-linear-to-br from-primary-start to-primary-end text-primary-foreground"
											: "bg-primary/15 text-blue-400",
									)}
								>
									{stage.step}
								</span>
								<span
									className={cn(
										"type-mono-label uppercase tracking-[0.06em]",
										stage.highlight
											? "text-blue-400"
											: "text-slate-500",
									)}
								>
									{t(`howWeWork.stages.${stage.key}.tag`)}
								</span>
							</div>
							<h3 className="type-subhead text-white">
								{t(`howWeWork.stages.${stage.key}.title`)}
							</h3>
							<p className="mt-2 type-ui leading-relaxed text-slate-400">
								{t(`howWeWork.stages.${stage.key}.body`)}
							</p>
						</motion.article>
					))}
				</div>

				<div className="mt-5 grid gap-5 md:grid-cols-3">
					{teams.map((team, index) => (
						<motion.article
							key={team}
							className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: 0.24 + index * 0.08,
							}}
						>
							<h3 className="type-subhead text-white">
								{t(`howWeWork.teams.${team}.title`)}
							</h3>
							<p className="mt-1.5 type-ui leading-relaxed text-slate-400">
								{t(`howWeWork.teams.${team}.body`)}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
