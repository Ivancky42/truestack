"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 2000;

type JourneyStepId =
	| "pipeline"
	| "profile"
	| "approve"
	| "control"
	| "documents"
	| "service"
	| "collect"
	| "adapt"
	| "govern"
	| "configure";

type JourneyStep = {
	id: JourneyStepId;
	num: string;
	image: { src: string; width: number; height: number };
};

const STEPS: JourneyStep[] = [
	{
		id: "pipeline",
		num: "01",
		image: {
			src: "/truekredit/leads_screenshot.png",
			width: 2752,
			height: 2136,
		},
	},
	{
		id: "profile",
		num: "02",
		image: {
			src: "/truekredit/borrower_details_screenshot.png",
			width: 2752,
			height: 2168,
		},
	},
	{
		id: "approve",
		num: "03",
		image: {
			src: "/truekredit/loan_approve_screenshot.png",
			width: 1832,
			height: 1764,
		},
	},
	{
		id: "control",
		num: "04",
		image: {
			src: "/truekredit/rba_screenshot.png",
			width: 2126,
			height: 1566,
		},
	},
	{
		id: "documents",
		num: "05",
		image: {
			src: "/truekredit/lampiran_a_screenshot.png",
			width: 1716,
			height: 2384,
		},
	},
	{
		id: "service",
		num: "06",
		image: {
			src: "/truekredit/repayment_schedule_screenshot.png",
			width: 1806,
			height: 1288,
		},
	},
	{
		id: "collect",
		num: "07",
		image: {
			src: "/truekredit/collections_screenshot.png",
			width: 2762,
			height: 2074,
		},
	},
	{
		id: "adapt",
		num: "08",
		image: {
			src: "/truekredit/early_settlement_screenshot.png",
			width: 2126,
			height: 1566,
		},
	},
	{
		id: "govern",
		num: "09",
		image: {
			src: "/truekredit/activity_timeline_screenshot.png",
			width: 1820,
			height: 1532,
		},
	},
	{
		id: "configure",
		num: "10",
		image: {
			src: "/truekredit/configure_screenshot.png",
			width: 2762,
			height: 1750,
		},
	},
];

export function TrueKreditJourney() {
	const t = useTranslations("TrueKredit");
	const [active, setActive] = useState(0);
	const [playing, setPlaying] = useState(false);
	const tablistRef = useRef<HTMLDivElement>(null);
	const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
	const step = STEPS[active];
	const chips = t.raw(`journey.steps.${step.id}.chips`) as string[];

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
						<p className="type-eyebrow mb-3 text-primary">{t("journey.eyebrow")}</p>
						<h2
							id="truekredit-journey-heading"
							className="type-h2"
						>
							{t("journey.title")}
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							{t("journey.lede")}
						</p>
					</motion.div>
					<Button
						type="button"
						variant="outline"
						size="sm"
						className="shrink-0 self-start sm:self-end"
						aria-pressed={playing}
						aria-label={
							playing ? t("journey.pauseAria") : t("journey.playAria")
						}
						onClick={() => setPlaying((on) => !on)}
					>
						{playing ? (
							<Pause className="size-3.5" />
						) : (
							<Play className="size-3.5" />
						)}
						{playing ? t("journey.pause") : t("journey.play")}
					</Button>
				</div>

				<div className="grid items-start gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:gap-8">
					<div
						ref={tablistRef}
						role="tablist"
						aria-label={t("journey.tablistAria")}
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
									<span>{t(`journey.steps.${item.id}.label`)}</span>
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
									{t(`journey.steps.${step.id}.phase`)}
								</p>
								<h3 className="type-card-title mt-2 text-[1.5rem]">
									{t(`journey.steps.${step.id}.title`)}
								</h3>
								<p className="mt-2.5 max-w-[44em] type-lede text-muted-foreground">
									{t(`journey.steps.${step.id}.desc`)}
								</p>
								<div className="mt-5 mb-6 flex flex-wrap gap-2">
									{chips.map((chip) => (
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
									alt={t(`journey.steps.${step.id}.alt`)}
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
