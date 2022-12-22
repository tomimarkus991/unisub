import { RealButton, Popover } from "@redlotus/ui";
import { useState } from "react";

import { ChooseSubModal, DefaultPageWrapper, QuickStatsPanel } from "components";

import { ActiveInactiveTab } from ".";

export const HomePage = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  console.log("isPopoverOpen", isPopoverOpen);

  return (
    <DefaultPageWrapper
      RightSide={
        <>
          <QuickStatsPanel className="2xl:min-w-[18rem] xl:max-w-[18rem] fixed top-auto" />
          <RealButton
            className="fixed top-72"
            id="popoverCreator"
            onClick={() => setIsPopoverOpen(value => !value)}
          >
            hmm
          </RealButton>
          <Popover
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
            animKey="popover1"
          >
            popover here
          </Popover>
        </>
      }
    >
      <div className="flex flex-col">
        <div className="hidden justify-between md:flex">
          <p className="text-3xl font-semibold text-gray-800">Subscriptions</p>
          <ChooseSubModal buttonType="regular" />
        </div>
      </div>
      <div className="minscreen:flex justify-center items-center mb-3 md:mt-4 xl:hidden">
        <QuickStatsPanel />
      </div>
      <ActiveInactiveTab />
    </DefaultPageWrapper>
  );
};
