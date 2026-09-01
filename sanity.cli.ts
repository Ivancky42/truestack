import {defineCliConfig} from "sanity/cli";

export default defineCliConfig({
	api: {
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ms6n63j9",
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
	},
});
