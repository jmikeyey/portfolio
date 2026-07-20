import { contactSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/send-contact-email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error("contact: failed to send email", err);
    return Response.json(
      { error: "Couldn’t send your note — please email me directly." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
