"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/sections/hero";

export function CareersHero() {
	const t = useTranslations("Careers");
	return (
		<section className="hero-under-nav relative overflow-hidden">
			<GridPattern />
			<div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16 lg:py-20">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<nav
						aria-label={t("hero.breadcrumbAria")}
						className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"
					>
						<Link href="/about" className="hover:text-foreground">
							{t("hero.breadcrumbParent")}
						</Link>
						<span className="text-border" aria-hidden>
							/
						</span>
						<span className="font-medium text-foreground">
							{t("hero.breadcrumbCurrent")}
						</span>
					</nav>

					<h1 className="max-w-[20em] type-h1 text-pretty">
						{t.rich("hero.title", {
							accent: (c) => (
								<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
									{c}
								</span>
							),
						})}
					</h1>

					<p className="mt-6 max-w-[34em] type-lede-hero text-pretty text-muted-foreground">
						{t("hero.lede")}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
