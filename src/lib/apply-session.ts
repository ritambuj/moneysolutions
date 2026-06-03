export const APPLY_PROFILE_KEY = "ms-apply-profile";
export const APPLIED_LENDERS_KEY = "ms-applied-lenders";

export type ApplyProfile = {
  phone: string;
  pan: string;
  employment?: string;
  income?: string;
  pincode?: string;
};

export function readApplyProfile(): ApplyProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(APPLY_PROFILE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ApplyProfile;
  } catch {
    return null;
  }
}

export function saveApplyProfile(profile: ApplyProfile) {
  try {
    sessionStorage.setItem(APPLY_PROFILE_KEY, JSON.stringify(profile));
  } catch {
    /* ignore */
  }
}

export function readAppliedLenderIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = sessionStorage.getItem(APPLIED_LENDERS_KEY);
    if (!raw) return new Set();
    const ids = JSON.parse(raw) as string[];
    return new Set(ids);
  } catch {
    return new Set();
  }
}

export function markLenderApplied(lenderId: string) {
  const ids = readAppliedLenderIds();
  ids.add(lenderId);
  try {
    sessionStorage.setItem(APPLIED_LENDERS_KEY, JSON.stringify([...ids]));
  } catch {
    /* ignore */
  }
}
