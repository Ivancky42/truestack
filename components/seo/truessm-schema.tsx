import { buildTrueSsmJsonLd } from "@/lib/truessm-seo";

export function TrueSsmSchema() {
	const schema = buildTrueSsmJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
