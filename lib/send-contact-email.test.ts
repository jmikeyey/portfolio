import { describe, it, expect } from "vitest";
import { contactEmailContent } from "./send-contact-email";

describe("contactEmailContent", () => {
  it("puts the chosen service in the subject and the first line", () => {
    const { subject, text } = contactEmailContent({
      name: "Ada",
      email: "ada@example.com",
      message: "We track orders in a group chat.",
      service: "dashboard",
    });
    expect(subject).toBe("Portfolio: Dashboard — Ada");
    expect(text).toBe(
      "Needs: Dashboard\n\nWe track orders in a group chat.\n\n— Ada <ada@example.com>",
    );
  });

  it("labels an undecided visitor plainly", () => {
    const { subject } = contactEmailContent({
      name: "Ben",
      email: "ben@example.com",
      message: "Not sure what I need yet.",
      service: "not-sure",
    });
    expect(subject).toBe("Portfolio: Not sure yet — Ben");
  });
});
