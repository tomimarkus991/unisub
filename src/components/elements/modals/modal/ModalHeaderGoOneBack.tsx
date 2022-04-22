import { motion } from "framer-motion";
import { ReactNode } from "react";
import { HiX, HiArrowLeft } from "react-icons/all";

import { animations } from "components";

import { ModalTitle } from ".";

interface Props {
  children: ReactNode;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}

export const ModalHeaderGoOneBack = ({ children, setOpen }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div role="button" tabIndex={0} onClick={() => setOpen(false)}>
        <motion.div {...animations.rotate360Anim} key="modal-header-left-arrow-icon">
          <HiArrowLeft className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
        </motion.div>
      </div>
      <ModalTitle>{children}</ModalTitle>
      <HiX className="w-8 h-8 opacity-0" />
    </div>
  );
};
