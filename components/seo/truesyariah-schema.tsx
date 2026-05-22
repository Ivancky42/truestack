import { buildTrueSyariahJsonLd } from "@/lib/truesyariah-seo";

export function TrueSyariahSchema() {
	const schema = buildTrueSyariahJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
