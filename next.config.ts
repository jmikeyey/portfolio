import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work/ai-receptionist", destination: "/ai-assistant", permanent: true },
      { source: "/work/aqualoop", destination: "/dashboards", permanent: true },
      { source: "/work/katig", destination: "/websites", permanent: true },
    ];
  },
};

export default nextConfig;
