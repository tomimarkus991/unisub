import { DefaultWrapper, QuickStatsPanel } from "components";

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
      {/* <div className="hidden items-center sm:flex">
        <ToggleViewButton />
      </div> */}
      <div className="flex justify-center items-center mb-3 md:hidden">
        <QuickStatsPanel />
      </div>
      <ActiveInactiveTab />
    </DefaultWrapper>
  );
};
