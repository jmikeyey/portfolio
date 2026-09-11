import { describe, it, expect, vi, beforeEach } from "vitest";

const { sendContactEmail } = vi.hoisted(() => ({ sendContactEmail: vi.fn(async () => {}) }));
vi.mock("@/lib/send-contact-email", () => ({ sendContactEmail }));

import { POST } from "./route";

function req(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

const valid = {
  name: "Ada",
  email: "ada@example.com",
  message: "Hello, I'd like to work with you.",
  service: "website",
};

beforeEach(() => sendContactEmail.mockReset());

describe("POST /api/contact", () => {
  it("returns 400 on invalid input and does not send", async () => {
    const res = await POST(req({ name: "", email: "", message: "hi" }));
    expect(res.status).toBe(400);
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("returns 400 when the service is missing and does not send", async () => {
    const res = await POST(
      req({ name: "Ada", email: "ada@example.com", message: "Hello, I'd like to work with you." }),
    );
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "Please choose what you need." });
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("returns 200 and sends on valid input", async () => {
    const res = await POST(req(valid));
    expect(res.status).toBe(200);
    expect(sendContactEmail).toHaveBeenCalledOnce();
  });

  it("returns 500 when sending fails (fails loud, no false success)", async () => {
    sendContactEmail.mockRejectedValueOnce(new Error("resend down"));
    const res = await POST(req(valid));
    expect(res.status).toBe(500);
  });
});
