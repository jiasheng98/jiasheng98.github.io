/** @type {import('next').NextConfig} */
const repoBasePath = '/jiasheng98.github.io';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd
    ? {
        basePath: repoBasePath,
        assetPrefix: repoBasePath
      }
    : {}),
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
