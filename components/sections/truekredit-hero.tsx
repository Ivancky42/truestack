"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";

function GridPattern() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
			<div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
			<svg
				className="absolute inset-0 h-full w-full text-foreground opacity-[0.03]"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="grid-truekredit-hero"
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
				<rect width="100%" height="100%" fill="url(#grid-truekredit-hero)" />
			</svg>
			<div className="absolute -top-32 left-1/2 h-160 w-160 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl motion-safe:animate-pulse" />
		</div>
	);
}

export function TrueKreditHero() {
	return (
		<section id="hero" className="relative overflow-hidden">
			<GridPattern />
			<div className="relative mx-auto max-w-6xl px-6 pt-16 text-center md:pt-20">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<nav
						aria-label="Breadcrumb"
						className="mb-5 flex items-center justify-center gap-2 text-sm text-muted-foreground"
					>
						<Link href="/" className="hover:text-foreground">
							Platforms
						</Link>
						<span className="text-border" aria-hidden>
							/
						</span>
						<span className="font-medium text-foreground">
							TrueKredit™
						</span>
					</nav>
					<h1 className="mx-auto max-w-[20em] type-h1 text-pretty">
						Run your entire lending book from{" "}
						<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
							one platform.
						</span>
					</h1>
					<p className="mx-auto mt-5 max-w-[40em] type-lede-hero text-pretty text-muted-foreground">
						TrueKredit™ is the{" "}
						<strong className="font-semibold text-foreground">
							money lending management system
						</strong>{" "}
						for Malaysian KPKT-licensed money lenders — borrowers,
						schedules, repayments and KPKT paperwork in one system
						your whole team trusts.
					</p>
					<p className="mx-auto mt-3.5 max-w-[40em] type-lede text-muted-foreground">
						Your data stays on your own secure cloud in Malaysia.
						Go nationwide with Pro when you are ready.
					</p>
					<div className="mt-8 mb-12 flex flex-wrap justify-center gap-3">
						<Button asChild size="lg" className="gap-2">
							<Link href="/contact?subject=TrueKredit">
								Book a Free Consultation
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<CtaLink href="#compare">Standard vs Pro</CtaLink>
						</Button>
					</div>
				</motion.div>
			</div>

			<motion.div
				className="relative mx-auto max-w-270 px-6"
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15 }}
			>
				<div className="overflow-hidden rounded-t-xl border border-b-0 bg-card shadow-lg">
					<div className="flex h-9 items-center gap-1.5 border-b bg-muted/40 px-3.5">
						<span
							className="size-2.5 rounded-full bg-border"
							aria-hidden
						/>
						<span
							className="size-2.5 rounded-full bg-border"
							aria-hidden
						/>
						<span
							className="size-2.5 rounded-full bg-border"
							aria-hidden
						/>
						<span className="ml-2.5 font-mono text-xs text-muted-foreground">
							admin.truekredit
						</span>
					</div>
					<Image
						src="/truekredit/hero_dashboard_screenshot.png"
						alt="TrueKredit admin dashboard — outstanding, collections and portfolio health for a Malaysian money lender"
						width={3368}
						height={2662}
						quality={100}
						unoptimized
						priority
						sizes="(max-width: 1080px) calc(100vw - 3rem), 1080px"
						className="h-auto w-full"
					/>
				</div>
			</motion.div>
		</section>
	);
}
