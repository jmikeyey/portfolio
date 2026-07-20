import { describe, it, expect } from "vitest";
import { contactSchema } from "./contact-schema";

const base = { name: "Ada", email: "ada@example.com", message: "Hello there, let's talk soon." };

describe("contactSchema", () => {
  it("accepts a valid submission", () => {
    expect(contactSchema.safeParse(base).success).toBe(true);
  });

  it("rejects an empty name", () => {
    expect(contactSchema.safeParse({ ...base, name: "" }).success).toBe(false);
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...base, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a too-short message", () => {
    expect(contactSchema.safeParse({ ...base, message: "hi" }).success).toBe(false);
  });
});
