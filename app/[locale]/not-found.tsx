import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default async function LocaleNotFound() {
	const t = await getTranslations("NotFound");

	return (
		<section className="border-t bg-background py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="type-h1">{t("title")}</h1>
					<p className="mx-auto mt-4 max-w-2xl type-lede text-muted-foreground">
						{t("body")}
					</p>
					<div className="mt-8">
						<Button asChild size="lg">
							<Link href="/">{t("cta")}</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
