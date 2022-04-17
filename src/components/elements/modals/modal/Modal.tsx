import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useRef } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalButton: ReactNode;
  children?: ReactNode;
}

export const Modal = ({ children, modalButton, open, setOpen }: Props) => {
  const initialFocusRef = useRef(null);
  return (
    <>
      {modalButton}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          initialFocus={initialFocusRef}
          as="div"
          className="inline-block overflow-y-auto fixed inset-0 inset-y-8 z-50 m-auto w-full max-h-full"
          onClose={setOpen}
        >
          <div
            ref={initialFocusRef}
            className="flex flex-1 justify-center items-center px-4 w-full h-full select-none"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <div
                id="modal-children"
                className="block w-full max-w-xl h-full bg-white rounded-xl transition-all transform"
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
