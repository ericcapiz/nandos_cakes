import { useInView } from "react-intersection-observer";
import { useAnimation, AnimationControls } from "framer-motion";
import { useEffect } from "react";

type UseScrollReturn = [(node: Element | null) => void, AnimationControls];

export const useScroll = (): UseScrollReturn => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, view]);

  return [element, controls];
};
