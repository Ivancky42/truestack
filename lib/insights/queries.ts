import {defineQuery} from "next-sanity";

const PUBLISHED_POST =
	'_type == "insightPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()';

const POST_SUMMARY_PROJECTION = `{
	_id,
	title,
	"slug": slug.current,
	excerpt,
	category,
	publishedAt,
	"updatedAt": _updatedAt,
	mainImage,
	"tags": coalesce(tags, []),
	"author": {
		"name": coalesce(author.name, "Truestack team"),
		"role": author.role
	},
	"bodyTextLength": length(pt::text(body))
}`;

export const INSIGHT_POSTS_QUERY = defineQuery(
	`*[${PUBLISHED_POST}]
		| order(publishedAt desc) ${POST_SUMMARY_PROJECTION}`,
);

export const INSIGHT_POST_QUERY = defineQuery(
	`*[${PUBLISHED_POST} && slug.current == $slug][0] {
		_id,
		title,
		"slug": slug.current,
		excerpt,
		category,
		publishedAt,
		"updatedAt": _updatedAt,
		mainImage,
		"tags": coalesce(tags, []),
		"author": {
			"name": coalesce(author.name, "Truestack team"),
			"role": author.role
		},
		"bodyTextLength": length(pt::text(body)),
		seoTitle,
		seoDescription,
		body,
		"faq": coalesce(faq, []),
		"relatedProductKeys": coalesce(relatedProducts, [])
	}`,
);

export const INSIGHT_SLUGS_QUERY = defineQuery(
	`*[${PUBLISHED_POST}].slug.current`,
);

export const INSIGHT_SITEMAP_QUERY = defineQuery(
	`*[${PUBLISHED_POST}] {
		"slug": slug.current,
		"updatedAt": _updatedAt
	}`,
);

export const INSIGHT_LLMS_QUERY = defineQuery(
	`*[${PUBLISHED_POST}]
		| order(publishedAt desc) {
			title,
			"slug": slug.current,
			excerpt,
			category
		}`,
);
