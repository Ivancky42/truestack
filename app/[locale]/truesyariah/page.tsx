import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { TrueSyariahHero } from "@/components/sections/truesyariah/hero";
import { TrueSyariahJourney } from "@/components/sections/truesyariah/journey";
import { TrueSyariahSystem } from "@/components/sections/truesyariah/system";
import { TrueSyariahGovernance } from "@/components/sections/truesyariah/governance";
import { TrueSyariahRingfence } from "@/components/sections/truesyariah/ringfence";
import { TrueSyariahTerms } from "@/components/sections/truesyariah/terms";
import { TrueSyariahReceive } from "@/components/sections/truesyariah/receive";
import { TrueSyariahFaq } from "@/components/sections/truesyariah/faq";
import { TrueSyariahCta } from "@/components/sections/truesyariah/cta";
import { CrossLinkStrip } from "@/components/shared/cross-link-strip";

export default async function TrueSyariahPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<TrueSyariahHero />
			<CrossLinkStrip
				id="draft-kpkt-rules"
				ariaLabel="Upcoming KPKT Shariah credit rules"
				lead="Following the draft KPKT rules?"
				body="The CCA 2025 Garis Panduan sets what a Shariah credit system has to evidence — governance, advisor, audit and iDEAL."
				href="/insights/shariah-credit-system-requirements-cca-2025-draft"
				cta="Read the draft requirements"
				accent="truesyariah"
			/>
			<TrueSyariahJourney />
			<TrueSyariahSystem />
			<TrueSyariahGovernance />
			<TrueSyariahRingfence />
			<TrueSyariahTerms />
			<TrueSyariahReceive />
			<TrueSyariahFaq />
			<TrueSyariahCta />
		</>
	);
}
