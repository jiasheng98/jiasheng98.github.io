/** @type {import('next').NextConfig} */
const rawRepoBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const normalizedRepoBasePath = rawRepoBasePath
  ? rawRepoBasePath.startsWith('/')
    ? rawRepoBasePath
    : `/${rawRepoBasePath}`
  : undefined;
const isProd = process.env.NODE_ENV === 'production';
const hasRepoBasePath = Boolean(normalizedRepoBasePath);

const nextConfig = {
  output: 'export',
  ...(isProd && hasRepoBasePath
    ? {
        basePath: normalizedRepoBasePath,
        assetPrefix: normalizedRepoBasePath
      }
    : {}),
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
