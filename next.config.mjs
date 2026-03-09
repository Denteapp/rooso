/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
    domains: ["app.gethearth.com", "images.unsplash.com"]
    }
};

export default nextConfig;
