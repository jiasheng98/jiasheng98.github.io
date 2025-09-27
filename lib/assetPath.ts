import getConfig from 'next/config';

const externalPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i;

type RuntimeConfigValue = {
  assetPrefix?: string;
  basePath?: string;
};

type NextRuntimeConfig = RuntimeConfigValue & {
  publicRuntimeConfig?: RuntimeConfigValue;
};

declare global {
  interface Window {
    __NEXT_DATA__?: {
      assetPrefix?: string;
    };
  }
}

let cachedPrefix: string | null = null;

const sanitizePrefix = (value?: string) => value?.replace(/\/$/, '') ?? '';

const resolveRuntimePrefix = () => {
  try {
    const config = getConfig() as NextRuntimeConfig | undefined;

    if (!config) {
      return '';
    }

    const { assetPrefix, basePath, publicRuntimeConfig } = config;

    return (
      assetPrefix ||
      basePath ||
      publicRuntimeConfig?.assetPrefix ||
      publicRuntimeConfig?.basePath ||
      ''
    );
  } catch (error) {
    return '';
  }
};

const getPrefix = () => {
  if (cachedPrefix !== null) {
    return cachedPrefix;
  }

  const envPrefix = sanitizePrefix(process.env.NEXT_PUBLIC_BASE_PATH);
  const nextDataPrefix = sanitizePrefix(
    typeof window !== 'undefined' ? window.__NEXT_DATA__?.assetPrefix : undefined
  );
  const runtimePrefix = sanitizePrefix(resolveRuntimePrefix());

  const prefix = envPrefix || nextDataPrefix || runtimePrefix;

  cachedPrefix = prefix;
  return cachedPrefix;
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

