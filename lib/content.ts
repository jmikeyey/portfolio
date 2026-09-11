import type { ServiceValue } from "./services";

export const SITE_URL = "https://johnmicky-butnande.vercel.app";

export const DEMOS = {
  frontDesk: "https://ai-receptionist-eta-three.vercel.app",
  aquaLoop: "https://aqualoop-plum.vercel.app",
  katig: "https://katig-bpo.vercel.app",
} as const;

export const profile = {
  name: "John Micky Butnande",
  shortName: "John Micky",
  subtitle: "Developer · Cebu, Philippines · works remotely",
  bio: "I'm a developer at Tolstoy, where I look after the AI shopping assistant that runs on online stores, including Culture Kings and its roughly 300,000 shoppers. Before that I was the founding engineer at Framework, where I built an AI agent that processed 200+ Slack and Gmail messages a day.",
  photo: "/john-micky-butnande.jpg",
  email: "butnande.johnmicky@gmail.com",
  github: "https://github.com/jmikeyey",
  linkedin: "https://www.linkedin.com/in/jmickybutnande/",
  resume: "/butnande-resume.pdf",
} as const;

export const home = {
  seoTitle: "John Micky Butnande — AI assistants, dashboards & websites",
  h1Top: "Less busywork.",
  h1Highlight: "More business.",
  side: "AI assistants, dashboards, websites and automations for small businesses that have outgrown spreadsheets and group chats.",
  proofLead: "No mockups.",
  proofRest: "Every screenshot above comes from a working project you can open.",
  stepsEyebrow: "How working with me goes",
  stepsHeading: "Three steps. No tech talk needed.",
  aboutEyebrow: "Who's building it",
  contactHeading: "What's slowing your business down?",
} as const;

export const workingSteps = [
  {
    title: "Tell me what's slowing you down",
    body: "Describe the problem in your own words. I'll reply with what I'd build and what it would take.",
  },
  {
    title: "See it working early",
    body: "You get a link to the real thing while it's being built, so you can click through it and tell me what to change.",
  },
  {
    title: "Launch, and it's yours",
    body: "It goes live for your customers. You get the logins, and I stay on for changes.",
  },
] as const;

export type ThemeColor = "teal" | "amber" | "violet" | "coral";
export type ImageMedia = { kind: "image"; src: `/${string}`; alt: string };
export type FlowMedia = { kind: "flow"; steps: readonly string[] };
export type EmailMedia = { kind: "email"; subject: string; body: string };
export type CardMedia = (ImageMedia & { crop?: "lookup-card" }) | FlowMedia | EmailMedia;

export type HowItsBuilt = {
  intro?: string;
  decisionsLabel?: "Engineering decisions" | "Design & build decisions";
  decisions?: readonly { h: string; p: string }[];
  stack?: readonly string[];
  next?: string;
};

export type ExamplePanel = { title: string; body: string; note?: string };
export type SolutionCard = { title: string; line: string; media: CardMedia };

export type Solution = {
  slug: "ai-assistant" | "dashboards" | "websites" | "automations";
  service: Exclude<ServiceValue, "not-sure">;
  color: ThemeColor;
  name: string;
  seoTitle: string;
  tile: { pill: string; line: string; visual: ImageMedia | FlowMedia };
  hero: {
    h1: string;
    lead: string;
    demo?: { label: string; href: string };
    visual: (ImageMedia & { caption?: string }) | FlowMedia;
  };
  example: {
    eyebrow: string;
    h2: string;
    disclosure?: string;
    panels: readonly [ExamplePanel, ExamplePanel];
  };
  cards: readonly [SolutionCard, SolutionCard, SolutionCard];
  tryIt?: {
    before: string;
    code?: string;
    after?: string;
    button?: { label: string; href: string };
  };
  fit: readonly [string, string, string, string];
  contactHeading: string;
  howItsBuilt: HowItsBuilt;
};

const AUTOMATION_FLOW = [
  "💬 Customer books online",
  "🗂 Saved to your dashboard",
  "✉️ You get an email",
] as const;

export const solutions: readonly Solution[] = [
  {
    slug: "ai-assistant",
    service: "ai-assistant",
    color: "teal",
    name: "AI chat assistants",
    seoTitle: "AI chat assistants for small businesses — John Micky",
    tile: {
      pill: "Live demo",
      line: "Answers customer questions and books appointments, day and night.",
      visual: {
        kind: "image",
        src: "/receptionist-dashboard.png",
        alt: "Front Desk owner dashboard with appointments, leads and conversations",
      },
    },
    hero: {
      h1: "Answer every customer, even after hours.",
      lead: "An assistant on your website that answers questions from your own information, books appointments and takes messages, then hands it all to you.",
      demo: { label: "Try the live demo ↗", href: DEMOS.frontDesk },
      visual: {
        kind: "image",
        src: "/receptionist-landing.png",
        alt: "Front Desk's landing page with a booking conversation in the chat",
      },
    },
    example: {
      eyebrow: "Example project",
      h2: "Front Desk, for appointment-based businesses",
      panels: [
        { title: "The problem", body: "Small businesses miss calls and messages." },
        {
          title: "What I built",
          body: "Front Desk gives each business a hosted chat page it can link from its site: it chats with visitors, answers from the business's own information, books real appointments, and captures leads when someone isn't ready yet — then hands all of it to an owner dashboard.",
        },
      ],
    },
    cards: [
      {
        title: "Answers from your own info",
        line: "Add your hours, services and policies as plain text, and it answers from that.",
        media: {
          kind: "image",
          src: "/receptionist-chat.png",
          alt: "The Front Desk chat listing a dental clinic's services",
        },
      },
      {
        title: "Books appointments live",
        line: "Real availability, timezone-correct, no double-booking.",
        media: {
          kind: "image",
          src: "/receptionist-landing.png",
          alt: "A visitor booking a Friday cleaning through the chat",
        },
      },
      {
        title: "Captures every lead",
        line: "When someone's not ready to book, it takes their details and reason so you can follow up.",
        media: {
          kind: "image",
          src: "/receptionist-dashboard.png",
          alt: "The owner dashboard listing an upcoming appointment and a new lead",
        },
      },
    ],
    tryIt: {
      before:
        "Open the chat in the corner of this page and ask about services or book a time. It's a sample dental clinic.",
    },
    fit: [
      "Customers ask the same questions every day",
      "You take bookings by message or phone",
      "Messages arrive after you've closed",
      "Leads slip through when you're busy",
    ],
    contactHeading: "Missing messages while you're busy?",
    howItsBuilt: {
      decisionsLabel: "Engineering decisions",
      decisions: [
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
      ],
      stack: [
        "Next.js 16",
        "TypeScript",
        "Postgres + pgvector",
        "Drizzle ORM",
        "Supabase (DB · Auth · Edge Functions)",
        "Vercel AI SDK",
        "Groq (free models)",
        "Vercel",
      ],
      next: "Voice is the obvious next channel — today it handles website chat; a real phone line would sit on top of the same brain (the booking, knowledge, and lead logic don't change), but it needs a paid telephony layer, so I scoped it out to keep everything on free infrastructure. Beyond that: self-service onboarding.",
    },
  },
  {
    slug: "dashboards",
    service: "dashboard",
    color: "amber",
    name: "Dashboards & internal tools",
    seoTitle: "Small business dashboards & internal tools — John Micky",
    tile: {
      pill: "Live demo",
      line: "Customers, orders and sales in one place, instead of a notebook.",
      visual: {
        kind: "image",
        src: "/aqualoop-dashboard.png",
        alt: "AquaLoop dashboard with today's revenue, a 14-day chart and recent orders",
      },
    },
    hero: {
      h1: "Stop running your business from a notebook.",
      lead: "One dashboard for your customers, orders and money, built around how your business already works.",
      demo: { label: "Try the live demo ↗", href: DEMOS.aquaLoop },
      visual: {
        kind: "image",
        src: "/aqualoop-dashboard.png",
        alt: "AquaLoop dashboard with today's revenue, a 14-day chart and recent orders",
      },
    },
    example: {
      eyebrow: "Example project",
      h2: "AquaLoop, for water delivery shops",
      panels: [
        {
          title: "The problem",
          body: "Water delivery businesses run on paper: a notebook of customers, cans scratched against names, cashback promised and forgotten.",
        },
        {
          title: "What I built",
          body: "An admin dashboard for customers, daily can orders, automatic cashback and sales reports, plus a public page where each customer checks their own balance with their mobile number.",
          note: "Built from a real brief for this exact product.",
        },
      ],
    },
    cards: [
      {
        title: "Today at a glance",
        line: "Revenue, cans delivered and the cashback you owe, on one screen.",
        media: {
          kind: "image",
          src: "/aqualoop-dashboard.png",
          alt: "AquaLoop dashboard with revenue, cashback owed and recent orders",
        },
      },
      {
        title: "Every customer's history",
        line: "Orders, cashback earned and redeemed, and a WhatsApp button for each customer.",
        media: {
          kind: "image",
          src: "/aqualoop-customer.png",
          alt: "A customer's page with cashback balance, ledger and a WhatsApp button",
        },
      },
      {
        title: "A page for your customers",
        line: "They type their mobile number to see their cashback, then order on WhatsApp.",
        media: {
          kind: "image",
          src: "/aqualoop-check.png",
          alt: "The public cashback lookup showing ₹380.00 earned",
          crop: "lookup-card",
        },
      },
    ],
    tryIt: {
      before:
        "It's a sample water delivery business. Sign in with the details on the login page, or look up a customer's cashback with ",
      code: "98200 11201",
      after: ".",
      button: { label: "Open the live demo ↗", href: DEMOS.aquaLoop },
    },
    fit: [
      "You sell to the same customers every week",
      "You run a loyalty, points or cashback program",
      "Your records live in a notebook, spreadsheet or group chat",
      "Your staff need one place to log orders",
    ],
    contactHeading: "Got a notebook or spreadsheet that's getting out of hand?",
    howItsBuilt: {
      decisionsLabel: "Engineering decisions",
      decisions: [
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
      ],
      stack: [
        "Next.js 16 (App Router, RSC)",
        "TypeScript",
        "Postgres (RLS · plpgsql)",
        "Supabase (DB · Auth)",
        "Tailwind v4 + shadcn/ui (Base UI)",
        "Vitest",
        "Light + dark themes",
        "Vercel",
      ],
      next: "The obvious extensions are subscriptions (a standing order every N days, generated rather than typed) and can deposits — the refundable per-can charge most of these businesses actually run, which is a second ledger alongside cashback. Both are structural additions rather than settings, which is exactly why this is built as one concrete business rather than a configurable template: the next operator's differences won't be knobs.",
    },
  },
  {
    slug: "websites",
    service: "website",
    color: "violet",
    name: "Websites & landing pages",
    seoTitle: "Websites & landing pages for small businesses — John Micky",
    tile: {
      pill: "Sample site",
      line: "A site that explains what you do and turns visitors into inquiries.",
      visual: {
        kind: "image",
        src: "/katig-hero.png",
        alt: "The first screen of Katig, a sample marketing site",
      },
    },
    hero: {
      h1: "A website that turns visitors into inquiries.",
      lead: "A clear, fast site that says what you do, shows why people should trust you, and makes it easy to get in touch.",
      demo: { label: "See the sample site ↗", href: DEMOS.katig },
      visual: {
        kind: "image",
        src: "/katig-hero.png",
        alt: "The first screen of Katig, a sample marketing site",
        caption:
          "Katig is a sample brand I invented. The company, its clients and its numbers are not real.",
      },
    },
    example: {
      eyebrow: "Sample project",
      h2: "Katig, a sample brand I designed and built",
      disclosure:
        "Katig is fictional. I invented the company, the brand, the client names, the testimonials, and every number on the page as a sample piece — nothing on it is a real business, a real client, or a result I produced for anyone.",
      panels: [
        {
          title: "The brief I set myself",
          body: "A marketing site for a fictional Cebu outsourcing company, built as a self-directed sample.",
        },
        {
          title: "What I built",
          body: "A name and a mark drawn from the outrigger of a bangka, a first screen that states the offer and its proof side by side, and sections ordered around the questions a buyer asks before they call.",
        },
      ],
    },
    cards: [
      {
        title: "A first screen that makes the offer",
        line: "What the company does and why to believe it, before anyone scrolls.",
        media: {
          kind: "image",
          src: "/katig-hero.png",
          alt: "Katig's first screen with its headline, offer and a sample scorecard",
        },
      },
      {
        title: "Services a buyer can scan",
        line: "Six services, each with a plain one-line promise and what's included.",
        media: {
          kind: "image",
          src: "/katig-services.png",
          alt: "Katig's services section with six service cards",
        },
      },
      {
        title: "A process with no mystery",
        line: "Every step from the first call to going live, and what the client does at each one.",
        media: {
          kind: "image",
          src: "/katig-process.png",
          alt: "Katig's five-step process timeline",
        },
      },
    ],
    tryIt: {
      before: "Every name and number on it is made up. Click through it the way a buyer would.",
      button: { label: "Open the sample site ↗", href: DEMOS.katig },
    },
    fit: [
      "People find you but don't get in touch",
      "Your site doesn't explain what you actually do",
      "You rely on a Facebook page alone",
      "You need a page for a new offer or campaign",
    ],
    contactHeading: "Is your website costing you customers?",
    howItsBuilt: {
      decisionsLabel: "Design & build decisions",
      decisions: [
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
      ],
      stack: [
        "Next.js 16 (App Router, RSC)",
        "TypeScript",
        "Hand-written CSS (Tailwind v4 reset only)",
        "Canvas 2D",
        "next/font (Archivo · IBM Plex Sans · Plex Mono)",
        "Vercel",
      ],
      next: "As a sample it's finished, but the honest gap is that a real client's version needs the things a fiction can't justify: a contact form with a handler and spam defence, per-service pages for the search traffic that actually converts in this industry, and a careers flow that accepts an application rather than pointing at an inbox. Each is a new surface rather than a change to this one, which is the point — the page was structured so that adding them doesn't mean rebuilding it.",
    },
  },
  {
    slug: "automations",
    service: "automation",
    color: "coral",
    name: "Automations",
    seoTitle: "Automations for small businesses — John Micky",
    tile: {
      pill: "Built into Front Desk",
      line: "Your tools pass the work along, so nobody has to copy and paste.",
      visual: { kind: "flow", steps: AUTOMATION_FLOW },
    },
    hero: {
      h1: "Stop copying and pasting between your tools.",
      lead: "Automations that move the work along on their own: a booking becomes an email, a message becomes a task.",
      visual: { kind: "flow", steps: AUTOMATION_FLOW },
    },
    example: {
      eyebrow: "From my work",
      h2: "Two automations I've built",
      panels: [
        {
          title: "Inside Front Desk",
          body: "When a visitor books an appointment or leaves a message, the owner gets an email right away with the details.",
        },
        {
          title: "At Framework",
          body: "As the founding engineer, I built an AI agent that processed 200+ Slack and Gmail messages a day.",
        },
      ],
    },
    cards: [
      {
        title: "Booking alert",
        line: "Illustration of the real output",
        media: {
          kind: "email",
          subject: "New booking — Sarah Chen",
          body: "Sarah Chen booked Cleaning on Monday, Jul 27 at 10:00 AM.",
        },
      },
      {
        title: "Lead alert",
        line: "Illustration of the real output",
        media: {
          kind: "email",
          subject: "New lead — Mark Reyes",
          body: "Mark Reyes left a message:\n\nFollow up about teeth whitening inquiry",
        },
      },
      {
        title: "Messages sorted for the team",
        line: "Illustration of the real output",
        media: {
          kind: "flow",
          steps: ["200+ Slack & Gmail messages a day", "AI agent reads each one", "Issues for the team"],
        },
      },
    ],
    fit: [
      "You copy the same details between apps",
      "You hear about new bookings or leads too late",
      "Someone spends hours sorting messages",
      "Your forms, sheets and inbox don't talk to each other",
    ],
    contactHeading: "Doing the same copy-paste job every day?",
    howItsBuilt: {
      intro:
        "Front Desk sends the owner alerts through Resend when a booking or a lead is saved. Framework's agent ran on a serverless AWS backend (Lambda, SQS, DynamoDB, RDS) with a type-safe Zod API layer.",
    },
  },
];

export function getSolution(slug: Solution["slug"]): Solution {
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) throw new Error(`Unknown solution: ${slug}`);
  return solution;
}

