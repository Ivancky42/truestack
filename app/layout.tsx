import type { Metadata } from "next";
import { Rethink_Sans, Inter, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { WebSiteSchema } from "@/components/seo/website-schema";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

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
  metadataBase: new URL(baseUrl),
  title: {
    default: "Truestack - KPKT Services & Fintech Software",
    template: "%s - Truestack",
  },
  description:
    "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
  keywords: [
    "KPKT license Malaysia",
    "KPKT account management",
    "money lender Malaysia",
    "digital license conversion Malaysia",
    "licensed money lender software",
    "fintech software Malaysia",
    "e-KYC Malaysia",
    "MyKad OCR",
    "TrueIdentity",
    "TrueKredit",
    "P2P lending platform Malaysia",
    "digital lending platform Malaysia",
    "KPKT PPW loan management",
    "money lender compliance Malaysia",
    "Lampiran A Lampiran B1",
    "PDPA compliant KYC",
  ],
  authors: [{ name: "Truestack" }],
  icons: {
    icon: "/truestack-favicon.png",
    shortcut: "/truestack-favicon.png",
    apple: "/truestack-favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Truestack",
    title: "Truestack - KPKT Services & Fintech Software",
    description:
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
    images: [
      {
        url: "/truestack-favicon.png",
        width: 512,
        height: 512,
        alt: "Truestack",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Truestack - KPKT Services & Fintech Software",
    description:
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
    images: ["/truestack-favicon.png"],
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
