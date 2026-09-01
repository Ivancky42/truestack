"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 2000;

type JourneyStep = {
	id: string;
	num: string;
	label: string;
	phase: string;
	title: string;
	desc: string;
	chips: string[];
	image: { src: string; alt: string; width: number; height: number };
};

const STEPS: JourneyStep[] = [
	{
		id: "pipeline",
		num: "01",
		label: "Pipeline",
		phase: "01 · Pipeline",
		title: "Know where every lead stands.",
		desc: "Leads, converted, applied, approved, disbursed — one team book with the rate between each step. Assign loan officers, then turn a lead into a borrower without leaving the system.",
		chips: ["Pipeline metrics", "Team assignment", "Lead to disbursed"],
		image: {
			src: "/truekredit/leads_screenshot.png",
			alt: "TrueKredit leads pipeline — conversion funnel and sales performance over time",
			width: 2752,
			height: 2136,
		},
	},
	{
		id: "profile",
		num: "02",
		label: "Profile",
		phase: "02 · Profile",
		title: "Know the borrower",
		desc: "Work, family, monthly commitments, guarantors and documents in one complete file your whole team shares — so nobody re-asks the borrower what you already know.",
		chips: ["Employment & commitments", "Guarantors", "Document vault"],
		image: {
			src: "/truekredit/borrower_details_screenshot.png",
			alt: "TrueKredit corporate borrower profile with payment performance, company information and TrueSSM",
			width: 2752,
			height: 2168,
		},
	},
	{
		id: "approve",
		num: "03",
		label: "Approve",
		phase: "03 · Approve",
		title: "Approve with the numbers in front of you.",
		desc: "Affordability score, DSR and the full loan summary on one screen — amount, term, fees, monthly payment. The credit team and the director look at the same file.",
		chips: ["Affordability score", "Loan summary", "Monthly payment"],
		image: {
			src: "/truekredit/loan_approve_screenshot.png",
			alt: "TrueKredit loan approval with affordability risk score and loan summary",
			width: 1832,
			height: 1764,
		},
	},
	{
		id: "control",
		num: "04",
		label: "Control",
		phase: "04 · Control",
		title: "The right people see the right screens.",
		desc: "Owner, Credit, Finance, Collections — each role only gets what their job needs. Add a custom role when the defaults don't fit, without opening the whole book to everyone.",
		chips: ["Role-based access", "Custom roles", "Permission by job"],
		image: {
			src: "/truekredit/rba_screenshot.png",
			alt: "TrueKredit role-based access — create a custom role with permissions by job",
			width: 2126,
			height: 1566,
		},
	},
	{
		id: "documents",
		num: "05",
		label: "Documents",
		phase: "05 · Documents",
		title: "Agreements, receipts and letters, automatically",
		desc: "Repayment schedules, payment receipts, collection notices and default letters generated from the loan file and emailed when they matter — including the KPKT forms your examiner expects.",
		chips: ["Lampiran A, B, B1", "Jadual J & K", "Receipts & default notices"],
		image: {
			src: "/truekredit/lampiran_a_screenshot.png",
			alt: "Lampiran A generated from a TrueKredit loan file",
			width: 1716,
			height: 2384,
		},
	},
	{
		id: "service",
		num: "06",
		label: "Service",
		phase: "06 · Service",
		title: "Every instalment in view",
		desc: "Build the schedule the way you already price a loan — flat rate, reducing balance, balloon payments and the rest. Payment slips, early settlement quotes and finance checks sit on the same live book, so a borrower question takes seconds.",
		chips: ["Flat rate", "Reducing balance", "Balloon payments"],
		image: {
			src: "/truekredit/repayment_schedule_screenshot.png",
			alt: "TrueKredit repayment schedule with instalments and balances",
			width: 1806,
			height: 1288,
		},
	},
	{
		id: "collect",
		num: "07",
		label: "Collect",
		phase: "07 · Collect",
		title: "Collections under control",
		desc: "A team view of arrears, promises to pay, escalation stages and maturity alerts — from first missed instalment through default, with every contact attempt recorded.",
		chips: ["Promises to pay", "Escalation stages", "Maturity alerts"],
		image: {
			src: "/truekredit/collections_screenshot.png",
			alt: "TrueKredit collections workspace with team book, outstanding, overdue and ageing",
			width: 2762,
			height: 2074,
		},
	},
	{
		id: "adapt",
		num: "08",
		label: "Adapt",
		phase: "08 · Adapt",
		title: "Refinance, top-up or reschedule",
		desc: "When a borrower needs room to adjust, each path is approved and tracked in the same system, on the same loan file — so the history of what changed and why stays intact.",
		chips: ["Refinance", "Top-up", "Reschedule"],
		image: {
			src: "/truekredit/early_settlement_screenshot.png",
			alt: "TrueKredit early settlement and loan restructuring view",
			width: 2126,
			height: 1566,
		},
	},
	{
		id: "govern",
		num: "09",
		label: "Govern",
		phase: "09 · Govern",
		title: "Audit-ready, every day",
		desc: "Every assignment, payment and export sits on a timeline — who did it, when, and in what mode. Maker-checker stays on the file. Hand the CSV to an examiner without a folder hunt.",
		chips: ["Activity timeline", "Maker-checker", "CSV export"],
		image: {
			src: "/truekredit/activity_timeline_screenshot.png",
			alt: "TrueKredit activity timeline — who did what, when, with maker-checker on the loan file",
			width: 1820,
			height: 1532,
		},
	},
	{
		id: "configure",
		num: "10",
		label: "Configure",
		phase: "10 · Configure",
		title: "Fit the system to how you lend.",
		desc: "You shouldn't have to change how you lend to fit a piece of software. We configure TrueKredit around the process your team already knows — so the system follows your workflow, not the other way around.",
		chips: ["Your workflow", "How you already work", "Set up for you"],
		image: {
			src: "/truekredit/configure_screenshot.png",
			alt: "TrueKredit platform configuration — loan workflow options turned on or off to match how the office operates",
			width: 2762,
			height: 1750,
		},
	},
];

export function TrueKreditJourney() {
	const [active, setActive] = useState(0);
	const [playing, setPlaying] = useState(false);
	const tablistRef = useRef<HTMLDivElement>(null);
	const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
	const step = STEPS[active];

	useEffect(() => {
		if (!playing) return;
		const id = window.setInterval(() => {
			setActive((index) => (index + 1) % STEPS.length);
		}, AUTOPLAY_MS);
		return () => window.clearInterval(id);
	}, [playing]);

	useEffect(() => {
		const onVisibility = () => {
			if (document.visibilityState === "hidden") setPlaying(false);
		};
		document.addEventListener("visibilitychange", onVisibility);
		return () =>
			document.removeEventListener("visibilitychange", onVisibility);
	}, []);

	useEffect(() => {
		const list = tablistRef.current;
		const tab = tabRefs.current[active];
		if (!list || !tab) return;
		if (list.scrollWidth <= list.clientWidth + 2) return;
		const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
		list.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
	}, [active]);

	const selectStep = (index: number) => {
		setPlaying(false);
		setActive(index);
	};

	return (
		<section
			id="journey"
			aria-labelledby="truekredit-journey-heading"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<motion.div
						className="max-w-[44em]"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="type-eyebrow mb-3 text-primary">End to end</p>
						<h2
							id="truekredit-journey-heading"
							className="type-h2"
						>
							One system from first enquiry to final settlement.
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							Step through to see the screens your team would use —
							the whole book, one loan file.
						</p>
					</motion.div>
					<Button
						type="button"
						variant="outline"
						size="sm"
						className="shrink-0 self-start sm:self-end"
						aria-pressed={playing}
						aria-label={
							playing ? "Pause journey" : "Play journey"
						}
						onClick={() => setPlaying((on) => !on)}
					>
						{playing ? (
							<Pause className="size-3.5" />
						) : (
							<Play className="size-3.5" />
						)}
						{playing ? "Pause" : "Play"}
					</Button>
				</div>

				<div className="grid items-start gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:gap-8">
					<div
						ref={tablistRef}
						role="tablist"
						aria-label="TrueKredit loan journey"
						className="-mx-6 flex gap-1 overflow-x-auto px-6 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
					>
						{STEPS.map((item, index) => {
							const on = index === active;
							return (
								<button
									key={item.id}
									ref={(el) => {
										tabRefs.current[index] = el;
									}}
									type="button"
									role="tab"
									id={`journey-tab-${item.id}`}
									aria-selected={on}
									aria-controls={`journey-panel-${item.id}`}
									onClick={() => selectStep(index)}
									className={cn(
										"flex shrink-0 items-center gap-3.5 rounded-[10px] border px-4 py-3.5 text-left type-ui font-medium transition-colors",
										on
											? "border-primary/30 bg-card text-foreground shadow-sm"
											: "border-transparent text-muted-foreground hover:bg-card/70",
									)}
								>
									<span
										className={cn(
											"type-mono-label font-medium",
											on
												? "text-primary"
												: "text-muted-foreground/70",
										)}
									>
										{item.num}
									</span>
									<span>{item.label}</span>
								</button>
							);
						})}
					</div>

					<div className="min-h-128 rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
						<AnimatePresence mode="wait">
							<motion.div
								key={step.id}
								id={`journey-panel-${step.id}`}
								role="tabpanel"
								aria-labelledby={`journey-tab-${step.id}`}
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -6 }}
								transition={{ duration: 0.25 }}
							>
								<p className="type-mono-label font-medium text-primary">
									{step.phase}
								</p>
								<h3 className="type-card-title mt-2 text-[1.5rem]">
									{step.title}
								</h3>
								<p className="mt-2.5 max-w-[44em] type-lede text-muted-foreground">
									{step.desc}
								</p>
								<div className="mt-5 mb-6 flex flex-wrap gap-2">
									{step.chips.map((chip) => (
										<span
											key={chip}
											className="rounded-full bg-primary/10 px-2.5 py-1 type-ui font-medium text-primary"
										>
											{chip}
										</span>
									))}
								</div>
								<Image
									src={step.image.src}
									alt={step.image.alt}
									width={step.image.width}
									height={step.image.height}
									quality={100}
									unoptimized
									sizes="(max-width: 1024px) calc(100vw - 3rem), 720px"
									className="h-auto w-full rounded-[10px] border"
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
