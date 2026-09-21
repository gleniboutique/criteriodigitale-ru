import type { Metadata } from "next";
import { homepageMetadata, withDefaultSocialImage } from "@/config/metadata";
import { ITALIAN_SITE_URL, SITE_URL } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = withDefaultSocialImage({
  metadataBase: new URL(SITE_URL),
  title: homepageMetadata.title,
  description: homepageMetadata.description,
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "it-IT": ITALIAN_SITE_URL,
    },
  },
  twitter: { ...homepageMetadata },
  openGraph: {
    title: homepageMetadata.title,
    description: homepageMetadata.description,
    type: "website",
    url: "/",
    locale: "ru_RU",
    alternateLocale: ["it_IT"],
  },
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
