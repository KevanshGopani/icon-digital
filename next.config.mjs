/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any HTTPS domain
      },
      {
        protocol: "http",
        hostname: "**", // Allow images from any HTTP domain
      },
    ],
  },
};

export default nextConfig;
