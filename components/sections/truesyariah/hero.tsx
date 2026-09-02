"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookLock, HandCoins, Scale } from "lucide-react";
import { TrueSyariahHeroVisual } from "@/components/sections/truesyariah-hero-visual";
import { TsEyebrow } from "@/components/sections/truesyariah/primitives";

const TRUST_CHIPS = [
	{ icon: HandCoins, label: "Tawarruq financing" },
	{ icon: Scale, label: "Segregated Ta'widh & Gharamah" },
	{ icon: BookLock, label: "Books ring-fenced" },
] as const;

export function TrueSyariahHero() {
	return (
		<section className="relative overflow-hidden border-b border-ts-rule">
			<div
				className="ts-hero-grid pointer-events-none absolute inset-0 opacity-50"
				aria-hidden
			/>
			<div className="relative mx-auto max-w-6xl px-6">
				<div className="grid items-stretch lg:grid-cols-[1.04fr_0.96fr]">
					<motion.div
						className="border-ts-rule py-16 md:py-20 lg:border-r lg:pr-14"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<TsEyebrow>Lesen Pinjaman Digital Syariah</TsEyebrow>
						<h1 className="type-ts-h1 text-pretty text-ts-ink">
							Start a Shariah financing business, properly, from
							the beginning.
						</h1>
						<p className="mt-6 max-w-[33em] text-pretty text-[19px] leading-[1.62] text-ts-ink-muted">
							Most operators discover the hard parts late: the
							committee wants contracts they have not seen, the
							auditor wants the conventional book kept out of it,
							and the software was never built to tell Ta&apos;widh
							from Gharamah.
						</p>
						<p className="mt-4 max-w-[33em] type-lede-hero text-ts-ink-soft">
							We take you from company structure through committee
							appointment and the licence application, and hand
							you a platform that was Shariah on the day it was
							designed.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Link
								href="/contact?subject=TrueSyariah"
								className="inline-flex min-h-[50px] items-center gap-2 rounded-[2px] bg-ts-ink px-6 text-[16px] font-medium text-ts-parchment transition-colors hover:bg-ts-gold"
							>
								Book a Free Consultation
								<ArrowRight className="h-4 w-4" />
							</Link>
							<Link
								href="#journey"
								className="inline-flex min-h-[50px] items-center rounded-[2px] border border-ts-line px-6 text-[16px] font-medium text-ts-ink transition-colors hover:border-ts-ink"
							>
								See the licensing path
							</Link>
						</div>
						<div className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-ts-ink-soft">
							{TRUST_CHIPS.map(({ icon: Icon, label }) => (
								<span
									key={label}
									className="inline-flex items-center gap-1.5"
								>
									<Icon
										className="h-3.5 w-3.5 text-ts-gold"
										aria-hidden
									/>
									{label}
								</span>
							))}
						</div>
					</motion.div>

					<div className="flex items-center py-10 lg:py-20 lg:pl-14">
						<TrueSyariahHeroVisual animateOnMount />
					</div>
				</div>
			</div>
		</section>
	);
}
