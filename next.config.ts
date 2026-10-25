import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/projets",
        destination: "/#projets",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
