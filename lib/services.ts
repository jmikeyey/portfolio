export const SERVICE_VALUES = [
  "ai-assistant",
  "dashboard",
  "website",
  "automation",
  "not-sure",
] as const;

export type ServiceValue = (typeof SERVICE_VALUES)[number];

export const SERVICE_LABELS: Record<ServiceValue, string> = {
  "ai-assistant": "AI assistant",
  dashboard: "Dashboard",
  website: "Website",
  automation: "Automation",
  "not-sure": "Not sure yet",
};
