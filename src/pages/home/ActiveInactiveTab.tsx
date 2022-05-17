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
          "flex justify-center items-center my-4 md:max-w-[50rem] lg:max-w-none xs2:justify-between",
          "lg:important-justify-center"
        )}
      >
        <div className="lg:hidden">
          <div className="hidden opacity-0 xs2:block">
            <ToggleViewButton />
          </div>
        </div>
        <div>
          <Tab
            className={({ selected }: { selected: boolean }) =>
              clsx(
                "py-1 px-3 text-lg font-semibold bg-white rounded-l-xl",
                "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
                selected && "border-gradient-br-purple-white"
              )
            }
          >
            <div className="flex flex-row justify-center items-center">
              <p className="mr-2">Active</p>
              <p className="text-xl font-bold">{countActiveSubs}</p>
            </div>
          </Tab>
          <Tab
            className={({ selected }: { selected: boolean }) =>
              clsx(
                "py-1 px-3 text-lg font-semibold bg-white rounded-r-xl",
                "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
                selected && "border-gradient-br-purple-white",
                countInactiveSubs === 0 && "cursor-not-allowed"
              )
            }
            disabled={countInactiveSubs === 0}
          >
            <div className="flex flex-row justify-center items-center">
              <p className="mr-2">Inactive</p>
              <p className="text-xl font-bold">{countInactiveSubs}</p>
            </div>
          </Tab>
        </div>
        <div className="lg:hidden">
          <div className="hidden xs2:block">
            <ToggleViewButton />
          </div>
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
