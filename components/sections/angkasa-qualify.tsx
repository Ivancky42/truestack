"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { CtaLink } from "@/components/shared/cta-link";
import { ANGKASA_CONTACT_HREF } from "@/lib/angkasa-seo";
import { cn } from "@/lib/utils";

const CHECK_KEYS = [
	"entity",
	"licence",
	"filings",
	"product",
	"capacity",
] as const;

export function AngkasaQualify() {
	const t = useTranslations("Angkasa");
	const [checked, setChecked] = useState<boolean[]>(() =>
		CHECK_KEYS.map(() => false),
	);
	const score = checked.filter(Boolean).length;
	const verdicts = t.raw("qualify.verdicts") as string[];

	return (
		<section
			id="qualify"
			className="scroll-mt-20 border-t bg-muted/40 py-16 md:py-20"
		>
			<div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="type-eyebrow mb-3 text-kpkt">
						{t("qualify.eyebrow")}
					</p>
					<h2 className="type-h2 text-foreground">
						{t("qualify.title")}
					</h2>
					<p className="mt-4 text-base text-muted-foreground md:text-[17px]">
						{t("qualify.body")}
					</p>
					<div className="mt-5 rounded-xl border border-kpkt/20 bg-kpkt/5 px-5 py-[18px]">
						<h3 className="text-base font-semibold text-foreground">
							{t("qualify.missingTitle")}
						</h3>
						<p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
							{t("qualify.missingBody")}
						</p>
					</div>
				</motion.div>

				<motion.div
					className="rounded-2xl border bg-card p-3 shadow-sm"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<div role="group" aria-label={t("qualify.groupAria")}>
						{CHECK_KEYS.map((key, index) => {
							const on = checked[index];
							return (
								<button
									key={key}
									type="button"
									role="checkbox"
									aria-checked={on}
									onClick={() =>
										setChecked((current) =>
											current.map((value, i) =>
												i === index ? !value : value,
											),
										)
									}
									className={cn(
										"flex w-full cursor-pointer gap-3.5 rounded-xl px-[18px] py-4 text-left transition-colors",
										on
											? "bg-kpkt/5"
											: "hover:bg-muted/50",
									)}
								>
									<span
										className={cn(
											"mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md border-[1.5px] transition-colors",
											on
												? "border-kpkt bg-kpkt text-primary-foreground"
												: "border-border bg-background",
										)}
										aria-hidden
									>
										<Check
											className={cn(
												"h-3.5 w-3.5",
												on ? "opacity-100" : "opacity-0",
											)}
											strokeWidth={3}
										/>
									</span>
									<span>
										<span className="block text-base font-semibold leading-snug text-foreground">
											{t(`qualify.checks.${key}.title`)}
										</span>
										<span className="mt-0.5 block text-sm text-muted-foreground">
											{t(`qualify.checks.${key}.detail`)}
										</span>
									</span>
								</button>
							);
						})}
					</div>

					<div className="m-3 rounded-xl border bg-muted/40 px-5 py-[18px]">
						<div className="mb-2 flex items-center gap-3">
							<span className="type-mono-score font-medium text-kpkt">
								{score} / 5
							</span>
							<div
								className="h-1.5 flex-1 overflow-hidden rounded-full bg-border"
								aria-hidden
							>
								<div
									className="h-full rounded-full bg-linear-to-r from-kpkt to-cyan-600 transition-[width] duration-300"
									style={{ width: `${score * 20}%` }}
								/>
							</div>
						</div>
						<p className="text-[15px] text-muted-foreground">
							{verdicts[score]}
						</p>
						<CtaLink
							href={ANGKASA_CONTACT_HREF}
							className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-kpkt hover:underline"
						>
							{t("qualify.confirmCta")}
							<ArrowRight className="h-4 w-4" />
						</CtaLink>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
