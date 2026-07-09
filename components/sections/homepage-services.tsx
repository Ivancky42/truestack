"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Briefcase,
	Check,
	ClipboardCheck,
	Code2,
	FileCheck,
	type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";
import { DigitalLicenseHeroVisual } from "@/components/sections/digital-license-hero";
import { SoftwareDevelopmentHeroVisual } from "@/components/sections/software-development-hero";

type TabId = "account" | "digital" | "software";

const tabs: {
	id: TabId;
	label: string;
	sublabel: string;
	icon: LucideIcon;
	activeClass: string;
}[] = [
	{
		id: "digital",
		label: "Digital License",
		sublabel: "Go nationwide online",
		icon: FileCheck,
		activeClass:
			"border-kpkt/40 bg-kpkt/5 text-kpkt [&_svg]:text-kpkt",
	},
	{
		id: "account",
		label: "Account Management",
		sublabel: "KPKT renewals & filings",
		icon: ClipboardCheck,
		activeClass:
			"border-amber-300 bg-amber-500/5 text-amber-900 [&_svg]:text-amber-700",
	},
	{
		id: "software",
		label: "Custom Software",
		sublabel: "From idea to go-live",
		icon: Code2,
		activeClass:
			"border-primary/40 bg-primary/5 text-primary [&_svg]:text-primary",
	},
];

type ServicePanelProps = {
	title: string;
	eyebrow: string;
	eyebrowClass: string;
	description: string;
	features: string[];
	checkClass: string;
	checkBgClass: string;
	ctaLabel: string;
	ctaHref: string;
	ctaClass?: string;
	borderClass: string;
	steps: { label: string; detail: string }[];
	stepAccentClass: string;
};

function ServicePanel({
	title,
	eyebrow,
	eyebrowClass,
	description,
	features,
	checkClass,
	checkBgClass,
	ctaLabel,
	ctaHref,
	ctaClass,
	borderClass,
	steps,
	stepAccentClass,
}: ServicePanelProps) {
	return (
		<motion.div
			className={cn(
				"grid items-center gap-8 rounded-2xl border bg-background p-6 md:gap-10 md:p-8 lg:grid-cols-2",
				borderClass,
			)}
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			<div className="order-2 lg:order-1">
				<div className="relative overflow-hidden rounded-2xl border bg-muted/40 p-6 md:p-8">
					<div className="space-y-3">
						{steps.map((step, index) => (
							<div
								key={step.label}
								className="flex items-start gap-3 rounded-xl border bg-background/80 p-3.5 shadow-sm"
							>
								<span
									className={cn(
										"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold",
										stepAccentClass,
									)}
								>
									{index + 1}
								</span>
								<div className="min-w-0">
									<p className="text-sm font-semibold text-foreground">
										{step.label}
									</p>
									<p className="mt-0.5 text-xs text-muted-foreground">
										{step.detail}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="order-1 flex flex-col justify-center gap-5 lg:order-2">
				<div>
					<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
						{title}
					</h3>
					<p className={cn("mt-1 text-sm font-medium", eyebrowClass)}>
						{eyebrow}
					</p>
					<p className="mt-3 text-muted-foreground">{description}</p>
				</div>
				<ul className="space-y-2.5">
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span
								className={cn(
									"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
									checkBgClass,
								)}
							>
								<Check className={cn("h-3 w-3", checkClass)} />
							</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1">
					<Button asChild className={cn("gap-2", ctaClass)}>
						<Link href={ctaHref}>
							{ctaLabel}
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

function AccountManagementPanel() {
	return (
		<ServicePanel
			title="KPKT Account Management"
			eyebrow="Managed compliance for licensed money lenders"
			eyebrowClass="text-amber-800"
			description="We handle regulatory and administrative work so you can focus on growth — license renewals, annual submissions, and compliance coordination with a single trusted partner."
			features={[
				"License renewals & permit management",
				"Annual B & B1 submissions",
				"Director, shareholder & CoSec updates",
				"PDPA applications & express handling",
			]}
			checkClass="text-amber-700"
			checkBgClass="bg-amber-500/10"
			ctaLabel="Explore Account Management"
			ctaHref="/services/account-management"
			ctaClass="bg-amber-700 hover:bg-amber-800"
			borderClass="border-amber-200/60"
			stepAccentClass="bg-amber-500/10 text-amber-800"
			steps={[
				{
					label: "Brief & handover",
					detail: "Share your licence status and upcoming deadlines",
				},
				{
					label: "We prepare & file",
					detail: "Renewals, B/B1, SSM and PDPA paperwork handled",
				},
				{
					label: "Stay compliant",
					detail: "Ongoing coordination so nothing slips through",
				},
			]}
		/>
	);
}

function DigitalLicensePanel() {
	const features = [
		"Digital KPKT license application support",
		"Provisional license presentation prep",
		"Custom web & mobile on TrueKredit™ Pro",
		"Compliance verification through go-live",
	];

	return (
		<motion.div
			className="grid items-center gap-8 rounded-2xl border border-kpkt/25 bg-background p-6 md:gap-10 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			<div className="order-2 lg:order-1">
				<DigitalLicenseHeroVisual className="max-w-none" />
			</div>

			<div className="order-1 flex flex-col justify-center gap-5 lg:order-2">
				<div>
					<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
						Digital KPKT License
					</h3>
					<p className="mt-1 text-sm font-medium text-kpkt">
						From traditional licence to nationwide digital lending
					</p>
					<p className="mt-3 text-muted-foreground">
						Go from a traditional KPKT licence to nationwide digital
						lending. We handle licensing, TrueKredit™ Pro, and
						go-live — typically in about three months.
					</p>
				</div>
				<ul className="space-y-2.5">
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
								<Check className="h-3 w-3 text-kpkt" />
							</span>
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1">
					<Button asChild className="gap-2 bg-kpkt hover:bg-kpkt/90">
						<Link href="/services/digital-license">
							Explore Digital License
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

function CustomSoftwarePanel() {
	const features = [
		"Web, mobile & internal tools under your brand",
		"Platforms and workflows that fit how you operate",
		"Integrations with the services you already use",
		"Long-term support after go-live",
	];

	return (
		<motion.div
			className="grid items-center gap-8 rounded-2xl border border-primary/15 bg-background p-6 md:gap-10 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			<div className="order-2 lg:order-1">
				<SoftwareDevelopmentHeroVisual className="max-w-none" />
			</div>

			<div className="order-1 flex flex-col justify-center gap-5 lg:order-2">
				<div>
					<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
						Custom Software Development
					</h3>
					<p className="mt-1 text-sm font-medium text-primary">
						If you can dream it, we can build it
					</p>
					<p className="mt-3 text-muted-foreground">
						Custom software from first sketch to go-live — web,
						mobile, platforms, and the tools your team runs on.
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
						<Link href="/services/software-development">
							Explore Software Development
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

export function HomepageServices() {
	const [active, setActive] = useState<TabId>("digital");

	return (
		<section
			aria-labelledby="homepage-services-heading"
			className="border-t bg-muted/20 py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto mb-10 max-w-3xl text-center">
					<SectionBadge
						icon={Briefcase}
						text="Professional Services"
						className="justify-center"
					/>
					<h2
						id="homepage-services-heading"
						className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
					>
						Services that get you licensed and live
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						Beyond platforms and APIs — we help Malaysian lenders
						stay compliant, convert to digital licences, and ship
						custom software when off-the-shelf isn&apos;t enough.
					</p>
				</div>

				<div
					role="tablist"
					aria-label="Services we offer"
					className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
				>
					{tabs.map((tab) => {
						const isActive = active === tab.id;
						const Icon = tab.icon;
						return (
							<button
								key={tab.id}
								type="button"
								role="tab"
								id={`service-${tab.id}-tab`}
								aria-selected={isActive}
								aria-controls={`service-${tab.id}-panel`}
								tabIndex={isActive ? 0 : -1}
								onClick={() => setActive(tab.id)}
								className={cn(
									"flex items-start gap-3 rounded-2xl border bg-background p-4 text-left transition-all hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
									isActive
										? `${tab.activeClass} shadow-sm`
										: "border-border text-muted-foreground [&_svg]:text-muted-foreground hover:border-foreground/20",
								)}
							>
								<span
									className={cn(
										"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
										isActive ? "bg-background" : "bg-muted",
									)}
								>
									<Icon className="h-5 w-5" aria-hidden />
								</span>
								<span className="min-w-0">
									<span className="block font-display text-base font-semibold">
										{tab.label}
									</span>
									<span className="block text-xs text-muted-foreground">
										{tab.sublabel}
									</span>
								</span>
							</button>
						);
					})}
				</div>

				<div className="mt-10">
					<div
						role="tabpanel"
						id="service-digital-panel"
						aria-labelledby="service-digital-tab"
						hidden={active !== "digital"}
					>
						<DigitalLicensePanel />
					</div>
					<div
						role="tabpanel"
						id="service-account-panel"
						aria-labelledby="service-account-tab"
						hidden={active !== "account"}
					>
						<AccountManagementPanel />
					</div>
					<div
						role="tabpanel"
						id="service-software-panel"
						aria-labelledby="service-software-tab"
						hidden={active !== "software"}
					>
						<CustomSoftwarePanel />
					</div>
				</div>
			</div>
		</section>
	);
}
