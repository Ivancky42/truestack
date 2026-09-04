"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
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

const STORY_TODAY = ["records", "payments", "audits", "view"] as const;
const STORY_AFTER = ["book", "audit", "data", "grow"] as const;
const INFRA_ITEMS = ["malaysia", "protected", "upgrade"] as const;

const INTEGRATION_ROWS = [
	{ key: "trueidentity", status: "check" as const },
	{ key: "truessm", status: "check" as const },
	{ key: "payments", status: "check" as const },
	{ key: "ctos", status: "soon" as const },
	{ key: "truesight", status: "soon" as const },
];

const PRO_STEPS = [
	{ key: "licence", step: "1" },
	{ key: "compliance", step: "2" },
	{ key: "build", step: "3" },
	{ key: "golive", step: "4", highlight: true },
] as const;

function CompareCell({
	status,
	pro,
	soonLabel,
}: {
	status: "check" | "soon" | "dash";
	pro?: boolean;
	soonLabel: string;
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
				<span className="text-sm text-muted-foreground">{soonLabel}</span>
			) : (
				<span className="text-lg text-border">—</span>
			)}
		</td>
	);
}

export default function TrueKreditPage() {
	const t = useTranslations("TrueKredit");
	const tCommon = useTranslations("Common");
	const coreRows = t.raw("compare.coreRows") as string[];
	const addonRows = t.raw("compare.addonRows") as string[];
	const proRows = t.raw("compare.proRows") as string[];
	const soonLabel = t("compare.soon");

	return (
		<>
			<TrueKreditHero />

			<CrossLinkStrip
				id="looking-to-get-licensed"
				ariaLabel={t("licensed.ariaLabel")}
				lead={t("licensed.lead")}
				body={t("licensed.body")}
				href="/services/digital-license"
				cta={t("licensed.cta")}
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
							{t("story.eyebrow")}
						</p>
						<h2 id="truekredit-story-heading" className="type-h2">
							{t.rich("story.title", {
								muted: (c) => (
									<span className="text-muted-foreground">
										{c}
									</span>
								),
							})}
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							{t("story.lede")}
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
								{t("story.today.eyebrow")}
							</p>
							<h3 className="type-card-title text-muted-foreground">
								{t("story.today.heading")}
							</h3>
							<ul className="mt-6 space-y-4.5">
								{STORY_TODAY.map((key) => (
									<li key={key}>
										<p className="font-semibold text-muted-foreground">
											{t(`story.today.items.${key}.title`)}
										</p>
										<p className="mt-0.5 type-ui text-muted-foreground">
											{t(`story.today.items.${key}.desc`)}
										</p>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-xl border border-primary/30 bg-primary/4 p-6 shadow-sm sm:p-7">
							<p className="type-eyebrow mb-2.5 text-primary">
								{t("story.after.eyebrow")}
							</p>
							<h3 className="type-card-title">
								{t("story.after.heading")}
							</h3>
							<ul className="mt-6 space-y-4.5">
								{STORY_AFTER.map((key) => (
									<li key={key}>
										<p className="font-semibold">
											{t(`story.after.items.${key}.title`)}
										</p>
										<p className="mt-0.5 type-ui text-muted-foreground">
											{t(`story.after.items.${key}.desc`)}
										</p>
									</li>
								))}
							</ul>
							<Link
								href="#journey"
								className="mt-6 inline-flex items-center gap-1.5 type-ui font-medium text-primary hover:underline"
							>
								{t("story.after.cta")}
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
								{t("infrastructure.eyebrow")}
							</p>
							<h2
								id="truekredit-trust-heading"
								className="type-h2"
							>
								{t("infrastructure.title")}
							</h2>
							<p className="mt-4 type-lede text-muted-foreground">
								{t("infrastructure.lede")}
							</p>
							<ul className="mt-6 space-y-4.5">
								{INFRA_ITEMS.map((key) => (
									<li key={key}>
										<p className="font-semibold">
											{t(`infrastructure.items.${key}.title`)}
										</p>
										<p className="mt-0.5 type-ui text-muted-foreground">
											{t(`infrastructure.items.${key}.desc`)}
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
									{t("infrastructure.cardEyebrow")}
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 type-micro font-medium text-primary">
									<Check className="size-3" />
									{t("infrastructure.hosted")}
								</span>
							</div>
							<div className="mb-3.5 rounded-xl border border-primary/30 bg-card p-5 shadow-sm">
								<div className="mb-2.5 flex items-center gap-3">
									<div className="flex size-9.5 items-center justify-center rounded-lg bg-primary/10">
										<Lock className="size-4.5 text-primary" />
									</div>
									<div>
										<p className="font-semibold">
											{t("infrastructure.lender")}
										</p>
										<p className="type-micro text-muted-foreground">
											{t("infrastructure.dataOnly")}
										</p>
									</div>
								</div>
								<div className="flex flex-wrap gap-1.5">
									<span className="rounded-full bg-primary/10 px-2.5 py-0.5 type-micro font-medium text-primary">
										{t("infrastructure.backups")}
									</span>
									<span className="rounded-full bg-primary/10 px-2.5 py-0.5 type-micro font-medium text-primary">
										{t("infrastructure.actionLog")}
									</span>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-3">
								{["Other lenders", "Other lenders"].map(
									(_label, i) => (
										<div
											key={`other-${i}`}
											className="rounded-[10px] border border-dashed bg-card/60 p-4"
										>
											<p className="type-ui font-semibold text-muted-foreground/70">
												{t("infrastructure.otherLenders")}
											</p>
											<p className="type-micro text-border">
												{t("infrastructure.separateAccounts")}
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
							{t("compare.eyebrow")}
						</p>
						<h2 id="truekredit-compare-heading" className="type-h2">
							{t("compare.title")}
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							{t("compare.lede")}
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
											{t("compare.capability")}
										</th>
										<th className="w-37.5 border-l border-slate-800 px-4 py-5 text-center">
											<div className="font-semibold">
												{t("compare.standard")}
											</div>
											<div className="text-xs font-normal text-slate-400">
												{t("compare.standardSub")}
											</div>
										</th>
										<th className="w-37.5 border-l border-slate-800 bg-violet-500/20 px-4 py-5 text-center">
											<div className="font-semibold">
												{t("compare.pro")}
											</div>
											<div className="text-xs font-normal text-violet-200">
												{t("compare.proSub")}
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
											{t("compare.coreHeading")}
										</td>
									</tr>
									{coreRows.map((row) => (
										<tr
											key={row}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{row}
											</td>
											<CompareCell
												status="check"
												soonLabel={soonLabel}
											/>
											<CompareCell
												status="check"
												pro
												soonLabel={soonLabel}
											/>
										</tr>
									))}
									<tr className="bg-muted/50">
										<td
											colSpan={3}
											className="px-6 py-3.5 type-micro font-semibold uppercase tracking-wider text-muted-foreground"
										>
											{t("compare.addonHeading")}
										</td>
									</tr>
									{addonRows.map((row) => (
										<tr
											key={row}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{row}
											</td>
											<CompareCell
												status="check"
												soonLabel={soonLabel}
											/>
											<CompareCell
												status="check"
												pro
												soonLabel={soonLabel}
											/>
										</tr>
									))}
									<tr className="bg-muted/50">
										<td colSpan={3} className="px-6 py-3.5">
											<p className="type-micro font-semibold uppercase tracking-wider text-muted-foreground">
												{t("compare.integrationsHeading")}
											</p>
											<p className="mt-1 type-ui text-muted-foreground">
												{t("compare.integrationsLede")}
											</p>
										</td>
									</tr>
									{INTEGRATION_ROWS.map((row) => (
										<tr
											key={row.key}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{t(`compare.integrations.${row.key}`)}
											</td>
											<CompareCell
												status={row.status}
												soonLabel={soonLabel}
											/>
											<CompareCell
												status={row.status}
												pro
												soonLabel={soonLabel}
											/>
										</tr>
									))}
									<tr className="bg-primary/5">
										<td
											colSpan={3}
											className="px-6 py-3.5 type-micro font-semibold uppercase tracking-wider text-violet-700"
										>
											{t("compare.proHeading")}
										</td>
									</tr>
									{proRows.map((row) => (
										<tr
											key={row}
											className="border-t border-muted"
										>
											<td className="px-6 py-4 text-muted-foreground">
												{row}
											</td>
											<CompareCell
												status="dash"
												soonLabel={soonLabel}
											/>
											<CompareCell
												status="check"
												pro
												soonLabel={soonLabel}
											/>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>
					<p className="mt-5 type-ui text-muted-foreground">
						{t.rich("compare.footnote", {
							license: (c) => (
								<Link
									href="/services/digital-license"
									className="font-medium text-violet-700 hover:underline"
								>
									{c}
								</Link>
							),
							syariah: (c) => (
								<Link
									href="/truesyariah"
									className="font-medium text-emerald-700 hover:underline"
								>
									{c}
								</Link>
							),
							p2p: (c) => (
								<Link
									href="/services/p2p-software-development"
									className="font-medium text-primary hover:underline"
								>
									{c}
								</Link>
							),
						})}
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
								{t("pro.eyebrow")}
							</p>
							<h2 id="truekredit-pro-heading" className="type-h2">
								{t("pro.title")}
							</h2>
							<p className="mt-4 type-lede text-muted-foreground">
								{t("pro.lede")}
							</p>
							<ol className="mt-6 space-y-3.5">
								{PRO_STEPS.map((s) => (
									<li
										key={s.step}
										className="flex items-start gap-3.5"
									>
										<span
											className={`flex size-7.5 shrink-0 items-center justify-center rounded-full type-mono-label font-medium ${
												"highlight" in s && s.highlight
													? "bg-linear-to-r from-indigo-600 to-violet-600 text-white"
													: "bg-primary/10 text-primary"
											}`}
										>
											{s.step}
										</span>
										<div>
											<p className="font-semibold">
												{t(`pro.steps.${s.key}.title`)}
											</p>
											<p className="type-ui text-muted-foreground">
												{t(`pro.steps.${s.key}.desc`)}
											</p>
										</div>
									</li>
								))}
							</ol>
							<div className="mt-7 flex flex-wrap gap-3">
								<Button asChild size="lg" className="gap-2">
									<Link href="/contact?subject=TrueKredit%20Pro">
										{t("pro.ctaPrimary")}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg">
									<Link href="/services/digital-license">
										{t("pro.ctaSecondary")}
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
						<div className="relative aspect-4/3 overflow-hidden rounded-2xl border shadow-sm">
							<Image
								src="/photos/truekredit-licence-go-live.jpg"
								alt={t("pro.photoAlt")}
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
				heading={t("cta.heading")}
				body={t("cta.body")}
				primary={{
					href: "/contact?subject=TrueKredit",
					label: tCommon("bookConsultation"),
				}}
				secondary={{
					href: "#compare",
					label: t("cta.secondary"),
				}}
			/>
		</>
	);
}
