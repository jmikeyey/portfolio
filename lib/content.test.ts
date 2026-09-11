import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  SITE_URL,
  getSolution,
  home,
  profile,
  solutions,
  workingSteps,
  type ImageMedia,
} from "./content";
import { SERVICE_VALUES } from "./services";

const publicFile = (src: string) => existsSync(join(process.cwd(), "public", src));

describe("solutions", () => {
  it("has exactly the four approved pages, in tile order", () => {
    expect(solutions.map((s) => s.slug)).toEqual([
      "ai-assistant",
      "dashboards",
      "websites",
      "automations",
    ]);
  });

  it("maps each page to a contact-form service", () => {
    for (const s of solutions) expect(SERVICE_VALUES).toContain(s.service);
  });

  it("keeps every search title within 60 characters", () => {
    expect(home.seoTitle.length).toBeLessThanOrEqual(60);
    for (const s of solutions) expect(s.seoTitle.length, s.slug).toBeLessThanOrEqual(60);
  });

  it("points every screenshot at a file in public/ and gives it alt text", () => {
    const images = solutions
      .flatMap((s) => [s.tile.visual, s.hero.visual, ...s.cards.map((c) => c.media)])
      .filter((m): m is ImageMedia => m.kind === "image");
    expect(images.length).toBeGreaterThan(0);
    for (const img of images) {
      expect(publicFile(img.src), img.src).toBe(true);
      expect(img.alt.length, img.src).toBeGreaterThan(0);
    }
  });

  it("discloses Katig as fictional wherever it is shown", () => {
    const websites = getSolution("websites");
    expect(websites.tile.pill).toBe("Sample site");
    expect(websites.example.disclosure).toMatch(/^Katig is fictional\./);
    expect(websites.hero.visual.kind === "image" && websites.hero.visual.caption).toMatch(
      /^Katig is a sample brand I invented\./,
    );
  });

  it("gives every page three cards, four fit chips and a technical section", () => {
    for (const s of solutions) {
      expect(s.cards, s.slug).toHaveLength(3);
      expect(s.fit, s.slug).toHaveLength(4);
      expect(Object.values(s.howItsBuilt).some(Boolean), s.slug).toBe(true);
    }
  });

  it("only offers demo buttons where a live demo exists", () => {
    const automations = getSolution("automations");
    expect(automations.hero.demo).toBeUndefined();
    expect(automations.tryIt).toBeUndefined();
    for (const slug of ["ai-assistant", "dashboards", "websites"] as const) {
      expect(getSolution(slug).hero.demo?.href, slug).toMatch(/^https:\/\//);
    }
  });

  it("fails loudly for an unknown page", () => {
    expect(() => getSolution("pricing" as never)).toThrow("Unknown solution: pricing");
  });
});

describe("home", () => {
  it("uses the canonical domain", () => {
    expect(SITE_URL).toBe("https://johnmicky-butnande.vercel.app");
  });

  it("has the three steps John confirmed", () => {
    expect(workingSteps.map((s) => s.title)).toEqual([
      "Tell me what's slowing you down",
      "See it working early",
      "Launch, and it's yours",
    ]);
  });

  it("never repeats a banned claim", () => {
    const everything = JSON.stringify({ profile, home, workingSteps, solutions });
    expect(everything).not.toMatch(/30%/);
    expect(everything).not.toMatch(/client work/i);
  });
});

describe("profile", () => {
  it("ships the about photo", () => {
    expect(publicFile(profile.photo)).toBe(true);
  });
});
