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
    default: "Truestack | Fintech Software Agency",
    template: "%s | Truestack",
  },
  description:
    "We build digital lending platforms, payment systems, and financial applications from the ground up.",
  keywords: [
    "fintech",
    "software development",
    "digital lending",
    "payment systems",
    "Malaysia",
    "software agency",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "AWS",
  ],
  authors: [{ name: "Truestack" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Truestack",
    title: "Truestack | Fintech Software Agency",
    description:
      "We build digital lending platforms, payment systems, and financial applications from the ground up.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truestack | Fintech Software Agency",
    description:
      "We build digital lending platforms, payment systems, and financial applications from the ground up.",
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
