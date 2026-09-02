"use client";

import { truesyariahGovernance } from "@/lib/truesyariah-content";
import {
	TsEyebrow,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahGovernance() {
	return (
		<TsSection id="governance" dark>
			<div className="grid items-start gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
				<TsReveal>
					<TsEyebrow onDark>Shariah governance</TsEyebrow>
					<h2 className="type-ts-h2 text-pretty text-ts-cream">
						Your committee should be able to check the system, not
						take your word for it.
					</h2>
					<p className="mt-4 type-lede text-ts-mist">
						Shariah compliance is not a statement in a policy
						document. It is whether a specific disbursement, on a
						specific date, followed the sequence the committee
						approved — and whether anyone can still prove it two
						years later.
					</p>
					<p className="mt-4 type-lede text-ts-mist">
						TrueSyariah is built so the answer is always in the
						system. We work alongside your appointed advisor and can
						introduce partner advisors we have worked with before,
						but the rulings are always theirs.
					</p>
				</TsReveal>
				<TsReveal
					delay={0.08}
					className="grid gap-px border border-ts-forest bg-ts-forest sm:grid-cols-2"
				>
					{truesyariahGovernance.map((card) => (
						<div key={card.title} className="bg-ts-ink p-7">
							<h3 className="type-ts-h3 text-ts-cream">
								{card.title}
							</h3>
							<p className="mt-2.5 type-ui text-ts-mist">
								{card.body}
							</p>
						</div>
					))}
				</TsReveal>
			</div>
		</TsSection>
	);
}
