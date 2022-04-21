import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, ReactNode, useRef } from "react";

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
  size?: keyof typeof modalMaxWidth;
}

export const Modal = ({ children, modalButton, open, setOpen, size = "xl" }: Props) => {
  const initialFocusRef = useRef(null);
  return (
    <>
      {modalButton}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          initialFocus={initialFocusRef}
          as="div"
          className="flex fixed inset-0 z-50 justify-center items-center"
          onClose={setOpen}
        >
          <div
            ref={initialFocusRef}
            className="flex justify-center items-center mx-2 w-full select-none"
          >
            {/* <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            </Transition.Child> */}
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            {/* <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            > */}
            <div
              id="modal-children"
              className={clsx(
                "block w-full bg-white rounded-xl transition-all transform",
                modalMaxWidth[size]
              )}
            >
              {children}
            </div>
            {/* </Transition.Child> */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
