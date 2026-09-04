"use client";

import { useTranslations } from "next-intl";
import { truesyariahGovernance } from "@/lib/truesyariah-content";
import {
	TsEyebrow,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahGovernance() {
	const t = useTranslations("TrueSyariah");
	return (
		<TsSection id="governance" dark>
			<div className="grid items-start gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
				<TsReveal>
					<TsEyebrow onDark>{t("governance.eyebrow")}</TsEyebrow>
					<h2 className="type-ts-h2 text-pretty text-ts-cream">
						{t("governance.title")}
					</h2>
					<p className="mt-4 type-lede text-ts-mist">
						{t("governance.lede1")}
					</p>
					<p className="mt-4 type-lede text-ts-mist">
						{t("governance.lede2")}
					</p>
				</TsReveal>
				<TsReveal
					delay={0.08}
					className="grid gap-px border border-ts-forest bg-ts-forest sm:grid-cols-2"
				>
					{truesyariahGovernance.map((card) => (
						<div key={card.key} className="bg-ts-ink p-7">
							<h3 className="type-ts-h3 text-ts-cream">
								{t(`governance.cards.${card.key}.title`)}
							</h3>
							<p className="mt-2.5 type-ui text-ts-mist">
								{t(`governance.cards.${card.key}.body`)}
							</p>
						</div>
					))}
				</TsReveal>
			</div>
		</TsSection>
	);
}
