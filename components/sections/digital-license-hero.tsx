"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";
import {
	ArrowRight,
	Building2,
	ChevronRight,
	Globe,
	MapPin,
	Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
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
					<p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
						Before
					</p>
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted">
							<Building2 className="h-5 w-5 text-muted-foreground" />
						</div>
						<div>
							<p className="font-display text-xl font-medium tracking-tight">
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
					<p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-primary">
						After
					</p>
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary">
							<Globe className="h-5 w-5 text-primary-foreground" />
						</div>
						<div>
							<p className="font-display text-xl font-medium tracking-tight text-primary">
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

export function DigitalLicenseHero() {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
				<svg
					className="absolute inset-0 h-full w-full opacity-[0.03]"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden
				>
					<defs>
						<pattern
							id="dlHeroGrid"
							width="60"
							height="60"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 60 0 L 0 0 0 60"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#dlHeroGrid)" />
				</svg>
				<div className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-cyan-500/5 blur-3xl" />
			</div>

			<div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
							KPKT digital licence
						</p>
						<h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
							Go nationwide.{" "}
							<span className="bg-linear-to-r from-primary via-cyan-600 to-teal-600 bg-clip-text text-transparent">
								We&apos;ll get you licensed.
							</span>
						</h1>

						<p className="mt-5 text-lg font-medium text-primary md:text-xl">
							End-to-end KPKT Online Money Lending Licence —
							about three months.
						</p>

						<p className="mt-4 text-lg text-muted-foreground md:text-xl">
							We handle the licence path, build your platform on{" "}
							<Link
								href="/truekredit"
								className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
							>
								TrueKredit™ Pro
							</Link>
							, and stay with you through approval and go-live —
							so you can lend across Malaysia with confidence.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<Button asChild size="lg" className="gap-2">
								<CtaLink href="/contact?subject=Digital%20KPKT%20Licence">
									Book a Free Consultation
									<ArrowRight className="h-4 w-4" />
								</CtaLink>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="gap-2"
							>
								<CtaLink href="#journey">
									See the journey
									<ChevronRight className="h-4 w-4" />
								</CtaLink>
							</Button>
						</div>
					</motion.div>

					<DigitalLicenseHeroVisual animateOnMount />
				</div>
			</div>
		</section>
	);
}
