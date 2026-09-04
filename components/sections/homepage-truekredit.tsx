"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Check,
	CreditCard,
	Layers,
	Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";

const FEATURES = [
	"One system for borrowers, schedules, repayments and KPKT paperwork",
	"Your loan data stays on your own secure cloud in Malaysia",
	"Audit trails that record who did what, and when",
	"Upgrade to Pro for borrower apps and digital signing — same loan book",
] as const;

const PLATFORMS: {
	name: string;
	href: string;
	icon: LucideIcon;
	body: string;
	cta: string;
}[] = [
	{
		name: "TrueKredit™",
		href: "/truekredit",
		icon: CreditCard,
		body: "KPKT loan management for licensed money lenders, with Pro for branded borrower apps and digital signing.",
		cta: "Explore TrueKredit",
	},
	{
		name: "TrueSyariah™",
		href: "/truesyariah",
		icon: Layers,
		body: "Shariah digital licence and platform: Tawarruq commodity trades, segregated Ta'widh and Gharamah, books ring-fenced from conventional lending.",
		cta: "Explore TrueSyariah",
	},
	{
		name: "TrueP2P™",
		href: "/services/p2p-software-development",
		icon: Network,
		body: "Investor and issuer portals, escrow and payments, engineered for Securities Commission Malaysia RMO requirements.",
		cta: "Explore TrueP2P",
	},
];

export function HomepageTrueKredit() {
	return (
		<section
			id="truekredit"
			className="scroll-mt-20 border-t bg-background py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 type-eyebrow text-primary">
							Loan management system
						</p>
						<h2 className="type-h2">
							TrueKredit™ — the whole loan book, in one place
							your auditor accepts.
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							Lending gets messy fast: borrower files in one
							system, instalments in a spreadsheet, KPKT paperwork
							in a drawer. TrueKredit puts borrowers, schedules,
							repayments and regulatory documents on a single
							record.
						</p>
						<ul className="mt-6 space-y-3">
							{FEATURES.map((feature) => (
								<li
									key={feature}
									className="flex items-start gap-2.5 text-base text-foreground/80"
								>
									<Check
										className="mt-1 h-4 w-4 shrink-0 text-primary"
										aria-hidden
									/>
									<span>{feature}</span>
								</li>
							))}
						</ul>
						<div className="mt-7">
							<Button asChild variant="outline" size="lg" className="gap-2">
								<CtaLink href="/truekredit">
									Explore TrueKredit
									<ArrowRight className="h-4 w-4" />
								</CtaLink>
							</Button>
						</div>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div
							className="pointer-events-none absolute inset-x-6 top-8 h-3/5 rounded-2xl bg-primary/15 blur-2xl"
							aria-hidden
						/>
						<Image
							src="/truekredit/homepage-borrower-collage.png"
							alt="TrueKredit borrower file with loan summary and the branded borrower app on a phone"
							width={2160}
							height={1766}
							quality={100}
							unoptimized
							className="relative h-auto w-full"
							sizes="(max-width: 1024px) 100vw, 55vw"
						/>
					</motion.div>
				</div>

				<div className="mt-16 grid gap-5 md:grid-cols-3 md:mt-20">
					{PLATFORMS.map((platform, index) => {
						const Icon = platform.icon;
						return (
							<motion.div
								key={platform.name}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
							>
								<Link
									href={platform.href}
									className="group flex h-full flex-col rounded-2xl border bg-primary/5 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
								>
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
										<Icon
											className="h-6 w-6 text-primary"
											aria-hidden
										/>
									</div>
									<h3 className="type-card-title">
										{platform.name}
									</h3>
									<p className="mt-2 flex-1 type-ui leading-relaxed text-muted-foreground">
										{platform.body}
									</p>
									<span className="mt-4 inline-flex items-center gap-1.5 type-ui font-medium text-primary">
										{platform.cta}
										<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
									</span>
								</Link>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
