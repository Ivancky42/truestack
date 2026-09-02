"use client";

import type { LucideIcon } from "lucide-react";
import {
	CalendarClock,
	ClipboardCheck,
	ClipboardList,
	FilePenLine,
	FolderOpen,
	Gem,
	PhoneCall,
	Scale,
} from "lucide-react";
import {
	truesyariahLifecycle,
	truesyariahModules,
	truesyariahRecordFields,
} from "@/lib/truesyariah-content";
import { cn } from "@/lib/utils";
import {
	TsArabic,
	TsIntro,
	TsReveal,
	TsSection,
} from "@/components/sections/truesyariah/primitives";

const MODULE_ICONS: Record<
	(typeof truesyariahModules)[number]["title"],
	LucideIcon
> = {
	"Customer & file": FolderOpen,
	Origination: ClipboardList,
	"Commodity trading": Gem,
	"Schedules & profit": CalendarClock,
	"Late charge engine": Scale,
	Collections: PhoneCall,
	"Documents & signing": FilePenLine,
	"Reporting & audit packs": ClipboardCheck,
};

export function TrueSyariahSystem() {
	return (
		<TsSection id="system">
			<TsIntro
				eyebrow="Sistem pengurusan pembiayaan"
				title="A complete financing management system, Shariah in the engine."
				lede="Everything a serious operator needs — origination, assessment, disbursement, schedules, collections, documents, reporting — with the Shariah mechanics built into the core rather than bolted on. Not a conventional system with Islamic labels applied to it."
				className="mb-11"
			/>

			<div className="mb-14 grid items-start gap-12 lg:grid-cols-[0.54fr_0.46fr] lg:gap-[52px]">
				<TsReveal>
					<div className="mb-6 type-ts-eyebrow text-ts-stone">
						Lifecycle of a facility
					</div>
					<div className="border-l border-ts-rule">
						{truesyariahLifecycle.map((step) => (
							<div
								key={step.title}
								className={cn(
									"relative pl-[30px]",
									"final" in step && step.final
										? "pb-0"
										: "pb-[26px]",
								)}
							>
								<span
									className={cn(
										"absolute top-2 -left-[5px] size-2.5 rotate-45",
										"final" in step && step.final
											? "bg-ts-ink"
											: "bg-ts-gold",
									)}
									aria-hidden
								/>
								<h3 className="type-ts-card text-ts-ink">
									{step.title}
								</h3>
								<p className="mt-1 type-ui text-ts-ink-soft">
									{step.body}
								</p>
							</div>
						))}
					</div>
				</TsReveal>

				<TsReveal delay={0.08}>
					<div className="border border-ts-rule bg-ts-paper">
						<div className="border-b border-ts-rule-soft px-7 py-6">
							<div className="mb-1.5 type-ts-eyebrow text-ts-stone">
								On every facility record
							</div>
							<p className="type-ui text-ts-ink-soft">
								The fields a conventional system has nowhere to
								put.
							</p>
						</div>
						<div className="px-7 pt-1.5 pb-5">
							{truesyariahRecordFields.map((field, i) => (
								<div
									key={field.title}
									className={cn(
										"flex items-baseline justify-between gap-4 py-4",
										i < truesyariahRecordFields.length - 1 &&
											"border-b border-ts-rule-faint",
									)}
								>
									<div>
										<div className="text-[16px] font-medium text-ts-ink">
											{field.title}
										</div>
										<div className="text-sm text-ts-ink-faint">
											{field.body}
										</div>
									</div>
									<TsArabic className="text-[17px]">
										{field.arabic}
									</TsArabic>
								</div>
							))}
						</div>
					</div>
				</TsReveal>
			</div>

			<TsReveal delay={0.1}>
				<div className="mb-5 type-ts-eyebrow text-ts-stone">
					Modules
				</div>
				<div className="mb-[22px] grid gap-px border border-ts-rule bg-ts-rule sm:grid-cols-2 lg:grid-cols-4">
					{truesyariahModules.map((mod) => {
						const Icon = MODULE_ICONS[mod.title];
						return (
							<div key={mod.title} className="bg-ts-paper p-6">
								<span
									className="mb-4 flex size-9 items-center justify-center border border-ts-gold/30 bg-ts-gold/10"
									aria-hidden
								>
									<Icon className="size-4 text-ts-gold" />
								</span>
								<h3 className="type-ts-card text-ts-ink">
									{mod.title}
								</h3>
								<p className="mt-2 text-sm text-ts-ink-soft">
									{mod.body}
								</p>
							</div>
						);
					})}
				</div>

				<div className="flex items-start gap-5 border border-ts-rule bg-ts-paper px-6 py-6 md:px-8">
					<span
						className="mt-0.5 flex size-[34px] shrink-0 items-center justify-center border border-ts-gold rotate-45"
						aria-hidden
					>
						<span className="-rotate-45 font-mono text-[11px] text-ts-gold">
							01
						</span>
					</span>
					<div>
						<div className="mb-1 type-ts-serif text-[19px] text-ts-ink">
							Dedicated deployment only
						</div>
						<p className="max-w-[64em] text-[16px] text-ts-ink-soft">
							There is no shared tier. Every operator gets an
							isolated AWS Malaysia account, its own database and
							its own secrets vault, because a Shariah book cannot
							sit on infrastructure shared with conventional
							lending. The separation has to be real, not a filter
							on a query.
						</p>
					</div>
				</div>
			</TsReveal>
		</TsSection>
	);
}
