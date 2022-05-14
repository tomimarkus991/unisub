import clsx from "clsx";
import { HiMenu, HiHome, HiChartBar } from "react-icons/all";

import { AnimationWrapper, animations, SidebarIcon } from "components";
import { useSidebar } from "context";

export const SmallSidebarContent = () => {
  const { setSidebarState } = useSidebar();
  return (
    <>
      {/* header */}
      <div className={clsx("flex flex-col justify-center items-center p-3 pt-12")}>
        <img className="w-14 h-14" src={`/icons/favicon.svg`} alt="icon" />
        <div className="mt-5">
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
      </div>
      {/* body */}
      <div className="z-[998] h-full">
        <SidebarIcon
          to="/"
          text="home"
          icon={<HiHome className="w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />}
        />

        <SidebarIcon
          to="/stats"
          text="stats"
          icon={<HiChartBar className="w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />}
        />
      </div>
    </>
  );
};
