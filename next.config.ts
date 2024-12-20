import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'great-rift-run.vercel.app',
        port: '',
        pathname: '',
        search: '',
      },
      {
        protocol: 'http', // Corrected to 'http'
        hostname: '192.168.43.226',
        port: '3000',
        pathname: '/products/images/**', // Allow specific paths
        search: '',
      },
      {
        protocol: 'http', // Corrected to 'http'
        hostname: 'great-rift-run-admin.vercel.app',
        port: '',
        pathname: '/products/images/**', // Allow specific paths
        search: '',
      },
    ],
  },
};

export default nextConfig;
