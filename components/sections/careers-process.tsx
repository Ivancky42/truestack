"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
	{ key: "intro", step: "1", highlight: false },
	{ key: "discussion", step: "2", highlight: false },
	{ key: "case", step: "3", highlight: false },
	{ key: "offer", step: "4", highlight: true },
] as const;

export function CareersProcess() {
	const t = useTranslations("Careers");
	return (
		<section
			id="process"
			data-nav-theme="dark"
			aria-labelledby="careers-process-heading"
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
					<p className="mb-3 type-eyebrow text-blue-400">
						{t("process.eyebrow")}
					</p>
					<h2
						id="careers-process-heading"
						className="type-h2 text-white"
					>
						{t("process.title")}
					</h2>
					<p className="mt-4 max-w-2xl type-lede text-slate-400">
						{t("process.lede")}
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, index) => (
						<motion.article
							key={step.key}
							className={cn(
								"rounded-2xl border p-6 md:p-7",
								step.highlight
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
										step.highlight
											? "bg-linear-to-br from-primary-start to-primary-end text-primary-foreground"
											: "bg-primary/15 text-blue-400",
									)}
								>
									{step.step}
								</span>
								<span
									className={cn(
										"type-mono-label uppercase tracking-[0.06em]",
										step.highlight
											? "text-blue-400"
											: "text-slate-500",
									)}
								>
									{t(`process.steps.${step.key}.tag`)}
								</span>
							</div>
							<h3 className="type-subhead text-white">
								{t(`process.steps.${step.key}.title`)}
							</h3>
							<p className="mt-2 type-ui leading-relaxed text-slate-400">
								{t(`process.steps.${step.key}.body`)}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
