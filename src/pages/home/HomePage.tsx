import { ChooseSubModal, DefaultPageWrapper, QuickStatsPanel } from "components";

import { ActiveInactiveTab } from ".";

export const HomePage = () => {
  return (
    <DefaultPageWrapper
      RightSide={
        <>
          <QuickStatsPanel className="xl:max-w-[18rem] 2xl:max-w-[20rem]" />
        </>
      }
    >
      <div className="flex flex-col">
        <div className="hidden justify-between md:flex">
          <p className="text-3xl font-semibold text-gray-800">Subscriptions</p>
          <ChooseSubModal buttonType="regular" />
        </div>
      </div>
      <div className="flex justify-center items-center mb-3 md:mt-4 xl:hidden">
        <QuickStatsPanel />
      </div>
      <ActiveInactiveTab />
    </DefaultPageWrapper>
  );
};
