import Image from "next/image";
import Link from "next/link";
import FlowChips from "./FlowChips";
import { home, solutions } from "@/lib/content";

export default function SolutionTiles() {
  return (
    <section id="solutions" className="rise">
      <h2 className="visually-hidden">Solutions</h2>
      <div className="tiles">
        {solutions.map((solution, index) => (
          <Link key={solution.slug} href={`/${solution.slug}`} className={`tile theme-${solution.color}`}>
            <span className="pill">
              <span className="pill-dot" aria-hidden="true" />
              {solution.tile.pill}
            </span>
            <h3 className="tile-title">{solution.name}</h3>
            <p className="tile-line">{solution.tile.line}</p>
            <span className="tile-more">See the solution →</span>
            {solution.tile.visual.kind === "image" ? (
              <Image
                className="tile-shot"
                src={solution.tile.visual.src}
                alt={solution.tile.visual.alt}
                width={1280}
                height={860}
                sizes="(max-width: 639px) 160vw, (max-width: 1023px) 80vw, 470px"
                preload={index === 0}
              />
            ) : (
              <FlowChips steps={solution.tile.visual.steps} className="tile-flow" />
            )}
          </Link>
        ))}
      </div>
      <p className="proof-line">
        <strong>{home.proofLead}</strong> {home.proofRest}
      </p>
    </section>
  );
}
