"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { truesyariahReceive } from "@/lib/truesyariah-content";
import {
	TsIntro,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahReceive() {
	const t = useTranslations("TrueSyariah");
	return (
		<TsSection>
			<TsIntro
				eyebrow={t("receive.eyebrow")}
				title={t("receive.title")}
				className="mb-9"
			/>
			<TsReveal delay={0.08}>
				<div className="grid gap-px border border-ts-rule bg-ts-rule sm:grid-cols-2 lg:grid-cols-3">
					{truesyariahReceive.map((item) => (
						<div key={item.key} className="bg-ts-paper p-[30px]">
							<h3 className="type-ts-h3 text-ts-ink">
								{t(`receive.items.${item.key}.title`)}
							</h3>
							<p className="mt-2 type-ui text-ts-ink-soft">
								{t(`receive.items.${item.key}.body`)}
							</p>
						</div>
					))}
				</div>
				<p className="mt-[18px] type-ui text-ts-ink-faint">
					{t.rich("receive.footnote", {
						p2p: (c) => (
							<Link
								href="/services/p2p-software-development"
								className="text-ts-gold transition-colors hover:text-ts-ink"
							>
								{c}
							</Link>
						),
					})}
				</p>
			</TsReveal>
		</TsSection>
	);
}
