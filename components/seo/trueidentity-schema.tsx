import { buildTrueIdentityJsonLd } from "@/lib/trueidentity-seo";

export function TrueIdentitySchema() {
	const schema = buildTrueIdentityJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
