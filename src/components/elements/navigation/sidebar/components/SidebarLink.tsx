import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { animations } from "components";
import { useSidebar } from "context";

interface ListItemProps {
  children: ReactNode;
  to: string;
}

export const SidebarLink = ({ children, to }: ListItemProps) => {
  const { setisSidebarOpen } = useSidebar();
  return (
    <div role="button" tabIndex={-3} onClick={open => setisSidebarOpen(!open)}>
      <Link to={to}>
        <div className="flex items-center py-2 px-5 hover:bg-slate-100 cursor-pointer">
          <motion.div {...animations.rotate360Anim} key="sidebar-link-icon">
            <div className="flex flex-row items-center">{children}</div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};
