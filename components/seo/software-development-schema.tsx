import { buildSoftwareDevelopmentJsonLd } from "@/lib/software-development-seo";

export function SoftwareDevelopmentSchema() {
	const schema = buildSoftwareDevelopmentJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
