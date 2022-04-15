import clsx from "clsx";

import { cardColors, scrollbarStyles } from "app-constants";
import { Button } from "components/elements";
import { CardColorType } from "types";

interface Props {
  title: string;
  category: string;
  cardColor: CardColorType;
}

export const PresetSubscriptionCard = ({ title, category, cardColor }: Props) => {
  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";

  return (
    <>
      <div
        className={clsx(
          "flex flex-row items-center px-8 h-20 rounded-2xl ring-1 ring-black ring-opacity-5 sm:w-96 xs:px-0 w-70",
          cardColors[cardColor]
        )}
      >
        <div className="flex flex-col ml-2 w-9/12 sm:ml-6">
          <div
            className={clsx(
              scrollbarStyles,
              "overflow-x-auto mb-2 text-ellipsis whitespace-nowrap sm:mb-1"
            )}
          >
            <p className={clsx("text-xl font-semibold xs:text-2xl", textColor)}>{title}</p>
          </div>
          <div className="flex flex-row justify-start">
            <div>
              <p className={clsx("xs:text-lg", textColor)}>{category}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-2 w-3/12 text-center sm:mr-6">
          <div className={clsx("mb-1")}>
            <Button size="xs" variant="green">
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
