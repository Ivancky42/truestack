"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrueSyariahHeroVisual } from "@/components/sections/truesyariah-hero-visual";

const features = [
	"Tawarruq commodity financing",
	"Segregated Ta'widh & Gharamah ledgers",
	"Shariah committee audit packs & exports",
	"e-KYC, digital signing & branded web/mobile apps",
];

export function TrueSyariahPanel() {
	return (
		<motion.div
			className="grid items-center gap-8 rounded-2xl border border-ts-rule bg-ts-parchment p-6 md:gap-10 md:p-8 lg:grid-cols-2"
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
					<h3 className="type-h2-sm">
						TrueSyariah™
					</h3>
					<p className="mt-1 type-ts-eyebrow text-ts-gold">
						Shariah-compliant digital financing
					</p>
					<p className="mt-3 text-muted-foreground">
						Built for Shariah digital lending operators — Tawarruq
						commodity financing, Ta&apos;widh and Gharamah ledgers, e-KYC and
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
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ts-gold rotate-45">
								<Check className="h-3 w-3 -rotate-45 text-ts-gold" />
							</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1">
					<Button
						asChild
						className="gap-2 rounded-[2px] bg-none bg-ts-ink text-ts-parchment hover:bg-ts-gold hover:text-ts-parchment"
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
