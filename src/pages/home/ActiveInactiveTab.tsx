import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { LayoutSubscriptionCard, SubLayout, ToggleViewButton } from "components";
import { useSub, useSubView } from "context";

export const ActiveInactiveTab = () => {
  const { subs } = useSub();
  const { subView } = useSubView();

  const countActiveSubs = subs.filter(sub => sub.active).length;
  const countInactiveSubs = subs.filter(sub => !sub.active).length;
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List
        className={clsx(
          "flex justify-center items-center my-4 sm:justify-start md:max-w-[50rem] lg:max-w-none"
        )}
      >
        <div className="mr-2 whitespace-nowrap">
          <Tab
            className={({ selected }: { selected: boolean }) =>
              clsx(
                "text-md py-1 px-3 font-semibold bg-white rounded-l-xl lg:text-lg",
                "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
                selected && "border-gradient-br-purple-white"
              )
            }
          >
            <div className="flex flex-row justify-center items-center">
              <p className="mr-1 lg:mr-2">Active</p>
              <p className="text-md font-bold lg:text-xl">{countActiveSubs}</p>
            </div>
          </Tab>
          <Tab
            className={({ selected }: { selected: boolean }) =>
              clsx(
                "text-md py-1 px-3 font-semibold bg-white rounded-r-xl lg:text-lg",
                "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
                selected && "border-gradient-br-purple-white",
                countInactiveSubs === 0 && "cursor-not-allowed"
              )
            }
            disabled={countInactiveSubs === 0}
          >
            <div className="flex flex-row justify-center items-center">
              <p className="mr-1 lg:mr-2">Inactive</p>
              <p className="text-md font-bold lg:text-xl">{countInactiveSubs}</p>
            </div>
          </Tab>
        </div>
        <div id="toggleView inactivetab" className="">
          <ToggleViewButton />
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          {subView === "grid" && (
            <SubLayout>
              {subs
                .filter(sub => sub.active)
                .map(sub => (
                  <LayoutSubscriptionCard key={sub.id} sub={sub} />
                ))}
            </SubLayout>
          )}
          {subView === "table" && <div>table</div>}
        </Tab.Panel>
        <Tab.Panel>
          {subView === "grid" && (
            <SubLayout>
              {subs
                .filter(sub => !sub.active)
                .map(sub => (
                  <LayoutSubscriptionCard key={sub.id} sub={sub} />
                ))}
            </SubLayout>
          )}
          {subView === "table" && <div>table</div>}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
