import { ITALIAN_SITE_URL, SITE_URL } from "@/config/site";

export const PERSON_ID = `${ITALIAN_SITE_URL}/#person`;
export const RU_WEBSITE_ID = `${SITE_URL}/#website`;

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Татьяна Мирошина",
  alternateName: "Tatiana Miroshina",
  url: `${ITALIAN_SITE_URL}/chi-sono`,
} as const;

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": RU_WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Criterio Digitale",
      inLanguage: "ru",
      creator: { "@id": PERSON_ID },
    },
    personSchema,
  ],
} as const;

type PageSchemaType = "WebPage" | "AboutPage" | "ContactPage";

export function createPageStructuredData({
  type,
  path,
  name,
  description,
}: {
  type: PageSchemaType;
  path: string;
  name: string;
  description: string;
}) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "ru-RU",
    isPartOf: { "@id": RU_WEBSITE_ID },
    creator: { "@id": PERSON_ID },
    ...(type === "AboutPage" || type === "ContactPage"
      ? { mainEntity: { "@id": PERSON_ID } }
      : {}),
  } as const;
}
