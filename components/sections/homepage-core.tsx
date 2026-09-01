"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, CreditCard, Fingerprint } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homepagePartners } from "@/components/logo-cloud-1";
import { AdaptiveLogoImage } from "@/components/logo-cloud-image";

const LIVE: {
	name: string;
	href: string;
	icon: LucideIcon;
	body: string;
	chips?: string[];
}[] = [
	{
		name: "TrueIdentity™",
		href: "/trueidentity",
		icon: Fingerprint,
		body: "e-KYC for Malaysia: MyKad OCR, liveness detection and biometric matching, PDPA compliant.",
	},
	{
		name: "TrueSSM™",
		href: "/truessm",
		icon: Building2,
		body: "SSM-sourced company profiles, officers, shareholders and charges for audit-ready due diligence.",
	},
	{
		name: "Payment gateway",
		href: "/contact?subject=Payments",
		icon: CreditCard,
		body: "FPX and DuitNow rails, cards, recurring mandates, webhooks and automated reconciliation — integrated with FassPay and GKash.",
		chips: ["FassPay", "GKash"],
	},
];

const COMING_SOON = [
	{
		name: "TrueScore™",
		body: "CTOS-backed credit reports, CCRIS data, litigation and bankruptcy checks.",
	},
	{
		name: "TrueCommodity™",
		body: "Tawarruq commodity trading with Gharamah and Ta'widh ledgers, committee exports.",
	},
	{
		name: "TrueSight™",
		body: "AI borrower risk scoring with explainable creditworthiness signals across portfolios.",
	},
] as const;

export function HomepageCore() {
	return (
		<section
			id="core"
			data-nav-theme="dark"
			className="scroll-mt-20 border-t bg-slate-950 py-16 text-white md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-9 max-w-3xl"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-blue-400">
						Truestack Core
					</p>
					<h2 className="type-h2">
						The integrations you would otherwise build twice.
					</h2>
					<p className="mt-3.5 type-lede text-slate-400">
						Already built into TrueKredit™ — or we connect the same
						checks to the system you already run, via API. Identity,
						company data and payments on Malaysian rails — one
						integrated stack that keeps your compliance in one
						place.
					</p>
				</motion.div>

				<div className="grid gap-4 md:grid-cols-3">
					{LIVE.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
							>
								<Link
									href={item.href}
									className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-colors hover:border-primary"
								>
									<div className="mb-3.5 flex items-center justify-between">
										<div className="flex h-10.5 w-10.5 items-center justify-center rounded-lg bg-primary/15">
											<Icon
												className="h-5 w-5 text-blue-400"
												aria-hidden
											/>
										</div>
										<span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
											Live
										</span>
									</div>
									<h3 className="type-card-title">
										{item.name}
									</h3>
									<p className="mt-2 text-[15px] leading-relaxed text-slate-400">
										{item.body}
									</p>
									{item.chips ? (
										<div className="mt-3 flex flex-wrap gap-1.5">
											{item.chips.map((chip) => (
												<span
													key={chip}
													className="rounded-full bg-slate-400/15 px-2.5 py-0.5 text-xs font-medium text-slate-300"
												>
													{chip}
												</span>
											))}
										</div>
									) : null}
								</Link>
							</motion.div>
						);
					})}
				</div>

				<div className="mt-4 grid gap-4 md:grid-cols-3">
					{COMING_SOON.map((item, index) => (
						<motion.div
							key={item.name}
							className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-6"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: 0.24 + index * 0.08,
							}}
						>
							<div className="mb-3.5 flex items-center justify-between gap-3">
								<h3 className="type-card-title text-slate-200">
									{item.name}
								</h3>
								<span className="shrink-0 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
									Coming soon
								</span>
							</div>
							<p className="text-[15px] leading-relaxed text-slate-500">
								{item.body}
							</p>
						</motion.div>
					))}
				</div>

				<div className="mt-10 border-t border-slate-800 pt-8">
					<p className="mb-5 type-eyebrow text-slate-500">
						Data, rails and certification partners
					</p>
					<div className="flex flex-wrap items-center gap-x-10 gap-y-6">
						{homepagePartners.map((partner) => (
							<AdaptiveLogoImage
								key={partner.name}
								src={partner.logo}
								alt={partner.name}
								displaySize="default"
								color
								boost={"boost" in partner && partner.boost}
								className="opacity-75 brightness-0 invert"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
