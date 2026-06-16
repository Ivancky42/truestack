import { buildContactJsonLd } from "@/lib/contact-seo";

export function ContactSchema() {
	const schema = buildContactJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
