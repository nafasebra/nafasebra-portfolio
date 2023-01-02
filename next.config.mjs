/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    devIndicators: {
        buildActivity: false
    },
    images: {
        domains: ['nafasebra.netlify.app'],
        path: '/_next/image/'
    },
}

export default nextConfig