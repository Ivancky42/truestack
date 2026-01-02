import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Truestack | KPKT Services & Fintech Software",
    template: "%s | Truestack",
  },
  description:
    "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
  keywords: [
    "KPKT",
    "money lender Malaysia",
    "KPKT license",
    "digital license conversion",
    "fintech",
    "software development",
    "digital lending",
    "P2P lending",
    "Malaysia",
    "compliance",
    "account management",
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
    title: "Truestack | KPKT Services & Fintech Software",
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
    title: "Truestack | KPKT Services & Fintech Software",
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
