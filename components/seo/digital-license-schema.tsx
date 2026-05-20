import { buildDigitalLicenseJsonLd } from "@/lib/digital-license-seo";

export function DigitalLicenseSchema() {
	const schema = buildDigitalLicenseJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
