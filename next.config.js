/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  swcMinify: true,
  pageExtensions: ['page.jsx', 'api.js', 'page.tsx', 'api.ts'],
  generateEtags: true,
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  i18n,
  serverRuntimeConfig: {
    mode: process.env.MODE,
  },
  images: {
    // next/image 사용 시 이미지 경로의 domains 세팅이 필요합니다.
    domains: [
      'picsum.photos',
      'cdn.fakercloud.com',
      'localhost:3000',
      '192.168.0.63:3000',
    ],
    deviceSizes: [576, 768, 992, 1200, 1600],
    imageSizes: [16, 32, 64, 128, 256],
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    mode: process.env.MODE,
    apiHostDev: process.env.API_HOST_DEVELOP,
    apiHostPro: process.env.API_HOST_PRODUCT,
    apiHostRel: process.env.API_HOST_RELEASE,
  },
};
