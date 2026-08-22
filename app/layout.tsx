import type { Metadata } from "next";
import { Rethink_Sans, Inter, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { WebSiteSchema } from "@/components/seo/website-schema";
import {
  defaultOgImage,
  defaultTwitterCard,
  siteName,
  siteUrl,
} from "@/lib/seo-defaults";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethinkSans.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
