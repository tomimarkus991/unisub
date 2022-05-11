import { DefaultWrapper, QuickStatsPanel, ToggleViewButton } from "components";

import { ActiveInactiveTab } from ".";

export const HomePage = () => {
  return (
    <DefaultWrapper
      rightSide={
        <>
          <QuickStatsPanel />
        </>
      }
    >
      <div className="hidden items-center sm:flex">
        <ToggleViewButton />
      </div>
      <div className="flex justify-center items-center mb-3 md:hidden">
        <QuickStatsPanel />
      </div>
      <ActiveInactiveTab />
    </DefaultWrapper>
  );
};
