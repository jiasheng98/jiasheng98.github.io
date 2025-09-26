import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type RevealAnimation = 'fade-up' | 'fade-right' | 'fade-left' | 'zoom-in';

type RevealProps = {
  children: ReactNode;
  animation?: RevealAnimation;
  delay?: number;
  className?: string;
  repeat?: boolean;
  style?: CSSProperties;
};

const animationClassMap: Record<RevealAnimation, string> = {
  'fade-up': 'reveal--fade-up',
  'fade-right': 'reveal--fade-right',
  'fade-left': 'reveal--fade-left',
  'zoom-in': 'reveal--zoom-in',
};

const Reveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  repeat = false,
  style,
}: RevealProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      if (element) {
        element.classList.add('is-visible');
      }
      return undefined;
    }

    if (delay) {
      element.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            if (!repeat) {
              observer.unobserve(entry.target);
            }
          } else if (repeat) {
            element.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, repeat]);

  const classes = ['reveal', animationClassMap[animation], className].filter(Boolean).join(' ');

  return (
    <div ref={elementRef} className={classes} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
