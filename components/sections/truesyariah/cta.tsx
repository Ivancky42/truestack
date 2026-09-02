"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TsPhoto, TsReveal } from "@/components/sections/truesyariah/primitives";

export function TrueSyariahCta() {
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
								Tell us what you are trying to launch.
							</h2>
							<p className="mt-[18px] mb-8 max-w-[42em] text-[19px] text-ts-mist">
								A free consultation on your entity structure, what
								your committee will want to see, and what the
								licence and platform realistically cost. We like to
								start early, so engineering milestones line up with
								your supervisory timeline.
							</p>
							<div className="flex flex-wrap gap-3">
								<Link
									href="/contact?subject=TrueSyariah"
									className="inline-flex min-h-[50px] items-center gap-2 rounded-[2px] bg-ts-gold-bright px-6 text-[16px] font-semibold text-ts-ink transition-colors hover:bg-ts-gold-hover"
								>
									Book a Free Consultation
									<ArrowRight className="h-4 w-4" />
								</Link>
								<Link
									href="/services/digital-license"
									className="inline-flex min-h-[50px] items-center rounded-[2px] border border-ts-cream/35 px-6 text-[16px] font-medium text-ts-cream transition-colors hover:border-ts-cream"
								>
									Need licensing support?
								</Link>
							</div>
						</div>
						<TsPhoto
							src="/photos/truesyariah-consultation.jpg"
							alt="A financing advisor in a Kuala Lumpur office talking through documents with a client"
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="aspect-4/3 border-0 border-t border-ts-forest lg:aspect-auto lg:h-full lg:min-h-full lg:border-t-0 lg:border-l"
						/>
					</div>
				</TsReveal>
			</div>
		</section>
	);
}
