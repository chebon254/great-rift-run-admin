import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'great-rift-run.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'great-rift-run-admin.vercel.app',
        pathname: '/products/images/**', // This is not valid in `remotePatterns`
      },
    ],
  },
};

export default nextConfig;
