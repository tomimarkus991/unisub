import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { cardColorsReversed } from "app-constants";
import { CardColorType } from "types";

interface Props {
  cardColor: CardColorType;
  durationModifier?: number;
}
const circles = {
  sm: "absolute w-8 h-8 content-none rounded-full opacity-95",
  xl: "absolute w-24 h-24 content-none rounded-full opacity-95",
};
const boxes = {
  sm: "absolute w-8 h-8 content-none rounded-lg opacity-95",
  lg: "absolute w-14 h-14 content-none rounded-lg opacity-95",
  xl: "absolute w-24 h-24 content-none rounded-lg opacity-95",
};

export const CardAnimations = ({ cardColor, durationModifier = 1 }: Props) => {
  const basicAnimation = { x: [0, 100, -20, 0], y: [0, 100, 0, -20, 0], rotate: 360 };
  const basicAnimationLonger = { x: [0, 200, -20, 0], y: [0, 300, 0, -20, 0], rotate: 360 };
  const toRightAnimation = { x: [0, 300, 0], y: [0, 10, 0, -10, 20, 0], rotate: 360 };
  const basicAnimationReversed = { x: [0, -100, 20, 0], y: [0, -100, 0, 20, 0], rotate: 360 };
  const basicAnimationLongerAndReversed = {
    x: [0, -200, 20, 0],
    y: [0, -300, 0, 20, 0],
    rotate: 360,
  };
  const getDuration = (duration: number) => {
    return duration * durationModifier;
  };
  return (
    <AnimatePresence initial={true}>
      <motion.div
        key="object-1"
        animate={{ ...basicAnimation }}
        transition={{ repeat: Infinity, duration: getDuration(5) }}
        className={clsx(boxes.sm, "top-[45%] left-[50%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-2"
        animate={basicAnimation}
        transition={{ repeat: Infinity, duration: getDuration(16) }}
        className={clsx(circles.sm, "top-[65%] left-[30%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-3"
        animate={basicAnimationLonger}
        transition={{ repeat: Infinity, duration: getDuration(30) }}
        className={clsx(circles.sm, "top-[35%] left-[10%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-4"
        animate={toRightAnimation}
        transition={{ repeat: Infinity, duration: getDuration(26) }}
        className={clsx(boxes.sm, "top-[35%] left-[10%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-5"
        animate={basicAnimationReversed}
        transition={{ repeat: Infinity, duration: getDuration(24) }}
        className={clsx(circles.sm, "top-[35%] left-[80%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-6"
        animate={basicAnimationReversed}
        transition={{ repeat: Infinity, duration: getDuration(20) }}
        className={clsx(circles.sm, "top-[5%] left-[80%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-7"
        animate={basicAnimationLongerAndReversed}
        transition={{ repeat: Infinity, duration: getDuration(17) }}
        className={clsx(circles.xl, "top-[5%] left-[80%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-8"
        animate={basicAnimation}
        transition={{ repeat: Infinity, duration: getDuration(14) }}
        className={clsx(circles.xl, "top-[60%] left-[5%]", cardColorsReversed[cardColor])}
      />
      <motion.div
        key="object-9"
        animate={basicAnimationReversed}
        transition={{ repeat: Infinity, duration: getDuration(20) }}
        className={clsx(boxes.lg, "top-[5%] left-[50%]", cardColorsReversed[cardColor])}
      />
    </AnimatePresence>
  );
};
