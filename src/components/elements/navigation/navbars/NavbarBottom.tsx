import { ChartBarIcon, HomeIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ChooseSubModal, animations } from "components/elements";

export const NavbarBottom = () => {
  return (
    <div className="flex z-50 flex-row justify-around w-full">
      <Link to="/">
        <motion.div {...animations.scaleAnim} key="nb-home-icon">
          <HomeIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </motion.div>
      </Link>
      <ChooseSubModal />
      <Link to="/stats">
        <motion.div {...animations.scaleAnim} key="nb-chart-icon">
          <ChartBarIcon className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </motion.div>
      </Link>
    </div>
  );
};
