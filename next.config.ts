import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  optimizeFonts: true,
  images: {
    domains: [
      "dynamic-media-cdn.tripadvisor.com",
      "ic.pics.livejournal.com",
      "www.google.com",
    ],
  },
};

export default nextConfig;
