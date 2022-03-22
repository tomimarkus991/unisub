import clsx from "clsx";

import { cardColors, CardColorType } from "..";

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
          "rounded-full flex flex-row flex-1 px-6 xs:px-8 py-4 items-center shadow-xl ring-1 ring-black ring-opacity-5",
          cardColors[cardColor]
        )}
      >
        <div className="mr-6 w-2/12">
          <div className="flex w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-full items-center justify-center">
            <p className="text-slate-500 text-xl uppercase text-center">{title.slice(0, 1)}</p>
          </div>
        </div>
        <div className="flex flex-col w-6/12">
          <div className="mb-2 sm:mb-4 text-ellipsis whitespace-nowrap overflow-scroll">
            <p className={clsx("font-semibold text-lg xs:text-2xl", textColor)}>{title}</p>
          </div>
          <div className="flex flex-row justify-start">
            <div className={clsx("mr-2")}>
              <p className={clsx("text-gray-800 text-base xs:text-lg", textColor)}>{category}</p>
            </div>
          </div>
        </div>
        <div className="flex w-4/12 text-center">
          <div className={clsx("ml-auto")}>
            <p className={clsx("text-gray-800 text-sm xs:text-lg", textColor)}>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
