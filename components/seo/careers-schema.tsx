import { jobRoles } from "@/lib/careers-data";
import { buildCareersJsonLd } from "@/lib/careers-seo";

export function CareersSchema() {
  const schema = buildCareersJsonLd(jobRoles);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
