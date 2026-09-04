import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";
import {
	Rethink_Sans,
	Inter,
	Geist_Mono,
	Newsreader,
	Noto_Naskh_Arabic,
	Noto_Sans_SC,
} from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { WebSiteSchema } from "@/components/seo/website-schema";
import { routing } from "@/i18n/routing";
import { htmlLang, resolveAppLocale } from "@/lib/i18n/config";
import { pickMessages } from "@/lib/i18n/messages";
import { ogLocaleFor } from "@/lib/i18n/seo";
import {
	brandThemeColor,
	defaultOgImage,
	defaultTwitterCard,
	siteName,
	siteUrl,
} from "@/lib/seo-defaults";
import "../globals.css";

const rethinkSans = Rethink_Sans({
	variable: "--font-rethink-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

const newsreader = Newsreader({
	variable: "--font-newsreader",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
	variable: "--font-naskh",
	subsets: ["arabic"],
	weight: ["400", "500", "600"],
	display: "swap",
});

const notoSansSc = Noto_Sans_SC({
	variable: "--font-noto-sc",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	preload: false,
});

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}


export const viewport: Viewport = {
	themeColor: brandThemeColor,
};

const rootMetadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Truestack - KPKT Services & Fintech Software",
		template: "%s - Truestack",
	},
	description:
		"KPKT account management, online money lending licence / e-Lending, and money lender software Malaysia for licensed money lenders. Book a free consultation.",
	keywords: [
		"KPKT license Malaysia",
		"online money lending licence",
		"e-Lending",
		"pemberian pinjaman wang dalam talian",
		"KPKT digital licence Malaysia",
		"KPKT account management",
		"pembaharuan lesen PPW",
		"permit iklan",
		"money lender Malaysia",
		"money lending management system",
		"money lender software Malaysia",
		"lending platform Malaysia",
		"digital license conversion Malaysia",
		"licensed money lender software",
		"fintech software Malaysia",
		"fintech platform development Malaysia",
		"e-KYC Malaysia",
		"MyKad OCR",
		"TrueIdentity",
		"TrueKredit",
		"TrueSyariah",
		"TrueP2P",
		"P2P lending platform Malaysia",
		"P2P platform development Malaysia",
		"digital lending platform Malaysia",
		"KPKT PPW loan management",
		"money lender compliance Malaysia",
		"Lampiran A Lampiran B Lampiran B1",
		"iDEAL KPKT",
		"sistem iDEAL",
		"Jadual J Jadual K",
		"PDPA compliant KYC",
		"free fintech consultation Malaysia",
		"free KPKT consultation",
	],
	authors: [{ name: siteName }],
	icons: {
		icon: "/truestack-favicon.png",
		shortcut: "/truestack-favicon.png",
		apple: "/truestack-favicon.png",
	},
	openGraph: {
		type: "website",
		locale: "en_MY",
		siteName,
		title: "Truestack - KPKT Services & Fintech Software",
		description:
			"KPKT account management, online money lending licence / e-Lending, and money lender software Malaysia for licensed money lenders. Book a free consultation.",
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: "Truestack - KPKT Services & Fintech Software",
		description:
			"KPKT account management, online money lending licence / e-Lending, and money lender software Malaysia for licensed money lenders. Book a free consultation.",
		images: [defaultOgImage.url],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale: raw } = await params;
	const locale = resolveAppLocale(raw);
	setRequestLocale(locale);
	const t = await getTranslations({ locale, namespace: "Common" });
	const title = t("siteTitle");
	const description = t("siteDescription");
	return {
		...rootMetadata,
		title: { default: title, template: "%s - Truestack" },
		description,
		openGraph: {
			...rootMetadata.openGraph,
			locale: ogLocaleFor(locale),
			title,
			description,
		},
		twitter: { ...rootMetadata.twitter, title, description },
	};
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale: raw } = await params;
	if (!hasLocale(routing.locales, raw)) {
		notFound();
	}
	const locale = resolveAppLocale(raw);
	setRequestLocale(locale);

	const messages = await getMessages();
	const lang = htmlLang[locale];

	return (
		<html
			lang={lang}
			className={locale === "zh" ? notoSansSc.variable : undefined}
		>
			<body
				className={`${rethinkSans.variable} ${inter.variable} ${geistMono.variable} ${newsreader.variable} ${notoNaskh.variable} font-sans antialiased`}
			>
				<NextIntlClientProvider
					locale={locale}
					messages={pickMessages(
						messages,
						"Common",
						"Header",
						"Footer",
						"Banner",
						"NotFound",
					)}
				>
					<OrganizationSchema />
					<WebSiteSchema />
					<Header />
					<main className="min-h-[calc(100vh-4rem)]">{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
