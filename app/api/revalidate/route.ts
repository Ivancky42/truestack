import {parseBody} from "next-sanity/webhook";
import {revalidatePath, revalidateTag} from "next/cache";
import {type NextRequest} from "next/server";
import {insightsTag} from "@/lib/insights/config";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
	const secret = process.env.SANITY_REVALIDATE_SECRET;
	if (!secret) {
		console.error("SANITY_REVALIDATE_SECRET is not configured");
		return Response.json(
			{revalidated: false, message: "Webhook is not configured"},
			{status: 500},
		);
	}

	const {isValidSignature} = await parseBody(request, secret);
	if (isValidSignature !== true) {
		return Response.json(
			{revalidated: false, message: "Invalid webhook signature"},
			{status: 401},
		);
	}

	revalidateTag(insightsTag, "max");
	revalidatePath("/insights", "layout");
	revalidatePath("/llms.txt");
	revalidatePath("/sitemap.xml");

	return Response.json({
		revalidated: true,
		tag: insightsTag,
		now: Date.now(),
	});
}
