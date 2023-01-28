import { animations, AnimationWrapper } from "@redlotus/ui";
import { HiChartBar, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

import { ChooseSubModal } from "components";

export const NavbarBottomContent = () => {
  return (
    <>
      <Link to="/">
        <AnimationWrapper variants={animations.smallScale} key="nb-home-icon">
          <HiHome className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </AnimationWrapper>
      </Link>
      <ChooseSubModal />
      <Link to="/stats">
        <AnimationWrapper variants={animations.smallScale} key="nb-chart-icon">
          <HiChartBar className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </AnimationWrapper>
      </Link>
    </>
  );
};
