"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowRight,
	Building2,
	Check,
	Globe,
	MapPin,
	Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";
import { cn } from "@/lib/utils";

type DigitalLicenseHeroVisualProps = {
	className?: string;
	/** Prefer mount animation on the product hero; use in-view on homepage cards. */
	animateOnMount?: boolean;
};

/** Simple before → after: one branch to nationwide digital lending. */
export function DigitalLicenseHeroVisual({
	className,
	animateOnMount = false,
}: DigitalLicenseHeroVisualProps) {
	return (
		<motion.div
			className={cn("relative mx-auto w-full max-w-md", className)}
			initial={{ opacity: 0, y: 16 }}
			{...(animateOnMount
				? { animate: { opacity: 1, y: 0 } }
				: {
						whileInView: { opacity: 1, y: 0 },
						viewport: { once: true, margin: "-40px" },
					})}
			transition={{
				duration: 0.55,
				delay: animateOnMount ? 0.2 : 0.05,
			}}
		>
			<div className="overflow-hidden rounded-3xl border bg-card shadow-lg shadow-primary/5">
				<div className="border-b bg-muted/40 px-6 py-7">
					<p className="mb-4 type-eyebrow text-muted-foreground">
						Before
					</p>
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted">
							<Building2 className="h-5 w-5 text-muted-foreground" />
						</div>
						<div>
							<p className="type-card-title">
								1 branch
							</p>
							<p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
								<MapPin className="h-3.5 w-3.5" />
								Local customers only
							</p>
						</div>
					</div>
				</div>

				<div className="bg-linear-to-br from-primary/8 via-background to-cyan-500/5 px-6 py-7">
					<p className="mb-4 type-eyebrow text-primary">
						After
					</p>
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary">
							<Globe className="h-5 w-5 text-primary-foreground" />
						</div>
						<div>
							<p className="type-card-title text-primary">
								All of Malaysia
							</p>
							<p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
								<Smartphone className="h-3.5 w-3.5" />
								Web &amp; apps · digital licence
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

const PHASES = [
	{ phase: "Phase 1", label: "Provisional licence" },
	{ phase: "Phase 2–3", label: "Build & review pack" },
	{ phase: "Phase 4", label: "Approval & go-live" },
] as const;

function ReachChart() {
	const reduceMotion = useReducedMotion();

	return (
		<div className="rounded-[20px] border bg-card/75 p-[26px] pt-[26px] pb-[22px] shadow-sm backdrop-blur-sm">
			<div className="mb-1.5 flex items-baseline justify-between gap-3">
				<span className="type-micro font-medium uppercase tracking-[0.08em] text-muted-foreground">
					Addressable reach
				</span>
				<span className="font-mono type-micro text-muted-foreground/70">
					~3 months
				</span>
			</div>

			<svg
				viewBox="0 -34 420 262"
				className="block h-auto w-full"
				role="img"
				aria-label="Reach growing from a single branch to nationwide digital lending"
			>
				<line
					x1="30"
					y1="180"
					x2="404"
					y2="180"
					className="stroke-border"
					strokeWidth="1"
				/>
				<line
					x1="30"
					y1="130"
					x2="404"
					y2="130"
					className="stroke-border/60"
					strokeWidth="1"
				/>
				<line
					x1="30"
					y1="80"
					x2="404"
					y2="80"
					className="stroke-border/60"
					strokeWidth="1"
				/>
				<line
					x1="30"
					y1="30"
					x2="404"
					y2="30"
					className="stroke-border/60"
					strokeWidth="1"
				/>
				<defs>
					<linearGradient
						id="dl-reach-line"
						x1="0"
						y1="1"
						x2="1"
						y2="0"
					>
						<stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.45" />
						<stop offset="1" stopColor="var(--color-primary)" />
					</linearGradient>
				</defs>
				<motion.path
					d="M40 178 Q150 176 210 128 Q272 78 388 26"
					fill="none"
					stroke="url(#dl-reach-line)"
					strokeWidth="3.5"
					strokeLinecap="round"
					initial={{ pathLength: reduceMotion ? 1 : 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
				/>
				<motion.circle
					cx="40"
					cy="178"
					r="5"
					className="fill-primary/50"
					initial={{ opacity: reduceMotion ? 1 : 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 1 }}
				/>
				<motion.circle
					cx="388"
					cy="26"
					r="13"
					className="fill-primary"
					opacity={0.18}
					initial={{ opacity: reduceMotion ? 0.18 : 0 }}
					animate={{ opacity: 0.18 }}
					transition={{ duration: 0.4, delay: 2 }}
				/>
				<motion.circle
					cx="388"
					cy="26"
					r="7"
					className="fill-primary"
					initial={{ opacity: reduceMotion ? 1 : 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 2 }}
				/>
				<motion.g
					initial={{ opacity: reduceMotion ? 1 : 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.1 }}
				>
					<text
						x="40"
						y="200"
						className="fill-muted-foreground"
						fontFamily="inherit"
						fontSize="13"
						fontWeight="600"
					>
						1 branch
					</text>
					<text
						x="40"
						y="215"
						className="fill-muted-foreground/70"
						fontFamily="inherit"
						fontSize="12"
					>
						Local customers only
					</text>
				</motion.g>
				<motion.g
					initial={{ opacity: reduceMotion ? 1 : 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 2.1 }}
				>
					<text
						x="388"
						y="-6"
						textAnchor="end"
						className="fill-primary"
						fontFamily="inherit"
						fontSize="14"
						fontWeight="600"
					>
						All of Malaysia
					</text>
					<text
						x="388"
						y="-22"
						textAnchor="end"
						className="fill-muted-foreground/70"
						fontFamily="inherit"
						fontSize="12"
					>
						Web &amp; apps · digital licence
					</text>
				</motion.g>
			</svg>

			<div className="mt-8 grid grid-cols-3 gap-3 border-t pt-5">
				{PHASES.map((item) => (
					<div key={item.phase}>
						<div className="type-mono-label text-muted-foreground/70">
							{item.phase}
						</div>
						<div className="mt-0.5 text-sm font-semibold text-foreground">
							{item.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const TRUST_CHIPS = [
	"Licensing, platform and go-live in one contract",
	"Signing stays on your premises",
] as const;

export function DigitalLicenseHero() {
	const reduceMotion = useReducedMotion();

	return (
		<section className="hero-under-nav relative overflow-hidden">
			<div className="absolute inset-0 -z-10" aria-hidden>
				<div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
				<svg
					className="absolute inset-0 h-full w-full opacity-[0.045]"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="dl-hero-grid"
							width="48"
							height="48"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 48 0 L 0 0 0 48"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#dl-hero-grid)" />
				</svg>
				<motion.div
					className="absolute -top-[180px] -right-[140px] h-[640px] w-[640px] rounded-full bg-primary/15 blur-3xl"
					animate={
						reduceMotion
							? undefined
							: { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }
					}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="mx-auto max-w-6xl px-6 pt-[76px] pb-[68px] md:pt-20 md:pb-16">
				<div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
							<Link
								href="/#solutions"
								className="transition-colors hover:text-foreground"
							>
								Solutions
							</Link>
							<span className="text-border" aria-hidden>
								/
							</span>
							<span className="font-medium text-foreground">
								KPKT Digital Licence
							</span>
						</div>

						<h1 className="type-h1 text-pretty text-foreground">
							Go nationwide. We&apos;ll get you licensed.
						</h1>

						<p className="type-lede-hero mt-5 max-w-[34em] text-pretty text-muted-foreground">
							End-to-end KPKT{" "}
							<strong className="font-semibold text-foreground">
								Online Money Lending Licence
							</strong>{" "}
							— pemberian pinjaman wang dalam talian, from kickoff
							to your first nationwide disbursement in about three
							months.
						</p>
						<p className="mt-3.5 max-w-[34em] text-base text-muted-foreground md:text-[17px]">
							We run the licence path, build your platform on{" "}
							<Link
								href="/truekredit"
								className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
							>
								TrueKredit™ Pro
							</Link>
							, and stay in the room through approval and go-live.
							One team, one contract.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
							<Button asChild size="lg" className="gap-2">
								<CtaLink href="/contact?subject=Digital%20KPKT%20Licence">
									Book a Free Consultation
									<ArrowRight className="h-4 w-4" />
								</CtaLink>
							</Button>
							<Button asChild variant="outline" size="lg">
								<CtaLink href="#qualify">
									Check if you qualify
								</CtaLink>
							</Button>
						</div>

						<div className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-muted-foreground">
							{TRUST_CHIPS.map((label) => (
								<span
									key={label}
									className="inline-flex items-center gap-1.5"
								>
									<Check
										className="h-3.5 w-3.5 text-primary"
										aria-hidden
									/>
									{label}
								</span>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.12 }}
					>
						<ReachChart />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
