import { type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TsEyebrow({
	children,
	onDark = false,
}: {
	children: ReactNode;
	onDark?: boolean;
}) {
	return (
		<div className="mb-[18px] flex items-center gap-3">
			<span
				className={cn(
					"h-px w-[26px]",
					onDark ? "bg-ts-gold-bright" : "bg-ts-gold",
				)}
				aria-hidden
			/>
			<span
				className={cn(
					"type-ts-eyebrow",
					onDark ? "text-ts-gold-bright" : "text-ts-gold",
				)}
			>
				{children}
			</span>
		</div>
	);
}

export function TsPhoto({
	src,
	alt,
	sizes,
	className,
	priority = false,
}: {
	src: string;
	alt: string;
	sizes: string;
	className?: string;
	priority?: boolean;
}) {
	return (
		<div
			className={cn(
				"relative overflow-hidden border border-ts-rule",
				className,
			)}
		>
			<Image
				src={src}
				alt={alt}
				fill
				sizes={sizes}
				priority={priority}
				className="object-cover"
			/>
			<div
				className="absolute inset-0 bg-ts-gold/10 mix-blend-multiply"
				aria-hidden
			/>
		</div>
	);
}

export function TsArabic({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span
			dir="rtl"
			lang="ar"
			className={cn("type-ts-arabic text-ts-gold", className)}
		>
			{children}
		</span>
	);
}

export function TsReveal({
	children,
	className,
	delay = 0,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay }}
		>
			{children}
		</motion.div>
	);
}

export function TsSection({
	id,
	children,
	className,
	dark = false,
}: {
	id?: string;
	children: ReactNode;
	className?: string;
	dark?: boolean;
}) {
	return (
		<section
			id={id}
			data-nav-theme={dark ? "dark" : undefined}
			className={cn(
				"px-6 py-16 md:py-20",
				dark
					? "bg-ts-ink text-ts-cream"
					: "border-b border-ts-rule bg-ts-parchment",
				className,
			)}
		>
			<div className="mx-auto max-w-6xl">{children}</div>
		</section>
	);
}

export function TsIntro({
	eyebrow,
	title,
	lede,
	onDark = false,
	className,
}: {
	eyebrow: string;
	title: ReactNode;
	lede?: ReactNode;
	onDark?: boolean;
	className?: string;
}) {
	return (
		<TsReveal className={cn("max-w-[42em]", className)}>
			<TsEyebrow onDark={onDark}>{eyebrow}</TsEyebrow>
			<h2
				className={cn(
					"type-ts-h2 text-pretty",
					onDark ? "text-ts-cream" : "text-ts-ink",
				)}
			>
				{title}
			</h2>
			{lede ? (
				<p
					className={cn(
						"mt-4 type-lede",
						onDark ? "text-ts-mist" : "text-ts-ink-muted",
					)}
				>
					{lede}
				</p>
			) : null}
		</TsReveal>
	);
}
