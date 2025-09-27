/** @type {import('next').NextConfig} */
const repoBasePath = '/jiasheng98.github.io';
const isProd = process.env.NODE_ENV === 'production';

const basePath = isProd ? repoBasePath : '';

const nextConfig = {
  ...(isProd
    ? {
        basePath,
        assetPrefix: basePath
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  publicRuntimeConfig: {
    basePath,
    assetPrefix: basePath
  },
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
