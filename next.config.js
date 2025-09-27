/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';
const isProjectPageRepo = Boolean(repoName && !repoName.endsWith('.github.io'));
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  ...(isProd && isProjectPageRepo
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}`
      }
    : {}),
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
