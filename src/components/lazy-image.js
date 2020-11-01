import { useEffect } from "react";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/lazyload";

// Only initialize it one time for the entire application
if (typeof window !== "undefined") {
  if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
  }
}

const LazyImage = ({ alt, src, srcset, sizes, width, height, className }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.lazyLoadInstance.update();
    }
  });

  return (
    <img
      alt={alt}
      className={`lazy ${className}`}
      data-src={src}
      data-srcset={srcset}
      data-sizes={sizes}
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
