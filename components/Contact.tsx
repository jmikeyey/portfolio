"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { SERVICE_LABELS, SERVICE_VALUES, type ServiceValue } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ heading, defaultService }: { heading: string; defaultService: ServiceValue }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    let res: Response;
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          service: form.get("service"),
        }),
      });
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
      return;
    }

    if (res.ok) {
      setStatus("sent");
      return;
    }
    const data = await res.json().catch(() => ({}));
    setError(data.error ?? "Something went wrong. Please try again.");
    setStatus("error");
  }

  return (
    <section id="contact" className="contact">
      <div>
        <p className="eyebrow eyebrow-on-dark">Start a project</p>
        <h2 className="h2">{heading}</h2>
        <p className="contact-lead">
          Tell me in plain words. You don&apos;t need to know anything technical, and I&apos;ll tell you what I&apos;d build.
        </p>
        <a className="contact-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>

      {status === "sent" ? (
        <p className="contact-sent" role="status">
          Thanks — your note’s on its way. I’ll get back to you soon.
        </p>
      ) : (
        <form className="contact-form" onSubmit={onSubmit}>
          <fieldset className="chips">
            <legend>What do you need?</legend>
            <div className="chip-list">
              {SERVICE_VALUES.map((value) => (
                <label key={value} className="chip">
                  <input type="radio" name="service" value={value} defaultChecked={value === defaultService} required />
                  <span>{SERVICE_LABELS[value]}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="field-row">
            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="We track orders in a group chat and keep losing them…"
              required
            />
          </div>
          {error && (
            <p className="contact-error" role="alert">
              {error}
            </p>
          )}
          <button className="btn btn-amber" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
        </form>
      )}
    </section>
  );
}
