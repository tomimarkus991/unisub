import { ToggleViewButton, DefaultWrapper, SubLayout, QuickStatsPanel } from "components";

export const HomePage = () => {
  return (
    <DefaultWrapper>
      <div className="hidden items-center sm:flex ">
        <ToggleViewButton />
      </div>
      <div className="flex justify-center items-center mb-3 md:hidden">
        <QuickStatsPanel />
      </div>

      <SubLayout />
    </DefaultWrapper>
  );
};
