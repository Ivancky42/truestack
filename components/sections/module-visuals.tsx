"use client";

// Shared connected-module visuals used in the FeatureCarousel on both
// /truekredit and /truesyariah. Each function renders a small fake UI mock
// (phone, dashboard, calendar, ledger…) for one module.

import type { LucideIcon } from "lucide-react";
import {
	AlertTriangle,
	BarChart3,
	Building2,
	CalendarDays,
	CheckCircle2,
	Check,
	Clock,
	FileCheck,
	FileText,
	Fingerprint,
	Mail,
	PenLine,
	Receipt,
	ScanFace,
	ShieldCheck,
	Sparkles,
	Video,
} from "lucide-react";
import {
	PhoneChrome,
	VisualShell,
} from "@/components/shared/feature-carousel";

// ── TrueIdentity™ — e-KYC + liveness ────────────────────────────────────────
export function TrueIdentityVisual() {
	const steps: {
		icon: LucideIcon;
		label: string;
		sub: string;
		color: string;
		bg: string;
		border: string;
	}[] = [
		{
			icon: FileCheck,
			label: "Scan MyKad",
			sub: "OCR extraction",
			color: "text-blue-600",
			bg: "bg-blue-50",
			border: "border-blue-200",
		},
		{
			icon: ScanFace,
			label: "Selfie + liveness",
			sub: "Face capture",
			color: "text-violet-600",
			bg: "bg-violet-50",
			border: "border-violet-200",
		},
		{
			icon: Fingerprint,
			label: "Biometric match",
			sub: "Compared to IC",
			color: "text-indigo-600",
			bg: "bg-indigo-50",
			border: "border-indigo-200",
		},
		{
			icon: CheckCircle2,
			label: "Verified",
			sub: "Saved to file",
			color: "text-emerald-600",
			bg: "bg-emerald-50",
			border: "border-emerald-200",
		},
	];

	return (
		<VisualShell
			tint="from-primary/10 via-primary/5 to-violet-500/10"
			glow="bg-primary/15"
			badges={[
				{ label: "<3s", sub: "Verification", pos: "left-3 top-4" },
				{
					label: "PDPA",
					sub: "Compliant",
					pos: "bottom-4 right-3",
					emphasis: "text-primary",
				},
			]}
		>
			<PhoneChrome>
				<div className="mb-3 text-center">
					<div className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
						<Fingerprint className="h-3.5 w-3.5 text-primary" />
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
								className={`flex items-center gap-2 rounded-md border ${s.border} bg-white px-2 py-1.5`}
							>
								<div
									className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${s.bg}`}
								>
									<Icon className={`h-3 w-3 ${s.color}`} />
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
									<CheckCircle2 className="h-3 w-3 text-emerald-500" />
								) : (
									<Check className="h-2.5 w-2.5 text-primary" />
								)}
							</div>
						);
					})}
				</div>
			</PhoneChrome>
		</VisualShell>
	);
}

// ── Truesend™ — automated comms ────────────────────────────────────────────
export function TruesendVisual() {
	const messages = [
		{
			tag: "Receipt",
			meta: "Email • 09:14",
			text: "Payment of RM 750 received",
			icon: Receipt,
			border: "border-emerald-200",
			chip: "bg-emerald-100 text-emerald-700",
			iconBg: "bg-emerald-50",
			iconColor: "text-emerald-600",
		},
		{
			tag: "Reminder",
			meta: "WhatsApp • 08:00",
			text: "Instalment due in 3 days",
			icon: Clock,
			border: "border-sky-200",
			chip: "bg-sky-100 text-sky-700",
			iconBg: "bg-sky-50",
			iconColor: "text-sky-600",
		},
		{
			tag: "Default notice",
			meta: "Email • 07:45",
			text: "Account in arrears since 12 Apr",
			icon: AlertTriangle,
			border: "border-amber-200",
			chip: "bg-amber-100 text-amber-700",
			iconBg: "bg-amber-50",
			iconColor: "text-amber-600",
		},
	];

	return (
		<VisualShell
			tint="from-sky-500/15 via-cyan-500/5 to-sky-500/10"
			glow="bg-sky-500/20"
			badges={[
				{ label: "12 today", sub: "Auto-sent", pos: "left-3 top-4" },
				{
					label: "18",
					sub: "Templates",
					pos: "bottom-4 right-3",
					emphasis: "text-sky-600",
				},
			]}
		>
			<PhoneChrome>
				<div className="mb-2.5 flex items-center gap-2">
					<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100">
						<Mail className="h-3.5 w-3.5 text-sky-600" />
					</div>
					<div className="min-w-0 flex-1">
						<p className="text-[10px] font-semibold leading-tight">
							Truesend™ Outbox
						</p>
						<p className="text-[8px] leading-tight text-muted-foreground">
							Auto-sent today
						</p>
					</div>
					<span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
						Live
					</span>
				</div>
				<div className="space-y-1.5">
					{messages.map((m) => {
						const Icon = m.icon;
						return (
							<div
								key={m.tag}
								className={`flex items-center gap-2 rounded-md border ${m.border} bg-white px-2 py-1.5`}
							>
								<div
									className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${m.iconBg}`}
								>
									<Icon className={`h-3 w-3 ${m.iconColor}`} />
								</div>
								<div className="min-w-0 flex-1">
									<div className="flex items-center gap-1">
										<span
											className={`rounded px-1 py-px text-[7px] font-semibold uppercase tracking-wide ${m.chip}`}
										>
											{m.tag}
										</span>
										<p className="truncate text-[7px] text-muted-foreground">
											{m.meta}
										</p>
									</div>
									<p className="mt-0.5 truncate text-[9px] leading-tight text-foreground">
										{m.text}
									</p>
								</div>
								<Check className="h-3 w-3 text-emerald-500" />
							</div>
						);
					})}
				</div>
			</PhoneChrome>
		</VisualShell>
	);
}

// ── TrueSSM™ — SSM company lookups via Infomina ────────────────────────────
export function SSMVisual() {
	const directors = [
		{ name: "Lim Wei Ming", role: "Director • 51%", initials: "LW" },
		{ name: "Tan Siew Ling", role: "Director • 49%", initials: "TS" },
	];
	return (
		<VisualShell
			tint="from-emerald-500/15 via-teal-500/5 to-emerald-500/10"
			glow="bg-emerald-500/20"
			badges={[
				{
					label: "via Infomina",
					sub: "TrueSSM™ lookup",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "Active",
					sub: "Status",
					pos: "bottom-4 right-3",
					emphasis: "text-emerald-600",
				},
			]}
		>
			<div className="relative w-[80%] max-w-[280px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
				<div className="border-b bg-slate-50 px-4 py-2.5">
					<div className="flex items-center gap-2">
						<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
							<Building2 className="h-3.5 w-3.5 text-emerald-600" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-[10px] font-semibold uppercase tracking-tight">
								Acme Enterprise Sdn Bhd
							</p>
							<p className="text-[7px] text-muted-foreground">
								202401012345 (1234567-X)
							</p>
						</div>
						<CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
					</div>
				</div>
				<div className="px-4 py-3">
					<p className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
						Directors & shareholders
					</p>
					<div className="space-y-1.5">
						{directors.map((d) => (
							<div
								key={d.name}
								className="flex items-center gap-2 rounded-md border border-emerald-100 bg-emerald-50/50 px-2 py-1.5"
							>
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-500 text-[8px] font-bold text-white">
									{d.initials}
								</div>
								<div className="min-w-0 flex-1">
									<p className="truncate text-[9px] font-medium leading-tight">
										{d.name}
									</p>
									<p className="text-[7px] leading-tight text-muted-foreground">
										{d.role}
									</p>
								</div>
								<Check className="h-3 w-3 text-emerald-500" />
							</div>
						))}
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── TrueSight™ — cross-lender intelligence ─────────────────────────────────
export function TrueSightVisual() {
	return (
		<VisualShell
			tint="from-violet-500/15 via-fuchsia-500/5 to-indigo-500/10"
			glow="bg-violet-500/20"
			badges={[
				{
					label: "6 lenders",
					sub: "Network match",
					pos: "left-3 top-4",
					emphasis: "text-violet-700",
				},
				{
					label: "On-time 96%",
					sub: "Performance",
					pos: "bottom-4 right-3",
					emphasis: "text-emerald-600",
				},
			]}
		>
			<div className="relative w-[82%] max-w-[290px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
				<div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
					<div className="flex items-center gap-2">
						<div className="flex h-6 w-6 items-center justify-center rounded bg-violet-100">
							<Sparkles className="h-3 w-3 text-violet-600" />
						</div>
						<p className="text-[10px] font-semibold">Borrower 360°</p>
					</div>
					<span className="rounded-full bg-violet-100 px-1.5 py-0.5 text-[8px] font-semibold text-violet-700">
						TrueSight™
					</span>
				</div>
				<div className="grid grid-cols-3 gap-1.5 px-3 py-3">
					{[
						{ value: "3", label: "Active", color: "text-sky-600" },
						{
							value: "8",
							label: "Completed",
							color: "text-emerald-600",
						},
						{
							value: "0",
							label: "Defaulted",
							color: "text-rose-600",
						},
					].map((s) => (
						<div
							key={s.label}
							className="rounded-lg border border-slate-100 bg-slate-50/70 p-2 text-center"
						>
							<p className={`text-base font-bold ${s.color}`}>
								{s.value}
							</p>
							<p className="text-[7px] uppercase tracking-wide text-muted-foreground">
								{s.label}
							</p>
						</div>
					))}
				</div>
				<div className="border-t bg-slate-50/50 px-4 py-2.5">
					<div className="flex items-center justify-between">
						<p className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
							On-time payments
						</p>
						<p className="text-[9px] font-bold text-emerald-600">
							96%
						</p>
					</div>
					<div className="mt-1 flex gap-0.5">
						{Array.from({ length: 18 }).map((_, i) => (
							<div
								key={i}
								className={`h-3 flex-1 rounded-sm ${
									i === 4 || i === 11
										? "bg-amber-300"
										: "bg-emerald-400"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── On-prem digital signing (Trustgate) ─────────────────────────────────────
// Variant lets the same mock represent a conventional loan agreement OR a
// Shariah Tawarruq financing agreement.
export function DigitalSigningVisual({
	variant = "kredit",
}: {
	variant?: "kredit" | "syariah";
}) {
	const isSyariah = variant === "syariah";
	const tint = isSyariah
		? "from-emerald-500/12 via-teal-500/6 to-emerald-500/12"
		: "from-indigo-500/15 via-blue-500/5 to-indigo-500/10";
	const glow = isSyariah ? "bg-emerald-500/22" : "bg-indigo-500/20";
	const accentText = isSyariah ? "text-emerald-700" : "text-indigo-600";
	const accentTextStrong = isSyariah
		? "text-emerald-800"
		: "text-indigo-700";
	const accentBg = isSyariah ? "bg-emerald-100" : "bg-indigo-100";
	const dashedBorder = isSyariah
		? "border-emerald-200 bg-emerald-50/50"
		: "border-indigo-200 bg-indigo-50/50";
	const docTitle = isSyariah
		? "Tawarruq Agreement.pdf"
		: "Loan Agreement.pdf";
	const docHeading = isSyariah
		? "Shariah Financing Agreement"
		: "Loan Agreement";
	const docSubheading = isSyariah
		? "Tawarruq · BSAS-evidenced"
		: "Akta Pemberi Pinjam Wang 1951";
	const signerLabel = isSyariah ? "by Customer" : "by Borrower";

	return (
		<VisualShell
			tint={tint}
			glow={glow}
			badges={[
				{
					label: "PKI",
					sub: "Trustgate",
					pos: "left-3 top-4",
					emphasis: accentText,
				},
				{
					label: isSyariah ? "DSA 1997" : "On-prem",
					sub: isSyariah ? "Compliant" : "Your servers",
					pos: "bottom-4 right-3",
					emphasis: accentTextStrong,
				},
			]}
		>
			<div className="relative w-[72%] max-w-[240px] overflow-hidden rounded-lg border border-border/70 bg-white shadow-xl">
				<div className="flex items-center gap-1.5 border-b bg-slate-50 px-3 py-1.5">
					<FileText className={`h-3 w-3 ${accentText}`} />
					<p className="text-[9px] font-semibold">{docTitle}</p>
				</div>
				<div className="px-4 py-3">
					<p className="text-center text-[10px] font-bold uppercase tracking-wide">
						{docHeading}
					</p>
					<p className="mt-0.5 text-center text-[7px] text-muted-foreground">
						{docSubheading}
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
					<div
						className={`mt-3 rounded-md border-2 border-dashed p-2 ${dashedBorder}`}
					>
						<div className="flex items-center gap-2">
							<div
								className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${accentBg}`}
							>
								<PenLine className={`h-3.5 w-3.5 ${accentText}`} />
							</div>
							<div className="min-w-0 flex-1">
								<p className="text-[9px] font-semibold leading-tight">
									Digitally signed
								</p>
								<p className="text-[7px] leading-tight text-muted-foreground">
									{signerLabel} • 12 May 2026
								</p>
							</div>
							<CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
						</div>
					</div>
					<div className="mt-2 flex items-center justify-end gap-1">
						<ShieldCheck className={`h-3 w-3 ${accentText}`} />
						<p
							className={`text-[7px] font-semibold uppercase tracking-wide ${accentTextStrong}`}
						>
							MSC Trustgate verified
						</p>
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── Digital Attestation (live + scheduled video-call) ──────────────────────
export function AttestationVisual({
	caseLabel = "TK-2401",
}: {
	caseLabel?: string;
}) {
	const weekLetters = ["S", "M", "T", "W", "T", "F", "S"];
	// May 2026 starts on Friday → 5 leading blanks, 31 days
	const cells: (number | null)[] = [
		...Array.from({ length: 5 }, () => null),
		...Array.from({ length: 31 }, (_, i) => i + 1),
	];
	while (cells.length % 7 !== 0) cells.push(null);

	const dueDays = new Set([7, 14, 21, 28]);
	const highlighted = new Set([12, 13]);

	const upcoming = [
		{
			title: "Live digital attestation",
			meta: "Counter • Officer Patel — desk",
			icon: ShieldCheck,
			iconBg: "bg-emerald-100 text-emerald-600",
			chip: "Live",
			chipCls: "bg-emerald-100 text-emerald-700",
		},
		{
			title: "Video-call digital attestation",
			meta: "Customer Ahmad • Hosted link • 14:30",
			icon: Video,
			iconBg: "bg-violet-100 text-violet-600",
			chip: "Video",
			chipCls: "bg-violet-100 text-violet-700",
		},
	];

	return (
		<VisualShell
			tint="from-rose-500/14 via-orange-500/6 to-rose-500/10"
			glow="bg-rose-500/22"
			badges={[
				{
					label: "Walk-in live",
					sub: "Attest now",
					pos: "left-3 top-4",
					emphasis: "text-emerald-700",
				},
				{
					label: "Video slots",
					sub: "Hosted calls",
					pos: "bottom-4 right-3",
					emphasis: "text-violet-700",
				},
			]}
		>
			<div className="relative w-[82%] max-w-[286px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
				<div className="flex items-center justify-between border-b bg-slate-50 px-3.5 py-2">
					<div className="flex min-w-0 items-center gap-2">
						<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-100">
							<CalendarDays className="h-3 w-3 text-rose-600" />
						</div>
						<div className="min-w-0">
							<p className="truncate text-[10px] font-semibold">
								Digital Attestation
							</p>
							<p className="truncate text-[7px] leading-tight text-muted-foreground">
								Live + video-call schedule • {caseLabel}
							</p>
						</div>
					</div>
					<span className="rounded-full bg-rose-100 px-1.5 py-0.5 text-[8px] font-semibold text-rose-700">
						May 2026
					</span>
				</div>
				<div className="px-3 py-2.5">
					<div className="grid grid-cols-7 gap-0.5 text-center">
						{weekLetters.map((d, i) => (
							<span
								key={`${d}-${i}`}
								className="text-[6.5px] font-semibold uppercase tracking-wide text-muted-foreground"
							>
								{d}
							</span>
						))}
						{cells.map((day, idx) =>
							day === null ? (
								<span key={`empty-${idx}`} className="h-6" />
							) : (
								<span
									key={day}
									className={`relative flex h-6 flex-col items-center justify-center rounded text-[9px] font-medium ${
										highlighted.has(day)
											? "bg-rose-50 text-rose-800 ring-1 ring-inset ring-rose-200"
											: dueDays.has(day)
												? "text-slate-800"
												: "text-slate-500"
									}`}
								>
									{day}
									{dueDays.has(day) ? (
										<span className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-amber-400" />
									) : null}
								</span>
							),
						)}
					</div>
				</div>
				<div className="space-y-1 border-t bg-slate-50/70 px-3 py-2.5">
					<p className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
						Scheduled
					</p>
					<div className="space-y-1">
						{upcoming.map((u) => {
							const RowIcon = u.icon;
							return (
								<div
									key={u.title}
									className="flex items-center gap-2 rounded-md border border-slate-200/90 bg-white px-2 py-1.5"
								>
									<div
										className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${u.iconBg}`}
									>
										<RowIcon className="h-3 w-3" />
									</div>
									<div className="min-w-0 flex-1">
										<p className="truncate text-[9px] font-medium leading-tight">
											{u.title}
										</p>
										<p className="truncate text-[7px] text-muted-foreground">
											{u.meta}
										</p>
									</div>
									<span
										className={`shrink-0 rounded-full px-1.5 py-px text-[6px] font-semibold uppercase tracking-wide ${u.chipCls}`}
									>
										{u.chip}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</VisualShell>
	);
}

// ── CTOS — credit reports ───────────────────────────────────────────────────
export function CTOSVisual() {
	return (
		<VisualShell
			tint="from-amber-500/15 via-orange-500/5 to-amber-500/10"
			glow="bg-amber-500/20"
			badges={[
				{
					label: "Pulled 09:14",
					sub: "In file",
					pos: "left-3 top-4",
				},
				{
					label: "Audit ✓",
					sub: "Logged",
					pos: "bottom-4 right-3",
					emphasis: "text-emerald-600",
				},
			]}
		>
			<div className="relative w-[80%] max-w-[280px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-xl">
				<div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
					<div className="flex items-center gap-2">
						<div className="flex h-6 w-6 items-center justify-center rounded bg-amber-100">
							<BarChart3 className="h-3 w-3 text-amber-600" />
						</div>
						<p className="text-[10px] font-semibold">Credit Report</p>
					</div>
					<span className="text-[8px] font-semibold uppercase tracking-wide text-amber-700">
						CTOS
					</span>
				</div>
				<div className="px-4 py-3">
					<p className="text-[8px] uppercase tracking-wide text-muted-foreground">
						Credit Score
					</p>
					<div className="mt-0.5 flex items-baseline gap-2">
						<span className="font-display text-3xl font-bold text-amber-600">
							720
						</span>
						<span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
							Good
						</span>
					</div>
					<div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
						<div className="h-full w-[72%] rounded-full bg-linear-to-r from-amber-400 to-emerald-400" />
					</div>
					<div className="mt-0.5 flex justify-between text-[7px] text-muted-foreground">
						<span>300</span>
						<span>850</span>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-1.5 border-t bg-slate-50/60 px-3 py-2.5">
					{[
						{ value: "3", label: "Active", color: "text-sky-600" },
						{
							value: "96%",
							label: "On-time",
							color: "text-emerald-600",
						},
						{
							value: "0",
							label: "Defaulted",
							color: "text-rose-600",
						},
					].map((s) => (
						<div
							key={s.label}
							className="rounded-md bg-white p-1.5 text-center"
						>
							<p className={`text-[11px] font-bold ${s.color}`}>
								{s.value}
							</p>
							<p className="text-[7px] uppercase tracking-wide text-muted-foreground">
								{s.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</VisualShell>
	);
}
