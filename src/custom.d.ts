/// <reference types="react" />

import { HTMLMotionProps } from "framer-motion";

declare module "framer-motion" {
  export interface HTMLMotionProps<T> extends React.HTMLAttributes<T> {
    className?: string;
    variants?: any;
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    layout?: boolean;
    src?: string;
    alt?: string;
  }
}

declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.jpeg" {
  const value: any;
  export = value;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "*.gif" {
  const value: any;
  export = value;
}

declare module "*.jfif" {
  const value: any;
  export = value;
}
