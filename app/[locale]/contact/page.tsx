import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import Image from "next/image";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { CONTACT_KEYWORDS, CONTACT_PAGE_PATH } from "@/lib/contact-seo";
import { Hero } from "@/components/sections/hero";
import { ContactCards } from "@/components/sections/contact-cards";
import { ContactPageBackground } from "@/components/sections/contact-page-background";
import { ContactSchema } from "@/components/seo/contact-schema";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({ locale: resolved, namespace: "Contact" });
	const pageMetadata: Metadata = {
		title: t("meta.title"),
		description: t("meta.description"),
		keywords: [...CONTACT_KEYWORDS],
		alternates: { canonical: CONTACT_PAGE_PATH },
		openGraph: {
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			url: CONTACT_PAGE_PATH,
			type: "website",
			locale: "en_MY",
			siteName,
			images: [defaultOgImage],
		},
		twitter: {
			card: defaultTwitterCard,
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			images: [defaultOgImage.url],
		},
	};
	return localizePageMetadata(pageMetadata, CONTACT_PAGE_PATH, resolved);
}

export default async function ContactPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("Contact");
	return (
		<div className="hero-under-nav relative isolate overflow-hidden">
			<ContactPageBackground />
			<ContactSchema />
			<PageMessages namespaces={["Contact"]}>
				<Hero
					title={t("hero.title")}
					subtitle={t("hero.subtitle")}
					compact
					showBackground={false}
					underNav={false}
				/>

				<section className="relative pb-16">
					<div className="mx-auto max-w-6xl px-6">
						<div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
							<ContactCards />
							<div className="relative aspect-3/4 overflow-hidden rounded-3xl border shadow-sm">
								<Image
									src="/photos/contact-desk-call.jpg"
									alt={t("imageAlt")}
									fill
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</section>
			</PageMessages>
		</div>
	);
}
