import clsx from "clsx";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { BiShuffle } from "react-icons/all";

import { billingTypeValues, scrollbarStyles } from "app-constants";
import { useSub } from "context";
// maybe tab panel on top so he can change stats

// this component shows all your sub cost in one place :done:
// user can click currency icon to change it
// user can change the type he wants to look /daily price /weekly price/ monthly price / yearly price :done:
export const QuickStatsPanel = () => {
  const { subs } = useSub();
  const [totalValue, setTotalValue] = useState<number>(0);
  const [subPanelBillingType, setSubPanelBillingType] = useState(billingTypeValues[2]);
  const [decimals, setDecimals] = useState<number>(2);

  useEffect(() => {
    const allSubsPricesTogether = subs.reduce(
      (acc, sub) => acc + sub.allCosts[subPanelBillingType],
      0
    );

    setDecimals(() => {
      if (subPanelBillingType === "monthly") {
        return 1;
      } else if (subPanelBillingType === "yearly") {
        return 0;
      } else {
        return 2;
      }
    });
    setTotalValue(allSubsPricesTogether);
  }, [subs, subPanelBillingType]);

  return (
    <div className="flex flex-row px-4 h-36 bg-white rounded-xl shadow-lg cursor-default select-none min:px-8 min:w-[20rem]">
      <div className="flex flex-col justify-center items-center mr-2 min-w-[5rem] min:mr-0 xs:mr-4">
        <div className="max-w-[5rem]">
          <img className="w-16 h-16 min:w-24 min:h-24" alt="user" src={`/stats/stats.svg`} />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div
          className={
            (clsx(scrollbarStyles),
            "flex flex-row mb-2 text-2xl overflow-x-auto max-w-[11rem] overflow-y-hidden text-ellipsis whitespace-nowrap")
          }
        >
          <CountUp start={totalValue - 3} end={totalValue} duration={0.3} decimals={decimals}>
            {({ countUpRef }) => (
              <p ref={countUpRef as any} className="text-3xl font-bold min:text-4xl" />
            )}
          </CountUp>
          <p className="text-3xl font-semibold cursor-pointer min:text-4xl">€</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="mr-2 text-lg font-medium min:text-2xl">{subPanelBillingType}</p>
          <div
            className="text-lg text-gray-800 cursor-pointer min:text-2xl"
            onClick={() =>
              setSubPanelBillingType(currentType => {
                const index = billingTypeValues.indexOf(currentType) + 1;
                console.log(index);

                if (index === -1 || index === 4) {
                  return billingTypeValues[0];
                } else {
                  return billingTypeValues[index];
                }
              })
            }
            role="button"
            tabIndex={0}
          >
            <BiShuffle className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};
