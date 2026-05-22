"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { truesyariahFaq } from "@/lib/truesyariah-faq";
import {
	ArrowRight,
	Check,
	X,
	FileText,
	FileCheck,
	Wallet,
	Shield,
	ShieldCheck,
	AlertTriangle,
	Fingerprint,
	CheckCircle2,
	Building2,
	ChevronRight,
	Database,
	Lock,
	Server,
	Eye,
	Banknote,
	BarChart3,
	Layers,
	Link2,
	Smartphone,
	Globe,
	PenLine,
	Briefcase,
	Award,
	UserPlus,
	HelpCircle,
	Moon,
	Scale,
	HeartHandshake,
	HandCoins,
	BookOpen,
	Coins,
	Landmark,
	GitBranch,
	Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/shared/section-badge";
import {
	WalkInVisual,
	WebOriginationVisual,
	MobileAppVisual,
} from "@/components/sections/origination-channel-visuals";
import { FeatureCarousel } from "@/components/shared/feature-carousel";
import {
	AttestationVisual,
	CTOSVisual,
	SSMVisual,
	TrueSightVisual,
	TruesendVisual,
} from "@/components/sections/module-visuals";

// Hero backdrop — soft girih-inspired pattern with emerald glow
function GirihPattern() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-linear-to-b from-emerald-500/5 via-transparent to-transparent" />
			<svg
				className="absolute inset-0 h-full w-full opacity-[0.05]"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="girih-truesyariah"
						width="80"
						height="80"
						patternUnits="userSpaceOnUse"
					>
						{/* 8-pointed star + connectors — minimalist nod to Islamic geometric art */}
						<g
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
							strokeLinejoin="round"
						>
							<path d="M40 8 L52 28 L72 28 L60 44 L72 60 L52 60 L40 80 L28 60 L8 60 L20 44 L8 28 L28 28 Z" />
							<path d="M40 0 L40 8 M40 80 L40 88 M0 44 L8 44 M72 44 L80 44" />
						</g>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#girih-truesyariah)" />
			</svg>
			<motion.div
				className="absolute left-[60%] top-[40%] h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-emerald-400/15 via-teal-400/10 to-amber-300/10 blur-3xl"
				animate={{
					scale: [1, 1.08, 1],
					opacity: [0.45, 0.65, 0.45],
				}}
				transition={{
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
}

// Shared visual shell (emerald/teal default tint)
type ShellBadge = {
	label: string;
	sub: string;
	pos: string;
	emphasis?: string;
};

function VisualShell({
	tint,
	glow,
	badges,
	children,
}: {
	tint: string;
	glow: string;
	badges?: ShellBadge[];
	children: ReactNode;
}) {
	return (
		<div
			className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br ${tint} px-6 py-5`}
		>
			<div
				className={`absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full ${glow} blur-3xl`}
			/>
			{children}
			{badges?.map((b) => (
				<div
					key={b.label + b.pos}
					className={`absolute ${b.pos} hidden rounded-md border bg-white px-2 py-1 shadow-sm sm:block`}
				>
					<p
						className={`text-[9px] font-semibold leading-tight ${b.emphasis ?? "text-foreground"}`}
					>
						{b.label}
					</p>
					<p className="text-[7px] leading-tight text-muted-foreground">
						{b.sub}
					</p>
				</div>
			))}
		</div>
	);
}

// Phone-frame chrome reused by phone-style mocks
function PhoneChrome({ children }: { children: ReactNode }) {
	return (
		<div className="relative w-[78%] max-w-[260px] overflow-hidden rounded-[1.4rem] border border-border/70 bg-white shadow-xl">
			<div className="flex items-center justify-between bg-slate-50 px-4 py-1.5">
				<span className="text-[9px] font-medium text-slate-400">
					9:41
				</span>
				<div className="mx-auto h-3.5 w-14 rounded-full bg-slate-900" />
				<div className="flex gap-1">
					<div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
					<div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
				</div>
			</div>
			<div className="px-3 pb-3 pt-3">{children}</div>
		</div>
	);
}

// ── Tawarruq commodity flow visual ─────────────────────────────────────────
// Shows the four-leg sequence: Financier → BSAS commodity buy → Customer → Broker
function TawarruqVisual() {
	const legs = [
		{
			icon: Landmark,
			label: "Financier buys commodity",
			sub: "via BSAS broker A",
			tint: "bg-emerald-50 text-emerald-700 border-emerald-200",
		},
		{
			icon: HandCoins,
			label: "Sale to customer",
			sub: "deferred at profit",
			tint: "bg-teal-50 text-teal-700 border-teal-200",
		},
		{
			icon: Coins,
			label: "Customer onward sale",
			sub: "to BSAS broker B",
			tint: "bg-amber-50 text-amber-700 border-amber-200",
		},
		{
			icon: Wallet,
			label: "Cash to customer",
			sub: "MYR proceeds",
			tint: "bg-emerald-50 text-emerald-700 border-emerald-200",
		},
	];

	return (
		<VisualShell
			tint="from-emerald-500/12 via-teal-500/6 to-amber-300/10"
			glow="bg-emerald-500/20"
			badges={[
				{
					label: "Bursa Suq Al-Sila'",
					sub: "BSAS — live trade",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "Shariah ✓",
					sub: "Committee-evidenced",
					pos: "bottom-4 right-3",
					emphasis: "text-emerald-700",
				},
			]}
		>
			<div className="relative w-[82%] max-w-[290px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
				<div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
					<div className="flex items-center gap-2">
						<div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-100">
							<Moon className="h-3 w-3 text-emerald-700" />
						</div>
						<p className="text-[10px] font-semibold">
							Tawarruq Trade
						</p>
					</div>
					<span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
						TKR-92041
					</span>
				</div>
				<div className="space-y-1.5 px-3 py-3">
					{legs.map((l, i) => {
						const Icon = l.icon;
						return (
							<div
								key={l.label}
								className={`flex items-center gap-2 rounded-md border ${l.tint} px-2 py-1.5`}
							>
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/70">
									<Icon className="h-3 w-3" />
								</div>
								<div className="min-w-0 flex-1">
									<p className="truncate text-[9px] font-semibold leading-tight text-foreground">
										{i + 1}. {l.label}
									</p>
									<p className="truncate text-[7px] leading-tight text-muted-foreground">
										{l.sub}
									</p>
								</div>
								<Check className="h-3 w-3 text-emerald-600" />
							</div>
						);
					})}
				</div>
				<div className="border-t bg-emerald-50/40 px-4 py-2">
					<div className="flex items-center justify-between text-[8px]">
						<span className="font-semibold uppercase tracking-wide text-emerald-700">
							Profit margin
						</span>
						<span className="font-bold text-emerald-700">
							RM 4,830 · 6.4%
						</span>
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── Ta'widh & Gharamah split-bucket visual ─────────────────────────────────
function TawidhGharamahVisual() {
	return (
		<VisualShell
			tint="from-amber-300/10 via-emerald-500/6 to-teal-500/12"
			glow="bg-amber-300/20"
			badges={[
				{
					label: "Cap-aware",
					sub: "Shariah committee rules",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "Audit ✓",
					sub: "Charity ledger",
					pos: "bottom-4 right-3",
					emphasis: "text-amber-700",
				},
			]}
		>
			<div className="relative w-[88%] max-w-[300px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
				<div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
					<div className="flex items-center gap-2">
						<div className="flex h-6 w-6 items-center justify-center rounded bg-amber-100">
							<AlertTriangle className="h-3 w-3 text-amber-700" />
						</div>
						<p className="text-[10px] font-semibold">
							Late charge — RM 120.00
						</p>
					</div>
					<span className="rounded-full bg-rose-100 px-1.5 py-0.5 text-[8px] font-semibold text-rose-700">
						3 days late
					</span>
				</div>
				<div className="px-4 py-3">
					{/* Split arrow */}
					<div className="mb-3 flex justify-center">
						<GitBranch className="h-4 w-4 -rotate-90 text-muted-foreground" />
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5">
							<div className="mb-1 flex items-center gap-1.5">
								<div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-100">
									<Shield className="h-2.5 w-2.5 text-emerald-700" />
								</div>
								<p className="text-[8px] font-bold uppercase tracking-wide text-emerald-700">
									Ta&apos;widh
								</p>
							</div>
							<p className="font-display text-base font-bold leading-none text-emerald-700">
								RM 35
							</p>
							<p className="mt-1 text-[7px] leading-tight text-muted-foreground">
								Actual cost of recovery — retained by financier
							</p>
						</div>
						<div className="rounded-lg border border-amber-200 bg-amber-50/70 p-2.5">
							<div className="mb-1 flex items-center gap-1.5">
								<div className="flex h-5 w-5 items-center justify-center rounded bg-amber-100">
									<HeartHandshake className="h-2.5 w-2.5 text-amber-700" />
								</div>
								<p className="text-[8px] font-bold uppercase tracking-wide text-amber-700">
									Gharamah
								</p>
							</div>
							<p className="font-display text-base font-bold leading-none text-amber-700">
								RM 85
							</p>
							<p className="mt-1 text-[7px] leading-tight text-muted-foreground">
								Posted to charity ledger — disbursed quarterly
							</p>
						</div>
					</div>
					<div className="mt-3 rounded-md border border-dashed border-emerald-200 bg-white px-2 py-1.5">
						<div className="flex items-center justify-between text-[8px]">
							<span className="text-muted-foreground">
								Charity disbursement queue
							</span>
							<span className="font-semibold text-amber-700">
								RM 4,210 pending
							</span>
						</div>
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── e-KYC visual (Shariah-themed: emerald) ─────────────────────────────────
function ShariahKycVisual() {
	const steps = [
		{
			icon: FileCheck,
			label: "Scan MyKad",
			sub: "OCR extraction",
			tint: "bg-emerald-50 text-emerald-700 border-emerald-200",
		},
		{
			icon: Eye,
			label: "Selfie + liveness",
			sub: "Face capture",
			tint: "bg-teal-50 text-teal-700 border-teal-200",
		},
		{
			icon: Fingerprint,
			label: "Biometric match",
			sub: "Compared to IC",
			tint: "bg-emerald-50 text-emerald-700 border-emerald-200",
		},
		{
			icon: CheckCircle2,
			label: "Verified",
			sub: "Saved to financing file",
			tint: "bg-emerald-50 text-emerald-800 border-emerald-300",
		},
	];

	return (
		<VisualShell
			tint="from-emerald-500/10 via-teal-500/6 to-emerald-500/12"
			glow="bg-emerald-500/20"
			badges={[
				{
					label: "<3s",
					sub: "Verification",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "PDPA",
					sub: "Compliant",
					pos: "bottom-4 right-3",
					emphasis: "text-emerald-700",
				},
			]}
		>
			<PhoneChrome>
				<div className="mb-3 text-center">
					<div className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100">
						<Fingerprint className="h-3.5 w-3.5 text-emerald-700" />
					</div>
					<p className="text-[10px] font-semibold text-foreground">
						Identity Verification
					</p>
					<p className="text-[8px] text-muted-foreground">
						Powered by TrueIdentity™
					</p>
				</div>
				<div className="space-y-1.5">
					{steps.map((s, i) => {
						const Icon = s.icon;
						const isLast = i === steps.length - 1;
						return (
							<div
								key={s.label}
								className={`flex items-center gap-2 rounded-md border ${s.tint} bg-white px-2 py-1.5`}
							>
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white">
									<Icon className="h-3 w-3" />
								</div>
								<div className="min-w-0 flex-1">
									<p className="truncate text-[10px] font-medium leading-tight text-foreground">
										{s.label}
									</p>
									<p className="truncate text-[8px] leading-tight text-muted-foreground">
										{s.sub}
									</p>
								</div>
								{isLast ? (
									<CheckCircle2 className="h-3 w-3 text-emerald-600" />
								) : (
									<Check className="h-2.5 w-2.5 text-emerald-700" />
								)}
							</div>
						);
					})}
				</div>
			</PhoneChrome>
		</VisualShell>
	);
}

// ── On-prem digital signing (Trustgate, Shariah-tinted) ────────────────────
function ShariahSigningVisual() {
	return (
		<VisualShell
			tint="from-emerald-500/10 via-teal-500/6 to-emerald-500/12"
			glow="bg-emerald-500/20"
			badges={[
				{
					label: "PKI · Trustgate",
					sub: "Your servers",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "DSA 1997",
					sub: "Compliant",
					pos: "bottom-4 right-3",
					emphasis: "text-emerald-700",
				},
			]}
		>
			<div className="relative w-[72%] max-w-[240px] overflow-hidden rounded-lg border border-border/70 bg-white shadow-xl">
				<div className="flex items-center gap-1.5 border-b bg-slate-50 px-3 py-1.5">
					<FileText className="h-3 w-3 text-emerald-700" />
					<p className="text-[9px] font-semibold">
						Tawarruq Agreement.pdf
					</p>
				</div>
				<div className="px-4 py-3">
					<p className="text-center text-[10px] font-bold uppercase tracking-wide">
						Shariah Financing Agreement
					</p>
					<p className="mt-0.5 text-center text-[7px] text-muted-foreground">
						Tawarruq · BSAS-evidenced
					</p>
					<div className="mt-2.5 space-y-1">
						{[100, 92, 88, 95, 70].map((w, i) => (
							<div
								key={i}
								className="h-1 rounded-full bg-slate-100"
								style={{ width: `${w}%` }}
							/>
						))}
					</div>
					<div className="mt-3 rounded-md border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-2">
						<div className="flex items-center gap-2">
							<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100">
								<PenLine className="h-3.5 w-3.5 text-emerald-700" />
							</div>
							<div className="min-w-0 flex-1">
								<p className="text-[9px] font-semibold leading-tight">
									Digitally signed
								</p>
								<p className="text-[7px] leading-tight text-muted-foreground">
									by Customer · 12 May 2026
								</p>
							</div>
							<CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
						</div>
					</div>
					<div className="mt-2 flex items-center justify-end gap-1">
						<ShieldCheck className="h-3 w-3 text-emerald-700" />
						<p className="text-[7px] font-semibold uppercase tracking-wide text-emerald-700">
							MSC Trustgate verified
						</p>
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── Customer mobile app visual (Shariah-tinted) ────────────────────────────
function ShariahMobileVisual() {
	return (
		<VisualShell
			tint="from-emerald-500/10 via-teal-500/6 to-amber-300/10"
			glow="bg-emerald-500/20"
			badges={[
				{
					label: "iOS & Android",
					sub: "Branded native",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "Push alerts",
					sub: "Due dates",
					pos: "bottom-4 right-3",
					emphasis: "text-amber-700",
				},
			]}
		>
			<div className="relative w-[58%] max-w-[200px] overflow-hidden rounded-[2rem] border border-slate-900/80 bg-slate-900 px-1.5 pb-2 pt-2 shadow-2xl">
				<div className="overflow-hidden rounded-[1.5rem] bg-linear-to-b from-emerald-950 via-slate-950 to-slate-950 px-3 pb-3 pt-3">
					<div className="mb-2 flex items-center justify-between text-[8px] text-white/50">
						<span>9:41</span>
						<span>●●●</span>
					</div>
					<p className="text-[10px] font-semibold text-white">
						My Financing
					</p>
					<p className="text-[7px] text-white/40">
						Welcome back, Aisyah
					</p>
					<div className="mt-2.5 rounded-lg border border-emerald-400/30 bg-emerald-500/15 p-2.5">
						<p className="text-[7px] text-white/40">
							TS-9421 · Tawarruq · Active
						</p>
						<p className="font-display text-base font-bold text-white">
							RM 24,800
						</p>
						<p className="text-[7px] text-white/40">outstanding</p>
						<div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
							<div className="h-full w-[55%] rounded-full bg-emerald-400" />
						</div>
					</div>
					<div className="mt-1.5 rounded-lg border border-amber-400/20 bg-amber-500/10 p-2">
						<p className="text-[7px] text-white/40">Next payment</p>
						<p className="text-[10px] font-semibold text-amber-300">
							RM 1,540 · 12 Jun
						</p>
					</div>
					<div className="mt-1.5 grid grid-cols-3 gap-1">
						{[
							{ label: "Pay", icon: Wallet },
							{ label: "Sign", icon: PenLine },
							{ label: "Trade", icon: Moon },
						].map((a) => (
							<div
								key={a.label}
								className="flex flex-col items-center gap-0.5 rounded-md border border-white/10 bg-white/5 py-1.5"
							>
								<a.icon className="h-2.5 w-2.5 text-emerald-300" />
								<span className="text-[7px] text-white/70">
									{a.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── Shariah committee audit pack visual ────────────────────────────────────
function CommitteeVisual() {
	const items = [
		{ label: "Tawarruq trade log", count: "1,284" },
		{ label: "Ta'widh / Gharamah trial balance", count: "Q2 2026" },
		{ label: "Charity disbursement schedule", count: "RM 18,920" },
		{ label: "Contract template variances", count: "0" },
	];

	return (
		<VisualShell
			tint="from-emerald-500/12 via-teal-500/8 to-emerald-500/6"
			glow="bg-emerald-500/20"
			badges={[
				{
					label: "Auto-generated",
					sub: "Each quarter",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "Committee-ready",
					sub: "Sign-off pack",
					pos: "bottom-4 right-3",
					emphasis: "text-emerald-700",
				},
			]}
		>
			<div className="relative w-[80%] max-w-[280px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
				<div className="border-b bg-slate-50 px-4 py-2.5">
					<div className="flex items-center gap-2">
						<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
							<BookOpen className="h-3.5 w-3.5 text-emerald-700" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-[10px] font-semibold">
								Shariah Committee Pack
							</p>
							<p className="text-[7px] text-muted-foreground">
								Q2 2026 · Generated 12 May
							</p>
						</div>
						<CheckCircle2 className="h-4 w-4 text-emerald-600" />
					</div>
				</div>
				<div className="space-y-1.5 px-4 py-3">
					{items.map((it) => (
						<div
							key={it.label}
							className="flex items-center gap-2 rounded-md border border-emerald-100 bg-emerald-50/40 px-2 py-1.5"
						>
							<FileText className="h-3 w-3 shrink-0 text-emerald-700" />
							<p className="min-w-0 flex-1 truncate text-[9px] font-medium text-foreground">
								{it.label}
							</p>
							<span className="rounded bg-white px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
								{it.count}
							</span>
						</div>
					))}
				</div>
			</div>
		</VisualShell>
	);
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function HeroSection() {
	return (
		<section
			id="hero"
			className="relative overflow-hidden border-b text-emerald-950/90"
		>
			<GirihPattern />
			<div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
				<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
					{/* Left: Text */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<motion.div
							className="mb-5 flex flex-wrap gap-2 text-sm font-medium"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
						>
							<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-emerald-700">
								<Moon className="h-4 w-4 shrink-0" />
								TrueSyariah™ — Shariah-compliant
							</span>
							<span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1.5 text-amber-800">
								<Award className="h-4 w-4 shrink-0" />
								KPKT Syariah Digital Lending
							</span>
						</motion.div>
						<motion.h1
							className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							The digital financing platform built for{" "}
							<span className="bg-linear-to-r from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">
								Syariah lenders.
							</span>
						</motion.h1>
						<motion.p
							className="mt-5 text-lg font-medium text-emerald-700 md:text-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.15 }}
						>
							Built for the Malaysian KPKT Syariah Digital
							Lending Licence.
						</motion.p>
						<motion.p
							className="mt-4 text-lg text-muted-foreground md:text-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							One end-to-end Shariah-compliant stack — Tawarruq
							commodity trading via Bursa Suq Al-Sila&apos;,
							segregated Ta&apos;widh and Gharamah ledgers,
							on-prem digital signing, e-KYC, branded web
							portal, and native iOS &amp; Android customer
							apps — on a dedicated AWS Malaysia deployment
							ring-fenced from any conventional lending book.
						</motion.p>
						<motion.div
							className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.25 }}
						>
							<Button
								asChild
								size="lg"
								className="gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
							>
								<Link href="/contact?subject=TrueSyariah">
									Talk to us about TrueSyariah
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="gap-2 border-emerald-300 bg-emerald-500/5 text-emerald-700 hover:bg-emerald-500/10 hover:text-emerald-800"
							>
								<Link href="#engine">
									See the Shariah engine
									<ChevronRight className="h-4 w-4" />
								</Link>
							</Button>
						</motion.div>
					</motion.div>

					{/* Right: Hero illustration */}
					<motion.div
						className="relative mx-auto w-full max-w-[560px]"
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, delay: 0.15 }}
					>
						<div className="relative aspect-square overflow-hidden rounded-3xl border border-emerald-200/60 bg-linear-to-br from-emerald-50 via-white to-amber-50 shadow-xl">
							<Image
								src="/truesyariah/hero.png"
								alt="TrueSyariah Shariah-compliant digital lending platform — Tawarruq, Ta'widh and Gharamah modules"
								fill
								priority
								sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 100vw"
								className="object-cover"
							/>
						</div>
						{/* Floating credibility chip */}
						<div className="absolute -bottom-4 left-6 hidden items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 shadow-md sm:inline-flex">
							<Moon className="h-3.5 w-3.5 text-emerald-700" />
							<span className="text-[11px] font-semibold text-emerald-800">
								Tawarruq via BSAS
							</span>
						</div>
						<div className="absolute -top-3 right-6 hidden items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1.5 shadow-md sm:inline-flex">
							<HeartHandshake className="h-3.5 w-3.5 text-amber-700" />
							<span className="text-[11px] font-semibold text-amber-800">
								Ta&apos;widh / Gharamah ledgers
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Licence reality (separate licence + entity required) ────────────────────
function LicenceRealitySection() {
	return (
		<section
			id="licence-reality"
			className="border-b bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
				<motion.div
					className="mx-auto max-w-3xl text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-700">
						The licensing reality
					</p>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						Shariah lending needs its own licence —{" "}
						<span className="text-emerald-700">
							and its own entity.
						</span>
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						Under Malaysia&apos;s lending framework, the KPKT
						Syariah Digital Lending Licence cannot be issued to —
						or operated under — the same legal entity that holds a
						conventional KPKT money-lending licence. The two
						books, the two complaints registers, and the two
						supervisory pathways have to stay ring-fenced.
					</p>
				</motion.div>

				<motion.div
					className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{/* Conventional KPKT side */}
					<div className="rounded-2xl border border-blue-200/70 bg-linear-to-br from-blue-50/70 via-background to-background p-6 sm:p-8">
						<div className="mb-5 flex items-center justify-between gap-2">
							<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
								<Shield className="h-3.5 w-3.5" />
								Conventional Entity
							</span>
							<span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
								KPKT Digital Lending
							</span>
						</div>
						<h3 className="mb-3 font-display text-lg font-medium leading-snug md:text-xl">
							Holds your existing KPKT online money-lending
							licence.
						</h3>
						<ul className="space-y-2.5 text-sm text-muted-foreground">
							{[
								"Riba-based (interest) financing",
								"Runs on TrueKredit Pro on its own AWS account",
								"Reports to KPKT under the conventional rules",
								"Separate books, separate complaint pathway",
							].map((line) => (
								<li
									key={line}
									className="flex items-start gap-2"
								>
									<Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
									<span>{line}</span>
								</li>
							))}
						</ul>
						<Link
							href="/truekredit"
							className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline"
						>
							See TrueKredit Pro
							<ArrowRight className="h-3.5 w-3.5" />
						</Link>
					</div>

					{/* Divider */}
					<div className="flex items-center justify-center py-2 lg:py-0">
						<div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm lg:h-14 lg:w-14">
							<X className="h-5 w-5 lg:h-6 lg:w-6" />
						</div>
					</div>

					{/* Shariah side */}
					<div className="rounded-2xl border border-emerald-300/70 bg-linear-to-br from-emerald-50 via-background to-background p-6 sm:p-8">
						<div className="mb-5 flex items-center justify-between gap-2">
							<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
								<Moon className="h-3.5 w-3.5" />
								Shariah Entity
							</span>
							<span className="text-xs font-medium uppercase tracking-wider text-emerald-800/70">
								KPKT Syariah Licence
							</span>
						</div>
						<h3 className="mb-3 font-display text-lg font-medium leading-snug md:text-xl">
							A separate Sdn. Bhd. — its own KPKT Syariah
							digital licence.
						</h3>
						<ul className="space-y-2.5 text-sm text-foreground/80">
							{[
								"Tawarruq-based financing (no riba, no gharar)",
								"Runs on TrueSyariah on its own AWS account",
								"Shariah committee oversight in addition to KPKT",
								"Ring-fenced books — Ta'widh / Gharamah ledgers",
							].map((line) => (
								<li
									key={line}
									className="flex items-start gap-2"
								>
									<Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
									<span>{line}</span>
								</li>
							))}
						</ul>
						<Link
							href="/contact?subject=TrueSyariah%20entity%20setup"
							className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-800 hover:underline"
						>
							Stand up a Shariah entity
							<ArrowRight className="h-3.5 w-3.5" />
						</Link>
					</div>
				</motion.div>

				{/* Pro-equivalent ribbon */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.45, delay: 0.15 }}
					className="mt-10 grid gap-4 rounded-2xl border bg-background p-5 shadow-sm md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:p-6"
				>
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
						<Award className="h-5 w-5 text-emerald-700" />
					</div>
					<div>
						<p className="font-display text-base font-semibold tracking-tight md:text-lg">
							Shipped only as a Pro-equivalent dedicated
							deployment.
						</p>
						<p className="mt-1 text-sm text-muted-foreground md:text-[15px]">
							There is no shared-tenancy SaaS tier for
							TrueSyariah — every deployment is its own AWS
							account, its own database, and its own secrets
							vault. Separation isn&apos;t a feature flag, it&apos;s
							the architecture.
						</p>
					</div>
					<Link
						href="#infrastructure"
						className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-500/15"
					>
						See the deployment shape
						<ArrowRight className="h-3.5 w-3.5" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Shariah engine: Tawarruq, Ta'widh/Gharamah, Committee pack ──────────────
function ShariahEngineSection() {
	const cards = [
		{
			tag: "Tawarruq",
			tagBg: "bg-emerald-500/10 text-emerald-700",
			icon: Moon,
			title: "Real Tawarruq trades on Bursa Suq Al-Sila'.",
			desc: "Every disbursement is structured as a four-leg Tawarruq commodity sale routed through TrueCommodity™ to Bursa Suq Al-Sila' (BSAS) — the Shariah-compliant commodity platform operated by Bursa Malaysia. Customer receives clean MYR proceeds; the operator books a deferred receivable at the agreed profit rate. Every contract leg is time-stamped, archived, and committee-ready.",
			bullets: [
				"Live BSAS broker routing via TrueCommodity™",
				"Deferred profit receivable booking — Murabahah-style",
				"Tamper-evident contract log per disbursement",
				"PDF Tawarruq agreements signed via on-prem PKI",
			],
			visual: <TawarruqVisual />,
		},
		{
			tag: "Ta'widh & Gharamah",
			tagBg: "bg-amber-500/10 text-amber-800",
			icon: Scale,
			title: "Late charges split into segregated Shariah ledgers.",
			desc: "Every late payment is split at the journal level. Ta'widh (تعويض) — the operator's actual cost of recovery — is retained within Shariah caps. Gharamah (غرامة) — the residual penalty — is posted to a separate ledger and disbursed to approved charities on a documented schedule. The split logic, cap-aware accumulation, charity workflow, and audit reports are built into TrueSyariah's core ledger.",
			bullets: [
				"Per-product Ta'widh / Gharamah split rules",
				"Cap-aware accumulation, calibrated to your committee",
				"Charity disbursement queue with sign-off workflow",
				"Quarterly Ta'widh / Gharamah trial balance export",
			],
			visual: <TawidhGharamahVisual />,
		},
		{
			tag: "Shariah committee",
			tagBg: "bg-emerald-500/10 text-emerald-700",
			icon: BookOpen,
			title: "Audit packs your committee will actually want to read.",
			desc: "Every quarter TrueSyariah auto-generates the evidence pack your Shariah committee needs to issue a clean opinion — Tawarruq trade log, Ta'widh / Gharamah trial balance, charity disbursement schedule, and any contract-template variances flagged for review. KPKT examiners get the same dossier, in their format.",
			bullets: [
				"Auto-generated quarterly committee dossier",
				"KPKT inspection pack — same evidence, examiner format",
				"Contract-template variance detector with sign-off",
				"Full trade audit drill-down — every leg, every signature",
			],
			visual: <CommitteeVisual />,
		},
	] as const;

	return (
		<section id="engine" className="border-b py-20 md:py-24">
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
				<motion.div
					className="mx-auto max-w-3xl text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-700">
						The Shariah engine
					</p>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						Three things conventional lending software won&apos;t
						give you.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						TrueSyariah&apos;s lending lifecycle is the same as
						TrueKredit Pro — but the financing engine is rebuilt
						around Shariah contracts, not riba.
					</p>
				</motion.div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{cards.map((c, i) => {
						const Icon = c.icon;
						return (
							<motion.div
								key={c.title}
								className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.5,
									delay: i * 0.08,
								}}
							>
								<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
									{c.visual}
								</div>
								<div className="flex flex-col gap-3 p-6 sm:p-7">
									<div className="flex items-center gap-2">
										<span
											className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${c.tagBg}`}
										>
											<Icon className="h-3 w-3" />
											{c.tag}
										</span>
									</div>
									<h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
										{c.title}
									</h3>
									<p className="text-[15px] leading-relaxed text-muted-foreground">
										{c.desc}
									</p>
									<ul className="mt-1 space-y-1.5 text-sm text-foreground/80">
										{c.bullets.map((b) => (
											<li
												key={b}
												className="flex items-start gap-2"
											>
												<Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
												<span>{b}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}


// ─── Connected modules ───────────────────────────────────────────────────────
// Apple-style horizontal carousel of every first-party module that comes
// wired into TrueSyariah. Mirrors the TrueKredit Pro carousel so the two
// products feel like a single product family, but uses Shariah-specific
// copy and visuals (Tawarruq routing, Tawarruq agreement signing, etc.)
function ConnectedModulesSection() {
	return (
		<section
			id="modules"
			className="border-b bg-muted/30 py-20 md:py-24"
		>
			<FeatureCarousel
				eyebrow="Connected modules"
				title="Everything you need, already wired in."
				description="Identity, attestation, signing, comms, commodity routing, credit, business lookups and a customer mobile app — first-party modules that live inside the financing file, not across five portals."
				tagAccent="emerald"
				items={[
					{
						tag: "First-party",
						icon: Fingerprint,
						title: "TrueIdentity™ — e-KYC & liveness",
						desc: "QR-based customer verification with MyKad OCR and face liveness. Pass or fail saved straight into the financing file, before the Tawarruq trade is booked.",
						visual: <ShariahKycVisual />,
					},
					{
						tag: "Live + video",
						icon: ShieldCheck,
						title: "Digital attestation — counter or video-call",
						desc: "Officers attest customers in person at the counter or by hosted video-call. Every session is logged against the financing file with timestamps, location, and the attesting officer's signed record.",
						visual: <AttestationVisual caseLabel="TS-2401" />,
					},
					{
						tag: "On-prem · DSA 1997",
						icon: PenLine,
						title: "On-premises digital signing",
						desc: "MSC Trustgate-backed PKI signing on infrastructure you control — keys never leave your premises. Customers sign Tawarruq agreements remotely from web or mobile; signed PDFs land back in TrueSyariah.",
						visual: <ShariahSigningVisual />,
					},
					{
						tag: "Auto comms",
						icon: HandCoins,
						title: "Truesend™ — receipts, reminders & notices",
						desc: "Email and WhatsApp templates that auto-fire on payment, instalment due, and arrears events. Every message is logged against the financing file as evidence — useful when Ta'widh is later assessed.",
						visual: <TruesendVisual />,
					},
					{
						tag: "BSAS routing",
						icon: Network,
						title: "TrueCommodity™ — Tawarruq routing",
						desc: "Truestack's commodity trading infrastructure that fronts Bursa Suq Al-Sila'. Every Tawarruq leg — broker A purchase, customer sale, broker B onward sale — is routed, logged, and reconciled inside TrueSyariah.",
						visual: (
							<VisualShell
								tint="from-emerald-500/12 via-teal-500/6 to-amber-300/10"
								glow="bg-emerald-500/20"
								badges={[
									{
										label: "Live broker",
										sub: "Real BSAS leg",
										pos: "left-3 top-4",
										emphasis: "text-emerald-700",
									},
									{
										label: "Reconciled",
										sub: "Daily auto",
										pos: "bottom-4 right-3",
										emphasis: "text-emerald-700",
									},
								]}
							>
								<div className="relative w-[82%] max-w-[290px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
									<div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
										<div className="flex items-center gap-2">
											<div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-100">
												<Coins className="h-3 w-3 text-emerald-700" />
											</div>
											<p className="text-[10px] font-semibold">
												Commodity Trade Log
											</p>
										</div>
										<span className="text-[8px] font-semibold uppercase tracking-wide text-emerald-700">
											BSAS
										</span>
									</div>
									<div className="space-y-1.5 px-3 py-3">
										{[
											{
												label: "Crude palm oil",
												qty: "RM 14,820",
												status: "Settled",
											},
											{
												label: "Crude palm oil",
												qty: "RM 24,800",
												status: "Settled",
											},
											{
												label: "Crude palm oil",
												qty: "RM 9,200",
												status: "In-flight",
											},
										].map((row, i) => (
											<div
												key={i}
												className="flex items-center gap-2 rounded-md border border-emerald-100 bg-emerald-50/40 px-2 py-1.5"
											>
												<div className="flex h-5 w-5 items-center justify-center rounded bg-white">
													<Coins className="h-2.5 w-2.5 text-emerald-700" />
												</div>
												<div className="min-w-0 flex-1">
													<p className="truncate text-[9px] font-medium text-foreground">
														{row.label}
													</p>
													<p className="text-[7px] text-muted-foreground">
														{row.qty}
													</p>
												</div>
												<span
													className={`rounded px-1.5 py-0.5 text-[7px] font-semibold ${
														row.status === "Settled"
															? "bg-emerald-100 text-emerald-700"
															: "bg-amber-100 text-amber-700"
													}`}
												>
													{row.status}
												</span>
											</div>
										))}
									</div>
								</div>
							</VisualShell>
						),
					},
					{
						tag: "Bureau",
						icon: BarChart3,
						title: "CTOS — credit reports in-file",
						desc: "Pull CTOS credit reports directly inside TrueSyariah and attach them to the financing file. Every pull is timestamped and audit-logged for KPKT and Shariah committee review.",
						visual: <CTOSVisual />,
					},
					{
						tag: "via Infomina",
						icon: Building2,
						title: "TrueSSM™ — SSM company lookups",
						desc: "Live SSM company verification through Infomina for Shariah financing to SMEs. Director, shareholder and active-status data flows straight into the financing file — no separate SSM portal needed.",
						visual: <SSMVisual />,
					},
					{
						tag: "Cross-lender",
						icon: Eye,
						title: "TrueSight™ — borrower 360°",
						desc: "Anonymised cross-lender intelligence across the Truestack network. See if a customer is paying other Truestack-powered lenders on time before approving the next Tawarruq financing.",
						visual: <TrueSightVisual />,
					},
					{
						tag: "Native iOS & Android",
						icon: Smartphone,
						title: "Customer mobile app — your brand",
						desc: "A native customer app published under your Shariah operator's brand. Live financing balance, Tawarruq trade history, instalment due dates, in-app sign and pay, push notifications.",
						visual: <ShariahMobileVisual />,
					},
				]}
			/>
		</section>
	);
}

// ─── Origination channels: counter, web, mobile ──────────────────────────────
// Reuses the exact same channel mocks as TrueKredit Pro — the channels
// themselves are identical between conventional and Shariah deployments.
function OriginationSection() {
	return (
		<section
			id="origination"
			className="border-b bg-background py-20 md:py-24"
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
				<motion.div
					className="mx-auto max-w-3xl text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-700">
						Customer origination
					</p>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						Three ways to bring customers in.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						Walk-in, branded web, and native mobile — all
						included in every TrueSyariah deployment, all
						feeding the same Shariah financing core so
						customers can apply, complete e-KYC, accept the
						Tawarruq commodity sale, sign and track their
						financing 24/7.
					</p>
				</motion.div>

				{/* Channels — three cards, each with a custom mock on top
				    and copy below. Same structure as TrueKredit Pro. */}
				<motion.div
					className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{/* Walk-in */}
					<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
						<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
							<WalkInVisual theme="syariah" />
						</div>
						<div className="flex flex-col gap-3 p-6 sm:p-7">
							<span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
								<UserPlus className="h-3 w-3" />
								Counter
							</span>
							<h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
								Walk-in counter
							</h3>
							<p className="text-[15px] leading-relaxed text-muted-foreground">
								Officers add new customers at the branch in
								minutes — MyKad scan, e-KYC and Tawarruq
								trade booking all happen in one screen, with
								the financing file ready before the customer
								leaves the desk.
							</p>
							<ul className="mt-1 space-y-1.5 text-sm text-foreground/80">
								{[
									"Counter-friendly customer creation flow",
									"e-KYC inline with the financing application",
									"Same-day Tawarruq trade and disbursement",
								].map((line) => (
									<li
										key={line}
										className="flex items-start gap-2"
									>
										<Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
										<span>{line}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Branded web portal */}
					<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
						<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
							<WebOriginationVisual theme="syariah" />
						</div>
						<div className="flex flex-col gap-3 p-6 sm:p-7">
							<span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
								<Globe className="h-3 w-3" />
								Web
							</span>
							<h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
								Branded web portal
							</h3>
							<p className="text-[15px] leading-relaxed text-muted-foreground">
								A fully branded customer portal at your own
								domain. Customers self-onboard, complete
								e-KYC, accept the Tawarruq commodity sale,
								sign the agreement and track repayments —
								every submission lands inside TrueSyariah.
							</p>
							<ul className="mt-1 space-y-1.5 text-sm text-foreground/80">
								{[
									"Your domain, your colours, your logo",
									"Application + e-KYC + Tawarruq sign in one flow",
									"Leads land directly in the financing pipeline",
								].map((line) => (
									<li
										key={line}
										className="flex items-start gap-2"
									>
										<Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
										<span>{line}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Mobile */}
					<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
						<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
							<MobileAppVisual theme="syariah" />
						</div>
						<div className="flex flex-col gap-3 p-6 sm:p-7">
							<span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
								<Smartphone className="h-3 w-3" />
								iOS &amp; Android
							</span>
							<h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
								Native iOS &amp; Android apps
							</h3>
							<p className="text-[15px] leading-relaxed text-muted-foreground">
								A customer app published under your brand.
								Customers track their financing, see their
								Tawarruq trade history, pay instalments, and
								complete e-KYC and signing — all from their
								pocket.
							</p>
							<ul className="mt-1 space-y-1.5 text-sm text-foreground/80">
								{[
									"Live balances and repayment schedule",
									"In-app e-KYC, e-sign and instalment payments",
									"Push notifications for due dates",
								].map((line) => (
									<li
										key={line}
										className="flex items-start gap-2"
									>
										<Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
										<span>{line}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Infrastructure (dark) ───────────────────────────────────────────────────
function TrueSyariahInfrastructureSection() {
	return (
		<section
			id="infrastructure"
			data-nav-theme="dark"
			className="border-t border-slate-800 bg-slate-950 py-20 text-white"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge
						icon={ShieldCheck}
						text="Ring-fenced & dedicated"
						className="[&>svg]:text-emerald-400 [&>span]:text-emerald-400"
					/>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
						Enterprise-grade, separation-first infrastructure.
					</h2>
					<p className="mt-4 max-w-2xl text-lg text-slate-400 md:text-xl">
						Every TrueSyariah deployment runs on its own AWS
						Malaysia account, its own database, and its own
						secrets vault — physically and logically isolated
						from any conventional lending tenancy.
					</p>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{/* Malaysia Data Residency */}
					<motion.div
						className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div className="grid gap-6 lg:grid-cols-2 lg:items-center">
							<div>
								<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
									<Database className="h-5 w-5 text-emerald-400" />
								</div>
								<h3 className="mb-2 text-xl font-semibold text-white">
									Dedicated AWS Malaysia account
								</h3>
								<p className="text-slate-400">
									Provisioned in your name in
									ap-southeast-5 — KYC, Tawarruq trade
									logs, signed agreements and the
									Ta&apos;widh / Gharamah ledgers all stay
									inside Malaysia, ring-fenced from any
									other Truestack tenant.
								</p>
							</div>
							<div className="relative">
								<div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
									<div className="mb-4 flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20">
												<Server className="h-3.5 w-3.5 text-emerald-400" />
											</div>
											<span className="text-xs font-medium text-slate-300">
												Amazon Web Services
											</span>
										</div>
										<span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
											ap-southeast-5
										</span>
									</div>
									<div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
										<div className="grid grid-cols-2 gap-3">
											<div className="rounded border border-emerald-400/20 bg-emerald-500/5 p-2.5">
												<p className="text-[9px] uppercase tracking-wide text-emerald-300">
													Shariah entity
												</p>
												<p className="text-[11px] font-semibold text-white">
													TrueSyariah · Acct 1
												</p>
											</div>
											<div className="rounded border border-slate-600 bg-slate-800/50 p-2.5">
												<p className="text-[9px] uppercase tracking-wide text-slate-400">
													Conventional entity
												</p>
												<p className="text-[11px] font-semibold text-slate-300">
													TrueKredit · Acct 2
												</p>
											</div>
										</div>
										<div className="mt-3 flex items-center justify-between rounded bg-slate-800/50 px-3 py-2">
											<div className="flex items-center gap-2">
												<div className="h-2 w-2 rounded-full bg-emerald-500" />
												<span className="text-[10px] text-slate-400">
													Ring-fenced — no shared data plane
												</span>
											</div>
											<span className="text-[10px] text-emerald-300">
												Verified
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* On-prem signing */}
					<motion.div
						className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
							<PenLine className="h-5 w-5 text-emerald-400" />
						</div>
						<h3 className="mb-2 text-lg font-semibold text-white">
							On-premises PKI signing
						</h3>
						<p className="mb-4 text-sm text-slate-400">
							MSC Trustgate signing server lives at your site.
							Cloud talks to it via Cloudflare Tunnel — keys
							never leave your premises.
						</p>
						<div className="space-y-2">
							{["DSA 1997 aligned", "Trustgate-rooted PKI", "Cloudflare Tunnel"].map(
								(line) => (
									<div
										key={line}
										className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2"
									>
										<div className="h-2 w-2 rounded-full bg-emerald-400" />
										<span className="text-xs text-slate-300">
											{line}
										</span>
									</div>
								),
							)}
						</div>
					</motion.div>

					{/* Backups */}
					<motion.div
						className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.15 }}
					>
						<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
							<Server className="h-5 w-5 text-emerald-400" />
						</div>
						<h3 className="mb-2 text-lg font-semibold text-white">
							Daily backups
						</h3>
						<p className="mb-4 text-sm text-slate-400">
							Automated daily snapshots with point-in-time
							recovery. Tawarruq logs and ledgers preserved
							indefinitely.
						</p>
						<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
							<div className="flex items-center gap-3">
								<div className="flex h-12 w-10 flex-col items-center justify-center rounded border border-slate-600 bg-slate-900">
									<div className="mb-1 h-1 w-6 rounded bg-emerald-400" />
									<div className="mb-1 h-1 w-6 rounded bg-slate-600" />
									<div className="h-1 w-6 rounded bg-slate-600" />
								</div>
								<div className="flex-1">
									<div className="mb-1 text-xs font-medium text-white">
										Last backup
									</div>
									<div className="flex items-center gap-1">
										<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
										<span className="text-[10px] text-slate-500">
											Today, 03:00 AM
										</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Encryption */}
					<motion.div
						className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
							<Lock className="h-5 w-5 text-emerald-400" />
						</div>
						<h3 className="mb-2 text-lg font-semibold text-white">
							Bank-grade encryption
						</h3>
						<p className="mb-4 text-sm text-slate-400">
							Encrypted at rest and in transit. Dedicated KMS
							keys per tenant — not shared.
						</p>
						<div className="space-y-2">
							{["AES-256 at rest", "TLS 1.3 in transit", "Per-tenant KMS"].map(
								(line) => (
									<div
										key={line}
										className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2"
									>
										<div className="h-2 w-2 rounded-full bg-emerald-400" />
										<span className="text-xs text-slate-300">
											{line}
										</span>
									</div>
								),
							)}
						</div>
					</motion.div>

					{/* Audit */}
					<motion.div
						className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.25 }}
					>
						<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
							<FileCheck className="h-5 w-5 text-emerald-400" />
						</div>
						<h3 className="mb-2 text-lg font-semibold text-white">
							Tamper-evident audit
						</h3>
						<p className="mb-4 text-sm text-slate-400">
							Every Tawarruq leg, every Ta&apos;widh /
							Gharamah journal, every signature — fully
							logged.
						</p>
						<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
							<div className="space-y-2 font-mono text-[10px]">
								<div className="flex items-center gap-2">
									<span className="text-slate-500">10:42:15</span>
									<span className="text-emerald-300">
										TAWARRUQ_BOOKED
									</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-slate-500">10:41:02</span>
									<span className="text-amber-300">
										GHARAMAH_POSTED
									</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-slate-500">10:40:28</span>
									<span className="text-slate-300">
										DOC_SIGNED
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Comparison: TrueKredit Pro vs TrueSyariah ──────────────────────────────
function ComparisonSection() {
	const sharedRows = [
		"Customer lifecycle (origination → disbursement → repayment)",
		"e-KYC — MyKad OCR, liveness, biometric match",
		"On-prem PKI digital signing (Trustgate)",
		"Branded web portal + native iOS & Android apps",
		"Dedicated AWS Malaysia account, DB and secrets",
		"Daily automated backups & 24/7 uptime",
		"Audit trail & KPKT-aligned reporting",
		"Pen-test pack & inspection-ready dossiers",
	];
	const conventionalOnly = [
		"Riba (interest) calculation engine",
		"Lampiran A / Jadual J & K conventional letters",
		"CTOS / TrueSSM™ inline credit checks",
		"KPKT Online Money Lending Licence reporting",
	];
	const syariahOnly = [
		"Tawarruq commodity trading via Bursa Suq Al-Sila' (BSAS)",
		"Segregated Ta'widh & Gharamah ledgers",
		"Charity disbursement workflow with sign-off",
		"Quarterly Shariah committee audit pack",
		"Shariah-aligned contract templates & variance detector",
		"KPKT Syariah Digital Lending Licence reporting",
	];

	return (
		<section
			id="compare"
			className="border-b bg-muted/20 py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-10 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge
						icon={Layers}
						text="Feature comparison"
						className="justify-center"
					/>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
						TrueKredit Pro vs TrueSyariah
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
						Same dedicated-AWS shape, same digital licence
						capabilities — different financing engine, different
						licence, different entity.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<Card className="overflow-hidden">
						<CardContent className="p-0">
							<div className="overflow-x-auto">
								<table className="w-full text-left text-sm">
									<thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
										<tr>
											<th className="w-1/2 px-5 py-4 font-semibold">
												Capability
											</th>
											<th className="w-1/4 px-5 py-4 text-center font-semibold text-blue-700">
												<div className="flex flex-col items-center gap-0.5">
													<span>TrueKredit Pro</span>
													<span className="text-[10px] font-normal text-muted-foreground normal-case">
														KPKT Digital Lending
													</span>
												</div>
											</th>
											<th className="w-1/4 px-5 py-4 text-center font-semibold text-emerald-800">
												<div className="flex flex-col items-center gap-0.5">
													<span>TrueSyariah</span>
													<span className="text-[10px] font-normal text-muted-foreground normal-case">
														KPKT Syariah Digital Lending
													</span>
												</div>
											</th>
										</tr>
									</thead>
									<tbody className="divide-y">
										<tr className="bg-muted/40">
											<td
												colSpan={3}
												className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
											>
												Shared dedicated-AWS core
											</td>
										</tr>
										{sharedRows.map((row) => (
											<tr key={row} className="text-foreground">
												<td className="px-5 py-3">{row}</td>
												<td className="px-5 py-3 text-center text-blue-700">
													<Check className="mx-auto h-5 w-5" />
												</td>
												<td className="bg-emerald-500/5 px-5 py-3 text-center text-emerald-700">
													<Check className="mx-auto h-5 w-5" />
												</td>
											</tr>
										))}
										<tr className="bg-blue-500/5">
											<td
												colSpan={3}
												className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-blue-700"
											>
												Conventional-only
											</td>
										</tr>
										{conventionalOnly.map((row) => (
											<tr key={row} className="text-foreground">
												<td className="px-5 py-3">{row}</td>
												<td className="px-5 py-3 text-center text-blue-700">
													<Check className="mx-auto h-5 w-5" />
												</td>
												<td className="bg-emerald-500/5 px-5 py-3 text-center text-muted-foreground/50">
													—
												</td>
											</tr>
										))}
										<tr className="bg-emerald-500/5">
											<td
												colSpan={3}
												className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-emerald-800"
											>
												Shariah-only
											</td>
										</tr>
										{syariahOnly.map((row) => (
											<tr key={row} className="text-foreground">
												<td className="px-5 py-3">{row}</td>
												<td className="px-5 py-3 text-center text-muted-foreground/50">
													—
												</td>
												<td className="bg-emerald-500/5 px-5 py-3 text-center text-emerald-700">
													<Check className="mx-auto h-5 w-5" />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Integration partners ────────────────────────────────────────────────────
function IntegrationsSection() {
	const partners = [
		{
			name: "Bursa Suq Al-Sila'",
			desc: "Tawarruq commodity",
			icon: Moon,
			tint: "bg-emerald-100 text-emerald-700",
		},
		{
			name: "MSC Trustgate",
			desc: "On-prem PKI signing",
			icon: PenLine,
			tint: "bg-emerald-100 text-emerald-700",
		},
		{
			name: "TrueIdentity™",
			desc: "MyKad e-KYC",
			icon: Fingerprint,
			tint: "bg-teal-100 text-teal-700",
		},
		{
			name: "TrueSSM™",
			desc: "SSM lookups",
			icon: Building2,
			tint: "bg-teal-100 text-teal-700",
		},
		{
			name: "FPX & DuitNow",
			desc: "Disbursement & collection",
			icon: Banknote,
			tint: "bg-amber-100 text-amber-800",
		},
	];
	return (
		<section id="integrations" className="border-b py-20">
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-10 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge
						icon={Link2}
						text="Integration advantage"
						className="justify-center"
					/>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
						Pre-wired partners. One contract.
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
						BSAS commodity routing, on-prem PKI signing, e-KYC,
						SSM and Malaysian payment rails — all rolled into a
						single Truestack engagement.
					</p>
				</motion.div>

				<motion.div
					className="overflow-hidden rounded-2xl border bg-card shadow-sm"
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45 }}
				>
					<div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
						{partners.map((p) => {
							const Icon = p.icon;
							return (
								<div
									key={p.name}
									className="flex flex-col items-center gap-3 px-6 py-7 text-center"
								>
									<div
										className={`flex h-12 w-12 items-center justify-center rounded-2xl ${p.tint}`}
									>
										<Icon className="h-5 w-5" />
									</div>
									<div className="font-display text-lg font-semibold tracking-tight text-foreground">
										{p.name}
									</div>
									<div className="text-xs uppercase tracking-wider text-muted-foreground">
										{p.desc}
									</div>
								</div>
							);
						})}
					</div>
				</motion.div>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{[
						{
							icon: Check,
							title: "No integration fees",
							desc: "BSAS routing, Trustgate, e-KYC and payments are wired in by default — no per-vendor integration project.",
						},
						{
							icon: BarChart3,
							title: "Better partner rates",
							desc: "Truestack volume unlocks BSAS broker pricing and Trustgate rates that solo Shariah operators struggle to reach.",
						},
						{
							icon: Briefcase,
							title: "One vendor, one contract",
							desc: "We manage every supplier on your behalf — useful when a Shariah committee is asking who exactly is touching the data.",
						},
					].map((c) => {
						const Icon = c.icon;
						return (
							<Card
								key={c.title}
								className="h-full transition-all hover:border-emerald-300 hover:shadow-md"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
										<Icon className="h-5 w-5 text-emerald-700" />
									</div>
									<CardTitle className="text-base">
										{c.title}
									</CardTitle>
									<CardDescription>{c.desc}</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}

// ─── Zero to licensed: full-service bridge ───────────────────────────────────
function ZeroToLicensedSection() {
	return (
		<section
			id="zero-to-license"
			className="border-b bg-muted/30 py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<SectionBadge
							icon={Building2}
							text="Full-service partnership"
						/>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							From zero to licensed Shariah lending — end to end.
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Don&apos;t have a KPKT Syariah Digital Lending
							Licence yet? Truestack covers the full journey
							— Shariah entity setup, KPKT submission,
							Shariah committee onboarding, AWS Malaysia
							build, UAT, pen-test, KPKT inspection support
							and live operations.
						</p>
						<Button
							asChild
							size="lg"
							className="mt-6 gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
						>
							<Link href="/contact?subject=KPKT%20Syariah%20licence">
								Talk to us about your Syariah licence
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
					<ol className="space-y-3">
						{[
							{
								step: "1",
								title: "Shariah entity setup",
								desc: "Incorporate the standalone Sdn. Bhd. that will hold the KPKT Syariah Digital Lending Licence — separate from any existing TrueKredit / conventional lender entity.",
							},
							{
								step: "2",
								title: "KPKT Syariah submission & committee",
								desc: "Draft and submit the KPKT Syariah digital lending licence application; onboard your appointed Shariah committee and align Tawarruq / Ta'widh / Gharamah rulings to the platform.",
							},
							{
								step: "3",
								title: "Dedicated AWS build & integration",
								desc: "Stand up your dedicated AWS Malaysia account; deploy TrueSyariah; wire BSAS / Trustgate / TrueIdentity / payments; configure financing products to your committee's rulings.",
							},
							{
								step: "4",
								title: "TrueSyariah goes live",
								desc: "UAT, pen-test, KPKT inspection walkthrough, Shariah committee sign-off — first Tawarruq trade booked, branded apps in market.",
								highlight: true,
							},
						].map((s) => (
							<li
								key={s.step}
								className={`flex gap-4 rounded-xl border bg-background p-5 ${
									s.highlight
										? "border-emerald-300 bg-emerald-500/5"
										: ""
								}`}
							>
								<div
									className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
										s.highlight
											? "bg-emerald-600 text-white"
											: "bg-muted text-foreground"
									}`}
								>
									{s.step}
								</div>
								<div>
									<p
										className={`font-medium ${
											s.highlight
												? "text-emerald-800"
												: "text-foreground"
										}`}
									>
										{s.title}
									</p>
									<p className="mt-1 text-sm text-muted-foreground">
										{s.desc}
									</p>
								</div>
							</li>
						))}
					</ol>
				</motion.div>
			</div>
		</section>
	);
}

// ─── FAQ ────────────────────────────────────────────────────────────────────
function FaqSection() {
	return (
		<section id="faq" className="border-b bg-muted/30 py-20 md:py-24">
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
				<motion.div
					className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge
						icon={HelpCircle}
						text="FAQ"
						className="justify-center"
					/>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
						Frequently asked questions
					</h2>
					<p className="mx-auto mt-3 text-base text-muted-foreground md:text-lg">
						How TrueSyariah differs from TrueKredit, what the
						KPKT Syariah Digital Lending Licence requires, and
						how Tawarruq, Ta&apos;widh and Gharamah work on the
						platform.
					</p>
				</motion.div>

				<motion.div
					className="w-full max-w-none"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<Accordion type="single" collapsible className="w-full">
						{truesyariahFaq.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="py-5 text-left text-base font-medium md:text-lg data-[state=open]:text-foreground">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-base leading-relaxed text-muted-foreground md:text-lg">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Bottom CTA band ────────────────────────────────────────────────────────
function TrueSyariahCtaSection() {
	return (
		<section
			id="cta"
			data-nav-theme="dark"
			className="relative overflow-hidden border-t border-slate-800 bg-linear-to-br from-emerald-950 via-slate-950 to-emerald-950 py-24 text-white"
		>
			<div className="pointer-events-none absolute inset-0 z-0">
				<div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
				<div className="absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-3xl" />
			</div>
			<div className="relative mx-auto max-w-6xl px-6 text-center">
				<h2 className="mx-auto mb-4 max-w-3xl font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
					<span className="bg-linear-to-r from-emerald-200 via-teal-200 to-amber-200 bg-clip-text text-transparent">
						Ready to launch Shariah-compliant lending?
					</span>
				</h2>
				<p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
					Whether you already hold a KPKT Syariah Digital Lending
					Licence or are still scoping your Shariah entity,
					Truestack will take you from kick-off to first Tawarruq
					trade.
				</p>
				<div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
					<Button
						asChild
						size="lg"
						className="gap-2 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
					>
						<Link href="/contact?subject=TrueSyariah">
							Talk to us about TrueSyariah
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="gap-2 border-emerald-300 bg-emerald-500/5 text-emerald-100 hover:bg-emerald-500/10 hover:text-white"
					>
						<Link href="/services/digital-license">
							Need a KPKT licence?
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="ghost"
						size="lg"
						className="gap-2 text-slate-300 hover:bg-white/6 hover:text-white"
					>
						<Link href="/truekredit">
							Compare with TrueKredit
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

// ─── Page export ─────────────────────────────────────────────────────────────
export default function TrueSyariahPage() {
	return (
		<>
			<HeroSection />
			<LicenceRealitySection />
			<ShariahEngineSection />
			<ConnectedModulesSection />
			<OriginationSection />
			<TrueSyariahInfrastructureSection />
			<ComparisonSection />
			<IntegrationsSection />
			<ZeroToLicensedSection />
			<FaqSection />
			<TrueSyariahCtaSection />
		</>
	);
}
