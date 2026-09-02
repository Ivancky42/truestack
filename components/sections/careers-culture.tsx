"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const principles = [
	{
		number: "01",
		title: "Your work has your name on it",
		body: "You scope it, build it, ship it, and hear back from the client yourself. Nobody sits between you and the result — which is the good part and the hard part.",
	},
	{
		number: "02",
		title: "Together when it helps, quiet when it doesn't",
		body: "Everyone is in KL. Engineering is hybrid, business roles are on-site. We get in a room when a decision needs one, and otherwise leave people alone to work.",
	},
	{
		number: "03",
		title: "The software gets audited, so we don't rush it",
		body: "Our software moves other people's money and gets looked at by regulators. Tests, reviews and audit trails are the first thing under pressure, so we protect them.",
	},
	{
		number: "04",
		title: "You will learn lending, not just the tools",
		body: "Everyone here ends up understanding how lending and its regulation work. Not many people do — it makes you better at the job, and you keep it.",
	},
] as const;

export function CareersCulture() {
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
							How we work
						</p>
						<h2 id="careers-culture-heading" className="type-h2">
							What the job is actually like.
						</h2>
						<p className="mt-4 max-w-xl type-lede text-muted-foreground">
							A small team, systems that are live, and an industry
							with rules. Most of what follows comes from that.
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
							alt="Colleagues collaborating at shared desks in the Truestack Kuala Lumpur office"
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
							key={item.number}
							className="rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md md:p-8"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<p className="mb-3 type-mono-label text-primary">
								{item.number}
							</p>
							<h3 className="type-card-title">{item.title}</h3>
							<p className="mt-2 text-base leading-relaxed text-muted-foreground">
								{item.body}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
