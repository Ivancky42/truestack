"use client";

import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type ReactNode,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Apple-style horizontal feature carousel with peek-overflow + snap scroll.
// Each card pairs a visual (custom node, image, or image grid) with title +
// description copy below. Cards are large with a near-square visual area on
// top. Includes prev/next controls (md+) plus native swipe.
//
// Shared between TrueKredit and TrueSyariah (and any future product page) so
// the connected-modules section feels identical across products.

export type FeatureCardData = {
	icon: LucideIcon;
	title: string;
	desc: string;
	// Choose ONE of four visual modes: custom node, image, images (grid),
	// or fall back to a designed icon header.
	visual?: ReactNode;
	image?: { src: string; alt: string; width: number; height: number };
	images?: { src: string; alt: string; label?: string }[];
	accent?: string;
	iconColor?: string;
	iconBg?: string;
	tag?: string;
};

// Tinted gradient background + soft glow blob for in-card module visuals,
// with optional floating stat badges.
export type ShellBadge = {
	label: string;
	sub: string;
	pos: string; // tailwind position classes, e.g. "left-3 top-4"
	emphasis?: string; // text color class for the headline label
};

export function VisualShell({
	tint,
	glow,
	badges,
	children,
}: {
	tint: string;
	glow: string;
	badges?: ShellBadge[];
	children: ReactNode;
}) {
	return (
		<div
			className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br ${tint} px-6 py-5`}
		>
			<div
				className={`absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full ${glow} blur-3xl`}
			/>
			{children}
			{badges?.map((b) => (
				<div
					key={b.label + b.pos}
					className={`absolute ${b.pos} hidden rounded-md border bg-white px-2 py-1 shadow-sm sm:block`}
				>
					<p
						className={`text-[9px] font-semibold leading-tight ${b.emphasis ?? "text-foreground"}`}
					>
						{b.label}
					</p>
					<p className="text-[7px] leading-tight text-muted-foreground">
						{b.sub}
					</p>
				</div>
			))}
		</div>
	);
}

// Phone-frame chrome reused by phone-style mocks.
export function PhoneChrome({ children }: { children: ReactNode }) {
	return (
		<div className="relative w-[78%] max-w-[260px] overflow-hidden rounded-[1.4rem] border border-border/70 bg-white shadow-xl">
			<div className="flex items-center justify-between bg-slate-50 px-4 py-1.5">
				<span className="text-[9px] font-medium text-slate-400">
					9:41
				</span>
				<div className="mx-auto h-3.5 w-14 rounded-full bg-slate-900" />
				<div className="flex gap-1">
					<div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
					<div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
				</div>
			</div>
			<div className="px-3 pb-3 pt-3">{children}</div>
		</div>
	);
}

export function FeatureCarousel({
	eyebrow,
	title,
	description,
	items,
	tagAccent = "violet",
}: {
	eyebrow?: string;
	title: string;
	description?: string;
	items: FeatureCardData[];
	// Controls the colour of the per-card `tag` chip (e.g. "First-party").
	// "violet" matches TrueKredit Pro; "emerald" matches TrueSyariah.
	tagAccent?: "violet" | "emerald";
}) {
	const scrollerRef = useRef<HTMLDivElement>(null);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(true);

	const updateButtons = useCallback(() => {
		const el = scrollerRef.current;
		if (!el) return;
		setCanPrev(el.scrollLeft > 8);
		setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
	}, []);

	useEffect(() => {
		const el = scrollerRef.current;
		if (!el) return;
		updateButtons();
		el.addEventListener("scroll", updateButtons, { passive: true });
		window.addEventListener("resize", updateButtons);
		return () => {
			el.removeEventListener("scroll", updateButtons);
			window.removeEventListener("resize", updateButtons);
		};
	}, [updateButtons]);

	const scrollByPage = (dir: 1 | -1) => {
		const el = scrollerRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-carousel-item]");
		const cardWidth = card?.offsetWidth ?? 320;
		const gap = 16;
		el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
	};

	const eyebrowColor =
		tagAccent === "emerald" ? "text-emerald-700" : "text-primary";
	const buttonHover =
		tagAccent === "emerald"
			? "hover:border-emerald-400/50 hover:text-emerald-700"
			: "hover:border-primary/40 hover:text-primary";

	return (
		<div className="relative">
			{/* Section-style centered header. Title is centered and stays
          perfectly centered; the prev/next buttons live at the bottom-right
          of the same header block on md+. */}
			<div className="relative mx-auto mb-8 max-w-6xl px-5 sm:mb-10 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					{eyebrow && (
						<p
							className={`mb-3 text-xs font-semibold uppercase tracking-widest ${eyebrowColor}`}
						>
							{eyebrow}
						</p>
					)}
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						{title}
					</h2>
					{description && (
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							{description}
						</p>
					)}
				</div>

				{/* Prev/Next pinned to the right side (md+) */}
				<div className="absolute bottom-0 right-5 hidden gap-2 sm:right-6 md:flex lg:right-8">
					<button
						type="button"
						onClick={() => scrollByPage(-1)}
						disabled={!canPrev}
						className={`flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all disabled:cursor-not-allowed disabled:opacity-30 ${buttonHover}`}
						aria-label="Previous"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button
						type="button"
						onClick={() => scrollByPage(1)}
						disabled={!canNext}
						className={`flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all disabled:cursor-not-allowed disabled:opacity-30 ${buttonHover}`}
						aria-label="Next"
					>
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</div>

			{/* Scroller — scroll-pl ensures snap respects the left padding so
          the first card stays inset (doesn't snap back to the edge after
          interaction). pr keeps matching breathing room after the last
          card. */}
			<div
				ref={scrollerRef}
				className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 pl-5 pr-5 scroll-pl-5 sm:gap-5 sm:pl-6 sm:pr-6 sm:scroll-pl-6 lg:pl-8 lg:pr-8 lg:scroll-pl-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				{items.map((item, i) => (
					<FeatureCard key={i} item={item} tagAccent={tagAccent} />
				))}
			</div>
		</div>
	);
}

function FeatureCard({
	item,
	tagAccent,
}: {
	item: FeatureCardData;
	tagAccent: "violet" | "emerald";
}) {
	const Icon = item.icon;
	const accent = item.accent ?? "bg-primary/10";
	const iconColor = item.iconColor ?? "text-primary";
	const iconBg =
		item.iconBg ??
		"bg-linear-to-br from-primary/10 via-primary/5 to-background";

	const hoverBorder =
		tagAccent === "emerald"
			? "hover:border-emerald-300"
			: "hover:border-primary/30";
	const tagChip =
		tagAccent === "emerald"
			? "bg-emerald-500/10 text-emerald-700"
			: "bg-violet-500/10 text-violet-700";

	return (
		<div
			data-carousel-item
			className={`group flex w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 ${hoverBorder} hover:shadow-md sm:w-[440px] md:w-[500px] lg:w-[540px]`}
		>
			{/* Visual area — squarish, ~62% of card */}
			<div
				className={
					item.image
						? "relative aspect-5/4 w-full shrink-0 overflow-hidden"
						: "relative aspect-5/4 w-full shrink-0 overflow-hidden bg-muted/40"
				}
			>
				{item.visual ? (
					<div className="h-full w-full">{item.visual}</div>
				) : item.images ? (
					<div className="grid h-full w-full grid-cols-2 gap-1 bg-muted">
						{item.images.slice(0, 4).map((img) => (
							<div
								key={img.src}
								className="relative overflow-hidden bg-white"
							>
								<Image
									src={img.src}
									alt={img.alt}
									fill
									sizes="(min-width: 1024px) 270px, (min-width: 768px) 250px, (min-width: 640px) 220px, 170px"
									className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
								/>
								{img.label && (
									<span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
										{img.label}
									</span>
								)}
							</div>
						))}
					</div>
				) : item.image ? (
					<div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br from-primary/10 via-primary/5 to-violet-500/10">
						<div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl md:h-56 md:w-56" />
						<div className="relative z-1 flex h-full max-h-full w-full max-w-full items-center justify-center px-6 py-8 sm:px-7 sm:py-10">
							<Image
								src={item.image.src}
								alt={item.image.alt}
								width={item.image.width}
								height={item.image.height}
								sizes="(min-width: 1024px) 480px, (min-width: 768px) 420px, (min-width: 640px) 360px, 300px"
								className="h-auto max-h-full w-auto max-w-full rounded-3xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
								style={{ width: "auto", height: "auto" }}
							/>
						</div>
					</div>
				) : (
					<div
						className={`flex h-full w-full items-center justify-center ${iconBg}`}
					>
						<div
							className={`flex h-24 w-24 items-center justify-center rounded-2xl ${accent} shadow-sm`}
						>
							<Icon className={`h-12 w-12 ${iconColor}`} />
						</div>
					</div>
				)}
			</div>

			{/* Copy area — compact bottom whitespace */}
			<div className="flex flex-col gap-2 p-6 sm:p-7">
				{item.tag && (
					<span
						className={`inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${tagChip}`}
					>
						{item.tag}
					</span>
				)}
				<h4 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
					{item.title}
				</h4>
				<p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
					{item.desc}
				</p>
			</div>
		</div>
	);
}
