import type { Metadata } from "next";
import Script from "next/script";
import SolutionPage from "@/components/SolutionPage";
import { DEMOS, getSolution } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const solution = getSolution("ai-assistant");
const FRONT_DESK_DEMO_BUSINESS_ID = "9647904b-fd37-4960-b10b-e1c7f58c752b";

export const metadata: Metadata = pageMetadata({
  path: "/ai-assistant",
  title: solution.seoTitle,
  description: solution.hero.lead,
});

export default function AiAssistantPage() {
  return (
    <>
      <SolutionPage solution={solution} />
      <Script
        src={`${DEMOS.frontDesk}/embed.js`}
        data-business-id={FRONT_DESK_DEMO_BUSINESS_ID}
        strategy="lazyOnload"
      />
    </>
  );
}
