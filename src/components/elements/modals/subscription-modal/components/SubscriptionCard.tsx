import clsx from "clsx";

import { cardColors } from "app-constants";
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
          "flex flex-row flex-1 items-center py-4 px-6 rounded-full ring-1 ring-black ring-opacity-5 shadow-xl xs:px-8",
          cardColors[cardColor]
        )}
      >
        {/* <div className="mr-6 w-2/12">
          <div className="flex justify-center items-center w-14 h-14 bg-slate-100 rounded-full sm:w-20 sm:h-20 xs:w-16 xs:h-16">
            <p className="text-xl text-center text-slate-500 uppercase">{title.slice(0, 1)}</p>
          </div>
        </div> */}
        <div className="flex flex-col w-7/12 sm:ml-3 xs2:ml-2">
          <div className="overflow-x-auto mb-2 text-ellipsis whitespace-nowrap sm:mb-4 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-100 active:scrollbar-thumb-slate-600">
            <p className={clsx("text-xl font-semibold xs:text-2xl", textColor)}>{title}</p>
          </div>
          <div className="flex flex-row justify-start">
            <div className={clsx("mr-2")}>
              <p className={clsx("xs:text-lg", textColor)}>{category}</p>
            </div>
          </div>
        </div>
        <div className="flex ml-4 w-5/12 text-center">
          <div className={clsx("ml-auto")}>
            <p className={clsx("xs:text-lg", textColor)}>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
