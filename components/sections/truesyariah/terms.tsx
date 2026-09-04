"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { truesyariahTerms } from "@/lib/truesyariah-content";
import {
	TsArabic,
	TsEyebrow,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahTerms() {
	const t = useTranslations("TrueSyariah");
	const [active, setActive] = useState(0);
	const term = truesyariahTerms[active];

	return (
		<TsSection id="terms">
			<TsReveal className="mb-9 flex flex-wrap items-end justify-between gap-6">
				<div className="max-w-[40em]">
					<TsEyebrow>{t("terms.eyebrow")}</TsEyebrow>
					<h2 className="type-ts-h2 text-pretty text-ts-ink">
						{t("terms.title")}
					</h2>
					<p className="mt-4 type-lede text-ts-ink-muted">
						{t("terms.lede")}
					</p>
				</div>
				<span className="font-mono text-xs text-ts-stone">
					{t("terms.select")}
				</span>
			</TsReveal>

			<TsReveal
				delay={0.08}
				className="grid border border-ts-rule bg-ts-paper lg:grid-cols-[0.38fr_0.62fr]"
			>
				<div
					className="border-ts-rule lg:border-r"
					role="tablist"
					aria-label={t("terms.tablistAria")}
				>
					{truesyariahTerms.map((item, i) => (
						<button
							key={item.key}
							type="button"
							role="tab"
							id={`ts-term-tab-${i}`}
							aria-selected={active === i}
							aria-controls="ts-term-panel"
							onClick={() => setActive(i)}
							className={cn(
								"flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors",
								i < truesyariahTerms.length - 1 &&
									"border-b border-ts-rule-soft",
								active === i
									? "bg-ts-wash shadow-[inset_3px_0_0_var(--ts-gold)]"
									: "hover:bg-ts-parchment/80",
							)}
						>
							<span className="type-ts-serif text-xl text-ts-ink">
								{t(`terms.items.${item.key}.name`)}
							</span>
							<TsArabic className="text-[22px]">
								{item.arabic}
							</TsArabic>
						</button>
					))}
				</div>
				<div
					id="ts-term-panel"
					role="tabpanel"
					aria-labelledby={`ts-term-tab-${active}`}
					className="flex min-h-[330px] flex-col justify-center px-8 py-10 md:px-10"
				>
					<div className="mb-1.5 flex flex-wrap items-baseline gap-4">
						<h3 className="type-ts-h2 text-[32px] text-ts-ink">
							{t(`terms.items.${term.key}.name`)}
						</h3>
						<TsArabic className="text-[30px]">{term.arabic}</TsArabic>
					</div>
					<div className="mb-5 type-ts-eyebrow text-ts-stone">
						{t(`terms.items.${term.key}.gloss`)}
					</div>
					<p className="mb-[22px] text-[17px] leading-[1.7] text-ts-ink-muted">
						{t(`terms.items.${term.key}.body`)}
					</p>
					<div className="border-t border-ts-rule-soft pt-5">
						<div className="mb-1.5 type-ts-eyebrow text-ts-gold">
							{t("terms.inPlatform")}
						</div>
						<p className="text-[16px] leading-relaxed text-ts-ink-soft">
							{t(`terms.items.${term.key}.system`)}
						</p>
					</div>
				</div>
			</TsReveal>
		</TsSection>
	);
}
