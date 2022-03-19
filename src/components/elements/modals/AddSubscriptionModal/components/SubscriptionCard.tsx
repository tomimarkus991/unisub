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
  return (
    <div className="mt-2">
      <div
        className={clsx(
          "rounded-full flex flex-row flex-1 px-6 py-4 items-center max-w-sm",
          cardColors[cardColor]
        )}
      >
        <div className="mr-3">
          <div className="w-14 h-14 bg-gray-800 rounded-full" />
        </div>
        <div className="flex flex-col">
          <div>
            <p className="font-semibold text-gray-800 text-xl">{title}</p>
          </div>
          <div className="flex flex-row text-center items-center">
            <div className="mr-2">
              <p>{category}</p>
            </div>
            <div>
              <p>{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
