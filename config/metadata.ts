import type { Metadata } from "next";
import type { PhaseOnePage } from "@/content/phaseOne";

const defaultSocialImage = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "Татьяна Мирошина — Criterio Digitale",
};

export function withDefaultSocialImage(metadata: Metadata): Metadata {
  return {
    ...metadata,
    openGraph: {
      siteName: "Criterio Digitale",
      locale: "ru_RU",
      ...metadata.openGraph,
      images: metadata.openGraph?.images ?? [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
      images: metadata.twitter?.images ?? [defaultSocialImage.url],
    },
  };
}

export function phaseOneMetadata(page: PhaseOnePage): Metadata {
  return withDefaultSocialImage({
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
      languages: {
        "ru-RU": page.path,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url: page.path,
      locale: "ru_RU",
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  });
}
