"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Check, Clock } from "lucide-react";
import { CtaLink } from "@/components/shared/cta-link";
import { cn } from "@/lib/utils";

type PathId = "licensed" | "applying";

const LICENSED_KEYS = ["review", "application", "build", "golive"] as const;
const APPLYING_KEYS = [
	"structure",
	"submission",
	"readiness",
	"disbursements",
] as const;

function StepCard({
	title,
	body,
	index,
	stepLabel,
}: {
	title: string;
	body: string;
	index: number;
	stepLabel: string;
}) {
	return (
		<motion.div
			className="rounded-2xl border bg-card p-5.5 shadow-sm"
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index * 0.08 }}
		>
			<div className="mb-2.5 type-mono-label font-medium text-primary">
				{stepLabel} {String(index + 1).padStart(2, "0")}
			</div>
			<h3 className="type-subhead">{title}</h3>
			<p className="mt-2 type-ui leading-relaxed text-muted-foreground">
				{body}
			</p>
		</motion.div>
	);
}

function StepGrid({ path }: { path: PathId }) {
	const t = useTranslations("Home");
	const stepLabel = t("solutions.step");

	if (path === "licensed") {
		return (
			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{LICENSED_KEYS.map((key, index) => (
					<StepCard
						key={key}
						index={index}
						stepLabel={stepLabel}
						title={t(`solutions.licensed.${key}.title`)}
						body={t(`solutions.licensed.${key}.body`)}
					/>
				))}
			</div>
		);
	}

	return (
		<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{APPLYING_KEYS.map((key, index) => (
				<StepCard
					key={key}
					index={index}
					stepLabel={stepLabel}
					title={t(`solutions.applying.${key}.title`)}
					body={t(`solutions.applying.${key}.body`)}
				/>
			))}
		</div>
	);
}

export function HomepageSolutions() {
	const t = useTranslations("Home");
	const [path, setPath] = useState<PathId>("licensed");

	return (
		<section
			id="solutions"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-8 max-w-3xl"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-primary">
						{t("solutions.eyebrow")}
					</p>
					<h2 className="type-h2">
						{t("solutions.title")}
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						{t.rich("solutions.lede", {
							truesyariah: (chunks) => (
								<CtaLink
									href="/truesyariah"
									className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
								>
									{chunks}
								</CtaLink>
							),
						})}
					</p>
				</motion.div>

				<div
					role="tablist"
					aria-label={t("solutions.tablistLabel")}
					className="mb-7 inline-flex rounded-full border bg-background p-1 shadow-sm"
				>
					{(
						[
							{ id: "licensed" },
							{ id: "applying" },
						] as const
					).map((tab) => {
						const isActive = path === tab.id;
						return (
							<button
								key={tab.id}
								type="button"
								role="tab"
								id={`path-${tab.id}-tab`}
								aria-selected={isActive}
								aria-controls={`path-${tab.id}-panel`}
								tabIndex={isActive ? 0 : -1}
								onClick={() => setPath(tab.id)}
								className={cn(
									"rounded-full px-4 py-2 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
									isActive
										? "bg-foreground text-background"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{t(`solutions.tabs.${tab.id}`)}
							</button>
						);
					})}
				</div>

				<div
					role="tabpanel"
					id="path-licensed-panel"
					aria-labelledby="path-licensed-tab"
					hidden={path !== "licensed"}
				>
					<StepGrid path="licensed" />
					<div className="mt-5 flex flex-wrap items-center gap-4">
						<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-700">
							<Clock className="h-3.5 w-3.5" aria-hidden />
							{t("solutions.licensedNote")}
						</div>
						<CtaLink
							href="/contact?subject=Digital%20Licence"
							className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
						>
							{t("solutions.licensedCta")}
							<ArrowRight className="h-3.5 w-3.5" />
						</CtaLink>
					</div>
				</div>

				<div
					role="tabpanel"
					id="path-applying-panel"
					aria-labelledby="path-applying-tab"
					hidden={path !== "applying"}
				>
					<StepGrid path="applying" />
					<div className="mt-5 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5">
						<div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-lg bg-primary/10">
							<Building2
								className="h-5 w-5 text-primary"
								aria-hidden
							/>
						</div>
						<div>
							<h3 className="type-subhead">
								{t("solutions.acquire.title")}
							</h3>
							<p className="mt-1.5 max-w-3xl text-base text-muted-foreground">
								{t("solutions.acquire.body")}
							</p>
						</div>
					</div>
					<div className="mt-5 flex flex-wrap items-center gap-4">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">
							<Check className="h-3.5 w-3.5" aria-hidden />
							{t("solutions.applyingNote")}
						</div>
						<CtaLink
							href="/contact?subject=KPKT%20Licence"
							className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
						>
							{t("solutions.applyingCta")}
							<ArrowRight className="h-3.5 w-3.5" />
						</CtaLink>
					</div>
				</div>
			</div>
		</section>
	);
}
