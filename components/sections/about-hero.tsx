"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
	animate,
	motion,
	useMotionValue,
	useReducedMotion,
	useTransform,
} from "framer-motion";
import { GridPattern } from "@/components/sections/hero";
import { cn } from "@/lib/utils";

const pills = ["kl", "credit", "regulation"] as const;

const stats = [
	{
		key: "founded",
		value: 2025,
		prefix: "",
		suffix: "",
		highlight: false,
	},
	{
		key: "lenders",
		value: 11,
		prefix: "",
		suffix: "",
		highlight: false,
	},
	{
		key: "disbursed",
		value: 200,
		prefix: "RM ",
		suffix: "m+",
		highlight: true,
	},
] as const;

function CountUp({
	value,
	prefix,
	suffix,
	delay,
}: {
	value: number;
	prefix: string;
	suffix: string;
	delay: number;
}) {
	const reduceMotion = useReducedMotion();
	const count = useMotionValue(reduceMotion ? value : 0);
	const rounded = useTransform(count, (latest) => Math.round(latest));

	useEffect(() => {
		if (reduceMotion) {
			count.set(value);
			return;
		}
		const controls = animate(count, value, {
			duration: 1.45,
			delay,
			ease: [0.16, 1, 0.3, 1],
		});
		return () => controls.stop();
	}, [count, delay, reduceMotion, value]);

	return (
		<span className="tabular-nums" aria-hidden>
			{prefix}
			<motion.span>{rounded}</motion.span>
			{suffix}
		</span>
	);
}

export function AboutHero() {
	const t = useTranslations("About");
	return (
		<section className="hero-under-nav relative overflow-hidden">
			<GridPattern />
			<div className="relative hero-shell px-6 pt-14 md:pt-16 lg:pt-20">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<nav
						aria-label={t("hero.breadcrumbAria")}
						className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"
					>
						<Link href="/" className="hover:text-foreground">
							{t("hero.breadcrumbParent")}
						</Link>
						<span className="text-border" aria-hidden>
							/
						</span>
						<span className="font-medium text-foreground">
							{t("hero.breadcrumbCurrent")}
						</span>
					</nav>

					<h1 className="max-w-[22em] type-h1 text-pretty">
						{t.rich("hero.title", {
							accent: (c) => (
								<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
									{c}
								</span>
							),
						})}
					</h1>

					<div className="mt-6 grid items-end gap-8 pb-12 md:pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
						<p className="max-w-[34em] type-lede-hero text-pretty text-muted-foreground">
							{t("hero.lede")}
						</p>
						<div className="flex flex-wrap gap-2.5">
							{pills.map((pill) => (
								<span
									key={pill}
									className="rounded-full border bg-background/80 px-3.5 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-sm"
								>
									{t(`hero.pills.${pill}`)}
								</span>
							))}
						</div>
					</div>
				</motion.div>

				<motion.div
					className="grid overflow-hidden rounded-t-2xl border border-b-0 bg-card shadow-[0_-2px_30px_-12px_rgb(15_23_42/0.18)] sm:grid-cols-3"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.12 }}
				>
					{stats.map((stat, index) => (
						<div
							key={stat.key}
							className={cn(
								"px-6 py-7 md:px-8 md:py-8",
								index < stats.length - 1 &&
									"border-b sm:border-b-0 sm:border-r",
								stat.highlight && "bg-primary/4",
							)}
						>
							<p
								className={cn(
									"type-h2",
									stat.highlight
										? "text-primary"
										: "text-foreground",
								)}
								aria-label={`${stat.prefix}${stat.value}${stat.suffix}`}
							>
								<CountUp
									value={stat.value}
									prefix={stat.prefix}
									suffix={stat.suffix}
									delay={0.28 + index * 0.1}
								/>
							</p>
							<p className="mt-1 type-ui text-muted-foreground">
								{t(`hero.stats.${stat.key}.label`)}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
