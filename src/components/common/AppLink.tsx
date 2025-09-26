import NextLink from 'next/link';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react';

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  children: ReactNode;
};

const NextLinkComponent = NextLink as unknown as ComponentType<any>;

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  (
    { as, children, href, replace, scroll, shallow, ...anchorProps },
    ref
  ) => {
    return (
      <NextLinkComponent
        as={as}
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        legacyBehavior
      >
        <a ref={ref} {...anchorProps}>
          {children}
        </a>
      </NextLinkComponent>
    );
  }
);

AppLink.displayName = 'AppLink';

export default AppLink;
