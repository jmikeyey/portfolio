import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
import { getSolution } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const solution = getSolution("websites");

export const metadata: Metadata = pageMetadata({
  path: "/websites",
  title: solution.seoTitle,
  description: solution.hero.lead,
});

export default function WebsitesPage() {
  return <SolutionPage solution={solution} />;
}
