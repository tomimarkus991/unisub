import { AnimatePresence } from "framer-motion";

import clsx from "clsx";
import { useEffect } from "react";

import { AnimationWrapper, SidebarContent } from "components";
import { useSidebar } from "context";
import { useIsMobile } from "hooks";

export const Sidebar = () => {
  const { sidebarState, setSidebarState, placement } = useSidebar();
  const { isMobile } = useIsMobile();

  console.log("Sidebar:", sidebarState);

  useEffect(() => {
    if (!isMobile) {
      setSidebarState("small");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <>
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
      <AnimatePresence initial exitBeforeEnter>
        {sidebarState === "expanded" && (
          <>
            <AnimationWrapper
              keyIndex="expanded-app-sidebar-content"
              animateOnAllScreens
              initial={{ x: placement === "right" ? "100vw" : "-100vw", opacity: 0 }}
              animate={{
                x: "0",
                opacity: 1,
                transition: {
                  duration: 3,
                  type: "spring",
                  // damping: 500,
                  // stiffness: 50,
                },
              }}
              exit={{
                x: placement === "right" ? "100vw" : "-100vw",
                opacity: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeIn",
                },
              }}
              className={clsx("flex flex-col w-64 h-full bg-white")}
            >
              <SidebarContent />
            </AnimationWrapper>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence initial exitBeforeEnter>
        {sidebarState === "small" && (
          <>
            <AnimationWrapper
              keyIndex="small-app-sidebar-content"
              animateOnAllScreens
              initial={{ x: placement === "right" ? "100vw" : "-100vw" }}
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
              className={clsx("flex flex-col w-24 h-[100vh] bg-white")}
            >
              <SidebarContent />
            </AnimationWrapper>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// <div className={clsx("flex z-[900] flex-col w-24 h-full bg-white")}>
//   <SidebarContent />
// </div>
