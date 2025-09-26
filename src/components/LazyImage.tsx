import { useEffect } from 'react';
import type { ImgHTMLAttributes } from 'react';
import type { StaticImageData } from 'next/image';
import LazyLoad from 'vanilla-lazyload';
import lazyloadConfig from './config/lazyload';

type LazyImageSource = string | StaticImageData;

type LazyImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: LazyImageSource;
  srcSet?: string;
};

const resolveSource = (value?: LazyImageSource) => {
  if (!value) {
    return undefined;
  }

  return typeof value === 'string' ? value : value.src;
};

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad(lazyloadConfig as unknown as Record<string, unknown>);
  }
}

const LazyImage = ({
  alt = '',
  src,
  srcSet,
  sizes,
  width,
  height,
  className = '',
  ...imgProps
}: LazyImageProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.lazyLoadInstance?.update();
    }
  }, []);

  const resolvedSrc = resolveSource(src);

  return (
    <img
      alt={alt}
      className={`lazy ${className}`.trim()}
      data-src={resolvedSrc}
      data-srcset={srcSet}
      data-sizes={sizes}
      width={width}
      height={height}
      {...imgProps}
    />
  );
};

export default LazyImage;
