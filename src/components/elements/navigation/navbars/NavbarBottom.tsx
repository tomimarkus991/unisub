import { ChartBarIcon, HomeIcon } from "@heroicons/react/solid";

import { SubscriptionModal } from "../../modals";

export const NavbarBottom = () => {
  return (
    <div className="flex flex-row justify-around w-full">
      <HomeIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
      <SubscriptionModal />
      <ChartBarIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
    </div>
  );
};
