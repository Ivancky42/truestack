import {createImageUrlBuilder} from "@sanity/image-url";
import {createClient} from "next-sanity";
import {
	sanityApiVersion,
	sanityDataset,
	sanityProjectId,
} from "@/lib/insights/config";
import type {SanityImage} from "@/lib/insights/types";

export const sanityClient = createClient({
	projectId: sanityProjectId,
	dataset: sanityDataset,
	apiVersion: sanityApiVersion,
	perspective: "published",
	// API (not CDN) so webhook revalidation is not served stale CDN responses.
	useCdn: false,
	stega: false,
});

const builder = createImageUrlBuilder(sanityClient);

export function imageUrl(source: SanityImage) {
	return builder.image(source);
}
