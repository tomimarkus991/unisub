import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { ReactNode, useRef } from "react";

const modalMaxWidth = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalButton: ReactNode;
  children?: ReactNode;
  maxWidth?: keyof typeof modalMaxWidth;
}

export const Modal = ({ children, modalButton, open, setOpen, maxWidth = "xl" }: Props) => {
  const initialFocusRef = useRef(null);
  return (
    <>
      {modalButton}
      <Dialog
        key="modal-dialog"
        initialFocus={initialFocusRef}
        as="div"
        className="flex fixed inset-0 z-50 justify-center items-center select-none"
        open={open}
        onClose={setOpen}
      >
        <div
          id="overlay"
          ref={initialFocusRef}
          key="app-modal-overlay"
          role="button"
          tabIndex={0}
          // initial={{ opacity: 0.4 }}
          // animate={{ opacity: 0.5 }}
          // transition={{ duration: 0.4, ease: "easeIn" }}
          // exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="absolute inset-0 w-full h-full bg-gray-500 opacity-40"
        />
        <div
          id="modal-children"
          key="app-modal-children"
          // initial={{ scale: 0.95 }}
          // animate={{
          //   scale: 1,
          //   transition: {
          //     duration: 0.2,
          //     ease: "easeIn",
          //   },
          // }}
          // exit={{
          //   opacity: 0,
          //   scale: 0.95,
          // }}
          className={clsx(
            "z-[70] min-w-[95%] max-w-[94%] bg-white rounded-xl min:min-w-[20rem]",
            modalMaxWidth[maxWidth]
          )}
        >
          {children}
        </div>
      </Dialog>
    </>
  );
};
