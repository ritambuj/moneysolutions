import type { CollectionConfig } from "payload";

export const LEAD_SOURCES = [
  "apply_step1",
  "apply_complete",
  "contact",
  "promo_modal",
  "offer_apply",
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

export const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "phone",
    defaultColumns: ["name", "phone", "loanInterest", "source", "status", "createdAt"],
    description:
      "All website enquiries including Contact us, apply flow, promo modal, and offer applications.",
  },
  access: {
    create: () => false,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "source",
      type: "select",
      required: true,
      options: [
        { label: "Apply — step 1 (PAN + phone)", value: "apply_step1" },
        { label: "Apply — complete", value: "apply_complete" },
        { label: "Contact form", value: "contact" },
        { label: "Promo modal", value: "promo_modal" },
        { label: "Eligible offer — Apply (no partner URL)", value: "offer_apply" },
      ],
    },
    {
      name: "name",
      type: "text",
      label: "Full name",
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "loanInterest",
      type: "text",
      label: "Product interest",
    },
    {
      name: "message",
      type: "textarea",
      label: "Message",
    },
    {
      name: "selectedLender",
      type: "text",
      label: "Lender applied for",
    },
    {
      name: "pan",
      type: "text",
      admin: {
        description: "Stored for loan applications only. Handle per your privacy policy.",
      },
    },
    {
      name: "employment",
      type: "text",
    },
    {
      name: "income",
      type: "text",
    },
    {
      name: "pincode",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Contacted", value: "contacted" },
        { label: "Qualified", value: "qualified" },
        { label: "Closed", value: "closed" },
      ],
    },
  ],
};
