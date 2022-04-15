import { ChartBarIcon, HomeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import { ScaleAnim1, ChooseSubModal } from "components/elements";

export const NavbarBottom = () => {
  return (
    <div className="flex flex-row justify-around w-full">
      <Link to="/">
        <ScaleAnim1>
          <HomeIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </ScaleAnim1>
      </Link>
      <ChooseSubModal />
      <Link to="/stats">
        <ScaleAnim1>
          <ChartBarIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </ScaleAnim1>
      </Link>
    </div>
  );
};
