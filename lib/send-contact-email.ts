import { Resend } from "resend";
import type { ContactInput } from "./contact-schema";
import { SERVICE_LABELS } from "./services";

const TO = "butnande.johnmicky@gmail.com";

export function contactEmailContent(input: ContactInput): { subject: string; text: string } {
  const label = SERVICE_LABELS[input.service];
  return {
    subject: `Portfolio: ${label} — ${input.name}`,
    text: `Needs: ${label}\n\n${input.message}\n\n— ${input.name} <${input.email}>`,
  };
}

/**
 * Email a contact submission to John's inbox, with the sender as reply-to.
 * Throws if the key is missing or Resend rejects — the caller surfaces the failure.
 */
export async function sendContactEmail(input: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const resend = new Resend(apiKey);
  const { subject, text } = contactEmailContent(input);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: TO,
    replyTo: input.email,
    subject,
    text,
  });

  if (error) throw new Error(`Resend send failed: ${error.message ?? "unknown error"}`);
}
