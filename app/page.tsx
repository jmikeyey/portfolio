import type { Metadata } from "next";
import AboutCard from "@/components/AboutCard";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import SolutionTiles from "@/components/SolutionTiles";
import WorkingSteps from "@/components/WorkingSteps";
import { home } from "@/lib/content";
import { pageMetadata, personJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ path: "/", title: home.seoTitle, description: home.side });

export default function HomePage() {
  return (
    <div className="shell">
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <SiteNav />
      <main>
        <header className="home-hero rise">
          <h1 className="home-h1">
            {home.h1Top}
            <br />
            <span className="mark">{home.h1Highlight}</span>
          </h1>
          <div className="home-side">
            <p>{home.side}</p>
            <a href="#contact" className="btn">
              Start a project →
            </a>
          </div>
        </header>
        <SolutionTiles />
        <WorkingSteps />
        <AboutCard />
        <Contact heading={home.contactHeading} defaultService="not-sure" />
      </main>
      <SiteFooter />
    </div>
  );
}
