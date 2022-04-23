import { ToggleViewButton, DefaultWrapper, SubLayout, QuickStatsPanel } from "components";

export const HomePage = () => {
  return (
    <DefaultWrapper>
      <div className="hidden items-center sm:flex ">
        <ToggleViewButton />
      </div>
      <div className="flex justify-center mb-3 md:hidden">
        <QuickStatsPanel />
      </div>

      <div className="overflow-auto h-full">
        <SubLayout />
      </div>
    </DefaultWrapper>
  );
};
