import { getTranslations } from "next-intl/server";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { APPLY_EMAIL, applyMailto } from "@/lib/careers-data";

export async function CareersCta() {
	const t = await getTranslations("Careers");
	return (
		<ConsultationCta
			heading={t("cta.heading")}
			body={t("cta.body")}
			primary={{
				href: applyMailto(),
				label: APPLY_EMAIL,
			}}
			secondary={{
				href: "/about",
				label: t("cta.secondary"),
			}}
		/>
	);
}
