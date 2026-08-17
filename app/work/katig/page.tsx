import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katig — BPO landing page · case study",
  description:
    "A self-directed sample: a marketing site for a fictional Cebu BPO. Brand concept, above-the-fold, section order, and a hero background drawn on canvas.",
};

const DEMO = "https://katig-bpo.vercel.app";

const decisions: { h: string; p: string }[] = [
  {
    h: "The name carries the positioning",
    p: "A katig is the outrigger of a Filipino bangka — the arm that keeps the boat steady in rough water. Everything hangs off that one idea: the tagline is \"the arm that keeps you steady\", the mark draws a hull, the arm angling off it, and the float, and the palette comes from the material world of that boat — hull dark teal, sail-canvas off-white, and one amber that reads as sun on water. The default for this industry is corporate blue and a photo of a headset. A name that means something gives you a whole visual system for free, and it's the difference between a brand and a logo.",
  },
  {
    h: "One claim above the fold, in four words",
    p: "The offer had to be legible before any scrolling: eyebrow (who this is for), headline, one paragraph of what they actually do, two CTAs, and a reassurance line. Everything else on the page is elaboration. I wrote the headline last and cut it down to \"Support teams that stay.\" — because the thing this fictional company sells is the absence of a specific pain, and naming the pain is stronger than describing the service.",
  },
  {
    h: "The proof sits beside the promise, not below it",
    p: "The hero is two columns: the claim on the left, a mocked client scorecard on the right. A page that asks a stranger for a call has to put its evidence in the same eyeful as its pitch — send them hunting for it two screens down and most of them never arrive. It's also the fastest way to show what a client actually receives, which is a weekly number, not a brochure.",
  },
  {
    h: "Section order is objection order",
    p: "What we run → why us → how it works → who says so → careers → book a call. Each band answers the question the previous one provokes, so scrolling reads as a conversation rather than a menu. Careers sits before the CTA on purpose: in this industry the buyer's real objection is whether you can staff the account at all, so a hiring pitch is a sales argument, not an HR page.",
  },
  {
    h: "One CTA, repeated at every decision point",
    p: "Nav, hero, careers, and the closing band all resolve to the same #contact anchor — nobody should ever have to scroll back up to act. There is deliberately no contact form: a fictional company has nowhere to send a lead, and a form that silently swallows a submission is a worse lie than a mail client that visibly opens. The anchor resolves to a mailto and a tel, so the phone path works on the device where it matters. Making it real is swapping that block for a form and a handler; the structure around it doesn't move.",
  },
  {
    h: "The hero background is drawn, not downloaded",
    p: "Thirty-four contour lines on a 2D canvas, tightening toward the horizon and opening out toward the foreground, with two sine terms of different periods so the lines never look repeated. It's sized to devicePixelRatio and redrawn on resize, so it's crisp on retina and costs no image request. It's also deliberately static — an animating background beside a headline is two things competing for the same attention, and the headline should win.",
  },
  {
    h: "Motion a preference can switch off",
    p: "One entrance: content rises 10px and fades, with the scorecard offset 120ms behind the copy so the eye is led left to right. Under prefers-reduced-motion the animation, the smooth-scroll behaviour, and the button transitions all turn off — the reduced-motion query is where most hand-built sites forget the anchor scrolling, which is the one motion a vestibular user can't look away from.",
  },
  {
    h: "Every word lives in one module",
    p: "All copy is typed data in one content file — hero, services, process steps, quotes, perks — and the components are layout only. Editing a headline never means opening JSX, and the whole invented surface of the brand is reviewable in a single file, which is exactly what you want when everything on the page is fiction that must stay labelled as fiction.",
  },
  {
    h: "Breakpoints per band, not one global switch",
    p: "Each section collapses where its own content stops fitting: services 3 → 2 → 1, the process timeline 5 → 2 → 1, the stat row 4 → 2 → 1, careers 2 → 1. A single global breakpoint always leaves one section broken for a hundred pixels. The nav links collapse on a phone but the CTA button never does — on mobile that button is the entire job of the page.",
  },
  {
    h: "No component library",
    p: "Hand-written CSS on a small token set: three surface colours, one accent, one rule colour, one shell width. Tailwind is in the project for its reset and nothing else. A page whose whole argument is that it doesn't look templated can't be assembled out of someone else's defaults — and at this size a design system is about twenty custom properties, not a dependency.",
  },
];

const stack = [
  "Next.js 16 (App Router, RSC)",
  "TypeScript",
  "Hand-written CSS (Tailwind v4 reset only)",
  "Canvas 2D",
  "next/font (Archivo · IBM Plex Sans · Plex Mono)",
  "Vercel",
];

function Shot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function KatigCaseStudy() {
  return (
    <div className="page case">
      <div className="topbar">
        <Link className="brand" href="/">
          ← john&nbsp;micky&nbsp;butnande
        </Link>
        <nav>
          <a href={DEMO} target="_blank" rel="noreferrer">
            live site ↗
          </a>
        </nav>
      </div>

      <header className="hero">
        <div className="eyebrow">Case study · front-end &amp; design</div>
        <h1>Katig — a landing page for a company that doesn&apos;t exist</h1>
        <div className="role">A self-directed sample: brand, copy, and page, built from nothing.</div>
        <p className="lead">
          <strong>Katig is fictional.</strong>{" "}
          I invented the company, the brand, the client names,
          the testimonials, and every number on the page as a sample piece — nothing on it is a real
          business, a real client, or a result I produced for anyone. What&apos;s real is the work of
          making it: naming and drawing a brand, deciding what goes above the fold, ordering the
          sections against a buyer&apos;s objections, and building the whole thing as one fast,
          hand-written page. This case study is about those decisions, and nothing else.
        </p>
        <div className="links">
          <a href={DEMO} target="_blank" rel="noreferrer">
            open live site <span className="arw" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="note codenote">
          The brief was my own: take an industry where every site looks identical — Philippine
          business process outsourcing — and build the one that doesn&apos;t. Source is private;
          happy to walk through it on a call.
        </p>
      </header>

      <Shot
        src="/katig-hero.png"
        alt="Katig hero: the headline Support teams that stay, a mocked client scorecard card, and a canvas-drawn contour background"
        caption="Above the fold — the claim and its proof in the same eyeful. The lines behind it are drawn on canvas, not an image. Every figure shown is invented for the sample."
      />

      <section className="case-sec">
        <div className="label">What&apos;s on the page</div>
        <p>
          One scroll, in order: a hero, a stat row, a client strip, six service cards, the
          argument for the company, a five-step timeline from first call to a live team,
          testimonials, a careers pitch, and a closing call to action. It&apos;s a marketing site,
          so there is no application behind it — the engineering is in how fast it loads, how it
          behaves on a phone, and how little of it is borrowed.
        </p>
      </section>

      <Shot
        src="/katig-services.png"
        alt="Services section: six cards in a three-column grid, each with a summary and three bullet points"
        caption="Services — six cards on an identical shape, so the eye compares offerings instead of re-learning a layout."
      />

      <section className="case-sec">
        <div className="label">Design &amp; build decisions</div>
        <div className="keylist">
          {decisions.map((d) => (
            <div className="key" key={d.h}>
              <h3>{d.h}</h3>
              <p>{d.p}</p>
            </div>
          ))}
        </div>
      </section>

      <Shot
        src="/katig-process.png"
        alt="Process section on a dark band: five numbered steps laid out as a horizontal timeline with a rule and a node above each"
        caption="The process band — each step carries its own segment of the timeline, so the rule survives the collapse to two columns and then one."
      />

      <section className="case-sec">
        <div className="label">Stack</div>
        <div className="stack">
          {stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>

      <section className="case-sec">
        <div className="label">What&apos;s next</div>
        <p>
          As a sample it&apos;s finished, but the honest gap is that a real client&apos;s version
          needs the things a fiction can&apos;t justify: a contact form with a handler and spam
          defence, per-service pages for the search traffic that actually converts in this industry,
          and a careers flow that accepts an application rather than pointing at an inbox. Each is a
          new surface rather than a change to this one, which is the point — the page was structured
          so that adding them doesn&apos;t mean rebuilding it.
        </p>
      </section>

      <footer>
        <Link href="/">← back to portfolio</Link>
        <span>Cebu · 2026</span>
      </footer>
    </div>
  );
}
