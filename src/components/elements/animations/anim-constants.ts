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

export const flyIn = {
  flyInFromTop,
  flyInFromBottom,
  flyInFromLeft,
  flyInFromRight,
};
