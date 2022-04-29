import clsx from "clsx";

import { cardColors } from "app-constants";
import { CardAnimations, SubscriptionModal } from "components";
import { Subscription } from "types";

interface Props {
  subValues: Subscription;
}

export const PresetSubscriptionCard = ({ subValues }: Props) => {
  const { title, category, color } = subValues;

  const textColor = color === "white" ? "text-gray-800" : "text-white";

  return (
    <div
      className={clsx(
        "flex overflow-hidden relative flex-row items-center px-4 h-20 rounded-2xl ring-1 ring-black ring-opacity-5 sm:px-2",
        cardColors[color]
      )}
    >
      <CardAnimations cardColor={color} durationModifier={2} />
      <div className="flex z-10 flex-col ml-2 w-9/12 sm:ml-6">
        <p
          className={clsx(
            "overflow-x-auto mb-1 w-[10rem] whitespace-nowrap sm:w-[15rem] scrollbar-styles",
            "text-xl font-semibold xs:text-2xl",
            textColor
          )}
        >
          {title}
        </p>

        <div className="flex flex-row justify-start">
          <div>
            <p className={clsx("xs:text-lg", textColor)}>{category}</p>
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col mx-2 w-3/12 text-center sm:mr-6">
        <div className={clsx("mb-1")}>
          <SubscriptionModal
            buttonTitle="Add"
            buttonType="regular"
            cardColor={color}
            subValues={subValues}
          />
        </div>
      </div>
    </div>
  );
};
