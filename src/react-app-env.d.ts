/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module 'swiper' {
  const Swiper: any;
  export default Swiper;
  export const Navigation: any;
  export const Pagination: any;
}

declare module 'swiper/modules' {
  export const Navigation: any;
  export const Pagination: any;
}

interface Window {
  // Add any custom window properties here if needed
}
