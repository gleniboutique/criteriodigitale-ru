import type { Metadata } from "next";
import { withDefaultSocialImage } from "@/config/metadata";
import { ITALIAN_SITE_URL, SITE_URL } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = withDefaultSocialImage({
  metadataBase: new URL(SITE_URL),
  title: "Татьяна Мирошина — системы, AI, человек",
  description:
    "Работа со сложными задачами: контекст, системное мышление, цифровые процессы и AI без подмены человеческого решения.",
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      it: ITALIAN_SITE_URL,
    },
  },
  openGraph: {
    title: "Татьяна Мирошина — системы, AI, человек",
    description:
      "Работа со сложными задачами: контекст, системное мышление, цифровые процессы и AI без подмены человеческого решения.",
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
