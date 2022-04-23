import { motion } from "framer-motion";
import { ReactNode } from "react";
import { HiX } from "react-icons/all";

import { animations, ModalTitle, ModalHeaderContainer } from "components";

interface Props {
  children: ReactNode;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}

export const ModalHeaderClose = ({ children, setOpen }: Props) => {
  return (
    <ModalHeaderContainer>
      <HiX className="w-8 h-8 opacity-0" />
      <ModalTitle>{children}</ModalTitle>
      <div role="button" tabIndex={0} onClick={() => setOpen(false)}>
        <motion.div key="choose-sub-x-icon" {...animations.rotate360Anim}>
          <HiX className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
        </motion.div>
      </div>
    </ModalHeaderContainer>
  );
};
