// import { Popover } from "@redlotus/ui";
import { Popover as HeadlessPopover } from "@headlessui/react";
import { animations, AnimationWrapper, PopoverButton } from "@redlotus/ui";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import moment from "moment";
import { useEffect } from "react";
import SimpleBar from "simplebar-react";

import { cardColors, mapSubTypeToMomentType } from "app-constants";
import { CardCircleLayer, LayoutSubscriptionCardPopOver } from "components";
import { useSub } from "context";
import { Subscription } from "types";
import { createSubPrice } from "utils";

interface Props {
  sub: Subscription;
}

const Popover = ({ children, action, animKey }: any) => {
  return (
    <HeadlessPopover>
      {({ open }) => (
        <>
          <PopoverButton>{action}</PopoverButton>
          <AnimatePresence>
            {open && (
              <AnimationWrapper
                className="z-[50] absolute"
                key={`popover_${animKey}`}
                variants={animations.popoverEffect}
              >
                <HeadlessPopover.Panel
                  static
                  className="absolute flex overflow-hidden flex-col p-3 text-2xl font-bold bg-white rounded-lg shadow-lg"
                >
                  {children}
                </HeadlessPopover.Panel>
              </AnimationWrapper>
            )}
          </AnimatePresence>
        </>
      )}
    </HeadlessPopover>
  );
};

export const SubscriptionCard = ({ sub }: Props) => {
  const { title, color: cardColor, nextPaymentDate, category, id } = sub;

  const { setSubs } = useSub();

  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";
  const price = createSubPrice(sub);
  console.log(price);

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
    <Popover
      animKey={id}
      action={
        <div
          role="button"
          tabIndex={0}
          className={clsx(
            "relative z-0 justify-self-center self-center w-full cursor-pointer",
            "2sm:min-w-[100%] 2sm:max-w-[100%] 2md:min-w-[24rem] 2md:max-w-[24rem] min-w-[20rem] max-w-[27rem]"
          )}
        >
          <div role="button" tabIndex={0} className="w-full">
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
                  className={clsx(
                    "flex overflow-x-auto flex-row justify-start pb-2 whitespace-nowrap"
                  )}
                >
                  <p className={clsx("text-xl font-semibold", textColor)}>{title}</p>
                </SimpleBar>
                <div className="flex flex-row justify-start">
                  <p className={clsx("", textColor)}>{category}</p>
                </div>
              </div>
              {/* @todo fix glitch */}
              {/* <div className="flex z-10 flex-col ml-4 w-5/12 justify-center">
                <p className={clsx("mb-1", textColor)}>{price}</p>

                <p className={clsx(textColor)}>
                  <ReactTimeAgo
                    future
                    date={moment.unix(nextPaymentDate).toDate()}
                    locale="en-US"
                  />
                </p>
              </div> */}
            </div>
          </div>
        </div>
      }
    >
      <LayoutSubscriptionCardPopOver sub={sub} />
    </Popover>
  );
};
