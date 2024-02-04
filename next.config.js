/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "spurious-passivatio.000webhostapp.com" }],
    unoptimized: true,
  },
};

module.exports = nextConfig;
