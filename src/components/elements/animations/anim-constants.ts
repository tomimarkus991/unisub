import { Variants } from "framer-motion";

const flyInFromTop: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const flyInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const flyInFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const flyInFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};
const scaleAnim = {
  whileHover: {
    scale: [1, 1, 1],
    rotate: [0, 0, 270],
  },
  whileTap: { scale: 0.8 },
  transition: {
    duration: 1,
    ease: "easeIn",
    times: [0, 0.2, 0.5],
  },
};

const scaleAndRotationAnim = {
  whileHover: {
    scale: [1, 1.1, 1],
    rotate: [0, 0, 270],
  },
  whileTap: { scale: 0.8 },
  transition: {
    duration: 1,
    ease: "easeIn",
    times: [0, 0.2, 0.5],
  },
};
const rotate360Anim = {
  whileHover: {
    rotate: [0, 0, 360],
  },
  whileTap: { scale: 0.8 },
  transition: {
    duration: 1,
    ease: "easeIn",
    times: [0, 0.2, 0.5],
  },
};

export const flyIn = {
  flyInFromTop,
  flyInFromBottom,
  flyInFromLeft,
  flyInFromRight,
};
export const animations = {
  scaleAnim,
  scaleAndRotationAnim,
  rotate360Anim,
};
