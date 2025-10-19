import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'api.sekwoja.com',
        protocol: 'https',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
