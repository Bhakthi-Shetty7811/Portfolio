/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/intro",
        permanent: false,
      },
    ];
  },
};


export default nextConfig;







  
