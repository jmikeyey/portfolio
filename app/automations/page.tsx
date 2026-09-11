import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
import { getSolution } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const solution = getSolution("automations");

export const metadata: Metadata = pageMetadata({
  path: "/automations",
  title: solution.seoTitle,
  description: solution.hero.lead,
});

export default function AutomationsPage() {
  return <SolutionPage solution={solution} />;
}
