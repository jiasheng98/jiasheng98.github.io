import getConfig from 'next/config';

const externalPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i;

type NextRuntimeConfig = {
  assetPrefix?: string;
  basePath?: string;
};

let cachedPrefix: string | null = null;

const getPrefix = () => {
  if (cachedPrefix !== null) {
    return cachedPrefix;
  }

  try {
    const config = getConfig() as NextRuntimeConfig | undefined;
    const assetPrefix = config?.assetPrefix ?? '';
    const basePath = config?.basePath ?? '';
    const prefix = assetPrefix || basePath || '';

    cachedPrefix = prefix.replace(/\/$/, '');
    return cachedPrefix;
  } catch (error) {
    cachedPrefix = '';
    return cachedPrefix;
  }
};

export const resolveAssetPath = (path: string) => {
  if (!path) {
    return path;
  }

  if (externalPattern.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  const prefix = getPrefix();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!prefix) {
    return normalizedPath;
  }

  return normalizedPath.startsWith(`${prefix}/`) ? normalizedPath : `${prefix}${normalizedPath}`;
};

export const resolveAssetSrcSet = (srcSet?: string) => {
  if (!srcSet) {
    return undefined;
  }

  return srcSet
    .split(',')
    .map((candidate) => {
      const trimmed = candidate.trim();

      if (!trimmed) {
        return '';
      }

      const [source, ...descriptorParts] = trimmed.split(/\s+/);
      const descriptor = descriptorParts.join(' ');
      const resolvedSource = resolveAssetPath(source);

      return descriptor ? `${resolvedSource} ${descriptor}` : resolvedSource;
    })
    .filter(Boolean)
    .join(', ');
};

