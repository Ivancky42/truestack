"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
	"Tawarruq via Bursa Suq Al-Sila' (BSAS)",
	"Segregated Ta'widh & Gharamah ledgers",
	"Shariah committee audit packs & exports",
	"e-KYC, on-prem PKI signing & branded web/mobile apps",
];

export function TrueSyariahPanel() {
	return (
		<motion.div
			className="grid items-center gap-8 rounded-2xl border border-emerald-200/60 bg-background p-6 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			{/* Visual */}
			<div className="overflow-hidden rounded-xl border border-emerald-200/60 bg-linear-to-br from-emerald-50 via-white to-amber-50 shadow-lg">
				<Image
					src="/truesyariah/hero.png"
					alt="TrueSyariah Shariah-compliant digital financing platform — Tawarruq, Ta'widh and Gharamah modules"
					width={600}
					height={400}
					className="w-full object-cover"
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col justify-center gap-4">
				<div>
					<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
						TrueSyariah™
					</h3>
					<p className="mt-2 text-muted-foreground">
						Custom Shariah-compliant digital financing software, built
						on our engine for your operation — Tawarruq via BSAS,
						Ta&apos;widh and Gharamah ledgers, e-KYC and signing on
						dedicated AWS Malaysia, ring-fenced from conventional
						lending.
					</p>
				</div>
				<ul className="space-y-2">
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1 flex flex-wrap gap-3">
					<Button
						asChild
						className="gap-2 bg-emerald-600 hover:bg-emerald-700"
					>
						<Link href="/truesyariah">
							Explore TrueSyariah
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						className="border-emerald-300 text-emerald-800 hover:bg-emerald-500/5 hover:text-emerald-900"
					>
						<Link href="/contact?subject=TrueSyariah">
							Book a Free Consultation
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
