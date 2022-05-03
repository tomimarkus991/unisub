import { motion } from "framer-motion";

import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { animations, AnimationWrapper } from "components";
import { useSidebar } from "context";

interface ListItemProps {
  children: string;
  to: string;
  icon: ReactNode;
}

export const SidebarLink = ({ children, to, icon }: ListItemProps) => {
  const { setisSidebarOpen } = useSidebar();
  return (
    <div role="button" tabIndex={0} onClick={open => setisSidebarOpen(!open)}>
      <Link to={to}>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          className="group flex items-center py-2 px-5 hover:bg-slate-100 cursor-pointer"
        >
          <div className="flex items-center">
            <AnimationWrapper variants={animations.smallScale} keyIndex="sidebar-link-icon" child>
              {icon}
            </AnimationWrapper>
            <div className="flex flex-row items-center">
              <p className="text-xl font-medium group-hover:fill-slate-800">{children}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
