import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3gum1ht0lrpyf.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
