import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
import { getSolution } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const solution = getSolution("dashboards");

export const metadata: Metadata = pageMetadata({
  path: "/dashboards",
  title: solution.seoTitle,
  description: solution.hero.lead,
});

export default function DashboardsPage() {
  return <SolutionPage solution={solution} />;
}
