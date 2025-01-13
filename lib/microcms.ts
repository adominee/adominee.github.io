import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("Please set MICROCMS_API_KEY in environment variables.");
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("Please set MICROCMS_SERVICE_DOMAIN in environment variables.");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});