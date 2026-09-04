"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
	TsIntro,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahRingfence() {
	const t = useTranslations("TrueSyariah");
	const shariah = t.raw("ringfence.shariah") as string[];
	const conventional = t.raw("ringfence.conventional") as string[];
	return (
		<TsSection id="ringfence">
			<TsIntro
				eyebrow={t("ringfence.eyebrow")}
				title={t("ringfence.title")}
				lede={t("ringfence.lede")}
				className="mb-10"
			/>

			<TsReveal delay={0.08}>
				<div className="grid items-stretch border border-ts-rule bg-ts-paper lg:grid-cols-[1fr_auto_1fr]">
					<div className="px-8 py-8 md:px-9">
						<div className="mb-[18px] type-ts-eyebrow text-ts-stone">
							{t("ringfence.shariahHeading")}
						</div>
						<ul className="flex flex-col gap-3.5">
							{shariah.map((line) => (
								<li
									key={line}
									className="text-[16px] text-ts-ink"
								>
									<span className="mr-2.5 text-ts-gold">
										—
									</span>
									{line}
								</li>
							))}
						</ul>
					</div>

					<div className="relative h-px bg-ts-gold lg:h-auto lg:w-px">
						<span
							className="absolute top-1/2 left-1/2 size-11 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-ts-gold bg-ts-paper"
							aria-hidden
						/>
						<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ts-paper px-0.5 font-mono text-[10px] tracking-[0.1em] text-ts-gold">
							{t("ringfence.sep")}
						</span>
					</div>

					<div className="px-8 py-8 md:px-9">
						<div className="mb-[18px] type-ts-eyebrow text-ts-stone">
							{t("ringfence.conventionalHeading")}
						</div>
						<ul className="flex flex-col gap-3.5">
							{conventional.map((line) => (
								<li
									key={line}
									className="text-[16px] text-ts-ink-soft"
								>
									<span className="mr-2.5 text-ts-line">
										—
									</span>
									{line}
								</li>
							))}
						</ul>
					</div>
				</div>
				<p className="mt-4 type-ui text-ts-ink-faint">
					{t.rich("ringfence.footnote", {
						truekredit: (c) => (
							<Link
								href="/truekredit"
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
