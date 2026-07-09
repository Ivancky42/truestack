"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	BadgeCheck,
	Banknote,
	Layers,
	Receipt,
	ShieldCheck,
	Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrueP2PHeroVisual } from "@/components/sections/truep2p-hero-visual";

function GridPattern() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-linear-to-b from-violet-500/5 via-transparent to-transparent" />
			<svg
				className="absolute inset-0 h-full w-full opacity-[0.03]"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden
			>
				<defs>
					<pattern
						id="grid-p2p-hero"
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
				<rect width="100%" height="100%" fill="url(#grid-p2p-hero)" />
			</svg>
			<motion.div
				className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-violet-500/10 to-indigo-500/10 blur-3xl"
				animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>
		</div>
	);
}

export function P2PHero() {
	return (
		<section id="hero" className="relative overflow-hidden">
			<GridPattern />
			<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<motion.div
							className="mb-5 flex flex-wrap gap-2 text-sm font-medium"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
						>
							<span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3.5 py-1.5 text-violet-700">
								<ShieldCheck className="h-4 w-4 shrink-0" />
								SC RMO-aligned
							</span>
							<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-emerald-700">
								<Sparkles className="h-4 w-4 shrink-0" />
								Conventional &amp; Shariah-aligned
							</span>
							<span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3.5 py-1.5 text-indigo-700">
								<BadgeCheck className="h-4 w-4 shrink-0" />
								Examiner-ready by design
							</span>
						</motion.div>

						<motion.h1
							className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							TrueP2P™ — peer-to-peer platforms for{" "}
							<span className="bg-linear-to-r from-violet-600 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
								Malaysia.
							</span>
						</motion.h1>

						<motion.p
							className="mt-5 text-lg font-medium text-violet-700 md:text-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.15 }}
						>
							Conventional and Shariah-aligned peer-to-peer
							financing platforms.
						</motion.p>

						<motion.p
							className="mt-4 text-lg text-muted-foreground md:text-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Investor and issuer portals, escrow, payments,
							e-signing, and Gharamah/Ta&apos;widh accounting —
							built for SC Malaysia, with RMO registration support
							alongside the build.
						</motion.p>

						<motion.div
							className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.25 }}
						>
							<Button
								asChild
								size="lg"
								className="gap-2 bg-violet-600 hover:bg-violet-700"
							>
								<Link href="/contact?subject=TrueP2P">
									Book a Free Consultation
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="gap-2 border-violet-300 text-violet-800 hover:bg-violet-500/5"
							>
								<Link href="#what-we-build">
									<Layers className="h-4 w-4" />
									See platform modules
								</Link>
							</Button>
						</motion.div>

						<motion.div
							className="mt-10 grid grid-cols-3 gap-4 border-t pt-6 sm:gap-6"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							{[
								{
									icon: Banknote,
									value: "End-to-end",
									label: "Investor + Issuer + Admin",
								},
								{
									icon: ShieldCheck,
									value: "AWS Malaysia",
									label: "Data residency",
								},
								{
									icon: Receipt,
									value: "Audit-ready",
									label: "Logs & exports",
								},
							].map((stat) => (
								<div
									key={stat.label}
									className="flex items-start gap-2"
								>
									<stat.icon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
									<div>
										<p className="text-sm font-semibold text-foreground">
											{stat.value}
										</p>
										<p className="text-xs text-muted-foreground">
											{stat.label}
										</p>
									</div>
								</div>
							))}
						</motion.div>
					</motion.div>

					<TrueP2PHeroVisual animateOnMount />
				</div>
			</div>
		</section>
	);
}
