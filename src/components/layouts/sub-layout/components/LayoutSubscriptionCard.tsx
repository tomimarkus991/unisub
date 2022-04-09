import clsx from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";

import { cardColors } from "app-constants";
import { CardColorType } from "types";

interface Props {
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  cardColor: CardColorType;
  startDate: string | number;
}

export const LayoutSubscriptionCard = ({ title, category, price, cardColor, startDate }: Props) => {
  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";
  const dateNow = moment();
  const subStartDate = moment(startDate);

  const daysUntilResub = subStartDate.diff(dateNow, "days") + 1;

  const [resubText, setResubText] = useState(`Resub in ${daysUntilResub} days`);

  useEffect(() => {
    if (daysUntilResub === 0) {
      setResubText("Resub today");
    } else if (daysUntilResub === 1) {
      setResubText("Resub tomorrow");
    } else if (daysUntilResub > 1) {
      setResubText(`Resub in ${daysUntilResub} days`);
    } else if (daysUntilResub < 0) {
      setResubText("Sub expired");
    }
  }, [daysUntilResub]);

  return (
    <>
      <div
        className={clsx(
          "flex flex-row items-center py-4 px-6 w-80 h-24 rounded-full ring-1 ring-black ring-opacity-5 shadow-xl xs:px-8",
          cardColors[cardColor]
        )}
      >
        <div className="flex flex-col ml-2 w-7/12 sm:ml-12">
          <div className="overflow-x-auto mb-2 text-ellipsis whitespace-nowrap sm:mb-4 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-100 active:scrollbar-thumb-slate-600">
            <p className={clsx("text-xl font-semibold xs:text-2xl", textColor)}>{title}</p>
          </div>
          <div className="flex flex-row justify-start">
            <div>
              <p className={clsx("xs:text-lg", textColor)}>{category}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-4 w-5/12 text-center sm:mr-12">
          <div className={clsx("mb-1")}>
            <p className={clsx("xs:text-lg", textColor)}>{price}</p>
          </div>
          <div className="flex flex-row justify-start">
            <div>
              <p className={clsx("xs:text-lg", textColor)}>{resubText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
