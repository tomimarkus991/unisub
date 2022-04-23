import { useState, useEffect } from "react";
import { BiShuffle } from "react-icons/all";

import { billingTypeValues } from "app-constants";
import { useSub } from "context";
// maybe tab panel on top so he can change stats

// this component shows all your sub cost in one place
// user can click currency icon to change it
// user can change the type he wants to look /daily price /weekly price/ monthly price / yearly price
export const QuickStatsPanel = () => {
  const { subs } = useSub();
  const [subValues, setSubValues] = useState<string>();
  const [subPanelBillingType, setSubPanelBillingType] = useState(billingTypeValues[2]);

  useEffect(() => {
    const allSubsPricesTogether = subs.reduce(
      (acc, sub) => acc + sub.allCosts[subPanelBillingType],
      0
    );
    setSubValues(allSubsPricesTogether.toFixed(2));
  }, [subs, subPanelBillingType]);

  return (
    <div className="flex flex-row p-8 w-[95%] h-36 bg-white rounded-xl shadow-lg cursor-default select-none min:w-[20rem]">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[5rem]">
          <img className="w-24 h-24" alt="user" src={`/stats/stats.svg`} />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="flex flex-row mb-2">
          <p className="text-4xl font-bold">{subValues}</p>
          <p className="text-4xl font-semibold cursor-pointer">€</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="mr-2 text-2xl font-medium">{subPanelBillingType}</p>
          <div
            className="text-2xl text-gray-800 cursor-pointer"
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
