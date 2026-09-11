import { getSolution } from "@/lib/content";
import { OG_SIZE, renderSolutionOgImage } from "@/lib/og-image";

const solution = getSolution("dashboards");

export const alt = solution.hero.h1;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderSolutionOgImage(solution);
}
