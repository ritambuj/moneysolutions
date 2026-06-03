"use server";

import { getCachedPayload } from "@/lib/payload-client";

import type { LeadSource } from "@/collections/Leads";

export type CreateLeadInput = {
  source: LeadSource;
  phone: string;
  name?: string;
  pan?: string;
  employment?: string;
  income?: string;
  pincode?: string;
  loanInterest?: string;
  message?: string;
  selectedLender?: string;
};

export type CreateLeadResult =
  | { ok: true; id: string | number }
  | { ok: false; error: string };

const PHONE_RE = /^[6-9]\d{9}$/;

export type ContactFormInput = {
  name: string;
  phone: string;
  loanInterest: string;
  message?: string;
};

/** Persists Contact us page submissions to the Leads collection in Payload. */
export async function submitContactForm(
  input: ContactFormInput
): Promise<CreateLeadResult> {
  const name = input.name.trim();
  if (!name) {
    return { ok: false, error: "Please enter your full name." };
  }

  return createLead({
    source: "contact",
    name,
    phone: input.phone,
    loanInterest: input.loanInterest,
    message: input.message?.trim() || undefined,
  });
}

export async function createLead(
  input: CreateLeadInput
): Promise<CreateLeadResult> {
  const phone = input.phone.replace(/\D/g, "").slice(-10);
  if (!PHONE_RE.test(phone)) {
    return {
      ok: false,
      error: "Enter a valid 10-digit Indian mobile number.",
    };
  }

  try {
    const payload = await getCachedPayload();
    const doc = await payload.create({
      collection: "leads",
      data: {
        source: input.source,
        phone,
        name: input.name?.trim() || undefined,
        pan: input.pan?.trim().toUpperCase() || undefined,
        employment: input.employment?.trim() || undefined,
        income: input.income?.trim() || undefined,
        pincode: input.pincode?.replace(/\D/g, "").slice(0, 6) || undefined,
        loanInterest: input.loanInterest?.trim() || undefined,
        message: input.message?.trim() || undefined,
        selectedLender: input.selectedLender?.trim() || undefined,
        status: "new",
      },
      overrideAccess: true,
    });

    return { ok: true, id: doc.id };
  } catch (err) {
    console.error("[createLead]", err);
    return { ok: false, error: "Could not save your details. Please try again." };
  }
}
