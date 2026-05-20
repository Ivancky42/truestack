import { buildAboutJsonLd } from "@/lib/about-seo";

export function AboutSchema() {
	const schema = buildAboutJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
