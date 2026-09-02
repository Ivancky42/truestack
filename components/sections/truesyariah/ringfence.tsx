"use client";

import Link from "next/link";
import { truesyariahRingfence } from "@/lib/truesyariah-content";
import {
	TsIntro,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahRingfence() {
	return (
		<TsSection id="ringfence">
			<TsIntro
				eyebrow="Ring-fencing"
				title="If you also lend conventionally, the two books never touch."
				lede="Commingling is the fastest way to lose a Shariah position, and it usually happens by accident — one shared database, one shared income account, one report that adds both together."
				className="mb-10"
			/>

			<TsReveal delay={0.08}>
				<div className="grid items-stretch border border-ts-rule bg-ts-paper lg:grid-cols-[1fr_auto_1fr]">
					<div className="px-8 py-8 md:px-9">
						<div className="mb-[18px] type-ts-eyebrow text-ts-stone">
							Shariah book
						</div>
						<ul className="flex flex-col gap-3.5">
							{truesyariahRingfence.shariah.map((line) => (
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
							SEP
						</span>
					</div>

					<div className="px-8 py-8 md:px-9">
						<div className="mb-[18px] type-ts-eyebrow text-ts-stone">
							Conventional book
						</div>
						<ul className="flex flex-col gap-3.5">
							{truesyariahRingfence.conventional.map((line) => (
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
					Group-level consolidation stays possible. What is not
					possible is a single record, account or report that mixes
					the two. Conventional books run on{" "}
					<Link
						href="/truekredit"
						className="text-ts-gold transition-colors hover:text-ts-ink"
					>
						TrueKredit™
					</Link>
					.
				</p>
			</TsReveal>
		</TsSection>
	);
}
