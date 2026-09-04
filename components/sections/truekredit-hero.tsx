"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";
import {
	BORROWER_SHOTS,
	BorrowerAppPhones,
} from "@/components/sections/truekredit-borrower-visuals";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5000;

const SLIDES = [
	{
		id: "admin",
		label: "Admin",
		kind: "web" as const,
		chrome: "admin.truekredit",
		src: "/truekredit/hero_dashboard_screenshot.png",
		alt: "TrueKredit admin dashboard — outstanding, collections and portfolio health for a Malaysian money lender",
		width: 3368,
		height: 2662,
	},
	{
		id: "borrower",
		label: "Borrower",
		kind: "web" as const,
		chrome: "kredit.yourcompany.com.my",
		src: BORROWER_SHOTS.webDashboard.src,
		alt: BORROWER_SHOTS.webDashboard.alt,
		width: BORROWER_SHOTS.webDashboard.width,
		height: BORROWER_SHOTS.webDashboard.height,
	},
	{
		id: "mobile",
		label: "Mobile",
		kind: "phone" as const,
		chrome: "iOS & Android",
		src: BORROWER_SHOTS.appHome.src,
		alt: BORROWER_SHOTS.appHome.alt,
		width: BORROWER_SHOTS.appHome.width,
		height: BORROWER_SHOTS.appHome.height,
	},
] as const;

function GridPattern() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
			<div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
			<svg
				className="absolute inset-0 h-full w-full text-foreground opacity-[0.03]"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="grid-truekredit-hero"
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
				<rect width="100%" height="100%" fill="url(#grid-truekredit-hero)" />
			</svg>
			<div className="absolute -top-32 left-1/2 h-160 w-160 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl motion-safe:animate-pulse" />
		</div>
	);
}

export function TrueKreditHero() {
	const reduceMotion = useReducedMotion();
	const [active, setActive] = useState(0);
	const [playing, setPlaying] = useState(true);
	const slide = SLIDES[active];

	useEffect(() => {
		// Autoplay is suppressed entirely under prefers-reduced-motion.
		if (!playing || reduceMotion) return;
		const id = window.setInterval(() => {
			setActive((index) => (index + 1) % SLIDES.length);
		}, AUTOPLAY_MS);
		return () => window.clearInterval(id);
	}, [playing, reduceMotion]);

	useEffect(() => {
		const onVisibility = () => {
			if (document.visibilityState === "hidden") setPlaying(false);
		};
		document.addEventListener("visibilitychange", onVisibility);
		return () =>
			document.removeEventListener("visibilitychange", onVisibility);
	}, []);

	const selectSlide = (index: number) => {
		setPlaying(false);
		setActive(index);
	};

	return (
		<section id="hero" className="hero-under-nav relative overflow-hidden">
			<GridPattern />
			<div className="relative mx-auto max-w-6xl px-6 pt-16 text-center md:pt-20">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className="mx-auto max-w-[20em] type-h1 text-pretty">
						Run your entire lending book from{" "}
						<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
							one platform.
						</span>
					</h1>
					<p className="mx-auto mt-5 max-w-[40em] type-lede-hero text-pretty text-muted-foreground">
						TrueKredit™ is the{" "}
						<strong className="font-semibold text-foreground">
							money lending management system
						</strong>{" "}
						for Malaysian KPKT-licensed money lenders — borrowers,
						schedules, repayments and KPKT paperwork in one system
						your whole team trusts.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<Button asChild size="lg" className="gap-2">
							<Link href="/contact?subject=TrueKredit">
								Book a Free Consultation
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<CtaLink href="#compare">Standard vs Pro</CtaLink>
						</Button>
					</div>
				</motion.div>
			</div>

			<motion.div
				className="relative mx-auto max-w-270 px-6 pt-10"
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15 }}
			>
				<div
					role="tablist"
					aria-label="TrueKredit screens"
					className="mb-6 flex items-end justify-center gap-10 border-b md:mb-8 md:gap-16"
				>
					{SLIDES.map((item, index) => {
						const on = index === active;
						return (
							<button
								key={item.id}
								type="button"
								role="tab"
								aria-selected={on}
								onClick={() => selectSlide(index)}
								className={cn(
									"-mb-px border-b-2 px-1 pb-3 type-ui font-medium whitespace-nowrap transition-colors",
									on
										? "border-primary text-primary"
										: "border-transparent text-muted-foreground hover:text-foreground",
								)}
							>
								{item.label}
							</button>
						);
					})}
				</div>
				<div className="mb-8 overflow-hidden rounded-t-xl border border-b-0 bg-card shadow-lg md:mb-10">
					<div className="flex h-9 items-center gap-1.5 border-b bg-muted/40 px-3.5">
						<span
							className="size-2.5 rounded-full bg-border"
							aria-hidden
						/>
						<span
							className="size-2.5 rounded-full bg-border"
							aria-hidden
						/>
						<span
							className="size-2.5 rounded-full bg-border"
							aria-hidden
						/>
						<span className="ml-2.5 font-mono text-xs text-muted-foreground">
							{slide.chrome}
						</span>
					</div>
					<div className="relative aspect-16/10 overflow-hidden bg-muted/30">
						<AnimatePresence mode="wait">
							<motion.div
								key={slide.id}
								className="absolute inset-0"
								initial={
									reduceMotion ? false : { opacity: 0 }
								}
								animate={{ opacity: 1 }}
								exit={reduceMotion ? undefined : { opacity: 0 }}
								transition={{ duration: 0.25 }}
							>
								{slide.kind === "phone" ? (
									<BorrowerAppPhones />
								) : (
									<Image
										src={slide.src}
										alt={slide.alt}
										width={slide.width}
										height={slide.height}
										quality={100}
										unoptimized
										priority={slide.id === "admin"}
										sizes="(max-width: 1080px) calc(100vw - 3rem), 1080px"
										className="h-full w-full object-cover object-top"
									/>
								)}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
