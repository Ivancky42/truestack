"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
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
	{ icon: ShieldCheck, key: "regulators" },
	{ icon: Server, key: "data" },
	{ icon: FileCheck, key: "audit" },
] as const;

const STACK_PILLS = [
	{ label: "Licence", active: false },
	{ label: "Platform", active: true },
	{ label: "API", active: false },
] as const;

const VERB_EASE = [0.22, 1, 0.36, 1] as const;
const ROTATE_MS = 2000;
const VERB_ACCENT =
	"bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent";

function RotatingVerb({
	reduceMotion,
	enterDelay,
	verbs,
	suffix,
}: {
	reduceMotion: boolean | null;
	enterDelay: number;
	verbs: string[];
	/** Locale-specific tail appended to every verb (" on." in English). */
	suffix: string;
}) {
	const [index, setIndex] = useState(0);
	const [readyToCycle, setReadyToCycle] = useState(false);
	const phrase = `${verbs[index]}${suffix}`;

	useEffect(() => {
		if (reduceMotion) return;
		const start = window.setTimeout(
			() => setReadyToCycle(true),
			(enterDelay + 0.55) * 1000 + 80,
		);
		return () => window.clearTimeout(start);
	}, [reduceMotion, enterDelay]);

	useEffect(() => {
		if (reduceMotion || !readyToCycle) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % verbs.length);
		}, ROTATE_MS);
		return () => window.clearInterval(id);
	}, [reduceMotion, readyToCycle, verbs.length]);

	if (reduceMotion) {
		return (
			<span className={`inline-block whitespace-nowrap ${VERB_ACCENT}`}>
				{verbs[0]}
				{suffix}
			</span>
		);
	}

	return (
		<span className="inline-block overflow-hidden pb-[0.14em] align-bottom">
			<motion.span
				className="inline-block"
				initial={{ y: "108%" }}
				animate={{ y: 0 }}
				transition={{
					duration: 0.55,
					delay: enterDelay,
					ease: VERB_EASE,
				}}
			>
				<span className="relative inline-grid">
					{verbs.map((verb) => (
						<span
							key={verb}
							className="invisible col-start-1 row-start-1 whitespace-nowrap"
							aria-hidden
						>
							{verb}
							{suffix}
						</span>
					))}
					<span className="absolute inset-0 overflow-hidden">
						<AnimatePresence initial={false}>
							<motion.span
								key={verbs[index]}
								className="absolute inset-0 whitespace-nowrap"
								initial={{ y: "108%" }}
								animate={{ y: 0 }}
								exit={{ y: "-108%" }}
								transition={{
									duration: 0.55,
									ease: VERB_EASE,
								}}
							>
								<span className={VERB_ACCENT}>{phrase}</span>
							</motion.span>
						</AnimatePresence>
					</span>
				</span>
			</motion.span>
		</span>
	);
}

function HeroHeadline() {
	const t = useTranslations("Home");
	const reduceMotion = useReducedMotion();
	const prefix = t.raw("hero.titlePrefix") as string[];
	const verbs = t.raw("hero.verbs") as string[];
	const verbSuffix = t("hero.verbSuffix");

	return (
		<h1 className="type-h1 text-pretty">
			<span className="sr-only">{t("hero.title")}</span>
			<span aria-hidden>
				{prefix.map((word, i) => (
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
					enterDelay={0.1 + prefix.length * 0.07}
					verbs={verbs}
					suffix={verbSuffix}
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
	const t = useTranslations("Home");

	return (
		<div className="relative mx-auto h-[380px] w-full max-w-xl px-1 sm:h-[440px] sm:px-0 md:h-[540px] lg:max-w-none">
			{/* Lampiran A — licence document, back-right */}
			<div className="absolute top-0 right-1 z-0 w-[58%] rotate-[2.4deg] overflow-hidden rounded-[10px] border bg-card shadow-md sm:right-0 md:w-[66%]">
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
					alt={t("hero.alt.lampiran")}
					width={1716}
					height={2384}
					className="h-[100px] w-full object-cover object-top opacity-90 sm:h-[120px] md:h-[150px]"
					sizes="(max-width: 768px) 60vw, 280px"
				/>
			</div>

			{/* Dashboard — platform, front-center */}
			<div className="absolute top-[76px] left-1 z-10 w-[90%] -rotate-[1.2deg] overflow-hidden rounded-xl border bg-card shadow-xl sm:top-[88px] sm:left-0 md:top-[104px] md:w-[96%] md:shadow-2xl">
				<BrowserChrome label="admin.truekredit" />
				<Image
					src="/truekredit/hero_dashboard_screenshot.png"
					alt={t("hero.alt.dashboard")}
					width={3368}
					height={2662}
					quality={100}
					unoptimized
					priority
					className="h-[196px] w-full object-cover object-top sm:h-[290px] md:h-[360px]"
					sizes="(max-width: 1024px) 100vw, 560px"
				/>
			</div>

			{/* Activity timeline — audit trail overlay */}
			<div className="absolute bottom-0 left-1 z-20 w-[52%] max-w-60 -rotate-[3.6deg] overflow-hidden rounded-xl border bg-card shadow-md sm:-bottom-3 sm:-left-2 md:w-60">
				<Image
					src="/truekredit/activity_timeline_screenshot.png"
					alt={t("hero.alt.timeline")}
					width={1820}
					height={1532}
					className="h-32 w-full object-cover object-top-left sm:h-36 md:h-42"
					sizes="(max-width: 640px) 52vw, 240px"
				/>
			</div>

			{/* Licence / Platform / API */}
			<div
				className="absolute right-1 bottom-10 z-20 flex flex-row flex-wrap justify-end gap-1 sm:right-0 sm:bottom-3.5 sm:gap-1.5"
				aria-hidden
			>
				{STACK_PILLS.map((pill) => (
					<span
						key={pill.label}
						className={
							pill.active
								? "inline-flex items-center gap-1 rounded-full border border-primary/30 bg-card/90 px-2 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5"
								: "inline-flex items-center gap-1 rounded-full border bg-card/90 px-2 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5"
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
	const t = useTranslations("Home");
	const tCommon = useTranslations("Common");
	const reduceMotion = useReducedMotion();

	return (
		<section className="hero-under-nav relative overflow-hidden">
			<div className="absolute inset-0 -z-10" aria-hidden>
				<div className="absolute inset-0 bg-linear-to-b from-primary/10 via-primary/4 to-transparent" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_78%_36%,var(--primary)_0%,transparent_70%)] opacity-[0.12]" />
				<div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background to-transparent" />

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

				<div className="absolute -top-40 -right-28 h-152 w-152 rounded-full bg-primary/20 blur-3xl motion-safe:animate-pulse" />
				<div className="absolute top-28 -left-32 h-104 w-104 rounded-full bg-primary/10 blur-3xl" />
			</div>

			<div className="hero-shell px-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-19 lg:pb-20">
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
								{t("hero.lede")}
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
								<Button asChild size="lg" className="gap-2">
									<CtaLink href="/contact">
										{tCommon("bookConsultation")}
										<ArrowRight className="h-4 w-4" />
									</CtaLink>
								</Button>
								<Button asChild variant="outline" size="lg">
									<CtaLink href="#solutions">
										{t("hero.secondaryCta")}
									</CtaLink>
								</Button>
							</div>

							<div className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-muted-foreground">
								{TRUST_CHIPS.map(({ icon: Icon, key }) => (
									<span
										key={key}
										className="inline-flex items-center gap-1.5"
									>
										<Icon
											className="h-3.5 w-3.5 text-primary"
											aria-hidden
										/>
										{t(`hero.chips.${key}`)}
									</span>
								))}
							</div>
						</motion.div>
					</div>

					<motion.div
						className="pb-8 md:pb-2"
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
