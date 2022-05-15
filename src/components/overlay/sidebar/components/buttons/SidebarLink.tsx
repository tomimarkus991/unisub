import { motion } from "framer-motion";

import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { animations, AnimationWrapper } from "components";
import { useSidebar } from "context";

interface ListItemProps {
  children?: string;
  to: string;
  icon: ReactNode;
}

export const SidebarLink = ({ children, to, icon }: ListItemProps) => {
  const { setSidebarState, sidebarState } = useSidebar();
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        if (sidebarState === "small" || sidebarState === "expanded") {
          setSidebarState("small");
        } else {
          setSidebarState("closed");
        }
      }}
    >
      <Link to={to}>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          className="group flex items-center py-3 px-5 hover:bg-slate-100 rounded-md cursor-pointer"
        >
          <AnimationWrapper
            className="flex items-center"
            variants={animations.smallScale}
            keyIndex="sidebar-link-icon"
            child
          >
            {icon}
            <div className="flex flex-row items-center">
              <p className="text-xl font-medium group-hover:fill-slate-800">{children}</p>
            </div>
          </AnimationWrapper>
        </motion.div>
      </Link>
    </div>
  );
};
