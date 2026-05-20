"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/sections/hero";
import { WorkCaseStudyGrid } from "@/components/sections/work-case-study-grid";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	CreditCard,
	Database,
	FileCheck,
	Network,
	Shield,
	Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const workWithUsOffers: {
	title: string;
	description: string;
	href: string;
	icon: LucideIcon;
	accent: "primary" | "kpkt";
}[] = [
	{
		title: "TrueKredit™",
		description:
			"Purpose-built loan management for KPKT-licensed money lenders — borrowers, loans, compliance, and optional web and mobile in TrueKredit Pro.",
		href: "/truekredit",
		icon: CreditCard,
		accent: "primary",
	},
	{
		title: "TrueP2P™",
		description:
			"Peer-to-peer financing platforms for SC Malaysia — conventional and Shariah-aligned, with investor portals, escrow, and examiner-ready reporting.",
		href: "/services/p2p-software-development",
		icon: Network,
		accent: "primary",
	},
	{
		title: "KPKT digital license conversion",
		description:
			"Transform into a fully digital KPKT-licensed platform on a defined timeline — product, engineering, signing, and audit trails included.",
		href: "/services/digital-license",
		icon: FileCheck,
		accent: "kpkt",
	},
];

function CtaLink({
	href,
	children,
	className,
}: {
	href: string;
	children: ReactNode;
	className?: string;
}) {
	if (href.startsWith("#")) {
		return (
			<a
				href={href}
				className={className}
				onClick={(e) => {
					e.preventDefault();
					document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
				}}
			>
				{children}
			</a>
		);
	}
	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	);
}

function WorkHero() {
	return (
		<section className="relative overflow-hidden border-b">
			<GridPattern />
			<div className="relative mx-auto max-w-3xl px-6 py-14 text-center md:py-20 lg:py-24">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Badge
						variant="outline"
						className="mb-5 gap-1.5 border-primary/30 bg-primary/5 px-3 py-1 text-primary"
					>
						<Sparkles className="h-3.5 w-3.5" />
						Selected work
					</Badge>

					<h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
						Production fintech for{" "}
						<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
							Malaysia&apos;s regulated market
						</span>
					</h1>

					<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
						Live platforms we&apos;ve shaped end-to-end — license journeys,
						architecture, hosting, signing, and audit trails behind the UI.
					</p>

					<div className="mt-6 flex flex-wrap justify-center gap-2">
						{[
							{ icon: FileCheck, label: "KPKT digital conversion" },
							{ icon: Shield, label: "Enterprise lending" },
							{ icon: Database, label: "AWS Malaysia" },
						].map((pill) => (
							<span
								key={pill.label}
								className="inline-flex items-center gap-1.5 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
							>
								<pill.icon className="h-3.5 w-3.5 text-primary" />
								{pill.label}
							</span>
						))}
					</div>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button asChild size="lg" className="gap-2">
							<CtaLink href="#success-stories">
								View success stories
								<ArrowRight className="h-4 w-4" />
							</CtaLink>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/contact">Talk to us about your build</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export function WorkPageContent() {
	return (
		<>
			<WorkHero />

			<section
				id="success-stories"
				className="scroll-mt-24 border-t bg-muted/10 py-12 md:py-16"
			>
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeader
						title="Success stories"
						subtitle="Operators we've helped go digital and scale — from fast personal lending to enterprise cores and SC-facing marketplaces."
						className="mb-8 md:mb-10"
					/>
					<WorkCaseStudyGrid />
				</div>
			</section>

			<section
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-14 text-white md:py-16"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
						<h2 className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
							Work with us
						</h2>
						<p className="mt-4 text-base text-slate-400 md:text-lg">
							TrueKredit for lending, TrueP2P for marketplaces, or a full
							digital KPKT conversion — one senior team from discovery through
							go-live.
						</p>
					</div>
					<div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3 md:gap-6">
						{workWithUsOffers.map((offer) => {
							const isKpkt = offer.accent === "kpkt";
							return (
								<Card
									key={offer.title}
									className={
										isKpkt
											? "h-full border-kpkt/30 bg-zinc-900/80 transition-all hover:border-kpkt/55 hover:shadow-lg hover:shadow-kpkt/5"
											: "h-full border-zinc-800 bg-zinc-900/80 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
									}
								>
									<CardContent className="flex h-full flex-col pt-7">
										<div
											className={
												isKpkt
													? "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-kpkt/15"
													: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15"
											}
										>
											<offer.icon
												className={
													isKpkt
														? "h-6 w-6 text-kpkt"
														: "h-6 w-6 text-primary"
												}
											/>
										</div>
										<h3 className="text-center text-base font-semibold text-white">
											{offer.title}
										</h3>
										<p className="mt-2 text-center text-sm leading-relaxed text-slate-400">
											{offer.description}
										</p>
										<div className="mt-auto flex justify-center pt-5">
											<Button
												asChild
												variant="outline"
												size="sm"
												className={
													isKpkt
														? "gap-2 border-kpkt/40 bg-transparent text-zinc-100 hover:border-kpkt/60 hover:bg-kpkt/10 hover:text-white"
														: "gap-2 border-zinc-700 bg-transparent text-zinc-100 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
												}
											>
												<Link href={offer.href}>
													Learn more
													<ArrowRight className="h-4 w-4" />
												</Link>
											</Button>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
					<div className="mt-10 flex justify-center">
						<Button asChild size="lg" className="gap-2">
							<Link href="/contact">
								Get in touch
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
