import clsx from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";

import { cardColors } from "app-constants";
import { CardCircleLayer, LayoutSubscriptionCardPopOver } from "components";
import { Subscription } from "types";
import { createSubPrice } from "utils";

interface Props {
  sub: Subscription;
}

// const ModalButton = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <button className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md">
//       {children}
//     </button>
//   );
// };

export const LayoutSubscriptionCard = ({ sub }: Props) => {
  const { title, color: cardColor, startDate, category } = sub;

  const [isSubCardPopoverOpen, setIsSubCardPopoverOpen] = useState(false);

  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";
  const dateNow = moment();
  const subStartDate = moment(startDate);
  const price = createSubPrice(sub);

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
      setResubText("Expired");
    }
  }, [daysUntilResub]);

  return (
    <div className="relative w-full cursor-pointer xs:min-w-[20rem] xs:max-w-xs">
      <div
        onClick={() => setIsSubCardPopoverOpen(value => !value)}
        role="button"
        tabIndex={0}
        className="w-full"
      >
        <div
          className={clsx(
            "flex overflow-hidden relative flex-row items-center py-4 px-6 mb-2 w-full h-24 rounded-full",
            cardColors[cardColor]
          )}
        >
          {/* <CardAnimations cardColor={cardColor} durationModifier={3} /> */}
          <CardCircleLayer cardColor={cardColor} />
          <div className="flex z-10 flex-col ml-2 w-7/12">
            <div
              className={clsx(
                "scrollbar-styles",
                "flex overflow-x-auto flex-row justify-start mb-2 whitespace-nowrap"
              )}
            >
              <p className={clsx("text-xl font-semibold", textColor)}>{title}</p>
            </div>
            <div className="flex flex-row justify-start">
              <p className={clsx("", textColor)}>{category}</p>
            </div>
          </div>
          <div className="flex z-10 flex-col ml-4 w-5/12 text-center">
            <div className={clsx("mb-1")}>
              <p className={clsx("", textColor)}>{price}</p>
            </div>
            <div className="flex flex-row justify-center">
              <p className={clsx("", textColor)}>{resubText}</p>
            </div>
          </div>
        </div>
      </div>
      <LayoutSubscriptionCardPopOver
        sub={sub}
        isSubCardPopoverOpen={isSubCardPopoverOpen}
        setIsSubCardPopoverOpen={setIsSubCardPopoverOpen}
      />
    </div>
  );
};
