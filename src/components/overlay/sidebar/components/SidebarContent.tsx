import { ExpandedSidebarContent, SmallSidebarContent } from "components";
import { useSidebar } from "context";

export const SidebarContent = () => {
  const { sidebarState } = useSidebar();
  return (
    <>
      {sidebarState === "expanded" && <ExpandedSidebarContent />}
      {sidebarState === "openWithOverlay" && <ExpandedSidebarContent />}
      {sidebarState === "small" && <SmallSidebarContent />}
    </>
  );
};
