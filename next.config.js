/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.builder.io"],
  },
};

module.exports = nextConfig;
