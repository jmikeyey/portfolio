import Image from "next/image";
import Link from "next/link";
import CardMediaView from "./CardMediaView";
import Contact from "./Contact";
import FlowChips from "./FlowChips";
import HowItsBuiltDetails from "./HowItsBuiltDetails";
import JsonLd from "./JsonLd";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { solutions, type Solution } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export default function SolutionPage({ solution }: { solution: Solution }) {
  const { hero, example, cards, tryIt, fit, howItsBuilt } = solution;
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <div className={`theme-${solution.color}`}>
      <JsonLd data={breadcrumbJsonLd(solution)} />
      <header className="sol-hero">
        <div className="shell">
          <SiteNav />
          <div className="sol-hero-grid rise">
            <div>
              <p className="eyebrow">{solution.name}</p>
              <h1 className="sol-h1">{hero.h1}</h1>
            </div>
            <div>
              <p className="sol-lead">{hero.lead}</p>
              <div className="cta-row">
                {hero.demo ? (
                  <>
                    <a className="btn" href={hero.demo.href} target="_blank" rel="noreferrer">
                      {hero.demo.label}
                    </a>
                    <a className="btn btn-outline" href="#contact">
                      Start a project
                    </a>
                  </>
                ) : (
                  <a className="btn" href="#contact">
                    Start a project
                  </a>
                )}
              </div>
            </div>
          </div>
          {hero.visual.kind === "image" ? (
            <div className="sol-visual">
              <Image
                className="sol-shot"
                src={hero.visual.src}
                alt={hero.visual.alt}
                width={1280}
                height={860}
                sizes="(max-width: 1199px) 100vw, 1016px"
                preload
              />
            </div>
          ) : (
            <div className="sol-visual sol-visual-flow">
              <FlowChips steps={hero.visual.steps} className="sol-flow" />
            </div>
          )}
        </div>
      </header>

      <div className="shell">
        <main>
          {hero.visual.kind === "image" && hero.visual.caption && (
            <p className="sol-caption">{hero.visual.caption}</p>
          )}

          <section className="block">
            <p className="eyebrow">{example.eyebrow}</p>
            <h2 className="h2">{example.h2}</h2>
            {example.disclosure && <p className="disclosure">{example.disclosure}</p>}
            <div className="panels">
              {example.panels.map((panel, i) => (
                <div key={panel.title} className={i === 0 ? "panel panel-light" : "panel panel-dark"}>
                  <h3 className="panel-title">{panel.title}</h3>
                  <p className="panel-body">{panel.body}</p>
                  {panel.note && <p className="panel-note">{panel.note}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="block" aria-labelledby="whats-inside">
            <h2 id="whats-inside" className="eyebrow">
              What&apos;s inside
            </h2>
            <div className="cards">
              {cards.map((card) => (
                <div key={card.title} className="card">
                  <div className={`card-media card-media-${card.media.kind}`}>
                    <CardMediaView media={card.media} />
                  </div>
                  <div className="card-text">
                    <h3>{card.title}</h3>
                    <p>{card.line}</p>
                  </div>
                </div>
              ))}
            </div>
            {tryIt && (
              <div className="try">
                <div>
                  <h3>Try it yourself</h3>
                  <p>
                    {tryIt.before}
                    {tryIt.code && <code>{tryIt.code}</code>}
                    {tryIt.after}
                  </p>
                </div>
                {tryIt.button && (
                  <a className="btn" href={tryIt.button.href} target="_blank" rel="noreferrer">
                    {tryIt.button.label}
                  </a>
                )}
              </div>
            )}
          </section>

          <section className="block">
            <p className="eyebrow">A good fit if</p>
            <h2 className="h2 h2-sm">Sound familiar?</h2>
            <ul className="fit">
              {fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <HowItsBuiltDetails howItsBuilt={howItsBuilt} />
          </section>

          <Contact heading={solution.contactHeading} defaultService={solution.service} />

          <section className="block" aria-labelledby="other-solutions">
            <h2 id="other-solutions" className="eyebrow">
              Other solutions
            </h2>
            <div className="others">
              {others.map((other) => (
                <Link key={other.slug} href={`/${other.slug}`} className={`other theme-${other.color}`}>
                  {other.name}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
