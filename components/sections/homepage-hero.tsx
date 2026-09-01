"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
	ArrowRight,
	FileCheck,
	FileText,
	Server,
	ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";

const TRUST_CHIPS = [
	{ icon: ShieldCheck, label: "KPKT, SC & Bank Negara" },
	{ icon: Server, label: "Data in Malaysia" },
	{ icon: FileCheck, label: "Audit-ready" },
] as const;

const STACK_PILLS = [
	{ label: "Licence", active: false },
	{ label: "Platform", active: true },
	{ label: "API", active: false },
] as const;

const HERO_TITLE_PREFIX = [
	"The",
	"fintech",
	"infrastructure",
	"Malaysian",
	"lenders",
] as const;

const HERO_VERBS = ["launch", "lend", "build", "scale", "run"] as const;
const HERO_TITLE_STATIC =
	"The fintech infrastructure Malaysian lenders launch on.";
const VERB_EASE = [0.22, 1, 0.36, 1] as const;
const ROTATE_MS = 2600;

function RotatingVerb({
	reduceMotion,
	enterDelay,
}: {
	reduceMotion: boolean | null;
	enterDelay: number;
}) {
	const [index, setIndex] = useState(0);
	const [readyToCycle, setReadyToCycle] = useState(false);
	const phrase = `${HERO_VERBS[index]} on.`;

	useEffect(() => {
		if (reduceMotion || !readyToCycle) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % HERO_VERBS.length);
		}, ROTATE_MS);
		return () => window.clearInterval(id);
	}, [reduceMotion, readyToCycle]);

	if (reduceMotion) {
		return (
			<span className="inline-block rounded-md bg-primary/30 px-[0.32em] py-[0.06em] align-bottom whitespace-nowrap">
				launch on.
			</span>
		);
	}

	return (
		<span className="inline-flex rounded-md bg-primary/10 px-[0.32em] py-[0.06em] align-bottom">
			<span className="relative inline-grid overflow-hidden">
				{HERO_VERBS.map((verb) => (
					<span
						key={verb}
						className="invisible col-start-1 row-start-1 whitespace-nowrap pb-[0.14em]"
						aria-hidden
					>
						{verb} on.
					</span>
				))}
				<span className="absolute inset-0 overflow-hidden">
					<AnimatePresence>
						<motion.span
							key={HERO_VERBS[index]}
							className="absolute inset-0 whitespace-nowrap"
							initial={{ y: "108%" }}
							animate={{ y: 0 }}
							exit={{ y: "-108%" }}
							transition={{
								duration: 0.5,
								ease: VERB_EASE,
								delay: readyToCycle ? 0 : enterDelay,
							}}
							onAnimationComplete={() => setReadyToCycle(true)}
						>
							{phrase}
						</motion.span>
					</AnimatePresence>
				</span>
			</span>
		</span>
	);
}

function HeroHeadline() {
	const reduceMotion = useReducedMotion();

	return (
		<h1 className="type-h1 text-pretty">
			<span className="sr-only">{HERO_TITLE_STATIC}</span>
			<span aria-hidden>
				{HERO_TITLE_PREFIX.map((word, i) => (
					<span
						key={word}
						className="mr-[0.28em] inline-block overflow-hidden pb-[0.14em] align-bottom"
					>
						<motion.span
							className="inline-block"
							initial={reduceMotion ? false : { y: "108%" }}
							animate={{ y: 0 }}
							transition={{
								duration: 0.55,
								delay: reduceMotion ? 0 : 0.1 + i * 0.07,
								ease: VERB_EASE,
							}}
						>
							{word}
						</motion.span>
					</span>
				))}
				<RotatingVerb
					reduceMotion={reduceMotion}
					enterDelay={0.1 + HERO_TITLE_PREFIX.length * 0.07}
				/>
			</span>
		</h1>
	);
}

function BrowserChrome({ label }: { label: string }) {
	return (
		<div className="flex h-8 items-center gap-1.5 border-b bg-muted/40 px-3">
			<span className="size-2 rounded-full bg-border" aria-hidden />
			<span className="size-2 rounded-full bg-border" aria-hidden />
			<span className="size-2 rounded-full bg-border" aria-hidden />
			<span className="ml-2 type-mono-label text-muted-foreground/70">
				{label}
			</span>
		</div>
	);
}

function HeroCollage() {
	return (
		<div className="relative mx-auto w-full max-w-xl md:h-[540px] lg:max-w-none">
			{/* Lampiran A — licence document, back-right */}
			<div className="absolute top-0 right-0 z-0 hidden w-[66%] rotate-[2.4deg] overflow-hidden rounded-[10px] border bg-card shadow-md md:block">
				<div className="flex h-6.5 items-center gap-2 border-b bg-muted/50 px-2.5">
					<FileText
						className="size-3 text-muted-foreground/70"
						aria-hidden
					/>
					<span className="type-mono-label text-muted-foreground/70">
						lampiran-a.pdf · KPKT
					</span>
				</div>
				<Image
					src="/truekredit/lampiran_a_screenshot.png"
					alt="Lampiran A borrower ledger generated from TrueKredit"
					width={1716}
					height={2384}
					className="h-[150px] w-full object-cover object-top opacity-90"
					sizes="280px"
				/>
			</div>

			{/* Dashboard — platform, front-center */}
			<div className="relative z-10 overflow-hidden rounded-xl border bg-card shadow-xl md:absolute md:top-[104px] md:left-0 md:w-[96%] md:-rotate-[1.2deg] md:shadow-2xl">
				<BrowserChrome label="admin.truekredit" />
				<Image
					src="/truekredit/hero_dashboard_screenshot.png"
					alt="TrueKredit admin dashboard — outstanding, collections and portfolio health for a Malaysian money lender"
					width={3368}
					height={2662}
					quality={100}
					unoptimized
					priority
					className="h-auto w-full md:h-[360px] md:object-cover md:object-top"
					sizes="(max-width: 1024px) 100vw, 560px"
				/>
			</div>

			{/* Activity timeline — audit trail overlay */}
			<div className="absolute -bottom-3 -left-2 z-20 hidden w-60 -rotate-[3.6deg] overflow-hidden rounded-xl border bg-card shadow-md md:block">
				<Image
					src="/truekredit/activity_timeline_screenshot.png"
					alt="TrueKredit activity timeline — who changed a loan, exported Lampiran A, or recorded a payment"
					width={1820}
					height={1532}
					className="h-42 w-full object-cover object-top-left"
					sizes="240px"
				/>
			</div>

			{/* Licence / Platform / API */}
			<div
				className="absolute right-0 bottom-3.5 z-20 hidden flex-row items-center gap-1.5 md:flex"
				aria-hidden
			>
				{STACK_PILLS.map((pill) => (
					<span
						key={pill.label}
						className={
							pill.active
								? "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card/90 px-3 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-sm"
								: "inline-flex items-center gap-1.5 rounded-full border bg-card/90 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm"
						}
					>
						<span className="size-1.5 rounded-full bg-primary" />
						{pill.label}
					</span>
				))}
			</div>
		</div>
	);
}

export function HomepageHero() {
	const reduceMotion = useReducedMotion();

	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10" aria-hidden>
				<div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
				<svg
					className="absolute inset-0 h-full w-full text-foreground opacity-[0.045]"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="homepage-hero-grid"
							width="48"
							height="48"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 48 0 L 0 0 0 48"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						fill="url(#homepage-hero-grid)"
					/>
				</svg>
				<div className="absolute -top-40 -right-30 h-155 w-155 rounded-full bg-primary/15 blur-3xl motion-safe:animate-pulse" />
			</div>

			<div className="mx-auto w-full max-w-[90rem] px-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-19 lg:pb-20">
				<div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
					<div>
						<HeroHeadline />

						<motion.div
							initial={
								reduceMotion ? false : { opacity: 0, y: 16 }
							}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: reduceMotion ? 0 : 0.62,
							}}
						>
							<p className="mt-5 max-w-[30em] type-lede-hero text-pretty text-muted-foreground">
								We get you licensed and we run your book —
								lending software, paperwork, and the rails
								underneath for KPKT money lending.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
								<Button asChild size="lg" className="gap-2">
									<CtaLink href="/contact">
										Book a Free Consultation
										<ArrowRight className="h-4 w-4" />
									</CtaLink>
								</Button>
								<Button asChild variant="outline" size="lg">
									<CtaLink href="#solutions">
										Find your starting point
									</CtaLink>
								</Button>
							</div>

							<div className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-muted-foreground">
								{TRUST_CHIPS.map(({ icon: Icon, label }) => (
									<span
										key={label}
										className="inline-flex items-center gap-1.5"
									>
										<Icon
											className="h-3.5 w-3.5 text-primary"
											aria-hidden
										/>
										{label}
									</span>
								))}
							</div>
						</motion.div>
					</div>

					<motion.div
						className="pb-6 md:pb-2"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.12 }}
					>
						<HeroCollage />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
