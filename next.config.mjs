/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Untuk ngizinin make gambar dari source online
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
