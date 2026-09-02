"use client";

import Link from "next/link";
import { truesyariahFaq } from "@/lib/truesyariah-faq";
import {
	TsEyebrow,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

function FaqAnswer({ answer }: { answer: string }) {
	const marker = "TrueKredit.";
	const idx = answer.lastIndexOf(marker);
	if (idx === -1) {
		return <>{answer}</>;
	}
	const before = answer.slice(0, idx);
	const after = answer.slice(idx + marker.length);
	return (
		<>
			{before}
			<Link
				href="/truekredit"
				className="text-ts-gold transition-colors hover:text-ts-ink"
			>
				TrueKredit
			</Link>
			.{after}
		</>
	);
}

export function TrueSyariahFaq() {
	return (
		<TsSection id="faq">
			<div className="grid items-start gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-14">
				<TsReveal>
					<TsEyebrow>Questions</TsEyebrow>
					<h2 className="type-ts-h2 text-pretty text-ts-ink">
						Before you commit capital
					</h2>
					<p className="mt-4 type-lede text-ts-ink-soft">
						If your question is not here, ask it in the
						consultation. It is free and we would rather answer it
						early.
					</p>
				</TsReveal>
				<TsReveal delay={0.08} className="border-t border-ts-rule">
					{truesyariahFaq.map((faq) => (
						<div
							key={faq.question}
							className="border-b border-ts-rule py-6"
						>
							<h3 className="type-ts-card text-ts-ink">
								{faq.question}
							</h3>
							<p className="mt-2 text-[16px] leading-relaxed text-ts-ink-soft">
								<FaqAnswer answer={faq.answer} />
							</p>
						</div>
					))}
				</TsReveal>
			</div>
		</TsSection>
	);
}
