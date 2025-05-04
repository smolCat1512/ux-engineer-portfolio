import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Remove the experimental appDir flag as it's now stable
};

export default nextConfig;