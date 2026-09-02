"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { truesyariahStages } from "@/lib/truesyariah-content";
import {
	TsIntro,
	TsPhoto,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahJourney() {
	const [active, setActive] = useState(1);
	const stage = truesyariahStages[active];

	return (
		<TsSection id="journey">
			<div className="mb-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
				<TsIntro
					eyebrow="The licensing path"
					title="Four stages, in the order the regulator expects them."
					lede="Shariah-based lending has its own approval pathway, and in practice its own entity. Most of the delay in an application is not the regulator: it is contracts drafted before anyone asked the committee."
				/>
				<TsReveal delay={0.08}>
					<TsPhoto
						src="/photos/truesyariah-licence-journey.jpg"
						alt="Two professionals at a Malaysian office table reviewing licensing documents together"
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="aspect-5/4"
					/>
				</TsReveal>
			</div>

			<TsReveal delay={0.08}>
				<div
					className="grid border-t border-ts-ink border-l border-l-ts-rule sm:grid-cols-2 lg:grid-cols-4"
					role="tablist"
					aria-label="Licensing stages"
				>
					{truesyariahStages.map((s, i) => (
						<button
							key={s.n}
							type="button"
							role="tab"
							aria-selected={active === i}
							id={`ts-stage-tab-${i}`}
							aria-controls="ts-stage-panel"
							onClick={() => setActive(i)}
							className={cn(
								"border-r border-b border-ts-rule p-6 text-left transition-colors",
								active === i
									? "bg-ts-paper shadow-[inset_0_-2px_0_var(--ts-gold)]"
									: "bg-transparent hover:bg-ts-paper/60",
							)}
						>
							<div className="mb-4 flex items-baseline justify-between">
								<span className="font-mono text-xs tracking-[0.12em] text-ts-gold">
									STAGE {s.n}
								</span>
								<span className="font-mono text-xs text-ts-stone">
									{s.label}
								</span>
							</div>
							<h3 className="type-ts-h3 text-ts-ink">{s.title}</h3>
							<p className="mt-2 type-ui text-ts-ink-soft">
								{s.summary}
							</p>
						</button>
					))}
				</div>
				<div
					id="ts-stage-panel"
					role="tabpanel"
					aria-labelledby={`ts-stage-tab-${active}`}
					className="flex items-start gap-5 border border-t-0 border-ts-rule bg-ts-paper px-6 py-6 md:px-8"
				>
					<span
						className="mt-0.5 flex size-[34px] shrink-0 items-center justify-center border border-ts-gold rotate-45"
						aria-hidden
					>
						<span className="-rotate-45 font-mono text-xs text-ts-gold">
							{stage.n}
						</span>
					</span>
					<div>
						<div className="mb-1 type-ts-serif text-[19px] text-ts-ink">
							{stage.title}
						</div>
						<p className="max-w-[64em] text-[16px] text-ts-ink-soft">
							{stage.detail}
						</p>
					</div>
				</div>
			</TsReveal>
		</TsSection>
	);
}
