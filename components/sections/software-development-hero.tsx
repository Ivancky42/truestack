"use client";

import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";
import {
	ArrowRight,
	ChevronRight,
	Lightbulb,
	Monitor,
	Smartphone,
	Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SoftwareDevelopmentHeroVisualProps = {
	className?: string;
	animateOnMount?: boolean;
};

/** Idea → shipped product: sketch to web + mobile. */
export function SoftwareDevelopmentHeroVisual({
	className,
	animateOnMount = false,
}: SoftwareDevelopmentHeroVisualProps) {
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
			<div className="relative overflow-hidden rounded-3xl border bg-card shadow-lg shadow-primary/5">
				{/* Soft glow */}
				<div
					className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl"
					aria-hidden
				/>

				{/* Idea — napkin / sketch brief */}
				<div className="relative border-b bg-linear-to-br from-amber-50/80 via-muted/30 to-muted/50 px-6 py-6 dark:from-amber-950/20 dark:via-muted/20 dark:to-muted/40">
					<p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
						Your idea
					</p>
					<div className="relative rounded-2xl border border-dashed border-amber-600/25 bg-background/70 p-4 shadow-sm">
						{/* Corner fold */}
						<div
							className="pointer-events-none absolute right-0 top-0 h-0 w-0 border-l-18 border-t-18 border-l-transparent border-t-amber-500/20"
							aria-hidden
						/>

						<div className="flex items-start gap-3">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-500/20">
								<Lightbulb className="h-4 w-4 text-amber-600" />
							</div>
							<div className="min-w-0 flex-1">
								<p className="font-display text-[15px] font-medium italic leading-snug tracking-tight text-foreground/80">
									“What if we had an app that…”
								</p>
								<p className="mt-1 text-[11px] text-muted-foreground">
									Rough brief · still forming
								</p>
							</div>
						</div>

						{/* Hand-drawn style wireframe boxes */}
						<div className="mt-4 grid grid-cols-3 gap-2">
							<div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20 p-2">
								<div className="mb-1.5 h-5 w-5 rounded border border-dashed border-muted-foreground/35" />
								<div className="h-1 w-full rounded-full bg-muted-foreground/20" />
								<div className="mt-1 h-1 w-2/3 rounded-full bg-muted-foreground/15" />
							</div>
							<div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20 p-2">
								<div className="mb-1.5 flex h-5 items-end gap-0.5">
									<div className="h-2 w-1.5 rounded-sm bg-muted-foreground/25" />
									<div className="h-3.5 w-1.5 rounded-sm bg-muted-foreground/25" />
									<div className="h-2.5 w-1.5 rounded-sm bg-muted-foreground/25" />
								</div>
								<div className="h-1 w-full rounded-full bg-muted-foreground/20" />
								<div className="mt-1 h-1 w-1/2 rounded-full bg-muted-foreground/15" />
							</div>
							<div className="rounded-lg border border-dashed border-amber-600/30 bg-amber-500/5 p-2">
								<div className="mb-1.5 flex h-5 items-center justify-center rounded border border-dashed border-amber-600/35">
									<span className="text-[9px] font-medium text-amber-700/80">
										?
									</span>
								</div>
								<div className="h-1 w-full rounded-full bg-amber-600/20" />
								<div className="mt-1 h-1 w-3/4 rounded-full bg-amber-600/15" />
							</div>
						</div>

						<div className="mt-3 flex flex-wrap gap-1.5">
							<span className="rounded-full border border-dashed border-muted-foreground/30 px-2 py-0.5 text-[10px] text-muted-foreground">
								users?
							</span>
							<span className="rounded-full border border-dashed border-muted-foreground/30 px-2 py-0.5 text-[10px] text-muted-foreground">
								flows?
							</span>
							<span className="rounded-full border border-dashed border-amber-600/35 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-800/80">
								must-haves
							</span>
						</div>
					</div>
				</div>

				{/* Built */}
				<div className="relative bg-linear-to-br from-primary/8 via-background to-violet-500/5 px-6 py-6">
					<p className="mb-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
						<Sparkles className="h-3 w-3" />
						We build it
					</p>
					<div className="flex items-end gap-3">
						{/* Browser mock */}
						<div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-primary/20 bg-background shadow-sm">
							<div className="flex items-center gap-1.5 border-b bg-muted/50 px-2.5 py-1.5">
								<span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
								<span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
								<span className="ml-1 flex-1 truncate rounded bg-muted px-1.5 py-0.5 text-[8px] text-muted-foreground">
									yourbrand.com.my
								</span>
							</div>
							<div className="space-y-2 p-3">
								<div className="flex items-center gap-2">
									<Monitor className="h-3.5 w-3.5 text-primary" />
									<div className="h-2 w-16 rounded-full bg-primary/25" />
								</div>
								<div className="h-1.5 w-full rounded-full bg-muted" />
								<div className="h-1.5 w-4/5 rounded-full bg-muted" />
								<div className="mt-2 grid grid-cols-3 gap-1.5">
									<div className="h-8 rounded-md bg-primary/15" />
									<div className="h-8 rounded-md bg-muted" />
									<div className="h-8 rounded-md bg-muted" />
								</div>
							</div>
						</div>

						{/* Phone mock */}
						<div className="w-[72px] shrink-0 overflow-hidden rounded-2xl border-2 border-primary/25 bg-background shadow-sm">
							<div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-muted" />
							<div className="space-y-1.5 p-2">
								<div className="flex items-center gap-1">
									<Smartphone className="h-2.5 w-2.5 text-primary" />
									<div className="h-1.5 w-8 rounded-full bg-primary/25" />
								</div>
								<div className="h-1 w-full rounded-full bg-muted" />
								<div className="h-1 w-3/4 rounded-full bg-muted" />
								<div className="mt-1 h-6 rounded-md bg-primary/20" />
								<div className="h-5 rounded-md bg-muted" />
								<div className="h-5 rounded-md bg-muted" />
							</div>
						</div>
					</div>
					<p className="mt-4 text-center text-xs text-muted-foreground">
						Web, mobile &amp; admin — live under your brand
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export function SoftwareDevelopmentHero() {
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
							id="swDevHeroGrid"
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
					<rect width="100%" height="100%" fill="url(#swDevHeroGrid)" />
				</svg>
				<div className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-violet-500/5 blur-3xl" />
			</div>

			<div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
							Custom software development
						</p>
						<h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
							If you can dream it,{" "}
							<span className="bg-linear-to-r from-primary via-indigo-500 to-violet-500 bg-clip-text text-transparent">
								we can build it.
							</span>
						</h1>

						<p className="mt-5 text-lg font-medium text-primary md:text-xl">
							Custom software from first sketch to go-live.
						</p>

						<p className="mt-4 text-lg text-muted-foreground md:text-xl">
							Web apps, mobile products, internal tools, and
							platforms under your brand — designed, built, and
							shipped with you.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<Button asChild size="lg" className="gap-2">
								<CtaLink href="/contact?subject=Custom%20Software">
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
								<CtaLink href="#what-we-build">
									See what we build
									<ChevronRight className="h-4 w-4" />
								</CtaLink>
							</Button>
						</div>
					</motion.div>

					<SoftwareDevelopmentHeroVisual animateOnMount />
				</div>
			</div>
		</section>
	);
}
