"use client";

/**
 * Per-check illustrations previously shown in the Connected checks grid.
 * They are unused on the live page so the section stays short.
 *
 * To restore the old grid: import `TRUEKREDIT_CHECK_VISUALS` in
 * `truekredit-checks.tsx` and render each card's visual above the copy.
 */
import {
	AttestationVisual,
	CTOSVisual,
	DigitalSigningVisual,
	SSMVisual,
	TrueIdentityVisual,
	TrueSightVisual,
	TruesendVisual,
} from "@/components/sections/module-visuals";

export const TRUEKREDIT_CHECK_VISUALS = {
	identity: <TrueIdentityVisual />,
	ssm: <SSMVisual />,
	ctos: <CTOSVisual />,
	truesend: <TruesendVisual />,
	truesight: <TrueSightVisual />,
	attestation: <AttestationVisual />,
	signing: <DigitalSigningVisual />,
} as const;

/** Combined illustration for the Connected checks section. */
export function TrueKreditChecksCollage() {
	return (
		<div className="grid overflow-hidden rounded-2xl border bg-card shadow-sm sm:grid-cols-2 sm:grid-rows-2 lg:aspect-[16/9]">
			<div className="min-h-80 border-b sm:row-span-2 sm:border-r sm:border-b-0">
				<TrueIdentityVisual />
			</div>
			<div className="min-h-52 border-b">
				<SSMVisual />
			</div>
			<div className="min-h-52">
				<CTOSVisual />
			</div>
		</div>
	);
}
