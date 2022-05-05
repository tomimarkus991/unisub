import { ActiveInactiveTab, DefaultWrapper, QuickStatsPanel, ToggleViewButton } from "components";

export const HomePage = () => {
  return (
    <DefaultWrapper>
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
