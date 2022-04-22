import clsx from "clsx";

import { cardColors, scrollbarStyles } from "constants";
import { CardAnimations } from "components";
import { CardColorType } from "types";

interface Props {
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  cardColor: CardColorType;
}

export const SubscriptionCard = ({ title, category, price, cardColor }: Props) => {
  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";

  return (
    <div className="mt-2">
      <div
        className={clsx(
          "flex overflow-hidden relative flex-row flex-1 items-center py-4 px-6 rounded-full ring-1 ring-black ring-opacity-5 shadow-xl xs:px-8",
          cardColors[cardColor]
        )}
      >
        {/* <div className="mr-6 w-2/12">
          <div className="flex justify-center items-center w-14 h-14 bg-slate-100 rounded-full sm:w-20 sm:h-20 xs:w-16 xs:h-16">
            <p className="text-xl text-center text-slate-500 uppercase">{title.slice(0, 1)}</p>
          </div>
        </div> */}
        <CardAnimations cardColor={cardColor} />
        <div className="flex z-10 flex-col ml-2 w-7/12 sm:ml-12">
          <div
            className={clsx(
              scrollbarStyles,
              "overflow-x-auto mb-2 text-ellipsis whitespace-nowrap sm:mb-4"
            )}
          >
            <p className={clsx("text-xl font-semibold xs:text-2xl", textColor)}>
              {title === "" ? "Sub name" : title}
            </p>
          </div>
          <div className="flex flex-row justify-start">
            <div className={clsx("mr-2")}>
              <p className={clsx("xs:text-lg", textColor)}>{category}</p>
            </div>
          </div>
        </div>
        <div className="flex z-10 ml-4 w-5/12 text-center sm:mr-12">
          <div className={clsx("ml-auto")}>
            <p className={clsx("xs:text-lg", textColor)}>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
