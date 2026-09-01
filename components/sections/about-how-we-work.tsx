"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stages = [
	{
		step: "1",
		tag: "Free",
		title: "We tell you where you stand",
		body: "A consultation on your regulatory position, what you are actually trying to build, and roughly what it costs. If the answer is that you are not ready, we say so.",
		highlight: false,
	},
	{
		step: "2",
		tag: "One contract",
		title: "One plan across licence and build",
		body: "Compliance milestones and delivery milestones on the same timeline, with named owners on both sides. You are not the integration layer between two vendors.",
		highlight: false,
	},
	{
		step: "3",
		tag: "Proven base",
		title: "You start from what already runs",
		body: "Your platform is configured from systems already live with other clients, not built from zero. Custom work goes where your business is genuinely different.",
		highlight: false,
	},
	{
		step: "4",
		tag: "Ongoing",
		title: "We stay after go-live",
		body: "Renewals, annual submissions, support and the next release. The same team, not a handover to an account manager who was not there.",
		highlight: true,
	},
] as const;

const teams = [
	{
		title: "Product & engineering",
		body: "Architects, product, mobile and cloud — one delivery team, from workshop through launch.",
	},
	{
		title: "Compliance & operations",
		body: "Licensing, filings and go-live support, running alongside the build rather than after it.",
	},
	{
		title: "Design & experience",
		body: "Interfaces your counter staff, your investors and your borrowers can actually use without training.",
	},
] as const;

export function AboutHowWeWork() {
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
					<p className="mb-3 type-eyebrow text-blue-400">How we work</p>
					<h2 id="about-how-heading" className="type-h2 text-white">
						What working with us actually looks like.
					</h2>
					<p className="mt-4 max-w-2xl type-lede text-slate-400">
						No discovery phase that bills for six weeks and ends in a
						slide deck. Four stages, whether the job is a licence
						conversion, a platform, an integration or a custom build.
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{stages.map((stage, index) => (
						<motion.article
							key={stage.step}
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
									{stage.tag}
								</span>
							</div>
							<h3 className="type-subhead text-white">{stage.title}</h3>
							<p className="mt-2 type-ui leading-relaxed text-slate-400">
								{stage.body}
							</p>
						</motion.article>
					))}
				</div>

				<div className="mt-5 grid gap-5 md:grid-cols-3">
					{teams.map((team, index) => (
						<motion.article
							key={team.title}
							className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: 0.24 + index * 0.08,
							}}
						>
							<h3 className="type-subhead text-white">{team.title}</h3>
							<p className="mt-1.5 type-ui leading-relaxed text-slate-400">
								{team.body}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
