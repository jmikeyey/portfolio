import { describe, it, expect } from "vitest";
import robots from "./robots";

describe("robots", () => {
  it("allows crawling, keeps crawlers out of the API, and points at the sitemap", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/", disallow: "/api/" },
      sitemap: "https://johnmicky-butnande.vercel.app/sitemap.xml",
    });
  });
});
