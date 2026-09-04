"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { TsPhoto, TsReveal } from "@/components/sections/truesyariah/primitives";

export function TrueSyariahCta() {
	const t = useTranslations("TrueSyariah");
	const tCommon = useTranslations("Common");
	return (
		<section className="bg-ts-parchment px-6 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<TsReveal>
					<div
						data-nav-theme="dark"
						className="grid overflow-hidden bg-ts-ink text-ts-cream lg:grid-cols-[1.08fr_0.92fr]"
					>
						<div className="px-8 py-16 md:px-[52px] md:py-16">
							<h2 className="type-ts-h2 text-pretty text-ts-cream">
								{t("cta.heading")}
							</h2>
							<p className="mt-[18px] mb-8 max-w-[42em] text-[19px] text-ts-mist">
								{t("cta.body")}
							</p>
							<div className="flex flex-wrap gap-3">
								<Link
									href="/contact?subject=TrueSyariah"
									className="inline-flex min-h-[50px] items-center gap-2 rounded-[2px] bg-ts-gold-bright px-6 text-[16px] font-semibold text-ts-ink transition-colors hover:bg-ts-gold-hover"
								>
									{tCommon("bookConsultation")}
									<ArrowRight className="h-4 w-4" />
								</Link>
								<Link
									href="/services/digital-license"
									className="inline-flex min-h-[50px] items-center rounded-[2px] border border-ts-cream/35 px-6 text-[16px] font-medium text-ts-cream transition-colors hover:border-ts-cream"
								>
									{t("cta.secondary")}
								</Link>
							</div>
						</div>
						<TsPhoto
							src="/photos/truesyariah-consultation.jpg"
							alt={t("cta.photoAlt")}
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="aspect-4/3 border-0 border-t border-ts-forest lg:aspect-auto lg:h-full lg:min-h-full lg:border-t-0 lg:border-l"
						/>
					</div>
				</TsReveal>
			</div>
		</section>
	);
}
