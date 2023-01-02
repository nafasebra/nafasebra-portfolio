/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: [
      "https://nafasebra.netlify.app/",
      "https://www.nafasebra.netlify.app/",
    ],
  },
};

export default nextConfig;
