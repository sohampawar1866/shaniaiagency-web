import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.shaniaiagency.tech",
          },
        ],
        destination: "https://shaniaiagency.tech/:path*",
        permanent: true, // HTTP 301 Permanent Redirect (consolidates 100% SEO link juice)
      },
    ];
  },
};

export default nextConfig;
