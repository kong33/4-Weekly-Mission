/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['codeit-images.codeit.com'], // 특정 도메인의 이미지를 허용
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        pathname: '/badges/*', // 여기를 수정: 모든 'badges' 경로의 이미지를 허용
      },
    ],
  },
};

module.exports = nextConfig;
