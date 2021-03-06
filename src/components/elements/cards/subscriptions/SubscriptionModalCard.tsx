import clsx from "clsx";
import SimpleBar from "simplebar-react";

import { cardColors } from "app-constants";
import { CardCircleLayer } from "components";
import { CardColorType } from "types";

interface Props {
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  cardColor: CardColorType;
}

export const SubscriptionModalCard = ({ title, category, price, cardColor }: Props) => {
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
        {/* <CardAnimations cardColor={cardColor} /> */}
        <CardCircleLayer cardColor={cardColor} />
        <div className="flex z-10 flex-col ml-2 w-7/12">
          <SimpleBar className="overflow-x-auto pb-2 whitespace-nowrap sm:mb-4 md:mb-0">
            <p className={clsx("text-xl font-semibold xs:text-2xl", textColor)}>
              {title === "" ? "Sub name" : title}
            </p>
          </SimpleBar>
          <div className="flex flex-row justify-start">
            <div className={clsx("mr-2")}>
              <p className={clsx("xs:text-lg", textColor)}>{category}</p>
            </div>
          </div>
        </div>
        <div className="flex z-10 ml-4 w-5/12 text-center">
          <div className={clsx("ml-auto")}>
            <p className={clsx("xs:text-lg", textColor)}>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
