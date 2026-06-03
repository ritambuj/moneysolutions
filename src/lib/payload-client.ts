import config from "@payload-config";
import { getPayload, type Payload } from "payload";

let payloadPromise: Promise<Payload> | null = null;

/** Reuse one Payload instance across server actions (avoids re-init on every lead save). */
export function getCachedPayload(): Promise<Payload> {
  if (!payloadPromise) {
    payloadPromise = getPayload({ config });
  }
  return payloadPromise;
}
