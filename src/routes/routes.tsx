import { Router } from "@redlotus/ui";
import clsx from "clsx";
import { HiChartBar, HiHome } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

import { HomePage, StatisticsPage } from "pages";

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
    to: "/statistics",
    routeName: "Statistics",
    element: <StatisticsPage />,
    smallIcon: <HiChartBar className={clsx(smallIconCss)} />,
    bigIcon: <HiChartBar className={clsx(bigIconCss)} />,
  },
  {
    to: "/settings",
    routeName: "Settings",
    element: <StatisticsPage />,
    smallIcon: <IoMdSettings className={clsx(smallIconCss)} />,
    bigIcon: <IoMdSettings className={clsx(bigIconCss)} />,
  },
];
