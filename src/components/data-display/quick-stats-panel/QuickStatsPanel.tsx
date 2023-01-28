import clsx from "clsx";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { BiShuffle } from "react-icons/bi";

import { billingTypeValues } from "app-constants";
import { useSub } from "context";
// maybe tab panel on top so he can change stats

interface Props {
  className?: string;
}

export const QuickStatsPanel = ({ className }: Props) => {
  const { subs } = useSub();
  const [totalValue, setTotalValue] = useState<number>(0);
  const [subPanelBillingType, setSubPanelBillingType] = useState(billingTypeValues[2]);
  const [decimals, setDecimals] = useState<number>(2);

  useEffect(() => {
    const allSubsPricesTogether = subs
      .filter(sub => sub.active)
      .reduce((acc, sub) => acc + sub.allCosts[subPanelBillingType], 0);

    setDecimals(() => {
      if (subPanelBillingType === "monthly") {
        return 1;
      }
      if (subPanelBillingType === "yearly") {
        return 0;
      }
      return 2;
    });
    setTotalValue(allSubsPricesTogether);
  }, [subs, subPanelBillingType]);

  return (
    <div
      className={clsx(
        className,
        "minscreen:px-8 minscreen:w-[20rem] flex flex-row px-4 h-36 bg-white rounded-xl shadow-lg cursor-default select-none"
      )}
    >
      <div className="minscreen:mr-0 flex flex-col justify-center items-center mr-2 min-w-[5rem] xs:mr-4">
        <div className="max-w-[5rem]">
          <img
            className="minscreen:w-24 minscreen:h-24 w-16 h-16"
            alt="user"
            src={`/stats/stats.svg`}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div
          className={clsx(
            "flex overflow-x-auto overflow-y-hidden flex-row mb-2 max-w-[11rem] text-2xl scrollbar-none"
          )}
        >
          <CountUp start={totalValue - 3} end={totalValue} duration={0.3} decimals={decimals}>
            {({ countUpRef }) => (
              <p ref={countUpRef as any} className="minscreen:text-4xl text-3xl font-bold" />
            )}
          </CountUp>
          <p className="minscreen:text-4xl text-3xl font-semibold cursor-pointer">€</p>
        </div>

        <div className="flex flex-row justify-center items-center">
          <p className="minscreen:text-2xl mr-2 text-lg font-medium">{subPanelBillingType}</p>
          <div
            className="minscreen:text-2xl text-lg text-gray-800 cursor-pointer"
            onClick={() =>
              setSubPanelBillingType(currentType => {
                const index = billingTypeValues.indexOf(currentType) + 1;

                if (index === -1 || index === 4) {
                  return billingTypeValues[0];
                }
                return billingTypeValues[index];
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
