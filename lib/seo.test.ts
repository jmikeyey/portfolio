import { describe, it, expect } from "vitest";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdHtml,
  pageMetadata,
  personJsonLd,
  websiteJsonLd,
} from "./seo";
import { getSolution, profile } from "./content";

describe("absoluteUrl", () => {
  it("builds canonical URLs on the site's canonical domain", () => {
    expect(absoluteUrl("/")).toBe("https://johnmicky-butnande.vercel.app");
    expect(absoluteUrl("/dashboards")).toBe("https://johnmicky-butnande.vercel.app/dashboards");
  });
});

describe("pageMetadata", () => {
  it("sets title, description, canonical, a full openGraph block and a large Twitter card", () => {
    const metadata = pageMetadata({ path: "/dashboards", title: "T", description: "D" });
    expect(metadata.title).toBe("T");
    expect(metadata.description).toBe("D");
    expect(metadata.alternates?.canonical).toBe("https://johnmicky-butnande.vercel.app/dashboards");
    expect(metadata.openGraph).toMatchObject({
      title: "T",
      description: "D",
      url: "https://johnmicky-butnande.vercel.app/dashboards",
      siteName: "John Micky",
      type: "website",
    });
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", title: "T" });
  });
});

describe("structured data", () => {
  it("describes John as a Person with his public profiles", () => {
    expect(personJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "John Micky Butnande",
      jobTitle: "Developer",
      url: "https://johnmicky-butnande.vercel.app",
      image: "https://johnmicky-butnande.vercel.app/john-micky-butnande.jpg",
      address: { "@type": "PostalAddress", addressLocality: "Cebu", addressCountry: "PH" },
      sameAs: [profile.github, profile.linkedin],
    });
  });

  it("names the site", () => {
    expect(websiteJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "John Micky",
      url: "https://johnmicky-butnande.vercel.app",
    });
  });

  it("builds a Home → page breadcrumb", () => {
    expect(breadcrumbJsonLd(getSolution("websites"))).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://johnmicky-butnande.vercel.app" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Websites & landing pages",
          item: "https://johnmicky-butnande.vercel.app/websites",
        },
      ],
    });
  });

  it("escapes < so JSON-LD can't close its script tag", () => {
    expect(jsonLdHtml({ name: "</script><script>alert(1)</script>" })).not.toContain("<");
  });
});
