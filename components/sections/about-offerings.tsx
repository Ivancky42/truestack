"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	ClipboardCheck,
	Cloud,
	Code2,
	CreditCard,
	FileCheck,
	Layers,
	type LucideIcon,
} from "lucide-react";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Offering = {
	icon: LucideIcon;
	title: string;
	summary: string;
	items: string[];
	href: string;
	cta: string;
	accent: string;
	iconBg: string;
};

const offerings: Offering[] = [
	{
		icon: CreditCard,
		title: "Lending platforms",
		summary:
			"Purpose-built systems for KPKT money lending, Shariah financing, and peer-to-peer — branded to you, audit-ready, and supported after launch.",
		items: ["TrueKredit™", "TrueSyariah™", "TrueP2P™"],
		href: "/truekredit",
		cta: "Explore platforms",
		accent: "text-primary",
		iconBg: "bg-primary/10",
	},
	{
		icon: Cloud,
		title: "Fintech infrastructure",
		summary:
			"Production APIs for identity, company data, payments, and credit — built for Malaysian rails and regulations, so you integrate once instead of stitching vendors.",
		items: ["TrueIdentity™", "TrueSSM™", "TruePay™", "TrueScore™"],
		href: "/trueidentity",
		cta: "See infrastructure",
		accent: "text-sky-700",
		iconBg: "bg-sky-500/10",
	},
	{
		icon: Layers,
		title: "Professional services",
		summary:
			"Licensing, renewals, and custom build when you need more than a product — one team that understands both the regulator and the software.",
		items: [
			"Digital KPKT licence",
			"Account management",
			"Custom software",
		],
		href: "/services/digital-license",
		cta: "Explore digital licence",
		accent: "text-kpkt",
		iconBg: "bg-kpkt/10",
	},
];

const howItFits = [
	{
		icon: FileCheck,
		title: "Licence & compliance",
		body: "We help you convert to a digital KPKT licence, renew on time, and stay filing-ready — so growth is not blocked by paperwork.",
	},
	{
		icon: CreditCard,
		title: "Operate on proven software",
		body: "Your lending stack runs on platforms we already operate in production, with shared infrastructure for e-KYC, payments, and registry data.",
	},
	{
		icon: Code2,
		title: "Extend when you need to",
		body: "When off-the-shelf is not enough, the same team builds custom workflows, apps, and integrations — without handing you to a new vendor.",
	},
	{
		icon: ClipboardCheck,
		title: "One accountable partner",
		body: "From first consultation to go-live and ongoing support, you get a single point of ownership across licence, platform, and delivery.",
	},
];

export function AboutOfferings() {
	return (
		<section
			aria-labelledby="about-offerings-heading"
			className="border-t bg-background py-16 md:py-24"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mx-auto max-w-3xl text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.45 }}
				>
					<SectionBadge
						icon={Layers}
						text="What we offer"
						className="justify-center"
					/>
					<h2
						id="about-offerings-heading"
						className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
					>
						Platforms, infrastructure, and services — built to work
						as one
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						When you need more than a vendor — compliance, lending
						software, and Malaysian fintech APIs that work together
						— we give you one accountable team from launch through
						scale.
					</p>
				</motion.div>

				<div className="mt-12 grid gap-5 lg:grid-cols-3">
					{offerings.map((offering, index) => {
						const Icon = offering.icon;
						return (
							<motion.article
								key={offering.title}
								className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm md:p-7"
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.4,
									delay: index * 0.08,
								}}
							>
								<div
									className={cn(
										"mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
										offering.iconBg,
									)}
								>
									<Icon
										className={cn("h-5 w-5", offering.accent)}
										aria-hidden
									/>
								</div>
								<h3 className="font-display text-xl font-semibold tracking-tight">
									{offering.title}
								</h3>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
									{offering.summary}
								</p>
								<ul className="mt-5 flex flex-wrap gap-1.5">
									{offering.items.map((item) => (
										<li
											key={item}
											className="rounded-md border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/80"
										>
											{item}
										</li>
									))}
								</ul>
								<div className="mt-6">
									<Button
										asChild
										variant="ghost"
										className={cn(
											"h-auto gap-1.5 px-0 hover:bg-transparent",
											offering.accent,
										)}
									>
										<Link href={offering.href}>
											{offering.cta}
											<ArrowRight className="h-4 w-4" />
										</Link>
									</Button>
								</div>
							</motion.article>
						);
					})}
				</div>

				<motion.div
					className="mt-16 rounded-2xl border bg-muted/25 p-6 md:p-10"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.45 }}
				>
					<div className="mx-auto max-w-2xl text-center">
						<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
							How it ties together for you
						</h3>
						<p className="mt-3 text-sm text-muted-foreground md:text-base">
							You are not buying modules in isolation. You need a
							path from licence to live portfolio — with clear
							ownership at every step.
						</p>
					</div>
					<div className="mt-8 grid gap-6 sm:grid-cols-2">
						{howItFits.map((step) => {
							const Icon = step.icon;
							return (
								<div
									key={step.title}
									className="flex gap-3.5"
								>
									<span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
										<Icon
											className="h-4 w-4 text-primary"
											aria-hidden
										/>
									</span>
									<div>
										<p className="font-semibold text-foreground">
											{step.title}
										</p>
										<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
											{step.body}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
