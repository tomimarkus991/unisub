import { motion } from "framer-motion";
import { ReactNode } from "react";
import { HiX } from "react-icons/all";

import { animations } from "components";

import { ModalTitle } from ".";

interface Props {
  children: ReactNode;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}

export const ModalHeaderClose = ({ children, setOpen }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center p-4 w-full">
      <HiX className="w-8 h-8 opacity-0" />
      <ModalTitle>{children}</ModalTitle>
      <div role="button" tabIndex={0} onClick={() => setOpen(false)}>
        <motion.div key="choose-sub-x-icon" {...animations.rotate360Anim}>
          <HiX className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
        </motion.div>
      </div>
    </div>
  );
};
