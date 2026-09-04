"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Check, Clock } from "lucide-react";
import { CtaLink } from "@/components/shared/cta-link";
import { cn } from "@/lib/utils";

type PathId = "licensed" | "applying";

const LICENSED_STEPS = [
	{
		title: "Licence review",
		body: "We audit your current lesen PPW, permits and outstanding filings, then map exactly what a digital conversion requires of you.",
	},
	{
		title: "Digital licence application",
		body: "We prepare the application and the provisional licence presentation, and coordinate with KPKT through to approval.",
	},
	{
		title: "Platform build",
		body: "Your loan book moves onto TrueKredit™ Pro, with web and mobile borrower journeys under your own brand.",
	},
	{
		title: "Go-live and aftercare",
		body: "Compliance verification, staff training, then ongoing account management so nothing slips through.",
	},
] as const;

const APPLYING_STEPS = [
	{
		title: "Structure and eligibility",
		body: "Company, directors, paid-up capital and premises checked against KPKT requirements before anything is filed.",
	},
	{
		title: "Application and submission",
		body: "Lampiran A, supporting documents and SSM particulars prepared and submitted on your behalf.",
	},
	{
		title: "System readiness",
		body: "TrueKredit™ configured with the Jadual J and K documents, agreements and receipts KPKT expects to see.",
	},
	{
		title: "First disbursements",
		body: "e-KYC, company checks and payment rails switched on, so you can lend from the day your licence lands.",
	},
] as const;

function StepGrid({
	steps,
}: {
	steps: readonly { title: string; body: string }[];
}) {
	return (
		<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{steps.map((step, index) => (
				<motion.div
					key={step.title}
					className="rounded-2xl border bg-card p-5.5 shadow-sm"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: index * 0.08 }}
				>
					<div className="mb-2.5 type-mono-label font-medium text-primary">
						STEP {String(index + 1).padStart(2, "0")}
					</div>
					<h3 className="type-subhead">
						{step.title}
					</h3>
					<p className="mt-2 type-ui leading-relaxed text-muted-foreground">
						{step.body}
					</p>
				</motion.div>
			))}
		</div>
	);
}

export function HomepageSolutions() {
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
						Find your starting point
					</p>
					<h2 className="type-h2">
						Two ways in. Same destination.
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						Whether you hold a conventional KPKT licence today or
						you are still preparing to file, the route to nationwide
						digital lending is a known sequence. Shariah digital
						lending is a separate upcoming path — we run that too,
						on{" "}
						<CtaLink
							href="/truesyariah"
							className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
						>
							TrueSyariah™
						</CtaLink>
						.
					</p>
				</motion.div>

				<div
					role="tablist"
					aria-label="Your starting point"
					className="mb-7 inline-flex rounded-full border bg-background p-1 shadow-sm"
				>
					{(
						[
							{ id: "licensed", label: "I hold a KPKT licence" },
							{ id: "applying", label: "I am applying for one" },
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
								{tab.label}
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
					<StepGrid steps={LICENSED_STEPS} />
					<div className="mt-5 flex flex-wrap items-center gap-4">
						<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-700">
							<Clock className="h-3.5 w-3.5" aria-hidden />
							Typically about three months from kick-off to
							go-live
						</div>
						<CtaLink
							href="/contact?subject=Digital%20Licence"
							className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
						>
							Talk through your conversion
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
					<StepGrid steps={APPLYING_STEPS} />
					<div className="mt-5 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5">
						<div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-lg bg-primary/10">
							<Building2
								className="h-5 w-5 text-primary"
								aria-hidden
							/>
						</div>
						<div>
							<h3 className="type-subhead">
								Not starting from scratch: acquire a licensed
								company
							</h3>
							<p className="mt-1.5 max-w-3xl text-base text-muted-foreground">
								A new application is not the only route. We can
								also help you procure an existing company that
								already holds a KPKT money-lending licence, then
								handle the director, shareholder and CoSec
								changes and move the book onto TrueKredit™ —
								often the faster way to start lending.
							</p>
						</div>
					</div>
					<div className="mt-5 flex flex-wrap items-center gap-4">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">
							<Check className="h-3.5 w-3.5" aria-hidden />
							We stay on as your account management partner after
							approval
						</div>
						<CtaLink
							href="/contact?subject=KPKT%20Licence"
							className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
						>
							Check if you qualify
							<ArrowRight className="h-3.5 w-3.5" />
						</CtaLink>
					</div>
				</div>
			</div>
		</section>
	);
}
