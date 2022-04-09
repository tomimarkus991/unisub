import { ChartBarIcon, HomeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import { SubscriptionModal } from "../../modals";

export const NavbarBottom = () => {
  return (
    <div className="flex flex-row justify-around w-full">
      <Link to={"/"}>
        <HomeIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
      </Link>
      <SubscriptionModal />
      <Link to={"/stats"}>
        <ChartBarIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
      </Link>
    </div>
  );
};
