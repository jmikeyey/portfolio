import { describe, it, expect } from "vitest";
import nextConfig from "./next.config";

async function redirects() {
  if (!nextConfig.redirects) throw new Error("next.config.ts defines no redirects");
  return nextConfig.redirects();
}

describe("redirects", () => {
  it("has no host-based redirect, so the vercel.app address can't redirect to itself", async () => {
    expect((await redirects()).some((r) => r.has?.some((condition) => condition.type === "host"))).toBe(false);
  });

  it("sends each old case study to its solution page, permanently", async () => {
    const list = await redirects();
    expect(list).toContainEqual({
      source: "/work/ai-receptionist",
      destination: "/ai-assistant",
      permanent: true,
    });
    expect(list).toContainEqual({ source: "/work/aqualoop", destination: "/dashboards", permanent: true });
    expect(list).toContainEqual({ source: "/work/katig", destination: "/websites", permanent: true });
  });
});
