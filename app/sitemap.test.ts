import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("lists exactly the five canonical pages", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://johnmicky-butnande.vercel.app",
      "https://johnmicky-butnande.vercel.app/ai-assistant",
      "https://johnmicky-butnande.vercel.app/dashboards",
      "https://johnmicky-butnande.vercel.app/websites",
      "https://johnmicky-butnande.vercel.app/automations",
    ]);
  });
});
