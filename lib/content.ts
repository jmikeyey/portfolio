export const profile = {
  name: "John Micky Butnande",
  role: "Full-stack & AI engineer",
  location: "Cebu, Philippines · working remotely",
  lead:
    "I build LLM-powered agents, event-driven pipelines, and production systems in the cloud. Founding-engineer experience taking features from a rough idea all the way to production — across backend, infrastructure, and AI.",
  status: "Open to full-stack & AI engineering work",
  email: "butnande.johnmicky@gmail.com",
  github: "https://github.com/jmikeyey",
  linkedin: "https://www.linkedin.com/in/jmickybutnande/",
  resume: "/butnande-resume.pdf",
} as const;

export type Project = {
  title: string;
  tag: string;
  status: string;
  blurb: string;
  stack: string[];
  demo?: string;
  code?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: "Front Desk — AI Receptionist",
    tag: "Full-stack · AI",
    status: "Live",
    blurb:
      "A multi-tenant AI receptionist. Each business gets a hosted chat page that answers from its own knowledge base, books appointments (timezone-correct, no double-booking), and captures leads — all handed to an owner dashboard. Built end-to-end on free infrastructure.",
    stack: [
      "Next.js",
      "TypeScript",
      "Postgres + pgvector",
      "Drizzle",
      "Supabase Auth",
      "Vercel AI SDK",
      "Groq",
    ],
    demo: "https://ai-receptionist-eta-three.vercel.app",
    caseStudy: "/work/ai-receptionist",
  },
  {
    title: "AquaLoop — Water Delivery & Loyalty",
    tag: "Full-stack",
    status: "Live",
    blurb:
      "An admin dashboard for a water delivery business: customers, daily can orders, automatic cashback, and sales reporting — plus a public page where customers check their balance by mobile number. Cashback is a signed ledger, and the rules that must never break (no overdrawn redemption, no order without its cashback) are enforced inside Postgres.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Postgres + RLS",
      "Supabase Auth",
      "Tailwind + shadcn/ui",
      "Vercel",
    ],
    demo: "https://aqualoop-plum.vercel.app",
    caseStudy: "/work/aqualoop",
  },
  {
    title: "Katig — BPO Landing Page",
    tag: "Front-end · design",
    status: "Live",
    blurb:
      "A marketing site for a fictional Cebu BPO, built as a self-directed sample — the company, the brand, and every claim on the page are invented. What's real is the craft: a name and a mark drawn from the outrigger of a bangka, an above-the-fold that states the offer and its proof side by side, sections ordered as a buyer's objections, and a hero background drawn on canvas at device resolution instead of shipped as an image.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Hand-written CSS",
      "Canvas 2D",
      "next/font",
      "Vercel",
    ],
    demo: "https://katig-bpo.vercel.app",
    caseStudy: "/work/katig",
  },
];

export type Job = { when: string; role: string; org: string; blurb: string };

export const experience: Job[] = [
  {
    when: "2024 — Now",
    role: "Full-Stack Developer",
    org: "Tolstoy",
    blurb:
      "Sole maintainer of the AI shopping assistant embedded in merchant storefronts, including Culture Kings (~300k shoppers). Improved virtual try-on adherence from 46% → 75% with an LLM-as-judge eval pipeline. Built a Model Context Protocol (MCP) server that exposes core Tolstoy platform workflows as tools, so AI assistants can drive them directly. Deployed containerized AI services on AWS ECS behind an ALB.",
  },
  {
    when: "2024 — 2025",
    role: "Founding Engineer",
    org: "Framework",
    blurb:
      "Built an AI issue agent processing 200+ Slack & Gmail messages a day, on a serverless backend (Lambda, SQS, DynamoDB, RDS) with a type-safe Zod API layer.",
  },
  {
    when: "2024",
    role: "Full-Stack Intern",
    org: "El Progreso De Cebuano",
    blurb: "MERN web apps with real-time data via MongoDB Change Streams and Socket.io.",
  },
];

export const stack: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "AWS (CDK · ECS · Lambda)",
  "PostgreSQL",
  "DynamoDB",
  "LLMs & Agents",
  "Vercel AI SDK",
];
