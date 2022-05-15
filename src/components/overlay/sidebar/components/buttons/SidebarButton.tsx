import { motion } from "framer-motion";

import { HTMLProps, ReactNode } from "react";

import { animations, AnimationWrapper } from "components";

interface ListItemProps {
  children?: string;
  icon: ReactNode;
}

type Props = ListItemProps & HTMLProps<HTMLDivElement>;

export const SidebarButton = ({ children, icon, ...props }: Props) => {
  return (
    <div
      role="button"
      tabIndex={0}
      {...props}
      // onClick={() => {
      //   if (sidebarState === "small" || sidebarState === "expanded") {
      //     setSidebarState("small");
      //   } else {
      //     setSidebarState("closed");
      //   }
      // }}
    >
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
    </div>
  );
};
