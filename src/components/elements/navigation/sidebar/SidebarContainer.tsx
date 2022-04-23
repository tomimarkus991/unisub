import { useEffect, useState } from "react";

import { Sidebar } from "components";

export const SidebarContainer = () => {
  const [placement, setPlacement] = useState<"left" | "right">("right");

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      console.log("newWidth", newWidth);
      if (newWidth >= 800) {
        setPlacement("left");
      } else {
        setPlacement("right");
      }
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return <Sidebar placeMent={placement} />;
};
