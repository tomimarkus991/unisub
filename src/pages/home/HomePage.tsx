import { Tab } from "@headlessui/react";

import clsx from "clsx";

import {
  ToggleViewButton,
  DefaultWrapper,
  SubLayout,
  QuickStatsPanel,
  LayoutSubscriptionCard,
} from "components";
import { useSub } from "context";

export const HomePage = () => {
  const { subs } = useSub();

  const countActiveSubs = subs.filter(sub => sub.active).length;
  const countInactiveSubs = subs.filter(sub => !sub.active).length;

  return (
    <DefaultWrapper>
      <div className="hidden items-center sm:flex">
        <ToggleViewButton />
      </div>
      <div className="flex justify-center items-center mb-3 md:hidden">
        <QuickStatsPanel />
      </div>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex justify-center my-4">
          <Tab
            className={({ selected }: { selected: boolean }) =>
              clsx(
                "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
                "py-1 px-3 text-lg font-semibold bg-white rounded-l-xl",
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
                "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
                "py-1 px-3 text-lg font-semibold bg-white rounded-r-xl",
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
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <SubLayout>
              {subs
                .filter(sub => sub.active)
                .map(sub => (
                  <LayoutSubscriptionCard key={sub.id} sub={sub} />
                ))}
            </SubLayout>
          </Tab.Panel>
          <Tab.Panel>
            <SubLayout>
              {subs
                .filter(sub => !sub.active)
                .map(sub => (
                  <LayoutSubscriptionCard key={sub.id} sub={sub} />
                ))}
            </SubLayout>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </DefaultWrapper>
  );
};
