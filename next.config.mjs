import path from "path";
import { fileURLToPath } from "url";
import { withPayload } from "@payloadcms/next/withPayload";

/** Absolute project root — stops Next from using a parent folder lockfile as workspace root. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
