/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'thisis-images.spotifycdn.com',
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
