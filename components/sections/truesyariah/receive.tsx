"use client";

import { Link } from "@/i18n/navigation";
import { truesyariahReceive } from "@/lib/truesyariah-content";
import {
	TsIntro,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

export function TrueSyariahReceive() {
	return (
		<TsSection>
			<TsIntro
				eyebrow="What you receive"
				title="A platform, and the parts that make it lend."
				className="mb-9"
			/>
			<TsReveal delay={0.08}>
				<div className="grid gap-px border border-ts-rule bg-ts-rule sm:grid-cols-2 lg:grid-cols-3">
					{truesyariahReceive.map((item) => (
						<div key={item.title} className="bg-ts-paper p-[30px]">
							<h3 className="type-ts-h3 text-ts-ink">
								{item.title}
							</h3>
							<p className="mt-2 type-ui text-ts-ink-soft">
								{item.body}
							</p>
						</div>
					))}
				</div>
				<p className="mt-[18px] type-ui text-ts-ink-faint">
					One vendor and one contract across all of it, which is also
					why the integrations cost you nothing extra. Pursuing
					SC-regulated peer-to-peer financing instead? See{" "}
					<Link
						href="/services/p2p-software-development"
						className="text-ts-gold transition-colors hover:text-ts-ink"
					>
						TrueP2P™
					</Link>
					.
				</p>
			</TsReveal>
		</TsSection>
	);
}
