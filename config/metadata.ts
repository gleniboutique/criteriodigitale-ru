import type { Metadata } from "next";
import type { PhaseOnePage } from "@/content/phaseOne";

export const homepageMetadata = {
  title: "Татьяна Мирошина — «Цифровой критерий»",
  description: "Помогаю понять, что стоит создавать или менять: от идеи без готового проекта до процессов, цифрового представления и решений об ИИ. Согласованную практическую часть могу выполнить сама.",
} as const;

const defaultSocialImage = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "Татьяна Мирошина — «Цифровой критерий». Понять, что действительно нужно. И сделать следующий шаг.",
};

export function withDefaultSocialImage(metadata: Metadata): Metadata {
  return {
    ...metadata,
    openGraph: {
      siteName: "Цифровой критерий",
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
        "it-IT": page.italianCounterpart,
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
