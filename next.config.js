/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "api.sekwoja.com" }],
    unoptimized: true,
  },
};

module.exports = nextConfig;
