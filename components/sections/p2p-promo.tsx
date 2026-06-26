"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Banknote,
	Building2,
	FileSignature,
	Layers,
	Network,
	Receipt,
	ScanFace,
	Users,
	Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
	"Conventional or Shariah-aligned (Gharamah & Ta'widh)",
	"Investor portal, accreditation tiers & per-issuer caps",
	"Issuer onboarding, listings engine & escrow (FPX/DuitNow)",
	"e-KYC, AML/CFT screening, e-signing & SC-shaped reporting",
];

const moduleBadges = [
	{ label: "Investor portal", icon: Users },
	{ label: "Issuer onboarding", icon: Building2 },
	{ label: "Listings engine", icon: Layers },
	{ label: "Escrow & FPX/DuitNow", icon: Wallet },
	{ label: "e-KYC & accreditation", icon: ScanFace },
	{ label: "e-Signing & vault", icon: FileSignature },
];

function P2PHubGraphic() {
	return (
		<div className="relative flex h-full flex-col justify-center overflow-hidden rounded-xl border border-violet-200/60 bg-linear-to-br from-violet-500/8 via-background to-indigo-500/6 p-5 md:p-6">
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
				<div className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 p-3 text-center shadow-sm backdrop-blur">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
						<Users className="h-5 w-5 text-indigo-600" />
					</div>
					<p className="text-xs font-semibold md:text-sm">
						Investors
					</p>
					<p className="text-[10px] text-muted-foreground md:text-xs">
						Accredited &amp; retail tiers
					</p>
				</div>

				<div className="flex flex-col items-center gap-2">
					<div className="flex w-full flex-col items-center justify-center rounded-xl bg-violet-600 px-3 py-3 text-white shadow-lg">
						<Network className="h-5 w-5" aria-hidden />
						<p className="mt-1 text-xs font-semibold md:text-sm">
							TrueP2P™
						</p>
						<p className="text-[10px] opacity-90 md:text-xs">
							RMO-aligned
						</p>
					</div>
					<div className="flex w-full justify-between text-[10px] text-muted-foreground">
						<span>← funds</span>
						<span>repay →</span>
					</div>
				</div>

				<div className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 p-3 text-center shadow-sm backdrop-blur">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
						<Building2 className="h-5 w-5 text-violet-700" />
					</div>
					<p className="text-xs font-semibold md:text-sm">
						Issuers / SMEs
					</p>
					<p className="text-[10px] text-muted-foreground md:text-xs">
						Listings &amp; raises
					</p>
				</div>
			</div>

			{/* Module strip */}
			<ul
				className="relative z-10 mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3"
				aria-label="Platform modules"
			>
				{moduleBadges.map(({ label, icon: Icon }) => (
					<li
						key={label}
						className="flex items-center gap-2 rounded-lg border bg-background/70 px-2.5 py-1.5 text-[11px] backdrop-blur md:text-xs"
					>
						<Icon
							className="h-3.5 w-3.5 shrink-0 text-violet-600"
							aria-hidden
						/>
						<span className="truncate text-muted-foreground">
							{label}
						</span>
					</li>
				))}
			</ul>

			{/* Stat ribbon */}
			<div className="relative z-10 mt-4 flex items-center justify-between rounded-xl border bg-background/80 px-4 py-2.5 backdrop-blur">
				<div className="flex items-center gap-2 text-xs">
					<Receipt className="h-4 w-4 text-violet-600" />
					<span className="font-medium">
						Trust account &amp; FPX rails
					</span>
				</div>
				<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
					Live
				</span>
			</div>
		</div>
	);
}

export function TrueP2PPanel() {
	return (
		<motion.div
			id="p2p-software-development"
			className="grid items-center gap-8 rounded-2xl border border-violet-200/60 bg-background p-6 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			<P2PHubGraphic />

			{/* Content */}
			<div className="flex flex-col justify-center gap-4">
				<div>
					<h3
						id="p2p-software-development-heading"
						className="font-display text-2xl font-medium tracking-tight md:text-3xl"
					>
						TrueP2P™
					</h3>
					<p className="mt-2 text-muted-foreground">
						We design and build your{" "}
						<strong className="font-semibold text-foreground">
							peer-to-peer (P2P) financing platform
						</strong>{" "}
						on our engine — conventional or Shariah-aligned
						(syariah-compliant) — engineered to meet{" "}
						<strong className="font-semibold text-foreground">
							Securities Commission Malaysia (SC)
						</strong>{" "}
						Recognised Market Operator requirements and
						white-labelled to your brand on AWS Malaysia.
					</p>
				</div>
				<ul
					className="space-y-2"
					aria-label="Built into every P2P build"
				>
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1 flex flex-wrap gap-3">
					<Button
						asChild
						className="gap-2 bg-violet-600 hover:bg-violet-700"
					>
						<Link href="/services/p2p-software-development">
							Explore TrueP2P™
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						className="gap-2 border-violet-300 text-violet-800 hover:bg-violet-500/5 hover:text-violet-900"
					>
						<Link href="/contact?subject=TrueP2P">
							<Banknote className="h-4 w-4" />
							Book a Free Consultation
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
