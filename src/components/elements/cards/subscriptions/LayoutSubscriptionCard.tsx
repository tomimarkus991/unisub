import clsx from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import SimpleBar from "simplebar-react";

import { cardColors, mapSubTypeToMomentType } from "app-constants";
import { CardCircleLayer, LayoutSubscriptionCardPopOver } from "components";
import { useSub } from "context";
import { Subscription } from "types";
import { createSubPrice } from "utils";

interface Props {
  sub: Subscription;
}

export const LayoutSubscriptionCard = ({ sub }: Props) => {
  const { title, color: cardColor, nextPaymentDate, category, id } = sub;

  const [isSubCardPopoverOpen, setIsSubCardPopoverOpen] = useState(false);

  const { setSubs } = useSub();

  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";
  const price = createSubPrice(sub);

  // useEffect(() => {
  //   if (daysUntilResub === 0) {
  //     setResubText("Resub today");
  //   } else if (daysUntilResub === 1) {
  //     setResubText("Resub tomorrow");
  //   } else if (daysUntilResub > 1) {
  //     setResubText(`Resub in ${daysUntilResub} days`);
  //   } else if (daysUntilResub < 0) {
  //     setResubText("Expired");
  //   }
  // }, [daysUntilResub]);
  // setInterval(() => {
  //   setIsSubCardPopoverOpen(false);
  // }, 5000);
  useEffect(() => {
    setInterval(() => {
      if (moment.unix(nextPaymentDate).toDate() < new Date()) {
        setSubs(subs =>
          subs.map(_sub => {
            if (_sub.id === id) {
              return {
                ...sub,
                nextPaymentDate: moment().add(1, mapSubTypeToMomentType(sub.billingType)).unix(),
              };
            }
            return _sub;
          })
        );
      }
    }, 43200 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative justify-self-center self-center w-full cursor-pointer sm:max-w-full xs:min-w-[15rem]">
      <div
        onClick={() => setIsSubCardPopoverOpen(value => !value)}
        role="button"
        tabIndex={0}
        className="w-full"
      >
        <div
          className={clsx(
            "flex overflow-hidden relative flex-row items-center py-2 px-6 mb-2 w-full h-24 rounded-full",
            cardColors[cardColor]
          )}
        >
          {/* <CardAnimations cardColor={cardColor} durationModifier={3} /> */}
          <CardCircleLayer cardColor={cardColor} />
          <div className="flex z-10 flex-col ml-2 w-7/12">
            <SimpleBar
              className={clsx("flex overflow-x-auto flex-row justify-start pb-2 whitespace-nowrap")}
            >
              <p className={clsx("text-xl font-semibold", textColor)}>{title}</p>
            </SimpleBar>
            <div className="flex flex-row justify-start">
              <p className={clsx("", textColor)}>{category}</p>
            </div>
          </div>
          <div className="flex z-10 flex-col ml-4 w-5/12 text-center">
            <div className={clsx("mb-1")}>
              <p className={clsx("", textColor)}>{price}</p>
            </div>
            <div className="flex flex-row justify-center">
              <p className={clsx("", textColor)}>
                <ReactTimeAgo future date={moment.unix(nextPaymentDate).toDate()} locale="en-US" />
              </p>
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
