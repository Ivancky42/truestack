import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrueIdentity™ — e-KYC Verification for Malaysia",
  description:
    "Programmatic e-KYC verification for Malaysian fintechs. MyKad OCR, liveness detection, biometric matching — verify customers in seconds, not days.",
  keywords: [
    "e-KYC Malaysia",
    "identity verification",
    "MyKad OCR",
    "liveness detection",
    "biometric matching",
    "TrueIdentity",
    "KYC API",
    "fintech Malaysia",
    "PDPA compliant",
  ],
  openGraph: {
    title: "TrueIdentity™ — e-KYC Verification for Malaysia",
    description:
      "Programmatic e-KYC verification for Malaysian fintechs. Verify customers in seconds, not days.",
    type: "website",
    locale: "en_MY",
    siteName: "Truestack",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueIdentity™ — e-KYC Verification for Malaysia",
    description:
      "Programmatic e-KYC verification for Malaysian fintechs. Verify customers in seconds, not days.",
  },
};

export default function TrueIdentityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
