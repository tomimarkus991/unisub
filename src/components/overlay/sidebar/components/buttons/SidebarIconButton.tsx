import { motion } from "framer-motion";

import { HTMLProps, ReactNode } from "react";

import { animations, AnimationWrapper, SidebarTooltip } from "components";

interface ListItemProps {
  children?: string;
  icon: ReactNode;
  tooltip: string;
}

type Props = ListItemProps & HTMLProps<HTMLDivElement>;

export const SidebarIconButton = ({ children, icon, tooltip, ...props }: Props) => {
  return (
    <div role="button" tabIndex={0} className="z-[998]" {...props}>
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
    </div>
  );
};
