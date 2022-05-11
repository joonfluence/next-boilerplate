/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  swcMinify: true,
  pageExtensions: ['page.jsx', 'api.js'],
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
      'corretto-dev.s3.ap-northeast-2.amazonaws.com',
      'd191oe2ij3fvb3.cloudfront.net',
      'localhost:3000',
      '192.168.0.63:3000',
    ],
    deviceSizes: [576, 768, 992, 1200, 1600],
    imageSizes: [16, 32, 64, 128, 256],
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    mode: process.env.MODE,
    apiHost: process.env.API_HOST,
    apiVersion: process.env.API_VERSION,
    s3Host: process.env.S3_HOST,
    kakaoApiKey: process.env.KAKAO_API_KEY,
    // clientVersion: process.env.CLIENT_VERSION,
    // siteVerification: {
    //   naver: process.env.SITE_VERIFICATION_NAVER,
    // },
    // googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
};
