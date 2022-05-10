import clsx from "clsx";
import { HiMenu, HiHome, HiChartBar } from "react-icons/all";

import { AnimationWrapper, animations, CollapsedSidebarLink } from "components";
import { useSidebar } from "context";

export const SmallSidebarContent = () => {
  const { setSidebarState } = useSidebar();
  return (
    <>
      {/* header */}
      <div className={clsx("flex justify-center p-3")}>
        <button className="lg:hidden" onClick={() => setSidebarState("openWithOverlay")}>
          <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.smallScale}>
            <HiMenu className="w-7 h-7 fill-slate-700 hover:fill-slate-800" />
          </AnimationWrapper>
        </button>
        <button className="md:hidden lg:block" onClick={() => setSidebarState("expanded")}>
          <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.smallScale}>
            <HiMenu className="w-7 h-7 fill-slate-700 hover:fill-slate-800" />
          </AnimationWrapper>
        </button>
      </div>
      {/* body */}
      <div className="h-full">
        <CollapsedSidebarLink
          to="/"
          icon={<HiHome className="w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />}
        />

        <CollapsedSidebarLink
          to="/stats"
          icon={<HiChartBar className="w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />}
        />
      </div>
    </>
  );
};
