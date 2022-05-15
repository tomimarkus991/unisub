import clsx from "clsx";
import { HiHome, HiChartBar, HiX, HiLogout, IoMdSettings } from "react-icons/all";

import { AnimationWrapper, SidebarLink, animations, SidebarButton } from "components";
import { useSidebar } from "context";

export const ExpandedSidebarContent = () => {
  const { setSidebarState } = useSidebar();

  return (
    <div className="flex flex-col justify-between py-6 px-3 h-full">
      <div className={clsx("flex flex-col")}>
        <div className="flex flex-row justify-between px-3">
          <img className="w-14 h-14" src={`/icons/favicon.svg`} alt="icon" />
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
        <div className="mt-8 space-y-4 h-full">
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
          <SidebarLink
            to="/settings"
            icon={
              <IoMdSettings className="mr-3 w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />
            }
          >
            Settings
          </SidebarLink>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center px-4 space-x-3">
          <img className="w-14 h-14" alt="user" src={`/general/avatar.svg`} />
          <p className="text-xl font-semibold">Galaxy</p>
        </div>
        <SidebarButton
          onClick={() => console.log("logout")}
          icon={<HiLogout className="mr-3 w-8 h-8 fill-gray-800 group-hover:fill-slate-800" />}
        >
          Logout
        </SidebarButton>
      </div>
    </div>
  );
};
