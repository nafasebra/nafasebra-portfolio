/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["nafasebra.netlify.app", "nafasebra.ir"],
  },
};

export default nextConfig;
