import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { home, SITE_URL, type Solution, type ThemeColor } from "./content";

export const OG_SIZE = { width: 1200, height: 630 };

const INK = "#141414";
const CREAM = "#FFF7EC";
const AMBER = "#FFB020";
const CORAL = "#FF6B4A";
const SITE_HOST = new URL(SITE_URL).host;

const THEME: Record<ThemeColor, { background: string; text: string; dot: string }> = {
  teal: { background: "#14746F", text: "#FFFFFF", dot: CORAL },
  amber: { background: AMBER, text: INK, dot: CORAL },
  violet: { background: "#6C5CE7", text: "#FFFFFF", dot: CORAL },
  coral: { background: CORAL, text: INK, dot: INK },
};

async function loadFonts() {
  const [display, body] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/inter-tight-latin-900-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/inter-latin-500-normal.woff")),
  ]);
  return [
    { name: "Inter Tight", data: display, style: "normal" as const, weight: 900 as const },
    { name: "Inter", data: body, style: "normal" as const, weight: 500 as const },
  ];
}

function Logo({ color, dot }: { color: string; dot: string }) {
  return (
    <div style={{ display: "flex", fontFamily: "Inter Tight", fontSize: 40, letterSpacing: -1.2, color }}>
      john micky<span style={{ color: dot }}>.</span>
    </div>
  );
}

export async function renderHomeOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: CREAM,
          color: INK,
        }}
      >
        <Logo color={INK} dot={CORAL} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Inter Tight",
            fontSize: 112,
            lineHeight: 1.04,
            letterSpacing: -5,
          }}
        >
          <div style={{ display: "flex" }}>{home.h1Top}</div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", background: AMBER, padding: "0 18px", borderRadius: 14 }}>
              {home.h1Highlight}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", fontFamily: "Inter", fontSize: 28, color: "#3B3B3B" }}>{SITE_HOST}</div>
      </div>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}

export async function renderSolutionOgImage(solution: Solution) {
  const theme = THEME[solution.color];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: theme.background,
          color: theme.text,
        }}
      >
        <div style={{ display: "flex", fontFamily: "Inter", fontSize: 26, letterSpacing: 3, textTransform: "uppercase" }}>
          {solution.name}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 1000,
            fontFamily: "Inter Tight",
            fontSize: 88,
            lineHeight: 1.04,
            letterSpacing: -4,
          }}
        >
          {solution.hero.h1}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Inter", fontSize: 28 }}>
          <Logo color={theme.text} dot={theme.dot} />
          <div style={{ display: "flex" }}>{SITE_HOST}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}

export async function renderIconImage(sizePx: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
          color: INK,
          fontFamily: "Inter Tight",
          fontSize: Math.round(sizePx * 0.78),
          letterSpacing: Math.round(-0.04 * sizePx),
        }}
      >
        j<span style={{ color: CORAL }}>.</span>
      </div>
    ),
    { width: sizePx, height: sizePx, fonts: await loadFonts() },
  );
}
