import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AquaLoop — Water Delivery & Loyalty · case study",
  description:
    "An admin dashboard for a water delivery business: customers, daily can orders, automatic cashback, and reporting — with the money rules enforced inside Postgres.",
};

const DEMO = "https://aqualoop-plum.vercel.app";

const decisions: { h: string; p: string }[] = [
  {
    h: "Cashback is a ledger, not a number",
    p: "Every accrual and redemption is a signed row, and a balance is always their sum. There's deliberately no stored balance column: a denormalised total drifts the first time a write path forgets to update it, and a customer's balance is the one number in this app that can never be wrong. If reads ever get slow it becomes a materialized view — not a hand-maintained column.",
  },
  {
    h: "The invariants live in Postgres, not in app code",
    p: "Redemption goes through a function that locks the customer row before checking the balance. Checking it in application code would let two concurrent redemptions race into a negative balance — a bug that only shows up under load, and only with real money. Order creation is one transaction that writes the order and its cashback together, so an order can never exist without the cashback it earned.",
  },
  {
    h: "The public page has no database access at all",
    p: "Customers check their balance with no login, which is the one genuinely dangerous surface — done naively it lets anyone walk mobile numbers and read the customer list. So the anon role holds no table grants and can't execute the lookup. A server action calls a definer function that returns a balance and a can count and nothing else — no name, no address, no history — rate-limited per IP, with the IP read from request headers rather than the form so a caller can't forge it.",
  },
  {
    h: "The earning rule has exactly one home",
    p: "Cashback is computed in one pure TypeScript function; the database stores the result rather than recomputing it. So changing the rate never silently rewrites cashback customers were already told they'd earned. Order price and total are snapshotted onto each order for the same reason — historical revenue must not move when today's price changes.",
  },
  {
    h: "Grants are not implicit — and that's a real trap",
    p: "A migration that enables row-level security and writes policies still produces \"permission denied\" for every role until you grant on the tables; the policies never even run. I only caught it by asserting privileges directly against the database instead of assuming. There are 35 assertions covering the money rules, the grant matrix, and RLS, run against real Postgres — and against the hosted project too, because the hosted platform grants new functions to the public role in a way a local stack does not.",
  },
  {
    h: "One write path per operation",
    p: "The demo seed creates its 300+ orders and its redemptions through the same functions the UI calls, so it can't produce states the app never would. A seed that inserts rows directly is a second implementation of your business rules that nobody reviews.",
  },
  {
    h: "A design system, not a component library's defaults",
    p: "Stock shadcn ships a pure-greyscale palette — every token at zero chroma, including all five chart colours — which is exactly why an untouched build reads as a template. I replaced it with a warm-neutral OKLCH ramp, a real surface ladder (canvas → card → elevated, with the sidebar recessed below content), and one deep teal restricted to five roles: primary action, active nav, focus ring, links, and the first chart series. Depth comes from layered fills and hairline borders rather than drop shadows. Tabular numerals are global, because every figure in the app stacks in a column. Dark mode re-tunes the tokens rather than inverting greys, so no component carries a single dark: override.",
  },
  {
    h: "Configured by a file, not a settings screen",
    p: "Business name, currency, can price, and cashback rates live in one module. Each business runs its own deployment, so that file is the configuration — an editable copy in the database would just be a competing source of truth for the same number. It also makes standing up the next business a small, obvious diff.",
  },
];

const stack = [
  "Next.js 16 (App Router, RSC)",
  "TypeScript",
  "Postgres (RLS · plpgsql)",
  "Supabase (DB · Auth)",
  "Tailwind v4 + shadcn/ui (Base UI)",
  "Vitest",
  "Light + dark themes",
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

export default function AqualoopCaseStudy() {
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
        <div className="eyebrow">Case study · full-stack</div>
        <h1>AquaLoop — water delivery, cashback, and loyalty</h1>
        <div className="role">A small business&apos;s daily operations, in one dashboard.</div>
        <p className="lead">
          Water delivery businesses run on paper: a notebook of customers, cans scratched
          against names, cashback promised and forgotten. AquaLoop replaces that with an admin
          dashboard — customers, daily can orders, automatic cashback, and sales reporting — plus a
          public page where a customer checks their own balance by typing their mobile number. The
          interesting part isn&apos;t the CRUD; it&apos;s that the rules involving money are enforced
          where they can&apos;t be bypassed.
        </p>
        <div className="links">
          <a href={DEMO} target="_blank" rel="noreferrer">
            open live demo <span className="arw" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="note codenote">
          Built from a real brief for this exact product. The demo is a seeded water business —
          sign in with the credentials shown on the login page, or try the customer-facing
          cashback lookup with 98200 11201. Source is private; happy to walk through it on a call.
        </p>
      </header>

      <Shot
        src="/aqualoop-dashboard.png"
        alt="AquaLoop dashboard showing revenue and can KPIs, outstanding cashback liability, and a 14-day revenue chart"
        caption="Dashboard — today and this month at a glance, with outstanding cashback shown as what it is: a liability."
      />

      <section className="case-sec">
        <div className="label">What it does</div>
        <p>
          The owner adds customers, then records deliveries as they happen — a few cans to a
          household, a bulk drop to a tiffin service — backdating when a delivery gets written up
          late. Cashback accrues automatically on every order, with a bonus above a bulk threshold,
          and can be redeemed against a bill. Customers are searchable by mobile number, which is
          how the owner actually thinks of them. Reports roll the same data up by day and by month,
          separating cashback earned from cashback redeemed so the owner can see what they still
          owe.
        </p>
      </section>

      <Shot
        src="/aqualoop-customer.png"
        alt="Customer detail page with cashback balance, ledger of accruals and redemptions, and order history"
        caption="Customer detail — the full cashback ledger, so every rupee of a balance is explainable."
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
        src="/aqualoop-check.png"
        alt="Public cashback lookup page showing a customer's balance and a WhatsApp order button"
        caption="The public page — a balance and a can count, and deliberately nothing else. Built mobile-first; this is the same page on a desktop."
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
          The obvious extensions are subscriptions (a standing order every N days, generated rather
          than typed) and can deposits — the refundable per-can charge most of these businesses
          actually run, which is a second ledger alongside cashback. Both are structural additions
          rather than settings, which is exactly why this is built as one concrete business rather
          than a configurable template: the next operator&apos;s differences won&apos;t be knobs.
        </p>
      </section>

      <footer>
        <Link href="/">← back to portfolio</Link>
        <span>Cebu · 2026</span>
      </footer>
    </div>
  );
}
