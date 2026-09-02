import { ConsultationCta } from "@/components/sections/consultation-cta";
import { APPLY_EMAIL, applyMailto, howToApply } from "@/lib/careers-data";

export function CareersCta() {
	return (
		<ConsultationCta
			heading="Send us your CV."
			body={howToApply}
			primary={{
				href: applyMailto(),
				label: APPLY_EMAIL,
			}}
			secondary={{
				href: "/about",
				label: "Read about the company",
			}}
		/>
	);
}
