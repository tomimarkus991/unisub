import { ToggleViewButton } from "components/elements";
import { DefaultWrapper, SubLayout } from "components/layouts";

export const HomePage = () => {
  return (
    <DefaultWrapper>
      <div className="hidden items-center sm:flex ">
        <ToggleViewButton />
      </div>
      <div className="overflow-auto h-full">
        <SubLayout />
      </div>
    </DefaultWrapper>
  );
};
