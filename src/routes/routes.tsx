import { Router } from "@redlotus/ui";
import clsx from "clsx";
import { IoMdSettings, HiChartBar, HiHome } from "react-icons/all";

import { HomePage, StatsPage } from "pages";

const smallIconCss = "h-8 w-8 fill-inherit";
const bigIconCss = "mr-3 h-8 w-8 fill-inherit";

export const routes: Router[] = [
  {
    to: "/",
    routeName: "Home",
    element: <HomePage />,
    smallIcon: <HiHome className={clsx(smallIconCss)} />,
    bigIcon: <HiHome className={clsx(bigIconCss)} />,
  },
  {
    to: "/stats",
    routeName: "Stats",
    element: <StatsPage />,
    smallIcon: <HiChartBar className={clsx(smallIconCss)} />,
    bigIcon: <HiChartBar className={clsx(bigIconCss)} />,
  },
  {
    to: "/settings",
    routeName: "Settings",
    element: <StatsPage />,
    smallIcon: <IoMdSettings className={clsx(smallIconCss)} />,
    bigIcon: <IoMdSettings className={clsx(bigIconCss)} />,
    tooltip: "si settings",
  },
];
