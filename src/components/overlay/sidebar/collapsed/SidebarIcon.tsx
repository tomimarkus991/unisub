import { motion } from "framer-motion";

import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { animations, AnimationWrapper } from "components";

interface ListItemProps {
  children?: string;
  to: string;
  icon: ReactNode;
  text: string;
}

export const SidebarIcon = ({ children, to, icon, text }: ListItemProps) => {
  return (
    <div role="button" tabIndex={0} className="z-[998]">
      <Link to={to}>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          className="group flex relative justify-center items-center py-2 px-5 hover:bg-slate-100 cursor-pointer"
        >
          <div className="flex items-center">
            <AnimationWrapper variants={animations.smallScale} keyIndex="sidebar-link-icon" child>
              {icon}
            </AnimationWrapper>
            <div className="flex flex-row items-center">
              <p className="text-xl font-medium group-hover:fill-slate-800">{children}</p>
            </div>
          </div>
          <span
            id="tooltip"
            className={clsx(
              "absolute left-24 z-[997] p-2 m-2 w-auto min-w-max text-xs font-bold text-white",
              "bg-gray-800 rounded-md shadow-md transition-all duration-200 scale-0 origin-left",
              "tracking-wider lowercase group-hover:scale-100"
            )}
          >
            {text}
          </span>
        </motion.div>
      </Link>
    </div>
  );
};
