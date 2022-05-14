import { AnimatePresence } from "framer-motion";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  AnimationWrapper,
  sidebarAnimations,
  ExpandedSidebarContent,
  SmallSidebarContent,
} from "components";
import { useSidebar } from "context";
import { useIsMobile } from "hooks";

export const Sidebar = () => {
  const { sidebarState, setSidebarState, placement } = useSidebar();
  const { isMobile } = useIsMobile();
  const location = useLocation();
  const [routeChanged, setRouteChanged] = useState<boolean>(false);

  useEffect(() => {
    setRouteChanged(true);
  }, [location]);

  useEffect(() => {
    if (!isMobile) {
      setSidebarState("small");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <AnimatePresence>
      <AnimatePresence initial exitBeforeEnter>
        {sidebarState === "openWithOverlay" && (
          <>
            <AnimationWrapper
              keyIndex="openWithOverlay-app-sidebar-content"
              animateOnAllScreens
              initial={{ x: placement === "right" ? "40vw" : "-40vw", opacity: 0.4 }}
              animate={{
                x: "0",
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 150,
                },
              }}
              exit={{
                x: placement === "right" ? "25vw" : "-25vw",
                transition: {
                  ease: "easeOut",
                },
                opacity: 0,
              }}
              className={clsx(
                "flex fixed top-0 z-[900] flex-col w-80 h-full bg-white",
                placement === "right" ? "right-0" : "left-0"
              )}
            >
              <ExpandedSidebarContent />
            </AnimationWrapper>

            <AnimationWrapper
              keyIndex="openWithOverlay-app-sidebar-overlay"
              id="overlay"
              animateOnAllScreens
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.5,
              }}
              transition={{ duration: 0.4, ease: "linear" }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarState("small")}
              className="absolute inset-0 z-50 w-full h-full bg-gray-500"
            />
          </>
        )}
      </AnimatePresence>
      {sidebarState === "expanded" && (
        <AnimationWrapper
          keyIndex="expanded-app-sidebar-content"
          animateOnAllScreens
          variants={sidebarAnimations.extendedSidebar}
          className={clsx("flex flex-col w-72 h-full bg-white shadow-lg")}
        >
          <ExpandedSidebarContent />
        </AnimationWrapper>
      )}
      <AnimatePresence initial={true}>
        {sidebarState === "small" && (
          <AnimationWrapper
            keyIndex="small-app-sidebar-content"
            animateOnAllScreens
            initial={{
              x: routeChanged ? "1vw" : "0vw",
              opacity: routeChanged ? 0.8 : 1,
            }}
            animate={{
              x: "0",
              opacity: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 30,
                stiffness: 150,
              },
            }}
            className={clsx("flex z-[998] flex-col w-24 h-[100vh] bg-white shadow-lg")}
          >
            <SmallSidebarContent />
          </AnimationWrapper>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
