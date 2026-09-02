"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TsArabic } from "@/components/sections/truesyariah/primitives";

type TrueSyariahHeroVisualProps = {
	animateOnMount?: boolean;
	className?: string;
};

function AdminBook() {
	return (
		<div className="border border-ts-line bg-ts-paper shadow-[0_22px_44px_-26px] shadow-ts-ink/35">
			<div className="flex items-center gap-2.5 border-b border-ts-ink/70 bg-ts-ink px-3.5 py-2">
				<span className="size-1.5 rounded-full bg-ts-forest" aria-hidden />
				<span className="size-1.5 rounded-full bg-ts-forest" aria-hidden />
				<span className="size-1.5 rounded-full bg-ts-forest" aria-hidden />
				<span className="flex-1 text-center font-mono text-[10px] tracking-[0.06em] text-ts-chrome">
					admin.truesyariah
				</span>
			</div>

			<div className="px-[22px] pb-[22px] pt-5">
				<div className="mb-[18px] flex items-start justify-between gap-4">
					<div>
						<div className="mb-0.5 type-ts-eyebrow text-ts-gold">
							Buku pembiayaan
						</div>
						<div className="type-ts-serif text-[19px] leading-tight text-ts-ink">
							Portfolio overview
						</div>
					</div>
					<span className="shrink-0 border border-ts-gold px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-ts-gold uppercase">
						Tawarruq
					</span>
				</div>

				<div className="mb-4 grid grid-cols-3 gap-px border border-ts-rule-soft bg-ts-rule-soft">
					{[
						{ label: "Outstanding", value: "RM 2.4M" },
						{ label: "Active", value: "186" },
						{ label: "Collected", value: "91%" },
					].map((k) => (
						<div key={k.label} className="bg-ts-parchment px-3.5 py-3">
							<div className="mb-1 text-[11px] text-ts-ink-faint">
								{k.label}
							</div>
							<div className="type-ts-serif text-xl leading-none text-ts-ink">
								{k.value}
							</div>
						</div>
					))}
				</div>

				<div className="mb-4 grid grid-cols-2 gap-px border border-ts-rule-soft bg-ts-rule-soft">
					<div className="border-t-2 border-ts-gold bg-ts-paper px-4 py-3.5">
						<div className="mb-1.5 flex items-baseline gap-2">
							<span className="text-[13px] font-semibold text-ts-ink">
								Ta&apos;widh
							</span>
							<TsArabic className="text-sm">تعويض</TsArabic>
						</div>
						<div className="mb-1 type-ts-serif text-[22px] leading-none text-ts-ink">
							RM 12,480
						</div>
						<div className="text-[11px] text-ts-ink-faint">
							Compensation · recognised as income
						</div>
					</div>
					<div className="border-t-2 border-ts-ink bg-ts-paper px-4 py-3.5">
						<div className="mb-1.5 flex items-baseline gap-2">
							<span className="text-[13px] font-semibold text-ts-ink">
								Gharamah
							</span>
							<TsArabic className="text-sm">غرامة</TsArabic>
						</div>
						<div className="mb-1 type-ts-serif text-[22px] leading-none text-ts-ink">
							RM 8,210
						</div>
						<div className="text-[11px] text-ts-ink-faint">
							Penalty · held for charity
						</div>
					</div>
				</div>

				<div className="flex items-center gap-2.5 border border-ts-rule-soft bg-ts-parchment px-3.5 py-2.5">
					<span
						className="size-[22px] shrink-0 border border-ts-gold rotate-45"
						aria-hidden
					/>
					<span className="text-xs text-ts-ink-muted">
						Tawarruq commodity trade settled · crude palm oil · 14:32
					</span>
				</div>
			</div>
		</div>
	);
}

function CustomerPhone() {
	return (
		<div className="border border-ts-line bg-ts-ink p-1.5 shadow-[0_18px_34px_-18px] shadow-ts-ink/50">
			<div className="bg-ts-paper px-2.5 pb-2.5 pt-2">
				<div className="mb-2.5 flex items-center justify-between">
					<div>
						<div className="text-[8px] leading-tight text-ts-stone">
							Assalamualaikum
						</div>
						<div className="text-[11px] leading-tight font-semibold text-ts-ink">
							Nur Aisyah
						</div>
					</div>
					<span
						className="size-4 border border-ts-gold rotate-45"
						aria-hidden
					/>
				</div>
				<div className="mb-2 bg-ts-ink px-3 py-2.5">
					<div className="mb-0.5 text-[8px] text-ts-chrome">
						Baki pembiayaan
					</div>
					<div className="mb-1.5 type-ts-serif text-[17px] leading-none text-ts-cream">
						RM 6,420
					</div>
					<div className="h-0.5 bg-ts-cream/20">
						<div className="h-0.5 w-[55%] bg-ts-gold-bright" />
					</div>
					<div className="mt-1.5 text-[8px] text-ts-chrome">
						Next 12 Apr · RM 890
					</div>
				</div>
				<div className="grid grid-cols-2 gap-1.5">
					<div className="border border-ts-rule-soft px-1.5 py-1.5">
						<div className="text-[8px] font-semibold text-ts-ink">
							Pay now
						</div>
						<div className="text-[7px] text-ts-stone">DuitNow</div>
					</div>
					<div className="border border-ts-rule-soft px-1.5 py-1.5">
						<div className="text-[8px] font-semibold text-ts-ink">
							Aqad
						</div>
						<div className="text-[7px] text-ts-stone">Tawarruq</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/** Parchment admin book + customer app — Islamic product visual language. */
export function TrueSyariahHeroVisual({
	animateOnMount = false,
	className,
}: TrueSyariahHeroVisualProps) {
	return (
		<motion.div
			className={cn("relative mx-auto w-full max-w-[520px]", className)}
			initial={{ opacity: 0, y: 16 }}
			{...(animateOnMount
				? { animate: { opacity: 1, y: 0 } }
				: {
						whileInView: { opacity: 1, y: 0 },
						viewport: { once: true, margin: "-40px" },
					})}
			transition={{ duration: 0.6, delay: animateOnMount ? 0.12 : 0.1 }}
		>
			<div
				className="pointer-events-none absolute top-1/2 left-1/2 size-[268px] -translate-x-1/2 -translate-y-1/2 border border-ts-rule-soft max-sm:hidden"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute top-1/2 left-[52%] size-[360px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-ts-line max-sm:hidden"
				aria-hidden
			/>

			<div className="relative pb-16">
				<div className="mr-[104px] max-sm:mr-16">
					<AdminBook />
				</div>
				<div className="absolute right-0 bottom-0 w-[126px]">
					<CustomerPhone />
				</div>
			</div>
		</motion.div>
	);
}
