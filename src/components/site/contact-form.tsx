"use client";

import * as React from "react";
import { submitContactForm } from "@/lib/leads";

const LOAN_TYPES = [
  "Personal Loan",
  "Home Loan",
  "Loan Against Property",
  "Credit Card",
  "Health Insurance",
  "Life Insurance",
  "Other",
] as const;

const PHONE_RE = /^[6-9]\d{9}$/;

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState("");

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [loanInterest, setLoanInterest] = React.useState<string>(LOAN_TYPES[0]);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const digitsPhone = phone.replace(/\D/g, "").slice(-10);

    if (!trimmedName) {
      setError("Please enter your full name.");
      return;
    }
    if (!PHONE_RE.test(digitsPhone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    setSaving(true);
    const result = await submitContactForm({
      name: trimmedName,
      phone: digitsPhone,
      loanInterest,
      message,
    });
    setSaving(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }
    setSubmitted(true);
  };

  return (
    <form
      className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className="text-xl font-semibold text-foreground">Send a message</h2>
      {submitted ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Thank you. Your details have been received and our team will contact
          you shortly.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium" htmlFor="contact-name">
              Full name
            </label>
            <input
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-lg border border-border px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="contact-phone">
              Mobile number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              required
              maxLength={10}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              placeholder="10-digit mobile number"
              className="mt-1.5 h-11 w-full rounded-lg border border-border px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="contact-loan">
              I&apos;m interested in
            </label>
            <select
              id="contact-loan"
              name="loanInterest"
              value={loanInterest}
              onChange={(e) => setLoanInterest(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              {LOAN_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5 w-full resize-y rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <label className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
            <input type="checkbox" required className="mt-0.5" />
            I authorise Money Star to contact me via call/SMS/WhatsApp/email. I
            have read the Terms and Privacy Policy.
          </label>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={saving}
            className="flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
          >
            {saving ? "Submitting…" : "Submit"}
          </button>
        </div>
      )}
    </form>
  );
}
