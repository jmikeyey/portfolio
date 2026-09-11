import { home } from "@/lib/content";
import { OG_SIZE, renderHomeOgImage } from "@/lib/og-image";

export const alt = `${home.h1Top} ${home.h1Highlight}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderHomeOgImage();
}
