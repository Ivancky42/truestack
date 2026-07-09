"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrueSyariahHeroVisual } from "@/components/sections/truesyariah-hero-visual";

const features = [
	"Tawarruq via Bursa Suq Al-Sila' (BSAS)",
	"Segregated Ta'widh & Gharamah ledgers",
	"Shariah committee audit packs & exports",
	"e-KYC, digital signing & branded web/mobile apps",
];

export function TrueSyariahPanel() {
	return (
		<motion.div
			className="grid items-center gap-8 rounded-2xl border border-emerald-200/60 bg-background p-6 md:gap-10 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			<div className="order-2 lg:order-1">
				<TrueSyariahHeroVisual className="max-w-none" />
			</div>

			<div className="order-1 flex flex-col justify-center gap-5 lg:order-2">
				<div>
					<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
						TrueSyariah™
					</h3>
					<p className="mt-1 text-sm font-medium text-emerald-700">
						Shariah-compliant digital financing
					</p>
					<p className="mt-3 text-muted-foreground">
						Built for Shariah digital lending operators — Tawarruq
						via BSAS, Ta&apos;widh and Gharamah ledgers, e-KYC and
						signing, with books ring-fenced from conventional
						lending.
					</p>
				</div>
				<ul className="space-y-2.5">
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
								<Check className="h-3 w-3 text-emerald-700" />
							</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1">
					<Button
						asChild
						className="gap-2 bg-emerald-600 hover:bg-emerald-700"
					>
						<Link href="/truesyariah">
							Explore TrueSyariah
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
