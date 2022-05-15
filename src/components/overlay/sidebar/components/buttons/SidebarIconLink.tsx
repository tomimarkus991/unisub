import { motion } from "framer-motion";

import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { animations, AnimationWrapper, SidebarTooltip } from "components";

interface ListItemProps {
  children?: string;
  to: string;
  icon: ReactNode;
  tooltip: string;
}

export const SidebarIconLink = ({ children, to, icon, tooltip }: ListItemProps) => {
  return (
    <div role="button" tabIndex={0} className="z-[998]">
      <Link to={to}>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          className="group flex relative justify-center items-center p-1 cursor-pointer"
        >
          <div className="flex items-center p-3 group-hover:bg-slate-100 rounded-md">
            <AnimationWrapper variants={animations.smallScale} keyIndex="sidebar-link-icon" child>
              {icon}
            </AnimationWrapper>
            <div className="flex flex-row items-center">
              <p className="text-xl font-medium group-hover:fill-slate-800">{children}</p>
            </div>
          </div>
          <SidebarTooltip tooltip={tooltip} />
        </motion.div>
      </Link>
    </div>
  );
};
