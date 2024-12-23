import { HTMLMotionProps } from "framer-motion";

declare module "framer-motion" {
  export interface MotionProps extends HTMLMotionProps<"div"> {
    className?: string;
    src?: string;
    alt?: string;
  }

  export interface HTMLMotionComponents {
    div: React.ForwardRefExoticComponent<MotionProps>;
    h2: React.ForwardRefExoticComponent<MotionProps>;
    h4: React.ForwardRefExoticComponent<MotionProps>;
    p: React.ForwardRefExoticComponent<MotionProps>;
    img: React.ForwardRefExoticComponent<MotionProps>;
    button: React.ForwardRefExoticComponent<MotionProps>;
    path: React.ForwardRefExoticComponent<MotionProps>;
  }

  export interface m extends HTMLMotionComponents {
    div: HTMLMotionComponents["div"];
    h2: HTMLMotionComponents["h2"];
    h4: HTMLMotionComponents["h4"];
    p: HTMLMotionComponents["p"];
    img: HTMLMotionComponents["img"];
    button: HTMLMotionComponents["button"];
    path: HTMLMotionComponents["path"];
  }
}
