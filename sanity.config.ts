import {defineConfig} from "sanity";
import {schemaTypes} from "./sanity/schemaTypes";

export default defineConfig({
	name: "truestack",
	title: "Truestack Insights",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ms6n63j9",
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
	schema: {
		types: schemaTypes,
	},
});
