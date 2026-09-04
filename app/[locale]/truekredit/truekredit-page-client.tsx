"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Check,
	ChevronRight,
	Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrueKreditHero } from "@/components/sections/truekredit-hero";
import { TrueKreditChannels } from "@/components/sections/truekredit-channels";
import { CrossLinkStrip } from "@/components/shared/cross-link-strip";
import { TrueKreditJourney } from "@/components/sections/truekredit-journey";
import { TrueKreditChecks } from "@/components/sections/truekredit-checks";
import { TrueKreditFaq } from "@/components/sections/truekredit-faq";
import { ConsultationCta } from "@/components/sections/consultation-cta";

const STORY_TODAY = [
	{
		title: "Borrower records everywhere",
		desc: "ICs, contacts, guarantors and documents scattered across Excel and paper files.",
	},
	{
		title: "Payments hard to reconcile",
		desc: "Schedules, slips and late fees updated by hand — errors surface at month-end.",
	},
	{
		title: "Audits become a scramble",
		desc: "KPKT asks for a trail; your team digs through folders instead of answering in minutes.",
	},
	{
		title: "No single view of the book",
		desc: "Outstanding, arrears and who owes what, pieced together from three places.",
	},
];

const STORY_AFTER = [
	{
		title: "The full loan book in one view",
		desc: "From first enquiry to final settlement, your team works from the same live file.",
	},
	{
		title: "Audit-ready every day",
		desc: "Who did what and when, plus KPKT schedules, Lampiran and exports on demand.",
	},
	{
		title: "Your data stays with you",
		desc: "Hosted on your own secure cloud in Malaysia, never mixed with other lenders.",
	},
	{
		title: "Grow without starting over",
		desc: "Start at the branch; unlock nationwide apps and signing with Pro on the same loan book.",
	},
];

const CORE_ROWS = [
	"Rich borrower profiles — work, family, commitments and documents",
	"Flexible loan products — interest methods, schedules and late fees",
	"Applications & approvals — counter intake, field visits, director packs",
	"Risk scoring — affordability checks before you approve",
	"Agreement & finance — payment vouchers, two-person approval before payout",
	"Schedules & repayments — instalments, slips, early settlement, arrears",
	"KPKT paperwork — Jadual J & K, Lampiran A/B/B1, receipts, default notices, exports",
	"Reports & staff roles — portfolio view, who did what, access by job role",
	"Your own secure cloud in Malaysia — data never mixed with other lenders",
];

const ADDON_ROWS = [
	"Collections workspace — team view, promises to pay, escalations, maturity alerts",
	"Loan flexibility — refinance, top-up and reschedule, tracked on the file",
	"Referral & lead generation — sales queue, agents, lead source and commission",
];

const INTEGRATION_ROWS = [
	{ label: "TrueIdentity™ e-KYC — MyKad scan, selfie and face match", status: "check" as const },
	{ label: "TrueSSM™ company lookups", status: "check" as const },
	{ label: "Payment gateway — FassPay and GKash", status: "check" as const },
	{ label: "CTOS credit pulls", status: "soon" as const },
	{ label: "TrueSight™ AI risk scoring", status: "soon" as const },
];

const PRO_ROWS = [
	"Branded customer website — apply day or night on your domain",
	"iPhone & Android customer apps",
	"Digital signing on your premises — MSC Trustgate",
	"Digital attestation — live at the counter or scheduled video",
	"Support for KPKT Online Money Lending Licence reviews",
];

const PRO_STEPS = [
	{
		step: "1",
		title: "Licence acquisition",
		desc: "The online licence path — applications, renewals and liaison with KPKT.",
	},
	{
		step: "2",
		title: "Compliance & consultancy",
		desc: "Regulatory advisory and audit readiness for digital lending.",
	},
	{
		step: "3",
		title: "Build on TrueKredit Pro",
		desc: "Customer website, mobile apps, signing and attestation on your secure cloud.",
	},
	{
		step: "4",
		title: "Test, security review & go-live",
		desc: "Ready for examiners, then nationwide lending live.",
		highlight: true,
	},
];

function CompareCell({
	status,
	pro,
}: {
	status: "check" | "soon" | "dash";
	pro?: boolean;
}) {
	return (
		<td
			className={`px-4 py-4 text-center ${pro ? "bg-violet-500/5" : ""}`}
		>
			{status === "check" ? (
				<Check
					className={`mx-auto h-5 w-5 ${pro ? "text-violet-700" : "text-primary"}`}
				/>
			) : status === "soon" ? (
				<span className="text-sm text-muted-foreground">Soon</span>
			) : (
				<span className="text-lg text-border">—</span>
			)}
		</td>
	);
}

export default function TrueKreditPage() {
	return (
		<>
			<TrueKreditHero />

			<CrossLinkStrip
				id="looking-to-get-licensed"
				ariaLabel="Looking to get licensed"
				lead="Looking to get licensed?"
				body="We run the KPKT digital licence path — then your book lives on TrueKredit Pro."
				href="/services/digital-license"
				cta="See the licence path"
				accent="kpkt"
			/>

			<section
				id="story"
				aria-labelledby="truekredit-story-heading"
				className="border-t bg-background py-16 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mb-9 max-w-[44em]"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="type-eyebrow mb-3 text-primary">
							The reality of lending
						</p>
						<h2 id="truekredit-story-heading" className="type-h2">
							Lending is messy.{" "}
							<span className="text-muted-foreground">
								Keeping it under control shouldn&apos;t be.
							</span>
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							Every borrower file, every instalment, every audit
							request piles up fast. When records live in
							spreadsheets, folders and inboxes, something always
							slips — usually in front of an examiner.
						</p>
					</motion.div>

					<motion.div
						className="grid gap-6 lg:grid-cols-2"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						<div className="rounded-xl border bg-card p-6 shadow-sm sm:p-7">
							<p className="type-eyebrow mb-2.5 text-muted-foreground">
								What most teams juggle
							</p>
							<h3 className="type-card-title text-muted-foreground">
								Too much to track. Too easy to miss.
							</h3>
							<ul className="mt-6 space-y-4.5">
								{STORY_TODAY.map((item) => (
									<li key={item.title}>
										<p className="font-semibold text-muted-foreground">
											{item.title}
										</p>
										<p className="mt-0.5 type-ui text-muted-foreground">
											{item.desc}
										</p>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-xl border border-primary/30 bg-primary/4 p-6 shadow-sm sm:p-7">
							<p className="type-eyebrow mb-2.5 text-primary">
								With TrueKredit
							</p>
							<h3 className="type-card-title">
								One system. One source of truth.
							</h3>
							<ul className="mt-6 space-y-4.5">
								{STORY_AFTER.map((item) => (
									<li key={item.title}>
										<p className="font-semibold">
											{item.title}
										</p>
										<p className="mt-0.5 type-ui text-muted-foreground">
											{item.desc}
										</p>
									</li>
								))}
							</ul>
							<Link
								href="#journey"
								className="mt-6 inline-flex items-center gap-1.5 type-ui font-medium text-primary hover:underline"
							>
								See how it works
								<ArrowRight className="h-3.5 w-3.5" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			<TrueKreditJourney />

			<TrueKreditChannels />

			<TrueKreditChecks />

			<section
				id="infrastructure"
				aria-labelledby="truekredit-trust-heading"
				className="border-t bg-background py-16 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<p className="type-eyebrow mb-3 text-primary">
								Your data stays yours
							</p>
							<h2
								id="truekredit-trust-heading"
								className="type-h2"
							>
								Your cloud. Kept in Malaysia. Never mixed.
							</h2>
							<p className="mt-4 type-lede text-muted-foreground">
								Standard and Pro both run on your own secure
								cloud account. Loan data stays in Malaysia and
								is never pooled with other lenders.
							</p>
							<ul className="mt-6 space-y-4.5">
								{[
									{
										title: "Data stays in Malaysia",
										desc: "Customer information is hosted in Malaysia and does not leave the country.",
									},
									{
										title: "Protected and backed up",
										desc: "Bank-grade protection with daily backups and a full record of every action.",
									},
									{
										title: "Upgrade without starting over",
										desc: "Moving to Pro keeps your borrowers, loans and history exactly where they are.",
									},
								].map((item) => (
									<li key={item.title}>
										<p className="font-semibold">
											{item.title}
										</p>
										<p className="mt-0.5 type-ui text-muted-foreground">
											{item.desc}
										</p>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							className="rounded-2xl border bg-muted/40 p-7"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className="mb-4.5 flex items-center justify-between gap-3">
								<span className="type-eyebrow text-muted-foreground">
									Your secure cloud
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 type-micro font-medium text-primary">
									<Check className="size-3" />
									Hosted in Malaysia
								</span>
							</div>
							<div className="mb-3.5 rounded-xl border border-primary/30 bg-card p-5 shadow-sm">
								<div className="mb-2.5 flex items-center gap-3">
									<div className="flex size-9.5 items-center justify-center rounded-lg bg-primary/10">
										<Lock className="size-4.5 text-primary" />
									</div>
									<div>
										<p className="font-semibold">
											Your lender
										</p>
										<p className="type-micro text-muted-foreground">
											Your data only · not shared
										</p>
									</div>
								</div>
								<div className="flex flex-wrap gap-1.5">
									<span className="rounded-full bg-primary/10 px-2.5 py-0.5 type-micro font-medium text-primary">
										Daily backups
									</span>
									<span className="rounded-full bg-primary/10 px-2.5 py-0.5 type-micro font-medium text-primary">
										Full action log
									</span>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-3">
								{["Other lenders", "Other lenders"].map(
									(label, i) => (
										<div
											key={`${label}-${i}`}
											className="rounded-[10px] border border-dashed bg-card/60 p-4"
										>
											<p className="type-ui font-semibold text-muted-foreground/70">
												{label}
											</p>
											<p className="type-micro text-border">
												Separate accounts
											</p>
										</div>
									),
								)}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section
				id="compare"
				aria-labelledby="truekredit-compare-heading"
				className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mb-8 max-w-[44em]"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="type-eyebrow mb-3 text-primary">
							Feature comparison
						</p>
						<h2 id="truekredit-compare-heading" className="type-h2">
							Standard vs Pro
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							Same core system for your branch team. Pro unlocks
							nationwide customer channels, digital signing and
							attestation — without moving your loan book.
						</p>
					</motion.div>

					<motion.div
						className="overflow-hidden rounded-2xl border bg-card shadow-sm"
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div className="overflow-x-auto">
							<table className="w-full min-w-160 text-left text-sm">
								<thead className="bg-slate-950 text-white">
									<tr>
										<th className="px-6 py-5 font-semibold">
											Capability
										</th>
										<th className="w-37.5 border-l border-slate-800 px-4 py-5 text-center">
											<div className="font-semibold">
												Standard
											</div>
											<div className="text-xs font-normal text-slate-400">
												Branch &amp; counter
											</div>
										</th>
										<th className="w-37.5 border-l border-slate-800 bg-violet-500/20 px-4 py-5 text-center">
											<div className="font-semibold">
												Pro
											</div>
											<div className="text-xs font-normal text-violet-200">
												Nationwide
											</div>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-muted/50">
										<td
											colSpan={3}
											className="px-6 py-3.5 type-micro font-semibold uppercase tracking-wider text-muted-foreground"
										>
											Core admin platform
										</td>
									</tr>
									{CORE_ROWS.map((row) => (
										<tr
											key={row}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{row}
											</td>
											<CompareCell status="check" />
											<CompareCell status="check" pro />
										</tr>
									))}
									<tr className="bg-muted/50">
										<td
											colSpan={3}
											className="px-6 py-3.5 type-micro font-semibold uppercase tracking-wider text-muted-foreground"
										>
											Optional add-ons
										</td>
									</tr>
									{ADDON_ROWS.map((row) => (
										<tr
											key={row}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{row}
											</td>
											<CompareCell status="check" />
											<CompareCell status="check" pro />
										</tr>
									))}
									<tr className="bg-muted/50">
										<td colSpan={3} className="px-6 py-3.5">
											<p className="type-micro font-semibold uppercase tracking-wider text-muted-foreground">
												Free integrations
											</p>
											<p className="mt-1 type-ui text-muted-foreground">
												Identity, company and credit
												checks are already wired into
												TrueKredit. No fee to connect
												them — you pay only for each
												check you run.
											</p>
										</td>
									</tr>
									{INTEGRATION_ROWS.map((row) => (
										<tr
											key={row.label}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{row.label}
											</td>
											<CompareCell status={row.status} />
											<CompareCell
												status={row.status}
												pro
											/>
										</tr>
									))}
									<tr className="bg-primary/5">
										<td
											colSpan={3}
											className="px-6 py-3.5 type-micro font-semibold uppercase tracking-wider text-violet-700"
										>
											Pro unlocks
										</td>
									</tr>
									{PRO_ROWS.map((row) => (
										<tr
											key={row}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{row}
											</td>
											<CompareCell status="dash" />
											<CompareCell status="check" pro />
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>
					<p className="mt-5 type-ui text-muted-foreground">
						Going digital with Pro? We also run the{" "}
						<Link
							href="/services/digital-license"
							className="font-medium text-violet-700 hover:underline"
						>
							KPKT digital licence
						</Link>{" "}
						end-to-end. Shariah-compliant lending is{" "}
						<Link
							href="/truesyariah"
							className="font-medium text-emerald-700 hover:underline"
						>
							TrueSyariah™
						</Link>
						; SC-regulated P2P is{" "}
						<Link
							href="/services/p2p-software-development"
							className="font-medium text-primary hover:underline"
						>
							TrueP2P™
						</Link>
						.
					</p>
				</div>
			</section>

			<section
				id="zero-to-license"
				aria-labelledby="truekredit-pro-heading"
				className="border-t bg-background py-16 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<p className="type-eyebrow mb-3 text-primary">
								TrueKredit Pro
							</p>
							<h2 id="truekredit-pro-heading" className="type-h2">
								From licence to live lending.
							</h2>
							<p className="mt-4 type-lede text-muted-foreground">
								Going for a KPKT Online Money Lending Licence?
								We handle the licensing path, the Pro setup,
								testing and go-live, so you lend nationwide on
								the same platform your team already knows.
							</p>
							<ol className="mt-6 space-y-3.5">
								{PRO_STEPS.map((s) => (
									<li
										key={s.step}
										className="flex items-start gap-3.5"
									>
										<span
											className={`flex size-7.5 shrink-0 items-center justify-center rounded-full type-mono-label font-medium ${
												s.highlight
													? "bg-linear-to-r from-indigo-600 to-violet-600 text-white"
													: "bg-primary/10 text-primary"
											}`}
										>
											{s.step}
										</span>
										<div>
											<p className="font-semibold">
												{s.title}
											</p>
											<p className="type-ui text-muted-foreground">
												{s.desc}
											</p>
										</div>
									</li>
								))}
							</ol>
							<div className="mt-7 flex flex-wrap gap-3">
								<Button asChild size="lg" className="gap-2">
									<Link href="/contact?subject=TrueKredit%20Pro">
										Talk to us about Pro
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg">
									<Link href="/services/digital-license">
										Need the digital licence too?
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
						<div className="relative aspect-4/3 overflow-hidden rounded-2xl border shadow-sm">
							<Image
								src="/photos/truekredit-licence-go-live.jpg"
								alt="Two professionals in a Kuala Lumpur office reviewing KPKT licensing documents"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
							<div
								className="absolute inset-0 bg-primary/10 mix-blend-multiply"
								aria-hidden
							/>
						</div>
					</motion.div>
				</div>
			</section>

			<TrueKreditFaq />

			<ConsultationCta
				accent="brand"
				heading="Ready to run your lending book with confidence?"
				body="Book a free consultation to see how TrueKredit fits your branch today — or Pro when you are ready to lend nationwide. Your loan data stays with you either way."
				primary={{
					href: "/contact?subject=TrueKredit",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: "#compare",
					label: "Compare Standard vs Pro",
				}}
			/>
		</>
	);
}
