declare module 'vanilla-lazyload' {
  export default class LazyLoad {
    constructor(options?: Record<string, unknown>);
    update(): void;
  }
}

declare module 'react-hamburger-menu' {
  import type { ComponentType, CSSProperties } from 'react';

  export interface HamburgerMenuProps {
    isOpen: boolean;
    menuClicked: () => void;
    width?: number;
    height?: number;
    strokeWidth?: number;
    rotate?: number;
    color?: string;
    borderRadius?: number;
    animationDuration?: number;
    className?: string;
    style?: CSSProperties;
  }

  const HamburgerMenu: ComponentType<HamburgerMenuProps>;
  export default HamburgerMenu;
}

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}
