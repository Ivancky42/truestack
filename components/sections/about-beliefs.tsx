"use client";

import { motion } from "framer-motion";

const beliefs = [
	{
		number: "01",
		title: "Compliance is a design constraint, not a feature",
		body: "If the regulatory paperwork has to be assembled by hand after the software ships, the software was designed wrong. KPKT schedules, Lampiran, Shariah ledgers and audit trails come out of the same records your team works in every day.",
	},
	{
		number: "02",
		title: "Your loan book is yours",
		body: "Every client runs on their own secure cloud account, hosted in Malaysia. We do not pool borrower data across clients, and we do not build products out of it.",
	},
	{
		number: "03",
		title: "One team, or it is not accountable",
		body: "Splitting the regulatory path from the build is how projects stall — each side waits on the other. Our compliance specialists and engineers sit in the same delivery, so there is one plan and one person to call.",
	},
	{
		number: "04",
		title: "Go-live is the beginning",
		body: "Lending does not stop at launch, so neither do we. Renewals, filings, releases and the next feature stay with the people who built the thing in the first place.",
	},
] as const;

export function AboutBeliefs() {
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
					<p className="mb-3 type-eyebrow text-primary">What we believe</p>
					<h2 id="about-beliefs-heading" className="type-h2">
						Four things we do not compromise on.
					</h2>
					<p className="mt-4 max-w-2xl type-lede text-muted-foreground">
						These are the arguments we have already had internally,
						settled, and now design around.
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 md:grid-cols-2">
					{beliefs.map((belief, index) => (
						<motion.article
							key={belief.number}
							className="rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md md:p-8"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<p className="mb-3 type-mono-label text-primary">
								{belief.number}
							</p>
							<h3 className="type-card-title">{belief.title}</h3>
							<p className="mt-2 text-base leading-relaxed text-muted-foreground">
								{belief.body}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
