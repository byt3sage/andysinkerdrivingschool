import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/driving-instructor-training",
        destination: "/instructor-training",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
