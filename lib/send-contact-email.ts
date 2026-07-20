import { Resend } from "resend";
import type { ContactInput } from "./contact-schema";

const TO = "butnande.johnmicky@gmail.com";

/**
 * Email a contact submission to John's inbox, with the sender as reply-to.
 * Throws if the key is missing or Resend rejects — the caller surfaces the failure.
 */
export async function sendContactEmail(input: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: TO,
    replyTo: input.email,
    subject: `Portfolio note from ${input.name}`,
    text: `${input.message}\n\n— ${input.name} <${input.email}>`,
  });

  if (error) throw new Error(`Resend send failed: ${error.message ?? "unknown error"}`);
}
