import type { Metadata } from "next";

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
