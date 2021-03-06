import { ChooseSubModal, DefaultWrapper, QuickStatsPanel, ToggleViewButton } from "components";

import { ActiveInactiveTab } from ".";

export const HomePage = () => {
  return (
    <DefaultWrapper
      rightSide={
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
      <div className="hidden justify-end my-4 lg:flex">
        <ToggleViewButton />
      </div>
      <div className="flex justify-center items-center mb-3 md:mt-4 xl:hidden">
        <QuickStatsPanel />
      </div>
      <div className="flex justify-center xs2:hidden">
        <ToggleViewButton />
      </div>
      <ActiveInactiveTab />
    </DefaultWrapper>
  );
};
