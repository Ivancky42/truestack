"use client";

import type { ReactNode } from "react";
import {
	AlertTriangle,
	CalendarClock,
	Check,
	FileText,
	History,
	Mail,
	PlusCircle,
	RefreshCw,
	Smartphone,
	UserPlus,
	Users,
	Wallet,
} from "lucide-react";

/** Shared mini admin chrome for laptop-stage mocks. */
function AdminChrome({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm">
			<div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2 sm:px-4">
				<div className="flex gap-1">
					<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
					<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
					<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
				</div>
				<p className="truncate text-[10px] font-semibold text-slate-700 sm:text-[11px]">
					{title}
				</p>
			</div>
			<div className="min-h-0 flex-1 overflow-hidden p-3 sm:p-4">
				{children}
			</div>
		</div>
	);
}

function StatusChip({
	label,
	tone = "blue",
}: {
	label: string;
	tone?: "blue" | "green" | "amber" | "violet" | "slate" | "red";
}) {
	const tones = {
		blue: "bg-sky-50 text-sky-700",
		green: "bg-emerald-50 text-emerald-700",
		amber: "bg-amber-50 text-amber-700",
		violet: "bg-violet-50 text-violet-700",
		slate: "bg-slate-100 text-slate-600",
		red: "bg-red-50 text-red-700",
	};
	return (
		<span
			className={`inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-semibold sm:text-[9px] ${tones[tone]}`}
		>
			{label}
		</span>
	);
}

/** 1 — Lead pipeline */
export function LeadsMock() {
	const leads = [
		{
			name: "Raj Kumar",
			src: "Agent · External",
			st: "New",
			tone: "blue" as const,
		},
		{
			name: "Siti Yasmin",
			src: "Walk-in · KL",
			st: "Assigned",
			tone: "amber" as const,
		},
		{
			name: "Ahmad Hisham",
			src: "Referral",
			st: "Convert",
			tone: "green" as const,
		},
	];
	return (
		<AdminChrome title="Sales leads">
			<div className="mb-3 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<UserPlus className="h-3.5 w-3.5 text-primary" />
					<p className="text-[11px] font-semibold text-slate-900 sm:text-xs">
						Pipeline today
					</p>
				</div>
				<StatusChip label="12 open" tone="blue" />
			</div>
			<div className="space-y-2">
				{leads.map((l) => (
					<div
						key={l.name}
						className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/70 px-2.5 py-2"
					>
						<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">
							{l.name
								.split(" ")
								.map((w) => w[0])
								.join("")}
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-[10px] font-semibold text-slate-800 sm:text-[11px]">
								{l.name}
							</p>
							<p className="truncate text-[8px] text-slate-500 sm:text-[9px]">
								{l.src}
							</p>
						</div>
						<StatusChip label={l.st} tone={l.tone} />
					</div>
				))}
			</div>
			<div className="mt-3 rounded-md border border-primary/20 bg-primary/5 px-2.5 py-2 text-[9px] text-slate-600 sm:text-[10px]">
				Convert lead → borrower profile in one click
			</div>
		</AdminChrome>
	);
}

/** 2 — Borrower profiles */
export function BorrowerProfileMock() {
	return (
		<AdminChrome title="Borrower · Ahmad Hisham">
			<div className="mb-3 flex items-start justify-between gap-2">
				<div className="flex items-center gap-2.5">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-indigo-500 text-xs font-bold text-white">
						AH
					</div>
					<div>
						<p className="text-[11px] font-semibold text-slate-900 sm:text-xs">
							Ahmad Hisham
						</p>
						<p className="text-[8px] text-slate-500 sm:text-[9px]">
							IC · 880101-14-**** · Individual
						</p>
					</div>
				</div>
				<StatusChip label="Verified" tone="green" />
			</div>
			<div className="mb-3 grid grid-cols-3 gap-1.5">
				{[
					{ k: "Employment", v: "Employed" },
					{ k: "Commitments", v: "RM 1,200" },
					{ k: "DSR", v: "38%" },
				].map((c) => (
					<div
						key={c.k}
						className="rounded-md border border-slate-100 bg-slate-50 px-1.5 py-1.5 text-center"
					>
						<p className="text-[7px] uppercase tracking-wide text-slate-400">
							{c.k}
						</p>
						<p className="text-[9px] font-semibold text-slate-800 sm:text-[10px]">
							{c.v}
						</p>
					</div>
				))}
			</div>
			<div className="space-y-1.5">
				{[
					"Spouse & family contacts",
					"Guarantor · Siti Yasmin",
					"Docs · MyKad, payslips, CTOS",
				].map((row) => (
					<div
						key={row}
						className="flex items-center gap-2 rounded-md border border-slate-100 px-2 py-1.5"
					>
						<Check className="h-3 w-3 shrink-0 text-emerald-500" />
						<span className="text-[9px] text-slate-700 sm:text-[10px]">
							{row}
						</span>
					</div>
				))}
			</div>
		</AdminChrome>
	);
}

/** 3 — L1/L2 approval chain */
export function OpsChainMock() {
	const steps = [
		{ label: "Lead", done: true },
		{ label: "Profile", done: true },
		{ label: "L1 / L2", done: true },
		{ label: "Finance", done: false },
		{ label: "Repay", done: false },
	];
	return (
		<AdminChrome title="Application · TK-2841">
			<div className="mb-3 flex items-center justify-between">
				<div>
					<p className="text-[11px] font-semibold text-slate-900 sm:text-xs">
						Personal Flex · RM 15,000
					</p>
					<p className="text-[8px] text-slate-500 sm:text-[9px]">
						12 months · Jadual J
					</p>
				</div>
				<StatusChip label="L2 approved" tone="green" />
			</div>
			<div className="mb-3 flex items-center gap-1">
				{steps.map((s, i) => (
					<div key={s.label} className="flex flex-1 items-center gap-1">
						<div
							className={`flex h-6 flex-1 items-center justify-center rounded-md text-[7px] font-semibold sm:text-[8px] ${
								s.done
									? "bg-primary/10 text-primary"
									: "bg-slate-50 text-slate-400"
							}`}
						>
							{s.done ? (
								<Check className="mr-0.5 h-2.5 w-2.5" />
							) : null}
							{s.label}
						</div>
						{i < steps.length - 1 ? (
							<div className="h-px w-1 shrink-0 bg-slate-200" />
						) : null}
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 gap-2">
				<div className="rounded-md border border-slate-100 bg-slate-50/80 p-2">
					<p className="text-[7px] font-medium uppercase tracking-wide text-slate-400">
						Risk score
					</p>
					<p className="mt-0.5 text-[11px] font-semibold text-slate-800">
						62 · Review
					</p>
				</div>
				<div className="rounded-md border border-slate-100 bg-slate-50/80 p-2">
					<p className="text-[7px] font-medium uppercase tracking-wide text-slate-400">
						Field visit
					</p>
					<p className="mt-0.5 text-[11px] font-semibold text-slate-800">
						Photos · Done
					</p>
				</div>
			</div>
			<div className="mt-2 flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-2 py-1.5">
				<Users className="h-3 w-3 text-primary" />
				<p className="text-[9px] text-slate-600 sm:text-[10px]">
					Ready for agreement &amp; disbursement
				</p>
			</div>
		</AdminChrome>
	);
}

/** 4 — Auto documents & email */
export function DocsEmailMock() {
	const docs = [
		{ name: "Loan agreement", meta: "Jadual J", mail: false },
		{ name: "Payment receipt", meta: "Emailed · 09:14", mail: true },
		{ name: "Arrears notice", meta: "Emailed · auto", mail: true },
		{ name: "Default letter", meta: "Template ready", mail: true },
	];
	return (
		<AdminChrome title="Documents & delivery">
			<p className="mb-2 text-[9px] text-slate-500 sm:text-[10px]">
				Auto-generated · emailed when it matters
			</p>
			<div className="space-y-1.5">
				{docs.map((d) => (
					<div
						key={d.name}
						className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/60 px-2 py-1.5"
					>
						<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
							{d.mail ? (
								<Mail className="h-3 w-3 text-primary" />
							) : (
								<FileText className="h-3 w-3 text-primary" />
							)}
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-[10px] font-semibold text-slate-800 sm:text-[11px]">
								{d.name}
							</p>
							<p className="text-[8px] text-slate-500">{d.meta}</p>
						</div>
						{d.mail ? (
							<StatusChip label="Sent" tone="green" />
						) : (
							<StatusChip label="PDF" tone="slate" />
						)}
					</div>
				))}
			</div>
		</AdminChrome>
	);
}

/** 5 — Schedules & repayments */
export function SchedulesMock() {
	const rows = [
		{
			n: "01",
			due: "15 Jan",
			amt: "1,250.00",
			st: "Paid",
			tone: "green" as const,
		},
		{
			n: "02",
			due: "15 Feb",
			amt: "1,250.00",
			st: "Paid",
			tone: "green" as const,
		},
		{
			n: "03",
			due: "15 Mar",
			amt: "1,250.00",
			st: "Due",
			tone: "amber" as const,
		},
		{
			n: "04",
			due: "15 Apr",
			amt: "1,250.00",
			st: "—",
			tone: "slate" as const,
		},
	];
	return (
		<AdminChrome title="Repayment schedule">
			<div className="mb-2 flex items-center justify-between">
				<div className="flex items-center gap-1.5">
					<Wallet className="h-3.5 w-3.5 text-primary" />
					<p className="text-[10px] font-semibold text-slate-800 sm:text-[11px]">
						Loan TK-2841
					</p>
				</div>
				<p className="text-[8px] text-slate-500 sm:text-[9px]">
					Sen-accurate
				</p>
			</div>
			<div className="overflow-hidden rounded-md border border-slate-100">
				<div className="grid grid-cols-[28px_1fr_1fr_48px] gap-1 bg-slate-50 px-2 py-1 text-[7px] font-semibold uppercase tracking-wide text-slate-400">
					<span>#</span>
					<span>Due</span>
					<span>Amount</span>
					<span>Status</span>
				</div>
				{rows.map((r) => (
					<div
						key={r.n}
						className="grid grid-cols-[28px_1fr_1fr_48px] items-center gap-1 border-t border-slate-50 px-2 py-1.5"
					>
						<span className="text-[9px] text-slate-400">{r.n}</span>
						<span className="text-[9px] text-slate-700">{r.due}</span>
						<span className="text-[9px] font-medium text-slate-800">
							RM {r.amt}
						</span>
						<StatusChip label={r.st} tone={r.tone} />
					</div>
				))}
			</div>
			<div className="mt-2 flex items-center gap-1.5 text-[9px] text-slate-500">
				<AlertTriangle className="h-2.5 w-2.5 text-amber-500" />
				Instalment 03 due — slip attached for AR
			</div>
		</AdminChrome>
	);
}

/** 6 — Collections */
export function CollectionsMock() {
	return (
		<AdminChrome title="Collections workspace">
			<div className="mb-3 flex items-center justify-between">
				<p className="text-[11px] font-semibold text-slate-900 sm:text-xs">
					Team dashboard
				</p>
				<StatusChip label="8 in arrears" tone="amber" />
			</div>
			<div className="mb-3 grid grid-cols-3 gap-1.5">
				{[
					{ k: "PTP today", v: "3" },
					{ k: "Escalations", v: "1" },
					{ k: "Maturing", v: "5" },
				].map((c) => (
					<div
						key={c.k}
						className="rounded-md border border-slate-100 bg-slate-50 px-1.5 py-1.5 text-center"
					>
						<p className="text-[7px] uppercase tracking-wide text-slate-400">
							{c.k}
						</p>
						<p className="text-[11px] font-bold text-slate-800">{c.v}</p>
					</div>
				))}
			</div>
			<div className="space-y-1.5">
				{[
					{
						name: "TK-2841 · Ahmad",
						meta: "Day 12 arrears · Letter sent",
						tone: "amber" as const,
						st: "PTP",
					},
					{
						name: "TK-2703 · Siti",
						meta: "Reschedule requested",
						tone: "violet" as const,
						st: "LPS",
					},
					{
						name: "TK-2611 · Raj",
						meta: "Default notice ready",
						tone: "red" as const,
						st: "Default",
					},
				].map((r) => (
					<div
						key={r.name}
						className="flex items-center gap-2 rounded-md border border-slate-100 px-2 py-1.5"
					>
						<div className="min-w-0 flex-1">
							<p className="truncate text-[10px] font-semibold text-slate-800">
								{r.name}
							</p>
							<p className="truncate text-[8px] text-slate-500">
								{r.meta}
							</p>
						</div>
						<StatusChip label={r.st} tone={r.tone} />
					</div>
				))}
			</div>
		</AdminChrome>
	);
}

/** 7 — Loan flexibility (refinance / top-up / reschedule) */
export function LoanFlexibilityMock() {
	const paths = [
		{
			icon: RefreshCw,
			title: "Refinance",
			desc: "New loan settles the old one",
			st: "In review",
			tone: "amber" as const,
		},
		{
			icon: PlusCircle,
			title: "Top-up",
			desc: "Extra funds · original stays active",
			st: "Linked",
			tone: "blue" as const,
		},
		{
			icon: CalendarClock,
			title: "Reschedule",
			desc: "New instalment plan on the same loan",
			st: "Executed",
			tone: "green" as const,
		},
	];
	return (
		<AdminChrome title="Loan changes · LPS">
			<div className="mb-3 flex items-center justify-between">
				<div>
					<p className="text-[11px] font-semibold text-slate-900 sm:text-xs">
						TK-2841 · Ahmad Hisham
					</p>
					<p className="mt-0.5 text-[8px] text-slate-500 sm:text-[9px]">
						Collections · choose how the loan adapts
					</p>
				</div>
				<StatusChip label="Tracked" tone="violet" />
			</div>
			<div className="space-y-1.5">
				{paths.map((p) => (
					<div
						key={p.title}
						className="flex items-center gap-2 rounded-md border border-slate-100 px-2 py-1.5"
					>
						<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
							<p.icon className="h-3.5 w-3.5 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-[10px] font-semibold text-slate-800">
								{p.title}
							</p>
							<p className="truncate text-[8px] text-slate-500">
								{p.desc}
							</p>
						</div>
						<StatusChip label={p.st} tone={p.tone} />
					</div>
				))}
			</div>
			<p className="mt-2.5 text-[8px] text-slate-500 sm:text-[9px]">
				Approved and recorded on the same loan file
			</p>
		</AdminChrome>
	);
}

/** 8 — Audit trail */
export function AuditTrailMock() {
	const rows = [
		{ t: "10:42", a: "PAYMENT_RECEIVED", who: "Finance · Lim" },
		{ t: "10:41", a: "RECEIPT_EMAILED", who: "System" },
		{ t: "09:18", a: "LOAN_APPROVED_L2", who: "Director · Ong" },
		{ t: "08:55", a: "FIELD_VISIT_UPLOADED", who: "L1 · Tan" },
	];
	return (
		<AdminChrome title="Admin logs · Audit trail">
			<div className="mb-3 flex items-center gap-2">
				<History className="h-3.5 w-3.5 text-primary" />
				<p className="text-[11px] font-semibold text-slate-900 sm:text-xs">
					Every action, timestamped
				</p>
			</div>
			<div className="space-y-1.5 font-mono">
				{rows.map((r) => (
					<div
						key={r.t + r.a}
						className="rounded-md border border-slate-100 bg-slate-50/80 px-2 py-1.5"
					>
						<div className="flex items-center justify-between gap-2">
							<span className="text-[8px] text-slate-400">{r.t}</span>
							<span className="truncate text-[8px] text-slate-500">
								{r.who}
							</span>
						</div>
						<p className="mt-0.5 text-[9px] font-semibold text-primary sm:text-[10px]">
							{r.a}
						</p>
					</div>
				))}
			</div>
			<p className="mt-3 text-[8px] text-slate-500 sm:text-[9px]">
				Staff roles for Owner, Credit, Finance, Collections, Auditor
			</p>
		</AdminChrome>
	);
}

/** Pro borrower app — sized for the hardware phone frame */
export function ProAppMock() {
	return (
		<div className="flex h-full flex-col text-left">
			<div className="flex items-center justify-between gap-1.5 lg:gap-3">
				<div className="min-w-0">
					<p className="text-[7px] text-slate-400 lg:text-[11px]">
						Good morning
					</p>
					<p className="truncate text-[10px] font-semibold text-slate-900 lg:text-[15px]">
						Ahmad Hisham
					</p>
				</div>
				<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 lg:h-9 lg:w-9">
					<Smartphone className="h-2.5 w-2.5 text-violet-700 lg:h-4 lg:w-4" />
				</div>
			</div>

			<div className="mt-2 rounded-lg bg-linear-to-br from-violet-600 to-indigo-600 p-2 text-white shadow-md shadow-violet-600/20 lg:mt-4 lg:rounded-2xl lg:p-4 lg:shadow-lg">
				<p className="text-[7px] opacity-80 lg:text-[11px]">
					Outstanding balance
				</p>
				<p className="mt-0.5 text-[13px] font-semibold leading-none tracking-tight lg:mt-1 lg:text-[26px]">
					RM 8,750
				</p>
				<p className="mt-1 text-[6.5px] opacity-80 lg:mt-2 lg:text-[11px]">
					Next due 15 Mar · RM 1,250
				</p>
				<div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/20 lg:mt-3 lg:h-1.5">
					<div className="h-full w-[62%] rounded-full bg-white" />
				</div>
			</div>

			<div className="mt-2 grid grid-cols-2 gap-1 lg:mt-4 lg:gap-2.5">
				{[
					{ label: "Pay now", sub: "DuitNow" },
					{ label: "Sign", sub: "Agreement" },
					{ label: "e-KYC", sub: "Verified" },
					{ label: "Schedule", sub: "12 months" },
				].map((a) => (
					<div
						key={a.label}
						className="rounded-md border border-slate-100 bg-slate-50 px-1.5 py-1.5 lg:rounded-2xl lg:px-3 lg:py-3"
					>
						<p className="truncate text-[8px] font-semibold text-slate-800 lg:text-[12px]">
							{a.label}
						</p>
						<p className="mt-0.5 truncate text-[6.5px] text-slate-500 lg:text-[10px]">
							{a.sub}
						</p>
					</div>
				))}
			</div>

			<div className="mt-auto pt-1.5 lg:pt-5">
				<div className="rounded-md border border-violet-100 bg-violet-50/80 px-1.5 py-1 text-center text-[6.5px] font-medium text-violet-800 lg:rounded-2xl lg:px-3 lg:py-2.5 lg:text-[11px]">
					Your brand · iOS &amp; Android
				</div>
			</div>
		</div>
	);
}
