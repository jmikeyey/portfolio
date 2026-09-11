import type { Metadata } from "next";
import { SITE_URL, profile, type Solution } from "./content";

export function absoluteUrl(path: `/${string}`): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function pageMetadata({
  path,
  title,
  description,
}: {
  path: `/${string}`;
  title: string;
  description: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: profile.shortName,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Developer",
    url: SITE_URL,
    image: absoluteUrl(profile.photo),
    address: { "@type": "PostalAddress", addressLocality: "Cebu", addressCountry: "PH" },
    sameAs: [profile.github, profile.linkedin],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.shortName,
    url: SITE_URL,
  };
}

export function breadcrumbJsonLd(solution: Pick<Solution, "name" | "slug">) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: solution.name,
        item: absoluteUrl(`/${solution.slug}`),
      },
    ],
  };
}

export function jsonLdHtml(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
