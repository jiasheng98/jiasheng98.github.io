import { useEffect } from 'react';
import type { ImgHTMLAttributes } from 'react';
import LazyLoad from 'vanilla-lazyload';
import lazyloadConfig from './config/lazyload';

type LazyImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string;
  srcSet?: string;
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

  return (
    <img
      alt={alt}
      className={`lazy ${className}`.trim()}
      data-src={src}
      data-srcset={srcSet}
      data-sizes={sizes}
      width={width}
      height={height}
      {...imgProps}
    />
  );
};

export default LazyImage;
