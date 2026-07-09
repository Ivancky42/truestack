"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrueKreditHeroVisual } from "@/components/sections/truekredit-hero-visual";

const features = [
	"One system for borrowers, schedules, repayments and KPKT paperwork",
	"Your loan data stays on your own secure cloud in Malaysia",
	"Audit-ready trails — who did what, when",
	"Upgrade to Pro for customer apps and digital signing — same loan book",
];

export function TrueKreditPanel() {
	return (
		<motion.div
			className="grid items-center gap-8 rounded-2xl border border-primary/15 bg-background p-6 md:gap-10 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			<div className="order-2 lg:order-1">
				<TrueKreditHeroVisual className="max-w-none" />
			</div>

			<div className="order-1 flex flex-col justify-center gap-5 lg:order-2">
				<div>
					<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
						TrueKredit™
					</h3>
					<p className="mt-1 text-sm font-medium text-primary">
						Loan management for KPKT-licensed money lenders
					</p>
					<p className="mt-3 text-muted-foreground">
						Lending gets messy fast — borrower files, instalments,
						audits. TrueKredit puts the whole book in one place your
						team can trust, with your customer data kept separate on
						your own secure cloud.
					</p>
				</div>
				<ul className="space-y-2.5">
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
								<Check className="h-3 w-3 text-primary" />
							</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1">
					<Button asChild className="gap-2">
						<Link href="/truekredit">
							Explore TrueKredit
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
