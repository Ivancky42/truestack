import { getLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { buildContactJsonLd } from "@/lib/contact-seo";

export async function ContactSchema() {
	const locale = resolveAppLocale(await getLocale());
	const schema = buildContactJsonLd(locale);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
