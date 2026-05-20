import { buildTrueKreditJsonLd } from "@/lib/truekredit-seo";

export function TrueKreditSchema() {
	const schema = buildTrueKreditJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
