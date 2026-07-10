"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	BadgeCheck,
	Banknote,
	BarChart3,
	Building2,
	Check,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	Coins,
	CreditCard,
	Database,
	FileBarChart,
	FileCheck,
	FileSearch,
	FileText,
	Fingerprint,
	Gauge,
	HeartHandshake,
	Layers,
	Moon,
	Network,
	Receipt,
	Repeat,
	Scale,
	ScanFace,
	Search,
	Shield,
	ShieldAlert,
	Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";

type Icon = LucideIcon;

type FlowStep = {
	icon: Icon;
	label: string;
	color: string;
	bg: string;
};

type ServiceStat = {
	value: string;
	label: string;
};

type Capability = {
	label: string;
	icon: Icon;
};

type PoweredBy = {
	label: string;
	logoSrc: string;
	logoAlt: string;
	/** Optional className applied to the Image — e.g. for filters on light backgrounds. */
	logoClassName?: string;
};

type Service = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	href: string;
	badgeIcon: Icon;
	badgeText: string;
	stats: [ServiceStat, ServiceStat];
	flowSteps: FlowStep[];
	flowResultLabel: string;
	capabilities: Capability[];
	poweredBy?: PoweredBy;
	ctaLabel: string;
	/** When true, the card renders a "Coming Soon" badge and disables the CTA. */
	comingSoon?: boolean;
};

const services: Service[] = [
	{
		id: "trueidentity",
		name: "TrueIdentity™",
		tagline: "e-KYC Service",
		description:
			"Onboard customers in seconds while meeting BNM e-KYC expectations — automated MyKad verification, liveness, and biometric matching that cut fraud and manual review for Malaysian fintechs.",
		href: "/trueidentity",
		badgeIcon: Fingerprint,
		badgeText: "e-KYC Service",
		stats: [
			{ value: "<1 day", label: "Integration" },
			{ value: "99.9%", label: "Uptime SLA" },
		],
		flowSteps: [
			{
				icon: FileCheck,
				label: "Scan",
				color: "text-blue-600",
				bg: "bg-blue-100",
			},
			{
				icon: ScanFace,
				label: "Selfie",
				color: "text-violet-600",
				bg: "bg-violet-100",
			},
			{
				icon: Fingerprint,
				label: "Match",
				color: "text-indigo-600",
				bg: "bg-indigo-100",
			},
			{
				icon: CheckCircle2,
				label: "Done",
				color: "text-emerald-600",
				bg: "bg-emerald-100",
			},
		],
		flowResultLabel: "Verified in <3 seconds",
		capabilities: [
			{ label: "MyKad OCR extraction", icon: FileCheck },
			{ label: "Liveness detection", icon: BadgeCheck },
			{ label: "Facial biometric matching", icon: Fingerprint },
			{ label: "Fraud detection", icon: Shield },
		],
		ctaLabel: "Learn more about TrueIdentity",
	},
	{
		id: "truessm",
		name: "TrueSSM™",
		tagline: "Malaysian Registry API",
		description:
			"Verify any Malaysian business in seconds — SSM-sourced company profiles, ROC/ROB/LLP particulars, and official documents for faster, audit-ready onboarding and due diligence.",
		href: "/truessm",
		badgeIcon: Building2,
		badgeText: "SSM Registry API",
		stats: [
			{ value: "13", label: "Report types" },
			{ value: "Free", label: "Entity search" },
		],
		flowSteps: [
			{
				icon: Search,
				label: "Search",
				color: "text-blue-600",
				bg: "bg-blue-100",
			},
			{
				icon: BadgeCheck,
				label: "Validate",
				color: "text-amber-600",
				bg: "bg-amber-100",
			},
			{
				icon: FileText,
				label: "Pull Report",
				color: "text-violet-600",
				bg: "bg-violet-100",
			},
			{
				icon: Receipt,
				label: "Acknowledged",
				color: "text-emerald-600",
				bg: "bg-emerald-100",
			},
		],
		flowResultLabel: "Billed per delivered pull",
		capabilities: [
			{ label: "Company & business profiles", icon: Building2 },
			{ label: "Officers, shareholders, charges", icon: FileSearch },
			{ label: "LLP & audit firm reports", icon: BadgeCheck },
			{ label: "Scanned document images", icon: FileCheck },
		],
		poweredBy: {
			label: "Powered by SSM Search",
			logoSrc: "/truekredit/integrations/ssmsearch-logo.webp",
			logoAlt: "SSM Search logo",
		},
		ctaLabel: "Learn more about TrueSSM",
	},
	{
		id: "truepay",
		name: "TruePay™",
		tagline: "Payments & Disbursement API",
		description:
			"Collect and disburse money across Malaysia from day one — FPX, DuitNow, cards, recurring billing, and automated reconciliation through one partner, so finance stops chasing settlements.",
		href: "/contact?subject=TruePay",
		badgeIcon: CreditCard,
		badgeText: "Payments API",
		stats: [
			{ value: "FPX & DuitNow", label: "Rails" },
			{ value: "Live", label: "Availability" },
		],
		flowSteps: [
			{
				icon: Receipt,
				label: "Initiate",
				color: "text-blue-600",
				bg: "bg-blue-100",
			},
			{
				icon: BadgeCheck,
				label: "Authorize",
				color: "text-violet-600",
				bg: "bg-violet-100",
			},
			{
				icon: Banknote,
				label: "Settle",
				color: "text-amber-600",
				bg: "bg-amber-100",
			},
			{
				icon: CheckCircle2,
				label: "Reconciled",
				color: "text-emerald-600",
				bg: "bg-emerald-100",
			},
		],
		flowResultLabel: "Settled & reconciled",
		capabilities: [
			{ label: "FPX & DuitNow rails", icon: Banknote },
			{ label: "Card payments & checkout", icon: CreditCard },
			{ label: "Recurring billing & mandates", icon: Repeat },
			{ label: "Webhooks & reconciliation", icon: Layers },
		],
		poweredBy: {
			label: "Powered by GKash",
			logoSrc: "/truekredit/integrations/gkash-logo.png",
			logoAlt: "GKash logo",
		},
		ctaLabel: "Enquire now",
	},
	{
		id: "truescore",
		name: "TrueScore™",
		tagline: "Credit Reports API",
		description:
			"Make faster, defensible lending decisions with CTOS-backed credit reports — CCRIS data, scores, litigation and trade reference checks that strengthen credit risk and approvals for Malaysian borrowers.",
		href: "/truescore",
		badgeIcon: Gauge,
		badgeText: "Credit Reports",
		stats: [
			{ value: "CTOS", label: "Data source" },
			{ value: "Soon", label: "Availability" },
		],
		flowSteps: [
			{
				icon: Search,
				label: "Request",
				color: "text-blue-600",
				bg: "bg-blue-100",
			},
			{
				icon: FileBarChart,
				label: "CTOS Pull",
				color: "text-amber-600",
				bg: "bg-amber-100",
			},
			{
				icon: Gauge,
				label: "Score",
				color: "text-violet-600",
				bg: "bg-violet-100",
			},
			{
				icon: CheckCircle2,
				label: "Delivered",
				color: "text-emerald-600",
				bg: "bg-emerald-100",
			},
		],
		flowResultLabel: "CTOS-grade credit insight",
		capabilities: [
			{ label: "CCRIS & CTOS scores", icon: Gauge },
			{ label: "Litigation & bankruptcy checks", icon: ShieldAlert },
			{ label: "Trade reference data", icon: FileBarChart },
			{ label: "Comprehensive credit reports", icon: FileText },
		],
		poweredBy: {
			label: "Powered by CTOS",
			logoSrc: "/truekredit/integrations/ctos-logo.png",
			logoAlt: "CTOS logo",
		},
		ctaLabel: "Coming soon",
		comingSoon: true,
	},
	{
		id: "truecommodity",
		name: "TrueCommodity™",
		tagline: "Shariah Trading",
		description:
			"Launch Shariah-compliant financing with confidence — Tawarruq commodity trading, Gharamah and Ta'widh ledgers, and committee-ready exports that keep your Shariah board and regulators satisfied.",
		href: "/truecommodity",
		badgeIcon: Moon,
		badgeText: "Shariah Trading",
		stats: [
			{ value: "Tawarruq", label: "Disbursement" },
			{ value: "Soon", label: "Availability" },
		],
		flowSteps: [
			{
				icon: Scale,
				label: "Screen",
				color: "text-emerald-600",
				bg: "bg-emerald-100",
			},
			{
				icon: Repeat,
				label: "Tawarruq Trade",
				color: "text-teal-600",
				bg: "bg-teal-100",
			},
			{
				icon: Banknote,
				label: "Disburse",
				color: "text-amber-600",
				bg: "bg-amber-100",
			},
			{
				icon: CheckCircle2,
				label: "Audited",
				color: "text-blue-600",
				bg: "bg-blue-100",
			},
		],
		flowResultLabel: "Shariah committee-ready",
		capabilities: [
			{ label: "Tawarruq commodity trading", icon: Repeat },
			{ label: "Gharamah charity ledger", icon: HeartHandshake },
			{ label: "Ta'widh recovery accounting", icon: Coins },
			{ label: "Committee review exports", icon: FileText },
		],
		ctaLabel: "Coming soon",
		comingSoon: true,
	},
	{
		id: "truesight",
		name: "TrueSight™",
		tagline: "AI Risk & Borrower Intelligence",
		description:
			"Reduce defaults and approve with confidence — AI borrower risk scoring and explainable creditworthiness signals that surface default risk beyond your own portfolio for Malaysian lenders.",
		href: "/truesight",
		badgeIcon: Sparkles,
		badgeText: "AI Risk Analysis",
		stats: [
			{ value: "AI", label: "Powered scoring" },
			{ value: "Soon", label: "Availability" },
		],
		flowSteps: [
			{
				icon: Database,
				label: "Ingest",
				color: "text-indigo-600",
				bg: "bg-indigo-100",
			},
			{
				icon: Sparkles,
				label: "Analyse",
				color: "text-violet-600",
				bg: "bg-violet-100",
			},
			{
				icon: BarChart3,
				label: "Risk Score",
				color: "text-amber-600",
				bg: "bg-amber-100",
			},
			{
				icon: Shield,
				label: "Decision",
				color: "text-emerald-600",
				bg: "bg-emerald-100",
			},
		],
		flowResultLabel: "Risk intelligence in seconds",
		capabilities: [
			{ label: "AI borrower risk scoring", icon: Sparkles },
			{ label: "Creditworthiness & default signals", icon: BarChart3 },
			{ label: "Cross-portfolio intelligence", icon: Network },
			{ label: "Explainable model insights", icon: Shield },
		],
		ctaLabel: "Coming soon",
		comingSoon: true,
	},
];

function ServiceFlowGraphic({
	steps,
	resultLabel,
	patternId,
}: {
	steps: FlowStep[];
	resultLabel: string;
	patternId: string;
}) {
	return (
		<div className="relative flex h-full flex-col items-center justify-center bg-muted/40 p-8">
			<svg
				className="absolute inset-0 h-full w-full opacity-[0.04]"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id={patternId}
						width="32"
						height="32"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 32 0 L 0 0 0 32"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill={`url(#${patternId})`} />
			</svg>

			<div className="relative z-10 flex flex-col items-center gap-3">
				{steps.map((step, i) => {
					const Icon = step.icon;
					const isLast = i === steps.length - 1;
					return (
						<motion.div
							key={step.label}
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.35,
								delay: 0.2 + i * 0.12,
							}}
						>
							<div className="flex items-center gap-3">
								<div
									className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.bg}`}
								>
									<Icon className={`h-5 w-5 ${step.color}`} />
								</div>
								<span className="text-sm font-medium">
									{step.label}
								</span>
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										type: "spring",
										delay: 0.5 + i * 0.15,
									}}
								>
									{isLast ? (
										<CheckCircle2 className="h-4 w-4 text-emerald-500" />
									) : (
										<div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15">
											<Check className="h-2.5 w-2.5 text-primary" />
										</div>
									)}
								</motion.div>
							</div>
							{!isLast && (
								<motion.div
									className="my-1 h-3 w-px bg-border"
									initial={{ scaleY: 0 }}
									whileInView={{ scaleY: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: 0.4 + i * 0.12,
										duration: 0.25,
									}}
								/>
							)}
						</motion.div>
					);
				})}

				<motion.div
					className="mt-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 1.1, type: "spring" }}
				>
					<span className="text-xs font-semibold text-emerald-700">
						{resultLabel}
					</span>
				</motion.div>
			</div>
		</div>
	);
}

function ServiceCard({ service }: { service: Service }) {
	const BadgeIcon = service.badgeIcon;
	return (
		<article
			data-carousel-item
			className="w-[340px] shrink-0 snap-start sm:w-[520px] md:w-[640px] lg:w-[780px]"
		>
			<div className="grid h-full overflow-hidden rounded-2xl border bg-background lg:grid-cols-5">
				{/* Left — graphic */}
				<div className="lg:col-span-2">
					<ServiceFlowGraphic
						steps={service.flowSteps}
						resultLabel={service.flowResultLabel}
						patternId={`infra-grid-${service.id}`}
					/>
				</div>

				{/* Right — content */}
				<div className="flex flex-col gap-6 p-6 md:p-8 lg:col-span-3">
					<div>
						<div className="flex items-start justify-between gap-3">
							<SectionBadge
								icon={BadgeIcon}
								text={service.badgeText}
							/>
							{service.comingSoon && (
								<span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
									Coming Soon
								</span>
							)}
						</div>
						<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
							{service.name}
						</h3>
						<p className="mt-3 text-sm text-muted-foreground md:text-base">
							{service.description}
						</p>
					</div>

					<ul className="space-y-2">
						{service.capabilities.map((cap) => {
							const CapIcon = cap.icon;
							return (
								<li
									key={cap.label}
									className="flex items-center gap-2.5 text-sm text-muted-foreground"
								>
									<CapIcon className="h-4 w-4 shrink-0 text-primary" />
									<span>{cap.label}</span>
								</li>
							);
						})}
					</ul>

					<div className="flex items-center gap-6">
						{service.stats.map((stat, i) => (
							<div
								key={stat.label}
								className="flex items-center gap-6"
							>
								{i > 0 && (
									<div className="h-9 w-px bg-border" />
								)}
								<div>
									<div className="text-xl font-bold text-primary md:text-2xl">
										{stat.value}
									</div>
									<div className="text-xs text-muted-foreground">
										{stat.label}
									</div>
								</div>
							</div>
						))}
					</div>

					{service.poweredBy && (
						<div className="flex items-center gap-3 rounded-xl border bg-muted/30 px-4 py-3">
							<div className="relative h-7 w-24 shrink-0">
								<Image
									src={service.poweredBy.logoSrc}
									alt={service.poweredBy.logoAlt}
									fill
									className={`object-contain object-left ${service.poweredBy.logoClassName ?? ""}`}
									sizes="96px"
								/>
							</div>
							<span className="text-xs text-muted-foreground">
								{service.poweredBy.label}
							</span>
						</div>
					)}

					<div className="mt-auto pt-2">
						{service.comingSoon ? (
							<Button
								variant="outline"
								disabled
								className="w-full justify-between gap-2"
							>
								{service.ctaLabel}
								<ArrowRight className="h-4 w-4" />
							</Button>
						) : (
							<Button
								asChild
								variant="outline"
								className="w-full justify-between gap-2"
							>
								<Link href={service.href}>
									{service.ctaLabel}
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}

export function InfrastructureSection() {
	const scrollerRef = useRef<HTMLDivElement>(null);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(true);

	const updateButtons = useCallback(() => {
		const el = scrollerRef.current;
		if (!el) return;
		setCanPrev(el.scrollLeft > 8);
		setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
	}, []);

	useEffect(() => {
		const el = scrollerRef.current;
		if (!el) return;
		updateButtons();
		el.addEventListener("scroll", updateButtons, { passive: true });
		window.addEventListener("resize", updateButtons);
		return () => {
			el.removeEventListener("scroll", updateButtons);
			window.removeEventListener("resize", updateButtons);
		};
	}, [updateButtons]);

	const scrollByPage = (dir: 1 | -1) => {
		const el = scrollerRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-carousel-item]");
		const cardWidth = card?.offsetWidth ?? 640;
		const gap = 20;
		el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
	};

	return (
		<section className="border-t bg-muted/30 py-20">
			<motion.div
				className="relative mx-auto mb-10 max-w-6xl px-5 sm:px-6 lg:px-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5 }}
			>
				<div className="mx-auto max-w-3xl text-center">
					<SectionBadge
						icon={Layers}
						text="TrueStack Core"
						className="justify-center"
					/>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						The fintech infrastructure Malaysian operators launch on
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						Go to market faster with production-ready APIs for
						identity, company data, payments, and credit — already
						built for Malaysian regulations and rails, so you launch
						in days instead of standing up each integration in-house.
					</p>
				</div>

				<div className="absolute bottom-0 right-5 hidden gap-2 sm:right-6 md:flex lg:right-8">
					<button
						type="button"
						onClick={() => scrollByPage(-1)}
						disabled={!canPrev}
						className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
						aria-label="Previous service"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button
						type="button"
						onClick={() => scrollByPage(1)}
						disabled={!canNext}
						className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
						aria-label="Next service"
					>
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</motion.div>

			<div
				ref={scrollerRef}
				className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 pl-5 pr-5 scroll-pl-5 sm:pl-6 sm:pr-6 sm:scroll-pl-6 lg:pl-8 lg:pr-8 lg:scroll-pl-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				{services.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</section>
	);
}
