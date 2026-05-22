"use client";

import type { ReactNode } from "react";
import {
	ArrowRight,
	ChevronRight,
	Fingerprint,
	Lock,
	MapPin,
	PenLine,
	Store,
	UserPlus,
	Wallet,
} from "lucide-react";

// ── Origination channel visuals (light) ─────────────────────────────────────
// These three mocks live in the borrower / customer origination section and
// intentionally share a soft, "paper" look so the section feels like a calm
// light breather between dense modules and the dark infrastructure section.
//
// Shared between TrueKredit (loan origination) and TrueSyariah (Shariah
// financing origination) — the channels themselves are identical, so the
// same structural mocks render on both pages but pick up a brand palette
// via the `theme` prop:
//   • "kredit"  — primary/sky/violet accents (default, TrueKredit Pro)
//   • "syariah" — emerald/teal/gold accents (TrueSyariah)

export type OriginationTheme = "kredit" | "syariah";

function ChannelShell({
	tint,
	glow,
	children,
}: {
	tint: string;
	glow: string;
	children: ReactNode;
}) {
	return (
		<div
			className={`relative flex h-full w-full items-end justify-center overflow-hidden bg-linear-to-br ${tint} px-6 pb-0 pt-8`}
		>
			<div
				className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full ${glow} blur-3xl`}
			/>
			{children}
		</div>
	);
}

export function WalkInVisual({
	theme = "kredit",
}: {
	theme?: OriginationTheme;
}) {
	const isSyariah = theme === "syariah";
	const palette = isSyariah
		? {
				shellTint: "from-emerald-500/10 via-teal-500/4 to-background",
				shellGlow: "bg-emerald-500/20",
				accentBg: "bg-emerald-500/10",
				accentText: "text-emerald-700",
				accentBorder: "border-emerald-500/30",
				accentSoftBg: "bg-emerald-500/5",
				avatarGradient: "from-emerald-500 to-teal-600",
			}
		: {
				shellTint: "from-primary/8 via-primary/4 to-background",
				shellGlow: "bg-primary/15",
				accentBg: "bg-primary/10",
				accentText: "text-primary",
				accentBorder: "border-primary/30",
				accentSoftBg: "bg-primary/5",
				avatarGradient: "from-primary/80 to-indigo-500",
			};

	const queue = [
		{
			initials: "AH",
			name: "Ahmad Hisham",
			meta: "MyKad scanned • Officer Lim",
			status: "Approved",
			statusBg: "bg-emerald-100 text-emerald-700",
		},
		{
			initials: "SY",
			name: "Siti Yasmin",
			meta: "e-KYC in progress",
			status: "In review",
			statusBg: "bg-amber-100 text-amber-700",
		},
		{
			initials: "RK",
			name: "Raj Kumar",
			meta: "Walked in 09:42",
			status: "New",
			statusBg: isSyariah
				? "bg-teal-100 text-teal-700"
				: "bg-sky-100 text-sky-700",
		},
	];
	return (
		<ChannelShell tint={palette.shellTint} glow={palette.shellGlow}>
			<div className="relative w-[88%] max-w-[360px] translate-y-3 overflow-hidden rounded-t-2xl border border-b-0 border-border/70 bg-white shadow-xl">
				<div className="flex items-center justify-between border-b bg-slate-50 px-4 py-2.5">
					<div className="flex items-center gap-2">
						<div
							className={`flex h-7 w-7 items-center justify-center rounded-lg ${palette.accentBg}`}
						>
							<Store className={`h-3.5 w-3.5 ${palette.accentText}`} />
						</div>
						<div>
							<p className="text-[10px] font-semibold leading-tight">
								Counter — KL Branch
							</p>
							<p className="text-[8px] leading-tight text-muted-foreground">
								Walk-in queue
							</p>
						</div>
					</div>
					<span
						className={`inline-flex items-center gap-1 rounded-full ${palette.accentBg} px-2 py-0.5 text-[8px] font-semibold ${palette.accentText}`}
					>
						<MapPin className="h-2.5 w-2.5" />
						Branch
					</span>
				</div>
				<div className="space-y-1.5 px-3 py-3">
					{queue.map((q) => (
						<div
							key={q.name}
							className="flex items-center gap-2 rounded-md border border-border/60 bg-white px-2 py-1.5"
						>
							<div
								className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${palette.avatarGradient} text-[9px] font-bold text-white`}
							>
								{q.initials}
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-[10px] font-medium leading-tight">
									{q.name}
								</p>
								<p className="truncate text-[8px] leading-tight text-muted-foreground">
									{q.meta}
								</p>
							</div>
							<span
								className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${q.statusBg}`}
							>
								{q.status}
							</span>
						</div>
					))}
					<div
						className={`mt-2 flex items-center justify-between rounded-md border border-dashed ${palette.accentBorder} ${palette.accentSoftBg} px-2.5 py-1.5`}
					>
						<div className="flex items-center gap-1.5">
							<UserPlus className={`h-3 w-3 ${palette.accentText}`} />
							<span
								className={`text-[9px] font-semibold ${palette.accentText}`}
							>
								Add walk-in customer
							</span>
						</div>
						<ChevronRight className={`h-3 w-3 ${palette.accentText}`} />
					</div>
				</div>
			</div>
		</ChannelShell>
	);
}

export function WebOriginationVisual({
	theme = "kredit",
}: {
	theme?: OriginationTheme;
}) {
	const isSyariah = theme === "syariah";
	const palette = isSyariah
		? {
				shellTint: "from-teal-500/12 via-emerald-500/4 to-background",
				shellGlow: "bg-teal-500/20",
				heroGradientBr: "from-emerald-500 to-teal-600",
				heroGradientR: "from-emerald-500 to-teal-600",
			}
		: {
				shellTint: "from-sky-500/12 via-blue-500/4 to-background",
				shellGlow: "bg-sky-500/20",
				heroGradientBr: "from-sky-500 to-blue-600",
				heroGradientR: "from-sky-500 to-blue-600",
			};

	return (
		<ChannelShell tint={palette.shellTint} glow={palette.shellGlow}>
			<div className="relative w-[88%] max-w-[360px] translate-y-3 overflow-hidden rounded-t-2xl border border-b-0 border-border/70 bg-white shadow-xl">
				<div className="flex items-center gap-1.5 border-b bg-slate-50 px-3 py-2">
					<div className="h-2 w-2 rounded-full bg-rose-400" />
					<div className="h-2 w-2 rounded-full bg-amber-400" />
					<div className="h-2 w-2 rounded-full bg-emerald-400" />
					<div className="ml-2 flex flex-1 items-center gap-1.5 rounded bg-white px-2 py-1 text-[9px] text-muted-foreground">
						<Lock className="h-2.5 w-2.5 text-emerald-500" />
						<span className="truncate">
							kredit.yourcompany.com.my
						</span>
					</div>
				</div>
				<div className="bg-slate-50/60 px-4 py-4">
					<div
						className={`rounded-xl bg-linear-to-br ${palette.heroGradientBr} px-4 py-3 shadow-sm`}
					>
						<p className="text-[11px] font-semibold text-white">
							Apply for a loan
						</p>
						<p className="mt-0.5 text-[8px] text-white/70">
							Quick. Secure. Fully digital.
						</p>
					</div>
					<div className="mt-2.5 space-y-1.5">
						{["Full name", "MyKad number", "Loan amount"].map(
							(label) => (
								<div
									key={label}
									className="flex items-center justify-between rounded-md border border-border/60 bg-white px-2.5 py-1.5"
								>
									<span className="text-[9px] text-muted-foreground">
										{label}
									</span>
									<div className="h-1.5 w-12 rounded-full bg-slate-100" />
								</div>
							),
						)}
						<div
							className={`mt-2 flex items-center justify-center gap-1.5 rounded-md bg-linear-to-r ${palette.heroGradientR} px-3 py-1.5 text-[9px] font-semibold text-white shadow-sm`}
						>
							Submit application
							<ArrowRight className="h-2.5 w-2.5" />
						</div>
					</div>
				</div>
			</div>
		</ChannelShell>
	);
}

export function MobileAppVisual({
	theme = "kredit",
}: {
	theme?: OriginationTheme;
}) {
	const isSyariah = theme === "syariah";
	const palette = isSyariah
		? {
				shellTint: "from-emerald-500/12 via-amber-300/5 to-background",
				shellGlow: "bg-emerald-500/22",
				phoneBg: "from-emerald-950 via-slate-950 to-slate-950",
				cardBorder: "border-emerald-400/30",
				cardBg: "bg-emerald-500/15",
				progress: "bg-emerald-400",
				actionIcon: "text-emerald-300",
			}
		: {
				shellTint: "from-violet-500/12 via-fuchsia-500/4 to-background",
				shellGlow: "bg-violet-500/20",
				phoneBg: "from-indigo-950 via-slate-950 to-slate-950",
				cardBorder: "border-violet-400/30",
				cardBg: "bg-violet-500/15",
				progress: "bg-violet-400",
				actionIcon: "text-violet-300",
			};

	return (
		<ChannelShell tint={palette.shellTint} glow={palette.shellGlow}>
			<div className="relative w-[58%] max-w-[200px] translate-y-3 overflow-hidden rounded-t-[2rem] border border-b-0 border-slate-900/80 bg-slate-900 px-1.5 pt-2 shadow-2xl">
				<div
					className={`overflow-hidden rounded-t-[1.5rem] bg-linear-to-b ${palette.phoneBg} px-3 pb-0 pt-3`}
				>
					<div className="mb-2 flex items-center justify-between text-[8px] text-white/50">
						<span>9:41</span>
						<span>●●●</span>
					</div>
					<p className="text-[10px] font-semibold text-white">
						My Loans
					</p>
					<p className="text-[7px] text-white/40">
						Welcome back, Ahmad
					</p>
					<div
						className={`mt-2.5 rounded-lg border ${palette.cardBorder} ${palette.cardBg} p-2.5`}
					>
						<p className="text-[7px] text-white/40">
							TK-2401 • Active
						</p>
						<p className="font-display text-base font-bold text-white">
							RM 11,200
						</p>
						<p className="text-[7px] text-white/40">outstanding</p>
						<div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
							<div
								className={`h-full w-[65%] rounded-full ${palette.progress}`}
							/>
						</div>
					</div>
					<div className="mt-1.5 rounded-lg border border-emerald-400/20 bg-emerald-500/10 p-2">
						<p className="text-[7px] text-white/40">Next payment</p>
						<p className="text-[10px] font-semibold text-emerald-300">
							RM 1,275 • 12 Jun
						</p>
					</div>
					<div className="mt-1.5 grid grid-cols-3 gap-1">
						{[
							{ label: "Pay", icon: Wallet },
							{ label: "KYC", icon: Fingerprint },
							{ label: "Sign", icon: PenLine },
						].map((a) => (
							<div
								key={a.label}
								className="flex flex-col items-center gap-0.5 rounded-md border border-white/10 bg-white/5 py-1.5"
							>
								<a.icon
									className={`h-2.5 w-2.5 ${palette.actionIcon}`}
								/>
								<span className="text-[7px] text-white/70">
									{a.label}
								</span>
							</div>
						))}
					</div>
					<div className="h-3" />
				</div>
			</div>
		</ChannelShell>
	);
}
