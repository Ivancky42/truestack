"use client";

import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	AuditTrailMock,
	BorrowerProfileMock,
	CollectionsMock,
	DocsEmailMock,
	LeadsMock,
	OpsChainMock,
	ProAppMock,
	SchedulesMock,
} from "@/components/sections/truekredit-feature-mocks";

type DeviceKind = "laptop" | "phone";

type FeatureStep = {
	id: string;
	phase: string;
	title: string;
	desc: string;
	device: DeviceKind;
	visual: ReactNode;
};

/** Full lending lifecycle — one system, end to end. */
const STEPS: FeatureStep[] = [
	{
		id: "leads",
		phase: "01 · Pipeline",
		title: "Capture every lead",
		desc: "Sales queue, agents and who brought the lead — turn a lead into a borrower without leaving the system.",
		device: "laptop",
		visual: <LeadsMock />,
	},
	{
		id: "profiles",
		phase: "02 · Profile",
		title: "Know the borrower",
		desc: "Work, family, commitments, guarantors and documents — one complete file your whole team shares.",
		device: "laptop",
		visual: <BorrowerProfileMock />,
	},
	{
		id: "approve",
		phase: "03 · Approve",
		title: "Approve, then disburse",
		desc: "Field visits, risk checks, director packs and finance controls — close files faster at the counter.",
		device: "laptop",
		visual: <OpsChainMock />,
	},
	{
		id: "docs",
		phase: "04 · Documents",
		title: "Agreements, receipts, letters — automatic",
		desc: "Schedules, payment receipts, collection and default letters created and emailed when they matter.",
		device: "laptop",
		visual: <DocsEmailMock />,
	},
	{
		id: "repay",
		phase: "05 · Service",
		title: "Every instalment in view",
		desc: "Clear repayment schedules, payment slips, early settlement and finance checks — one live book.",
		device: "laptop",
		visual: <SchedulesMock />,
	},
	{
		id: "collect",
		phase: "06 · Collect",
		title: "Collections under control",
		desc: "Team view, promises to pay, escalations and maturity alerts — from arrears through default.",
		device: "laptop",
		visual: <CollectionsMock />,
	},
	{
		id: "audit",
		phase: "07 · Govern",
		title: "Audit-ready, every day",
		desc: "A clear record of who did what, when — with roles for Owner, Credit, Finance, Collections and Auditor.",
		device: "laptop",
		visual: <AuditTrailMock />,
	},
	{
		id: "pro-app",
		phase: "08 · Nationwide",
		title: "Take lending nationwide",
		desc: "TrueKredit Pro adds a branded website and mobile apps — customers apply, pay and sign, while every file stays in the same system.",
		device: "phone",
		visual: <ProAppMock />,
	},
];

function LaptopFrame({
	children,
	compact,
}: {
	children: ReactNode;
	compact?: boolean;
}) {
	return (
		<div
			className={`mx-auto flex h-full w-full flex-col ${
				compact ? "lg:h-auto lg:max-w-xl xl:max-w-2xl" : "max-w-xl lg:max-w-3xl xl:max-w-4xl"
			}`}
		>
			<div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-xl border border-slate-300/90 bg-slate-800 shadow-2xl shadow-slate-900/20 ring-1 ring-black/5">
				<div
					className={`flex shrink-0 items-center gap-2 border-b border-slate-700 bg-slate-900 ${
						compact
							? "px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5"
							: "px-3 py-2 sm:px-4 sm:py-2.5"
					}`}
				>
					<div className="flex gap-1.5">
						<span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
						<span className="h-2 w-2 rounded-full bg-amber-400/80 sm:h-2.5 sm:w-2.5" />
						<span className="h-2 w-2 rounded-full bg-emerald-400/80 sm:h-2.5 sm:w-2.5" />
					</div>
					<div className="ml-2 flex-1 rounded-md bg-slate-800 px-2.5 py-0.5 text-center text-[9px] text-slate-400 sm:px-3 sm:py-1 sm:text-[11px]">
						admin.truekredit
					</div>
				</div>
				{/*
				  Mobile compact: fill shared stage box.
				  Desktop: padding-bottom ratio locks 16/10 inside flex layouts.
				*/}
				{compact ? (
					<div className="relative min-h-0 flex-1 bg-slate-100 lg:flex-none lg:pb-[62.5%]">
						<div className="absolute inset-0 overflow-hidden p-2 sm:p-3 lg:p-5 xl:p-6">
							<div className="h-full w-full max-lg:origin-top-left max-lg:scale-[0.9] max-lg:[height:111%] max-lg:[width:111%]">
								{children}
							</div>
						</div>
					</div>
				) : (
					<div className="relative w-full bg-slate-100 pb-[62.5%]">
						<div className="absolute inset-0 overflow-hidden p-2.5 sm:p-4 md:p-5 lg:p-6">
							<div className="h-full w-full">{children}</div>
						</div>
					</div>
				)}
			</div>
			<div
				className={`relative mx-auto w-[102%] max-w-none shrink-0 -translate-x-[1%] rounded-b-xl bg-slate-300 ${
					compact ? "h-2 sm:h-2.5 lg:h-3.5" : "h-2.5 sm:h-3.5"
				}`}
			>
				<div className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-b-md bg-slate-400/50 sm:h-1.5 sm:w-20" />
			</div>
			<div
				className={`mx-auto w-[112%] max-w-none shrink-0 -translate-x-[5.5%] rounded-b-2xl bg-slate-200 ${
					compact ? "h-1 sm:h-1.5 lg:h-2" : "h-1.5 sm:h-2"
				}`}
			/>
		</div>
	);
}

/** Hardware-style phone for the Pro nationwide step. */
function FeaturePhoneFrame({
	children,
	compact,
}: {
	children: ReactNode;
	compact?: boolean;
}) {
	return (
		<div
			className={`relative mx-auto ${
				compact
					? "h-full aspect-[9/18.5] lg:h-auto lg:w-[280px]"
					: "aspect-[9/18.5] w-[min(100%,200px)] sm:w-[260px] lg:w-[300px]"
			}`}
		>
			<div
				className="absolute -left-[2px] top-[18%] h-5 w-[2px] rounded-l-sm bg-slate-700 sm:h-7 sm:w-[3px] lg:-left-[3px] lg:h-8"
				aria-hidden
			/>
			<div
				className="absolute -left-[2px] top-[28%] h-7 w-[2px] rounded-l-sm bg-slate-700 sm:h-10 sm:w-[3px] lg:-left-[3px] lg:h-12"
				aria-hidden
			/>
			<div
				className="absolute -right-[2px] top-[24%] h-9 w-[2px] rounded-r-sm bg-slate-700 sm:h-12 sm:w-[3px] lg:-right-[3px] lg:h-16"
				aria-hidden
			/>

			<div
				className={`relative h-full bg-slate-900 shadow-2xl shadow-violet-950/30 ring-1 ring-slate-700/80 ${
					compact
						? "rounded-[1.5rem] p-[5px] sm:rounded-[1.75rem] sm:p-[7px] lg:rounded-[2.2rem] lg:p-[9px]"
						: "rounded-[1.75rem] p-[7px] sm:rounded-[2.2rem] sm:p-[9px]"
				}`}
			>
				<div
					className={`flex h-full flex-col overflow-hidden bg-white ${
						compact
							? "rounded-[1.2rem] sm:rounded-[1.4rem] lg:rounded-[1.7rem]"
							: "rounded-[1.4rem] sm:rounded-[1.7rem]"
					}`}
				>
					<div
						className={`relative flex shrink-0 items-end justify-between ${
							compact
								? "h-6 px-2.5 pb-0.5 sm:h-8 sm:px-3.5 sm:pb-1 lg:h-10 lg:px-4 lg:pb-1.5"
								: "h-8 px-3.5 pb-1 sm:h-10 sm:px-4 sm:pb-1.5"
						}`}
					>
						<span className="text-[8px] font-semibold tabular-nums text-slate-900 sm:text-[10px] lg:text-[11px]">
							9:41
						</span>
						<div
							className={`absolute left-1/2 -translate-x-1/2 rounded-full bg-slate-950 shadow-inner ${
								compact
									? "top-1 h-[12px] w-[48px] sm:top-1.5 sm:h-[16px] sm:w-[64px] lg:top-2 lg:h-[20px] lg:w-[84px]"
									: "top-1.5 h-[16px] w-[64px] sm:top-2 sm:h-[20px] sm:w-[84px]"
							}`}
						/>
						<div className="flex items-center gap-0.5 text-slate-900 sm:gap-1">
							<svg
								width="15"
								height="11"
								viewBox="0 0 15 11"
								fill="currentColor"
								aria-hidden
								className="scale-[0.65] sm:scale-90 lg:scale-100"
							>
								<path d="M1.5 7.5h1.2v2H1.5zm2.5-2h1.2v4H4zm2.5-2h1.2v6H6.5zm2.5-2.5h1.2v8.5H9z" />
							</svg>
							<svg
								width="22"
								height="11"
								viewBox="0 0 22 11"
								fill="none"
								aria-hidden
								className="scale-[0.65] sm:scale-90 lg:scale-100"
							>
								<rect
									x="0.5"
									y="0.5"
									width="18"
									height="10"
									rx="2"
									stroke="currentColor"
								/>
								<rect
									x="2"
									y="2"
									width="12"
									height="7"
									rx="1"
									fill="currentColor"
								/>
								<path
									d="M20 3.5v4a1.5 1.5 0 0 0 0-4z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</div>

					<div
						className={`min-h-0 flex-1 overflow-hidden ${
							compact
								? "px-2 pb-0.5 pt-0.5 sm:px-3 sm:pb-1.5 sm:pt-1 lg:px-3.5"
								: "px-3 pb-1.5 pt-1 sm:px-3.5"
						}`}
					>
						{children}
					</div>

					<div
						className={`flex shrink-0 justify-center ${
							compact
								? "pb-1.5 pt-0.5 sm:pb-2 sm:pt-1 lg:pb-2.5"
								: "pb-2 pt-1 sm:pb-2.5"
						}`}
					>
						<div
							className={`rounded-full bg-slate-900/90 ${
								compact
									? "h-0.5 w-[48px] sm:h-1 sm:w-[72px] lg:w-[100px]"
									: "h-1 w-[72px] sm:w-[100px]"
							}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function DeviceStage({
	device,
	children,
	compact,
	stepId,
	direction,
}: {
	device: DeviceKind;
	children: ReactNode;
	compact?: boolean;
	stepId: string;
	direction: number;
}) {
	const slideOffset = direction * 14;

	const screen = (
		<div className="relative h-full w-full overflow-hidden">
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={stepId}
					className="h-full w-full"
					initial={{ opacity: 0, y: slideOffset }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -slideOffset }}
					transition={{
						duration: 0.3,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);

	/*
	  Mobile shared stage: width-driven 4/3 box so ratio stays correct when
	  the viewport is narrow. Laptop fills the box; phone uses the same height.
	  ~262–300px tall on phones — fits with sticky copy in one screen.
	*/
	if (compact) {
		return (
			<div className="mx-auto w-full max-w-[min(100%,420px)] lg:max-w-none">
				<div className="relative mx-auto aspect-[4/3] w-full lg:aspect-auto">
					{device === "phone" ? (
						<div className="absolute inset-0 flex items-center justify-center lg:static">
							<div className="h-full lg:h-auto">
								<FeaturePhoneFrame compact>
									{screen}
								</FeaturePhoneFrame>
							</div>
						</div>
					) : (
						<div className="absolute inset-0 lg:static">
							<LaptopFrame compact>{screen}</LaptopFrame>
						</div>
					)}
				</div>
			</div>
		);
	}

	if (device === "phone") {
		return (
			<div className="flex min-h-[280px] items-center justify-center p-2 sm:min-h-[420px] sm:p-4 md:min-h-[520px] lg:min-h-[560px]">
				<FeaturePhoneFrame>{screen}</FeaturePhoneFrame>
			</div>
		);
	}

	return (
		<div className="flex min-h-[200px] items-center justify-center p-1 sm:min-h-[320px] sm:p-2 md:min-h-[400px] lg:min-h-[460px]">
			<LaptopFrame>{screen}</LaptopFrame>
		</div>
	);
}

export function TrueKreditFeatureScroll() {
	const [active, setActive] = useState(0);
	const [direction, setDirection] = useState(1);
	const stepRefs = useRef<(HTMLElement | null)[]>([]);
	const activeRef = useRef(0);

	const setStepRef = useCallback((el: HTMLElement | null, i: number) => {
		stepRefs.current[i] = el;
	}, []);

	const goToStep = useCallback((i: number) => {
		if (i === activeRef.current) return;
		setDirection(i > activeRef.current ? 1 : -1);
		activeRef.current = i;
		setActive(i);
	}, []);

	useEffect(() => {
		const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];
		if (nodes.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort(
						(a, b) =>
							(b.intersectionRatio ?? 0) -
							(a.intersectionRatio ?? 0),
					);
				if (visible[0]) {
					const idx = Number(
						(visible[0].target as HTMLElement).dataset.stepIndex,
					);
					if (!Number.isNaN(idx)) goToStep(idx);
				}
			},
			{
				root: null,
				// Center band — works with full-viewport sticky stage + 100dvh spacers
				rootMargin: "-40% 0px -40% 0px",
				threshold: [0, 0.25, 0.5, 0.75],
			},
		);

		for (const n of nodes) observer.observe(n);
		return () => observer.disconnect();
	}, [goToStep]);

	const step = STEPS[active] ?? STEPS[0];
	const slideOffset = direction * 18;

	return (
		<section id="features" className="border-t bg-muted/30 py-14 md:py-24">
			<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
				{/* Section title — scrolls into view before the sticky journey starts */}
				<div className="mx-auto max-w-3xl text-center">
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
						End to end
					</p>
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						One system from first enquiry to final settlement
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						From the first lead to the last repayment — your team
						runs the book in one place. Scroll to walk the journey.
					</p>
				</div>

				{/*
				  Unified scroll experience:
				  - Mobile: full-viewport sticky stage (copy + device centered),
				    invisible step spacers drive the journey
				  - Desktop: copy rail left, sticky device right
				*/}
				<div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:items-start lg:gap-8 xl:gap-12">
					{/* Sticky stage — full viewport on mobile, right column on desktop */}
					<div className="sticky top-16 z-10 -mx-5 flex h-[calc(100dvh-4rem)] flex-col justify-center bg-muted/95 px-3 backdrop-blur-md sm:top-20 sm:h-[calc(100dvh-5rem)] sm:px-5 lg:order-2 lg:mx-0 lg:h-dvh lg:bg-transparent lg:px-0 lg:backdrop-blur-none lg:top-0 lg:self-start">
						<div className="mx-auto flex w-full max-w-none flex-col justify-center">
							{/* Mobile: phase, title + subtitle above device — match module card type */}
							<div className="relative mb-3 min-h-[5.5rem] shrink-0 px-2 text-center sm:mb-4 sm:min-h-24 lg:hidden">
								<AnimatePresence mode="wait" initial={false}>
									<motion.div
										key={step.id}
										initial={{
											opacity: 0,
											y: slideOffset * 0.4,
										}}
										animate={{ opacity: 1, y: 0 }}
										exit={{
											opacity: 0,
											y: -slideOffset * 0.4,
										}}
										transition={{
											duration: 0.28,
											ease: [0.22, 1, 0.36, 1],
										}}
									>
										<p
											className={`text-xs font-semibold uppercase tracking-wider ${
												step.device === "phone"
													? "text-violet-600"
													: "text-primary"
											}`}
										>
											{step.phase}
										</p>
										<h3 className="mt-1.5 font-display text-xl font-semibold leading-snug tracking-tight">
											{step.title}
										</h3>
										<p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
											{step.desc}
										</p>
									</motion.div>
								</AnimatePresence>
							</div>

							<div className="relative">
								<AnimatePresence mode="wait" initial={false}>
									<motion.div
										key={step.device}
										initial={{
											opacity: 0,
											scale: 0.97,
											y: slideOffset * 0.5,
										}}
										animate={{
											opacity: 1,
											scale: 1,
											y: 0,
										}}
										exit={{
											opacity: 0,
											scale: 0.97,
											y: -slideOffset * 0.5,
										}}
										transition={{
											duration: 0.35,
											ease: [0.22, 1, 0.36, 1],
										}}
									>
										<DeviceStage
											device={step.device}
											compact
											stepId={step.id}
											direction={direction}
										>
											{step.visual}
										</DeviceStage>
									</motion.div>
								</AnimatePresence>
							</div>

							<div className="relative mt-4 hidden min-h-4 lg:mt-5 lg:block">
								<AnimatePresence mode="wait" initial={false}>
									<motion.p
										key={step.id}
										className="absolute inset-x-0 text-center text-[11px] text-muted-foreground"
										initial={{
											opacity: 0,
											y: slideOffset * 0.35,
										}}
										animate={{ opacity: 1, y: 0 }}
										exit={{
											opacity: 0,
											y: -slideOffset * 0.35,
										}}
										transition={{
											duration: 0.25,
											ease: [0.22, 1, 0.36, 1],
										}}
									>
										{step.phase} — {step.title}
									</motion.p>
								</AnimatePresence>
							</div>
						</div>
					</div>

					{/* Scroll steps — drive the sticky device.
					    Mobile: full-viewport spacers (one screen per step).
					    Desktop: full copy rail. */}
					<div className="relative z-0 lg:order-1 lg:mt-0">
						{STEPS.map((s, i) => (
							<article
								key={s.id}
								ref={(el) => setStepRef(el, i)}
								data-step-index={i}
								aria-label={`${s.phase} — ${s.title}`}
								className={`flex flex-col justify-center transition-colors lg:min-h-dvh lg:border-l-2 lg:py-8 lg:pl-5 xl:pl-6 ${
									active === i
										? s.device === "phone"
											? "lg:border-violet-500"
											: "lg:border-primary"
										: "lg:border-transparent lg:opacity-35"
								}`}
							>
								{/* One viewport of scroll per step on mobile */}
								<div
									className="h-dvh w-full shrink-0 lg:hidden"
									aria-hidden
								/>
								<div className="hidden lg:block">
									<p
										className={`mb-2 text-[11px] font-semibold uppercase tracking-wider ${
											s.device === "phone"
												? "text-violet-600"
												: "text-primary"
										}`}
									>
										{s.phase}
									</p>
									<h3 className="font-display text-2xl font-medium tracking-tight xl:text-3xl">
										{s.title}
									</h3>
									<p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
										{s.desc}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
