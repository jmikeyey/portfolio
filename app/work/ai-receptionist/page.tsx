import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Front Desk — AI Receptionist · case study",
  description:
    "A multi-tenant AI receptionist that answers from a business's own knowledge, books appointments, and captures leads. Built end-to-end on free infrastructure.",
};

const DEMO = "https://ai-receptionist-eta-three.vercel.app";
const DEMO_BUSINESS_ID = "9647904b-fd37-4960-b10b-e1c7f58c752b";

const decisions: { h: string; p: string }[] = [
  {
    h: "Thin prompt, code as the safety net",
    p: "The model only decides what to do next. Everything that has to be correct — open-slot math, timezones, double-booking, email validation — lives in typed code that re-checks every tool call. A weak model literally can't book an invalid slot, because the app rejects it.",
  },
  {
    h: "Runs on a free model",
    p: "No paid LLM anywhere. I measured tool-calling reliability across Groq's free models and settled on gpt-oss-120b at temperature 0 — after llama-3.3 deterministically mangled tool calls (jamming arguments into the function name). The gotcha is written down so I don't repeat it.",
  },
  {
    h: "Answers from the business's own words",
    p: "The owner pastes plain text and documents; those get chunked, embedded (gte-small, 384-dim, via a Supabase Edge Function) and stored in pgvector. The receptionist retrieves by cosine similarity and answers from that — no hardcoded 'brain', so it generalises to any business.",
  },
  {
    h: "Timezone-safe booking",
    p: "Availability is defined per weekday in the business's IANA timezone and stored in UTC. Booking takes a transactional advisory lock plus an overlap guard, so two visitors racing for the same slot can't both win.",
  },
  {
    h: "Multi-tenant from day one",
    p: "Every row is scoped to a business; only a seeded demo is exposed, but the schema, auth, and queries are already multi-business. Adding real tenants is a signup flow, not a rewrite.",
  },
  {
    h: "Supabase for data + auth, Vercel for the app",
    p: "Supabase is both Postgres and the auth provider (owner dashboard behind email/password); Drizzle owns all app-data queries. Deployed on Vercel through the Supabase transaction pooler — the direct connection is IPv6-only and unreachable from serverless.",
  },
];

const stack = [
  "Next.js 16",
  "TypeScript",
  "Postgres + pgvector",
  "Drizzle ORM",
  "Supabase (DB · Auth · Edge Functions)",
  "Vercel AI SDK",
  "Groq (free models)",
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

export default function ReceptionistCaseStudy() {
  return (
    <div className="page case">
      <div className="topbar">
        <Link className="brand" href="/">
          ← john&nbsp;micky&nbsp;butnande
        </Link>
        <nav>
          <a href={DEMO} target="_blank" rel="noreferrer">
            live demo ↗
          </a>
        </nav>
      </div>

      <header className="hero">
        <div className="eyebrow">Case study · full-stack + AI</div>
        <h1>Front Desk — an AI receptionist for small businesses</h1>
        <div className="role">Answers, books, and captures leads — end to end.</div>
        <p className="lead">
          Small businesses miss calls and messages. Front Desk gives each business a hosted chat page
          it can link from its site: it chats with visitors, answers from the business&apos;s own information,
          books real appointments, and captures leads when someone isn&apos;t ready yet — then hands all of it
          to an owner dashboard. It&apos;s multi-tenant and runs entirely on free infrastructure.
        </p>
        <div className="links">
          <a href={DEMO} target="_blank" rel="noreferrer">
            open live demo <span className="arw" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="note codenote">
          The demo is a fully seeded dental clinic — try booking a time. Source is private; happy to
          walk through it on a call.
        </p>
      </header>

      <section className="case-sec">
        <div className="label">Try it in the corner of this page</div>
        <p>
          That chat bubble belongs to Bright Smile Dental, the demo clinic — not to me. This page
          loads it exactly the way a customer&apos;s own site would, with one script tag:
        </p>
        <pre className="snippet">
          {`<script src="${DEMO}/embed.js" data-business-id="…" defer></script>`}
        </pre>
        <p>
          The script injects the launcher and only loads the chat on first open, so an unopened
          widget costs the host page nothing.
        </p>
      </section>

      <Shot
        src="/receptionist-landing.png"
        alt="Front Desk landing page with a live chat preview"
        caption="Landing — the product in one screen."
      />

      <section className="case-sec">
        <div className="label">What it does</div>
        <p>
          A visitor opens the chat and asks anything — hours, services, whether the clinic takes new
          patients. The receptionist answers from the owner&apos;s own knowledge base. When the
          visitor wants to book, it checks real availability and reserves the slot. When they&apos;re
          just browsing, it takes their details as a lead. The owner sees every appointment, lead,
          and transcript in a dashboard behind login.
        </p>
      </section>

      <Shot
        src="/receptionist-chat.png"
        alt="The receptionist listing services and offering to book"
        caption="The chat calls a tool to list real services, then offers to book — markdown rendered inline."
      />

      <section className="case-sec">
        <div className="label">Engineering decisions</div>
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
        src="/receptionist-dashboard.png"
        alt="Owner dashboard showing an appointment, a new lead, and recent conversations"
        caption="Owner dashboard — a booked appointment, a captured lead, and every transcript."
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
          Voice is the obvious next channel — today it handles website chat; a real phone line would
          sit on top of the same brain (the booking, knowledge, and lead logic don&apos;t change), but
          it needs a paid telephony layer, so I scoped it out to keep everything on free
          infrastructure. Beyond that: self-service onboarding.
        </p>
      </section>

      <footer>
        <Link href="/">← back to portfolio</Link>
        <span>Cebu · 2026</span>
      </footer>

      <Script
        src={`${DEMO}/embed.js`}
        data-business-id={DEMO_BUSINESS_ID}
        strategy="afterInteractive"
      />
    </div>
  );
}
