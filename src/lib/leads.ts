"use server";

import config from "@payload-config";
import { getPayload } from "payload";

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

export async function createLead(
  input: CreateLeadInput
): Promise<CreateLeadResult> {
  const phone = input.phone.replace(/\D/g, "").slice(-10);
  if (phone.length !== 10) {
    return { ok: false, error: "Invalid phone number" };
  }

  try {
    const payload = await getPayload({ config });
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
