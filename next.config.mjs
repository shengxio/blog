/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/skills', destination: '/#skills', permanent: true },
    ];
  },
};

export default nextConfig;
