import { motion } from "framer-motion";

import { HTMLProps, ReactNode } from "react";
import { Link } from "react-router-dom";

import { animations, AnimationWrapper, SidebarTooltip } from "components";

interface SidebarItemProps {
  icon: ReactNode;
  tooltip: string;
  children?: string;
  to?: string;
}

interface ContentProps {
  icon: ReactNode;
  tooltip: string;
  children?: string;
}

type Props = SidebarItemProps & HTMLProps<HTMLDivElement>;

const Content = ({ children, icon, tooltip }: ContentProps) => {
  return (
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
  );
};

export const SidebarIconLink = ({ children, to, icon, tooltip, ...props }: Props) => {
  return (
    <div role="button" tabIndex={0} className="z-[998]" {...props}>
      {to ? (
        <Link to={to}>
          <Content icon={icon} tooltip={tooltip}>
            {children}
          </Content>
        </Link>
      ) : (
        <Content icon={icon} tooltip={tooltip}>
          {children}
        </Content>
      )}
    </div>
  );
};
