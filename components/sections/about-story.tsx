"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutStory() {
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
					<p className="mb-3 type-eyebrow text-primary">Why we exist</p>
					<h2 id="about-story-heading" className="type-h2">
						A market held together by spreadsheets.
					</h2>
					<div className="relative mt-6 aspect-4/3 overflow-hidden rounded-3xl border shadow-sm lg:mt-8">
						<Image
							src="/photos/about-team-collaboration.jpg"
							alt="The Truestack team working together in their Kuala Lumpur office"
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
						Malaysia&apos;s private credit market is fragmented. Every
						lender we met had solved the same problems separately —
						and none of them enjoyed it.
					</p>
					<div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-[17px] md:leading-7">
						<p>
							A loan book in Excel. Borrower documents in a shared
							drive. Instalments reconciled by hand at month-end.
							Identity checks on one vendor&apos;s website, company
							searches on another, payments on a third, none of them
							talking to each other. Everything worked, more or less,
							until somebody asked for an audit trail.
						</p>
						<p>
							Then there was the regulator. For KPKT money lenders,
							compliance is not optional and not simple, and for most
							of them it sat outside their expertise — a wall between
							holding a licence and actually growing on it. P2P
							operators face the same thing with the Securities
							Commission. Good businesses were held back by paperwork
							rather than by credit risk or capital.
						</p>
						<p>
							We started Truestack in 2025 because that gap did not
							need to exist. The software and the regulatory work are
							two halves of the same job, and splitting them across a
							software vendor and a consultant is what makes both
							harder. So we do both, under one contract, for one
							industry — whether that is a KPKT loan book, a Shariah
							financing product, a P2P marketplace, identity or
							company checks you would rather not build yourself, or
							a custom system nobody sells off the shelf.
						</p>
						<p>
							Today eleven lenders and fintechs run on our platforms,
							disbursing over RM 200 million a year, with their
							books, documents and audit trails in the same place.
							KPKT lending is the bulk of what we do. It is not the
							limit of it.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
