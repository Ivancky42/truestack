"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
	{
		step: "1",
		tag: "30 min",
		title: "Introductory call",
		body: "What you have done, what you want next, and what the role looks like on an ordinary day.",
		highlight: false,
	},
	{
		step: "2",
		tag: "45–60 min",
		title: "Role discussion",
		body: "A proper conversation with the people you would sit next to, about work we have on right now.",
		highlight: false,
	},
	{
		step: "3",
		tag: "Some roles",
		title: "Practical case study",
		body: "Something small and realistic. We keep it short, and we go through it with you afterwards.",
		highlight: false,
	},
	{
		step: "4",
		tag: "Offer",
		title: "Offer and onboarding",
		body: "Terms, a start date, and a first week set up so you ship something real early.",
		highlight: true,
	},
] as const;

export function CareersProcess() {
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
						Hiring process
					</p>
					<h2
						id="careers-process-heading"
						className="type-h2 text-white"
					>
						Four steps, no surprises.
					</h2>
					<p className="mt-4 max-w-2xl type-lede text-slate-400">
						We read every application and get back to everyone we
						shortlist.
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, index) => (
						<motion.article
							key={step.step}
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
									{step.tag}
								</span>
							</div>
							<h3 className="type-subhead text-white">
								{step.title}
							</h3>
							<p className="mt-2 type-ui leading-relaxed text-slate-400">
								{step.body}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
