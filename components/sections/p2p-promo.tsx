"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrueP2PHeroVisual } from "@/components/sections/truep2p-hero-visual";

const features = [
	"Conventional or Shariah-aligned (Gharamah & Ta'widh)",
	"Investor portal, accreditation tiers & per-issuer caps",
	"Issuer onboarding, listings engine & escrow (FPX/DuitNow)",
	"e-KYC, AML/CFT screening, e-signing & SC-shaped reporting",
];

export function TrueP2PPanel() {
	return (
		<motion.div
			id="p2p-software-development"
			className="grid items-center gap-8 rounded-2xl border border-violet-200/60 bg-background p-6 md:gap-10 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			<div className="order-2 lg:order-1">
				<TrueP2PHeroVisual className="max-w-none" />
			</div>

			<div className="order-1 flex flex-col justify-center gap-5 lg:order-2">
				<div>
					<h3
						id="p2p-software-development-heading"
						className="font-display text-2xl font-medium tracking-tight md:text-3xl"
					>
						TrueP2P™
					</h3>
					<p className="mt-1 text-sm font-medium text-violet-700">
						Peer-to-peer financing platforms
					</p>
					<p className="mt-3 text-muted-foreground">
						Investor and issuer portals, escrow and payments —
						engineered for Securities Commission Malaysia RMO
						requirements, white-labelled to your brand.
					</p>
				</div>
				<ul
					className="space-y-2.5"
					aria-label="Built into every P2P build"
				>
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/10">
								<Check className="h-3 w-3 text-violet-700" />
							</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1">
					<Button
						asChild
						className="gap-2 bg-violet-600 hover:bg-violet-700"
					>
						<Link href="/services/p2p-software-development">
							Explore TrueP2P™
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
