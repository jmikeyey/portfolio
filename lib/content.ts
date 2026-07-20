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
} as const;

export type Project = {
  title: string;
  tag: string;
  status: string;
  blurb: string;
  stack: string[];
  demo?: string;
  code?: string;
};

// Intentionally empty for now — projects get added here as they ship.
export const projects: Project[] = [];

export type Job = { when: string; role: string; org: string; blurb: string };

export const experience: Job[] = [
  {
    when: "2024 — Now",
    role: "Full-Stack Developer",
    org: "Tolstoy",
    blurb:
      "Shipped an AI support chatbot that cut ticket volume ~30%. Improved virtual try-on adherence from 46% → 75% with an LLM-as-judge eval pipeline. Deployed containerized AI services on AWS ECS behind an ALB.",
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
