import clsx from "clsx";
import { HiHome, HiChartBar, HiX } from "react-icons/all";

import { AnimationWrapper, SidebarLink, animations } from "components";
import { useSidebar } from "context";

export const ExpandedSidebarContent = () => {
  const { setSidebarState, placement } = useSidebar();

  return (
    <>
      {/* header */}
      <div className={clsx("flex p-3", placement === "right" ? "justify-end" : "justify-end")}>
        <button className="md:hidden" onClick={() => setSidebarState("closed")}>
          <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.scaleAndRotation}>
            <HiX className="w-12 h-12 fill-slate-700 hover:fill-slate-800" />
          </AnimationWrapper>
        </button>
        <button className="hidden md:block" onClick={() => setSidebarState("small")}>
          <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.scaleAndRotation}>
            <HiX className="w-12 h-12 fill-slate-700 hover:fill-slate-800" />
          </AnimationWrapper>
        </button>
      </div>
      {/* body */}
      <div className="h-full">
        <SidebarLink
          to="/"
          icon={<HiHome className="mr-3 w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />}
        >
          Home
        </SidebarLink>

        <SidebarLink
          to="/stats"
          icon={<HiChartBar className="mr-3 w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />}
        >
          Stats
        </SidebarLink>
      </div>
    </>
  );
};
