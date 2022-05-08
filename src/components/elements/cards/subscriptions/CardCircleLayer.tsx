import clsx from "clsx";

import { cardColors } from "app-constants";
import { CardColorType } from "types";

interface Props {
  cardColor: CardColorType;
}

export const CardCircleLayer = ({ cardColor }: Props) => {
  return (
    <>
      <div
        key="object-1"
        className={clsx(
          "absolute w-40 h-40 content-none rounded-full",
          "top-[-50%] left-[70%]",
          cardColors[cardColor]
        )}
      />
      <div
        key="object-2"
        className={clsx(
          "absolute w-40 h-40 content-none rounded-full",
          "top-[30%] left-[80%]",
          cardColors[cardColor]
        )}
      />
    </>
  );
};
