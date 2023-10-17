/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
      // {
      //   source: '/login',
      //   has: [{ type: 'cookie', key: 'token' }],
      //   permanent: false,
      //   destination: '/dashboard',
      // },
      // {
      //   source: '/dashboard',
      //   missing: [{ type: 'cookie', key: 'token' }],
      //   permanent: false,
      //   destination: '/login',
      // },
    ];
  },
};

module.exports = nextConfig;
