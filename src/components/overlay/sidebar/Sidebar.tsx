import { AnimatePresence } from "framer-motion";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AnimationWrapper, SidebarContent, sidebarAnimations } from "components";
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
              initial={{ x: placement === "right" ? "100vw" : "-100vw", opacity: 0 }}
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
                x: placement === "right" ? "100vw" : "-100vw",
                opacity: 0,
              }}
              className={clsx(
                "flex fixed top-0 z-[900] flex-col w-64 h-full bg-white",
                placement === "right" ? "right-0" : "left-0"
              )}
            >
              <SidebarContent />
            </AnimationWrapper>

            <AnimationWrapper
              keyIndex="openWithOverlay-app-sidebar-overlay"
              id="overlay"
              animateOnAllScreens
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.4, ease: "linear" }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarState("closed")}
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
          className={clsx("flex flex-col w-64 h-full bg-white")}
        >
          <SidebarContent />
        </AnimationWrapper>
      )}
      <AnimatePresence initial={true}>
        {sidebarState === "small" && (
          <AnimationWrapper
            keyIndex="small-app-sidebar-content"
            animateOnAllScreens
            initial={{
              x: routeChanged
                ? placement === "right"
                  ? "-4vw"
                  : "4vw"
                : placement === "right"
                ? "0vw"
                : "0vw",
            }}
            animate={{
              x: "0",
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                damping: 30,
                stiffness: 200,
              },
            }}
            exit={{
              x: placement === "right" ? "100vw" : "-100vw",
              opacity: 0,
            }}
            className={clsx("flex flex-col w-24 h-[100vh] bg-white")}
          >
            <SidebarContent />
          </AnimationWrapper>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

// <div className={clsx("flex z-[900] flex-col w-24 h-full bg-white")}>
//   <SidebarContent />
// </div>
