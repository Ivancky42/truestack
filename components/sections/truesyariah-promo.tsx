"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Award,
	HeartHandshake,
	Landmark,
	Moon,
	Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";

const highlights = [
	{ icon: Landmark, text: "Tawarruq via Bursa Suq Al-Sila'" },
	{ icon: HeartHandshake, text: "Ta'widh & Gharamah ledgers" },
	{ icon: Scale, text: "Shariah committee audit packs" },
];

export function TrueSyariahPromo() {
	return (
		<section className="border-t bg-emerald-500/5 py-20">
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-12 max-w-3xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge
						icon={Moon}
						text="Shariah Digital Lending"
						className="[&>span]:text-emerald-700 [&>svg]:text-emerald-700"
					/>
					<h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
						TrueSyariah™
					</h2>
					<p className="mt-4 text-lg text-muted-foreground md:text-xl">
						Shariah-compliant digital financing platform for
						Malaysian operators — Tawarruq via BSAS,
						Ta&apos;widh and Gharamah ledgers, e-KYC, signing, and
						branded borrower channels on{" "}
						<span className="font-medium text-foreground">
							dedicated AWS Malaysia
						</span>
						, ring-fenced from conventional lending.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-800">
							<Moon className="h-4 w-4" />
							TrueSyariah — Shariah-compliant
						</span>
						<span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-800">
							<Award className="h-4 w-4" />
							Shariah digital lending
						</span>
					</div>
				</motion.div>

				<div className="mb-12 grid gap-6 md:grid-cols-3">
					{highlights.map((item, index) => (
						<motion.div
							key={item.text}
							className="group rounded-2xl border border-emerald-200/60 bg-background p-6 transition-all hover:border-emerald-300 hover:shadow-md"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/15">
								<item.icon className="h-6 w-6 text-emerald-700" />
							</div>
							<h3 className="text-lg font-semibold">{item.text}</h3>
						</motion.div>
					))}
				</div>

				<motion.div
					className="grid gap-8 rounded-2xl border border-emerald-200/60 bg-background p-8 md:grid-cols-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<div className="overflow-hidden rounded-xl border border-emerald-200/60 bg-linear-to-br from-emerald-50 via-white to-amber-50 shadow-lg">
						<Image
							src="/truesyariah/hero.png"
							alt="TrueSyariah Shariah-compliant digital lending platform — Tawarruq, Ta'widh and Gharamah modules"
							width={600}
							height={400}
							className="w-full object-cover"
						/>
					</div>

					<div className="flex flex-col justify-center gap-4 md:pl-4">
						<div>
							<h3 className="mb-2 text-xl font-semibold">
								End-to-end Shariah financing stack
							</h3>
							<p className="text-muted-foreground">
								From Tawarruq commodity trades and Ta&apos;widh
								/ Gharamah accounting to e-KYC, on-prem signing,
								and borrower web &amp; mobile — built for your
								Shariah committee and regulatory review.
							</p>
						</div>
						<ul className="space-y-2">
							{[
								"Tawarruq via Bursa Suq Al-Sila' (BSAS)",
								"Segregated Ta'widh and Gharamah ledgers",
								"On-prem PKI digital signing",
								"Branded web & native iOS/Android apps",
							].map((feature) => (
								<li
									key={feature}
									className="flex items-center gap-2 text-sm text-muted-foreground"
								>
									<div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
									{feature}
								</li>
							))}
						</ul>
						<div className="mt-2 rounded-xl border border-emerald-200/70 bg-emerald-500/5 p-4">
							<div className="flex items-start gap-3">
								<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
									<Moon className="h-4 w-4 text-emerald-800" />
								</div>
								<div>
									<p className="text-sm font-semibold text-foreground">
										Separate licence, separate entity
									</p>
									<p className="text-sm text-muted-foreground">
										Shariah digital lending requires its own
										Sdn. Bhd. and AWS deployment —
										ring-fenced from any TrueKredit
										conventional book.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-2 flex flex-wrap gap-3">
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
								className="gap-2 border-emerald-300 text-emerald-800 hover:bg-emerald-500/5 hover:text-emerald-900"
							>
								<Link href="/contact?subject=TrueSyariah">
									Book a Free Consultation
								</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
