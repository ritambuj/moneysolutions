"use client";

import * as React from "react";

const LOAN_TYPES = [
  "Personal Loan",
  "Home Loan",
  "Loan Against Property",
  "Credit Card",
  "Health Insurance",
  "Life Insurance",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <form
      className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="text-xl font-semibold text-foreground">Send a message</h2>
      {submitted ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Thank you. Our team will contact you shortly.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium" htmlFor="contact-name">
              Full name
            </label>
            <input
              id="contact-name"
              required
              className="mt-1.5 h-11 w-full rounded-lg border border-border px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="contact-phone">
              Mobile number
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              className="mt-1.5 h-11 w-full rounded-lg border border-border px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="contact-loan">
              I&apos;m interested in
            </label>
            <select
              id="contact-loan"
              className="mt-1.5 h-11 w-full rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              {LOAN_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              className="mt-1.5 w-full resize-y rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <label className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
            <input type="checkbox" required className="mt-0.5" />
            I authorise Money Star to contact me via call/SMS/WhatsApp/email. I
            have read the Terms and Privacy Policy.
          </label>
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Submit
          </button>
        </div>
      )}
    </form>
  );
}
