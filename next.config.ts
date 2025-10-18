import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  appDir: true, // enable App Router
  output: "standalone", // optional but good for hosting
};

export default nextConfig;
