"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    if (res.ok) {
      setStatus("sent");
      return;
    }
    const data = await res.json().catch(() => ({}));
    setError(data.error ?? "Something went wrong. Please try again.");
    setStatus("error");
  }

  return (
    <section className="block fade" id="contact">
      <div className="label">Contact</div>
      <p className="note" style={{ marginBottom: "22px" }}>
        Have something to build, or just want to talk shop? Email me at{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a> — or leave a note.
      </p>

      {status === "sent" ? (
        <p className="note">Thanks — your note’s on its way. I’ll get back to you soon.</p>
      ) : (
        <form className="contact-grid" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" name="message" rows={4} placeholder="What’s on your mind?" required />
          </div>
          {error && (
            <p className="note" role="alert" style={{ color: "#B4453A" }}>
              {error}
            </p>
          )}
          <button className="btn primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send note"}
          </button>
        </form>
      )}
    </section>
  );
}
