"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	BadgeCheck,
	Banknote,
	Building2,
	CheckCircle2,
	FileSignature,
	Layers,
	Network,
	Receipt,
	ScanFace,
	ShieldCheck,
	Sparkles,
	TrendingUp,
	Users,
	Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";

const highlights = [
	{
		icon: ShieldCheck,
		title: "SC Malaysia-aligned",
		description:
			"Engineered for the Securities Commission's Recognised Market Operator (RMO) framework — investor accreditation, per-issuer caps, and trust account integration baked in.",
	},
	{
		icon: Sparkles,
		title: "Conventional & Shariah-aligned",
		description:
			"We deliver both conventional and syariah-compliant peer-to-peer platforms, including Gharamah and Ta'widh accounting for Shariah committee review.",
	},
	{
		icon: Layers,
		title: "Full stack, one partner",
		description:
			"Investor portal, issuer onboarding, listings engine, escrow, e-KYC, e-signing, payments and reporting — built end-to-end on AWS Malaysia.",
	},
];

const moduleBadges = [
	{ label: "Investor portal", icon: Users },
	{ label: "Issuer onboarding", icon: Building2 },
	{ label: "Listings engine", icon: Layers },
	{ label: "Escrow & FPX/DuitNow", icon: Wallet },
	{ label: "e-KYC & accreditation", icon: ScanFace },
	{ label: "e-Signing & vault", icon: FileSignature },
];

const trustSignals = [
	"AWS Malaysia data residency",
	"Investor accreditation tiers & per-issuer caps",
	"Audit-ready logs and SC-shaped reporting exports",
	"MyKad e-KYC, AML/CFT screening and CTOS connectors",
];

function P2PHubGraphic() {
	return (
		<div className="relative flex h-full min-h-[340px] flex-col justify-center overflow-hidden rounded-2xl border bg-linear-to-br from-primary/6 via-background to-violet-500/6 p-6 md:p-8">
			{/* Faint grid */}
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden
			>
				<defs>
					<pattern
						id="p2p-promo-grid"
						width="32"
						height="32"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 32 0 L 0 0 0 32"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#p2p-promo-grid)" />
			</svg>

			{/* Hub layout: Investors → Platform → Issuers */}
			<div className="relative z-10 grid grid-cols-3 items-center gap-3 md:gap-4">
				{/* Investors */}
				<motion.div
					className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 p-3 text-center shadow-sm backdrop-blur md:p-4"
					initial={{ opacity: 0, x: -12 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
						<Users className="h-5 w-5 text-primary" />
					</div>
					<p className="text-xs font-semibold md:text-sm">
						Investors
					</p>
					<p className="text-[10px] text-muted-foreground md:text-xs">
						Accredited &amp; retail tiers
					</p>
				</motion.div>

				{/* Connector */}
				<div className="flex flex-col items-center gap-2">
					<motion.div
						className="flex w-full flex-col items-center justify-center rounded-xl bg-primary px-3 py-3 text-primary-foreground shadow-lg md:px-4 md:py-4"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.15 }}
					>
						<Network className="h-5 w-5" aria-hidden />
						<p className="mt-1 text-xs font-semibold md:text-sm">
							TrueP2P™
						</p>
						<p className="text-[10px] opacity-90 md:text-xs">
							RMO-aligned
						</p>
					</motion.div>
					{/* Tiny in/out arrows */}
					<div className="flex w-full justify-between text-[10px] text-muted-foreground">
						<span>← funds</span>
						<span>repay →</span>
					</div>
				</div>

				{/* Issuers */}
				<motion.div
					className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 p-3 text-center shadow-sm backdrop-blur md:p-4"
					initial={{ opacity: 0, x: 12 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
						<Building2 className="h-5 w-5 text-violet-700" />
					</div>
					<p className="text-xs font-semibold md:text-sm">
						Issuers / SMEs
					</p>
					<p className="text-[10px] text-muted-foreground md:text-xs">
						Listings &amp; raises
					</p>
				</motion.div>
			</div>

			{/* Module strip */}
			<motion.ul
				className="relative z-10 mt-6 grid grid-cols-2 gap-2 md:mt-8 md:grid-cols-3"
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, delay: 0.25 }}
				aria-label="Platform modules"
			>
				{moduleBadges.map(({ label, icon: Icon }) => (
					<li
						key={label}
						className="flex items-center gap-2 rounded-lg border bg-background/70 px-2.5 py-1.5 text-[11px] backdrop-blur md:text-xs"
					>
						<Icon
							className="h-3.5 w-3.5 shrink-0 text-primary"
							aria-hidden
						/>
						<span className="truncate text-muted-foreground">
							{label}
						</span>
					</li>
				))}
			</motion.ul>

			{/* Stat ribbon */}
			<motion.div
				className="relative z-10 mt-6 flex items-center justify-between rounded-xl border bg-background/80 px-4 py-3 backdrop-blur"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, delay: 0.35 }}
			>
				<div className="flex items-center gap-2 text-xs">
					<Receipt className="h-4 w-4 text-primary" />
					<span className="font-medium">
						Trust account &amp; FPX rails
					</span>
				</div>
				<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
					Live
				</span>
			</motion.div>
		</div>
	);
}

export function P2PPromo() {
	return (
		<section
			id="p2p-software-development"
			aria-labelledby="p2p-software-development-heading"
			className="border-t py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				{/* Header */}
				<motion.div
					className="mb-12 max-w-3xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge icon={Network} text="P2P Financing" />
					<h2
						id="p2p-software-development-heading"
						className="font-display text-4xl font-medium tracking-tight md:text-5xl"
					>
						TrueP2P™
					</h2>
					<p className="mt-4 text-lg text-muted-foreground md:text-xl">
						We design and engineer{" "}
						<strong className="font-semibold text-foreground">
							peer-to-peer (P2P) financing platforms
						</strong>{" "}
						for Malaysian operators — both{" "}
						<strong className="font-semibold text-foreground">
							conventional and Shariah-aligned (syariah-compliant)
						</strong>
						. Engineered for{" "}
						<strong className="font-semibold text-foreground">
							Securities Commission Malaysia (SC)
						</strong>{" "}
						requirements under the Recognised Market Operator
						framework, with investor onboarding, listings, escrow,
						payments, e-signing,{" "}
						<em className="not-italic font-medium text-foreground">
							Gharamah and Ta&apos;widh
						</em>{" "}
						accounting, and reporting — all white-labelled to your
						brand.
					</p>

					<div className="mt-6 flex flex-wrap gap-3">
						<span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
							<BadgeCheck className="h-4 w-4" />
							SC RMO-aligned
						</span>
						<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700">
							<Sparkles className="h-4 w-4" />
							Conventional &amp; Shariah-aligned
						</span>
						<span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-700">
							<TrendingUp className="h-4 w-4" />
							Examiner-ready by design
						</span>
					</div>
				</motion.div>

				{/* Highlights */}
				<div className="mb-12 grid gap-6 md:grid-cols-3">
					{highlights.map((item, index) => (
						<motion.article
							key={item.title}
							className="group rounded-2xl border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
								<item.icon className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold">
								{item.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{item.description}
							</p>
						</motion.article>
					))}
				</div>

				{/* Visual + content panel */}
				<motion.div
					className="grid gap-8 rounded-2xl border bg-background p-6 md:p-8 lg:grid-cols-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<P2PHubGraphic />

					<div className="flex flex-col justify-center gap-5">
						<div>
							<h3 className="text-xl font-semibold md:text-2xl">
								One accountable engineering partner — investor,
								issuer, and operator covered
							</h3>
							<p className="mt-3 text-muted-foreground">
								A peer-to-peer platform is more than a marketing
								site and a database. We ship every module a
								Malaysian P2P operator actually needs — investor
								portal, issuer onboarding, listings engine,
								escrow integration, e-KYC and AML/CFT,
								e-signing, payments, and audit-ready reporting —
								and operate it alongside your team after launch.
							</p>
						</div>

						<ul
							className="space-y-2.5"
							aria-label="Built into every P2P build"
						>
							{trustSignals.map((line) => (
								<li
									key={line}
									className="flex items-start gap-2.5 text-sm text-muted-foreground"
								>
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
									<span>{line}</span>
								</li>
							))}
						</ul>

						<div className="mt-2 flex flex-wrap gap-3">
							<Button asChild className="gap-2">
								<Link href="/services/p2p-software-development">
									Explore TrueP2P™
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild variant="outline" className="gap-2">
								<Link href="/contact?subject=TrueP2P">
									<Banknote className="h-4 w-4" />
									Talk to our TrueP2P™ team
								</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
