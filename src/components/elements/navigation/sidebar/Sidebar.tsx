import { ChartBarIcon, HomeIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { animations } from "components";
import { useSidebar } from "context/sidebar";

interface ListItemProps {
  children: ReactNode;
  to: string;
}

const ListItem = ({ children, to }: ListItemProps) => {
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

export const Sidebar = () => {
  const { isSidebarOpen, setisSidebarOpen } = useSidebar();
  const listIconClasses = "mr-3 w-8 h-8 fill-gray-800";

  return (
    <AnimatePresence initial exitBeforeEnter>
      {isSidebarOpen && (
        <>
          <motion.div
            key="app-sidebar-content"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{
              x: "0",
              opacity: 1,
              transition: {
                duration: 3,
                type: "spring",
                damping: 30,
                stiffness: 300,
              },
            }}
            exit={{
              x: "100vw",
              opacity: 0,
            }}
            className="flex fixed top-0 right-0 z-[900] flex-col w-64 h-full bg-white"
          >
            <div className="flex justify-end p-3">
              <button onClick={() => setisSidebarOpen(open => !open)}>
                <motion.div {...animations.scaleAndRotationAnim} key="sidebar-x-icon">
                  <XIcon className="w-12 h-12 fill-slate-700 hover:fill-slate-800" />
                </motion.div>
              </button>
            </div>
            <div className="h-full">
              <ListItem to="/">
                <HomeIcon className={clsx(listIconClasses)} />
                <p className="text-xl font-medium">Home</p>
              </ListItem>

              <ListItem to="/stats">
                <ChartBarIcon className={clsx(listIconClasses)} />
                <p className="text-xl font-medium">Stats</p>
              </ListItem>
            </div>
          </motion.div>

          <motion.div
            key="app-sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.4, ease: "linear" }}
            exit={{ opacity: 0 }}
            onClick={() => setisSidebarOpen(false)}
            className="absolute inset-0 z-50 w-full h-full bg-gray-500"
          />
        </>
      )}
    </AnimatePresence>
  );
};
